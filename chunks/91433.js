n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(835473),
    d = n(925329),
    _ = n(743056),
    f = n(5192),
    p = n(785717),
    h = n(652853),
    m = n(228168),
    g = n(388032),
    E = n(185589);
function b(e) {
    let { user: t, guildId: n, channelId: a, applicationId: b, isGameRelationship: y = !1, className: O } = e,
        { themeType: v } = (0, h.z)(),
        I = v === m.lY.MODAL_V2,
        T = f.ZP.getName(n, a, t),
        { trackUserProfileAction: S } = (0, p.KZ)(),
        { newestAnalyticsLocation: A } = (0, c.ZP)(),
        { acceptFriendRequest: N, cancelFriendRequest: C } = (0, _.u)({
            userId: t.id,
            applicationId: b,
            isGameRelationship: y,
            location: A
        }),
        R = i.useCallback(() => {
            (N(), S({ action: y ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' }));
        }, [N, y, S]),
        P = i.useCallback(() => {
            (C(), S({ action: y ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' }));
        }, [C, y, S]),
        w = null != b,
        D = (0, u.q)(b);
    return w && null == D
        ? null
        : (0, r.jsxs)('div', {
              className: o()(E.container, O),
              children: [
                  w
                      ? (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: g.intl.format(y ? g.t.syHjLC : g.t.V15uUF, {
                                username: T,
                                applicationIcon: () =>
                                    (0, r.jsx)(
                                        d.Z,
                                        {
                                            className: E.gameIcon,
                                            game: D,
                                            size: d.Z.Sizes.XXSMALL
                                        },
                                        null == D ? void 0 : D.id
                                    ),
                                applicationName: null == D ? void 0 : D.name
                            })
                        })
                      : (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: g.intl.format(g.t.uIomX1, { username: T })
                        }),
                  (0, r.jsxs)('div', {
                      className: E.buttonContainer,
                      children: [
                          (0, r.jsx)(s.zx, {
                              look: s.zx.Looks.FILLED,
                              color: I ? s.zx.Colors.PRIMARY : o()(s.zx.Colors.BRAND, E.color),
                              size: s.zx.Sizes.SMALL,
                              className: E.button,
                              onClick: R,
                              children: g.intl.string(g.t.ZcibdX)
                          }),
                          (0, r.jsx)(s.zx, {
                              look: s.zx.Looks.FILLED,
                              color: s.zx.Colors.PRIMARY,
                              size: s.zx.Sizes.SMALL,
                              className: E.button,
                              onClick: P,
                              children: g.intl.string(g.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
