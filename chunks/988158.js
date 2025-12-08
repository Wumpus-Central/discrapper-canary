n.d(t, {
    X: () => i,
    h: () => r,
}),
    n(704826),
    n(35282),
    n(388685);
var a = n(473749),
    l = n(902676);
function r(e) {
    let { protocol: t, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, l.E)(e),
                hostname: (0, l.F)(e),
            }),
            [e],
        ),
        r = "//" === e.substr(t.length, 2) ? "//" : "",
        i = "".concat(t).concat(r).concat(n);
    return {
        protocol: t,
        authorityPrefix: r,
        hostname: n,
        theRestOfTheUrl: e.replace(i, ""),
    };
}
function i(e) {
    let { url: t, trustUrl: n, onConfirm: l, onCancel: i, onClose: s } = e,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: m, theRestOfTheUrl: p } = r(t),
        h = a.useCallback(() => {
            o && n(t), null == s || s(), l();
        }, [t, o, n, l, s]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: m,
        theRestOfTheUrl: p,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: h,
        handleCancel: a.useCallback(() => {
            null == s || s(), i();
        }, [i, s]),
    };
}
