r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(194359),
    u = r(906732),
    c = r(5192),
    d = r(785717),
    f = r(388032),
    _ = r(117191);
function h(e) {
    let { user: n, guildId: r, channelId: a, friendToken: h, className: p } = e,
        m = c.ZP.getName(r, a, n),
        { trackUserProfileAction: g } = (0, d.KZ)(),
        { newestAnalyticsLocation: E } = (0, u.ZP)();
    return (0, i.jsxs)('div', {
        className: s()(_.container, p),
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: f.intl.format(f.t.uIomX1, { username: m })
            }),
            (0, i.jsxs)('div', {
                className: _.buttonContainer,
                children: [
                    (0, i.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        color: s()(o.Button.Colors.BRAND, _.color),
                        size: o.Button.Sizes.SMALL,
                        className: _.button,
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
                    (0, i.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        className: _.button,
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
