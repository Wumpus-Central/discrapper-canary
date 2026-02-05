"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(688810),
    u = n(429913),
    c = n(769015),
    d = n(390848),
    _ = n(562153),
    f = n(183555),
    p = n(939496),
    h = n(996988),
    m = n(985018),
    g = n(134327);
function E(e) {
    let { user: t, guildId: n, channelId: a, applicationId: E, isGameRelationship: A = !1, className: I } = e,
        { themeType: T } = (0, p.E)(),
        y = T === h.d.MODAL_V2,
        S = _.Ay.getName(n, a, t),
        { trackUserProfileAction: v } = (0, f.NJ)(),
        { newestAnalyticsLocation: C } = (0, l.Ay)(),
        { acceptFriendRequest: b, cancelFriendRequest: N } = (0, d.I)({
            userId: t.id,
            applicationId: E,
            isGameRelationship: A,
            location: C,
        }),
        R = i.useCallback(() => {
            b(), v({ action: A ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [b, A, v]),
        O = i.useCallback(() => {
            N(), v({ action: A ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [N, A, v]),
        D = null != E,
        L = (0, u.h)(E);
    return D && null == L
        ? null
        : (0, r.jsxs)("div", {
              className: s()(g.kL, I),
              children: [
                  D
                      ? (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: m.intl.format(A ? m.t.syHjLL : m.t.V15uUI, {
                                username: S,
                                applicationIcon: () =>
                                    (0, r.jsx)(c.A, { className: g.Gt, game: L, size: c.M.XXSMALL }, L?.id),
                                applicationName: L?.name,
                            }),
                        })
                      : (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: m.intl.format(m.t.uIomXw, { username: S }),
                        }),
                  (0, r.jsxs)("div", {
                      className: g.UD,
                      children: [
                          (0, r.jsx)(o.Button, {
                              variant: y ? "secondary" : "primary",
                              size: "sm",
                              onClick: R,
                              text: m.intl.string(m.t.Zcibdf),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "secondary",
                              size: "sm",
                              onClick: O,
                              text: m.intl.string(m.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
