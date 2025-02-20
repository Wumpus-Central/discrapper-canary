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
    p = n(785717),
    _ = n(388032),
    h = n(263356);
function m(e) {
    let { user: t, guildId: n, channelId: o, applicationId: m, friendToken: g, isGameRelationship: E = !1, className: v } = e,
        b = f.ZP.getName(n, o, t),
        { trackUserProfileAction: y } = (0, p.KZ)(),
        { newestAnalyticsLocation: O } = (0, l.ZP)(),
        { acceptFriendRequest: S, cancelFriendRequest: I } = (0, d.u)({
            userId: t.id,
            applicationId: m,
            isGameRelationship: E,
            location: O,
            friendToken: g
        }),
        T = i.useCallback(() => {
            S(), y({ action: E ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [S, E, y]),
        N = i.useCallback(() => {
            I(), y({ action: E ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [I, E, y]),
        A = null != m,
        C = (0, c.q)(m);
    return A && null == C
        ? null
        : (0, r.jsxs)('div', {
              className: a()(h.container, v),
              children: [
                  A
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: _.NW.format(E ? _.t.syHjLC : _.t.V15uUF, {
                                username: b,
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
                            children: _.NW.format(_.t.uIomX1, { username: b })
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
                              children: _.NW.string(_.t.ZcibdX)
                          }),
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: s.zxk.Colors.PRIMARY,
                              size: s.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: N,
                              children: _.NW.string(_.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
