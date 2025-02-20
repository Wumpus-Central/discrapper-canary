n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(197115),
    o = n(834129),
    l = n(981631),
    s = n(474936),
    c = n(388032),
    d = n(634882);
function u(e) {
    let { message: t, channel: n } = e,
        u = null != n.guild_id ? l.jXE.TEXT_IN_VOICE : l.jXE.CHANNEL_TEXT_AREA;
    return (0, r.jsx)(o.Z, {
        contentClassName: d.messageContentContainer,
        iconContainerClassName: d.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: d.icon }),
        children: (0, r.jsxs)('div', {
            className: d.container,
            children: [
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, r.jsxs)('div', {
                            className: d.nitroBadge,
                            children: [
                                (0, r.jsx)(i.SrA, {
                                    size: 'xs',
                                    colorClass: d.nitroBadgeIcon
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    className: d.nitroBadgeText,
                                    children: c.NW.string(c.t['BMw+7O'])
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
                        subscriptionTier: s.Si.TIER_2,
                        buttonText: c.NW.string(c.t.Y2WKTk),
                        size: i.zxk.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: u,
                            object: l.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}
