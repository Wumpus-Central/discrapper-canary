n.d(e, {
    X: () => o,
    h: () => r
}),
    n(757143),
    n(301563),
    n(47120);
var a = n(192379),
    l = n(902676);
function r(t) {
    let { protocol: e, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, l.E)(t),
                hostname: (0, l.F)(t)
            }),
            [t]
        ),
        r = '//' === t.substr(e.length, 2) ? '//' : '',
        o = ''.concat(e).concat(r).concat(n);
    return {
        protocol: e,
        authorityPrefix: r,
        hostname: n,
        theRestOfTheUrl: t.replace(o, '')
    };
}
function o(t) {
    let { url: e, trustUrl: n, onConfirm: l, onCancel: o, onClose: s } = t,
        [i, c] = a.useState(!1),
        { protocol: x, authorityPrefix: d, hostname: h, theRestOfTheUrl: m } = r(e),
        u = a.useCallback(() => {
            i && n(e), null == s || s(), l();
        }, [e, i, n, l, s]);
    return {
        protocol: x,
        authorityPrefix: d,
        hostname: h,
        theRestOfTheUrl: m,
        shouldTrustUrl: i,
        setShouldTrustUrl: c,
        handleConfirm: u,
        handleCancel: a.useCallback(() => {
            null == s || s(), o();
        }, [o, s])
    };
}
