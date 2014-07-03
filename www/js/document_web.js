var doc;

Vex.Flow.Test.Web = {};

Vex.Flow.Test.Web.Start = function() {
	module("Document");
	Vex.Flow.Test.runTest("Basic MusicXML Test", Vex.Flow.Test.Web.xmlSimple);
	Vex.Flow.Test.runTest("MusicXML Document Test", Vex.Flow.Test.Web.xmlDoc);
};

Vex.Flow.Test.Web.xmlSimple = function(options, contextBuilder) {
	expect(2);
	doc = new Vex.Flow.Document(comp);
	ok(true, "created document");

	var ctx = new contextBuilder(options.canvas_sel, 1200, 120);
	var formatter = new Vex.Flow.DocumentFormatter();
	ctx.scale(1.0, 1.0);
	var v = doc.getNumberOfMeasures();
	
	var i = 1;	
	/*var myVar = setInterval(function(){
		doc.getFormatter().setWidth(1200).drawBlockGabi(i, 0, ctx);
		alert("oi!");
	},5000);*/
	
	doc.getFormatter().setWidth(1200).drawBlockMeasure(5, 0, ctx);
	ok(true, "drew document");
};

function errorReaderHandler(evt) {
	alert("ocorreu um erro no reader");
	switch (evt.target.error.code) {
	case evt.target.error.NOT_FOUND_ERR:
		alert('File Not Found!');
		break;
	case evt.target.error.NOT_READABLE_ERR:
		alert('File is not readable');
		break;
	case evt.target.error.ABORT_ERR:
		break; // noop
	default:
		alert('An error occurred reading this file.');
	};
};

Vex.Flow.Test.Web.xmlDoc = function(options, contextBuilder) {
	//if (!message) {
	if (!comp) {
		alert("Document does not exist");
		ok(false, "Document does not exist");
		return;
	}
	expect(2);
	//var docWeb = new Vex.Flow.Document(message);
	var docWeb = new Vex.Flow.Document(comp);
	ok(true, "created document");

	//var formatter = docWeb.getFormatter();
	//formatter.setWidth(800);
	var ctx = new contextBuilder(options.canvas_sel, 480, 120);
	ctx.scale(1.0, 1.0);
	doc.getFormatter().setWidth(480).drawBlock(0, ctx);
	//formatter.drawBlock(0, ctx);
	ok(true, "drew document");
};