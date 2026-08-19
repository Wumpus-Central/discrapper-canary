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
    f = n(39623),
    m = n(17928),
    x = n(885386),
    R = n(994500),
    g = n(22212),
    p = n(375708),
    I = n(461777);
function A(e) {
    let { userId: t, analyticsLocation: n } = e,
        r = x.Zd.useSetting(),
        s = (0, m.bG)([R.A], () => R.A.getNote(t)),
        [c, u] = l.useState(!1),
        d = l.useCallback(() => {
            u(!0), (0, g.Yq)({ analyticsLocation: n, noteLength: s?.length ?? 0 });
        }, [n, s]);
    return r || null == s || "" === s
        ? null
        : (0, i.jsxs)("div", {
              className: I.kL,
              children: [
                  c
                      ? null
                      : (0, i.jsx)("div", {
                            className: I.p6,
                            children: (0, i.jsx)(o.$, {
                                icon: f.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: d,
                                text: p.intl.string(p.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(a.E, {
                      className: c ? void 0 : I.R,
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
    let { user: t, guildId: n, channelId: r, applicationId: f, isGameRelationship: m = !1, className: x } = e,
        { themeType: R } = (0, N.E)(),
        g = R === v.d.MODAL_V2,
        I = _.Ay.getName(n, r, t),
        { trackUserProfileAction: b } = (0, h.NJ)(),
        { newestAnalyticsLocation: j } = (0, c.Ay)(),
        { acceptFriendRequest: C, cancelFriendRequest: T } = (0, E.I)({
            userId: t.id,
            applicationId: f,
            isGameRelationship: m,
            location: j,
        }),
        S = l.useCallback(() => {
            C(), b({ action: m ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [C, m, b]),
        M = l.useCallback(() => {
            T(), b({ action: m ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [T, m, b]),
        P = null != f,
        k = (0, u.h)(f);
    return P && null == k
        ? null
        : (0, i.jsxs)("div", {
              className: s()(O.kL, x),
              children: [
                  P
                      ? (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: p.intl.format(m ? p.t.syHjLL : p.t.V15uUI, {
                                username: I,
                                applicationIcon: () =>
                                    (0, i.jsx)(d.A, { className: O.Gt, game: k, size: d.M.XXSMALL }, k?.id),
                                applicationName: k?.name,
                            }),
                        })
                      : (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: p.intl.format(p.t.uIomXw, { username: I }),
                        }),
                  (0, i.jsx)(A, { userId: t.id, analyticsLocation: "User Profile" }),
                  (0, i.jsxs)("div", {
                      className: O.UD,
                      children: [
                          (0, i.jsx)(o.$, {
                              variant: g ? "secondary" : "primary",
                              size: "sm",
                              onClick: S,
                              text: p.intl.string(p.t.Zcibdf),
                          }),
                          (0, i.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: M,
                              text: p.intl.string(p.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
