export default function EnableReceber(context) {
  try {
    const sec = context.getPageProxy()
      .getControl('SectionedTable')
      .getSection('MateriaisSection');
    const sel = sec.getSelectedItems?.() || [];
    return sel.length > 0;
  } catch (e) {
    return false;
  }
}
