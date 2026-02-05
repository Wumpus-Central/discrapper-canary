"use strict";
n.d(t, { A: () => s, c: () => i });
var r = n(985018),
    i = (function (e) {
        return (
            (e[(e.GENERAL = 0)] = "GENERAL"),
            (e[(e.NO_FILE = 1)] = "NO_FILE"),
            (e[(e.PROGRESS = 2)] = "PROGRESS"),
            (e[(e.UPLOAD = 3)] = "UPLOAD"),
            (e[(e.READ = 4)] = "READ"),
            e
        );
    })({});
class a {
    code;
    constructor(e) {
        this.code = e;
    }
    get displayMessage() {
        switch (this.code) {
            case 1:
                return r.intl.string(r.t.dDMp2Z);
            case 2:
                return r.intl.string(r.t.XBxyvo);
            case 3:
                return r.intl.string(r.t["6b6rwk"]);
            case 4:
                return r.intl.string(r.t.VUc3ti);
            default:
                return r.intl.string(r.t.VzHcSm);
        }
    }
}
let s = a;
