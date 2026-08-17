i.d(t, { A: () => S });
var e = i(477900),
    l = i(582128),
    o = i(17928),
    r = i(922016),
    a = i(980707),
    c = i(477782),
    d = i(365199),
    s = i(793574),
    u = i(688810),
    p = i(173936),
    A = i(735991),
    I = i(287809),
    f = i(957565),
    g = i(342384),
    m = i(20015),
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
var M = i(50268),
    R = i(239211),
    k = i(399476),
    j = i(183555),
    L = i(321191),
    U = i(254384),
    v = i(993401);
function S(n) {
    let { user: t, guildId: i, viewProfileItem: S } = n,
        B = l.useRef(null),
        { trackUserProfileAction: D } = (0, j.NJ)(),
        { analyticsLocations: w, newestAnalyticsLocation: G } = (0, u.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        K = (0, o.bG)([L.A], () => L.A.getUserProfile(t.id)),
        V = K?.application,
        W = (0, R.A)({
            user: t,
            guildId: i,
            location: G,
            onBlock: () => D({ action: "BLOCK", analyticsLocations: w }),
            onUnblock: () => D({ action: "UNBLOCK", analyticsLocations: w }),
        }),
        T = (0, k.A)({
            user: t,
            guildId: i,
            location: G,
            onIgnore: () => D({ action: "IGNORE", analyticsLocations: w }),
            onUnignore: () => D({ action: "UNIGNORE", analyticsLocations: w }),
        }),
        Y = (function (n) {
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
            applicationId: V?.id,
            user: t,
            guildId: i,
            onSubmit: () => D({ action: "REPORT", analyticsLocations: w }),
            color: "danger",
        }),
        z = (0, M.A)({
            id: V?.id,
            label: y.intl.string(y.t["+NP/b2"]),
            onSuccess: () => D({ action: "COPY_APP_ID", analyticsLocations: w }),
        }),
        F = (function (n) {
            let { application: t, label: i, onSuccess: l, showIconFirst: o } = n;
            if (__OVERLAY__ || !f.p5 || null == t) return null;
            let r = I.default.getCurrentUser(),
                a = (0, A.EF)(t),
                d = `copy-app-link-${t.id}`;
            return (0, e.jsx)(
                c.Dr,
                {
                    id: d,
                    label: i,
                    action: function () {
                        if (null == t) return;
                        let n = (0, m.n)(t, P.gfo.EMBEDDED)
                            ? (0, g.W)({ applicationId: t.id, referrerId: r?.id })
                            : (0, g.V)({ id: t.id, ...a });
                        null != n && (0, f.C)(n, l);
                    },
                    icon: o ? void 0 : p.LinkIcon,
                    iconLeft: o ? p.LinkIcon : void 0,
                    leadingAccessory: { type: "icon", icon: p.LinkIcon },
                },
                d,
            );
        })({
            application: V,
            label: y.intl.string(y.t.WqhZss),
            onSuccess: () => D({ action: "COPY_APP_LINK", analyticsLocations: w }),
        }),
        H = [
            [S, (0, U.A)({ user: t, location: "BotUserProfileOverflowMenuBannerButton" })],
            [T, W, Y],
            [F, z],
        ];
    return H.every((n) => n.every((n) => null == n))
        ? null
        : (0, e.jsx)(r.Y, {
              targetElementRef: B,
              renderPopout: (n) => {
                  let { closePopout: t } = n;
                  return (0, e.jsx)(a.W, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": y.intl.string(y.t.AXIHpV),
                      children: H.map((n, t) => (0, e.jsx)(c.rX, { children: n.map((n) => n) }, t)),
                  });
              },
              children: (n) =>
                  (0, e.jsx)(v.br, {
                      buttonRef: B,
                      action: "PRESS_OPTIONS",
                      icon: d.MoreHorizontalIcon,
                      tooltipText: y.intl.string(y.t["UKOtz+"]),
                      ...n,
                  }),
          });
}
