n.d(e, {
    X: () => r,
    h: () => i
}),
    n(704826),
    n(35282),
    n(388685);
var a = n(73800),
    l = n(902676);
function i(t) {
    let { protocol: e, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, l.E)(t),
                hostname: (0, l.F)(t)
            }),
            [t]
        ),
        i = '//' === t.substr(e.length, 2) ? '//' : '',
        r = ''.concat(e).concat(i).concat(n);
    return {
        protocol: e,
        authorityPrefix: i,
        hostname: n,
        theRestOfTheUrl: t.replace(r, '')
    };
}
function r(t) {
    let { url: e, trustUrl: n, onConfirm: l, onCancel: r, onClose: s } = t,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: x, hostname: m, theRestOfTheUrl: h } = i(e),
        u = a.useCallback(() => {
            o && n(e), null == s || s(), l();
        }, [e, o, n, l, s]);
    return {
        protocol: d,
        authorityPrefix: x,
        hostname: m,
        theRestOfTheUrl: h,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: u,
        handleCancel: a.useCallback(() => {
            null == s || s(), r();
        }, [r, s])
    };
}
