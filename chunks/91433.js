n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(906732),
    c = n(835473),
    u = n(925329),
    d = n(743056),
    f = n(5192),
    _ = n(785717),
    p = n(388032),
    h = n(185589);
function m(e) {
    let { user: t, guildId: n, channelId: o, applicationId: m, friendToken: g, isGameRelationship: E = !1, className: b } = e,
        y = f.ZP.getName(n, o, t),
        { trackUserProfileAction: v } = (0, _.KZ)(),
        { newestAnalyticsLocation: O } = (0, l.ZP)(),
        { acceptFriendRequest: I, cancelFriendRequest: S } = (0, d.u)({
            userId: t.id,
            applicationId: m,
            isGameRelationship: E,
            location: O,
            friendToken: g
        }),
        T = i.useCallback(() => {
            I(), v({ action: E ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [I, E, v]),
        N = i.useCallback(() => {
            S(), v({ action: E ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [S, E, v]),
        A = null != m,
        C = (0, c.q)(m);
    return A && null == C
        ? null
        : (0, r.jsxs)('div', {
              className: a()(h.container, b),
              children: [
                  A
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: p.NW.format(E ? p.t.syHjLC : p.t.V15uUF, {
                                username: y,
                                applicationIcon: () =>
                                    (0, r.jsx)(
                                        u.Z,
                                        {
                                            className: h.gameIcon,
                                            game: C,
                                            size: u.Z.Sizes.XXSMALL
                                        },
                                        null == C ? void 0 : C.id
                                    ),
                                applicationName: null == C ? void 0 : C.name
                            })
                        })
                      : (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: p.NW.format(p.t.uIomX1, { username: y })
                        }),
                  (0, r.jsxs)('div', {
                      className: h.buttonContainer,
                      children: [
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: a()(s.zxk.Colors.BRAND, h.color),
                              size: s.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: T,
                              children: p.NW.string(p.t.ZcibdX)
                          }),
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: s.zxk.Colors.PRIMARY,
                              size: s.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: N,
                              children: p.NW.string(p.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
