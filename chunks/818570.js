n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(197115),
    l = n(834129),
    o = n(981631),
    s = n(474936),
    c = n(388032),
    u = n(806725);
function d(e) {
    let { message: t, channel: n } = e,
        d = null != n.guild_id ? o.jXE.TEXT_IN_VOICE : o.jXE.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(l.Z, {
        contentClassName: u.messageContentContainer,
        iconContainerClassName: u.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: u.icon }),
        children: (0, r.jsxs)('div', {
            className: u.container,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, r.jsxs)('div', {
                            className: u.nitroBadge,
                            children: [
                                (0, r.jsx)(i.SrA, {
                                    size: 'xs',
                                    colorClass: u.nitroBadgeIcon
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    className: u.nitroBadgeText,
                                    children: c.NW.string(c.t['BMw+7O'])
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: u.buttonContainer,
                    children: (0, r.jsx)(a.Z, {
                        showGradient: !0,
                        iconClassName: u.premiumIcon,
                        subscriptionTier: s.Si.TIER_2,
                        buttonText: c.NW.string(c.t.Y2WKTk),
                        size: i.zxk.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: d,
                            object: o.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}
