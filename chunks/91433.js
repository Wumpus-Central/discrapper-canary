r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(906732),
    c = r(835473),
    d = r(925329),
    f = r(269245),
    p = r(5192),
    h = r(785717),
    _ = r(388032),
    m = r(117191);
function g(e) {
    let { user: n, guildId: r, channelId: o, applicationId: g, friendToken: E, isGameRelationship: v = !1, className: y } = e,
        b = p.ZP.getName(r, o, n),
        { trackUserProfileAction: I } = (0, h.KZ)(),
        { newestAnalyticsLocation: T } = (0, u.ZP)(),
        { acceptFriendRequest: S, cancelFriendRequest: A } = (0, f.u)({
            userId: n.id,
            applicationId: g,
            isGameRelationship: v,
            location: T,
            friendToken: E
        }),
        C = a.useCallback(() => {
            S(), I({ action: v ? 'ACCEPT_GAME_FRIEND_REQUEST' : 'ACCEPT_FRIEND_REQUEST' });
        }, [S, v, I]),
        N = a.useCallback(() => {
            A(), I({ action: v ? 'IGNORE_GAME_FRIEND_REQUEST' : 'IGNORE_FRIEND_REQUEST' });
        }, [A, v, I]),
        R = (0, c.q)(g);
    return v && null == R
        ? null
        : (0, i.jsxs)('div', {
              className: s()(m.container, y),
              children: [
                  v
                      ? (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: _.intl.format(_.t.syHjLC, {
                                username: b,
                                applicationIcon: () =>
                                    (0, i.jsx)(
                                        d.Z,
                                        {
                                            className: m.gameIcon,
                                            game: R,
                                            size: d.Z.Sizes.XXSMALL
                                        },
                                        null == R ? void 0 : R.id
                                    ),
                                applicationName: null == R ? void 0 : R.name
                            })
                        })
                      : (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: _.intl.format(_.t.uIomX1, { username: b })
                        }),
                  (0, i.jsxs)('div', {
                      className: m.buttonContainer,
                      children: [
                          (0, i.jsx)(l.Button, {
                              look: l.Button.Looks.FILLED,
                              color: s()(l.Button.Colors.BRAND, m.color),
                              size: l.Button.Sizes.SMALL,
                              className: m.button,
                              onClick: C,
                              children: _.intl.string(_.t.ZcibdX)
                          }),
                          (0, i.jsx)(l.Button, {
                              look: l.Button.Looks.FILLED,
                              color: l.Button.Colors.PRIMARY,
                              size: l.Button.Sizes.SMALL,
                              className: m.button,
                              onClick: N,
                              children: _.intl.string(_.t.xuio0N)
                          })
                      ]
                  })
              ]
          });
}
