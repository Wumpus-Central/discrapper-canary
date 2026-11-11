n.d(e, { z: () => to, A: () => tu });
var r = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(858899),
    o = n(782603),
    u = n(780338),
    s = n(782134),
    c = n(113494),
    d = n(12470),
    f = n(811893),
    p = n(165862),
    h = n(477782),
    g = n(92446),
    m = n(173936),
    y = n(473935),
    x = n(625903),
    b = n(265872),
    v = n(866665),
    w = n(408278),
    j = n(365199),
    k = n(872344),
    _ = n(742589),
    S = n(147036),
    I = n(957565),
    C = n(171691),
    P = n(785389),
    A = n(889558),
    D = n(860402),
    M = n(191850),
    E = n(792996);
let T = new Set();
var $ = n(826058),
    q = n(233470),
    z = n(260498),
    O = n(733791),
    B = n(680032),
    F = n(189213),
    L = n(331322),
    G = n(834730),
    R = n(192308),
    W = n(653036);
function N(t) {
    let { project: e, transitionState: n, onClose: i } = t,
        o = (function (t) {
            let [e, n] = l.useState(!1),
                [r, i] = l.useState(null);
            l.useEffect(() => (0, q.GO)(t.id), [t.id]);
            let a = (0, O.Bs)(t.id),
                [o, u] = l.useState(null),
                s = null == o ? a : o.target,
                c = s?.appName ?? t.name,
                d = l.useMemo(() => (0, B.w)(t, s), [t, s]),
                f = l.useCallback(async () => {
                    (n(!0), i(null), u({ target: a }));
                    try {
                        await (0, q.kY)(t.id);
                    } catch {
                        return (i(E.intl.string(M.default["d+wTRF"])), u(null), n(!1), null);
                    }
                    n(!1);
                    let e = z.Ay.getIntegrationStatus(t.id)?.owner_authorization_revoked === !0;
                    return E.intl.formatToPlainString(e ? M.default.tOu7uv : M.default.TWYUzf, { app: c });
                }, [c, a, t.id]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == s ? null : (0, O.Mi)(s),
                pending: e,
                error: r,
                submit: f,
            };
        })(e),
        { appName: u, rows: s, keptChannels: c, pending: d, error: f } = o;
    return (0, r.jsx)(F.a, {
        transitionState: n,
        onClose: i,
        role: "alertdialog",
        title: E.intl.formatToPlainString(M.default.cAxBIL, { app: u }),
        size: "sm",
        notice: null == f ? void 0 : { type: "critical", message: f, role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: i, disabled: d },
            {
                text: E.intl.string(M.default.VAb6aE),
                variant: "critical-primary",
                onClick: async function () {
                    let t = await o.submit();
                    null != t && ((0, a.P0)({ text: t, variant: "success" }), i());
                },
                loading: d,
                disabled: d,
            },
        ],
        children: (0, r.jsxs)(L.B, {
            gap: 12,
            children: [
                (0, r.jsx)(W.A, { rows: s }),
                null != c ? (0, r.jsx)(G.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            ],
        }),
    });
}
var H = n(442331),
    V = n(616334);
n(321073);
var X = n(189714),
    K = n(314116),
    U = n(936508),
    Q = n(199267),
    Y = n(706935);
