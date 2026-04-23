n.d(t, { $G: () => h, Mw: () => s, UM: () => u, Um: () => o, cP: () => a, eu: () => c, kz: () => d, uc: () => l });
let i = 9 / 16,
    r = 16 / 9,
    a = (e, t) => e * t,
    s = (e, t) => e * t,
    l = (e) => a(e, i),
    o = (e) => s(e, r);
function d(e, t) {
    return t * (Math.max(1, e) - 1);
}
function c(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: a, isVertical: s } = e,
        l = s ? t : t - d(a, r),
        o = s ? n - d(a, r) : n;
    return { verticalRatio: (o - i) / (l - i), horizontalRatio: (l - i) / (o - i) };
}
function u(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: l, isVertical: o } = t,
        { maxWidth: u, maxHeight: h } = n,
        m = Math.max(1, l),
        p = e.width > u,
        g = e.height > h;
    if (!p && !g) return e;
    let f = d(l, r),
        { verticalRatio: _, horizontalRatio: x } = c({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: m,
            isVertical: o,
        }),
        A = e.width - i,
        E = e.height - i,
        S = u - i,
        I = h - i;
    return (
        o ? ((I -= f), (E -= f)) : ((S -= f), (A -= f)),
        p && g && (e.width > e.height ? (E = a((A = S), _)) : (A = s((E = I), x)), (p = A > S), (g = E > I)),
        p && (E = a((A = S), _)),
        g && (A = s((E = I), x)),
        o ? (E += d(l, r)) : (A += d(l, r)),
        { width: A + i, height: E + i }
    );
}
function h(e, t) {
    let { maxWidth: n, maxHeight: i } = t;
    return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
}
