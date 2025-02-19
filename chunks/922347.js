n.d(t, {
    M: () => s,
    Z: () => l
});
var r = n(979554),
    i = n(656698);
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
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let s = (e) => e instanceof l;
class l extends i.Z {
    static fromServer(e) {
        return new l(a({}, super.fromServer(e), e));
    }
    constructor(e) {
        super(e), o(this, 'asset', void 0), o(this, 'label', void 0), (this.type = r.Z.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
}
