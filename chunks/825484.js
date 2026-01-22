n.d(t, {
    e: () => o,
});
var r = n(627968),
    i = n(64700),
    a = n(331322),
    s = n(977067);

function o(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: o,
            align: l,
            padding: c,
            className: u,
            children: d,
            wrap: f = !0,
            fullWidth: p = !1,
            fullWidthContainer: _ = !1,
        } = e,
        h = i.useMemo(
            () => ({
                size: t,
                fullWidth: p,
            }),
            [t, p],
        );
    return (0, r.jsx)(a.B, {
        direction: n,
        gap: 8,
        justify: o,
        align: l,
        wrap: f,
        padding: c,
        className: u,
        fullWidth: !!_ || p,
        children: (0, r.jsx)(s.Z.Provider, {
            value: h,
            children: d,
        }),
    });
}
