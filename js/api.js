/**
 * Chama o backend (Apps Script) com uma ação e os dados dela.
 * Usamos "text/plain" no Content-Type de propósito: o Apps Script
 * não lida bem com "application/json" em requisições vindas de
 * outro domínio (o navegador faz uma checagem extra, o "preflight",
 * que o Apps Script não responde corretamente). Enviando como texto
 * simples, essa checagem não acontece e a chamada funciona direto.
 */
function chamarAPI(action, dados) {
  dados = dados || {};
  const corpo = Object.assign({ action: action }, dados);

  return fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(corpo)
  }).then(function(resposta) {
    return resposta.json();
  });
}
