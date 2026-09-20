-- Выполнить один раз: Supabase → SQL Editor → New query → Run.
create table if not exists public.finance_state (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.finance_state enable row level security;

drop policy if exists "own row read"   on public.finance_state;
drop policy if exists "own row insert" on public.finance_state;
drop policy if exists "own row update" on public.finance_state;

create policy "own row read"   on public.finance_state for select using (auth.uid() = user_id);
create policy "own row insert" on public.finance_state for insert with check (auth.uid() = user_id);
create policy "own row update" on public.finance_state for update using (auth.uid() = user_id)
                                                                with check (auth.uid() = user_id);
