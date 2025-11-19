n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(755721),
    a = n(481060),
    o = n(767714),
    s = n(834129),
    l = n(981631),
    c = n(474936),
    u = n(388032),
    d = n(699454);
function f(e) {
    let { message: t, channel: n } = e,
        f = null != n.guild_id ? l.jXE.TEXT_IN_VOICE : l.jXE.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(s.Z, {
        contentClassName: d.messageContentContainer,
        iconContainerClassName: d.iconContainer,
        iconNode: (0, r.jsx)(a.Dkj, { colorClass: d.icon }),
        children: (0, r.jsxs)("div", {
            className: d.container,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            children: t.content,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.nitroBadge,
                            children: [
                                (0, r.jsx)(a.SrA, {
                                    size: "xs",
                                    colorClass: d.nitroBadgeIcon,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    className: d.nitroBadgeText,
                                    children: u.intl.string(u.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d.buttonContainer,
                    children: (0, r.jsx)(o.Z, {
                        showGradient: !0,
                        iconClassName: d.premiumIcon,
                        subscriptionTier: c.Si.TIER_2,
                        textOptions: { textOverride: u.intl.string(u.t.Y2WKTl) },
                        size: i.zx.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: f,
                            object: l.qAy.MESSAGE,
                        },
                    }),
                }),
            ],
        }),
    });
}
