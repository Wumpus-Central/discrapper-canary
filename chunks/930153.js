n.d(t, {
    $U: () => s,
    Bs: () => o,
    Lk: () => l,
    T3: () => u
});
var i = n(388032);
let r = 1000000,
    a = 1000;
function s(e) {
    if (e < r) return i.intl.formatToPlainString(i.t.OiHat7, { value: e });
    let t = (e / r).toFixed(1);
    return i.intl.formatToPlainString(i.t.Iku48P, { value: t });
}
function o(e, t) {
    if (e < a) return i.intl.formatToPlainString(i.t.OiHat7, { value: Math.floor(e) });
    if (e < r) return i.intl.formatToPlainString(i.t['84R4TU'], { value: Math.floor(e / a) });
    let n = Math.floor((10 * e) / r) / 10,
        s = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return i.intl.formatToPlainString(i.t.Iku48P, { value: s });
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0,
        ...n
    }).format(t);
}
