r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(194359),
    c = r(906732),
    d = r(835473),
    f = r(925329),
    p = r(855796),
    h = r(5192),
    _ = r(785717),
    m = r(388032),
    g = r(117191);
function E(e) {
    let { user: n, guildId: r, channelId: o, applicationId: E, friendToken: v, isGameRelationship: y = !1, className: b } = e,
        I = h.ZP.getName(r, o, n),
        { trackUserProfileAction: T } = (0, _.KZ)(),
        { newestAnalyticsLocation: S } = (0, c.ZP)(),
        A = a.useCallback(() => {
            if (y) {
                if (null == E) return;
                p.Z.acceptGameFriendRequest({
                    userId: n.id,
                    applicationId: E
                });
            } else
                u.Z.addRelationship({
                    userId: n.id,
                    friendToken: v,
                    context: { location: S }
                });
            T({ action: y ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [y, T, E, n.id, v, S]),
        C = a.useCallback(() => {
            if (y) {
                if (null == E) return;
                p.Z.cancelGameFriendRequest({
                    userId: n.id,
                    applicationId: E
                });
            } else u.Z.cancelFriendRequest(n.id, { location: S });
            T({ action: y ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [E, y, S, T, n.id]),
        N = (0, d.q)(E);
    return y && null == N
        ? null
        : (0, i.jsxs)('div', {
              className: s()(g.container, b),
              children: [
                  y
                      ? (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: m.intl.format(m.t.syHjLC, {
                                username: I,
                                applicationIcon: () =>
                                    (0, i.jsx)(
                                        f.Z,
                                        {
                                            className: g.gameIcon,
                                            game: N,
                                            size: f.Z.Sizes.XXSMALL
                                        },
                                        null == N ? void 0 : N.id
                                    ),
                                applicationName: null == N ? void 0 : N.name
                            })
                        })
                      : (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: m.intl.format(m.t.uIomX1, { username: I })
                        }),
                  (0, i.jsxs)('div', {
                      className: g.buttonContainer,
                      children: [
                          (0, i.jsx)(l.Button, {
                              look: l.Button.Looks.FILLED,
                              color: s()(l.Button.Colors.BRAND, g.color),
                              size: l.Button.Sizes.SMALL,
                              className: g.button,
                              onClick: A,
                              children: m.intl.string(m.t.ZcibdX)
                          }),
                          (0, i.jsx)(l.Button, {
                              look: l.Button.Looks.FILLED,
                              color: l.Button.Colors.PRIMARY,
                              size: l.Button.Sizes.SMALL,
                              className: g.button,
                              onClick: C,
                              children: m.intl.string(m.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