function Z(t) {
    let { project: e, target: n, ...i } = t,
        [a, o] = l.useState(!1),
        [u, s] = l.useState(null),
        c = (0, O.fI)(n),
        d = (0, O.Mi)(n);
    return (0, r.jsx)(F.a, {
        ...i,
        role: "alertdialog",
        title: E.intl.formatToPlainString(M.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, O.J)(n),
        notice: null == u ? void 0 : { message: u, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: i.onClose },
            {
                text: E.intl.string(M.default.aC42bN),
                variant: "critical-primary",
                loading: a,
                disabled: a,
                onClick: () => {
                    (async function () {
                        (o(!0), s(null));
                        let t = await (0, q.xx)(e.id).catch(() => null);
                        (o(!1), t?.ok !== !0) ? s(E.intl.string(M.default["0XDHob"])) : i.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(L.B, {
            gap: 12,
            children: [
                (0, r.jsx)(Y.Ay, { items: c }),
                null != d ? (0, r.jsx)(G.E, { variant: "body-sm/normal", color: "text-muted", children: d }) : null,
            ],
        }),
    });
}
function J(t) {
    let { project: e, target: n, action: l } = t;
    if ("delete" === l) return void (0, R.qf)((t) => (0, r.jsx)(Z, { ...t, project: e, target: n }));
    let i = (0, U.hJ)(e, n);
    null != i && (0, R.qf)((t) => (0, r.jsx)(Q.A, { ...t, target: i }));
}
var tt = n(587895),
    te = n(664619);
function tn(t) {
    let { project: e, ...n } = t,
        [o, u] = l.useState(!1),
        [s, c] = l.useState(null),
        d = (0, i.bG)([tt.A], () => tt.A.getApplication(e.application_id)?.name ?? e.name, [e.application_id, e.name]),
        f = E.intl.formatToPlainString(M.default.m8KWic, { app: d });
    return (0, r.jsx)(F.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: E.intl.string(M.default.wve4kB),
        "aria-label": f,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: E.intl.string(M.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let t = await (0, te.R_)(e.id);
                        (u(!1), t)
                            ? ((0, a.P0)({
                                  text: E.intl.formatToPlainString(M.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : c(E.intl.string(M.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var tr = n(746080),
    tl = n(552821);
let ti = [];
function ta(t) {
    (0, a.P0)({ text: t, variant: "critical" });
}
function to(t) {
    let {
            projectId: e,
            projectName: n,
            guildId: b,
            projectGuildId: v,
            isOwner: w,
            canRemix: j,
            onPublish: _,
            publishLabel: B,
            publishDisabled: F = !1,
            onOpenProjectSettings: L,
            onExport: G,
            onImport: W,
            onRemix: U,
            onConnectTool: Q,
            onHistory: Y,
            onDismiss: Z,
            onTogglePreviewPaused: tt,
            previewPaused: te = !1,
            previewPauseDisabled: tl = !1,
            onTogglePopout: to,
            poppedOut: tu = !1,
            onToggleDebug: ts,
            debugOpen: tc = !1,
            refreshApplicationId: td,
            previewProjectId: tf,
            onCloseMenu: tp,
        } = t,
        th = (0, X.iI)(e),
        tg = (0, C.lQ)(e) && !te,
        tm = l.useContext($.bI),
        { pending: ty, refresh: tx } = (0, k.A)(td ?? null),
        { pending: tb, connect: tv } = (function (t, e) {
            let [n, r] = l.useState(T),
                i = l.useRef(T),
                a = l.useCallback((t) => {
                    ((i.current = (0, P.Q6)(i.current, t)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == t) return;
                        let l = (0, P.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, D.JI)(t, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, A.h)({ href: r.url, trusted: !1 })
                                    : e(
                                          "setup" === (0, P.rq)(r.error)
                                              ? E.intl.string(M.default["jCQ/1B"])
                                              : E.intl.string(M.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [e, t, a],
                ),
            };
        })(tf ?? null, ta),
        tw = (0, i.bG)([H.A], () => (null == tf ? ti : H.A.getDeclaredConnections(tf))),
        tj = l.useMemo(() => (0, P.Xl)(tw), [tw]),
        tk = (0, O.Bs)(e),
        t_ = null != tk && (tk.canRemoveBot || w),
        tS = (0, O.CU)(e) && w,
        tI = (0, i.bG)(
            [z.Ay],
            () => {
                let t = z.Ay.getProject(e);
                return null != t && (0, z.jf)(t);
            },
            [e],
        ),
        tC = (0, i.bG)(
            [z.Ay],
            () => {
                var t;
                let n = z.Ay.getProject(e);
                return null != n && "guild" === (t = n).install_scope && (0, z.PV)(t);
            },
            [e],
        ),
        tP = null != L || w || tI,
        tA = (function (t) {
            let { canRefresh: e, refreshPending: n, offers: r, connectPending: l } = t,
                i = [];
            for (let { connection: t, offer: a } of (e &&
                i.push({
                    id: "preview-refresh",
                    label: E.intl.string(M.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${t.type}`,
                              label: E.intl.formatToPlainString(M.default.DEwmI5, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: l.has(t.type),
                          }
                        : {
                              id: `preview-connect-${t.type}`,
                              label: E.intl.formatToPlainString(M.default.GnHcWc, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != td, refreshPending: ty, offers: tj, connectPending: tb }),
        tD = l.useMemo(() => new Map(tw.map((t) => [t.type, t])), [tw]),
        tM = null != U && j,
        tE = w && null != W,
        tT = tM || null != G || tE || null != Q || null != Y,
        t$ = I.p5 && null != b,
        tq = I.p5,
        tz = th ? o.BellIcon : u.BellSlashIcon,
        tO = te ? s.PlayIcon : c.PauseIcon,
        tB = tu ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, r.jsxs)(p.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${e}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: tp,
        onSelect: tp,
        children: [
            null != _
                ? (0, r.jsx)(h.rX, {
                      children: (0, r.jsx)(h.Dr, {
                          id: "publish",
                          label: B ?? E.intl.string(M.default["120EFN"]),
                          disabled: F,
                          action: _,
                      }),
                  })
                : null,
            null != tt || null != to
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          null != tt
                              ? (0, r.jsx)(h.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: tO,
                                    leadingAccessory: { type: "icon", icon: tO },
                                    label: E.intl.string(te ? M.default.ZKd2Cw : M.default.VHxerm),
                                    subtext: tg ? E.intl.string(M.default.WjdaFw) : void 0,
                                    disabled: tl || tg,
                                    action: tt,
                                })
                              : null,
                          null != to
                              ? (0, r.jsx)(h.Dr, {
                                    id: "toggle-popout",
                                    icon: tB,
                                    leadingAccessory: { type: "icon", icon: tB },
                                    label: E.intl.string(tu ? E.t["NKV/MO"] : E.t["3Zypbv"]),
                                    subtext: tg && !tu ? E.intl.string(M.default.WjdaFw) : void 0,
                                    disabled: tg && !tu,
                                    action: to,
                                })
                              : null,
                      ],
                  })
                : null,
            null != ts
                ? (0, r.jsx)(h.rX, {
                      children: (0, r.jsx)(h.sL, {
                          id: "debug",
                          label: E.intl.string(M.default.Mt5k9d),
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
                          checked: tc,
                          action: ts,
                      }),
                  })
                : null,
            tA.length > 0
                ? (0, r.jsx)(h.rX, {
                      children: tA.map((t) =>
                          (0, r.jsx)(
                              h.Dr,
                              {
                                  id: t.id,
                                  label: t.label,
                                  disabled: t.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === t.kind) return void tx();
                                      let e = null == t.connectionType ? null : tD.get(t.connectionType);
                                      null != e && tv(e);
                                  },
                              },
                              t.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsxs)(h.rX, {
                children: [
                    (0, r.jsx)(h.Dr, {
                        id: "mute",
                        label: E.intl.string(th ? M.default.s9rCuH : M.default["a+i/As"]),
                        icon: tz,
                        leadingAccessory: { type: "icon", icon: tz },
                        action: () => (0, X.$L)(e, !th),
                    }),
                    null != Z
                        ? (0, r.jsx)(h.Dr, { id: "dismiss", label: E.intl.string(M.default.bWzWw9), action: Z })
                        : null,
                ],
            }),
            tT
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tM
                              ? (0, r.jsx)(h.Dr, { id: "remix", label: E.intl.string(M.default["276ll6"]), action: U })
                              : null,
                          null != G
                              ? (0, r.jsx)(h.Dr, { id: "export", label: E.intl.string(M.default.WsEEP7), action: G })
                              : null,
                          tE
                              ? (0, r.jsx)(h.Dr, { id: "import", label: E.intl.string(M.default.rWGY3e), action: W })
                              : null,
                          null != Q
                              ? (0, r.jsx)(h.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(M.default.yOIql5),
                                    action: Q,
                                })
                              : null,
                          null != Y
                              ? (0, r.jsx)(h.Dr, {
                                    id: "history",
                                    label: E.intl.string(M.default["3hIVou"]),
                                    action: Y,
                                })
                              : null,
                      ],
                  })
                : null,
            tq
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          t$
                              ? (0, r.jsx)(h.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, I.C)((0, S.n)(b, tr.VV.CONJURE, e), () =>
                                            (0, a.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(h.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(M.default["nm/zuU"]),
                              icon: y.IdIcon,
                              leadingAccessory: { type: "icon", icon: y.IdIcon },
                              action: () =>
                                  (0, I.C)(e, () =>
                                      (0, a.P0)({ text: E.intl.string(M.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            w || tP || t_
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tP
                              ? (0, r.jsx)(h.Dr, {
                                    id: "settings",
                                    label: E.intl.string(M.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        L ??
                                        (() =>
                                            (0, V.A)(e, {
                                                guildId: v ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: tm,
                                            })),
                                })
                              : null,
                          t_
                              ? (0, r.jsx)(h.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(M.default["3gKG2j"], { server: tk.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let t = z.Ay.getProject(e);
                                        null != t && J({ project: t, target: tk, action: "remove" });
                                    },
                                })
                              : null,
                          tC && !t_
                              ? (0, r.jsx)(h.Dr, {
                                    id: "make-personal",
                                    label: E.intl.string(M.default.jNGawP),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = z.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, R.qf)((e) => (0, r.jsx)(N, { ...e, ...t })));
                                    },
                                })
                              : null,
                          tS
                              ? (0, r.jsx)(h.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(M.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = z.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, R.qf)((e) => (0, r.jsx)(tn, { ...e, ...t })));
                                    },
                                })
                              : null,
                          w
                              ? (0, r.jsx)(h.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let t = z.Ay.getProject(e);
                                        if (null != t && null != tk) J({ project: t, target: tk, action: "delete" });
                                        else
                                            (0, K.A)({
                                                title: E.intl.formatToPlainString(M.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(M.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, q.K)(e, () =>
                                                        (0, a.P0)({
                                                            text: E.intl.string(M.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function tu(t) {
    let { trigger: e = "header", ...n } = t,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return (0, r.jsx)(to, { ...n, onCloseMenu: e });
        },
        children: (t, n) => {
            let { onClick: l } = t,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: tl.h,
                children:
                    "iconButton" === e
                        ? (0, r.jsx)(v.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, r.jsx)(w.K, {
                                  icon: j.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(_.A.Icon, {
                              icon: j.MoreHorizontalIcon,
                              tooltip: E.intl.string(E.t["UKOtz+"]),
                              "aria-label": E.intl.string(E.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: l,
                          }),
            });
        },
    });
}
