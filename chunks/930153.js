n.d(t, {
    $U: () => l,
    Bs: () => c,
    Lk: () => u,
    T3: () => d
});
var r = n(388032);
function i(e, t, n) {
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
function o(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
let a = 1000000,
    s = 1000;
function l(e) {
    if (e < a) return r.NW.formatToPlainString(r.t.OiHat7, { value: e });
    let t = (e / a).toFixed(1);
    return r.NW.formatToPlainString(r.t.Iku48P, { value: t });
}
function c(e, t) {
    if (e < s) return r.NW.formatToPlainString(r.t.OiHat7, { value: Math.floor(e) });
    if (e < a) return r.NW.formatToPlainString(r.t['84R4TU'], { value: Math.floor(e / s) });
    let n = Math.floor((10 * e) / a) / 10,
        i = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return r.NW.formatToPlainString(r.t.Iku48P, { value: i });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(
        e,
        o(
            {
                style: 'percent',
                minimumFractionDigits: 0
            },
            n
        )
    ).format(t);
}
