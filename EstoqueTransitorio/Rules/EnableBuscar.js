export default function EnableBuscar(context) {
  const page = context.getPageProxy();
  const txt = (page.getClientData().busca || '').trim();
  return txt.length >= 2;
}
