"use strict";
n.d(t, { ex: () => u, ct: () => c, _: () => E, LG: () => s.A, Ey: () => a.Ay, Wl: () => r.A });
var i,
    r = n(178253),
    s = n(181658),
    a = n(136857);
a.Ay, n(274593);
var o = n(58703),
    l = n(927813),
    d = n(985018);
class _ extends r.A {
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, o.Tf)(0, t * l.A.Millis.SECOND);
        return (0, o.uN)(n, { days: d.t["iXc/Ib"], hours: d.t.WW9P57, minutes: d.t.I7rYev });
    }
}
let u = _;
var c =
    (((i = {})[(i.GENERAL = 0)] = "GENERAL"),
    (i[(i.NO_FILE = 1)] = "NO_FILE"),
    (i[(i.PROGRESS = 2)] = "PROGRESS"),
    (i[(i.UPLOAD = 3)] = "UPLOAD"),
    (i[(i.READ = 4)] = "READ"),
    i);
let E = class {
    code;
    constructor(e) {
        this.code = e;
    }
    get displayMessage() {
        switch (this.code) {
            case 1:
                return d.intl.string(d.t.dDMp2Z);
            case 2:
                return d.intl.string(d.t.XBxyvo);
            case 3:
                return d.intl.string(d.t["6b6rwk"]);
            case 4:
                return d.intl.string(d.t.VUc3ti);
            default:
                return d.intl.string(d.t.VzHcSm);
        }
    }
};
