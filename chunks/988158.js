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
        r = ''.concat(e, '//').concat(n);
    return {
        protocol: e,
        hostname: n,
        theRestOfTheUrl: t.replace(r, '')
    };
}
function o(t) {
    let { url: e, trustUrl: n, onConfirm: l, onCancel: o, onClose: i } = t,
        [s, c] = a.useState(!1),
        { protocol: x, hostname: d, theRestOfTheUrl: h } = r(e),
        m = a.useCallback(() => {
            s && n(e), null == i || i(), l();
        }, [e, s, n, l, i]);
    return {
        protocol: x,
        hostname: d,
        theRestOfTheUrl: h,
        shouldTrustUrl: s,
        setShouldTrustUrl: c,
        handleConfirm: m,
        handleCancel: a.useCallback(() => {
            null == i || i(), o();
        }, [o, i])
    };
}
