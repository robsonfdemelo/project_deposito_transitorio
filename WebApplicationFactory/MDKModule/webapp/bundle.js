(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/EstoqueTransitorio/i18n/i18n.properties":
/*!*******************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/i18n/i18n.properties ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let estoquetransitorio_actions_application_appupdate_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/AppUpdate.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdate.action")
let estoquetransitorio_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateFailureMessage.action")
let estoquetransitorio_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateProgressBanner.action")
let estoquetransitorio_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateSuccessMessage.action")
let estoquetransitorio_actions_application_logout_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/Logout.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/Logout.action")
let estoquetransitorio_actions_application_navtoabout_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/NavToAbout.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/NavToAbout.action")
let estoquetransitorio_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/NavToActivityLog.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/NavToActivityLog.action")
let estoquetransitorio_actions_application_navtosupport_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/NavToSupport.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/NavToSupport.action")
let estoquetransitorio_actions_application_onwillupdate_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/OnWillUpdate.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/OnWillUpdate.action")
let estoquetransitorio_actions_application_reset_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/Reset.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/Reset.action")
let estoquetransitorio_actions_application_resetmessage_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/ResetMessage.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/ResetMessage.action")
let estoquetransitorio_actions_application_usermenupopover_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Application/UserMenuPopover.action */ "./build.definitions/EstoqueTransitorio/Actions/Application/UserMenuPopover.action")
let estoquetransitorio_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/CloseModalPage_Cancel.action */ "./build.definitions/EstoqueTransitorio/Actions/CloseModalPage_Cancel.action")
let estoquetransitorio_actions_closemodalpage_complete_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/CloseModalPage_Complete.action */ "./build.definitions/EstoqueTransitorio/Actions/CloseModalPage_Complete.action")
let estoquetransitorio_actions_closepage_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/ClosePage.action */ "./build.definitions/EstoqueTransitorio/Actions/ClosePage.action")
let estoquetransitorio_actions_concordar_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Concordar.action */ "./build.definitions/EstoqueTransitorio/Actions/Concordar.action")
let estoquetransitorio_actions_filtrosolicentradalojakit_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/FiltroSolicEntradaLojaKit.action */ "./build.definitions/EstoqueTransitorio/Actions/FiltroSolicEntradaLojaKit.action")
let estoquetransitorio_actions_genericbannermessage_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/GenericBannerMessage.action */ "./build.definitions/EstoqueTransitorio/Actions/GenericBannerMessage.action")
let estoquetransitorio_actions_genericmessagebox_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/GenericMessageBox.action */ "./build.definitions/EstoqueTransitorio/Actions/GenericMessageBox.action")
let estoquetransitorio_actions_genericnavigation_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/GenericNavigation.action */ "./build.definitions/EstoqueTransitorio/Actions/GenericNavigation.action")
let estoquetransitorio_actions_generictoastmessage_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/GenericToastMessage.action */ "./build.definitions/EstoqueTransitorio/Actions/GenericToastMessage.action")
let estoquetransitorio_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Logging/LogUploadFailure.action */ "./build.definitions/EstoqueTransitorio/Actions/Logging/LogUploadFailure.action")
let estoquetransitorio_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/EstoqueTransitorio/Actions/Logging/LogUploadSuccessful.action")
let estoquetransitorio_actions_logging_uploadlog_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Logging/UploadLog.action */ "./build.definitions/EstoqueTransitorio/Actions/Logging/UploadLog.action")
let estoquetransitorio_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Logging/UploadLogProgress.action */ "./build.definitions/EstoqueTransitorio/Actions/Logging/UploadLogProgress.action")
let estoquetransitorio_actions_navbacktosolicitacoes_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/NavBackToSolicitacoes.action */ "./build.definitions/EstoqueTransitorio/Actions/NavBackToSolicitacoes.action")
let estoquetransitorio_actions_navtodadospacote1_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/NavToDadosPacote1.action */ "./build.definitions/EstoqueTransitorio/Actions/NavToDadosPacote1.action")
let estoquetransitorio_actions_navtoescanearpacote_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/NavToEscanearPacote.action */ "./build.definitions/EstoqueTransitorio/Actions/NavToEscanearPacote.action")
let estoquetransitorio_actions_navtopreferencias_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/NavToPreferencias.action */ "./build.definitions/EstoqueTransitorio/Actions/NavToPreferencias.action")
let estoquetransitorio_actions_navtosolicitacoes_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/NavToSolicitacoes.action */ "./build.definitions/EstoqueTransitorio/Actions/NavToSolicitacoes.action")
let estoquetransitorio_actions_proximaom_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/ProximaOM.action */ "./build.definitions/EstoqueTransitorio/Actions/ProximaOM.action")
let estoquetransitorio_actions_recebermateriais_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/ReceberMateriais.action */ "./build.definitions/EstoqueTransitorio/Actions/ReceberMateriais.action")
let estoquetransitorio_actions_scanbarcode_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/ScanBarcode.action */ "./build.definitions/EstoqueTransitorio/Actions/ScanBarcode.action")
let estoquetransitorio_actions_somenteimprimir_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/SomenteImprimir.action */ "./build.definitions/EstoqueTransitorio/Actions/SomenteImprimir.action")
let estoquetransitorio_actions_voltar_action = __webpack_require__(/*! ./EstoqueTransitorio/Actions/Voltar.action */ "./build.definitions/EstoqueTransitorio/Actions/Voltar.action")
let estoquetransitorio_globals_application_appdefinition_version_global = __webpack_require__(/*! ./EstoqueTransitorio/Globals/Application/AppDefinition_Version.global */ "./build.definitions/EstoqueTransitorio/Globals/Application/AppDefinition_Version.global")
let estoquetransitorio_globals_application_applicationname_global = __webpack_require__(/*! ./EstoqueTransitorio/Globals/Application/ApplicationName.global */ "./build.definitions/EstoqueTransitorio/Globals/Application/ApplicationName.global")
let estoquetransitorio_globals_application_supportemail_global = __webpack_require__(/*! ./EstoqueTransitorio/Globals/Application/SupportEmail.global */ "./build.definitions/EstoqueTransitorio/Globals/Application/SupportEmail.global")
let estoquetransitorio_globals_application_supportphone_global = __webpack_require__(/*! ./EstoqueTransitorio/Globals/Application/SupportPhone.global */ "./build.definitions/EstoqueTransitorio/Globals/Application/SupportPhone.global")
let estoquetransitorio_i18n_i18n_properties = __webpack_require__(/*! ./EstoqueTransitorio/i18n/i18n.properties */ "./build.definitions/EstoqueTransitorio/i18n/i18n.properties")
let estoquetransitorio_jsconfig_json = __webpack_require__(/*! ./EstoqueTransitorio/jsconfig.json */ "./build.definitions/EstoqueTransitorio/jsconfig.json")
let estoquetransitorio_pages_application_about_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/Application/About.page */ "./build.definitions/EstoqueTransitorio/Pages/Application/About.page")
let estoquetransitorio_pages_application_support_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/Application/Support.page */ "./build.definitions/EstoqueTransitorio/Pages/Application/Support.page")
let estoquetransitorio_pages_application_useractivitylog_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/Application/UserActivityLog.page */ "./build.definitions/EstoqueTransitorio/Pages/Application/UserActivityLog.page")
let estoquetransitorio_pages_confirmacaorecebimento_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/ConfirmacaoRecebimento.page */ "./build.definitions/EstoqueTransitorio/Pages/ConfirmacaoRecebimento.page")
let estoquetransitorio_pages_dadospacote_dadospacote1_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/DadosPacote/DadosPacote1.page */ "./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote1.page")
let estoquetransitorio_pages_dadospacote_dadospacote2_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/DadosPacote/DadosPacote2.page */ "./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote2.page")
let estoquetransitorio_pages_dadospacote_dadospacote3_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/DadosPacote/DadosPacote3.page */ "./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote3.page")
let estoquetransitorio_pages_escanearpacote_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/EscanearPacote.page */ "./build.definitions/EstoqueTransitorio/Pages/EscanearPacote.page")
let estoquetransitorio_pages_filtrosolicentradalojakit_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/FiltroSolicEntradaLojaKit.page */ "./build.definitions/EstoqueTransitorio/Pages/FiltroSolicEntradaLojaKit.page")
let estoquetransitorio_pages_main_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/Main.page */ "./build.definitions/EstoqueTransitorio/Pages/Main.page")
let estoquetransitorio_pages_preferencias_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/Preferencias.page */ "./build.definitions/EstoqueTransitorio/Pages/Preferencias.page")
let estoquetransitorio_pages_solicentrega_detalhe_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/SolicEntrega_Detalhe.page */ "./build.definitions/EstoqueTransitorio/Pages/SolicEntrega_Detalhe.page")
let estoquetransitorio_pages_solicentrega_entradalojakit_page = __webpack_require__(/*! ./EstoqueTransitorio/Pages/SolicEntrega_EntradaLojaKit.page */ "./build.definitions/EstoqueTransitorio/Pages/SolicEntrega_EntradaLojaKit.page")
let estoquetransitorio_rules_application_appupdatefailure_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/AppUpdateFailure.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/AppUpdateFailure.js")
let estoquetransitorio_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/AppUpdateSuccess.js")
let estoquetransitorio_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/ClientIsMultiUserMode.js")
let estoquetransitorio_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/GetClientSupportVersions.js")
let estoquetransitorio_rules_application_getclientversion_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/GetClientVersion.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/GetClientVersion.js")
let estoquetransitorio_rules_application_onwillupdate_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/OnWillUpdate.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/OnWillUpdate.js")
let estoquetransitorio_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/EstoqueTransitorio/Rules/Application/ResetAppSettingsAndLogout.js")
let estoquetransitorio_rules_buildquery_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/BuildQuery.js */ "./build.definitions/EstoqueTransitorio/Rules/BuildQuery.js")
let estoquetransitorio_rules_clearfiltrotexto_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/ClearFiltroTexto.js */ "./build.definitions/EstoqueTransitorio/Rules/ClearFiltroTexto.js")
let estoquetransitorio_rules_enablebuscar_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/EnableBuscar.js */ "./build.definitions/EstoqueTransitorio/Rules/EnableBuscar.js")
let estoquetransitorio_rules_enablereceber_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/EnableReceber.js */ "./build.definitions/EstoqueTransitorio/Rules/EnableReceber.js")
let estoquetransitorio_rules_logging_loglevels_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Logging/LogLevels.js */ "./build.definitions/EstoqueTransitorio/Rules/Logging/LogLevels.js")
let estoquetransitorio_rules_logging_settracecategories_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Logging/SetTraceCategories.js */ "./build.definitions/EstoqueTransitorio/Rules/Logging/SetTraceCategories.js")
let estoquetransitorio_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/EstoqueTransitorio/Rules/Logging/SetUserLogLevel.js")
let estoquetransitorio_rules_logging_togglelogging_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Logging/ToggleLogging.js */ "./build.definitions/EstoqueTransitorio/Rules/Logging/ToggleLogging.js")
let estoquetransitorio_rules_logging_tracecategories_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Logging/TraceCategories.js */ "./build.definitions/EstoqueTransitorio/Rules/Logging/TraceCategories.js")
let estoquetransitorio_rules_logging_userlogsetting_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Logging/UserLogSetting.js */ "./build.definitions/EstoqueTransitorio/Rules/Logging/UserLogSetting.js")
let estoquetransitorio_rules_onscanfail_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/OnScanFail.js */ "./build.definitions/EstoqueTransitorio/Rules/OnScanFail.js")
let estoquetransitorio_rules_onscansuccess_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/OnScanSuccess.js */ "./build.definitions/EstoqueTransitorio/Rules/OnScanSuccess.js")
let estoquetransitorio_rules_service_initialize_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/Service/Initialize.js */ "./build.definitions/EstoqueTransitorio/Rules/Service/Initialize.js")
let estoquetransitorio_rules_showmockresults_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/ShowMockResults.js */ "./build.definitions/EstoqueTransitorio/Rules/ShowMockResults.js")
let estoquetransitorio_rules_storebusca_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/StoreBusca.js */ "./build.definitions/EstoqueTransitorio/Rules/StoreBusca.js")
let estoquetransitorio_rules_storefiltrotexto_js = __webpack_require__(/*! ./EstoqueTransitorio/Rules/StoreFiltroTexto.js */ "./build.definitions/EstoqueTransitorio/Rules/StoreFiltroTexto.js")
let estoquetransitorio_styles_styles_css = __webpack_require__(/*! ./EstoqueTransitorio/Styles/Styles.css */ "./build.definitions/EstoqueTransitorio/Styles/Styles.css")
let estoquetransitorio_styles_styles_json = __webpack_require__(/*! ./EstoqueTransitorio/Styles/Styles.json */ "./build.definitions/EstoqueTransitorio/Styles/Styles.json")
let estoquetransitorio_styles_styles_less = __webpack_require__(/*! ./EstoqueTransitorio/Styles/Styles.less */ "./build.definitions/EstoqueTransitorio/Styles/Styles.less")
let estoquetransitorio_styles_styles_nss = __webpack_require__(/*! ./EstoqueTransitorio/Styles/Styles.nss */ "./build.definitions/EstoqueTransitorio/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	estoquetransitorio_actions_application_appupdate_action : estoquetransitorio_actions_application_appupdate_action,
	estoquetransitorio_actions_application_appupdatefailuremessage_action : estoquetransitorio_actions_application_appupdatefailuremessage_action,
	estoquetransitorio_actions_application_appupdateprogressbanner_action : estoquetransitorio_actions_application_appupdateprogressbanner_action,
	estoquetransitorio_actions_application_appupdatesuccessmessage_action : estoquetransitorio_actions_application_appupdatesuccessmessage_action,
	estoquetransitorio_actions_application_logout_action : estoquetransitorio_actions_application_logout_action,
	estoquetransitorio_actions_application_navtoabout_action : estoquetransitorio_actions_application_navtoabout_action,
	estoquetransitorio_actions_application_navtoactivitylog_action : estoquetransitorio_actions_application_navtoactivitylog_action,
	estoquetransitorio_actions_application_navtosupport_action : estoquetransitorio_actions_application_navtosupport_action,
	estoquetransitorio_actions_application_onwillupdate_action : estoquetransitorio_actions_application_onwillupdate_action,
	estoquetransitorio_actions_application_reset_action : estoquetransitorio_actions_application_reset_action,
	estoquetransitorio_actions_application_resetmessage_action : estoquetransitorio_actions_application_resetmessage_action,
	estoquetransitorio_actions_application_usermenupopover_action : estoquetransitorio_actions_application_usermenupopover_action,
	estoquetransitorio_actions_closemodalpage_cancel_action : estoquetransitorio_actions_closemodalpage_cancel_action,
	estoquetransitorio_actions_closemodalpage_complete_action : estoquetransitorio_actions_closemodalpage_complete_action,
	estoquetransitorio_actions_closepage_action : estoquetransitorio_actions_closepage_action,
	estoquetransitorio_actions_concordar_action : estoquetransitorio_actions_concordar_action,
	estoquetransitorio_actions_filtrosolicentradalojakit_action : estoquetransitorio_actions_filtrosolicentradalojakit_action,
	estoquetransitorio_actions_genericbannermessage_action : estoquetransitorio_actions_genericbannermessage_action,
	estoquetransitorio_actions_genericmessagebox_action : estoquetransitorio_actions_genericmessagebox_action,
	estoquetransitorio_actions_genericnavigation_action : estoquetransitorio_actions_genericnavigation_action,
	estoquetransitorio_actions_generictoastmessage_action : estoquetransitorio_actions_generictoastmessage_action,
	estoquetransitorio_actions_logging_loguploadfailure_action : estoquetransitorio_actions_logging_loguploadfailure_action,
	estoquetransitorio_actions_logging_loguploadsuccessful_action : estoquetransitorio_actions_logging_loguploadsuccessful_action,
	estoquetransitorio_actions_logging_uploadlog_action : estoquetransitorio_actions_logging_uploadlog_action,
	estoquetransitorio_actions_logging_uploadlogprogress_action : estoquetransitorio_actions_logging_uploadlogprogress_action,
	estoquetransitorio_actions_navbacktosolicitacoes_action : estoquetransitorio_actions_navbacktosolicitacoes_action,
	estoquetransitorio_actions_navtodadospacote1_action : estoquetransitorio_actions_navtodadospacote1_action,
	estoquetransitorio_actions_navtoescanearpacote_action : estoquetransitorio_actions_navtoescanearpacote_action,
	estoquetransitorio_actions_navtopreferencias_action : estoquetransitorio_actions_navtopreferencias_action,
	estoquetransitorio_actions_navtosolicitacoes_action : estoquetransitorio_actions_navtosolicitacoes_action,
	estoquetransitorio_actions_proximaom_action : estoquetransitorio_actions_proximaom_action,
	estoquetransitorio_actions_recebermateriais_action : estoquetransitorio_actions_recebermateriais_action,
	estoquetransitorio_actions_scanbarcode_action : estoquetransitorio_actions_scanbarcode_action,
	estoquetransitorio_actions_somenteimprimir_action : estoquetransitorio_actions_somenteimprimir_action,
	estoquetransitorio_actions_voltar_action : estoquetransitorio_actions_voltar_action,
	estoquetransitorio_globals_application_appdefinition_version_global : estoquetransitorio_globals_application_appdefinition_version_global,
	estoquetransitorio_globals_application_applicationname_global : estoquetransitorio_globals_application_applicationname_global,
	estoquetransitorio_globals_application_supportemail_global : estoquetransitorio_globals_application_supportemail_global,
	estoquetransitorio_globals_application_supportphone_global : estoquetransitorio_globals_application_supportphone_global,
	estoquetransitorio_i18n_i18n_properties : estoquetransitorio_i18n_i18n_properties,
	estoquetransitorio_jsconfig_json : estoquetransitorio_jsconfig_json,
	estoquetransitorio_pages_application_about_page : estoquetransitorio_pages_application_about_page,
	estoquetransitorio_pages_application_support_page : estoquetransitorio_pages_application_support_page,
	estoquetransitorio_pages_application_useractivitylog_page : estoquetransitorio_pages_application_useractivitylog_page,
	estoquetransitorio_pages_confirmacaorecebimento_page : estoquetransitorio_pages_confirmacaorecebimento_page,
	estoquetransitorio_pages_dadospacote_dadospacote1_page : estoquetransitorio_pages_dadospacote_dadospacote1_page,
	estoquetransitorio_pages_dadospacote_dadospacote2_page : estoquetransitorio_pages_dadospacote_dadospacote2_page,
	estoquetransitorio_pages_dadospacote_dadospacote3_page : estoquetransitorio_pages_dadospacote_dadospacote3_page,
	estoquetransitorio_pages_escanearpacote_page : estoquetransitorio_pages_escanearpacote_page,
	estoquetransitorio_pages_filtrosolicentradalojakit_page : estoquetransitorio_pages_filtrosolicentradalojakit_page,
	estoquetransitorio_pages_main_page : estoquetransitorio_pages_main_page,
	estoquetransitorio_pages_preferencias_page : estoquetransitorio_pages_preferencias_page,
	estoquetransitorio_pages_solicentrega_detalhe_page : estoquetransitorio_pages_solicentrega_detalhe_page,
	estoquetransitorio_pages_solicentrega_entradalojakit_page : estoquetransitorio_pages_solicentrega_entradalojakit_page,
	estoquetransitorio_rules_application_appupdatefailure_js : estoquetransitorio_rules_application_appupdatefailure_js,
	estoquetransitorio_rules_application_appupdatesuccess_js : estoquetransitorio_rules_application_appupdatesuccess_js,
	estoquetransitorio_rules_application_clientismultiusermode_js : estoquetransitorio_rules_application_clientismultiusermode_js,
	estoquetransitorio_rules_application_getclientsupportversions_js : estoquetransitorio_rules_application_getclientsupportversions_js,
	estoquetransitorio_rules_application_getclientversion_js : estoquetransitorio_rules_application_getclientversion_js,
	estoquetransitorio_rules_application_onwillupdate_js : estoquetransitorio_rules_application_onwillupdate_js,
	estoquetransitorio_rules_application_resetappsettingsandlogout_js : estoquetransitorio_rules_application_resetappsettingsandlogout_js,
	estoquetransitorio_rules_buildquery_js : estoquetransitorio_rules_buildquery_js,
	estoquetransitorio_rules_clearfiltrotexto_js : estoquetransitorio_rules_clearfiltrotexto_js,
	estoquetransitorio_rules_enablebuscar_js : estoquetransitorio_rules_enablebuscar_js,
	estoquetransitorio_rules_enablereceber_js : estoquetransitorio_rules_enablereceber_js,
	estoquetransitorio_rules_logging_loglevels_js : estoquetransitorio_rules_logging_loglevels_js,
	estoquetransitorio_rules_logging_settracecategories_js : estoquetransitorio_rules_logging_settracecategories_js,
	estoquetransitorio_rules_logging_setuserloglevel_js : estoquetransitorio_rules_logging_setuserloglevel_js,
	estoquetransitorio_rules_logging_togglelogging_js : estoquetransitorio_rules_logging_togglelogging_js,
	estoquetransitorio_rules_logging_tracecategories_js : estoquetransitorio_rules_logging_tracecategories_js,
	estoquetransitorio_rules_logging_userlogsetting_js : estoquetransitorio_rules_logging_userlogsetting_js,
	estoquetransitorio_rules_onscanfail_js : estoquetransitorio_rules_onscanfail_js,
	estoquetransitorio_rules_onscansuccess_js : estoquetransitorio_rules_onscansuccess_js,
	estoquetransitorio_rules_service_initialize_js : estoquetransitorio_rules_service_initialize_js,
	estoquetransitorio_rules_showmockresults_js : estoquetransitorio_rules_showmockresults_js,
	estoquetransitorio_rules_storebusca_js : estoquetransitorio_rules_storebusca_js,
	estoquetransitorio_rules_storefiltrotexto_js : estoquetransitorio_rules_storefiltrotexto_js,
	estoquetransitorio_styles_styles_css : estoquetransitorio_styles_styles_css,
	estoquetransitorio_styles_styles_json : estoquetransitorio_styles_styles_json,
	estoquetransitorio_styles_styles_less : estoquetransitorio_styles_styles_less,
	estoquetransitorio_styles_styles_nss : estoquetransitorio_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/AppUpdateFailure.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/AppUpdateFailure.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/EstoqueTransitorio/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/AppUpdateSuccess.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/AppUpdateSuccess.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/EstoqueTransitorio/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/EstoqueTransitorio/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/ClientIsMultiUserMode.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/ClientIsMultiUserMode.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/GetClientSupportVersions.js":
/*!********************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/GetClientSupportVersions.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/GetClientVersion.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/GetClientVersion.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/OnWillUpdate.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/OnWillUpdate.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/EstoqueTransitorio/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/EstoqueTransitorio/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/BuildQuery.js":
/*!******************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/BuildQuery.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuildQuery)
/* harmony export */ });
function BuildQuery(context) {
  const app = context.evaluateTargetPathForAPI?.('#Application/#ClientData') || {};
  const page = context.getPageProxy?.();
  const termo = (app.filtroSolicEntrada?.texto || app.busca || '' || page?.evaluateTargetPathForAPI?.('#Control:InputBusca/#Value') || '').toString().trim();
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
  try {
    app.debugQuery = qo;
  } catch {}
  console.debug('[BuildQuery] termo:', termo, 'QueryOptions:', qo);
  // debugger; // <- descomente quando quiser pausar no DevTools

  return qo;
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/ClearFiltroTexto.js":
/*!************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/ClearFiltroTexto.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClearFiltroTexto)
/* harmony export */ });
function ClearFiltroTexto(context) {
  try {
    const app = context.evaluateTargetPathForAPI('#Application/#ClientData');
    if (app.filtroSolicEntrada) app.filtroSolicEntrada.texto = '';
  } catch (e) {/* ignore */}

  // Se quiser também limpar o valor do controle na tela:
  try {
    context.getPageProxy().evaluateTargetPathForAPI('#Control:FiltroTexto')?.setValue?.('');
  } catch (e) {/* ignore */}
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/EnableBuscar.js":
/*!********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/EnableBuscar.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnableBuscar)
/* harmony export */ });
function EnableBuscar(context) {
  const page = context.getPageProxy();
  const txt = (page.getClientData().busca || '').trim();
  return txt.length >= 2;
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/EnableReceber.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/EnableReceber.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnableReceber)
/* harmony export */ });
function EnableReceber(context) {
  try {
    const sec = context.getPageProxy().getControl('SectionedTable').getSection('MateriaisSection');
    const sel = sec.getSelectedItems?.() || [];
    return sel.length > 0;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Logging/LogLevels.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Logging/LogLevels.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Logging/SetTraceCategories.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Logging/SetTraceCategories.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Logging/SetUserLogLevel.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Logging/SetUserLogLevel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Logging/ToggleLogging.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Logging/ToggleLogging.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Logging/TraceCategories.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Logging/TraceCategories.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Logging/UserLogSetting.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Logging/UserLogSetting.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/OnScanFail.js":
/*!******************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/OnScanFail.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnScanFail)
/* harmony export */ });
function OnScanFail(clientAPI) {
  return clientAPI.executeAction({
    "_Type": "Action.Type.Message",
    "Message": "Falha ao escanear o código"
  });
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/OnScanSuccess.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/OnScanSuccess.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnScanSuccess)
/* harmony export */ });
function OnScanSuccess(clientAPI) {
  const res = clientAPI.getActionResult("OpenBarcodeScanner").data;
  const codigo = res && res.text ? res.text : res;
  return clientAPI.executeAction({
    "_Type": "Action.Type.Control.SetValue",
    "Target": "#Page:EscanearPacote/#Control:FormCellSimpleProperty0",
    "Value": codigo
  }).then(() => clientAPI.executeAction("/EstoqueTransitorio/Actions/NavToDadosPacote1.action"));
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/Service/Initialize.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/Service/Initialize.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/ShowMockResults.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/ShowMockResults.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowMockResults)
/* harmony export */ });
function ShowMockResults() {
  return true; // mostra sempre a seção mock
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/StoreBusca.js":
/*!******************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/StoreBusca.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreBusca)
/* harmony export */ });
/**
 * Salva o texto da busca no ClientData da aplicação e da página.
 * Chamado no OnValueChange do InputBusca.
 * @param {IClientAPI} context
 */
