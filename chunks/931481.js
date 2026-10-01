n.d(e, { A: () => _ });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    d = n(821609),
    o = n(688810),
    u = n(429913),
    c = n(769015),
    A = n(390848),
    m = n(17928),
    f = n(39623),
    E = n(994500),
    g = n(420825),
    x = n(22212),
    h = n(375708),
    I = n(266600);
function v(t) {
    let { userId: e, analyticsLocation: n } = t,
        s = (0, g.q)(),
        r = (0, m.bG)([E.A], () => E.A.getNote(e)),
        [o, u] = l.useState(!1),
        c = l.useCallback(() => {
            (u(!0), (0, x.Yq)({ analyticsLocation: n, noteLength: r?.length ?? 0 }));
        }, [n, r]);
    return s || null == r || "" === r
        ? null
        : (0, i.jsxs)("div", {
              className: I.kL,
              children: [
                  o
                      ? null
                      : (0, i.jsx)("div", {
                            className: I.p6,
                            children: (0, i.jsx)(d.$, {
                                icon: f.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: c,
                                text: h.intl.string(h.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(a.E, {
                      className: o ? void 0 : I.R,
                      "aria-label": o ? r : "",
                      variant: "redesign/message-preview/normal",
                      children: r,
                  }),
              ],
          });
}
var p = n(562153),
    C = n(183555),
    N = n(939496),
    j = n(996988),
    y = n(216057);
function _(t) {
    let { user: e, guildId: n, channelId: s, applicationId: m, isGameRelationship: f = !1, className: E } = t,
        { themeType: g } = (0, N.E)(),
        x = g === j.d.MODAL_V2,
        I = p.Ay.getName(n, s, e),
        { trackUserProfileAction: _ } = (0, C.NJ)(),
        { newestAnalyticsLocation: R } = (0, o.Ay)(),
        { acceptFriendRequest: S, cancelFriendRequest: b } = (0, A.I)({
            userId: e.id,
            applicationId: m,
            isGameRelationship: f,
            location: R,
        }),
        P = l.useCallback(() => {
            (S(), _({ action: f ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" }));
        }, [S, f, _]),
        k = l.useCallback(() => {
            (b(), _({ action: f ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" }));
        }, [b, f, _]),
        L = null != m,
        T = (0, u.h)(m);
    return L && null == T
        ? null
        : (0, i.jsxs)("div", {
              className: r()(y.kL, E),
              children: [
                  L
                      ? (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: h.intl.format(f ? h.t.syHjLL : h.t.V15uUI, {
                                username: I,
                                applicationIcon: () =>
                                    (0, i.jsx)(c.A, { className: y.Gt, game: T, size: c.M.XXSMALL }, T?.id),
                                applicationName: T?.name,
                            }),
                        })
                      : (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            children: h.intl.format(h.t.uIomXw, { username: I }),
                        }),
                  (0, i.jsx)(v, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, i.jsxs)("div", {
                      className: y.UD,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: x ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: h.intl.string(h.t.Zcibdf),
                          }),
                          (0, i.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: k,
                              text: h.intl.string(h.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
