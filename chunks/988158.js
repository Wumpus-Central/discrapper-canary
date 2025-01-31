n.d(e, {
    X: () => r,
    h: () => i
}),
    n(757143),
    n(47120);
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
        i = ''.concat(e, '//').concat(n);
    return {
        protocol: e,
        hostname: n,
        theRestOfTheUrl: t.replace(i, '')
    };
}
function r(t) {
    let { url: e, trustUrl: n, onConfirm: a, onCancel: r, onClose: o } = t,
        [s, c] = l.useState(!1),
        { protocol: x, hostname: d, theRestOfTheUrl: h } = i(e),
        m = l.useCallback(() => {
            s && n(e), null == o || o(), a();
        }, [e, s, n, a, o]);
    return {
        protocol: x,
        hostname: d,
        theRestOfTheUrl: h,
        shouldTrustUrl: s,
        setShouldTrustUrl: c,
        handleConfirm: m,
        handleCancel: l.useCallback(() => {
            null == o || o(), r();
        }, [r, o])
    };
}
