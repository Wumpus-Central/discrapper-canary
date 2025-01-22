r.d(n, {
    I: function () {
        return l;
    }
});
var i = r(87290),
    a = r(685816),
    o = r(565669);
function s(e, n, r) {
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
class l {
    static fromServer(e) {
        return new l(e);
    }
    constructor(e) {
        s(this, 'subblocks', void 0), (this.type = a.z.FEATURED), (this.subblocks = e.subblocks.map((e) => (e.type === i.O.CATEGORY ? o.H.fromServer(e) : e)));
    }
}
