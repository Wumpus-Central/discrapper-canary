n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(197115),
    a = n(834129),
    o = n(981631),
    s = n(474936),
    c = n(388032),
    d = n(566330);
function u(e) {
    let { message: t, channel: n } = e,
        u = null != n.guild_id ? o.jXE.TEXT_IN_VOICE : o.jXE.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(a.Z, {
        contentClassName: d.messageContentContainer,
        iconContainerClassName: d.iconContainer,
        iconNode: (0, i.jsx)(r.BellIcon, { colorClass: d.icon }),
        children: (0, i.jsxs)('div', {
            className: d.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, i.jsxs)('div', {
                            className: d.nitroBadge,
                            children: [
                                (0, i.jsx)(r.NitroWheelIcon, {
                                    size: 'xs',
                                    colorClass: d.nitroBadgeIcon
                                }),
                                (0, i.jsx)(r.Text, {
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
                    children: (0, i.jsx)(l.Z, {
                        showGradient: !0,
                        iconClassName: d.premiumIcon,
                        subscriptionTier: s.Si.TIER_2,
                        buttonText: c.intl.string(c.t.Y2WKTk),
                        size: r.Button.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: u,
                            object: o.qAy.MESSAGE
                        }
                    })
                })
            ]
        })
    });
}
