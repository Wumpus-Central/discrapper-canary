i.d(e, { A: () => y });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(834730),
    d = i(821609),
    o = i(688810),
    u = i(429913),
    c = i(769015),
    A = i(390848),
    m = i(39623),
    f = i(420825),
    g = i(22212),
    h = i(105292),
    x = i(266600);
function I(t) {
    let { userId: e, analyticsLocation: i } = t,
        s = (0, f.z)(e),
        [r, o] = l.useState(!1),
        u = l.useCallback(() => {
            (o(!0), (0, g.Yq)({ analyticsLocation: i, noteLength: s?.length ?? 0 }));
        }, [i, s]);
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: x.kL,
              children: [
                  r
                      ? null
                      : (0, n.jsx)("div", {
                            className: x.p6,
                            children: (0, n.jsx)(d.$, {
                                icon: m.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: u,
                                text: h.intl.string(h.t.sB0q4C),
                            }),
                        }),
                  (0, n.jsx)(a.E, {
                      className: r ? void 0 : x.R,
                      "aria-label": r ? s : "",
                      variant: "redesign/message-preview/normal",
                      children: s,
                  }),
              ],
          });
}
var E = i(562153),
    v = i(183555),
    j = i(939496),
    p = i(996988),
    C = i(216057);
function y(t) {
    let { user: e, guildId: i, channelId: s, applicationId: m, isGameRelationship: f = !1, className: g } = t,
        { themeType: x } = (0, j.E)(),
        y = x === p.d.MODAL_V2,
        N = E.Ay.getName(i, s, e),
        { trackUserProfileAction: b } = (0, v.NJ)(),
        { newestAnalyticsLocation: k } = (0, o.Ay)(),
        { acceptFriendRequest: R, cancelFriendRequest: L } = (0, A.I)({
            userId: e.id,
            applicationId: m,
            isGameRelationship: f,
            location: k,
        }),
        P = l.useCallback(() => {
            (R(), b({ action: f ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [R, f, b]),
        S = l.useCallback(() => {
            (L(), b({ action: f ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [L, f, b]),
        U = null != m,
        _ = (0, u.h)(m);
    return U && null == _
        ? null
        : (0, n.jsxs)("div", {
              className: r()(C.kL, g),
              children: [
                  U
                      ? (0, n.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: h.intl.format(f ? h.t.syHjLL : h.t.V15uUI, {
                                username: N,
                                applicationIcon: () =>
                                    (0, n.jsx)(c.A, { className: C.Gt, game: _, size: c.M.XXSMALL }, _?.id),
                                applicationName: _?.name,
                            }),
                        })
                      : (0, n.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: h.intl.format(h.t.uIomXw, { username: N }),
                        }),
                  (0, n.jsx)(I, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, n.jsxs)("div", {
                      className: C.UD,
                      children: [
                          (0, n.jsx)(d.$, {
                              variant: y ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: h.intl.string(h.t.Zcibdf),
                          }),
                          (0, n.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: S,
                              text: h.intl.string(h.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
