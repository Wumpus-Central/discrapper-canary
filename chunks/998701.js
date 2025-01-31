n.d(t, {
    Z: () => o,
    c: () => a
});
var i = n(388032);
function r(e, t, n) {
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
var a = (function (e) {
    return (e[(e.GENERAL = 0)] = 'GENERAL'), (e[(e.NO_FILE = 1)] = 'NO_FILE'), (e[(e.PROGRESS = 2)] = 'PROGRESS'), (e[(e.UPLOAD = 3)] = 'UPLOAD'), (e[(e.READ = 4)] = 'READ'), e;
})({});
class s {
    get displayMessage() {
        switch (this.code) {
            case 1:
                return i.intl.string(i.t.dDMp2d);
            case 2:
                return i.intl.string(i.t.XBxyvr);
            case 3:
                return i.intl.string(i.t['6b6rws']);
            case 4:
                return i.intl.string(i.t.VUc3tr);
            default:
                return i.intl.string(i.t.VzHcSk);
        }
    }
    constructor(e) {
        r(this, 'code', void 0), (this.code = e);
    }
}
let o = s;
