(e.d(a, {
    X: () => r,
    h: () => i
}),
    e(704826),
    e(35282),
    e(388685));
var n = e(73800),
    l = e(902676);
function i(t) {
    let { protocol: a, hostname: e } = n.useMemo(
            () => ({
                protocol: (0, l.E)(t),
                hostname: (0, l.F)(t)
            }),
            [t]
        ),
        i = '//' === t.substr(a.length, 2) ? '//' : '',
        r = ''.concat(a).concat(i).concat(e);
    return {
        protocol: a,
        authorityPrefix: i,
        hostname: e,
        theRestOfTheUrl: t.replace(r, '')
    };
}
function r(t) {
    let { url: a, trustUrl: e, onConfirm: l, onCancel: r, onClose: s } = t,
        [o, c] = n.useState(!1),
        { protocol: d, authorityPrefix: u, hostname: x, theRestOfTheUrl: h } = i(a),
        m = n.useCallback(() => {
            (o && e(a), null == s || s(), l());
        }, [a, o, e, l, s]);
    return {
        protocol: d,
        authorityPrefix: u,
        hostname: x,
        theRestOfTheUrl: h,
        shouldTrustUrl: o,
        setShouldTrustUrl: c,
        handleConfirm: m,
        handleCancel: n.useCallback(() => {
            (null == s || s(), r());
        }, [r, s])
    };
}
