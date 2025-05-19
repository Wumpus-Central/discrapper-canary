n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(835473),
    u = n(925329),
    d = n(743056),
    f = n(5192),
    _ = n(785717),
    p = n(388032),
    h = n(877468);
function m(e) {
    let { user: t, guildId: n, channelId: a, applicationId: m, isGameRelationship: g = !1, className: E } = e,
        b = f.ZP.getName(n, a, t),
        { trackUserProfileAction: y } = (0, _.KZ)(),
        { newestAnalyticsLocation: O } = (0, l.ZP)(),
        { acceptFriendRequest: v, cancelFriendRequest: I } = (0, d.u)({
            userId: t.id,
            applicationId: m,
            isGameRelationship: g,
            location: O
        }),
        S = i.useCallback(() => {
            v(), y({ action: g ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [v, g, y]),
        T = i.useCallback(() => {
            I(), y({ action: g ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [I, g, y]),
        A = null != m,
        N = (0, c.q)(m);
    return A && null == N
        ? null
        : (0, r.jsxs)('div', {
              className: o()(h.container, E),
              children: [
                  A
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: p.intl.format(g ? p.t.syHjLC : p.t.V15uUF, {
                                username: b,
                                applicationIcon: () =>
                                    (0, r.jsx)(
                                        u.Z,
                                        {
                                            className: h.gameIcon,
                                            game: N,
                                            size: u.Z.Sizes.XXSMALL
                                        },
                                        null == N ? void 0 : N.id
                                    ),
                                applicationName: null == N ? void 0 : N.name
                            })
                        })
                      : (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: p.intl.format(p.t.uIomX1, { username: b })
                        }),
                  (0, r.jsxs)('div', {
                      className: h.buttonContainer,
                      children: [
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: o()(s.zxk.Colors.BRAND, h.color),
                              size: s.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: S,
                              children: p.intl.string(p.t.ZcibdX)
                          }),
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: s.zxk.Colors.PRIMARY,
                              size: s.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: T,
                              children: p.intl.string(p.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
