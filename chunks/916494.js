n.d(t, { $G: () => h, Mw: () => s, UM: () => c, Um: () => o, cP: () => a, eu: () => u, kz: () => d, uc: () => r });
let i = 9 / 16,
    l = 16 / 9,
    a = (e, t) => e * t,
    s = (e, t) => e * t,
    r = (e) => a(e, i),
    o = (e) => s(e, l);
function d(e, t) {
    return t * (Math.max(1, e) - 1);
}
function u(e) {
    let { width: t, height: n, containerOffset: i, gapSize: l, tileCount: a, isVertical: s } = e,
        r = s ? t : t - d(a, l),
        o = s ? n - d(a, l) : n;
    return { verticalRatio: (o - i) / (r - i), horizontalRatio: (r - i) / (o - i) };
}
function c(e, t, n) {
    let { containerOffset: i, gapSize: l, tileCount: r, isVertical: o } = t,
        { maxWidth: c, maxHeight: h } = n,
        A = Math.max(1, r),
        m = e.width > c,
        g = e.height > h;
    if (!m && !g) return e;
    let p = d(r, l),
        { verticalRatio: f, horizontalRatio: _ } = u({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: l,
            tileCount: A,
            isVertical: o,
        }),
        E = e.width - i,
        x = e.height - i,
        S = c - i,
        I = h - i;
    return (
        o ? ((I -= p), (x -= p)) : ((S -= p), (E -= p)),
        m && g && (e.width > e.height ? (x = a((E = S), f)) : (E = s((x = I), _)), (m = E > S), (g = x > I)),
        m && (x = a((E = S), f)),
        g && (E = s((x = I), _)),
        o ? (x += d(r, l)) : (E += d(r, l)),
        { width: E + i, height: x + i }
    );
}
function h(e, t) {
    let { maxWidth: n, maxHeight: i } = t;
    return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
}
