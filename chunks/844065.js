n.d(t, { z: () => em, A: () => ey });
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
    h = n(165862),
    p = n(477782),
    g = n(92446),
    m = n(173936),
    y = n(473935),
    x = n(625903),
    b = n(664121),
    v = n(265872),
    j = n(866665),
    w = n(408278),
    k = n(365199),
    S = n(872344),
    A = n(945810),
    P = n(742589),
    C = n(71393),
    _ = n(576705),
    I = n(287809),
    M = n(147036),
    D = n(957565),
    $ = n(171691),
    q = n(785389),
    T = n(889558),
    E = n(860402),
    z = n(191850),
    G = n(792996);
let B = new Set();
var O = n(826058),
    W = n(158350),
    F = n(551233),
    X = n(135603),
    N = n(189213),
    K = n(331322),
    L = n(691885),
    R = n(834730),
    H = n(192308),
    V = n(260498),
    U = n(680032),
    Q = n(653036);
function Z(e) {
    let { projectId: t, guildId: n, transitionState: o, onClose: u } = e,
        s = (0, i.bG)([V.Ay], () => V.Ay.getProject(t), [t]),
        c = s?.name ?? "",
        d = (0, F.A)(t, n, null, !0),
        { guilds: f, guild: h, sharing: p, error: g } = d,
        m = l.useMemo(() => f.map((e) => ({ id: e.id, value: e.id, label: e.name })), [f]);
    return (0, r.jsx)(N.a, {
        transitionState: o,
        onClose: u,
        title: G.intl.formatToPlainString(z.default["Aet9+Z"], { app: c }),
        size: "sm",
        notice: null != g ? { type: "critical", message: g, role: "alert" } : void 0,
        actions: [
            { text: G.intl.string(G.t["ETE/oC"]), variant: "secondary", onClick: u, disabled: p },
            {
                text: G.intl.string(z.default["+uQwxA"]),
                variant: "primary",
                onClick: async function () {
                    (await d.share()).shared &&
                        (u(),
                        (0, a.P0)({
                            text: G.intl.formatToPlainString(z.default["4WtS+v"], { app: c, server: h?.name ?? "" }),
                            variant: "success",
                        }));
                },
                loading: p,
                disabled: null == h || p,
            },
        ],
        children: (0, r.jsxs)(K.B, {
            gap: 16,
            children: [
                null != h
                    ? (0, r.jsx)(L.l, {
                          label: G.intl.string(z.default.Uq5hU9),
                          options: m,
                          value: h.id,
                          onSelectionChange: d.pickGuild,
                          selectionMode: "single",
                          disabled: p,
                          fullWidth: !0,
                      })
                    : null,
                (0, r.jsx)(Q.A, { rows: (0, U._i)(s ?? null) }),
                (0, r.jsx)(R.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: G.intl.string(z.default.Ewprwt),
                }),
            ],
        }),
    });
}
var J = n(442331),
    Y = n(616334);
n(321073);
var ee = n(189714),
    et = n(733791),
    en = n(314116),
    er = n(233470),
    el = n(936508),
    ei = n(199267),
    ea = n(706935);
