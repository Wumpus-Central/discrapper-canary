n.d(t, { I: () => d });
var l = n(627968),
    r = n(64700),
    i = n(683071),
    a = n(834730),
    s = n(212739);
n(25827);
var o = n(788868),
    u = n(594387),
    c = n(375708);
function d(e) {
    let { skuId: t, isGift: n } = e,
        d = (0, s.O)();
    return r.useMemo(
        () =>
            n || t !== o.pe.TIER_2 || !1 === d
                ? null
                : (0, l.jsx)(i.w, {
                      type: "info",
                      children: (0, l.jsx)(a.E, {
                          variant: "text-sm/medium",
                          children: c.intl.format(u.default.Urtyu9, { days: 7 }),
                      }),
                  }),
        [n, t, d],
    );
}
