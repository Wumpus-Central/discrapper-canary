t.d(a, { CT: () => u, Hu: () => o, If: () => i, Iw: () => s, Nf: () => c, X8: () => d, ZT: () => l });
var r = t(352404),
    n = t(376472);
function i(e, a, t) {
    return (null != a && 0 > e.compare(a)) || (null != t && e.compare(t) > 0);
}
function o(e, a, t, r, n) {
    let i = {};
    for (let e in a) (i[e] = Math.floor(a[e] / 2)), i[e] > 0 && a[e] % 2 == 0 && i[e]--;
    let o = u(e, a, t).subtract(i);
    return s(e, o, a, t, r, n);
}
function u(e, a, t, n, i) {
    let o = e;
    return (
        a.years ? (o = (0, r.D)(e)) : a.months ? (o = (0, r.wH)(e)) : a.weeks && (o = (0, r.kq)(e, t)),
        s(e, o, a, t, n, i)
    );
}
function l(e, a, t, r, n) {
    let i = { ...a };
    i.days ? i.days-- : i.weeks ? i.weeks-- : i.months ? i.months-- : i.years && i.years--;
    let o = u(e, a, t).subtract(i);
    return s(e, o, a, t, r, n);
}
function s(e, a, t, i, o, s) {
    if (o && e.compare(o) >= 0) {
        let e = (0, r.ZI)(a, u((0, n.gw)(o), t, i));
        e && (a = e);
    }
    if (s && 0 >= e.compare(s)) {
        let e = (0, r.Py)(a, l((0, n.gw)(s), t, i));
        e && (a = e);
    }
    return a;
}
function d(e, a, t) {
    if (a) {
        let t = (0, r.ZI)(e, (0, n.gw)(a));
        t && (e = t);
    }
    if (t) {
        let a = (0, r.Py)(e, (0, n.gw)(t));
        a && (e = a);
    }
    return e;
}
function c(e, a, t) {
    if (!t) return e;
    for (; e.compare(a) >= 0 && t(e); ) e = e.subtract({ days: 1 });
    return e.compare(a) >= 0 ? e : null;
}
