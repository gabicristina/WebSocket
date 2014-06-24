Vex.Flow.Test.Web = {};

Vex.Flow.Test.Web.Start = function() {
	module("Document");
	Vex.Flow.Test.runTest("Basic MusicXML Test", Vex.Flow.Test.Web.xmlSimple);
	Vex.Flow.Test.runTest("MusicXML Document Test", Vex.Flow.Test.Web.xmlDoc);
};

Vex.Flow.Test.Web.xmlSimple = function(options, contextBuilder) {
	expect(2);

	var docString = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<!DOCTYPE score-partwise PUBLIC\
    "-//Recordare//DTD MusicXML 3.0 Partwise//EN"\
    "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise version="3.0">\
  <part-list>\
    <score-part id="P1">\
      <part-name>Music</part-name>\
    </score-part>\
  </part-list>\
  <part id="P1">\
    <measure number="1">\
      <attributes>\
        <divisions>1</divisions>\
        <key>\
          <fifths>0</fifths>\
        </key>\
        <time>\
          <beats>4</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <clef>\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
      </attributes>\
      <note>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>4</duration>\
        <type>whole</type>\
      </note>\
    </measure>\
  </part>\
</score-partwise>';
	var doc = new Vex.Flow.Document(docString);
	ok(true, "created document");

	var ctx = new contextBuilder(options.canvas_sel, 300, 120);
	doc.getFormatter().setWidth(300).drawBlock(0, ctx);
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
	}
	;
};

Vex.Flow.Test.Web.xmlDoc = function(options, contextBuilder) {
	if (!message) {
		alert("Document does not exist");
		ok(false, "Document does not exist");
		return;
	}
	expect(2);
	var doc = new Vex.Flow.Document(message);
	ok(true, "created document");

	var formatter = doc.getFormatter();
	formatter.setWidth(800);
	var ctx = new contextBuilder(options.canvas_sel, 480, 120);
	ctx.scale(0.6, 0.6);
	formatter.drawBlock(0, ctx);
	ok(true, "drew document");
};