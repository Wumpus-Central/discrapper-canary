n.d(t, {
    X: () => l,
    h: () => i,
}),
    n(704826),
    n(35282),
    n(388685);
var a = n(473749),
    r = n(902676);
function i(e) {
    let { protocol: t, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, r.E)(e),
                hostname: (0, r.F)(e),
            }),
            [e],
        ),
        i = "//" === e.substr(t.length, 2) ? "//" : "",
        l = "".concat(t).concat(i).concat(n);
    return {
        protocol: t,
        authorityPrefix: i,
        hostname: n,
        theRestOfTheUrl: e.replace(l, ""),
    };
}
function l(e) {
    let { url: t, trustUrl: n, onConfirm: r, onCancel: l, onClose: s } = e,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: m, theRestOfTheUrl: p } = i(t),
        h = a.useCallback(() => {
            o && n(t), null == s || s(), r();
        }, [t, o, n, r, s]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: m,
        theRestOfTheUrl: p,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: h,
        handleCancel: a.useCallback(() => {
            null == s || s(), l();
        }, [l, s]),
    };
}