function eo(e) {
    let { project: t, target: n, otherTargets: i, ...a } = e,
        [o, u] = l.useState(!1),
        [s, c] = l.useState(null),
        d = (0, et.fI)(n, i),
        f = (0, et.Mi)(n);
    return (0, r.jsx)(N.a, {
        ...a,
        role: "alertdialog",
        title: G.intl.formatToPlainString(z.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, et.J)(n, i),
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: G.intl.string(G.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
            {
                text: G.intl.string(z.default.aC42bN),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let e = await (0, er.xx)(t.id).catch(() => null);
                        (u(!1), e?.ok !== !0) ? c(G.intl.string(z.default["0XDHob"])) : a.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(K.B, {
            gap: 12,
            children: [
                (0, r.jsx)(ea.Ay, { items: d }),
                null != f ? (0, r.jsx)(R.E, { variant: "body-sm/normal", color: "text-muted", children: f }) : null,
            ],
        }),
    });
}
function eu(e) {
    let { project: t, target: n, action: l } = e;
    if ("delete" === l) {
        let e = (0, et.zu)(t);
        (0, H.qf)((l) => (0, r.jsx)(eo, { ...l, project: t, target: n, otherTargets: e }));
        return;
    }
    let i = (0, el.hJ)(t, n);
    (0, H.qf)((e) => (0, r.jsx)(ei.A, { ...e, target: i }));
}
var es = n(587895),
    ec = n(664619);
function ed(e) {
    let { project: t, ...n } = e,
        [o, u] = l.useState(!1),
        [s, c] = l.useState(null),
        d = (0, i.bG)([es.A], () => es.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = G.intl.formatToPlainString(z.default.m8KWic, { app: d });
    return (0, r.jsx)(N.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: G.intl.string(z.default.wve4kB),
        "aria-label": f,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: G.intl.string(G.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: G.intl.string(z.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let e = await (0, ec.R_)(t.id);
                        (u(!1), e)
                            ? ((0, a.P0)({
                                  text: G.intl.formatToPlainString(z.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : c(G.intl.string(z.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var ef = n(746080),
    eh = n(552821);
let ep = [];
function eg(e) {
    (0, a.P0)({ text: e, variant: "critical" });
}
function em(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: v,
            projectGuildId: j,
            isOwner: w,
            canRemix: k,
            onPublish: P,
            publishLabel: N,
            publishDisabled: K = !1,
            onOpenProjectSettings: L,
            onExport: R,
            onImport: U,
            onRemix: Q,
            onConnectTool: el,
            onHistory: ei,
            onDismiss: ea,
            onTogglePreviewPaused: eo,
            previewPaused: es = !1,
            previewPauseDisabled: ec = !1,
            onTogglePopout: eh,
            poppedOut: em = !1,
            onToggleDebug: ey,
            debugOpen: ex = !1,
            refreshApplicationId: eb,
            previewProjectId: ev,
            onCloseMenu: ej,
        } = e,
        ew = (0, ee.iI)(t),
        ek = (0, $.lQ)(t) && !es,
        eS = l.useContext(O.bI),
        { pending: eA, refresh: eP } = (0, S.A)(eb ?? null),
        { pending: eC, connect: e_ } = (function (e, t) {
            let [n, r] = l.useState(B),
                i = l.useRef(B),
                a = l.useCallback((e) => {
                    ((i.current = (0, q.Q6)(i.current, e)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == e) return;
                        let l = (0, q.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, E.JI)(e, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, T.h)({ href: r.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, q.rq)(r.error)
                                              ? G.intl.string(z.default["jCQ/1B"])
                                              : G.intl.string(z.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(ev ?? null, eg),
        eI = (0, i.bG)([J.A], () => (null == ev ? ep : J.A.getDeclaredConnections(ev))),
        eM = l.useMemo(() => (0, q.Xl)(eI), [eI]),
        eD = (0, et.Bs)(t),
        e$ = (0, et.dw)(t, v),
        eq = null != e$ && (0, et.dy)(e$, w),
        eT = (0, et.CU)(t) && w,
        eE = (0, i.bG)(
            [V.Ay],
            () => {
                let e = V.Ay.getProject(t);
                return null != e && (0, V.jf)(e);
            },
            [t],
        ),
        ez = (0, i.bG)(
            [V.Ay],
            () => {
                let e = V.Ay.getProject(t);
                return null != e && (0, W.g)(e);
            },
            [t],
        ),
        eG = (0, i.bG)(
            [V.Ay, I.default, C.A, _.A, A.Bt],
            () => {
                let e = V.Ay.getProject(t);
                return null != e && (0, F.i)(e, eD, "ConjureProjectActionMenu");
            },
            [t, eD],
        ),
        eB = null != L || w || eE,
        eO = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: r, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: G.intl.string(z.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: G.intl.formatToPlainString(z.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: G.intl.formatToPlainString(z.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != eb, refreshPending: eA, offers: eM, connectPending: eC }),
        eW = l.useMemo(() => new Map(eI.map((e) => [e.type, e])), [eI]),
        eF = null != Q && k,
        eX = w && null != U,
        eN = eF || null != R || eX || null != el || null != ei,
        eK = D.p5 && null != v,
        eL = D.p5,
        eR = ew ? o.BellIcon : u.BellSlashIcon,
        eH = es ? s.PlayIcon : c.PauseIcon,
        eV = em ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, r.jsxs)(h.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": G.intl.string(G.t.ogxXGq),
        onClose: ej,
        onSelect: ej,
        children: [
            null != P
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.Dr, {
                          id: "publish",
                          label: N ?? G.intl.string(z.default["120EFN"]),
                          disabled: K,
                          action: P,
                      }),
                  })
                : null,
            null != eo || null != eh
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != eo
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eH,
                                    leadingAccessory: { type: "icon", icon: eH },
                                    label: G.intl.string(es ? z.default.ZKd2Cw : z.default.VHxerm),
                                    subtext: ek ? G.intl.string(z.default.WjdaFw) : void 0,
                                    disabled: ec || ek,
                                    action: eo,
                                })
                              : null,
                          null != eh
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eV,
                                    leadingAccessory: { type: "icon", icon: eV },
                                    label: G.intl.string(em ? G.t["NKV/MO"] : G.t["3Zypbv"]),
                                    subtext: ek && !em ? G.intl.string(z.default.WjdaFw) : void 0,
                                    disabled: ek && !em,
                                    action: eh,
                                })
                              : null,
                      ],
                  })
                : null,
            null != ey
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.sL, {
                          id: "debug",
                          label: G.intl.string(z.default.Mt5k9d),
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
                          checked: ex,
                          action: ey,
                      }),
                  })
                : null,
            eO.length > 0
                ? (0, r.jsx)(p.rX, {
                      children: eO.map((e) =>
                          (0, r.jsx)(
                              p.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void eP();
                                      let t = null == e.connectionType ? null : eW.get(e.connectionType);
                                      null != t && e_(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, r.jsxs)(p.rX, {
                children: [
                    (0, r.jsx)(p.Dr, {
                        id: "mute",
                        label: G.intl.string(ew ? z.default.s9rCuH : z.default["a+i/As"]),
                        icon: eR,
                        leadingAccessory: { type: "icon", icon: eR },
                        action: () => (0, ee.$L)(t, !ew),
                    }),
                    null != ea
                        ? (0, r.jsx)(p.Dr, { id: "dismiss", label: G.intl.string(z.default.bWzWw9), action: ea })
                        : null,
                ],
            }),
            eN
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eF
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: G.intl.string(z.default["276ll6"]), action: Q })
                              : null,
                          null != R
                              ? (0, r.jsx)(p.Dr, { id: "export", label: G.intl.string(z.default.WsEEP7), action: R })
                              : null,
                          eX
                              ? (0, r.jsx)(p.Dr, { id: "import", label: G.intl.string(z.default.rWGY3e), action: U })
                              : null,
                          null != el
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: G.intl.string(z.default.yOIql5),
                                    action: el,
                                })
                              : null,
                          null != ei
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: G.intl.string(z.default["3hIVou"]),
                                    action: ei,
                                })
                              : null,
                      ],
                  })
                : null,
            eL
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eK
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: G.intl.string(G.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, D.C)((0, M.n)(v, ef.VV.CONJURE, t), () =>
                                            (0, a.P0)({ text: G.intl.string(G.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(p.Dr, {
                              id: "copy-project-id",
                              label: G.intl.string(z.default["nm/zuU"]),
                              icon: y.IdIcon,
                              leadingAccessory: { type: "icon", icon: y.IdIcon },
                              action: () =>
                                  (0, D.C)(t, () =>
                                      (0, a.P0)({ text: G.intl.string(z.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            w || eB || eq
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eB
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: G.intl.string(z.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        L ??
                                        (() =>
                                            (0, Y.A)(t, {
                                                guildId: j ?? v,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: eS,
                                            })),
                                })
                              : null,
                          eG
                              ? (0, r.jsx)(p.Dr, {
                                    id: "add-to-another-server",
                                    label: G.intl.string(z.default.RBPj0b),
                                    icon: b.ServerIcon,
                                    leadingAccessory: { type: "icon", icon: b.ServerIcon },
                                    action: () => {
                                        var e;
                                        return (
                                            (e = { projectId: t, guildId: v }),
                                            void (0, H.qf)((t) => (0, r.jsx)(Z, { ...t, ...e }))
                                        );
                                    },
                                })
                              : null,
                          eq
                              ? (0, r.jsx)(p.Dr, {
                                    id: "remove-from-server",
                                    label: G.intl.formatToPlainString(z.default["3gKG2j"], { server: e$.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = V.Ay.getProject(t);
                                        null != e && eu({ project: e, target: e$, action: "remove" });
                                    },
                                })
                              : null,
                          ez && !eq
                              ? (0, r.jsx)(p.Dr, {
                                    id: "make-personal",
                                    label: G.intl.string(z.default.jNGawP),
                                    color: "danger",
                                    action: () => {
                                        let e = V.Ay.getProject(t);
                                        null != e && (0, X.A)({ project: e });
                                    },
                                })
                              : null,
                          eT
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: G.intl.string(z.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = V.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }), (0, H.qf)((t) => (0, r.jsx)(ed, { ...t, ...e })));
                                    },
                                })
                              : null,
                          w
                              ? (0, r.jsx)(p.Dr, {
                                    id: "delete",
                                    label: G.intl.string(G.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = V.Ay.getProject(t);
                                        if (null != e && null != eD) eu({ project: e, target: eD, action: "delete" });
                                        else
                                            (0, en.A)({
                                                title: G.intl.formatToPlainString(z.default.CJBhb2, { name: n }),
                                                subtitle: G.intl.string(z.default["0OmrVn"]),
                                                confirmText: G.intl.string(G.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, er.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: G.intl.string(z.default["0XDHob"]),
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
function ey(e) {
    let { trigger: t = "header", ...n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(v.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: v.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(em, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: eh.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(j.m, {
                              text: G.intl.string(G.t["UKOtz+"]),
                              children: (0, r.jsx)(w.K, {
                                  icon: k.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": G.intl.string(G.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(P.A.Icon, {
                              icon: k.MoreHorizontalIcon,
                              tooltip: G.intl.string(G.t["UKOtz+"]),
                              "aria-label": G.intl.string(G.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: l,
                          }),
            });
        },
    });
}
