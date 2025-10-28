t.d(a, {
    A8: () => i,
    Me: () => d,
    N2: () => l,
    PJ: () => s,
    UC: () => c,
    Yn: () => o,
    wp: () => r,
});
var u = t(533426),
    n = t(640475);
function r(e, a, t) {
    return (null != a && 0 > e.compare(a)) || (null != t && e.compare(t) > 0);
}
function i(e, a, t, u, n) {
    let r = {};
    for (let e in a) (r[e] = Math.floor(a[e] / 2)), r[e] > 0 && a[e] % 2 == 0 && r[e]--;
    let i = o(e, a, t).subtract(r);
    return s(e, i, a, t, u, n);
}
function o(e, a, t, n, r) {
    let i = e;
    return (
        a.years ? (i = (0, u.em)(e)) : a.months ? (i = (0, u.Nm)(e)) : a.weeks && (i = (0, u.zJ)(e, t)),
        s(e, i, a, t, n, r)
    );
}
function l(e, a, t, u, n) {
    let r = { ...a };
    r.days ? r.days-- : r.weeks ? r.weeks-- : r.months ? r.months-- : r.years && r.years--;
    let i = o(e, a, t).subtract(r);
    return s(e, i, a, t, u, n);
}
function s(e, a, t, r, i, s) {
    if (i && e.compare(i) >= 0) {
        let e = (0, u.l7)(a, o((0, n.WG)(i), t, r));
        e && (a = e);
    }
    if (s && 0 >= e.compare(s)) {
        let e = (0, u.Mb)(a, l((0, n.WG)(s), t, r));
        e && (a = e);
    }
    return a;
}
function d(e, a, t) {
    if (a) {
        let t = (0, u.l7)(e, (0, n.WG)(a));
        t && (e = t);
    }
    if (t) {
        let a = (0, u.Mb)(e, (0, n.WG)(t));
        a && (e = a);
    }
    return e;
}
function c(e, a, t) {
    if (!t) return e;
    for (; e.compare(a) >= 0 && t(e); ) e = e.subtract({ days: 1 });
    return e.compare(a) >= 0 ? e : null;
}
