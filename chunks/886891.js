n.d(t, { A: () => h });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(834730),
    o = n(821609),
    c = n(688810),
    u = n(429913),
    d = n(769015),
    m = n(390848),
    f = n(562153),
    x = n(183555),
    A = n(939496),
    g = n(996988),
    E = n(985018),
    p = n(581196);
function h(e) {
    let { user: t, guildId: n, channelId: r, applicationId: h, isGameRelationship: N = !1, className: R } = e,
        { themeType: v } = (0, A.E)(),
        b = v === g.d.MODAL_V2,
        j = f.Ay.getName(n, r, t),
        { trackUserProfileAction: I } = (0, x.NJ)(),
        { newestAnalyticsLocation: _ } = (0, c.Ay)(),
        { acceptFriendRequest: y, cancelFriendRequest: C } = (0, m.I)({
            userId: t.id,
            applicationId: h,
            isGameRelationship: N,
            location: _,
        }),
        T = i.useCallback(() => {
            y(), I({ action: N ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [y, N, I]),
        P = i.useCallback(() => {
            C(), I({ action: N ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [C, N, I]),
        S = null != h,
        M = (0, u.h)(h);
    return S && null == M
        ? null
        : (0, l.jsxs)("div", {
              className: a()(p.kL, R),
              children: [
                  S
                      ? (0, l.jsx)(s.E, {
                            variant: "text-sm/normal",
                            children: E.intl.format(N ? E.t.syHjLL : E.t.V15uUI, {
                                username: j,
                                applicationIcon: () =>
                                    (0, l.jsx)(d.A, { className: p.Gt, game: M, size: d.M.XXSMALL }, M?.id),
                                applicationName: M?.name,
                            }),
                        })
                      : (0, l.jsx)(s.E, {
                            variant: "text-sm/normal",
                            children: E.intl.format(E.t.uIomXw, { username: j }),
                        }),
                  (0, l.jsxs)("div", {
                      className: p.UD,
                      children: [
                          (0, l.jsx)(o.$, {
                              variant: b ? "secondary" : "primary",
                              size: "sm",
                              onClick: T,
                              text: E.intl.string(E.t.Zcibdf),
                          }),
                          (0, l.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: P,
                              text: E.intl.string(E.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
