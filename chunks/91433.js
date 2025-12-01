n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(835473),
    u = n(925329),
    d = n(743056),
    f = n(5192),
    p = n(785717),
    _ = n(652853),
    m = n(671955),
    h = n(388032),
    g = n(976794);
function E(e) {
    let { user: t, guildId: n, channelId: a, applicationId: E, isGameRelationship: b = !1, className: y } = e,
        { themeType: O } = (0, _.z)(),
        v = O === m.l.MODAL_V2,
        S = f.ZP.getName(n, a, t),
        { trackUserProfileAction: I } = (0, p.KZ)(),
        { newestAnalyticsLocation: T } = (0, l.ZP)(),
        { acceptFriendRequest: A, cancelFriendRequest: C } = (0, d.u)({
            userId: t.id,
            applicationId: E,
            isGameRelationship: b,
            location: T,
        }),
        N = i.useCallback(() => {
            A(), I({ action: b ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [A, b, I]),
        P = i.useCallback(() => {
            C(), I({ action: b ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [C, b, I]),
        R = null != E,
        w = (0, c.q)(E);
    return R && null == w
        ? null
        : (0, r.jsxs)("div", {
              className: o()(g.container, y),
              children: [
                  R
                      ? (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.intl.format(b ? h.t.syHjLL : h.t.V15uUI, {
                                username: S,
                                applicationIcon: () =>
                                    (0, r.jsx)(
                                        u.Z,
                                        {
                                            className: g.gameIcon,
                                            game: w,
                                            size: u.A.XXSMALL,
                                        },
                                        null == w ? void 0 : w.id,
                                    ),
                                applicationName: null == w ? void 0 : w.name,
                            }),
                        })
                      : (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.intl.format(h.t.uIomXw, { username: S }),
                        }),
                  (0, r.jsxs)("div", {
                      className: g.buttonContainer,
                      children: [
                          (0, r.jsx)(s.Button, {
                              variant: v ? "secondary" : "primary",
                              size: "sm",
                              onClick: N,
                              text: h.intl.string(h.t.Zcibdf),
                          }),
                          (0, r.jsx)(s.Button, {
                              variant: "secondary",
                              size: "sm",
                              onClick: P,
                              text: h.intl.string(h.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
