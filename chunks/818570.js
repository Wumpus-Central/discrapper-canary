n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(197115),
    r = n(834129),
    s = n(981631),
    o = n(474936),
    c = n(388032),
    d = n(542755);
function u(e) {
    let { message: t, channel: n } = e,
        u = null != n.guild_id ? s.jXE.TEXT_IN_VOICE : s.jXE.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(r.Z, {
        contentClassName: d.messageContentContainer,
        iconContainerClassName: d.iconContainer,
        iconNode: (0, i.jsx)(l.Dkj, { colorClass: d.icon }),
        children: (0, i.jsxs)('div', {
            className: d.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, i.jsxs)('div', {
                            className: d.nitroBadge,
                            children: [
                                (0, i.jsx)(l.SrA, {
                                    size: 'xs',
                                    colorClass: d.nitroBadgeIcon
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    className: d.nitroBadgeText,
                                    children: c.intl.string(c.t['BMw+7O'])
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: d.buttonContainer,
                    children: (0, i.jsx)(a.Z, {
                        showGradient: !0,
                        iconClassName: d.premiumIcon,
                        subscriptionTier: o.Si.TIER_2,
                        buttonText: c.intl.string(c.t.Y2WKTk),
                        size: l.zxk.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: u,
                            object: s.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}
