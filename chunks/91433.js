n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(835473),
    u = n(925329),
    d = n(743056),
    _ = n(5192),
    f = n(785717),
    p = n(652853),
    h = n(228168),
    m = n(388032),
    g = n(185589);
function E(e) {
    let { user: t, guildId: n, channelId: a, applicationId: E, isGameRelationship: b = !1, className: y } = e,
        { themeType: O } = (0, p.z)(),
        v = O === h.lY.MODAL_V2,
        I = _.ZP.getName(n, a, t),
        { trackUserProfileAction: T } = (0, f.KZ)(),
        { newestAnalyticsLocation: S } = (0, l.ZP)(),
        { acceptFriendRequest: A, cancelFriendRequest: N } = (0, d.u)({
            userId: t.id,
            applicationId: E,
            isGameRelationship: b,
            location: S
        }),
        C = i.useCallback(() => {
            A(), T({ action: b ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [A, b, T]),
        R = i.useCallback(() => {
            N(), T({ action: b ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [N, b, T]),
        P = null != E,
        w = (0, c.q)(E);
    return P && null == w
        ? null
        : (0, r.jsxs)('div', {
              className: o()(g.container, y),
              children: [
                  P
                      ? (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: m.intl.format(b ? m.t.syHjLC : m.t.V15uUF, {
                                username: I,
                                applicationIcon: () =>
                                    (0, r.jsx)(
                                        u.Z,
                                        {
                                            className: g.gameIcon,
                                            game: w,
                                            size: u.Z.Sizes.XXSMALL
                                        },
                                        null == w ? void 0 : w.id
                                    ),
                                applicationName: null == w ? void 0 : w.name
                            })
                        })
                      : (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: m.intl.format(m.t.uIomX1, { username: I })
                        }),
                  (0, r.jsxs)('div', {
                      className: g.buttonContainer,
                      children: [
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: v ? s.zxk.Colors.PRIMARY : o()(s.zxk.Colors.BRAND, g.color),
                              size: s.zxk.Sizes.SMALL,
                              className: g.button,
                              onClick: C,
                              children: m.intl.string(m.t.ZcibdX)
                          }),
                          (0, r.jsx)(s.zxk, {
                              look: s.zxk.Looks.FILLED,
                              color: s.zxk.Colors.PRIMARY,
                              size: s.zxk.Sizes.SMALL,
                              className: g.button,
                              onClick: R,
                              children: m.intl.string(m.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
