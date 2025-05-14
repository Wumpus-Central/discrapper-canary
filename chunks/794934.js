n.d(t, { I: () => s });
var r = n(87290),
    i = n(685816),
    o = n(565669);
function a(e, t, n) {
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
class s {
    static fromServer(e) {
        return new s(e);
    }
    constructor(e) {
        a(this, 'subblocks', void 0), (this.type = i.z.FEATURED), (this.subblocks = e.subblocks.map((e) => (e.type === r.O.CATEGORY ? o.H.fromServer(e) : e)));
    }
}
