i.d(t, { A: () => S });
var e = i(477900),
    o = i(582128),
    l = i(17928),
    r = i(922016),
    a = i(980707),
    c = i(477782),
    s = i(365199),
    d = i(793574),
    p = i(688810),
    u = i(173936),
    g = i(735991),
    I = i(287809),
    f = i(957565),
    A = i(342384),
    P = i(20015),
    b = i(652215),
    x = i(189213),
    y = i(192308),
    E = i(331322),
    O = i(928658),
    _ = i(632738),
    h = i(627363),
    R = i(587895),
    k = i(375708);
let v = "useReportAppItemModal";
var C = i(50268),
    L = i(239211),
    j = i(399476),
    B = i(183555),
    N = i(321191),
    U = i(254384),
    m = i(993401);
function S(n) {
    let { user: t, guildId: i, viewProfileItem: S } = n,
        M = o.useRef(null),
        { trackUserProfileAction: w } = (0, B.NJ)(),
        { analyticsLocations: D, newestAnalyticsLocation: G } = (0, p.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
        K = (0, l.bG)([N.A], () => N.A.getUserProfile(t.id)),
        W = K?.application,
        V = (0, L.A)({
            user: t,
            guildId: i,
            location: G,
            onBlock: () => w({ action: "BLOCK", analyticsLocations: D }),
            onUnblock: () => w({ action: "UNBLOCK", analyticsLocations: D }),
        }),
        Y = (0, j.A)({
            user: t,
            guildId: i,
            location: G,
            onIgnore: () => w({ action: "IGNORE", analyticsLocations: D }),
            onUnignore: () => w({ action: "UNIGNORE", analyticsLocations: D }),
        }),
        z = (function (n) {
            let { applicationId: t, ...i } = n;
            return null == t
                ? null
                : (0, e.jsx)(c.Dr, {
                      id: "report-app",
                      color: i.color,
                      label: k.intl.string(k.t.NgA5vp),
                      action: () =>
                          (function (n, t) {
                              function i() {
                                  (0, y.closeModal)(v), t.onSubmit?.();
                              }
                              (0, y.openModalLazy)(
                                  async () => {
                                      await h.Ay.fetchApplication(n);
                                      let o = R.A.getApplication(n);
                                      return (n) =>
                                          (0, e.jsx)(x.Modal, {
                                              title: k.intl.string(k.t.Bd10bR),
                                              actions: [],
                                              ...n,
                                              children: (0, e.jsxs)(E.B, {
                                                  children: [
                                                      (0, e.jsx)(_.PQ, {
                                                          variant: "clickable",
                                                          title: k.intl.string(k.t.eyEkG1),
                                                          description: k.intl.string(k.t.ptItsj),
                                                          onButtonPress: () =>
                                                              (0, O.NW)(t.user, t.guildId, i, t.appContext),
                                                      }),
                                                      (0, e.jsx)(_.PQ, {
                                                          variant: "clickable",
                                                          title: k.intl.string(k.t.atP0yX),
                                                          description: k.intl.string(k.t.UGg603),
                                                          onButtonPress: () => {
                                                              (0, O.r3)({
                                                                  application: o,
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
                                  { modalKey: v },
                              );
                          })(t, i),
                  });
        })({
            applicationId: W?.id,
            user: t,
            guildId: i,
            onSubmit: () => w({ action: "REPORT", analyticsLocations: D }),
            color: "danger",
        }),
        F = (0, C.A)({
            id: W?.id,
            label: k.intl.string(k.t["+NP/b2"]),
            onSuccess: () => w({ action: "COPY_APP_ID", analyticsLocations: D }),
        }),
        T = (function (n) {
            let { application: t, label: i, onSuccess: o, showIconFirst: l } = n;
            if (__OVERLAY__ || !f.p5 || null == t) return null;
            let r = I.default.getCurrentUser(),
                a = (0, g.EF)(t),
                s = `copy-app-link-${t.id}`;
            return (0, e.jsx)(
                c.Dr,
                {
                    id: s,
                    label: i,
                    action: function () {
                        if (null == t) return;
                        let n = (0, P.n)(t, b.gfo.EMBEDDED)
                            ? (0, A.W)({ applicationId: t.id, referrerId: r?.id })
                            : (0, A.V)({ id: t.id, ...a });
                        null != n && (0, f.C)(n, o);
                    },
                    icon: l ? void 0 : u.LinkIcon,
                    iconLeft: l ? u.LinkIcon : void 0,
                    leadingAccessory: { type: "icon", icon: u.LinkIcon },
                },
                s,
            );
        })({
            application: W,
            label: k.intl.string(k.t.WqhZss),
            onSuccess: () => w({ action: "COPY_APP_LINK", analyticsLocations: D }),
        }),
        X = [
            [S, (0, U.A)({ user: t, location: "BotUserProfileOverflowMenuBannerButton" })],
            [Y, V, z],
            [T, F],
        ];
    return X.every((n) => n.every((n) => null == n))
        ? null
        : (0, e.jsx)(r.Y, {
              targetElementRef: M,
              renderPopout: (n) => {
                  let { closePopout: t } = n;
                  return (0, e.jsx)(a.W, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": k.intl.string(k.t.AXIHpV),
                      children: X.map((n, t) => (0, e.jsx)(c.rX, { children: n.map((n) => n) }, t)),
                  });
              },
              children: (n) =>
                  (0, e.jsx)(m.br, {
                      buttonRef: M,
                      action: "PRESS_OPTIONS",
                      icon: s.MoreHorizontalIcon,
                      tooltipText: k.intl.string(k.t["UKOtz+"]),
                      ...n,
                  }),
          });
}