function StoreBusca(context) {
  const v = (context.getValue?.() ?? '').toString().trim();
  try {
    const app = context.evaluateTargetPathForAPI('#Application/#ClientData');
    app.busca = v; // usado pela ShowMockResults.js e BuildQuery.js
  } catch (e) {/* ignore */}
  try {
    context.getPageProxy().getClientData().busca = v;
  } catch (e) {/* ignore */}
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Rules/StoreFiltroTexto.js":
/*!************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Rules/StoreFiltroTexto.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreFiltroTexto)
/* harmony export */ });
/**
 * Guarda o texto digitado nos filtros no ClientData da aplicação.
 * Lido depois pela BuildQuery.js em #Application/#ClientData/filtroSolicEntrada/texto
 * @param {IClientAPI} context
 */
function StoreFiltroTexto(context) {
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
  } catch (e) {/* ignore */}
}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Styles/Styles.css":
/*!****************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Styles/Styles.css ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Mata todos os estilos internos do SAP */
.BlackBoldTitle * {
  all: initial !important;
  color: #000000 !important;
  font-weight: bold !important;
  font-size: 18px !important;
  text-align: center !important;
  background: transparent !important;
  border: 0 !important;
}
/* ===== BOTÃO DE TEXTO PRETO ===== */
.BlackTextButton {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  width: 72% !important;
  max-width: 280px !important;
  min-width: 140px !important;
  margin: 0 auto !important;
  padding: 0 !important;
}
.BlackTextButton .sapMBtnInner {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  min-height: 14px !important;
  /* REDUZIDO */
  line-height: 1 !important;
  /* REDUZIDO */
}
.BlackTextButton .sapMBtnInner .sapMBtnContent {
  color: #000000 !important;
  text-align: left !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 1 !important;
  /* REDUZIDO */
  margin: 0 !important;
  padding: 0 !important;
}
/* Botões azuis principais */
.SmallBlueButton {
  width: 72%;
  max-width: 280px;
  min-width: 140px;
  padding: 2px 4px;
  /* REDUZIDO */
  margin: 1px auto;
  /* REDUZIDO */
  border-radius: 3px;
  /* REDUZIDO */
  background-color: #0b74de;
  color: #fff;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  /* ADICIONADO */
}
/* Espaçador GRANDE - MUITO REDUZIDO */
.SpacerLarge {
  font-size: 1px;
  color: transparent;
  padding: 2px 2px !important;
  /* MUITO REDUZIDO */
  margin: 2px 0 !important;
  /* MUITO REDUZIDO */
  background: transparent;
  border: none;
  line-height: 1;
  /* ADICIONADO */
  height: 2px !important;
  /* ADICIONADO */
}
/* ===== título preto, negrito e responsivo ===== */
.BlackBoldTitle {
  all: initial !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  width: 100% !important;
  text-align: center !important;
  padding: 0 !important;
  margin: 2px 0 0 !important;
  /* MUITO REDUZIDO */
  line-height: 1 !important;
  /* ADICIONADO */
}
.BlackBoldTitle .sapMBtnText {
  color: #111 !important;
  font-weight: 700 !important;
  font-size: 18px;
  white-space: normal;
  word-break: break-word;
  line-height: 1 !important;
  /* REDUZIDO */
  margin: 0 !important;
  padding: 0 !important;
}
/* ===== cada linha de informação ===== */
.InfoLine {
  width: 72%;
  max-width: 280px;
  min-width: 140px;
  margin: 1px auto !important;
  /* MUITO REDUZIDO */
  color: #000;
  line-height: 1 !important;
  /* REDUZIDO */
}
.InfoLine .sapMBtnInner {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  /* MUITO REDUZIDO */
  min-height: 16px !important;
  /* REDUZIDO */
  color: #000;
  line-height: 1 !important;
  /* REDUZIDO */
  margin: 0 !important;
}
.InfoLine .sapMBtnContent {
  justify-content: flex-start !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.InfoLine .sapMBtnText,
.InfoLine .sapMBtnContent {
  color: #000 !important;
  text-align: left !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  /* REDUZIDO */
  margin: 0 !important;
  padding: 0 !important;
}
/* ===== seção das infos ===== */
.SectionTight {
  padding-top: 0 !important;
  /* MUITO REDUZIDO */
  padding-bottom: 0 !important;
  border: 0 !important;
  background: transparent !important;
  margin: 0 !important;
  line-height: 1 !important;
}
/* Ajustes responsivos */
@media (max-width: 420px) {
  .BlackBoldTitle .sapMBtnText {
    font-size: 16px;
    line-height: 1 !important;
  }
}
@media (max-width: 360px) {
  .BlackBoldTitle .sapMBtnText {
    font-size: 14px;
    line-height: 1 !important;
  }
  .SpacerLarge {
    padding: 1px 1px !important;
    margin: 1px 0 !important;
    height: 1px !important;
  }
  .SmallBlueButton {
    width: 68%;
    font-size: 10px;
    padding: 1px 3px;
    margin: 0 auto;
    line-height: 1;
  }
}
@media (max-width: 320px) {
  .BlackBoldTitle .sapMBtnText {
    font-size: 12px;
    line-height: 1 !important;
  }
  .SpacerLarge {
    padding: 1px 1px !important;
    margin: 1px 0 !important;
    height: 1px !important;
  }
  .SmallBlueButton {
    width: 65%;
    font-size: 9px;
    padding: 1px 2px;
    margin: 0 auto;
  }
}
/* Estilos auxiliares */
.GreenButton {
  background-color: #28a745;
  color: white;
  font-weight: bold;
  font-size: 14px;
  min-width: 120px;
  height: 30px;
  /* REDUZIDO */
  border-radius: 3px;
  /* REDUZIDO */
  text-align: center;
  line-height: 1;
  margin: 1px auto;
  padding: 0 5px;
}
.RedButton {
  background-color: #dc3545;
  color: white;
  font-weight: bold;
  font-size: 14px;
  min-width: 120px;
  height: 30px;
  /* REDUZIDO */
  border-radius: 3px;
  /* REDUZIDO */
  text-align: center;
  line-height: 1;
  margin: 1px auto;
  padding: 0 5px;
}
.SpacerStyle {
  font-size: 1px;
  color: transparent;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/EstoqueTransitorio/Styles/Styles.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,uBAAuB;EACvB,yBAAyB;EACzB,4BAA4B;EAC5B,0BAA0B;EAC1B,6BAA6B;EAC7B,kCAAkC;EAClC,oBAAoB;AACtB;AACA,qCAAqC;AACrC;EACE,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;EAC3B,aAAa;EACb,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,0BAA0B;EAC1B,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,qBAAqB;AACvB;AACA,4BAA4B;AAC5B;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;AACA,sCAAsC;AACtC;EACE,cAAc;EACd,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;EACnB,wBAAwB;EACxB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,eAAe;AACjB;AACA,mDAAmD;AACnD;EACE,uBAAuB;EACvB,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,sBAAsB;EACtB,6BAA6B;EAC7B,qBAAqB;EACrB,0BAA0B;EAC1B,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,qBAAqB;AACvB;AACA,yCAAyC;AACzC;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,qBAAqB;EACrB,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;AACvB;AACA;;EAEE,sBAAsB;EACtB,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,qBAAqB;AACvB;AACA,gCAAgC;AAChC;EACE,yBAAyB;EACzB,mBAAmB;EACnB,4BAA4B;EAC5B,oBAAoB;EACpB,kCAAkC;EAClC,oBAAoB;EACpB,yBAAyB;AAC3B;AACA,wBAAwB;AACxB;EACE;IACE,eAAe;IACf,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,eAAe;IACf,yBAAyB;EAC3B;EACA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,cAAc;EAChB;AACF;AACA;EACE;IACE,eAAe;IACf,yBAAyB;EAC3B;EACA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,cAAc;IACd,gBAAgB;IAChB,cAAc;EAChB;AACF;AACA,uBAAuB;AACvB;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,cAAc;AAChB","sourcesContent":["/* Mata todos os estilos internos do SAP */\n.BlackBoldTitle * {\n  all: initial !important;\n  color: #000000 !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n  text-align: center !important;\n  background: transparent !important;\n  border: 0 !important;\n}\n/* ===== BOTÃO DE TEXTO PRETO ===== */\n.BlackTextButton {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  width: 72% !important;\n  max-width: 280px !important;\n  min-width: 140px !important;\n  margin: 0 auto !important;\n  padding: 0 !important;\n}\n.BlackTextButton .sapMBtnInner {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  min-height: 14px !important;\n  /* REDUZIDO */\n  line-height: 1 !important;\n  /* REDUZIDO */\n}\n.BlackTextButton .sapMBtnInner .sapMBtnContent {\n  color: #000000 !important;\n  text-align: left !important;\n  font-weight: normal !important;\n  font-size: 14px !important;\n  line-height: 1 !important;\n  /* REDUZIDO */\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/* Botões azuis principais */\n.SmallBlueButton {\n  width: 72%;\n  max-width: 280px;\n  min-width: 140px;\n  padding: 2px 4px;\n  /* REDUZIDO */\n  margin: 1px auto;\n  /* REDUZIDO */\n  border-radius: 3px;\n  /* REDUZIDO */\n  background-color: #0b74de;\n  color: #fff;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1;\n  /* ADICIONADO */\n}\n/* Espaçador GRANDE - MUITO REDUZIDO */\n.SpacerLarge {\n  font-size: 1px;\n  color: transparent;\n  padding: 2px 2px !important;\n  /* MUITO REDUZIDO */\n  margin: 2px 0 !important;\n  /* MUITO REDUZIDO */\n  background: transparent;\n  border: none;\n  line-height: 1;\n  /* ADICIONADO */\n  height: 2px !important;\n  /* ADICIONADO */\n}\n/* ===== título preto, negrito e responsivo ===== */\n.BlackBoldTitle {\n  all: initial !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  width: 100% !important;\n  text-align: center !important;\n  padding: 0 !important;\n  margin: 2px 0 0 !important;\n  /* MUITO REDUZIDO */\n  line-height: 1 !important;\n  /* ADICIONADO */\n}\n.BlackBoldTitle .sapMBtnText {\n  color: #111 !important;\n  font-weight: 700 !important;\n  font-size: 18px;\n  white-space: normal;\n  word-break: break-word;\n  line-height: 1 !important;\n  /* REDUZIDO */\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/* ===== cada linha de informação ===== */\n.InfoLine {\n  width: 72%;\n  max-width: 280px;\n  min-width: 140px;\n  margin: 1px auto !important;\n  /* MUITO REDUZIDO */\n  color: #000;\n  line-height: 1 !important;\n  /* REDUZIDO */\n}\n.InfoLine .sapMBtnInner {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  /* MUITO REDUZIDO */\n  min-height: 16px !important;\n  /* REDUZIDO */\n  color: #000;\n  line-height: 1 !important;\n  /* REDUZIDO */\n  margin: 0 !important;\n}\n.InfoLine .sapMBtnContent {\n  justify-content: flex-start !important;\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.InfoLine .sapMBtnText,\n.InfoLine .sapMBtnContent {\n  color: #000 !important;\n  text-align: left !important;\n  font-weight: 700 !important;\n  line-height: 1 !important;\n  /* REDUZIDO */\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/* ===== seção das infos ===== */\n.SectionTight {\n  padding-top: 0 !important;\n  /* MUITO REDUZIDO */\n  padding-bottom: 0 !important;\n  border: 0 !important;\n  background: transparent !important;\n  margin: 0 !important;\n  line-height: 1 !important;\n}\n/* Ajustes responsivos */\n@media (max-width: 420px) {\n  .BlackBoldTitle .sapMBtnText {\n    font-size: 16px;\n    line-height: 1 !important;\n  }\n}\n@media (max-width: 360px) {\n  .BlackBoldTitle .sapMBtnText {\n    font-size: 14px;\n    line-height: 1 !important;\n  }\n  .SpacerLarge {\n    padding: 1px 1px !important;\n    margin: 1px 0 !important;\n    height: 1px !important;\n  }\n  .SmallBlueButton {\n    width: 68%;\n    font-size: 10px;\n    padding: 1px 3px;\n    margin: 0 auto;\n    line-height: 1;\n  }\n}\n@media (max-width: 320px) {\n  .BlackBoldTitle .sapMBtnText {\n    font-size: 12px;\n    line-height: 1 !important;\n  }\n  .SpacerLarge {\n    padding: 1px 1px !important;\n    margin: 1px 0 !important;\n    height: 1px !important;\n  }\n  .SmallBlueButton {\n    width: 65%;\n    font-size: 9px;\n    padding: 1px 2px;\n    margin: 0 auto;\n  }\n}\n/* Estilos auxiliares */\n.GreenButton {\n  background-color: #28a745;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  min-width: 120px;\n  height: 30px;\n  /* REDUZIDO */\n  border-radius: 3px;\n  /* REDUZIDO */\n  text-align: center;\n  line-height: 1;\n  margin: 1px auto;\n  padding: 0 5px;\n}\n.RedButton {\n  background-color: #dc3545;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  min-width: 120px;\n  height: 30px;\n  /* REDUZIDO */\n  border-radius: 3px;\n  /* REDUZIDO */\n  text-align: center;\n  line-height: 1;\n  margin: 1px auto;\n  padding: 0 5px;\n}\n.SpacerStyle {\n  font-size: 1px;\n  color: transparent;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  line-height: 1;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Styles/Styles.less":
/*!*****************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Styles/Styles.less ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Mata todos os estilos internos do SAP */
.BlackBoldTitle * {
  all: initial !important;
  color: #000000 !important;
  font-weight: bold !important;
  font-size: 18px !important;
  text-align: center !important;
  background: transparent !important;
  border: 0 !important;
}

/* ===== BOTÃO DE TEXTO PRETO ===== */
.BlackTextButton {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  width: 72% !important;
  max-width: 280px !important;
  min-width: 140px !important;
  margin: 0 auto !important;
  padding: 0 !important;
}

.BlackTextButton .sapMBtnInner {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  min-height: 14px !important; /* REDUZIDO */
  line-height: 1 !important; /* REDUZIDO */
}

.BlackTextButton .sapMBtnInner .sapMBtnContent {
  color: #000000 !important;
  text-align: left !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 1 !important; /* REDUZIDO */
  margin: 0 !important;
  padding: 0 !important;
}

/* Botões azuis principais */
.SmallBlueButton {
  width: 72%;
  max-width: 280px;
  min-width: 140px;
  padding: 2px 4px; /* REDUZIDO */
  margin: 1px auto; /* REDUZIDO */
  border-radius: 3px; /* REDUZIDO */
  background-color: #0b74de;
  color: #fff;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 1; /* ADICIONADO */
}

/* Espaçador GRANDE - MUITO REDUZIDO */
.SpacerLarge {
  font-size: 1px;
  color: transparent;
  padding: 2px 2px !important; /* MUITO REDUZIDO */
  margin: 2px 0 !important; /* MUITO REDUZIDO */
  background: transparent;
  border: none;
  line-height: 1; /* ADICIONADO */
  height: 2px !important; /* ADICIONADO */
}

/* ===== título preto, negrito e responsivo ===== */
.BlackBoldTitle {
  all: initial !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  width: 100% !important;
  text-align: center !important;
  padding: 0 !important;
  margin: 2px 0 0 !important; /* MUITO REDUZIDO */
  line-height: 1 !important; /* ADICIONADO */
}

.BlackBoldTitle .sapMBtnText {
  color: #111 !important;
  font-weight: 700 !important;
  font-size: 18px;
  white-space: normal;
  word-break: break-word;
  line-height: 1 !important; /* REDUZIDO */
  margin: 0 !important;
  padding: 0 !important;
}

/* ===== cada linha de informação ===== */
.InfoLine {
  width: 72%;
  max-width: 280px;
  min-width: 140px;
  margin: 1px auto !important; /* MUITO REDUZIDO */
  color: #000;
  line-height: 1 !important; /* REDUZIDO */
}

.InfoLine .sapMBtnInner {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important; /* MUITO REDUZIDO */
  min-height: 16px !important; /* REDUZIDO */
  color: #000;
  line-height: 1 !important; /* REDUZIDO */
  margin: 0 !important;
}

.InfoLine .sapMBtnContent {
  justify-content: flex-start !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.InfoLine .sapMBtnText,
.InfoLine .sapMBtnContent {
  color: #000 !important;
  text-align: left !important;
  font-weight: 700 !important;
  line-height: 1 !important; /* REDUZIDO */
  margin: 0 !important;
  padding: 0 !important;
}

/* ===== seção das infos ===== */
.SectionTight {
  padding-top: 0 !important; /* MUITO REDUZIDO */
  padding-bottom: 0 !important;
  border: 0 !important;
  background: transparent !important;
  margin: 0 !important;
  line-height: 1 !important;
}

/* Ajustes responsivos */
@media (max-width: 420px) { 
  .BlackBoldTitle .sapMBtnText { 
    font-size: 16px; 
    line-height: 1 !important;
  } 
}

@media (max-width: 360px) {
  .BlackBoldTitle .sapMBtnText { 
    font-size: 14px; 
    line-height: 1 !important;
  }
  .SpacerLarge {
    padding: 1px 1px !important;
    margin: 1px 0 !important;
    height: 1px !important;
  }
  .SmallBlueButton {
    width: 68%;
    font-size: 10px;
    padding: 1px 3px;
    margin: 0 auto;
    line-height: 1;
  }
}

@media (max-width: 320px) {
  .BlackBoldTitle .sapMBtnText { 
    font-size: 12px; 
    line-height: 1 !important;
  }
  .SpacerLarge {
    padding: 1px 1px !important;
    margin: 1px 0 !important;
    height: 1px !important;
  }
  .SmallBlueButton {
    width: 65%;
    font-size: 9px;
    padding: 1px 2px;
    margin: 0 auto;
  }
}

/* Estilos auxiliares */
.GreenButton {
  background-color: #28a745;
  color: white;
  font-weight: bold;
  font-size: 14px;
  min-width: 120px;
  height: 30px; /* REDUZIDO */
  border-radius: 3px; /* REDUZIDO */
  text-align: center;
  line-height: 1;
  margin: 1px auto;
  padding: 0 5px;
}

.RedButton {
  background-color: #dc3545;
  color: white;
  font-weight: bold;
  font-size: 14px;
  min-width: 120px;
  height: 30px; /* REDUZIDO */
  border-radius: 3px; /* REDUZIDO */
  text-align: center;
  line-height: 1;
  margin: 1px auto;
  padding: 0 5px;
}

.SpacerStyle {
  font-size: 1px;
  color: transparent;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1;
}`, "",{"version":3,"sources":["webpack://./build.definitions/EstoqueTransitorio/Styles/Styles.less"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,uBAAuB;EACvB,yBAAyB;EACzB,4BAA4B;EAC5B,0BAA0B;EAC1B,6BAA6B;EAC7B,kCAAkC;EAClC,oBAAoB;AACtB;;AAEA,qCAAqC;AACrC;EACE,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B,EAAE,aAAa;EAC1C,yBAAyB,EAAE,aAAa;AAC1C;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,0BAA0B;EAC1B,yBAAyB,EAAE,aAAa;EACxC,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA,4BAA4B;AAC5B;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB,EAAE,aAAa;EAC/B,gBAAgB,EAAE,aAAa;EAC/B,kBAAkB,EAAE,aAAa;EACjC,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,cAAc,EAAE,eAAe;AACjC;;AAEA,sCAAsC;AACtC;EACE,cAAc;EACd,kBAAkB;EAClB,2BAA2B,EAAE,mBAAmB;EAChD,wBAAwB,EAAE,mBAAmB;EAC7C,uBAAuB;EACvB,YAAY;EACZ,cAAc,EAAE,eAAe;EAC/B,sBAAsB,EAAE,eAAe;AACzC;;AAEA,mDAAmD;AACnD;EACE,uBAAuB;EACvB,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,sBAAsB;EACtB,6BAA6B;EAC7B,qBAAqB;EACrB,0BAA0B,EAAE,mBAAmB;EAC/C,yBAAyB,EAAE,eAAe;AAC5C;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB,EAAE,aAAa;EACxC,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA,yCAAyC;AACzC;EACE,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,2BAA2B,EAAE,mBAAmB;EAChD,WAAW;EACX,yBAAyB,EAAE,aAAa;AAC1C;;AAEA;EACE,kCAAkC;EAClC,oBAAoB;EACpB,2BAA2B;EAC3B,qBAAqB,EAAE,mBAAmB;EAC1C,2BAA2B,EAAE,aAAa;EAC1C,WAAW;EACX,yBAAyB,EAAE,aAAa;EACxC,oBAAoB;AACtB;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;;EAEE,sBAAsB;EACtB,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB,EAAE,aAAa;EACxC,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA,gCAAgC;AAChC;EACE,yBAAyB,EAAE,mBAAmB;EAC9C,4BAA4B;EAC5B,oBAAoB;EACpB,kCAAkC;EAClC,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE;IACE,eAAe;IACf,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,eAAe;IACf,yBAAyB;EAC3B;EACA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,cAAc;EAChB;AACF;;AAEA;EACE;IACE,eAAe;IACf,yBAAyB;EAC3B;EACA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,cAAc;IACd,gBAAgB;IAChB,cAAc;EAChB;AACF;;AAEA,uBAAuB;AACvB;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY,EAAE,aAAa;EAC3B,kBAAkB,EAAE,aAAa;EACjC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,YAAY,EAAE,aAAa;EAC3B,kBAAkB,EAAE,aAAa;EACjC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,cAAc;AAChB","sourcesContent":["/* Mata todos os estilos internos do SAP */\n.BlackBoldTitle * {\n  all: initial !important;\n  color: #000000 !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n  text-align: center !important;\n  background: transparent !important;\n  border: 0 !important;\n}\n\n/* ===== BOTÃO DE TEXTO PRETO ===== */\n.BlackTextButton {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  width: 72% !important;\n  max-width: 280px !important;\n  min-width: 140px !important;\n  margin: 0 auto !important;\n  padding: 0 !important;\n}\n\n.BlackTextButton .sapMBtnInner {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n  min-height: 14px !important; /* REDUZIDO */\n  line-height: 1 !important; /* REDUZIDO */\n}\n\n.BlackTextButton .sapMBtnInner .sapMBtnContent {\n  color: #000000 !important;\n  text-align: left !important;\n  font-weight: normal !important;\n  font-size: 14px !important;\n  line-height: 1 !important; /* REDUZIDO */\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* Botões azuis principais */\n.SmallBlueButton {\n  width: 72%;\n  max-width: 280px;\n  min-width: 140px;\n  padding: 2px 4px; /* REDUZIDO */\n  margin: 1px auto; /* REDUZIDO */\n  border-radius: 3px; /* REDUZIDO */\n  background-color: #0b74de;\n  color: #fff;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1; /* ADICIONADO */\n}\n\n/* Espaçador GRANDE - MUITO REDUZIDO */\n.SpacerLarge {\n  font-size: 1px;\n  color: transparent;\n  padding: 2px 2px !important; /* MUITO REDUZIDO */\n  margin: 2px 0 !important; /* MUITO REDUZIDO */\n  background: transparent;\n  border: none;\n  line-height: 1; /* ADICIONADO */\n  height: 2px !important; /* ADICIONADO */\n}\n\n/* ===== título preto, negrito e responsivo ===== */\n.BlackBoldTitle {\n  all: initial !important;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  width: 100% !important;\n  text-align: center !important;\n  padding: 0 !important;\n  margin: 2px 0 0 !important; /* MUITO REDUZIDO */\n  line-height: 1 !important; /* ADICIONADO */\n}\n\n.BlackBoldTitle .sapMBtnText {\n  color: #111 !important;\n  font-weight: 700 !important;\n  font-size: 18px;\n  white-space: normal;\n  word-break: break-word;\n  line-height: 1 !important; /* REDUZIDO */\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* ===== cada linha de informação ===== */\n.InfoLine {\n  width: 72%;\n  max-width: 280px;\n  min-width: 140px;\n  margin: 1px auto !important; /* MUITO REDUZIDO */\n  color: #000;\n  line-height: 1 !important; /* REDUZIDO */\n}\n\n.InfoLine .sapMBtnInner {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none !important;\n  padding: 0 !important; /* MUITO REDUZIDO */\n  min-height: 16px !important; /* REDUZIDO */\n  color: #000;\n  line-height: 1 !important; /* REDUZIDO */\n  margin: 0 !important;\n}\n\n.InfoLine .sapMBtnContent {\n  justify-content: flex-start !important;\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.InfoLine .sapMBtnText,\n.InfoLine .sapMBtnContent {\n  color: #000 !important;\n  text-align: left !important;\n  font-weight: 700 !important;\n  line-height: 1 !important; /* REDUZIDO */\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n/* ===== seção das infos ===== */\n.SectionTight {\n  padding-top: 0 !important; /* MUITO REDUZIDO */\n  padding-bottom: 0 !important;\n  border: 0 !important;\n  background: transparent !important;\n  margin: 0 !important;\n  line-height: 1 !important;\n}\n\n/* Ajustes responsivos */\n@media (max-width: 420px) { \n  .BlackBoldTitle .sapMBtnText { \n    font-size: 16px; \n    line-height: 1 !important;\n  } \n}\n\n@media (max-width: 360px) {\n  .BlackBoldTitle .sapMBtnText { \n    font-size: 14px; \n    line-height: 1 !important;\n  }\n  .SpacerLarge {\n    padding: 1px 1px !important;\n    margin: 1px 0 !important;\n    height: 1px !important;\n  }\n  .SmallBlueButton {\n    width: 68%;\n    font-size: 10px;\n    padding: 1px 3px;\n    margin: 0 auto;\n    line-height: 1;\n  }\n}\n\n@media (max-width: 320px) {\n  .BlackBoldTitle .sapMBtnText { \n    font-size: 12px; \n    line-height: 1 !important;\n  }\n  .SpacerLarge {\n    padding: 1px 1px !important;\n    margin: 1px 0 !important;\n    height: 1px !important;\n  }\n  .SmallBlueButton {\n    width: 65%;\n    font-size: 9px;\n    padding: 1px 2px;\n    margin: 0 auto;\n  }\n}\n\n/* Estilos auxiliares */\n.GreenButton {\n  background-color: #28a745;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  min-width: 120px;\n  height: 30px; /* REDUZIDO */\n  border-radius: 3px; /* REDUZIDO */\n  text-align: center;\n  line-height: 1;\n  margin: 1px auto;\n  padding: 0 5px;\n}\n\n.RedButton {\n  background-color: #dc3545;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  min-width: 120px;\n  height: 30px; /* REDUZIDO */\n  border-radius: 3px; /* REDUZIDO */\n  text-align: center;\n  line-height: 1;\n  margin: 1px auto;\n  padding: 0 5px;\n}\n\n.SpacerStyle {\n  font-size: 1px;\n  color: transparent;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  line-height: 1;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Styles/Styles.nss":
/*!****************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Styles/Styles.nss ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `BlackBoldTitle * {
	all: initial !important;
	font-color: #000000 !important;
	font-weight: bold !important;
	font-size: 18px !important;
	text-align: center !important;
	background: transparent !important;
	border: 0 !important;
}
BlackTextButton {
	background: transparent !important;
	border: 0 !important;
	box-shadow: none !important;
	width: 72% !important;
	max-width: 280px !important;
	min-width: 140px !important;
	margin: 0 auto !important;
	padding: 0 !important;
}
BlackTextButton .sapMBtnInner {
	background: transparent !important;
	border: 0 !important;
	box-shadow: none !important;
	padding: 0 !important;
	min-height: 14px !important;
	line-height: 1 !important;
}
BlackTextButton .sapMBtnInner .sapMBtnContent {
	font-color: #000000 !important;
	text-align: left !important;
	font-weight: normal !important;
	font-size: 14px !important;
	line-height: 1 !important;
	margin: 0 !important;
	padding: 0 !important;
}
SmallBlueButton {
	width: 72%;
	max-width: 280px;
	min-width: 140px;
	padding: 2px 4px;
	margin: 1px auto;
	border-radius: 3px;
	background-color: #0b74de;
	font-color: #fff;
	text-align: center;
	font-size: 11px;
	font-weight: 600;
	line-height: 1;
}
SpacerLarge {
	font-size: 1px;
	font-color: transparent;
	padding: 2px 2px !important;
	margin: 2px 0 !important;
	background: transparent;
	border: none;
	line-height: 1;
	height: 2px !important;
}
BlackBoldTitle {
	all: initial !important;
	background: transparent !important;
	border: 0 !important;
	box-shadow: none !important;
	width: 100% !important;
	text-align: center !important;
	padding: 0 !important;
	margin: 2px 0 0 !important;
	line-height: 1 !important;
}
BlackBoldTitle .sapMBtnText {
	font-color: #111 !important;
	font-weight: 700 !important;
	font-size: 18px;
	white-space: normal;
	word-break: break-word;
	line-height: 1 !important;
	margin: 0 !important;
	padding: 0 !important;
}
InfoLine {
	width: 72%;
	max-width: 280px;
	min-width: 140px;
	margin: 1px auto !important;
	font-color: #000;
	line-height: 1 !important;
}
InfoLine .sapMBtnInner {
	background: transparent !important;
	border: 0 !important;
	box-shadow: none !important;
	padding: 0 !important;
	min-height: 16px !important;
	font-color: #000;
	line-height: 1 !important;
	margin: 0 !important;
}
InfoLine .sapMBtnContent {
	justify-content: flex-start !important;
	width: 100% !important;
	margin: 0 !important;
	padding: 0 !important;
}
InfoLine .sapMBtnText,
.InfoLine .sapMBtnContent {
	font-color: #000 !important;
	text-align: left !important;
	font-weight: 700 !important;
	line-height: 1 !important;
	margin: 0 !important;
	padding: 0 !important;
}
SectionTight {
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	border: 0 !important;
	background: transparent !important;
	margin: 0 !important;
	line-height: 1 !important;
}
GreenButton {
	background-color: #28a745;
	font-color: white;
	font-weight: bold;
	font-size: 14px;
	min-width: 120px;
	height: 30px;
	border-radius: 3px;
	text-align: center;
	line-height: 1;
	margin: 1px auto;
	padding: 0 5px;
}
RedButton {
	background-color: #dc3545;
	font-color: white;
	font-weight: bold;
	font-size: 14px;
	min-width: 120px;
	height: 30px;
	border-radius: 3px;
	text-align: center;
	line-height: 1;
	margin: 1px auto;
	padding: 0 5px;
}
SpacerStyle {
	font-size: 1px;
	font-color: transparent;
	height: 1px !important;
	margin: 0 !important;
	padding: 0 !important;
	line-height: 1;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/EstoqueTransitorio/Styles/Styles.nss"],"names":[],"mappings":"AAAA;CACC,uBAAuB;CACvB,8BAA8B;CAC9B,4BAA4B;CAC5B,0BAA0B;CAC1B,6BAA6B;CAC7B,kCAAkC;CAClC,oBAAoB;AACrB;AACA;CACC,kCAAkC;CAClC,oBAAoB;CACpB,2BAA2B;CAC3B,qBAAqB;CACrB,2BAA2B;CAC3B,2BAA2B;CAC3B,yBAAyB;CACzB,qBAAqB;AACtB;AACA;CACC,kCAAkC;CAClC,oBAAoB;CACpB,2BAA2B;CAC3B,qBAAqB;CACrB,2BAA2B;CAC3B,yBAAyB;AAC1B;AACA;CACC,8BAA8B;CAC9B,2BAA2B;CAC3B,8BAA8B;CAC9B,0BAA0B;CAC1B,yBAAyB;CACzB,oBAAoB;CACpB,qBAAqB;AACtB;AACA;CACC,UAAU;CACV,gBAAgB;CAChB,gBAAgB;CAChB,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB,yBAAyB;CACzB,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,gBAAgB;CAChB,cAAc;AACf;AACA;CACC,cAAc;CACd,uBAAuB;CACvB,2BAA2B;CAC3B,wBAAwB;CACxB,uBAAuB;CACvB,YAAY;CACZ,cAAc;CACd,sBAAsB;AACvB;AACA;CACC,uBAAuB;CACvB,kCAAkC;CAClC,oBAAoB;CACpB,2BAA2B;CAC3B,sBAAsB;CACtB,6BAA6B;CAC7B,qBAAqB;CACrB,0BAA0B;CAC1B,yBAAyB;AAC1B;AACA;CACC,2BAA2B;CAC3B,2BAA2B;CAC3B,eAAe;CACf,mBAAmB;CACnB,sBAAsB;CACtB,yBAAyB;CACzB,oBAAoB;CACpB,qBAAqB;AACtB;AACA;CACC,UAAU;CACV,gBAAgB;CAChB,gBAAgB;CAChB,2BAA2B;CAC3B,gBAAgB;CAChB,yBAAyB;AAC1B;AACA;CACC,kCAAkC;CAClC,oBAAoB;CACpB,2BAA2B;CAC3B,qBAAqB;CACrB,2BAA2B;CAC3B,gBAAgB;CAChB,yBAAyB;CACzB,oBAAoB;AACrB;AACA;CACC,sCAAsC;CACtC,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;AACtB;AACA;;CAEC,2BAA2B;CAC3B,2BAA2B;CAC3B,2BAA2B;CAC3B,yBAAyB;CACzB,oBAAoB;CACpB,qBAAqB;AACtB;AACA;CACC,yBAAyB;CACzB,4BAA4B;CAC5B,oBAAoB;CACpB,kCAAkC;CAClC,oBAAoB;CACpB,yBAAyB;AAC1B;AACA;CACC,yBAAyB;CACzB,iBAAiB;CACjB,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,gBAAgB;CAChB,cAAc;AACf;AACA;CACC,yBAAyB;CACzB,iBAAiB;CACjB,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,gBAAgB;CAChB,cAAc;AACf;AACA;CACC,cAAc;CACd,uBAAuB;CACvB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,cAAc;AACf","sourcesContent":["BlackBoldTitle * {\n\tall: initial !important;\n\tfont-color: #000000 !important;\n\tfont-weight: bold !important;\n\tfont-size: 18px !important;\n\ttext-align: center !important;\n\tbackground: transparent !important;\n\tborder: 0 !important;\n}\nBlackTextButton {\n\tbackground: transparent !important;\n\tborder: 0 !important;\n\tbox-shadow: none !important;\n\twidth: 72% !important;\n\tmax-width: 280px !important;\n\tmin-width: 140px !important;\n\tmargin: 0 auto !important;\n\tpadding: 0 !important;\n}\nBlackTextButton .sapMBtnInner {\n\tbackground: transparent !important;\n\tborder: 0 !important;\n\tbox-shadow: none !important;\n\tpadding: 0 !important;\n\tmin-height: 14px !important;\n\tline-height: 1 !important;\n}\nBlackTextButton .sapMBtnInner .sapMBtnContent {\n\tfont-color: #000000 !important;\n\ttext-align: left !important;\n\tfont-weight: normal !important;\n\tfont-size: 14px !important;\n\tline-height: 1 !important;\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n}\nSmallBlueButton {\n\twidth: 72%;\n\tmax-width: 280px;\n\tmin-width: 140px;\n\tpadding: 2px 4px;\n\tmargin: 1px auto;\n\tborder-radius: 3px;\n\tbackground-color: #0b74de;\n\tfont-color: #fff;\n\ttext-align: center;\n\tfont-size: 11px;\n\tfont-weight: 600;\n\tline-height: 1;\n}\nSpacerLarge {\n\tfont-size: 1px;\n\tfont-color: transparent;\n\tpadding: 2px 2px !important;\n\tmargin: 2px 0 !important;\n\tbackground: transparent;\n\tborder: none;\n\tline-height: 1;\n\theight: 2px !important;\n}\nBlackBoldTitle {\n\tall: initial !important;\n\tbackground: transparent !important;\n\tborder: 0 !important;\n\tbox-shadow: none !important;\n\twidth: 100% !important;\n\ttext-align: center !important;\n\tpadding: 0 !important;\n\tmargin: 2px 0 0 !important;\n\tline-height: 1 !important;\n}\nBlackBoldTitle .sapMBtnText {\n\tfont-color: #111 !important;\n\tfont-weight: 700 !important;\n\tfont-size: 18px;\n\twhite-space: normal;\n\tword-break: break-word;\n\tline-height: 1 !important;\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n}\nInfoLine {\n\twidth: 72%;\n\tmax-width: 280px;\n\tmin-width: 140px;\n\tmargin: 1px auto !important;\n\tfont-color: #000;\n\tline-height: 1 !important;\n}\nInfoLine .sapMBtnInner {\n\tbackground: transparent !important;\n\tborder: 0 !important;\n\tbox-shadow: none !important;\n\tpadding: 0 !important;\n\tmin-height: 16px !important;\n\tfont-color: #000;\n\tline-height: 1 !important;\n\tmargin: 0 !important;\n}\nInfoLine .sapMBtnContent {\n\tjustify-content: flex-start !important;\n\twidth: 100% !important;\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n}\nInfoLine .sapMBtnText,\n.InfoLine .sapMBtnContent {\n\tfont-color: #000 !important;\n\ttext-align: left !important;\n\tfont-weight: 700 !important;\n\tline-height: 1 !important;\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n}\nSectionTight {\n\tpadding-top: 0 !important;\n\tpadding-bottom: 0 !important;\n\tborder: 0 !important;\n\tbackground: transparent !important;\n\tmargin: 0 !important;\n\tline-height: 1 !important;\n}\nGreenButton {\n\tbackground-color: #28a745;\n\tfont-color: white;\n\tfont-weight: bold;\n\tfont-size: 14px;\n\tmin-width: 120px;\n\theight: 30px;\n\tborder-radius: 3px;\n\ttext-align: center;\n\tline-height: 1;\n\tmargin: 1px auto;\n\tpadding: 0 5px;\n}\nRedButton {\n\tbackground-color: #dc3545;\n\tfont-color: white;\n\tfont-weight: bold;\n\tfont-size: 14px;\n\tmin-width: 120px;\n\theight: 30px;\n\tborder-radius: 3px;\n\ttext-align: center;\n\tline-height: 1;\n\tmargin: 1px auto;\n\tpadding: 0 5px;\n}\nSpacerStyle {\n\tfont-size: 1px;\n\tfont-color: transparent;\n\theight: 1px !important;\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tline-height: 1;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/Application/About.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/Application/About.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/EstoqueTransitorio/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/EstoqueTransitorio/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/EstoqueTransitorio/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/EstoqueTransitorio/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/EstoqueTransitorio/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/Application/Support.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/Application/Support.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/EstoqueTransitorio/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/EstoqueTransitorio/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/EstoqueTransitorio/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/EstoqueTransitorio/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/EstoqueTransitorio/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/Application/UserActivityLog.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/Application/UserActivityLog.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/EstoqueTransitorio/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/EstoqueTransitorio/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/EstoqueTransitorio/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/EstoqueTransitorio/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/EstoqueTransitorio/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/EstoqueTransitorio/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/EstoqueTransitorio/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/ConfirmacaoRecebimento.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/ConfirmacaoRecebimento.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"ConfirmacaoRecebimento","Caption":"Dados do pacote","Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"_Type":"Section.Type.ObjectTable","_Name":"MsgSection","Items":[{"_Type":"ObjectTable.Type.ObjectCell","Title":"Recebimento concluído","Subhead":"Materiais recebidos com sucesso pelo posto de estoque transitório.","AccessoryType":"none"}]},{"_Type":"Section.Type.ButtonTable","_Name":"BtnSection","Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center"},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"BtnVoltar","Title":"Voltar","ButtonType":"Text","Width":"60%","OnPress":"/EstoqueTransitorio/Actions/ClosePage.action"}]}]}]}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote1.page":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote1.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"DadosPacote1","ActionBar":{"_Type":"Control.Type.ActionBar","_Name":"AB1","Caption":"Dados do pacote","Items":[]},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"ST1","Sections":[{"_Type":"Section.Type.FormCell","_Name":"S1Tit","Caption":"Atenção","Style":"TituloPerigo"},{"_Type":"Section.Type.FormCell","_Name":"S1Txt","Caption":"Neste pacote há materiais de 03 ordens de manutenção. Favor separar os materiais.\n\nSerá impressa uma etiqueta por material.","Style":"TextoCentro"},{"_Type":"Section.Type.ButtonTable","_Name":"S1Btns","Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"Btn1Next","Title":"Concordar","ButtonType":"Text","OnPress":"Actions/NavToDadosPacote2.action"},{"_Type":"ButtonTable.Type.Button","_Name":"Btn1Back","Title":"Voltar","ButtonType":"Text","OnPress":"Actions/Voltar.action"}],"Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center"}}]}]}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote2.page":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote2.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"DadosPacote2","ActionBar":{"_Type":"Control.Type.ActionBar","_Name":"AB2","Caption":"Dados do pacote (1/3)","Items":[]},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"ST2","Sections":[{"_Type":"Section.Type.FormCell","_Name":"SecTexto","Controls":[{"_Type":"Control.Type.FormCell.Note","_Name":"Hdr","Text":"Ordem: 202506075542 (Manutenção de conversor)\nEquipamento: CONV-01-100","Style":"TextoCentro_Note"},{"_Type":"Control.Type.FormCell.Note","_Name":"TabelaMock","Text":"Material    Qte    Pto Desc.\n151001      5      Recepção\n151002      1      Recepção","Style":"TextoCentro_Note"}]},{"_Type":"Section.Type.ButtonTable","_Name":"S2BtnsRow1","Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"BtnReceber","Title":"Receber","ButtonType":"Text","OnPress":"Actions/Receber.action"},{"_Type":"ButtonTable.Type.Button","_Name":"BtnSomenteImprimir","Title":"Somente imprimir","ButtonType":"Text","OnPress":"Actions/SomenteImprimir.action"}],"Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center"}},{"_Type":"Section.Type.ButtonTable","_Name":"S2BtnsRow2","Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"BtnVoltar","Title":"Voltar","ButtonType":"Text","OnPress":"Actions/Voltar.action"},{"_Type":"ButtonTable.Type.Button","_Name":"BtnProximaOM","Title":"Próxima OM","ButtonType":"Text","OnPress":"Actions/ProximaOM.action"}],"Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center"}}]}]}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote3.page":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/DadosPacote/DadosPacote3.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"DadosPacote3","ActionBar":{"_Type":"Control.Type.ActionBar","_Name":"AB3","Caption":"Dados do pacote","Items":[]},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"ST3","Sections":[{"_Type":"Section.Type.FormCell","_Name":"SecTexto","Controls":[{"_Type":"Control.Type.FormCell.Note","_Name":"NoteTitulo","Text":"Recebimento concluído","Style":"TituloSucesso_Note"},{"_Type":"Control.Type.FormCell.Note","_Name":"NoteDesc","Text":"Materiais recebidos com sucesso pelo posto de estoque transitório.","Style":"TextoCentro_Note"}]},{"_Type":"Section.Type.ButtonTable","_Name":"S3Btns","Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"Btn3Back","Title":"Voltar","ButtonType":"Text","OnPress":"Actions/Voltar.action"}],"Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center"}}]}]}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/EscanearPacote.page":
/*!************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/EscanearPacote.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"Código do Pacote","PlaceHolder":"Escaneie ou digite","Enabled":true,"IsEditable":true,"AccessoryType":"Scan","OnAccessoryButtonPress":"Actions/ScanBarcode.action"},{"_Type":"Control.Type.FormCell.Button","_Name":"CameraScan","Text":"Escanear","OnPress":"Actions/ScanBarcode.action"}],"Layout":{"NumberOfColumns":1},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"EscanearPacote","ActionBar":{"Items":[],"_Name":"ActionBar2","_Type":"Control.Type.ActionBar","Caption":"Escanear Pacote"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/FiltroSolicEntradaLojaKit.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/FiltroSolicEntradaLojaKit.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"FiltroSolicEntradaLojaKit","Caption":"Filtros","Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"_Type":"Section.Type.FormCell","_Name":"Campos","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FiltroTexto","Placeholder":"Solicitação / OM / Equipamento","Value":"#Application/#ClientData/filtroSolicEntrada/texto","AutoCapitalize":"None","KeyboardType":"Default","ReturnKeyType":"Done","OnValueChange":"/EstoqueTransitorio/Rules/StoreFiltroTexto.js"}]},{"_Type":"Section.Type.ButtonTable","_Name":"Acoes","Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"BtnCancelar","Title":"Cancelar","ButtonType":"Text","OnPress":"~/EstoqueTransitorio/Actions/CloseModalPage.action"},{"_Type":"ButtonTable.Type.Button","_Name":"BtnAplicar","Title":"Aplicar","ButtonType":"Text","OnPress":"~/EstoqueTransitorio/Actions/CloseModalPage_Complete.action"}]}]}]}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/Main.page":
/*!**************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/Main.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Center"},"_Type":"Section.Type.ButtonTable","_Name":"TitleSection","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"BlackBoldTitle"},"_Type":"ButtonTable.Type.Button","_Name":"AppTitle","Title":"Gestão de Estoque Transitório","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":false}]},{"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Center"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"_Type":"Section.Type.ButtonTable","_Name":"MainButtonsSection","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"SmallBlueButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnPreferencias","Title":"Preferências","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/NavToPreferencias.action"},{"Styles":{"Button":"SmallBlueButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnEscanear","Title":"Escanear Pacote","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/NavToEscanearPacote.action"},{"Styles":{"Button":"SmallBlueButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnEntradaKit","Title":"Entrada de Loja do KIT","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/NavToSolicitacoes.action"},{"Styles":{"Button":"SmallBlueButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnEntradaSobra","Title":"Entrada de Sobra","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/NavToPreferencias.action"},{"Styles":{"Button":"SmallBlueButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnTransferencias","Title":"Transferências de OM","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/NavToPreferencias.action"},{"Styles":{"Button":"SmallBlueButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnPendencias","Title":"Pendências Recebimento","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/EstoqueTransitorio/Actions/NavToPreferencias.action"}]},{"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Center"},"Separators":{"TopSectionSeparator":true,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Styles":{"Section":"SpacingSection"},"_Type":"Section.Type.ButtonTable","_Name":"InfoResumo","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"InfoLine"},"_Type":"ButtonTable.Type.Button","_Name":"BtnCentro","Title":"Centro: 1090 - Usina Vitória","Alignment":"Left","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":false},{"Styles":{"Button":"InfoLine"},"_Type":"ButtonTable.Type.Button","_Name":"BtnCentroTrab","Title":"Centro de Trabalho: SU15","Alignment":"Left","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":false},{"Styles":{"Button":"InfoLine"},"_Type":"ButtonTable.Type.Button","_Name":"BtnDepMM","Title":"Depósito MM: PET1","Alignment":"Left","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":false},{"Styles":{"Button":"InfoLine"},"_Type":"ButtonTable.Type.Button","_Name":"BtnDepWM","Title":"Nº Depósito WM: 00A","Alignment":"Left","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":false},{"Styles":{"Button":"InfoLine"},"_Type":"ButtonTable.Type.Button","_Name":"BtnImpressora","Title":"Impressora: ZEBRA-PET1","Alignment":"Left","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":false}]}]}],"_Type":"Page","_Name":"Main","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/Preferencias.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/Preferencias.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.ListPicker","_Name":"PickerCentro","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Centro:","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":[]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"PickerCentroTrabalho","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Centro de trabalho:","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":[]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"PickerDepositoMM","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Depósito MM:","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":[]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"PickerDepositoWM","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Nº Depósito WM:","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":[]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"PickerImpressora","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Impressora:","IsSelectedSectionEnabled":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":[]}],"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"FormSection_Prefs"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_Actions","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"GreenButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnGravar","Title":"Gravar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true},{"Styles":{"Button":"RedButton"},"_Type":"ButtonTable.Type.Button","_Name":"BtnCancelar","Title":"Cancelar","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Preferencias","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/SolicEntrega_Detalhe.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/SolicEntrega_Detalhe.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"SolicEntrega_Detalhe","Caption":"Dados do pacote (1/3)","ActionBar":{"Items":[]},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"_Type":"Section.Type.KeyValue","_Name":"CabecalhoSection","KeyAndValues":[{"Key":"Ordem:","Value":"202500675542 (Manutenção de conversor)"},{"Key":"Equipamento:","Value":"CONN-01-100"}]},{"_Type":"Section.Type.ObjectTable","_Name":"MateriaisSection","Selection":{"Type":"SelectionType.Multiple"},"EmptySection":{"Footer":"Sem materiais."},"ObjectCells":[{"Title":"151001","StatusText":"Qte: 5","Footnote":"Pto Desc.: Recepção","AccessoryType":"none"},{"Title":"151002","StatusText":"Qte: 1","Footnote":"Pto Desc.: Recepção","AccessoryType":"none"}]},{"_Type":"Section.Type.ButtonTable","_Name":"BotoesLinha1","Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center","HorizontalSpacing":8},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"BtnReceber","Title":"Receber","ButtonType":"Text","Width":"48%","OnPress":"/EstoqueTransitorio/Actions/ReceberMateriais.action","Enabled":"/EstoqueTransitorio/Rules/EnableReceber.js"},{"_Type":"ButtonTable.Type.Button","_Name":"BtnImprimir","Title":"Somente imprimir","ButtonType":"Text","Width":"48%","OnPress":"/EstoqueTransitorio/Actions/SomenteImprimir.action"}]},{"_Type":"Section.Type.ButtonTable","_Name":"BotoesLinha2","Layout":{"LayoutType":"Horizontal","HorizontalAlignment":"Center","HorizontalSpacing":8},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"BtnVoltar","Title":"Voltar","ButtonType":"Text","Width":"48%","OnPress":"/EstoqueTransitorio/Actions/Voltar.action"},{"_Type":"ButtonTable.Type.Button","_Name":"BtnProximaOM","Title":"Próxima OM","ButtonType":"Text","Width":"48%","OnPress":"/EstoqueTransitorio/Actions/ProximaOM.action"}]}]}]}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Pages/SolicEntrega_EntradaLojaKit.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Pages/SolicEntrega_EntradaLojaKit.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"SolicEntrega_EntradaLojaKit","Caption":"Solicitação de entrega","ActionBar":{"_Type":"Control.Type.ActionBar","_Name":"ActionBar","Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"BtnFiltro","Icon":"sap-icon://filter","Position":"Right","OnPress":"/EstoqueTransitorio/Actions/FiltroSolicEntradaLojaKit.action"}]},"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"_Type":"Section.Type.FormCell","_Name":"BuscaSection","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"InputBusca","Placeholder":"Solicitação / OM","AccessoryView":"ClearButton","ReturnKeyType":"Search","OnValueChange":"/EstoqueTransitorio/Rules/StoreBusca.js"}]},{"_Type":"Section.Type.KeyValue","_Name":"Solicitacao_1","KeyAndValues":[{"Key":"Solicitação: 1800213110","Value":"Ordem: 202506975542 (Manutenção de conversor)\nEquipamento: CONV-01-100\nNº componentes: 5"}]},{"_Type":"Section.Type.KeyValue","_Name":"Solicitacao_2","KeyAndValues":[{"Key":"Solicitação: 1800213111","Value":"Ordem: 202506975542 (Manutenção de conversor)\nEquipamento: CONV-01-100\nNº componentes: 5"}]},{"_Type":"Section.Type.KeyValue","_Name":"Solicitacao_3","KeyAndValues":[{"Key":"Solicitação: 1800213112","Value":"Ordem: 202506975542 (Manutenção de conversor)\nEquipamento: CONV-01-100\nNº componentes: 5"}]}]}]}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"EstoqueTransitorio","Version":"/EstoqueTransitorio/Globals/Application/AppDefinition_Version.global","MainPage":"/EstoqueTransitorio/Pages/Main.page","OnLaunch":"/EstoqueTransitorio/Rules/Service/Initialize.js","OnWillUpdate":"/EstoqueTransitorio/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/EstoqueTransitorio/Rules/Service/Initialize.js","Styles":"/EstoqueTransitorio/Styles/Styles.less","Localization":"/EstoqueTransitorio/i18n/i18n.properties","_SchemaVersion":"25.6","StyleSheets":{"Styles":{"css":"/EstoqueTransitorio/Styles/Styles.css","ios":"/EstoqueTransitorio/Styles/Styles.nss","android":"/EstoqueTransitorio/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdate.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdate.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/EstoqueTransitorio/Rules/Application/AppUpdateFailure.js","OnSuccess":"/EstoqueTransitorio/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateFailureMessage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateFailureMessage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateProgressBanner.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateProgressBanner.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/EstoqueTransitorio/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateSuccessMessage.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/Logout.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/Logout.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/NavToAbout.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/NavToAbout.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/EstoqueTransitorio/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/NavToActivityLog.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/NavToActivityLog.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/EstoqueTransitorio/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/NavToSupport.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/NavToSupport.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/EstoqueTransitorio/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/OnWillUpdate.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/OnWillUpdate.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/Reset.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/Reset.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/ResetMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/ResetMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/EstoqueTransitorio/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Application/UserMenuPopover.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Application/UserMenuPopover.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/EstoqueTransitorio/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/EstoqueTransitorio/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/EstoqueTransitorio/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/EstoqueTransitorio/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/EstoqueTransitorio/Actions/Application/Logout.action","Title":"Logout","Visible":"/EstoqueTransitorio/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/CloseModalPage_Cancel.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/CloseModalPage_Cancel.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/CloseModalPage_Complete.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/CloseModalPage_Complete.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/ClosePage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/ClosePage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Concordar.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Concordar.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Concordado. (avance para a próxima etapa aqui)"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/FiltroSolicEntradaLojaKit.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/FiltroSolicEntradaLojaKit.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EstoqueTransitorio/Pages/FiltroSolicEntradaLojaKit.page","ModalPage":true,"Transition":{"0":"N","1":"o","2":"n","3":"e"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/GenericBannerMessage.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/GenericBannerMessage.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/GenericMessageBox.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/GenericMessageBox.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/GenericNavigation.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/GenericNavigation.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/EstoqueTransitorio/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/GenericToastMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/GenericToastMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Logging/LogUploadFailure.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Logging/LogUploadFailure.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Logging/LogUploadSuccessful.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Logging/LogUploadSuccessful.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Logging/UploadLog.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Logging/UploadLog.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/EstoqueTransitorio/Actions/Logging/LogUploadFailure.action","OnSuccess":"/EstoqueTransitorio/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Logging/UploadLogProgress.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Logging/UploadLogProgress.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/EstoqueTransitorio/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/NavBackToSolicitacoes.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/NavBackToSolicitacoes.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EstoqueTransitorio/Pages/SolicEntrega_EntradaLojaKit.page","ModalPage":false,"Transition":{"0":"N","1":"o","2":"n","3":"e"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/NavToDadosPacote1.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/NavToDadosPacote1.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"Pages/Application/DadosPacote/DadosPacote1.page","NavType":"Push"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/NavToEscanearPacote.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/NavToEscanearPacote.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToEscanearPacote"},"PageToOpen":"/EstoqueTransitorio/Pages/EscanearPacote.page"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/NavToPreferencias.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/NavToPreferencias.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToPreferencias"},"PageToOpen":"/EstoqueTransitorio/Pages/Preferencias.page"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/NavToSolicitacoes.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/NavToSolicitacoes.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EstoqueTransitorio/Pages/SolicEntrega_EntradaLojaKit.page","ModalPage":false,"Transition":{"0":"N","1":"o","2":"n","3":"e"},"ResetIfPresent":true}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/ProximaOM.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/ProximaOM.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EstoqueTransitorio/Pages/SolicEntrega_Detalhe.page","ModalPage":false,"Transition":{"0":"N","1":"o","2":"n","3":"e"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/ReceberMateriais.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/ReceberMateriais.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/EstoqueTransitorio/Pages/ConfirmacaoRecebimento.page","ModalPage":false,"Transition":{"0":"N","1":"o","2":"n","3":"e"}}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/ScanBarcode.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/ScanBarcode.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenBarcodeScanner","IsModal":true,"OnSuccess":"Rules/OnScanSuccess.js","OnFailure":"Rules/OnScanFail.js"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/SomenteImprimir.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/SomenteImprimir.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","Message":"Impressão enviada para a fila.","Duration":3}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Actions/Voltar.action":
/*!********************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Actions/Voltar.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"Pages/Application/EscanearPacote.page","NavType":"Push"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Globals/Application/AppDefinition_Version.global":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Globals/Application/AppDefinition_Version.global ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Globals/Application/ApplicationName.global":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Globals/Application/ApplicationName.global ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Globals/Application/SupportEmail.global":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Globals/Application/SupportEmail.global ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Globals/Application/SupportPhone.global":
/*!**************************************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Globals/Application/SupportPhone.global ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/Styles/Styles.json":
/*!*****************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/Styles/Styles.json ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"BlackBoldTitle *":{"all":"initial !important","font-color":"#000000 !important","font-weight":"bold !important","font-size":"18px !important","text-align":"center !important","background":"transparent !important","border":"0 !important"},"BlackTextButton":{"background":"transparent !important","border":"0 !important","box-shadow":"none !important","width":"72% !important","max-width":"280px !important","min-width":"140px !important","margin":"0 auto !important","padding":"0 !important"},"BlackTextButton .sapMBtnInner":{"background":"transparent !important","border":"0 !important","box-shadow":"none !important","padding":"0 !important","min-height":"14px !important","line-height":"1 !important"},"BlackTextButton .sapMBtnInner .sapMBtnContent":{"font-color":"#000000 !important","text-align":"left !important","font-weight":"normal !important","font-size":"14px !important","line-height":"1 !important","margin":"0 !important","padding":"0 !important"},"SmallBlueButton":{"width":"72%","max-width":"280px","min-width":"140px","padding":"2px 4px","margin":"1px auto","border-radius":"3px","background-color":"#0b74de","font-color":"#fff","text-align":"center","font-size":"11px","font-weight":"600","line-height":"1"},"SpacerLarge":{"font-size":"1px","font-color":"transparent","padding":"2px 2px !important","margin":"2px 0 !important","background":"transparent","border":"none","line-height":"1","height":"2px !important"},"BlackBoldTitle":{"all":"initial !important","background":"transparent !important","border":"0 !important","box-shadow":"none !important","width":"100% !important","text-align":"center !important","padding":"0 !important","margin":"2px 0 0 !important","line-height":"1 !important"},"BlackBoldTitle .sapMBtnText":{"font-color":"#111 !important","font-weight":"700 !important","font-size":"18px","white-space":"normal","word-break":"break-word","line-height":"1 !important","margin":"0 !important","padding":"0 !important"},"InfoLine":{"width":"72%","max-width":"280px","min-width":"140px","margin":"1px auto !important","font-color":"#000","line-height":"1 !important"},"InfoLine .sapMBtnInner":{"background":"transparent !important","border":"0 !important","box-shadow":"none !important","padding":"0 !important","min-height":"16px !important","font-color":"#000","line-height":"1 !important","margin":"0 !important"},"InfoLine .sapMBtnContent":{"justify-content":"flex-start !important","width":"100% !important","margin":"0 !important","padding":"0 !important"},"InfoLine .sapMBtnText,\\n.InfoLine .sapMBtnContent":{"font-color":"#000 !important","text-align":"left !important","font-weight":"700 !important","line-height":"1 !important","margin":"0 !important","padding":"0 !important"},"SectionTight":{"padding-top":"0 !important","padding-bottom":"0 !important","border":"0 !important","background":"transparent !important","margin":"0 !important","line-height":"1 !important"},"GreenButton":{"background-color":"#28a745","font-color":"white","font-weight":"bold","font-size":"14px","min-width":"120px","height":"30px","border-radius":"3px","text-align":"center","line-height":"1","margin":"1px auto","padding":"0 5px"},"RedButton":{"background-color":"#dc3545","font-color":"white","font-weight":"bold","font-size":"14px","min-width":"120px","height":"30px","border-radius":"3px","text-align":"center","line-height":"1","margin":"1px auto","padding":"0 5px"},"SpacerStyle":{"font-size":"1px","font-color":"transparent","height":"1px !important","margin":"0 !important","padding":"0 !important","line-height":"1"}}');

/***/ }),

/***/ "./build.definitions/EstoqueTransitorio/jsconfig.json":
/*!************************************************************!*\
  !*** ./build.definitions/EstoqueTransitorio/jsconfig.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*","EstoqueTransitorio/.typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map