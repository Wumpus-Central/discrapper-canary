n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(922016),
    a = n(550079),
    o = n(477782),
    d = n(365199),
    c = n(793574),
    u = n(688810),
    h = n(173936),
    A = n(735991),
    _ = n(287809),
    g = n(957565),
    m = n(342384),
    p = n(20015),
    f = n(652215),
    E = n(189213),
    C = n(192308),
    x = n(331322),
    I = n(928658),
    b = n(632738),
    S = n(627363),
    N = n(587895),
    T = n(985018);
let v = "useReportAppItemModal";
var y = n(50268),
    R = n(239211),
    j = n(399476),
    L = n(183555),
    O = n(841595),
    G = n(993401);
function M(e) {
    let { user: t, guildId: n, viewProfileItem: M } = e,
        D = l.useRef(null),
        { trackUserProfileAction: U } = (0, L.NJ)(),
        { analyticsLocations: P, newestAnalyticsLocation: w } = (0, u.Ay)(c.A.USER_PROFILE_OVERFLOW_MENU),
        k = (0, s.bG)([O.A], () => O.A.getUserProfile(t.id)),
        V = k?.application,
        B = (0, R.A)({
            user: t,
            guildId: n,
            location: w,
            onBlock: () => U({ action: "BLOCK", analyticsLocations: P }),
            onUnblock: () => U({ action: "UNBLOCK", analyticsLocations: P }),
        }),
        H = (0, j.A)({
            user: t,
            guildId: n,
            location: w,
            onIgnore: () => U({ action: "IGNORE", analyticsLocations: P }),
            onUnignore: () => U({ action: "UNIGNORE", analyticsLocations: P }),
        }),
        F = (function (e) {
            let { applicationId: t, ...n } = e;
            return null == t
                ? null
                : (0, i.jsx)(o.Dr, {
                      id: "report-app",
                      color: n.color,
                      label: T.intl.string(T.t.NgA5vp),
                      action: () => {
                          var e, l;
                          let s;
                          return (
                              (e = t),
                              (l = n),
                              (s = () => {
                                  (0, C.closeModal)(v), l.onSubmit?.();
                              }),
                              void (0, C.openModalLazy)(
                                  async () => {
                                      await S.Ay.fetchApplication(e);
                                      let t = N.A.getApplication(e);
                                      return (e) =>
                                          (0, i.jsx)(E.Modal, {
                                              title: T.intl.string(T.t.Bd10bR),
                                              actions: [],
                                              ...e,
                                              children: (0, i.jsxs)(x.B, {
                                                  children: [
                                                      (0, i.jsx)(b.PQ, {
                                                          variant: "clickable",
                                                          title: T.intl.string(T.t.eyEkG1),
                                                          description: T.intl.string(T.t.ptItsj),
                                                          onButtonPress: () =>
                                                              (0, I.NW)(l.user, l.guildId, s, l.appContext),
                                                      }),
                                                      (0, i.jsx)(b.PQ, {
                                                          variant: "clickable",
                                                          title: T.intl.string(T.t.atP0yX),
                                                          description: T.intl.string(T.t.UGg603),
                                                          onButtonPress: () => {
                                                              (0, I.r3)({
                                                                  application: t,
                                                                  entrypoint: l.entrypoint ?? "user_profile",
                                                                  contextualGuildId: l.guildId,
                                                                  contextualChannelId: l.channelId,
                                                                  onSubmit: s,
                                                                  appContext: l.appContext,
                                                              });
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          });
                                  },
                                  { modalKey: v },
                              )
                          );
                      },
                  });
        })({
            applicationId: V?.id,
            user: t,
            guildId: n,
            onSubmit: () => U({ action: "REPORT", analyticsLocations: P }),
            color: "danger",
        }),
        W = (0, y.A)({
            id: V?.id,
            label: T.intl.string(T.t["+NP/b2"]),
            onSuccess: () => U({ action: "COPY_APP_ID", analyticsLocations: P }),
        }),
        K = [
            [M],
            [H, B, F],
            [
                (function (e) {
                    let { application: t, label: n, onSuccess: l, showIconFirst: s } = e;
                    if (__OVERLAY__ || !g.p5 || null == t) return null;
                    let r = _.default.getCurrentUser(),
                        a = (0, A.EF)(t),
                        d = `copy-app-link-${t.id}`;
                    return (0, i.jsx)(
                        o.Dr,
                        {
                            id: d,
                            label: n,
                            action: function () {
                                if (null == t) return;
                                let e = (0, p.n)(t, f.gfo.EMBEDDED)
                                    ? (0, m.W)({ applicationId: t.id, referrerId: r?.id })
                                    : (0, m.V)({ id: t.id, ...a });
                                null != e && (0, g.C)(e, l);
                            },
                            icon: s ? void 0 : h.q,
                            iconLeft: s ? h.q : void 0,
                            leadingAccessory: { type: "icon", icon: h.q },
                        },
                        d,
                    );
                })({
                    application: V,
                    label: T.intl.string(T.t.WqhZss),
                    onSuccess: () => U({ action: "COPY_APP_LINK", analyticsLocations: P }),
                }),
                W,
            ],
        ];
    return K.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(r.Y, {
              targetElementRef: D,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(a.W, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": T.intl.string(T.t.AXIHpV),
                      children: K.map((e, t) => (0, i.jsx)(o.rX, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(G.br, {
                      buttonRef: D,
                      action: "PRESS_OPTIONS",
                      icon: d.j,
                      tooltipText: T.intl.string(T.t["UKOtz+"]),
                      ...e,
                  }),
          });
}
