export default function BuildQuery(context) {
  const app = context.evaluateTargetPathForAPI?.('#Application/#ClientData') || {};
  const page = context.getPageProxy?.();

  const termo = (
    (app.filtroSolicEntrada?.texto || app.busca || '') ||
    page?.evaluateTargetPathForAPI?.('#Control:InputBusca/#Value') || ''
  ).toString().trim();

  let qo = '';
  if (!termo) {
    qo = '$top=50&$orderby=Data desc';
  } else if (/^\d+$/.test(termo)) {
    qo = `$filter=Registro eq ${termo}&$top=100&$orderby=Data desc`;
    // se Registro for string, use:
    // qo = `$filter=Registro eq '${termo}'&$top=100&$orderby=Data desc`;
  } else {
    const q = termo.toLowerCase().replace(/'/g, "''");
    qo = `$filter=contains(tolower(Registro),'${q}')&$top=100&$orderby=Data desc`;
  }

  // DEBUG – guarda para mostrar na tela e loga no console
  try { app.debugQuery = qo; } catch {}
  console.debug('[BuildQuery] termo:', termo, 'QueryOptions:', qo);
  // debugger; // <- descomente quando quiser pausar no DevTools

  return qo;
}
