n.d(t, { I: () => s });
var r = n(87290),
    i = n(685816),
    a = n(565669);
function o(e, t, n) {
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
        o(this, 'subblocks', void 0), (this.type = i.z.FEATURED), (this.subblocks = e.subblocks.map((e) => (e.type === r.O.CATEGORY ? a.H.fromServer(e) : e)));
    }
}
