n.d(t, { I: () => p });
var l = n(627968),
    a = n(64700),
    i = n(661531),
    r = n(885574),
    s = n(262427),
    o = n(212739);
n(25827);
var u = n(788868),
    c = n(594387),
    d = n(375708);
function p(e) {
    let { skuId: t, isGift: n, className: p } = e,
        m = (0, o.O)();
    return a.useMemo(
        () =>
            n || t !== u.pe.TIER_2 || !1 === m
                ? null
                : (0, l.jsx)(s.J, {
                      className: p,
                      gradientColor: "nitro-pink",
                      customGraphic: (0, l.jsx)(r.m, {
                          size: "custom",
                          width: 16,
                          height: 16,
                          color: i.A.colors.ICON_DEFAULT,
                      }),
                      text: d.intl.format(c.default.Urtyu9, { days: 7 }),
                  }),
        [n, t, m, p],
    );
}
