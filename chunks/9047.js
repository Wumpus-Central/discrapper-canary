"use strict";
n.d(t, { A: () => a, c: () => s });
var r,
    i = n(985018),
    s =
        (((r = {})[(r.GENERAL = 0)] = "GENERAL"),
        (r[(r.NO_FILE = 1)] = "NO_FILE"),
        (r[(r.PROGRESS = 2)] = "PROGRESS"),
        (r[(r.UPLOAD = 3)] = "UPLOAD"),
        (r[(r.READ = 4)] = "READ"),
        r);
let a = class {
    code;
    constructor(e) {
        this.code = e;
    }
    get displayMessage() {
        switch (this.code) {
            case 1:
                return i.intl.string(i.t.dDMp2Z);
            case 2:
                return i.intl.string(i.t.XBxyvo);
            case 3:
                return i.intl.string(i.t["6b6rwk"]);
            case 4:
                return i.intl.string(i.t.VUc3ti);
            default:
                return i.intl.string(i.t.VzHcSm);
        }
    }
};
