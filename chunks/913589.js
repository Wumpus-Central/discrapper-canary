"use strict";
n.d(t, { A: () => s });
var r = n(284009),
    i = n.n(r);
class s {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        i()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return i()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
    }
}
