/* Подключение к Supabase (проект Budget Tracker).
   anonKey — публичный ключ: он виден всем, кто откроет страницу, и это
   нормально. Доступ к данным закрывают политики RLS: строку finance_state
   читает и пишет только её владелец. */
window.FINANCE_CONFIG = {
  url: 'https://vzcuvwwqobrvwqavrite.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y3V2d3dxb2JydndxYXZyaXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MDc3MTAsImV4cCI6MjEwNTQ4MzcxMH0.D9rhUty8ccBiiWCuVAgk-JMF6CqVxptrSylfDPKnD_o'
};
