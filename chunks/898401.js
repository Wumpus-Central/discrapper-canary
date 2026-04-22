"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(862482),
    l = n(782603),
    s = n(834730),
    a = n(403581),
    o = n(725807),
    c = n(888675),
    u = n(652215),
    d = n(788868),
    _ = n(985018),
    E = n(335364);
function A(e) {
    let { message: t, channel: n } = e,
        A = null != n.guild_id ? u.JJy.TEXT_IN_VOICE : u.JJy.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(c.A, {
        contentClassName: E.o9,
        iconContainerClassName: E.zc,
        iconNode: (0, i.jsx)(l.X, { colorClass: E.Kk }),
        children: (0, i.jsxs)("div", {
            className: E.kL,
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(s.E, { variant: "text-sm/medium", children: t.content }),
                        (0, i.jsxs)("div", {
                            className: E.C5,
                            children: [
                                (0, i.jsx)(a.t, { size: "xs", colorClass: E.bu }),
                                (0, i.jsx)(s.E, {
                                    variant: "text-xs/medium",
                                    className: E.vp,
                                    children: _.intl.string(_.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: E.UD,
                    children: (0, i.jsx)(o.A, {
                        showGradient: !0,
                        iconClassName: E.PC,
                        subscriptionTier: d.pe.TIER_2,
                        textOptions: { textOverride: _.intl.string(_.t.Y2WKTl) },
                        size: r.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: { section: A, object: u.ZSU.MESSAGE },
                    }),
                }),
            ],
        }),
    });
}
