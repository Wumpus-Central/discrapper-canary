i.d(e, { A: () => C });
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
    f = i(39623),
    m = i(420825),
    g = i(22212),
    E = i(105292),
    h = i(266600);
function x(t) {
    let { userId: e, analyticsLocation: i } = t,
        s = (0, m.z)(e),
        [r, o] = l.useState(!1),
        u = l.useCallback(() => {
            (o(!0), (0, g.Yq)({ analyticsLocation: i, noteLength: s?.length ?? 0 }));
        }, [i, s]);
    return null == s
        ? null
        : (0, n.jsxs)("div", {
              className: h.kL,
              children: [
                  r
                      ? null
                      : (0, n.jsx)("div", {
                            className: h.p6,
                            children: (0, n.jsx)(d.$, {
                                icon: f.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(E.t.sB0q4C),
                            }),
                        }),
                  (0, n.jsx)(a.E, {
                      className: r ? void 0 : h.R,
                      "aria-label": r ? s : "",
                      variant: "redesign/message-preview/normal",
                      children: s,
                  }),
              ],
          });
}
var I = i(562153),
    v = i(183555),
    y = i(939496),
    p = i(996988),
    j = i(216057);
function C(t) {
    let { user: e, guildId: i, channelId: s, applicationId: f, isGameRelationship: m = !1, className: g } = t,
        { themeType: h } = (0, y.E)(),
        C = h === p.d.MODAL_V2,
        R = I.Ay.getName(i, s, e),
        { trackUserProfileAction: N } = (0, v.NJ)(),
        { newestAnalyticsLocation: b } = (0, o.Ay)(),
        { acceptFriendRequest: _, cancelFriendRequest: k } = (0, A.I)({
            userId: e.id,
            applicationId: f,
            isGameRelationship: m,
            location: b,
        }),
        P = l.useCallback(() => {
            (_(), N({ action: m ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [_, m, N]),
        w = l.useCallback(() => {
            (k(), N({ action: m ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [k, m, N]),
        S = null != f,
        L = (0, u.h)(f);
    return S && null == L
        ? null
        : (0, n.jsxs)("div", {
              className: r()(j.kL, g),
              children: [
                  S
                      ? (0, n.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: E.intl.format(m ? E.t.syHjLL : E.t.V15uUI, {
                                username: R,
                                applicationIcon: () =>
                                    (0, n.jsx)(c.A, { className: j.Gt, game: L, size: c.M.XXSMALL }, L?.id),
                                applicationName: L?.name,
                            }),
                        })
                      : (0, n.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: E.intl.format(E.t.uIomXw, { username: R }),
                        }),
                  (0, n.jsx)(x, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, n.jsxs)("div", {
                      className: j.UD,
                      children: [
                          (0, n.jsx)(d.$, {
                              variant: C ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: E.intl.string(E.t.Zcibdf),
                          }),
                          (0, n.jsx)(d.$, {
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
