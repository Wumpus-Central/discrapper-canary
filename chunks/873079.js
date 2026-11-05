t.d(n, { default: () => O });
var l = t(477900);
t(582128);
var a = t(855986),
    e = t(165862),
    r = t(477782),
    d = t(442433),
    c = t(587895),
    s = t(646938),
    A = t(189081),
    u = t(253932),
    o = t(957565),
    b = t(792996),
    h = t(192308),
    I = t(754712),
    g = t(659096),
    p = t(292702),
    T = t(723702),
    L = t(397369),
    D = t(134861),
    _ = t(144914),
    E = t(35083),
    f = t(651743),
    y = t(652215),
    x = t(665260),
    N = t(314116),
    P = t(59636),
    C = t(129230),
    S = t(258057),
    j = t(568004);
function G(i) {
    var n;
    let c,
        s,
        G,
        O,
        m,
        v,
        M,
        V,
        H,
        { application: R, libraryApplication: U, analyticsContext: k, onSelect: X } = i,
        w = { ...(null != k ? k.location : null), object: y.ZSU.CONTEXT_MENU },
        K =
            ((O = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(U.id), [U.id])),
            (m = (0, a.bG)(
                [A.A, f.A, g.A, D.A],
                () =>
                    (0, _.A)({
                        LibraryApplicationStore: A.A,
                        LaunchableGameStore: f.A,
                        DispatchApplicationStore: g.A,
                        ConnectedAppsStore: D.A,
                        applicationId: U.id,
                        branchId: U.branchId,
                    }),
                [U.branchId, U.id],
            )),
            O || !m
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "launch",
                      label: b.intl.string(b.t.XKUw8m),
                      action: () => E.playApplication(U.id, U, { analyticsParams: { location: w } }),
                  })),
        F = (function (i) {
            let n = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(i.id), [i.id]),
                [t, e] = (0, a.yK)([g.A], () => [g.A.isUpToDate(i.id, i.branchId), g.A.shouldPatch(i.id, i.branchId)], [
                    i.branchId,
                    i.id,
                ]);
            return t && !n && e
                ? (0, l.jsx)(r.Dr, {
                      id: "repair",
                      label: b.intl.string(b.t.CKCcdz),
                      action: () => E.qv(i.id, i.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                  })
                : null;
        })(U),
        Z =
            ((n = U),
            (c = (0, a.bG)([L.Ay], () => L.Ay.getRunningVerifiedApplicationIds().includes(n.id), [n.id])),
            (s = (0, a.bG)([g.A], () => g.A.isInstalled(n.id, n.branchId), [n.branchId, n.id])),
            (G = (0, a.bG)([j.A], () => j.A.getTargetManifests(n.id, n.branchId), [n.branchId, n.id])),
            s
                ? c
                    ? null
                    : (0, l.jsx)(r.Dr, {
                          id: "uninstall",
                          label: b.intl.string(b.t.DwgfOM),
                          action: () => (0, S.z)(n.id, n.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                      })
                : null == G
                  ? null
                  : (0, l.jsx)(r.Dr, {
                        id: "install",
                        label: b.intl.string(b.t["N+XVnt"]),
                        action: () => E.oc(n.id, n.branchId, y.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
                    })),
        B =
            null == U
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "private",
                      label: b.intl.string(b.t.fHDNJv),
                      action: function () {
                          if (null == U) return;
                          let i = (0, x.PQ)(U.getFlags(), y.hM6.PRIVATE);
                          (P.V(U.id, U.branchId, i),
                              C.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                                  private_enabled: (0, x.Lt)(i, y.hM6.PRIVATE),
                                  ...U.getAnalyticsData(),
                              }));
                      },
                      checked: U.hasFlag(y.hM6.PRIVATE),
                  }),
        Q =
            null == U
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "on-overlay",
                      label: b.intl.string(b.t.rgZKg2),
                      action: function () {
                          if (null == U) return;
                          let i = (0, x.PQ)(U.getFlags(), y.hM6.OVERLAY_DISABLED);
                          (P.V(U.id, U.branchId, i),
                              C.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                                  overlay_disabled: (0, x.Lt)(i, y.hM6.OVERLAY_DISABLED),
                                  ...U.getAnalyticsData(),
                              }));
                      },
                      checked: U.hasFlag(y.hM6.OVERLAY_DISABLED),
                  }),
        Y =
            ((v = U.getBranchedName(R)),
            null !=
                (M = (0, a.bG)(
                    [g.A],
                    () => {
                        let i = g.A.getState(U.id, U.branchId);
                        return i?.installPath;
                    },
                    [U.branchId, U.id],
                )) && (0, T.xl)()
                ? (0, l.jsx)(r.Dr, {
                      id: "create-shortcut",
                      label: b.intl.string(b.t.T4tecH),
                      action: () => p.A.createShortcuts(!0, !1, v, U.id, M),
                  })
                : null),
        q = (function (i, n) {
            let t = (0, a.bG)([g.A], () => g.A.isInstalled(i.id, i.branchId), [i.branchId, i.id]),
                e = (0, a.bG)([A.A], () => !A.A.hasRemovedLibraryApplicationThisSession);
            if (t && !i.isHidden()) return null;
            function d() {
                let n = (0, x.PQ)(i.getFlags(), y.hM6.HIDDEN);
                (P.V(i.id, i.branchId, n),
                    C.default.track(y.HAw.APPLICATION_SETTINGS_UPDATED, {
                        hidden_enabled: (0, x.Lt)(n, y.hM6.HIDDEN),
                        ...i.getAnalyticsData(),
                    }));
            }
            return (0, l.jsx)(r.Dr, {
                id: "in-library",
                label: i.isHidden() ? b.intl.string(b.t["0dnEUJ"]) : b.intl.string(b.t.TuJXLx),
                action: function () {
                    null != i &&
                        null != n &&
                        (i.isHidden() || !e
                            ? d()
                            : (0, N.A)({
                                  title: b.intl.string(b.t.oB7isi),
                                  subtitle: b.intl.format(b.t.HXfjKt, { name: n.name }),
                                  variant: "primary",
                                  confirmText: b.intl.string(b.t.OWjIiV),
                                  onConfirm: () => d(),
                              }));
                },
            });
        })(U, R),
        z =
            ((V = R.primarySkuId),
            (H = u.Q_.useSetting()),
            !__OVERLAY__ && H && o.p5
                ? (0, l.jsxs)(r.Dr, {
                      id: "application-dev",
                      label: b.intl.string(b.t.OpuAlK),
                      action: () => (0, o.C)(R.id),
                      children: [
                          (0, l.jsx)(r.Dr, {
                              id: "app-id",
                              label: b.intl.string(b.t.qSHshq),
                              action: () => (0, o.C)(R.id),
                          }),
                          null != U
                              ? (0, l.jsx)(r.Dr, {
                                    id: "branch-id",
                                    label: b.intl.string(b.t.g7oyyo),
                                    action: () => (0, o.C)(U.branchId),
                                })
                              : null,
                          null != V
                              ? (0, l.jsx)(r.Dr, {
                                    id: "sku-id",
                                    label: b.intl.string(b.t.hReUdL),
                                    action: () => (0, o.C)(V),
                                })
                              : null,
                      ],
                  })
                : null),
        J = (0, a.bG)([I.Ay], () => I.Ay.hasContext(R.id), [R.id])
            ? (0, l.jsx)(r.Dr, {
                  id: "ingame-voice",
                  label: b.intl.string(b.t["pOul5/"]),
                  action: () =>
                      (0, h.mM)(async () => {
                          let { default: i } = await Promise.all([
                              t.e(161411),
                              t.e(454085),
                              t.e(725246),
                              t.e(796531),
                          ]).then(t.bind(t, 880510));
                          return (n) => (0, l.jsx)(i, { ...n, mediaEngineContext: R.id, subtitle: R.name });
                      }),
              })
            : null;
    return (0, l.jsxs)(e.W, {
        "data-menu-migrated": !0,
        navId: "game-context",
        onClose: d.Z_,
        "aria-label": b.intl.string(b.t.tKobzb),
        onSelect: X,
        children: [K, F, Z, B, Q, Y, q, (0, l.jsx)(r.rX, { children: z }), (0, l.jsx)(r.rX, { children: J })],
    });
}
function O(i) {
    let { applicationId: n, branchId: t } = i,
        e = (0, a.bG)([c.A], () => c.A.getApplication(n), [n]),
        r = (0, a.bG)([A.A], () => (null != t ? A.A.getLibraryApplication(n, t) : A.A.getActiveLibraryApplication(n)), [
            n,
            t,
        ]);
    return null == e || null == r
        ? (0, l.jsx)(s.default, { ...i, id: n, label: b.intl.string(b.t["FfCL+6"]) })
        : (0, l.jsx)(G, { ...i, application: e, libraryApplication: r });
}
