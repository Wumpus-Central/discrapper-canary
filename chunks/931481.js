s.d(e, { A: () => R });
var n = s(477900),
    a = s(582128),
    i = s(503698),
    l = s.n(i),
    r = s(834730),
    o = s(821609),
    c = s(688810),
    d = s(429913),
    m = s(769015),
    x = s(390848),
    u = s(17928),
    E = s(39623),
    h = s(994500),
    j = s(420825),
    p = s(22212),
    g = s(375708),
    A = s(266600);
function v(t) {
    let { userId: e, analyticsLocation: s } = t,
        i = (0, j.q)(),
        l = (0, u.bG)([h.A], () => h.A.getNote(e)),
        [c, d] = a.useState(!1),
        m = a.useCallback(() => {
            (d(!0), (0, p.Yq)({ analyticsLocation: s, noteLength: l?.length ?? 0 }));
        }, [s, l]);
    return i || null == l || "" === l
        ? null
        : (0, n.jsxs)("div", {
              className: A.kL,
              children: [
                  c
                      ? null
                      : (0, n.jsx)("div", {
                            className: A.p6,
                            children: (0, n.jsx)(o.$, {
                                icon: E.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: m,
                                text: g.intl.string(g.t.sB0q4C),
                            }),
                        }),
                  (0, n.jsx)(r.E, {
                      className: c ? void 0 : A.R,
                      "aria-label": c ? l : "",
                      variant: "redesign/message-preview/normal",
                      children: l,
                  }),
              ],
          });
}
var N = s(562153),
    C = s(183555),
    y = s(939496),
    I = s(996988),
    _ = s(216057);
function R(t) {
    let { user: e, guildId: s, channelId: i, applicationId: u, isGameRelationship: E = !1, className: h } = t,
        { themeType: j } = (0, y.E)(),
        p = j === I.d.MODAL_V2,
        A = N.Ay.getName(s, i, e),
        { trackUserProfileAction: R } = (0, C.NJ)(),
        { newestAnalyticsLocation: f } = (0, c.Ay)(),
        { acceptFriendRequest: k, cancelFriendRequest: b } = (0, x.I)({
            userId: e.id,
            applicationId: u,
            isGameRelationship: E,
            location: f,
        }),
        P = a.useCallback(() => {
            (k(), R({ action: E ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [k, E, R]),
        S = a.useCallback(() => {
            (b(), R({ action: E ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [b, E, R]),
        T = null != u,
        L = (0, d.h)(u);
    return T && null == L
        ? null
        : (0, n.jsxs)("div", {
              className: l()(_.kL, h),
              children: [
                  T
                      ? (0, n.jsx)(r.E, {
                            variant: "text-sm/normal",
                            children: g.intl.format(E ? g.t.syHjLL : g.t.V15uUI, {
                                username: A,
                                applicationIcon: () =>
                                    (0, n.jsx)(m.A, { className: _.Gt, game: L, size: m.M.XXSMALL }, L?.id),
                                applicationName: L?.name,
                            }),
                        })
                      : (0, n.jsx)(r.E, {
                            variant: "text-sm/normal",
                            children: g.intl.format(g.t.uIomXw, { username: A }),
                        }),
                  (0, n.jsx)(v, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, n.jsxs)("div", {
                      className: _.UD,
                      children: [
                          (0, n.jsx)(o.$, {
                              variant: p ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: g.intl.string(g.t.Zcibdf),
                          }),
                          (0, n.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: S,
                              text: g.intl.string(g.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
