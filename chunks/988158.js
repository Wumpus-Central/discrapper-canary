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
    let { url: e, trustUrl: n, onConfirm: l, onCancel: r, onClose: o } = t,
        [s, c] = a.useState(!1),
        { protocol: x, authorityPrefix: d, hostname: m, theRestOfTheUrl: h } = i(e),
        u = a.useCallback(() => {
            s && n(e), null == o || o(), l();
        }, [e, s, n, l, o]);
    return {
        protocol: x,
        authorityPrefix: d,
        hostname: m,
        theRestOfTheUrl: h,
        shouldTrustUrl: s,
        setShouldTrustUrl: c,
        handleConfirm: u,
        handleCancel: a.useCallback(() => {
            null == o || o(), r();
        }, [r, o])
    };
}
