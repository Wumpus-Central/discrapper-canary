n.d(e, { A: () => R });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    d = n(821609),
    u = n(688810),
    o = n(429913),
    c = n(769015),
    A = n(390848),
    f = n(39623),
    m = n(420825),
    g = n(22212),
    E = n(660183),
    h = n(266600);
function x(t) {
    let { userId: e, analyticsLocation: n } = t,
        s = (0, m.z)(e),
        [r, u] = l.useState(!1),
        o = l.useCallback(() => {
            (u(!0), (0, g.Yq)({ analyticsLocation: n, noteLength: s?.length ?? 0 }));
        }, [n, s]);
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: h.kL,
              children: [
                  r
                      ? null
                      : (0, i.jsx)("div", {
                            className: h.p6,
                            children: (0, i.jsx)(d.$, {
                                icon: f.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: o,
                                text: E.intl.string(E.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(a.E, {
                      className: r ? void 0 : h.R,
                      "aria-label": r ? s : "",
                      variant: "redesign/message-preview/normal",
                      children: s,
                  }),
              ],
          });
}
var I = n(562153),
    v = n(183555),
    y = n(939496),
    p = n(996988),
    N = n(216057);
function R(t) {
    let { user: e, guildId: n, channelId: s, applicationId: f, isGameRelationship: m = !1, className: g } = t,
        { themeType: h } = (0, y.E)(),
        R = h === p.d.MODAL_V2,
        j = I.Ay.getName(n, s, e),
        { trackUserProfileAction: C } = (0, v.NJ)(),
        { newestAnalyticsLocation: _ } = (0, u.Ay)(),
        { acceptFriendRequest: b, cancelFriendRequest: P } = (0, A.I)({
            userId: e.id,
            applicationId: f,
            isGameRelationship: m,
            location: _,
        }),
        k = l.useCallback(() => {
            (b(), C({ action: m ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [b, m, C]),
        w = l.useCallback(() => {
            (P(), C({ action: m ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [P, m, C]),
        S = null != f,
        L = (0, o.h)(f);
    return S && null == L
        ? null
        : (0, i.jsxs)("div", {
              className: r()(N.kL, g),
              children: [
                  S
                      ? (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: E.intl.format(m ? E.t.syHjLL : E.t.V15uUI, {
                                username: j,
                                applicationIcon: () =>
                                    (0, i.jsx)(c.A, { className: N.Gt, game: L, size: c.M.XXSMALL }, L?.id),
                                applicationName: L?.name,
                            }),
                        })
                      : (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: E.intl.format(E.t.uIomXw, { username: j }),
                        }),
                  (0, i.jsx)(x, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, i.jsxs)("div", {
                      className: N.UD,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: R ? "secondary" : "primary",
                              size: "sm",
                              onClick: k,
                              text: E.intl.string(E.t.Zcibdf),
                          }),
                          (0, i.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: w,
                              text: E.intl.string(E.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
