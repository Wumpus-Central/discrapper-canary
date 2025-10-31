n.d(t, {
    A8: () => o,
    Me: () => u,
    N2: () => l,
    PJ: () => c,
    UC: () => d,
    Yn: () => s,
    wp: () => a,
});
var r = n(533426),
    i = n(640475);
function a(e, t, n) {
    return (null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0);
}
function o(e, t, n, r, i) {
    let a = {};
    for (let e in t) (a[e] = Math.floor(t[e] / 2)), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
    let o = s(e, t, n).subtract(a);
    return c(e, o, t, n, r, i);
}
function s(e, t, n, i, a) {
    let o = e;
    return (
        t.years ? (o = (0, r.em)(e)) : t.months ? (o = (0, r.Nm)(e)) : t.weeks && (o = (0, r.zJ)(e, n)),
        c(e, o, t, n, i, a)
    );
}
function l(e, t, n, r, i) {
    let a = { ...t };
    a.days ? a.days-- : a.weeks ? a.weeks-- : a.months ? a.months-- : a.years && a.years--;
    let o = s(e, t, n).subtract(a);
    return c(e, o, t, n, r, i);
}
function c(e, t, n, a, o, c) {
    if (o && e.compare(o) >= 0) {
        let e = (0, r.l7)(t, s((0, i.WG)(o), n, a));
        e && (t = e);
    }
    if (c && 0 >= e.compare(c)) {
        let e = (0, r.Mb)(t, l((0, i.WG)(c), n, a));
        e && (t = e);
    }
    return t;
}
function u(e, t, n) {
    if (t) {
        let n = (0, r.l7)(e, (0, i.WG)(t));
        n && (e = n);
    }
    if (n) {
        let t = (0, r.Mb)(e, (0, i.WG)(n));
        t && (e = t);
    }
    return e;
}
function d(e, t, n) {
    if (!n) return e;
    for (; e.compare(t) >= 0 && n(e); ) e = e.subtract({ days: 1 });
    return e.compare(t) >= 0 ? e : null;
}
