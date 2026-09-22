/**
 * Sessão do usuário logado, guardada no navegador (sessionStorage:
 * some sozinha quando a aba é fechada — mais seguro que localStorage
 * para um app que fica em celulares compartilhados no bolso).
 */
function salvarSessao(pin, nome) {
  sessionStorage.setItem('cd_pin', pin);
  sessionStorage.setItem('cd_nome', nome);
}
function getPin() { return sessionStorage.getItem('cd_pin'); }
function getNomeSessao() { return sessionStorage.getItem('cd_nome'); }
function limparSessao() {
  sessionStorage.removeItem('cd_pin');
  sessionStorage.removeItem('cd_nome');
}
/** Chame no topo de qualquer página que exija login. */
function exigirLogin() {
  if (!getPin()) {
    window.location.href = 'index.html';
  }
}
