n.d(t, { A: () => b });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(821609),
    c = n(688810),
    u = n(429913),
    d = n(769015),
    E = n(390848),
    m = n(39623),
    f = n(17928),
    x = n(885386),
    R = n(994500),
    p = n(22212),
    g = n(375708),
    A = n(461777);
function I(e) {
    let { userId: t, analyticsLocation: n } = e,
        r = x.Zd.useSetting(),
        s = (0, f.bG)([R.A], () => R.A.getNote(t)),
        [c, u] = l.useState(!1),
        d = l.useCallback(() => {
            u(!0), (0, p.Yq)({ analyticsLocation: n, noteLength: s?.length ?? 0 });
        }, [n, s]);
    return r || null == s || "" === s
        ? null
        : (0, i.jsxs)("div", {
              className: A.kL,
              children: [
                  c
                      ? null
                      : (0, i.jsx)("div", {
                            className: A.p6,
                            children: (0, i.jsx)(o.$, {
                                icon: m.b,
                                variant: "secondary",
                                size: "sm",
                                onClick: d,
                                text: g.intl.string(g.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(a.E, {
                      className: c ? void 0 : A.R,
                      "aria-label": c ? s : "",
                      variant: "redesign/message-preview/normal",
                      children: s,
                  }),
              ],
          });
}
var _ = n(562153),
    h = n(183555),
    N = n(939496),
    v = n(996988),
    O = n(133188);
function b(e) {
    let { user: t, guildId: n, channelId: r, applicationId: m, isGameRelationship: f = !1, className: x } = e,
        { themeType: R } = (0, N.E)(),
        p = R === v.d.MODAL_V2,
        A = _.Ay.getName(n, r, t),
        { trackUserProfileAction: b } = (0, h.NJ)(),
        { newestAnalyticsLocation: j } = (0, c.Ay)(),
        { acceptFriendRequest: C, cancelFriendRequest: T } = (0, E.I)({
            userId: t.id,
            applicationId: m,
            isGameRelationship: f,
            location: j,
        }),
        S = l.useCallback(() => {
            C(), b({ action: f ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [C, f, b]),
        M = l.useCallback(() => {
            T(), b({ action: f ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [T, f, b]),
        P = null != m,
        D = (0, u.h)(m);
    return P && null == D
        ? null
        : (0, i.jsxs)("div", {
              className: s()(O.kL, x),
              children: [
                  P
                      ? (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: g.intl.format(f ? g.t.syHjLL : g.t.V15uUI, {
                                username: A,
                                applicationIcon: () =>
                                    (0, i.jsx)(d.A, { className: O.Gt, game: D, size: d.M.XXSMALL }, D?.id),
                                applicationName: D?.name,
                            }),
                        })
                      : (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: g.intl.format(g.t.uIomXw, { username: A }),
                        }),
                  (0, i.jsx)(I, { userId: t.id, analyticsLocation: "User Profile" }),
                  (0, i.jsxs)("div", {
                      className: O.UD,
                      children: [
                          (0, i.jsx)(o.$, {
                              variant: p ? "secondary" : "primary",
                              size: "sm",
                              onClick: S,
                              text: g.intl.string(g.t.Zcibdf),
                          }),
                          (0, i.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: M,
                              text: g.intl.string(g.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
