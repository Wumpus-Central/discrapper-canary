n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(688810),
    c = n(429913),
    u = n(769015),
    d = n(390848),
    f = n(562153),
    p = n(183555),
    _ = n(939496),
    h = n(996988),
    m = n(985018),
    g = n(134327);
function E(e) {
    let { user: t, guildId: n, channelId: a, applicationId: E, isGameRelationship: b = !1, className: y } = e,
        { themeType: O } = (0, _.E)(),
        A = O === h.d.MODAL_V2,
        v = f.Ay.getName(n, a, t),
        { trackUserProfileAction: S } = (0, p.NJ)(),
        { newestAnalyticsLocation: I } = (0, l.Ay)(),
        { acceptFriendRequest: T, cancelFriendRequest: C } = (0, d.I)({
            userId: t.id,
            applicationId: E,
            isGameRelationship: b,
            location: I,
        }),
        N = i.useCallback(() => {
            T(), S({ action: b ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [T, b, S]),
        R = i.useCallback(() => {
            C(), S({ action: b ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [C, b, S]),
        w = null != E,
        P = (0, c.h)(E);
    return w && null == P
        ? null
        : (0, r.jsxs)("div", {
              className: s()(g.kL, y),
              children: [
                  w
                      ? (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: m.intl.format(b ? m.t.syHjLL : m.t.V15uUI, {
                                username: v,
                                applicationIcon: () =>
                                    (0, r.jsx)(
                                        u.A,
                                        {
                                            className: g.Gt,
                                            game: P,
                                            size: u.M.XXSMALL,
                                        },
                                        null == P ? void 0 : P.id,
                                    ),
                                applicationName: null == P ? void 0 : P.name,
                            }),
                        })
                      : (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: m.intl.format(m.t.uIomXw, { username: v }),
                        }),
                  (0, r.jsxs)("div", {
                      className: g.UD,
                      children: [
                          (0, r.jsx)(o.Button, {
                              variant: A ? "secondary" : "primary",
                              size: "sm",
                              onClick: N,
                              text: m.intl.string(m.t.Zcibdf),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "secondary",
                              size: "sm",
                              onClick: R,
                              text: m.intl.string(m.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
