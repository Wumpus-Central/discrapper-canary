n.d(t, {
    Z: () => s,
    c: () => o
});
var r = n(388032);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o = (function (e) {
    return (e[(e.GENERAL = 0)] = 'GENERAL'), (e[(e.NO_FILE = 1)] = 'NO_FILE'), (e[(e.PROGRESS = 2)] = 'PROGRESS'), (e[(e.UPLOAD = 3)] = 'UPLOAD'), (e[(e.READ = 4)] = 'READ'), e;
})({});
class a {
    get displayMessage() {
        switch (this.code) {
            case 1:
                return r.NW.string(r.t.dDMp2d);
            case 2:
                return r.NW.string(r.t.XBxyvr);
            case 3:
                return r.NW.string(r.t['6b6rws']);
            case 4:
                return r.NW.string(r.t.VUc3tr);
            default:
                return r.NW.string(r.t.VzHcSk);
        }
    }
    constructor(e) {
        i(this, 'code', void 0), (this.code = e);
    }
}
let s = a;
