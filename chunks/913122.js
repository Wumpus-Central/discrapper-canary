"use strict";
n.d(t, { eR: () => f, ex: () => d, ct: () => h, _: () => p, LG: () => s.A, Ey: () => a.Ay, Wl: () => r.A });
var i,
    r = n(178253),
    s = n(181658),
    a = n(136857);
a.Ay, n(274593);
var o = n(58703),
    l = n(927813),
    u = n(375708);
class c extends r.A {
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, o.Tf)(0, t * l.A.Millis.SECOND);
        return (0, o.uN)(n, { days: u.t["iXc/Ib"], hours: u.t.WW9P57, minutes: u.t.I7rYev });
    }
}
let d = c;
var _ = n(652215);
class f extends Error {
    code = _.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
}
var h =
    (((i = {})[(i.GENERAL = 0)] = "GENERAL"),
    (i[(i.NO_FILE = 1)] = "NO_FILE"),
    (i[(i.PROGRESS = 2)] = "PROGRESS"),
    (i[(i.UPLOAD = 3)] = "UPLOAD"),
    (i[(i.READ = 4)] = "READ"),
    i);
let p = class {
    code;
    constructor(e) {
        this.code = e;
    }
    get displayMessage() {
        switch (this.code) {
            case 1:
                return u.intl.string(u.t.dDMp2Z);
            case 2:
                return u.intl.string(u.t.XBxyvo);
            case 3:
                return u.intl.string(u.t["6b6rwk"]);
            case 4:
                return u.intl.string(u.t.VUc3ti);
            default:
                return u.intl.string(u.t.VzHcSm);
        }
    }
};
