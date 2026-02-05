"use strict";
n.d(t, { CT: () => o, Hu: () => s, If: () => a, Iw: () => u, Nf: () => d, X8: () => c, ZT: () => l });
var r = n(352404),
    i = n(376472);
function a(e, t, n) {
    return (null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0);
}
function s(e, t, n, r, i) {
    let a = {};
    for (let e in t) (a[e] = Math.floor(t[e] / 2)), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
    let s = o(e, t, n).subtract(a);
    return u(e, s, t, n, r, i);
}
function o(e, t, n, i, a) {
    let s = e;
    return (
        t.years ? (s = (0, r.D)(e)) : t.months ? (s = (0, r.wH)(e)) : t.weeks && (s = (0, r.kq)(e, n)),
        u(e, s, t, n, i, a)
    );
}
function l(e, t, n, r, i) {
    let a = { ...t };
    a.days ? a.days-- : a.weeks ? a.weeks-- : a.months ? a.months-- : a.years && a.years--;
    let s = o(e, t, n).subtract(a);
    return u(e, s, t, n, r, i);
}
function u(e, t, n, a, s, u) {
    if (s && e.compare(s) >= 0) {
        let e = (0, r.ZI)(t, o((0, i.gw)(s), n, a));
        e && (t = e);
    }
    if (u && 0 >= e.compare(u)) {
        let e = (0, r.Py)(t, l((0, i.gw)(u), n, a));
        e && (t = e);
    }
    return t;
}
function c(e, t, n) {
    if (t) {
        let n = (0, r.ZI)(e, (0, i.gw)(t));
        n && (e = n);
    }
    if (n) {
        let t = (0, r.Py)(e, (0, i.gw)(n));
        t && (e = t);
    }
    return e;
}
function d(e, t, n) {
    if (!n) return e;
    for (; e.compare(t) >= 0 && n(e); ) e = e.subtract({ days: 1 });
    return e.compare(t) >= 0 ? e : null;
}
