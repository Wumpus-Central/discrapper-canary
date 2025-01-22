r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(194359),
    u = r(906732),
    c = r(5192),
    d = r(785717),
    f = r(388032),
    p = r(117191);
function h(e) {
    let { user: n, guildId: r, channelId: a, friendToken: h, className: _ } = e,
        m = c.ZP.getName(r, a, n),
        { trackUserProfileAction: g } = (0, d.KZ)(),
        { newestAnalyticsLocation: E } = (0, u.ZP)();
    return (0, i.jsxs)('div', {
        className: o()(p.container, _),
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: f.intl.format(f.t.uIomX1, { username: m })
            }),
            (0, i.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, i.jsx)(s.Button, {
                        look: s.Button.Looks.FILLED,
                        color: o()(s.Button.Colors.BRAND, p.color),
                        size: s.Button.Sizes.SMALL,
                        className: p.button,
                        onClick: () => {
                            g({ action: 'ACCEPT_FRIEND_REQUEST' }),
                                l.Z.addRelationship({
                                    userId: n.id,
                                    friendToken: h,
                                    context: { location: E }
                                });
                        },
                        children: f.intl.string(f.t.ZcibdX)
                    }),
                    (0, i.jsx)(s.Button, {
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        className: p.button,
                        onClick: () => {
                            g({ action: 'IGNORE_FRIEND_REQUEST' }), l.Z.cancelFriendRequest(n.id, { location: E });
                        },
                        children: f.intl.string(f.t.xuio0N)
                    })
                ]
            })
        ]
    });
}
