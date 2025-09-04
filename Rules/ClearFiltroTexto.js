export default function ClearFiltroTexto(context) {
  try {
    const app = context.evaluateTargetPathForAPI('#Application/#ClientData');
    if (app.filtroSolicEntrada) app.filtroSolicEntrada.texto = '';
  } catch (e) { /* ignore */ }

  // Se quiser também limpar o valor do controle na tela:
  try {
    context.getPageProxy()
      .evaluateTargetPathForAPI('#Control:FiltroTexto')
      ?.setValue?.('');
  } catch (e) { /* ignore */ }
}
