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

	//var ctx = new contextBuilder(options.canvas_sel, 300, 120);
	var ctx = new contextBuilder(options.canvas_sel, 1200, 600);
	doc.getFormatter().setWidth(1200).drawBlock(0, ctx);
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
	if (!message) {
		alert("Document does not exist");
		ok(false, "Document does not exist");
		return;
	}
	expect(2);
	var docWeb = new Vex.Flow.Document(message);
	ok(true, "created document");

	var formatter = docWeb.getFormatter();
	formatter.setWidth(800);
	var ctx = new contextBuilder(options.canvas_sel, 480, 120);
	ctx.scale(0.6, 0.6);
	formatter.drawBlock(0, ctx);
	ok(true, "drew document");
};