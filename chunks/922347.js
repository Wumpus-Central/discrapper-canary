r.d(n, {
    M: function () {
        return s;
    },
    Z: function () {
        return l;
    }
});
var i = r(979554),
    a = r(656698);
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
let s = (e) => e instanceof l;
class l extends a.Z {
    static fromServer(e) {
        return new l({
            ...super.fromServer(e),
            ...e
        });
    }
    constructor(e) {
        super(e), o(this, 'asset', void 0), o(this, 'label', void 0), (this.type = i.Z.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
}
