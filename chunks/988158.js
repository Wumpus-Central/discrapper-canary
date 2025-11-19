n.d(e, {
    X: () => c,
    h: () => r,
}),
    n(704826),
    n(35282),
    n(388685);
var a = n(473749),
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
        c = "".concat(e).concat(r).concat(n);
    return {
        protocol: e,
        authorityPrefix: r,
        hostname: n,
        theRestOfTheUrl: t.replace(c, ""),
    };
}
function c(t) {
    let { url: e, trustUrl: n, onConfirm: l, onCancel: c, onClose: i } = t,
        [o, s] = a.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: x, theRestOfTheUrl: m } = r(e),
        h = a.useCallback(() => {
            o && n(e), null == i || i(), l();
        }, [e, o, n, l, i]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: x,
        theRestOfTheUrl: m,
        shouldTrustUrl: o,
        setShouldTrustUrl: s,
        handleConfirm: h,
        handleCancel: a.useCallback(() => {
            null == i || i(), c();
        }, [c, i]),
    };
}
