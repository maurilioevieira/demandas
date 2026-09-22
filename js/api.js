/**
 * Cliente Supabase e as chamadas que o site usa. Cada função aqui
 * corresponde a uma função (RPC) do banco.
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

function apiEditar(dados) {
  return supabaseClient.rpc('editar_solicitacao', {
    p_pin: dados.pin,
    p_id: dados.id,
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

function apiExcluir(pin, id) {
  return supabaseClient.rpc('excluir_solicitacao', { p_pin: pin, p_id: id }).then(function(resp) {
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
