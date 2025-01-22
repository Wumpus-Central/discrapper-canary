n.d(t, {
    Z: function () {
        return d;
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
    u = n(566330);
function d(e) {
    let { message: t, channel: n } = e,
        d = null != n.guild_id ? o.jXE.TEXT_IN_VOICE : o.jXE.CHANNEL_TEXT_AREA;
    return (0, i.jsx)(a.Z, {
        contentClassName: u.messageContentContainer,
        iconContainerClassName: u.iconContainer,
        iconNode: (0, i.jsx)(r.BellIcon, { colorClass: u.icon }),
        children: (0, i.jsxs)('div', {
            className: u.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            children: t.content
                        }),
                        (0, i.jsxs)('div', {
                            className: u.nitroBadge,
                            children: [
                                (0, i.jsx)(r.NitroWheelIcon, {
                                    size: 'xs',
                                    colorClass: u.nitroBadgeIcon
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-xs/medium',
                                    className: u.nitroBadgeText,
                                    children: c.intl.string(c.t['BMw+7O'])
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: u.buttonContainer,
                    children: (0, i.jsx)(l.Z, {
                        showGradient: !0,
                        iconClassName: u.premiumIcon,
                        subscriptionTier: s.Si.TIER_2,
                        buttonText: c.intl.string(c.t.Y2WKTk),
                        size: r.Button.Sizes.SMALL,
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
