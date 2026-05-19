n.d(e, { A: () => _ });
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
    f = n(17928),
    E = n(885386),
    g = n(994500),
    p = n(22212),
    R = n(375708),
    N = n(304265);
function A(t) {
    let { userId: e, analyticsLocation: n } = t,
        r = E.Zd.useSetting(),
        a = (0, f.bG)([g.A], () => g.A.getNote(e)),
        [c, u] = l.useState(!1),
        d = l.useCallback(() => {
            u(!0), (0, p.Yq)({ analyticsLocation: n, noteLength: a?.length ?? 0 });
        }, [n, a]);
    return r || null == a || "" === a
        ? null
        : (0, i.jsxs)("div", {
              className: N.kL,
              children: [
                  c
                      ? null
                      : (0, i.jsx)("div", {
                            className: N.p6,
                            children: (0, i.jsx)(o.$, {
                                icon: x.b,
                                variant: "secondary",
                                size: "sm",
                                onClick: d,
                                text: R.intl.string(R.t.sB0q4C),
                            }),
                        }),
                  (0, i.jsx)(s.E, {
                      className: c ? void 0 : N.R,
                      "aria-label": c ? a : "",
                      variant: "redesign/message-preview/normal",
                      children: a,
                  }),
              ],
          });
}
var h = n(562153),
    j = n(183555),
    b = n(939496),
    I = n(996988),
    v = n(581196);
function _(t) {
    let { user: e, guildId: n, channelId: r, applicationId: x, isGameRelationship: f = !1, className: E } = t,
        { themeType: g } = (0, b.E)(),
        p = g === I.d.MODAL_V2,
        N = h.Ay.getName(n, r, e),
        { trackUserProfileAction: _ } = (0, j.NJ)(),
        { newestAnalyticsLocation: C } = (0, c.Ay)(),
        { acceptFriendRequest: y, cancelFriendRequest: T } = (0, m.I)({
            userId: e.id,
            applicationId: x,
            isGameRelationship: f,
            location: C,
        }),
        P = l.useCallback(() => {
            y(), _({ action: f ? "ACCEPT_GAME_FRIEND_REQUEST" : "ACCEPT_FRIEND_REQUEST" });
        }, [y, f, _]),
        G = l.useCallback(() => {
            T(), _({ action: f ? "IGNORE_GAME_FRIEND_REQUEST" : "IGNORE_FRIEND_REQUEST" });
        }, [T, f, _]),
        S = null != x,
        O = (0, u.h)(x);
    return S && null == O
        ? null
        : (0, i.jsxs)("div", {
              className: a()(v.kL, E),
              children: [
                  S
                      ? (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            children: R.intl.format(f ? R.t.syHjLL : R.t.V15uUI, {
                                username: N,
                                applicationIcon: () =>
                                    (0, i.jsx)(d.A, { className: v.Gt, game: O, size: d.M.XXSMALL }, O?.id),
                                applicationName: O?.name,
                            }),
                        })
                      : (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            children: R.intl.format(R.t.uIomXw, { username: N }),
                        }),
                  (0, i.jsx)(A, { userId: e.id, analyticsLocation: "User Profile" }),
                  (0, i.jsxs)("div", {
                      className: v.UD,
                      children: [
                          (0, i.jsx)(o.$, {
                              variant: p ? "secondary" : "primary",
                              size: "sm",
                              onClick: P,
                              text: R.intl.string(R.t.Zcibdf),
                          }),
                          (0, i.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: G,
                              text: R.intl.string(R.t.xuio0C),
                          }),
                      ],
                  }),
              ],
          });
}
