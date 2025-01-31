n.d(t, {
    M: () => s,
    Z: () => o
});
var i = n(979554),
    r = n(656698);
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
let s = (e) => e instanceof o;
class o extends r.Z {
    static fromServer(e) {
        return new o({
            ...super.fromServer(e),
            ...e
        });
    }
    constructor(e) {
        super(e), a(this, 'asset', void 0), a(this, 'label', void 0), (this.type = i.Z.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
}
