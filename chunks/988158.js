n.d(e, {
    X: () => r,
    h: () => i
}),
    n(704826),
    n(35282),
    n(388685);
var l = n(192379),
    a = n(902676);
function i(t) {
    let { protocol: e, hostname: n } = l.useMemo(
            () => ({
                protocol: (0, a.E)(t),
                hostname: (0, a.F)(t)
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
    let { url: e, trustUrl: n, onConfirm: a, onCancel: r, onClose: o } = t,
        [s, c] = l.useState(!1),
        { protocol: x, authorityPrefix: d, hostname: h, theRestOfTheUrl: m } = i(e),
        u = l.useCallback(() => {
            s && n(e), null == o || o(), a();
        }, [e, s, n, a, o]);
    return {
        protocol: x,
        authorityPrefix: d,
        hostname: h,
        theRestOfTheUrl: m,
        shouldTrustUrl: s,
        setShouldTrustUrl: c,
        handleConfirm: u,
        handleCancel: l.useCallback(() => {
            null == o || o(), r();
        }, [r, o])
    };
}
