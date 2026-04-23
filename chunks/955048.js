t.d(a, { CT: () => o, Hu: () => l, If: () => i, Iw: () => s, Nf: () => c, X8: () => d, ZT: () => u });
var r = t(352404),
    n = t(376472);
function i(e, a, t) {
    return (null != a && 0 > e.compare(a)) || (null != t && e.compare(t) > 0);
}
function l(e, a, t, r, n) {
    let i = {};
    for (let e in a) (i[e] = Math.floor(a[e] / 2)), i[e] > 0 && a[e] % 2 == 0 && i[e]--;
    let l = o(e, a, t).subtract(i);
    return s(e, l, a, t, r, n);
}
function o(e, a, t, n, i) {
    let l = e;
    return (
        a.years ? (l = (0, r.D)(e)) : a.months ? (l = (0, r.wH)(e)) : a.weeks && (l = (0, r.kq)(e, t)),
        s(e, l, a, t, n, i)
    );
}
function u(e, a, t, r, n) {
    let i = { ...a };
    i.days ? i.days-- : i.weeks ? i.weeks-- : i.months ? i.months-- : i.years && i.years--;
    let l = o(e, a, t).subtract(i);
    return s(e, l, a, t, r, n);
}
function s(e, a, t, i, l, s) {
    if (l && e.compare(l) >= 0) {
        let e = (0, r.ZI)(a, o((0, n.gw)(l), t, i));
        e && (a = e);
    }
    if (s && 0 >= e.compare(s)) {
        let e = (0, r.Py)(a, u((0, n.gw)(s), t, i));
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
