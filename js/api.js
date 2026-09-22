/**
 * Cliente Supabase e as três chamadas que o site usa.
 * Cada uma delas chama diretamente uma função (RPC) do banco —
 * não existe mais nenhum "action" genérico como no Apps Script,
 * cada função tem seu próprio nome do lado do Supabase.
 */
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function apiLogin(pin) {
  return supabaseClient.rpc('fazer_login', { p_pin: pin }).then(function(resp) {
    if (resp.error) throw resp.error;
    return resp.data;
  });
}

function apiSalvar(dados) {
  return supabaseClient.rpc('salvar_solicitacao', {
    p_pin: dados.pin,
    p_nome: dados.nomeEleitor,
    p_endereco: dados.endereco,
    p_bairro: dados.bairro,
    p_telefone: dados.telefone,
    p_tipo: dados.tipo,
    p_detalhe: dados.detalhe,
    p_observacoes: dados.observacoes
  }).then(function(resp) {
    if (resp.error) throw resp.error;
    return resp.data;
  });
}

function apiListar(pin) {
  return supabaseClient.rpc('listar_solicitacoes', { p_pin: pin }).then(function(resp) {
    if (resp.error) throw resp.error;
    return resp.data;
  });
}
