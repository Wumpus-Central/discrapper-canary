i.d(t, { A: () => v });
var e = i(627968),
    l = i(64700),
    o = i(17928),
    a = i(922016),
    r = i(980707),
    c = i(477782),
    d = i(365199),
    s = i(793574),
    u = i(688810),
    p = i(173936),
    A = i(735991),
    g = i(287809),
    f = i(957565),
    m = i(342384),
    I = i(20015),
    P = i(652215),
    _ = i(189213),
    O = i(192308),
    h = i(331322),
    C = i(928658),
    x = i(632738),
    N = i(627363),
    b = i(587895),
    y = i(375708);
let E = "useReportAppItemModal";
var R = i(50268),
    j = i(239211),
    M = i(399476),
    S = i(183555),
    U = i(321191),
    k = i(993401);
function v(n) {
    let { user: t, guildId: i, viewProfileItem: v } = n,
        D = l.useRef(null),
        { trackUserProfileAction: L } = (0, S.NJ)(),
        { analyticsLocations: B, newestAnalyticsLocation: w } = (0, u.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        G = (0, o.bG)([U.A], () => U.A.getUserProfile(t.id)),
        K = G?.application,
        V = (0, j.A)({
            user: t,
            guildId: i,
            location: w,
            onBlock: () => L({ action: "BLOCK", analyticsLocations: B }),
            onUnblock: () => L({ action: "UNBLOCK", analyticsLocations: B }),
        }),
        W = (0, M.A)({
            user: t,
            guildId: i,
            location: w,
            onIgnore: () => L({ action: "IGNORE", analyticsLocations: B }),
            onUnignore: () => L({ action: "UNIGNORE", analyticsLocations: B }),
        }),
        q = (function (n) {
            let { applicationId: t, ...i } = n;
            return null == t
                ? null
                : (0, e.jsx)(c.Dr, {
                      id: "report-app",
                      color: i.color,
                      label: y.intl.string(y.t.NgA5vp),
                      action: () =>
                          (function (n, t) {
                              function i() {
                                  (0, O.closeModal)(E), t.onSubmit?.();
                              }
                              (0, O.openModalLazy)(
                                  async () => {
                                      await N.Ay.fetchApplication(n);
                                      let l = b.A.getApplication(n);
                                      return (n) =>
                                          (0, e.jsx)(_.Modal, {
                                              title: y.intl.string(y.t.Bd10bR),
                                              actions: [],
                                              ...n,
                                              children: (0, e.jsxs)(h.B, {
                                                  children: [
                                                      (0, e.jsx)(x.PQ, {
                                                          variant: "clickable",
                                                          title: y.intl.string(y.t.eyEkG1),
                                                          description: y.intl.string(y.t.ptItsj),
                                                          onButtonPress: () =>
                                                              (0, C.NW)(t.user, t.guildId, i, t.appContext),
                                                      }),
                                                      (0, e.jsx)(x.PQ, {
                                                          variant: "clickable",
                                                          title: y.intl.string(y.t.atP0yX),
                                                          description: y.intl.string(y.t.UGg603),
                                                          onButtonPress: () => {
                                                              (0, C.r3)({
                                                                  application: l,
                                                                  entrypoint: t.entrypoint ?? "user_profile",
                                                                  contextualGuildId: t.guildId,
                                                                  contextualChannelId: t.channelId,
                                                                  onSubmit: i,
                                                                  appContext: t.appContext,
                                                              });
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          });
                                  },
                                  { modalKey: E },
                              );
                          })(t, i),
                  });
        })({
            applicationId: K?.id,
            user: t,
            guildId: i,
            onSubmit: () => L({ action: "REPORT", analyticsLocations: B }),
            color: "danger",
        }),
        T = (0, R.A)({
            id: K?.id,
            label: y.intl.string(y.t["+NP/b2"]),
            onSuccess: () => L({ action: "COPY_APP_ID", analyticsLocations: B }),
        }),
        Y = [
            [v],
            [W, V, q],
            [
                (function (n) {
                    let { application: t, label: i, onSuccess: l, showIconFirst: o } = n;
                    if (__OVERLAY__ || !f.p5 || null == t) return null;
                    let a = g.default.getCurrentUser(),
                        r = (0, A.EF)(t),
                        d = `copy-app-link-${t.id}`;
                    return (0, e.jsx)(
                        c.Dr,
                        {
                            id: d,
                            label: i,
                            action: function () {
                                if (null == t) return;
                                let n = (0, I.n)(t, P.gfo.EMBEDDED)
                                    ? (0, m.W)({ applicationId: t.id, referrerId: a?.id })
                                    : (0, m.V)({ id: t.id, ...r });
                                null != n && (0, f.C)(n, l);
                            },
                            icon: o ? void 0 : p.q,
                            iconLeft: o ? p.q : void 0,
                            leadingAccessory: { type: "icon", icon: p.q },
                        },
                        d,
                    );
                })({
                    application: K,
                    label: y.intl.string(y.t.WqhZss),
                    onSuccess: () => L({ action: "COPY_APP_LINK", analyticsLocations: B }),
                }),
                T,
            ],
        ];
    return Y.every((n) => n.every((n) => null == n))
        ? null
        : (0, e.jsx)(a.Y, {
              targetElementRef: D,
              renderPopout: (n) => {
                  let { closePopout: t } = n;
                  return (0, e.jsx)(r.W, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": y.intl.string(y.t.AXIHpV),
                      children: Y.map((n, t) => (0, e.jsx)(c.rX, { children: n.map((n) => n) }, t)),
                  });
              },
              children: (n) =>
                  (0, e.jsx)(k.br, {
                      buttonRef: D,
                      action: "PRESS_OPTIONS",
                      icon: d.j,
                      tooltipText: y.intl.string(y.t["UKOtz+"]),
                      ...n,
                  }),
          });
}
