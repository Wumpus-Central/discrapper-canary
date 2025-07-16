(n.d(e, {
    X: () => l,
    h: () => r
}),
    n(704826),
    n(35282),
    n(388685));
var a = n(73800),
    i = n(902676);
function r(t) {
    let { protocol: e, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, i.E)(t),
                hostname: (0, i.F)(t)
            }),
            [t]
        ),
        r = '//' === t.substr(e.length, 2) ? '//' : '',
        l = ''.concat(e).concat(r).concat(n);
    return {
        protocol: e,
        authorityPrefix: r,
        hostname: n,
        theRestOfTheUrl: t.replace(l, '')
    };
}
function l(t) {
    let { url: e, trustUrl: n, onConfirm: i, onCancel: l, onClose: s } = t,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: x, hostname: m, theRestOfTheUrl: u } = r(e),
        h = a.useCallback(() => {
            (o && n(e), null == s || s(), i());
        }, [e, o, n, i, s]);
    return {
        protocol: d,
        authorityPrefix: x,
        hostname: m,
        theRestOfTheUrl: u,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: h,
        handleCancel: a.useCallback(() => {
            (null == s || s(), l());
        }, [l, s])
    };
}
