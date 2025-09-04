/**
 * Salva o texto da busca no ClientData da aplicação e da página.
 * Chamado no OnValueChange do InputBusca.
 * @param {IClientAPI} context
 */
export default function StoreBusca(context) {
  const v = (context.getValue?.() ?? '').toString().trim();

  try {
    const app = context.evaluateTargetPathForAPI('#Application/#ClientData');
    app.busca = v; // usado pela ShowMockResults.js e BuildQuery.js
  } catch (e) { /* ignore */ }

  try {
    context.getPageProxy().getClientData().busca = v;
  } catch (e) { /* ignore */ }
}
