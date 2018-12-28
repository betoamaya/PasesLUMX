//***********************************P R O D U C C I O N /PUBLICADO*****************************************************
//Variables Globales
var labelWidth = "500px";
var txtWidth = "400px";
var btnWidth = "125px";

//Base
var ssBase = "1r-ga-8Lsns-wjShABabu9RtLBtA160nWDuHmfjFDTHI";
var shLog = "Log";
var shPases = "BasePases";

//Imprimir
var ssImp = "1LwPH-vU6CRHCHSU6XzGdFZ1pbo9z7eyZUDxmv0354hE";
var shImp = "Pase";

//Imagenes
var urlLogo = "https://lh3.googleusercontent.com/5sgfSVFvSoC5pFs8dSiK8MHYbHP3dUAU8RNP3-WDYnCxEKIeM9QIZYmrlmRXyHxWE_BQterKjQ=w1600-h900-rw-no";

//Variables Globales
var tRegistro;
var sFechaVencimiento = '30 de Junio del 2019';

//*-*-*-*-*-*-*-*-*-*-*-*-*-* I N I C I O *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*                                    INICIO
function doGet(e) {
  var app = UiApp.createApplication().setTitle("Registrar Pase Lumx");
  //Panel Inicio
  pnlInicio_(app, "0")
  return app;
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-* E S T I L O S *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*                                  ESTILOS
function styleTitulo_(label) {
  label.setStyleAttribute("marginTop","20px");
  label.setStyleAttribute("fontSize", "14pt");
  label.setStyleAttribute("fontFamily","Roboto");
  label.setStyleAttribute("fontWeight", "bold");
  label.setStyleAttribute("color","#286389");
}

function styleLbl_(label) {
  label.setStyleAttribute("marginTop","10px");
  label.setStyleAttribute("fontSize", "10pt");
  label.setStyleAttribute("fontFamily","Roboto");
  label.setStyleAttribute("font-weight", "bold");
  label.setStyleAttribute("color","#286389");
}

function styleSublbl_(label) {
  label.setStyleAttribute("marginTop","2px");
  label.setStyleAttribute("fontSize", "8pt");
  label.setStyleAttribute("fontFamily","Roboto");
  label.setStyleAttribute("fontWeight", "normal");
  label.setStyleAttribute("color","gray");
}

function styleLbx_(lbx) {
  lbx.setStyleAttribute("marginTop","2px");
  lbx.setVisibleItemCount(1);
  lbx.setWidth(txtWidth);
  lbx.setStyleAttribute("fontSize", "10pt");
  lbx.setStyleAttribute("fontFamily","Roboto");
  lbx.setStyleAttribute("fontWeight", "normal");
  lbx.setStyleAttribute("color","Black");
}

function styleTxt_(txt) {
  txt.setStyleAttribute("marginTop","2px");
  txt.setStyleAttribute("fontSize", "10pt");
  txt.setStyleAttribute("fontFamily","Roboto");
  txt.setStyleAttribute("fontWeight", "normal");
  txt.setStyleAttribute("color","Black");
  txt.setWidth(txtWidth);
  txt.setMaxLength(80);
}

function styleTxt2_(txt) {
  txt.setStyleAttribute("marginTop","2px");
  txt.setStyleAttribute("fontSize", "10pt");
  txt.setStyleAttribute("fontFamily","Roboto");
  txt.setStyleAttribute("fontWeight", "normal");
  txt.setStyleAttribute("color","Black");
}
  
function styleError_(label) {
  label.setStyleAttribute("marginTop","20px");
  label.setStyleAttribute("marginBottom","20px");
  label.setStyleAttribute("fontSize", "12pt");
  label.setStyleAttribute("fontFamily","Roboto");
  label.setStyleAttribute("fontWeight", "bold");
  label.setStyleAttribute("color","#BD0E0E");
}

function styleBtn_(btn) {
  btn.setStyleAttribute("marginTop","20px");
  btn.setStyleAttribute("marginRight","5px");
  btn.setStyleAttribute("fontSize", "10pt");
  btn.setStyleAttribute("fontFamily","Roboto");
  btn.setStyleAttribute("fontWeight", "bold");
  btn.setStyleAttribute("color","Black");
  btn.setWidth(btnWidth);
}

function styleBtnFalse_(btn) {
  btn.setStyleAttribute("marginTop","20px");
  btn.setStyleAttribute("marginRight","5px");
  btn.setStyleAttribute("fontSize", "10pt");
  btn.setStyleAttribute("fontFamily","Roboto");
  btn.setStyleAttribute("font-weight", "bold");
  btn.setStyleAttribute("color","gray");
  btn.setWidth(btnWidth);
}

function styleImgLogo_(img){
  img.setStyleAttribute("marginTop","5px")
  img.setStyleAttribute("marginBottom","5px")
  img.setStyleAttribute("height", "30%");
}

function stylePnl_(pnl){
  pnl.setWidth("600px");
  pnl.setStyleAttribute("backgroundColor", "#f7f7f7");
  pnl.setStyleAttribute("padding", "20px");
  pnl.setStyleAttribute("fontSize", "12px");
}
//*-*-*-*-*-*-*-*-*-*-*-*-*-* P A N E L E S *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*                                  PANELES
function pnlInicio_(container){                                                                                                          //pnlInicio
  //Crear Panel Vertical
  var vPanel = container.createVerticalPanel().setId("vPanel");
  stylePnl_(vPanel);
  //Imagen Logo
  var imgLogo = container.createImage(urlLogo);
  styleImgLogo_(imgLogo);
  //Mensaje Inicial
  var lblTitulo = container.createLabel().setId("lblTitulo").setText("Registrar Pase LUMX");
  styleTitulo_(lblTitulo);
   // Mensaje Busqueda
  var lblBusqueda = container.createLabel().setId("lblBusqueda").setText("Buscar Pase:");
  styleLbl_(lblBusqueda);
  // Sub-Mensaje Busqueda
   var lblsBusqueda = container.createLabel().setId("lblsBusqueda").setText("Introduzca número de Pase ");
  styleSublbl_(lblsBusqueda);
  // Text Box Busqueda
  var txtBusqueda = container.createTextBox().setFocus(true).setName("txtBusqueda");
  styleTxt_(txtBusqueda);
  txtBusqueda.setMaxLength(19);
  //Crear Panel Horizontal
  var hPanel = container.createHorizontalPanel();
  //Boton Buscar
  var btnBuscar = container.createButton().setText("Buscar");
  styleBtn_(btnBuscar);
  //Boton Nuevo  
  var btnNuevo = container.createButton().setText("Crear Registro");
  styleBtn_(btnNuevo); 
  // Accion Boton Buscar
  var lnzBuscar = container.createServerHandler('clickBuscar_').addCallbackElement(vPanel);
  btnBuscar.addClickHandler(lnzBuscar);
  // Accion Boton Nuevo
  var lnzNuevo = container.createServerHandler('clickNuevo_').addCallbackElement(vPanel);
  btnNuevo.addClickHandler(lnzNuevo);
  //Agregar al Panel Horizontal
  hPanel.add(btnBuscar);
  hPanel.add(btnNuevo);
    
  //Agregar vPanel
  vPanel.add(imgLogo);
  vPanel.add(lblTitulo);
  vPanel.add(lblBusqueda);
  vPanel.add(lblsBusqueda);
  vPanel.add(txtBusqueda);
  vPanel.add(hPanel);
  //Agregar a APP
  container.add(vPanel);
}
function pnlResultados_(container, sBuscar, tResultados){
  var vPanel = container.createVerticalPanel().setId("vPanel");
  stylePnl_(vPanel);
  var imgLogo = container.createImage(urlLogo);
  styleImgLogo_(imgLogo);
  var lblTitulo = container.createLabel().setId("lblTitulo").setText("Resultados de la Busqueda");
  styleTitulo_(lblTitulo);
  var lblsInfo = container.createLabel().setId("lblsInfo").setText(sBuscar);
  styleSublbl_(lblsInfo);
  
  var hPanel = container.createHorizontalPanel();
  var btnCancelar = container.createButton().setText("Regresar");
  styleBtn_(btnCancelar);
  var lnzCancelar = container.createServerHandler("clickInicio_").addCallbackElement(vPanel);
  btnCancelar.addClickHandler(lnzCancelar);
  
  var btnEditar = container.createButton().setText("Editar");
  styleBtn_(btnEditar);
  var lnzEditar = container.createServerHandler("clickPnlEditar_").addCallbackElement(vPanel);
  btnEditar.addClickHandler(lnzEditar);
  
  var btnImprimir = container.createButton().setText("Imprimir");
  styleBtn_(btnImprimir);
  var lnzImprimir = container.createServerHandler("clickPnlImprimir_").addCallbackElement(vPanel);
  btnImprimir.addClickHandler(lnzImprimir);
  
  var txtPase = container.createTextBox().setName("txtPase");
  txtPase.setText(tResultados[0][2]).setVisible(false);
 
  
  var iX = tResultados.length;
  hPanel.add(btnCancelar);
  
  if (iX == 1){
    hPanel.add(btnEditar);
    hPanel.add(btnImprimir);
  }
  
  var grdResultados = container.createGrid(iX + 1, 6).setBorderWidth(0).setCellSpacing(5).setCellPadding(5);
  
  grdResultados.setText(0,0,"Folio").setText(0,1,"Fecha").setText(0,2,"Nombre").setText(0,3,"Ruta").setText(0,4,"Vencimiento");
  grdResultados.setRowStyleAttribute(0, "fontSize", "8pt").setRowStyleAttribute(0, "fontFamily","Roboto").setRowStyleAttribute(0, "font-weight", "bold")
  .setRowStyleAttribute(0, "backgroundColor","#286389").setRowStyleAttribute(0, "color","white");
  
  for(var ii = 0; ii < iX; ii++){
    grdResultados.setText(ii + 1,0,tResultados[ii][2])
    .setText(ii + 1,1,tResultados[ii][3] + "/" + tResultados[ii][4] + "/" + tResultados[ii][5])
    .setText(ii + 1,2,tResultados[ii][6])
    .setText(ii + 1,3,tResultados[ii][7])
    .setText(ii + 1,4,tResultados[ii][8]);
    //.setText(ii + 1,5, var btnImprimir = container.createButton().setText("Imprimir").addClickHandler(var lnzImprimir = new container.createServerHandler('clickImprimir_').addCallbackElement(tLog[ii][2])));
    grdResultados.setRowStyleAttribute(ii + 1, "fontSize", "8pt").setRowStyleAttribute(ii + 1, "fontFamily","Roboto").setRowStyleAttribute(ii + 1, "font-weight", "normal")
    .setRowStyleAttribute(ii + 1, "color","gray");
  }
  
  vPanel.add(imgLogo);
  vPanel.add(lblTitulo);
  vPanel.add(lblsInfo);
  vPanel.add(hPanel);
  vPanel.add(grdResultados);
  vPanel.add(txtPase);
  
  container.add(vPanel);
}
function pnlRegistrarPase_(container, iOpc, tTemporal){                                                                                                          //pnlRegistrarPase
  //Crear Panel Vertical
  var vPanel = container.createVerticalPanel().setId("vPanel");
  stylePnl_(vPanel);
  //Cargar elementos
  var imgLogo = container.createImage(urlLogo);
  styleImgLogo_(imgLogo);
  
  var lblTitulo = container.createLabel().setId("lblTitulo").setText("Crear Registro");
  styleTitulo_(lblTitulo);
  var lblsInfo = container.createLabel().setId("lblsInfo");
  styleSublbl_(lblsInfo);
  
  var lblPase = container.createLabel().setId("lblPase").setText("No. de Pase:");
  styleLbl_(lblPase);
  var slblPase = container.createLabel().setId("slblPase").setText("Introduzca No. de Pase");
  styleSublbl_(slblPase);
  var txtPase = container.createTextBox().setName("txtPase");
  styleTxt_(txtPase);
  
  var lblFecha = container.createLabel().setId("lblFecha").setText("Fecha:");
  styleLbl_(lblFecha);
  
  var grdFecha = container.createGrid(2, 3).setBorderWidth(0).setCellSpacing(1).setCellPadding(1);
  
  var lblsDia = container.createLabel().setId("lblsDia").setText("Dia:");;
  styleSublbl_(lblsDia);
  grdFecha.setWidget(0,0, lblsDia);
  
  var txtDia = container.createTextBox().setName("txtDia").setMaxLength(2).setWidth("30px");
  styleTxt2_(txtDia);
  grdFecha.setWidget(1,0, txtDia);
  
  var lblsMes = container.createLabel().setId("lblsMes").setText("Mes:");
  styleSublbl_(lblsMes);
  grdFecha.setWidget(0,1, lblsMes);
  
  var txtMes = container.createTextBox().setName("txtMes").setMaxLength(2).setWidth("30px");
  styleTxt2_(txtMes);
  grdFecha.setWidget(1,1, txtMes);
  
  var lblsAno = container.createLabel().setId("lblsAno").setText("Año:");;
  styleSublbl_(lblsAno);
  grdFecha.setWidget(0,2, lblsAno);
  
  var txtAno = container.createTextBox().setName("txtAno").setMaxLength(4).setWidth("60px");
  styleTxt2_(txtAno);
  grdFecha.setWidget(1,2, txtAno);
  
  var lblNombre = container.createLabel().setId("lblNombre").setText("Nombre:");
  styleLbl_(lblNombre);
  var slblNombre = container.createLabel().setId("slblNombre").setText("Introduzca Nombre del beneficiario del pase");
  styleSublbl_(slblNombre);
  var txtNombre = container.createTextBox().setName("txtNombre");
  styleTxt_(txtNombre);
  
  var lblRuta = container.createLabel().setId("lblRuta").setText("Ruta:");
  styleLbl_(lblRuta);
  var slblRuta = container.createLabel().setId("slblRuta").setText("Introduzca la Ruta que comprende el pase ");
  styleSublbl_(slblRuta);
  var txtRuta = container.createTextBox().setName("txtRuta");
  styleTxt_(txtRuta);
  
  var lblVencimiento = container.createLabel().setId("lblVencimiento").setText("Vencimiento:");
  styleLbl_(lblVencimiento);
  var slblVencimiento = container.createLabel().setId("slblVencimiento").setText("Introduzca el vencimiento del pase");
  styleSublbl_(slblVencimiento);
  var txtVencimiento = container.createTextBox().setName("txtVencimiento");
  styleTxt_(txtVencimiento);
  
  var lblAtn = container.createLabel().setId("lblAtn").setText("At´n:");
  styleLbl_(lblAtn);
  var slblAtn = container.createLabel().setId("slblAtn").setText("Introduzca At´n");
  styleSublbl_(slblAtn);
  var txtAtn = container.createTextBox().setName("txtAtn");
  styleTxt_(txtAtn);
  
  var lblDescuento = container.createLabel().setId("lblDescuento").setText("Porcentaje de Descuento:");
  styleLbl_(lblDescuento);
  var slblDescuento = container.createLabel().setId("slblDescuento").setText("Introduzca porcentaje de descuento");
  styleSublbl_(slblDescuento);
  var txtDescuento = container.createTextBox().setName("txtDescuento");
  styleTxt_(txtDescuento);
  
  //Var Fila
  var txtFila = container.createTextBox().setName("txtFila").setVisible(false);
  txtFila.setText("0");
  
  //Crear Panel Horizontal
  var hPanel = container.createHorizontalPanel();
  //Boton Regresar
  var btnCancelar = container.createButton().setText("Cancelar");
  styleBtn_(btnCancelar);
  var lnzCancelar = container.createServerHandler("clickInicio_").addCallbackElement(vPanel);
  btnCancelar.addClickHandler(lnzCancelar);
  
  var btnGuardar = container.createButton().setText("Guardar");
  styleBtn_(btnGuardar);
  var lnzGuardar = container.createServerHandler("clickGuardarRegistro_").addCallbackElement(vPanel);
  btnGuardar.addClickHandler(lnzGuardar);
  
  hPanel.add(btnCancelar);
  hPanel.add(btnGuardar);
  
  //Opciones del Panel
  if (iOpc == 0){
    lblsInfo.setText("Ingrese los datos para la creación de un nuevo Pase");
    txtVencimiento.setText(sFechaVencimiento);
  }
  if (iOpc == 1){
    lblsInfo.setText("Ingrese los datos para la creación de un nuevo Pase");
    txtPase.setText(tTemporal[0][2]);
    txtPase.setEnabled(true);
    txtDia.setText(tTemporal[0][3]);
    txtMes.setText(tTemporal[0][4]);
    txtAno.setText(tTemporal[0][5]);
    txtNombre.setText(tTemporal[0][6]);
    txtRuta.setText(tTemporal[0][7]);
    txtVencimiento.setText(tTemporal[0][8]);
    txtAtn.setText(tTemporal[0][9]);
    txtDescuento.setText(tTemporal[0][10]);
    txtFila.setText(tTemporal[0][11]);
  }
  if (iOpc == 2){
    lblsInfo.setText("Edite los datos del Pase");
    txtPase.setText(tTemporal[0][2]);
    txtPase.setEnabled(false);
    txtDia.setText(tTemporal[0][3]);
    txtMes.setText(tTemporal[0][4]);
    txtAno.setText(tTemporal[0][5]);
    txtNombre.setText(tTemporal[0][6]);
    txtRuta.setText(tTemporal[0][7]);
    txtVencimiento.setText(tTemporal[0][8]);
    txtAtn.setText(tTemporal[0][9]);
    txtDescuento.setText(tTemporal[0][10]);
    txtFila.setText(tTemporal[0][11]);
  }
  vPanel.add(imgLogo);
  vPanel.add(lblTitulo);
  vPanel.add(lblsInfo);
  vPanel.add(lblPase);
  vPanel.add(slblPase);
  vPanel.add(txtPase);
  vPanel.add(lblFecha);
  vPanel.add(grdFecha);
  vPanel.add(lblNombre);
  vPanel.add(slblNombre);
  vPanel.add(txtNombre);
  vPanel.add(lblRuta);
  vPanel.add(slblRuta);
  vPanel.add(txtRuta);
  vPanel.add(lblVencimiento);
  vPanel.add(slblVencimiento);
  vPanel.add(txtVencimiento);
  vPanel.add(lblAtn);
  vPanel.add(slblAtn);
  vPanel.add(txtAtn);
  vPanel.add(lblDescuento);
  vPanel.add(slblDescuento);
  vPanel.add(txtDescuento);
  vPanel.add(txtFila);
  
  txtPase.setFocus(true);
  vPanel.add(hPanel)
  //Agregar a APP
  container.add(vPanel); 
}

function pnlImprimir_(container, tRegistro){
  
  var vPanel = container.createVerticalPanel().setId("vPanel");
  stylePnl_(vPanel);
  var imgLogo = container.createImage(urlLogo);
  styleImgLogo_(imgLogo);
  var lblTitulo = container.createLabel().setId("lblTitulo").setText("Imprimir");
  styleTitulo_(lblTitulo);
  var lblsInfo = container.createLabel().setId("lblsInfo").setText("Verifique los datos antes de Imprimir");
  styleSublbl_(lblsInfo);
  
  var grdImprimir = container.createGrid(6, 2).setBorderWidth(0).setCellSpacing(5).setCellPadding(5);
  
  grdImprimir.setText(0,0,"Folio:").setText(0,1,tRegistro[0][2]);
  grdImprimir.setText(1,0,"Fecha:").setText(1,1,tRegistro[0][3] + "/" + tRegistro[0][4] + "/" + tRegistro[0][5]);
  grdImprimir.setText(2,0,"Nombre:").setText(2,1,tRegistro[0][6]);
  grdImprimir.setText(3,0,"Ruta:").setText(3,1,tRegistro[0][7]);
  grdImprimir.setText(4,0,"Vencimiento:").setText(4,1,tRegistro[0][8]);
  grdImprimir.setText(5,0,"At´n:").setText(5,1,tRegistro[0][9]);
  
  //grdImprimir.setColumnStyleAttribute(0, "fontSize", "8pt").setColumnStyleAttribute(0, "fontFamily","Roboto").setColumnStyleAttribute(0, "font-weight", "bold")
  //.setColumnStyleAttribute(0, "backgroundColor","#286389").setColumnStyleAttribute(0, "color","white");
  //grdImprimir.setColumnStyleAttribute(1, "fontSize", "8pt").setColumnStyleAttribute(1, "fontFamily","Roboto").setColumnStyleAttribute(1, "font-weight", "normal")
  //.setColumnStyleAttribute(1, "color","gray");
  
  var aImprimir = container.createAnchor("Imprimir", "https://docs.google.com/spreadsheets/d/1LwPH-vU6CRHCHSU6XzGdFZ1pbo9z7eyZUDxmv0354hE");
  styleTitulo_(aImprimir);
  
  var hPanel = container.createHorizontalPanel();
  var btnCancelar = container.createButton().setText("Cancelar");
  styleBtn_(btnCancelar);
  var lnzCancelar = container.createServerHandler("clickInicio_").addCallbackElement(vPanel);
  btnCancelar.addClickHandler(lnzCancelar);
  
  var btnImprimir = container.createButton().setText("Imprimir");
  styleBtn_(btnImprimir);
 
  var lnzImprimir = container.createServerHandler("clickImprimir_").addCallbackElement(vPanel);
  btnImprimir.addClickHandler(lnzImprimir);
  
  var txtPase = container.createTextBox().setName("txtPase");
  txtPase.setText(tRegistro[0][2]).setVisible(false);
  
  hPanel.add(btnCancelar);
  //hPanel.add(btnImprimir);
  
  vPanel.add(imgLogo);
  vPanel.add(lblTitulo);
  vPanel.add(lblsInfo);
  vPanel.add(grdImprimir);
  vPanel.add(aImprimir);
  vPanel.add(hPanel);
  vPanel.add(txtPase);
  container.add(vPanel);
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-* A C C I O N E S *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*                                  ACCIONES
function clickInicio_(e){
  var app = UiApp.getActiveApplication();
  var panel = app.getElementById("vPanel") ;
  panel.setVisible(false);
  pnlInicio_(app);
  //Actualizar APP
  return app;
}

function clickNuevo_(e){
  var app = UiApp.getActiveApplication();
  var panel = app.getElementById("vPanel") ;
  panel.setVisible(false);
  pnlRegistrarPase_(app, "0");
  //Actualizar APP
  return app;
}

function clickBuscar_(e){
  var app = UiApp.getActiveApplication();
  var sBuscar = e.parameter.txtBusqueda.toUpperCase();
  var panel = app.getElementById("vPanel");
  var tResultados;
  var sMensaje = "";
  panel.setVisible(false);
  if(sBuscar.length < 1){
    sMensaje = "Error: Debe de introducir No. de Pase o Nombre de Beneficiario."
  }else{
    tResultados = getPases(sBuscar);
    if (tResultados[0] == null){
      sMensaje = "No se encontro registros que contengan " + sBuscar
    }
  }
if (sMensaje.length != 0){
    var dialog = app.createDialogBox().setAutoHideEnabled(true).setPopupPosition(100, 200).setTitle("Aviso");
    var panel1 = app.createVerticalPanel();
    var lblMensajeError = app.createLabel().setText(sMensaje);
    styleError_(lblMensajeError);
    panel1.add(lblMensajeError);
    dialog.add(panel1)
    dialog.show();
    pnlInicio_(app, "0");
  } else {
    pnlResultados_(app, sBuscar, tResultados);
  }
  return app;
}

function clickGuardarRegistro_(e){
  var app = UiApp.getActiveApplication();
  var tTemporal;
  var panel = app.getElementById("vPanel");
  var sMensajeError = "";
  var sMensaje = "El registro se guardó exitosamente!!!";
  var fecha = new Date();
      
  panel.setVisible(false);
  tTemporal = new Array(1);
  tTemporal[0] = new Array(11);
  tTemporal[0][0] = fecha;
  tTemporal[0][1] = Session.getActiveUser().getEmail();
  tTemporal[0][2] = e.parameter.txtPase.toUpperCase();
  tTemporal[0][3] = e.parameter.txtDia;
  tTemporal[0][4] = e.parameter.txtMes;
  tTemporal[0][5] = e.parameter.txtAno;
  tTemporal[0][6] = e.parameter.txtNombre.toUpperCase();
  tTemporal[0][7] = e.parameter.txtRuta.toUpperCase();
  tTemporal[0][8] = e.parameter.txtVencimiento.toUpperCase();
  tTemporal[0][9] = e.parameter.txtAtn.toUpperCase();
  tTemporal[0][10] = e.parameter.txtDescuento.toUpperCase();
  tTemporal[0][11] = e.parameter.txtFila;
  var iFila = e.parameter.txtFila;
  
  if (isNaN(tTemporal[0][2]) || tTemporal[0][2].length <1 || getPase(tTemporal[0][2], iFila)){
    sMensajeError = "Error: Introduzca No. de Pase valido ";
  }else{
    if (isNaN(tTemporal[0][3]) || tTemporal[0][3].length <1){
      sMensajeError = "Error: Introduzca No. de Día valido";
    }else{
      if (isNaN(tTemporal[0][4]) || tTemporal[0][4].length <1){
        sMensajeError = "Error: Introduzca No. de Mes valido";
      }else{
        if (isNaN(tTemporal[0][5]) || tTemporal[0][5].length < 4){
          sMensajeError = "Error: Introduzca Año valido";
        }else{
          var fecha = tTemporal[0][3] + "/" + tTemporal[0][4] + "/" + tTemporal[0][5]
          if (isDate(fecha) == false){
            sMensajeError = "Error: Fecha " + fecha+ " no valida";
          }else{
            if (tTemporal[0][6].length <1){
              sMensajeError = "Error: Introduzca Nombre";
            }else{
              if (tTemporal[0][7].length <1){
                sMensajeError = "Error: Introduzca Ruta";
              }else{
                if (tTemporal[0][8].length <1){
                  sMensajeError = "Error: Introduzca Vencimiento";
                }else{
                  if (tTemporal[0][9].length <1){
                    sMensajeError = "Error: Introduzca At´n";
                  }else{
                    if (tTemporal[0][10].length <1){
                      sMensajeError = "Error: Introduzca Descuento";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
    
  Logger.log(sMensajeError);
  
  if (sMensajeError != ""){
    sMensaje = "";
  }else{
    //Guardar
    sMensajeError = setRegistro(tTemporal, iFila);
    if (sMensajeError == ""){
      var tResultado = getPaseImprimir(tTemporal[0][2]);
      if (tResultado[0] == null){
        sMensajeError = "No se encontro ese Registro contacte Soporte." 
      }else{
        sMensajeError = setLlenarImprimir(tResultado); 
        if (sMensajeError != ""){
          sMensaje = "";
        }
      }
    }
  }
  //Mensaje
  var dialog = app.createDialogBox().setAutoHideEnabled(true).setPopupPosition(100, 200).setTitle("Aviso");
  var panel1 = app.createVerticalPanel();
  var lblMensaje = app.createLabel().setText(sMensaje);
  var lblMensajeError = app.createLabel().setText(sMensajeError);
  styleTitulo_(lblMensaje);
  styleError_(lblMensajeError);
  if (sMensajeError == ""){
    panel1.add(lblMensaje);
  }else{
    panel1.add(lblMensajeError);
  }
  dialog.add(panel1)
  dialog.show();
  if (sMensajeError == ""){
    pnlImprimir_(app,tResultado);
    //pnlInicio_(app, "0");
  }else{
    if (iFila == 0){
    pnlRegistrarPase_(app,"1",tTemporal);
    }else{
      pnlRegistrarPase_(app,"2",tTemporal);
    }
  }
  return app;
}

function clickPnlEditar_(e){
  var app = UiApp.getActiveApplication();
  var panel = app.getElementById("vPanel");
  var Pase =e.parameter.txtPase;
  var sMensajeError = ""
  var tResultado
  
  panel.setVisible(false);
  tResultado = getPaseImprimir(Pase);
  
  //Logger.log(tResultado);
  if (tResultado[0] == null){
    sMensajeError = "No se encontro ese Registro contacte Soporte." 
  }else{
    //sMensajeError = setLlenarImprimir(tResultado); 
    sMensajeError = "";
  }
   
  if (sMensajeError != ""){
    var dialog = app.createDialogBox().setAutoHideEnabled(true).setPopupPosition(100, 200).setTitle("Aviso");
    var panel1 = app.createVerticalPanel();
    var lblMensajeError = app.createLabel().setText(sMensajeError);
    styleError_(lblMensajeError);
    panel1.add(lblMensajeError);
    dialog.add(panel1)
    dialog.show();
    pnlInicio_(app, "0");
  }else{
    pnlRegistrarPase_(app, "2", tResultado);
  }
  return app;
}

function clickPnlImprimir_(e){
  var app = UiApp.getActiveApplication();
  var panel = app.getElementById("vPanel");
  var Pase =e.parameter.txtPase;
  var sMensajeError = ""
  var tResultado
  
  panel.setVisible(false);
  tResultado = getPaseImprimir(Pase);
  
  //Logger.log(tResultado);
  if (tResultado[0] == null){
    sMensajeError = "No se encontro ese Registro contacte Soporte." 
  }else{
    sMensajeError = setLlenarImprimir(tResultado); 
  }
   
  if (sMensajeError != ""){
    var dialog = app.createDialogBox().setAutoHideEnabled(true).setPopupPosition(100, 200).setTitle("Aviso");
    var panel1 = app.createVerticalPanel();
    var lblMensajeError = app.createLabel().setText(sMensajeError);
    styleError_(lblMensajeError);
    panel1.add(lblMensajeError);
    dialog.add(panel1)
    dialog.show();
    pnlInicio_(app, "0");
  }else{
    pnlImprimir_(app,tResultado);
  }
  return app;
}

function clickImprimir_(e){
  var app = UiApp.getActiveApplication();
  var panel = app.getElementById("vPanel");
  var Pase =e.parameter.txtPase;
  var sMensajeError = ""
  var tResultado
  
  panel.setVisible(false);
  tResultado = getPaseImprimir(Pase);
  Logger.log(tResultado);
  if (tResultado[0] == null){
    sMensajeError = "No se encontro ese Registro contacte Soporte." 
  }else{
    sMensajeError = setLlenarImprimir(tResultado);
  }
  
  if (sMensajeError == ""){
    pnlInicio_(app, "0");
  }else{
    var dialog = app.createDialogBox().setAutoHideEnabled(true).setPopupPosition(100, 200).setTitle("Aviso");
    var panel1 = app.createVerticalPanel();
    var lblMensajeError = app.createLabel().setText(sMensajeError);
    styleError_(lblMensajeError);
    panel1.add(lblMensajeError);
    dialog.add(panel1)
    dialog.show();
    pnlInicio_(app, "0");
  }
  return app;
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-* F U N C I O N E S *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*                                  FUNCIONES
function setRegistro(tInput, iFila){
  //setLog(iFila);
  var tTemporal = new Array(1);
  tTemporal[0] = new Array(10);
  tTemporal[0][0] = tInput[0][0];
  tTemporal[0][1] = tInput[0][1];
  tTemporal[0][2] = tInput[0][2];
  tTemporal[0][3] = tInput[0][3];
  tTemporal[0][4] = tInput[0][4];
  tTemporal[0][5] = tInput[0][5];
  tTemporal[0][6] = tInput[0][6];
  tTemporal[0][7] = tInput[0][7];
  tTemporal[0][8] = tInput[0][8];
  tTemporal[0][9] = tInput[0][9];
  tTemporal[0][10] = tInput[0][10];
  var sFecha = tTemporal[0][0];
  var sUsuario = tTemporal[0][1];
  try{
    var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shPases);
    var lastRow = sheet.getLastRow()+1;
    if (iFila == "0"){
      var range = sheet.getRange("A" + lastRow + ":K" + lastRow);
    }else{
      var range = sheet.getRange("A" + iFila + ":K" + iFila);
    }
    //Guardar
    range.setValues(tTemporal);
  }
  catch(err){
    setLog(sFecha, sUsuario, 'Error al Guardar', err)
    return "Error: " + err;
  }
  setLog(sFecha, sUsuario, 'Registro Guardado', "Folio: " + tTemporal[0][2])
  return "";
}
function setRegistro_x_Fila(tInput, iFila){
  var sFecha = tInput[0][0];
  var sUsuario = tInput[0][1];
  try{
    var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shPases);
    var range = sheet.getRange("A" + iFila + ":K" + iFila);
    //Guardar
    range.setValues(tInput);
  }
  catch(err){
    setLog(sFecha, sUsuario, 'Error al Guardar', err)
    return "Error: " + err;
  }
  setLog(sFecha, sUsuario, 'Registro Editado', "Folio: " + tInput[0][2])
  return "";
}
function setLog(sFecha, sUsuario, sEvento, sDetalle){
  var tLog = new Array(1);
  tLog[0] = new Array(4);
  tLog[0][0] = sFecha;
  tLog[0][1] = sUsuario;
  tLog[0][2] = sEvento;
  tLog[0][3] = sDetalle;
  var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shLog);
    var lastRow = sheet.getLastRow()+1;
    var range = sheet.getRange("A" + lastRow + ":D" + lastRow);
    //Guardar
    range.setValues(tLog);  
}
function getPase(sPase, iFila){
  var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shPases);
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("C2:C" + lastRow);
  var values = range.getValues();
  for(var ii = values.length -1; ii >- 1; ii--){
    if(values [ii][0] == sPase){
      if (iFila == 0){
        return true;
      }else{
        return false;
      }
    }
  }
  return false;
}
function getPases(sBuscar){
  var tResultados = new Array(1);
  var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shPases);
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("A2:J" + lastRow);
  var values = range.getValues();
  var iX = 0;
  //Logger.log(values.length)
  for(var ii = 0; ii < values.length; ii++){
    if(values[ii][2] == sBuscar || values[ii][6].indexOf(sBuscar) != -1 ){
      tResultados[iX] = new Array(10);
      tResultados[iX][0] = values[ii][0];
      tResultados[iX][1] = values[ii][1];
      tResultados[iX][2] = values[ii][2];
      tResultados[iX][3] = values[ii][3];
      tResultados[iX][4] = values[ii][4];
      tResultados[iX][5] = values[ii][5];
      tResultados[iX][6] = values[ii][6];
      tResultados[iX][7] = values[ii][7];
      tResultados[iX][8] = values[ii][8];
      tResultados[iX][9] = values[ii][9];
      iX++;
    }
  }
  //Logger.log(tResultados);
  return tResultados;
}
function getPaseImprimir(sBuscar){
  var tResultados = new Array(1);
  var sheet = SpreadsheetApp.openById(ssBase).getSheetByName(shPases);
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("A2:K" + lastRow);
  var values = range.getValues();
  Logger.log(sBuscar)
  for(var ii = values.length -1; ii > -1; ii--){
    //Logger.log(values[ii][2] + " == " + sBuscar );
    if(values[ii][2] == sBuscar){
      tResultados[0] = new Array(12);
      tResultados[0][0] = values[ii][0];
      tResultados[0][1] = values[ii][1];
      tResultados[0][2] = values[ii][2];
      tResultados[0][3] = values[ii][3];
      tResultados[0][4] = values[ii][4];
      tResultados[0][5] = values[ii][5];
      tResultados[0][6] = values[ii][6];
      tResultados[0][7] = values[ii][7];
      tResultados[0][8] = values[ii][8];
      tResultados[0][9] = values[ii][9];
      tResultados[0][10] = values[ii][10];
      tResultados[0][11] = (ii + 2);
      Logger.log("Encontrado Pase: " + sBuscar  + " Fila: " + tResultados[0][11] );
      return tResultados;
    }
  }
  Logger.log("No se Encontro Pase: " + sBuscar );
  return tResultados;
}
function setLlenarImprimir(tRegistro){
  var sheet = SpreadsheetApp.openById(ssImp).getSheetByName(shImp);
 
  var sFecha = new Date();
  var sUsuario = Session.getActiveUser().getEmail();
  var valor = "";
  var segundo = "";
  if (tRegistro[0] == null){
    return "No se Encontro Pase: " + sBuscar;
  }else{
    try {
      var cell = sheet.getRange("F8");
      valor = tRegistro[0][3] + "/" + tRegistro[0][4] + "/" +tRegistro[0][5];
      cell.setValue(valor);
      cell = sheet.getRange("C11");
      valor = tRegistro[0][6];
      cell.setValue(valor);
      cell = sheet.getRange("B13");
      valor = tRegistro[0][7].substring(0, 37);
      if (tRegistro[0][7].length > 37){
        valor = valor + " -";
      }
      cell.setValue(valor);
      cell = sheet.getRange("B15");
      valor = tRegistro[0][7].substring(37);
      cell.setValue(valor);
      cell = sheet.getRange("B22");
      valor = "VENCIMIENTO: " + tRegistro[0][8];
      cell.setValue(valor);
      cell = sheet.getRange("B23");
      valor = tRegistro[0][9];
      cell.setValue(valor);
      setLog(sFecha, sUsuario, 'Registro Impreso', "Folio: " + tRegistro[0][2]); 
    }
    catch(err){
      setLog(sFecha, sUsuario, 'Error al Guardar', err)
      return "Error: " + err;
    }
  }
  return "";
}
function trim(s)                                                                                                          //trim
{
  var myString = s;
  var j = 0;

  // trim front of string
  for(var i = 0; i < myString.length; i++)
  {
    if(myString.charAt(i) != " ")
    {
      break
    }
    else
    {
      j += 1;
    }
  }
  myString = myString.substring(j, myString.length);

  // trim back of string
  j = myString.length;
  for(var i = myString.length - 1; i >= 0; i--)
  {
    if(myString.charAt(i) != " ")
    {
      break
    }
    else
    {
      j -= 1;
    }
  }
  myString = myString.substring(0, j);

  return myString;
}

function isDate(fecha){
  var dtCh= "/";
  var minYear=1900;
  var maxYear=2100;
  function isInteger(s){
    var i;
    for (i = 0; i < s.length; i++){
      var c = s.charAt(i);
      if (((c < "0") || (c > "9"))) return false;
    }
    return true;
  }
  function stripCharsInBag(s, bag){
    var i;
    var returnString = "";
    for (i = 0; i < s.length; i++){
      var c = s.charAt(i);
      if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
	}
  function daysInFebruary (year){
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
  }
	function DaysArray(n) {
      for (var i = 1; i <= n; i++) {
			this[i] = 31
            if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
        if (i==2) {this[i] = 29}
      }
      return this
    }
  function isDate(dtStr){
    var daysInMonth = DaysArray(12)
    var pos1=dtStr.indexOf(dtCh)
    var pos2=dtStr.indexOf(dtCh,pos1+1)
    var strDay=dtStr.substring(0,pos1)
    var strMonth=dtStr.substring(pos1+1,pos2)
    var strYear=dtStr.substring(pos2+1)
    strYr=strYear
    if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
    if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
      if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
    }
    month=parseInt(strMonth)
    day=parseInt(strDay)
    year=parseInt(strYr)
    if (pos1==-1 || pos2==-1){
      return false
    }
    if (strMonth.length<1 || month<1 || month>12){
      return false
    }
    if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
      return false
    }
    if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
      return false
    }
    if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
      return false
    }
    return true
  }
  if(isDate(fecha)){
    return true;
  }else{
    return false;
  }
}
