n.d(t, { t: () => o });
var r = n(424918),
    i = n(651162),
    a = n(624711);
function s(e, t, n) {
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        s(this, "subblocks", void 0),
            (this.type = i.g.FEATURED),
            (this.subblocks = e.subblocks.map((e) => (e.type === r.u.CATEGORY ? a.j.fromServer(e) : e)));
    }
}
