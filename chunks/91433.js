n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(906732),
    u = n(835473),
    c = n(925329),
    d = n(743056),
    f = n(5192),
    _ = n(785717),
    p = n(388032),
    h = n(252020);
function m(e) {
    let { user: t, guildId: n, channelId: a, applicationId: m, friendToken: g, isGameRelationship: E = !1, className: v } = e,
        y = f.ZP.getName(n, a, t),
        { trackUserProfileAction: I } = (0, _.KZ)(),
        { newestAnalyticsLocation: T } = (0, l.ZP)(),
        { acceptFriendRequest: b, cancelFriendRequest: S } = (0, d.u)({
            userId: t.id,
            applicationId: m,
            isGameRelationship: E,
            location: T,
            friendToken: g
        }),
        A = r.useCallback(() => {
            b(), I({ action: E ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [b, E, I]),
        N = r.useCallback(() => {
            S(), I({ action: E ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [S, E, I]),
        C = null != m,
        R = (0, u.q)(m);
    return C && null == R
        ? null
        : (0, i.jsxs)('div', {
              className: s()(h.container, v),
              children: [
                  C
                      ? (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: p.intl.format(E ? p.t.syHjLC : p.t.V15uUF, {
                                username: y,
                                applicationIcon: () =>
                                    (0, i.jsx)(
                                        c.Z,
                                        {
                                            className: h.gameIcon,
                                            game: R,
                                            size: c.Z.Sizes.XXSMALL
                                        },
                                        null == R ? void 0 : R.id
                                    ),
                                applicationName: null == R ? void 0 : R.name
                            })
                        })
                      : (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: p.intl.format(p.t.uIomX1, { username: y })
                        }),
                  (0, i.jsxs)('div', {
                      className: h.buttonContainer,
                      children: [
                          (0, i.jsx)(o.zxk, {
                              look: o.zxk.Looks.FILLED,
                              color: s()(o.zxk.Colors.BRAND, h.color),
                              size: o.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: A,
                              children: p.intl.string(p.t.ZcibdX)
                          }),
                          (0, i.jsx)(o.zxk, {
                              look: o.zxk.Looks.FILLED,
                              color: o.zxk.Colors.PRIMARY,
                              size: o.zxk.Sizes.SMALL,
                              className: h.button,
                              onClick: N,
                              children: p.intl.string(p.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
