/**
 * Guarda o texto digitado nos filtros no ClientData da aplicação.
 * Lido depois pela BuildQuery.js em #Application/#ClientData/filtroSolicEntrada/texto
 * @param {IClientAPI} context
 */
export default function StoreFiltroTexto(context) {
  const v = (context.getValue?.() ?? '').toString().trim();

  // Salva no escopo da aplicação (persiste ao fechar/reabrir a página)
  try {
    const app = context.evaluateTargetPathForAPI('#Application/#ClientData');
    app.filtroSolicEntrada = app.filtroSolicEntrada || {};
    app.filtroSolicEntrada.texto = v;
  } catch (e) {
    // opcional: log, mas para mock podemos ignorar
  }

  // (Opcional) também salva no escopo da página atual
  try {
    context.getPageProxy().getClientData().filtroTexto = v;
  } catch (e) { /* ignore */ }
}
