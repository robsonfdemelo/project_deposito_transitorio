export default function OnScanSuccess(clientAPI) {
  const res = clientAPI.getActionResult("OpenBarcodeScanner").data;
  const codigo = (res && res.text) ? res.text : res;

  return clientAPI.executeAction({
    "_Type": "Action.Type.Control.SetValue",
    "Target": "#Page:EscanearPacote/#Control:FormCellSimpleProperty0",
    "Value": codigo
  }).then(() => clientAPI.executeAction("Actions/NavToDadosPacote1.action"));
}
