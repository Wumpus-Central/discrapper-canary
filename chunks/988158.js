a.d(e, {
    X: () => o,
    h: () => r,
}),
    a(704826),
    a(35282),
    a(388685);
var n = a(647438),
    l = a(902676);
function r(t) {
    let { protocol: e, hostname: a } = n.useMemo(
            () => ({
                protocol: (0, l.E)(t),
                hostname: (0, l.F)(t),
            }),
            [t],
        ),
        r = "//" === t.substr(e.length, 2) ? "//" : "",
        o = "".concat(e).concat(r).concat(a);
    return {
        protocol: e,
        authorityPrefix: r,
        hostname: a,
        theRestOfTheUrl: t.replace(o, ""),
    };
}
function o(t) {
    let { url: e, trustUrl: a, onConfirm: l, onCancel: o, onClose: s } = t,
        [c, i] = n.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: m, theRestOfTheUrl: x } = r(e),
        p = n.useCallback(() => {
            c && a(e), null == s || s(), l();
        }, [e, c, a, l, s]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: m,
        theRestOfTheUrl: x,
        shouldTrustUrl: c,
        setShouldTrustUrl: i,
        handleConfirm: p,
        handleCancel: n.useCallback(() => {
            null == s || s(), o();
        }, [o, s]),
    };
}
