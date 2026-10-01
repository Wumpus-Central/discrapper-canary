n.d(e, { A: () => j });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    d = n(821609),
    o = n(688810),
    u = n(429913),
    c = n(769015),
    m = n(390848),
    A = n(39623),
    f = n(420825),
    E = n(22212),
    x = n(375708),
    g = n(266600);
function h(t) {
    let { userId: e, analyticsLocation: n } = t,
        s = (0, f.z)(e),
        [r, o] = l.useState(!1),
        u = l.useCallback(() => {
            (o(!0), (0, E.Yq)({ analyticsLocation: n, noteLength: s?.length ?? 0 }));
        }, [n, s]);
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: g.kL,
              children: [
                  r
                      ? null
                      : (0, i.jsx)("div", {
                            className: g.p6,
                            children: (0, i.jsx)(d.$, {
                                icon: A.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: u,
                                text: x.intl.string(x.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(a.E, {
                      className: r ? void 0 : g.R,
                      "aria-label": r ? s : "",
                      variant: "redesign/message-preview/normal",
                      children: s,
                  }),
              ],
          });
}
var I = n(562153),
    v = n(183555),
    p = n(939496),
    C = n(996988),
    N = n(216057);
function j(t) {
    let { user: e, guildId: n, channelId: s, applicationId: A, isGameRelationship: f = !1, className: E } = t,
        { themeType: g } = (0, p.E)(),
        j = g === C.d.MODAL_V2,
        y = I.Ay.getName(n, s, e),
        { trackUserProfileAction: _ } = (0, v.NJ)(),
        { newestAnalyticsLocation: R } = (0, o.Ay)(),
        { acceptFriendRequest: S, cancelFriendRequest: b } = (0, m.I)({
            userId: e.id,
            applicationId: A,
            isGameRelationship: f,
            location: R,
        }),
        P = l.useCallback(() => {
            (S(), _({ action: f ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [S, f, _]),
        k = l.useCallback(() => {
            (b(), _({ action: f ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [b, f, _]),
        L = null != A,
        T = (0, u.h)(A);
    return L && null == T
        ? null
        : (0, i.jsxs)("div", {
              className: r()(N.kL, E),
              children: [
                  L
                      ? (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: x.intl.format(f ? x.t.syHjLL : x.t.V15uUI, {
                                username: y,
                                applicationIcon: () =>
                                    (0, i.jsx)(c.A, { className: N.Gt, game: T, size: c.M.XXSMALL }, T?.id),
                                applicationName: T?.name,
                            }),
                        })
                      : (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: x.intl.format(x.t.uIomXw, { username: y }),
                        }),
                  (0, i.jsx)(h, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, i.jsxs)("div", {
                      className: N.UD,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: j ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: x.intl.string(x.t.Zcibdf),
                          }),
                          (0, i.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: k,
                              text: x.intl.string(x.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
