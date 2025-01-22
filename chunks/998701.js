r.d(n, {
    c: function () {
        return i;
    }
});
var i,
    a = r(388032);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.GENERAL = 0)] = 'GENERAL'), (e[(e.NO_FILE = 1)] = 'NO_FILE'), (e[(e.PROGRESS = 2)] = 'PROGRESS'), (e[(e.UPLOAD = 3)] = 'UPLOAD'), (e[(e.READ = 4)] = 'READ');
})(i || (i = {}));
class s {
    get displayMessage() {
        switch (this.code) {
            case 1:
                return a.intl.string(a.t.dDMp2d);
            case 2:
                return a.intl.string(a.t.XBxyvr);
            case 3:
                return a.intl.string(a.t['6b6rws']);
            case 4:
                return a.intl.string(a.t.VUc3tr);
            default:
                return a.intl.string(a.t.VzHcSk);
        }
    }
    constructor(e) {
        o(this, 'code', void 0), (this.code = e);
    }
}
n.Z = s;
