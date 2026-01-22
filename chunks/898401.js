n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(421380),
    a = n(397927),
    s = n(465794),
    o = n(888675),
    l = n(652215),
    c = n(788868),
    u = n(985018),
    d = n(801741);
function f(e) {
    let { message: t, channel: n } = e,
        f = null != n.guild_id ? l.JJy.TEXT_IN_VOICE : l.JJy.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(o.A, {
        contentClassName: d.o9,
        iconContainerClassName: d.zc,
        iconNode: (0, r.jsx)(a.XFE, { colorClass: d.Kk }),
        children: (0, r.jsxs)("div", {
            className: d.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            children: t.content,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.C5,
                            children: [
                                (0, r.jsx)(a.tvc, {
                                    size: "xs",
                                    colorClass: d.bu,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    className: d.vp,
                                    children: u.intl.string(u.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d.UD,
                    children: (0, r.jsx)(s.A, {
                        showGradient: !0,
                        iconClassName: d.PC,
                        subscriptionTier: c.pe.TIER_2,
                        textOptions: { textOverride: u.intl.string(u.t.Y2WKTl) },
                        size: i.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: f,
                            object: l.ZSU.MESSAGE,
                        },
                    }),
                }),
            ],
        }),
    });
}
