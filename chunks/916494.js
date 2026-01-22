n.d(t, {
    $G: () => p,
    Mw: () => a,
    UM: () => d,
    Um: () => s,
    cP: () => l,
    eu: () => u,
    kz: () => c,
    uc: () => o,
});
let i = 9 / 16,
    r = 16 / 9,
    l = (e, t) => e * t,
    a = (e, t) => e * t,
    o = (e) => l(e, i),
    s = (e) => a(e, r);
function c(e, t) {
    return t * (Math.max(1, e) - 1);
}
function u(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: l, isVertical: a } = e,
        o = a ? t : t - c(l, r),
        s = a ? n - c(l, r) : n;
    return {
        verticalRatio: (s - i) / (o - i),
        horizontalRatio: (o - i) / (s - i),
    };
}
function d(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: o, isVertical: s } = t,
        { maxWidth: d, maxHeight: p } = n,
        h = Math.max(1, o),
        f = e.width > d,
        m = e.height > p;
    if (!f && !m) return e;
    let g = c(o, r),
        { verticalRatio: y, horizontalRatio: A } = u({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: h,
            isVertical: s,
        }),
        O = e.width - i,
        E = e.height - i,
        v = d - i,
        b = p - i;
    return (
        s ? ((b -= g), (E -= g)) : ((v -= g), (O -= g)),
        f && m && (e.width > e.height ? (E = l((O = v), y)) : (O = a((E = b), A)), (f = O > v), (m = E > b)),
        f && (E = l((O = v), y)),
        m && (O = a((E = b), A)),
        s ? (E += c(o, r)) : (O += c(o, r)),
        {
            width: O + i,
            height: E + i,
        }
    );
}
function p(e, t) {
    let { maxWidth: n, maxHeight: i } = t;
    return {
        width: Math.max(0, Math.min(e.width, n)),
        height: Math.max(0, Math.min(e.height, i)),
    };
}
