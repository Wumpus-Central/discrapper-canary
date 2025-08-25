n.d(t, { Z: () => r });
let r = { get: i };
function i(e) {
    if (e) return e;
    if ("undefined" != typeof DOMParser) return new DOMParser();
    try {
        let { DOMParser: e, onErrorStopParsing: t } = require("@xmldom/xmldom");
        return new e({ onError: t });
    } catch (e) {
        return;
    }
}
