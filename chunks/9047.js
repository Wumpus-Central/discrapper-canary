n.d(t, {
    A: () => o,
    c: () => a,
});
var r = n(985018);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var a = (function (e) {
    return (
        (e[(e.GENERAL = 0)] = "GENERAL"),
        (e[(e.NO_FILE = 1)] = "NO_FILE"),
        (e[(e.PROGRESS = 2)] = "PROGRESS"),
        (e[(e.UPLOAD = 3)] = "UPLOAD"),
        (e[(e.READ = 4)] = "READ"),
        e
    );
})({});
class s {
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
    constructor(e) {
        i(this, "code", void 0), (this.code = e);
    }
}
let o = s;
