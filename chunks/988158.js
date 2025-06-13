n.d(t, {
    X: () => a,
    h: () => i
}),
    n(704826),
    n(35282),
    n(388685);
var r = n(73800),
    l = n(902676);
function i(e) {
    let { protocol: t, hostname: n } = r.useMemo(
            () => ({
                protocol: (0, l.E)(e),
                hostname: (0, l.F)(e)
            }),
            [e]
        ),
        i = '//' === e.substr(t.length, 2) ? '//' : '',
        a = ''.concat(t).concat(i).concat(n);
    return {
        protocol: t,
        authorityPrefix: i,
        hostname: n,
        theRestOfTheUrl: e.replace(a, '')
    };
}
function a(e) {
    let { url: t, trustUrl: n, onConfirm: l, onCancel: a, onClose: o } = e,
        [c, s] = r.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: h, theRestOfTheUrl: x } = i(t),
        m = r.useCallback(() => {
            c && n(t), null == o || o(), l();
        }, [t, c, n, l, o]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: h,
        theRestOfTheUrl: x,
        shouldTrustUrl: c,
        setShouldTrustUrl: s,
        handleConfirm: m,
        handleCancel: r.useCallback(() => {
            null == o || o(), a();
        }, [a, o])
    };
}
