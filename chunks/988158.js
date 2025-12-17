n.d(t, {
    X: () => i,
    h: () => l,
}),
    n(704826),
    n(35282),
    n(388685);
var a = n(473749),
    r = n(902676);
function l(e) {
    let { protocol: t, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, r.E)(e),
                hostname: (0, r.F)(e),
            }),
            [e],
        ),
        l = "//" === e.substr(t.length, 2) ? "//" : "",
        i = "".concat(t).concat(l).concat(n);
    return {
        protocol: t,
        authorityPrefix: l,
        hostname: n,
        theRestOfTheUrl: e.replace(i, ""),
    };
}
function i(e) {
    let { url: t, trustUrl: n, onConfirm: r, onCancel: i, onClose: s } = e,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: m, theRestOfTheUrl: p } = l(t),
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
            null == s || s(), i();
        }, [i, s]),
    };
}
