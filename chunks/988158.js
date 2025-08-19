n.d(e, {
    X: () => i,
    h: () => r,
}),
    n(704826),
    n(35282),
    n(388685);
var a = n(647438),
    l = n(902676);
function r(t) {
    let { protocol: e, hostname: n } = a.useMemo(
            () => ({
                protocol: (0, l.E)(t),
                hostname: (0, l.F)(t),
            }),
            [t],
        ),
        r = "//" === t.substr(e.length, 2) ? "//" : "",
        i = "".concat(e).concat(r).concat(n);
    return {
        protocol: e,
        authorityPrefix: r,
        hostname: n,
        theRestOfTheUrl: t.replace(i, ""),
    };
}
function i(t) {
    let { url: e, trustUrl: n, onConfirm: l, onCancel: i, onClose: s } = t,
        [o, c] = a.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: m, theRestOfTheUrl: x } = r(e),
        p = a.useCallback(() => {
            o && n(e), null == s || s(), l();
        }, [e, o, n, l, s]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: m,
        theRestOfTheUrl: x,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: p,
        handleCancel: a.useCallback(() => {
            null == s || s(), i();
        }, [i, s]),
    };
}
