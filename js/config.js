// Credenciais do projeto Supabase.
// A anon key é destinada a ficar pública no código do site — ela
// sozinha não dá acesso a nada, porque as tabelas estão travadas
// (RLS) e só as funções fazer_login/salvar_solicitacao/listar_solicitacoes
// conseguem tocar nos dados.
const SUPABASE_URL = 'https://dmevonpupbvjckspfcfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZXZvbnB1cGJ2amNrc3BmY2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNzc3NzMsImV4cCI6MjEwNTY1Mzc3M30.j0CfMgFi4A4SHdmDvpiUnOsZylHw8HnY_UVDc28ewcw';
