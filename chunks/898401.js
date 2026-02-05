n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(421380),
    a = n(397927),
    r = n(465794),
    s = n(888675),
    o = n(652215),
    d = n(788868),
    c = n(985018),
    u = n(801741);
function m(e) {
    let { message: t, channel: n } = e,
        m = null != n.guild_id ? o.JJy.TEXT_IN_VOICE : o.JJy.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(s.A, {
        contentClassName: u.o9,
        iconContainerClassName: u.zc,
        iconNode: (0, i.jsx)(a.XFE, { colorClass: u.Kk }),
        children: (0, i.jsxs)("div", {
            className: u.kL,
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(a.Text, { variant: "text-sm/medium", children: t.content }),
                        (0, i.jsxs)("div", {
                            className: u.C5,
                            children: [
                                (0, i.jsx)(a.tvc, { size: "xs", colorClass: u.bu }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    className: u.vp,
                                    children: c.intl.string(c.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: u.UD,
                    children: (0, i.jsx)(r.A, {
                        showGradient: !0,
                        iconClassName: u.PC,
                        subscriptionTier: d.pe.TIER_2,
                        textOptions: { textOverride: c.intl.string(c.t.Y2WKTl) },
                        size: l.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: { section: m, object: o.ZSU.MESSAGE },
                    }),
                }),
            ],
        }),
    });
}
