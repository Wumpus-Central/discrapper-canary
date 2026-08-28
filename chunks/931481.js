s.d(e, { A: () => _ });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    r = s.n(a),
    l = s(834730),
    o = s(821609),
    c = s(688810),
    d = s(429913),
    m = s(769015),
    x = s(390848),
    u = s(39623),
    E = s(17928),
    j = s(994500),
    v = s(420825),
    h = s(22212),
    A = s(375708),
    N = s(266600);
function g(t) {
    let { userId: e, analyticsLocation: s } = t,
        a = (0, v.q)(),
        r = (0, E.bG)([j.A], () => j.A.getNote(e)),
        [c, d] = i.useState(!1),
        m = i.useCallback(() => {
            d(!0), (0, h.Yq)({ analyticsLocation: s, noteLength: r?.length ?? 0 });
        }, [s, r]);
    return a || null == r || "" === r
        ? null
        : (0, n.jsxs)("div", {
              className: N.kL,
              children: [
                  c
                      ? null
                      : (0, n.jsx)("div", {
                            className: N.p6,
                            children: (0, n.jsx)(o.$, {
                                icon: u.EyeIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: m,
                                text: A.intl.string(A.t.sB0q4C),
                            }),
                        }),
                  (0, n.jsx)(l.E, {
                      className: c ? void 0 : N.R,
                      "aria-label": c ? r : "",
                      variant: "redesign/message-preview/normal",
                      children: r,
                  }),
              ],
          });
}
var p = s(562153),
    C = s(183555),
    y = s(939496),
    I = s(996988),
    f = s(216057);
function _(t) {
    let { user: e, guildId: s, channelId: a, applicationId: u, isGameRelationship: E = !1, className: j } = t,
        { themeType: v } = (0, y.E)(),
        h = v === I.d.MODAL_V2,
        N = p.Ay.getName(s, a, e),
        { trackUserProfileAction: _ } = (0, C.NJ)(),
        { newestAnalyticsLocation: R } = (0, c.Ay)(),
        { acceptFriendRequest: k, cancelFriendRequest: P } = (0, x.I)({
            userId: e.id,
            applicationId: u,
            isGameRelationship: E,
            location: R,
        }),
        b = i.useCallback(() => {
            k(), _({ action: E ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [k, E, _]),
        S = i.useCallback(() => {
            P(), _({ action: E ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [P, E, _]),
        L = null != u,
        T = (0, d.h)(u);
    return L && null == T
        ? null
        : (0, n.jsxs)("div", {
              className: r()(f.kL, j),
              children: [
                  L
                      ? (0, n.jsx)(l.E, {
                            variant: "text-sm/normal",
                            children: A.intl.format(E ? A.t.syHjLL : A.t.V15uUI, {
                                username: N,
                                applicationIcon: () =>
                                    (0, n.jsx)(m.A, { className: f.Gt, game: T, size: m.M.XXSMALL }, T?.id),
                                applicationName: T?.name,
                            }),
                        })
                      : (0, n.jsx)(l.E, {
                            variant: "text-sm/normal",
                            children: A.intl.format(A.t.uIomXw, { username: N }),
                        }),
                  (0, n.jsx)(g, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, n.jsxs)("div", {
                      className: f.UD,
                      children: [
                          (0, n.jsx)(o.$, {
                              variant: h ? "secondary" : "primary",
                              size: "sm",
                              onClick: b,
                              text: A.intl.string(A.t.Zcibdf),
                          }),
                          (0, n.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: S,
                              text: A.intl.string(A.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
