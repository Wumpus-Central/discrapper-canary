n.d(t, { I: () => o });
var i = n(87290),
    r = n(685816),
    a = n(565669);
function s(e, t, n) {
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        s(this, 'subblocks', void 0), (this.type = r.z.FEATURED), (this.subblocks = e.subblocks.map((e) => (e.type === i.O.CATEGORY ? a.H.fromServer(e) : e)));
    }
}
