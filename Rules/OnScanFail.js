export default function OnScanFail(clientAPI) {
    return clientAPI.executeAction({
        "_Type": "Action.Type.Message",
        "Message": "Falha ao escanear o código"
    });
}