n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(767714),
    o = n(834129),
    s = n(981631),
    c = n(474936),
    u = n(388032),
    d = n(806725);
function p(e) {
    let { message: t, channel: n } = e,
        p = null != n.guild_id ? s.jXE.TEXT_IN_VOICE : s.jXE.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(o.Z, {
        contentClassName: d.messageContentContainer,
        iconContainerClassName: d.iconContainer,
        iconNode: (0, r.jsx)(l.Dkj, { colorClass: d.icon }),
        children: (0, r.jsxs)('div', {
            className: d.container,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, r.jsxs)('div', {
                            className: d.nitroBadge,
                            children: [
                                (0, r.jsx)(l.SrA, {
                                    size: 'xs',
                                    colorClass: d.nitroBadgeIcon
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    className: d.nitroBadgeText,
                                    children: u.intl.string(u.t['BMw+7O'])
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: d.buttonContainer,
                    children: (0, r.jsx)(a.Z, {
                        showGradient: !0,
                        iconClassName: d.premiumIcon,
                        subscriptionTier: c.Si.TIER_2,
                        textOptions: { textOverride: u.intl.string(u.t.Y2WKTk) },
                        size: i.zx.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: p,
                            object: s.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}
