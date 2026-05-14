n.d(e, { A: () => v });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(834730),
    o = n(821609),
    c = n(688810),
    u = n(429913),
    d = n(137177),
    m = n(390848),
    x = n(39623),
    E = n(17928),
    f = n(885386),
    g = n(994500),
    p = n(375708),
    R = n(304265);
function N(t) {
    let { userId: e } = t,
        n = f.Zd.useSetting(),
        r = (0, E.bG)([g.A], () => g.A.getNote(e)),
        [a, c] = l.useState(!1),
        u = l.useCallback(() => {
            c(!0);
        }, []);
    return n || null == r || "" === r
        ? null
        : (0, i.jsxs)("div", {
              className: R.kL,
              children: [
                  a
                      ? null
                      : (0, i.jsx)("div", {
                            className: R.p6,
                            children: (0, i.jsx)(o.$, {
                                icon: x.b,
                                variant: "secondary",
                                size: "sm",
                                onClick: u,
                                text: p.intl.string(p.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(s.E, {
                      className: a ? void 0 : R.R,
                      "aria-label": a ? r : "",
                      variant: "redesign/message-preview/normal",
                      children: r,
                  }),
              ],
          });
}
var A = n(562153),
    j = n(183555),
    h = n(939496),
    b = n(996988),
    I = n(581196);
function v(t) {
    let { user: e, guildId: n, channelId: r, applicationId: x, isGameRelationship: E = !1, className: f } = t,
        { themeType: g } = (0, h.E)(),
        R = g === b.d.MODAL_V2,
        v = A.Ay.getName(n, r, e),
        { trackUserProfileAction: _ } = (0, j.NJ)(),
        { newestAnalyticsLocation: C } = (0, c.Ay)(),
        { acceptFriendRequest: y, cancelFriendRequest: T } = (0, m.I)({
            userId: e.id,
            applicationId: x,
            isGameRelationship: E,
            location: C,
        }),
        G = l.useCallback(() => {
            y(), _({ action: E ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [y, E, _]),
        P = l.useCallback(() => {
            T(), _({ action: E ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [T, E, _]),
        S = null != x,
        O = (0, u.h)(x);
    return S && null == O
        ? null
        : (0, i.jsxs)("div", {
              className: a()(I.kL, f),
              children: [
                  S
                      ? (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            children: p.intl.format(E ? p.t.syHjLL : p.t.V15uUI, {
                                username: v,
                                applicationIcon: () =>
                                    (0, i.jsx)(d.A, { className: I.Gt, game: O, size: d.M.XXSMALL }, O?.id),
                                applicationName: O?.name,
                            }),
                        })
                      : (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            children: p.intl.format(p.t.uIomXw, { username: v }),
                        }),
                  (0, i.jsx)(N, { userId: e.id }),
                  (0, i.jsxs)("div", {
                      className: I.UD,
                      children: [
                          (0, i.jsx)(o.$, {
                              variant: R ? "secondary" : "primary",
                              size: "sm",
                              onClick: G,
                              text: p.intl.string(p.t.Zcibdf),
                          }),
                          (0, i.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: P,
                              text: p.intl.string(p.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
