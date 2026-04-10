"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(421380),
    s = n(397927),
    l = n(725807),
    a = n(888675),
    c = n(652215),
    o = n(788868),
    u = n(985018),
    d = n(988020);
function _(e) {
    let { message: t, channel: n } = e,
        _ = null != n.guild_id ? c.JJy.TEXT_IN_VOICE : c.JJy.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(a.A, {
        contentClassName: d.o9,
        iconContainerClassName: d.zc,
        iconNode: (0, i.jsx)(s.XFE, { colorClass: d.Kk }),
        children: (0, i.jsxs)("div", {
            className: d.kL,
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(s.Text, { variant: "text-sm/medium", children: t.content }),
                        (0, i.jsxs)("div", {
                            className: d.C5,
                            children: [
                                (0, i.jsx)(s.tvc, { size: "xs", colorClass: d.bu }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    className: d.vp,
                                    children: u.intl.string(u.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: d.UD,
                    children: (0, i.jsx)(l.A, {
                        showGradient: !0,
                        iconClassName: d.PC,
                        subscriptionTier: o.pe.TIER_2,
                        textOptions: { textOverride: u.intl.string(u.t.Y2WKTl) },
                        size: r.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: { section: _, object: c.ZSU.MESSAGE },
                    }),
                }),
            ],
        }),
    });
}
