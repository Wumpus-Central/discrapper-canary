n.d(t, { z: () => ec, A: () => ed });
var l = n(477900),
    r = n(582128),
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
    y = n(173936),
    m = n(473935),
    x = n(625903),
    b = n(664121),
    v = n(265872),
    w = n(866665),
    j = n(408278),
    k = n(365199),
    S = n(872344),
    _ = n(945810),
    A = n(742589),
    P = n(71393),
    I = n(576705),
    C = n(287809),
    D = n(147036),
    M = n(957565),
    E = n(171691),
    T = n(785389),
    q = n(889558),
    $ = n(860402),
    G = n(191850),
    z = n(792996);
let O = new Set();
var B = n(826058),
    L = n(233470),
    F = n(260498),
    R = n(733791),
    W = n(680032),
    N = n(551233),
    H = n(189213),
    V = n(331322),
    U = n(834730),
    X = n(192308),
    K = n(653036);
function Z(e) {
    let { project: t, transitionState: n, onClose: i } = e,
        o = (function (e) {
            let [t, n] = r.useState(!1),
                [l, i] = r.useState(null);
            r.useEffect(() => (0, L.GO)(e.id), [e.id]);
            let a = (0, R.Bs)(e.id),
                [o, u] = r.useState(null),
                s = null == o ? a : o.target,
                c = s?.appName ?? e.name,
                d = r.useMemo(() => (0, W.wJ)(e, s), [e, s]),
                f = r.useCallback(async () => {
                    (n(!0), i(null), u({ target: a }));
                    try {
                        await (0, L.kY)(e.id);
                    } catch {
                        return (i(z.intl.string(G.default["d+wTRF"])), u(null), n(!1), null);
                    }
                    n(!1);
                    let t = F.Ay.getIntegrationStatus(e.id)?.owner_authorization_revoked === !0;
                    return z.intl.formatToPlainString(t ? G.default.tOu7uv : G.default.TWYUzf, { app: c });
                }, [c, a, e.id]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == s ? null : (0, R.Mi)(s),
                pending: t,
                error: l,
                submit: f,
            };
        })(t),
        { appName: u, rows: s, keptChannels: c, pending: d, error: f } = o;
    return (0, l.jsx)(H.a, {
        transitionState: n,
        onClose: i,
        role: "alertdialog",
        title: z.intl.formatToPlainString(G.default.cAxBIL, { app: u }),
        size: "sm",
        notice: null == f ? void 0 : { type: "critical", message: f, role: "alert" },
        actions: [
            { text: z.intl.string(z.t["ETE/oC"]), variant: "secondary", onClick: i, disabled: d },
            {
                text: z.intl.string(G.default.VAb6aE),
                variant: "critical-primary",
                onClick: async function () {
                    let e = await o.submit();
                    null != e && ((0, a.P0)({ text: e, variant: "success" }), i());
                },
                loading: d,
                disabled: d,
            },
        ],
        children: (0, l.jsxs)(V.B, {
            gap: 12,
            children: [
                (0, l.jsx)(K.A, { rows: s }),
                null != c ? (0, l.jsx)(U.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            ],
        }),
    });
}
var Q = n(564498),
    Y = n(442331),
    J = n(616334);
n(321073);
var ee = n(189714),
    et = n(314116),
    en = n(167483),
    el = n(587895),
    er = n(664619);
function ei(e) {
    let { project: t, ...n } = e,
        [o, u] = r.useState(!1),
        [s, c] = r.useState(null),
        d = (0, i.bG)([el.A], () => el.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        f = z.intl.formatToPlainString(G.default.m8KWic, { app: d });
    return (0, l.jsx)(H.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: z.intl.string(G.default.wve4kB),
        "aria-label": f,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: z.intl.string(z.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: z.intl.string(G.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let e = await (0, er.R_)(t.id);
                        (u(!1), e)
                            ? ((0, a.P0)({
                                  text: z.intl.formatToPlainString(G.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : c(z.intl.string(G.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var ea = n(746080),
    eo = n(552821);
let eu = [];
function es(e) {
    (0, a.P0)({ text: e, variant: "critical" });
}
function ec(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: v,
            projectGuildId: w,
            isOwner: j,
            canRemix: k,
            onPublish: A,
            publishLabel: W,
            publishDisabled: H = !1,
            onOpenProjectSettings: V,
            onExport: U,
            onImport: K,
            onRemix: el,
            onConnectTool: er,
            onHistory: eo,
            onDismiss: ec,
            onTogglePreviewPaused: ed,
            previewPaused: ef = !1,
            previewPauseDisabled: ep = !1,
            onTogglePopout: eh,
            poppedOut: eg = !1,
            onToggleDebug: ey,
            debugOpen: em = !1,
            refreshApplicationId: ex,
            previewProjectId: eb,
            onCloseMenu: ev,
        } = e,
        ew = (0, ee.iI)(t),
        ej = (0, E.lQ)(t) && !ef,
        ek = r.useContext(B.bI),
        { pending: eS, refresh: e_ } = (0, S.A)(ex ?? null),
        { pending: eA, connect: eP } = (function (e, t) {
            let [n, l] = r.useState(O),
                i = r.useRef(O),
                a = r.useCallback((e) => {
                    ((i.current = (0, T.Q6)(i.current, e)), l(i.current));
                }, []);
            return {
                pending: n,
                connect: r.useCallback(
                    (n) => {
                        if (null == e) return;
                        let r = (0, T.K9)(i.current, n.type);
                        null != r &&
                            ((i.current = r),
                            l(r),
                            (async function () {
                                let l = await (0, $.JI)(e, n.type);
                                (a(n.type), "url" === l.type)
                                    ? (0, q.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, T.rq)(l.error)
                                              ? z.intl.string(G.default["jCQ/1B"])
                                              : z.intl.string(G.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(eb ?? null, es),
        eI = (0, i.bG)([Y.A], () => (null == eb ? eu : Y.A.getDeclaredConnections(eb))),
        eC = r.useMemo(() => (0, T.Xl)(eI), [eI]),
        eD = (0, R.Bs)(t),
        eM = (0, R.dw)(t, v),
        eE = null != eM && (0, R.dy)(eM, j),
        eT = (0, R.CU)(t) && j,
        eq = (0, i.bG)(
            [F.Ay],
            () => {
                let e = F.Ay.getProject(t);
                return null != e && (0, F.jf)(e);
            },
            [t],
        ),
        e$ = (0, i.bG)(
            [F.Ay],
            () => {
                var e;
                let n = F.Ay.getProject(t);
                return null != n && "guild" === (e = n).install_scope && (0, F.PV)(e);
            },
            [t],
        ),
        eG = (0, i.bG)(
            [F.Ay, C.default, P.A, I.A, _.Bt],
            () => {
                let e = F.Ay.getProject(t);
                return null != e && (0, N.i)(e, eD, "ConjureProjectActionMenu");
            },
            [t, eD],
        ),
        ez = null != V || j || eq,
        eO = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: z.intl.string(G.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: z.intl.formatToPlainString(G.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: z.intl.formatToPlainString(G.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != ex, refreshPending: eS, offers: eC, connectPending: eA }),
        eB = r.useMemo(() => new Map(eI.map((e) => [e.type, e])), [eI]),
        eL = null != el && k,
        eF = j && null != K,
        eR = eL || null != U || eF || null != er || null != eo,
        eW = M.p5 && null != v,
        eN = M.p5,
        eH = ew ? o.BellIcon : u.BellSlashIcon,
        eV = ef ? s.PlayIcon : c.PauseIcon,
        eU = eg ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, l.jsxs)(p.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": z.intl.string(z.t.ogxXGq),
        onClose: ev,
        onSelect: ev,
        children: [
            null != A
                ? (0, l.jsx)(h.rX, {
                      children: (0, l.jsx)(h.Dr, {
                          id: "publish",
                          label: W ?? z.intl.string(G.default["120EFN"]),
                          disabled: H,
                          action: A,
                      }),
                  })
                : null,
            null != ed || null != eh
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          null != ed
                              ? (0, l.jsx)(h.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: eV,
                                    leadingAccessory: { type: "icon", icon: eV },
                                    label: z.intl.string(ef ? G.default.ZKd2Cw : G.default.VHxerm),
                                    subtext: ej ? z.intl.string(G.default.WjdaFw) : void 0,
                                    disabled: ep || ej,
                                    action: ed,
                                })
                              : null,
                          null != eh
                              ? (0, l.jsx)(h.Dr, {
                                    id: "toggle-popout",
                                    icon: eU,
                                    leadingAccessory: { type: "icon", icon: eU },
                                    label: z.intl.string(eg ? z.t["NKV/MO"] : z.t["3Zypbv"]),
                                    subtext: ej && !eg ? z.intl.string(G.default.WjdaFw) : void 0,
                                    disabled: ej && !eg,
                                    action: eh,
                                })
                              : null,
                      ],
                  })
                : null,
            null != ey
                ? (0, l.jsx)(h.rX, {
                      children: (0, l.jsx)(h.sL, {
                          id: "debug",
                          label: z.intl.string(G.default.Mt5k9d),
                          leftIcon: g.BugIcon,
                          leadingAccessory: { type: "icon", icon: g.BugIcon },
                          checked: em,
                          action: ey,
                      }),
                  })
                : null,
            eO.length > 0
                ? (0, l.jsx)(h.rX, {
                      children: eO.map((e) =>
                          (0, l.jsx)(
                              h.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void e_();
                                      let t = null == e.connectionType ? null : eB.get(e.connectionType);
                                      null != t && eP(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, l.jsxs)(h.rX, {
                children: [
                    (0, l.jsx)(h.Dr, {
                        id: "mute",
                        label: z.intl.string(ew ? G.default.s9rCuH : G.default["a+i/As"]),
                        icon: eH,
                        leadingAccessory: { type: "icon", icon: eH },
                        action: () => (0, ee.$L)(t, !ew),
                    }),
                    null != ec
                        ? (0, l.jsx)(h.Dr, { id: "dismiss", label: z.intl.string(G.default.bWzWw9), action: ec })
                        : null,
                ],
            }),
            eR
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          eL
                              ? (0, l.jsx)(h.Dr, { id: "remix", label: z.intl.string(G.default["276ll6"]), action: el })
                              : null,
                          null != U
                              ? (0, l.jsx)(h.Dr, { id: "export", label: z.intl.string(G.default.WsEEP7), action: U })
                              : null,
                          eF
                              ? (0, l.jsx)(h.Dr, { id: "import", label: z.intl.string(G.default.rWGY3e), action: K })
                              : null,
                          null != er
                              ? (0, l.jsx)(h.Dr, {
                                    id: "connect-tool",
                                    label: z.intl.string(G.default.yOIql5),
                                    action: er,
                                })
                              : null,
                          null != eo
                              ? (0, l.jsx)(h.Dr, {
                                    id: "history",
                                    label: z.intl.string(G.default["3hIVou"]),
                                    action: eo,
                                })
                              : null,
                      ],
                  })
                : null,
            eN
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          eW
                              ? (0, l.jsx)(h.Dr, {
                                    id: "copy-link",
                                    label: z.intl.string(z.t.WqhZss),
                                    icon: y.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: y.LinkIcon },
                                    action: () =>
                                        (0, M.C)((0, D.n)(v, ea.VV.CONJURE, t), () =>
                                            (0, a.P0)({ text: z.intl.string(z.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, l.jsx)(h.Dr, {
                              id: "copy-project-id",
                              label: z.intl.string(G.default["nm/zuU"]),
                              icon: m.IdIcon,
                              leadingAccessory: { type: "icon", icon: m.IdIcon },
                              action: () =>
                                  (0, M.C)(t, () =>
                                      (0, a.P0)({ text: z.intl.string(G.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            j || ez || eE
                ? (0, l.jsxs)(h.rX, {
                      children: [
                          ez
                              ? (0, l.jsx)(h.Dr, {
                                    id: "settings",
                                    label: z.intl.string(G.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        V ??
                                        (() =>
                                            (0, J.A)(t, {
                                                guildId: w ?? v,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: ek,
                                            })),
                                })
                              : null,
                          eG
                              ? (0, l.jsx)(h.Dr, {
                                    id: "add-to-another-server",
                                    label: z.intl.string(G.default.RBPj0b),
                                    icon: b.ServerIcon,
                                    leadingAccessory: { type: "icon", icon: b.ServerIcon },
                                    action: () =>
                                        (0, Q.A)({
                                            projectId: t,
                                            guildId: v,
                                            publishOptions: null,
                                            addingToAnother: !0,
                                        }),
                                })
                              : null,
                          eE
                              ? (0, l.jsx)(h.Dr, {
                                    id: "remove-from-server",
                                    label: z.intl.formatToPlainString(G.default["3gKG2j"], { server: eM.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = F.Ay.getProject(t);
                                        null != e && (0, en.A)({ project: e, target: eM, action: "remove" });
                                    },
                                })
                              : null,
                          e$ && !eE
                              ? (0, l.jsx)(h.Dr, {
                                    id: "make-personal",
                                    label: z.intl.string(G.default.jNGawP),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = F.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }), (0, X.qf)((t) => (0, l.jsx)(Z, { ...t, ...e })));
                                    },
                                })
                              : null,
                          eT
                              ? (0, l.jsx)(h.Dr, {
                                    id: "unpublish",
                                    label: z.intl.string(G.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = F.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }), (0, X.qf)((t) => (0, l.jsx)(ei, { ...t, ...e })));
                                    },
                                })
                              : null,
                          j
                              ? (0, l.jsx)(h.Dr, {
                                    id: "delete",
                                    label: z.intl.string(z.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = F.Ay.getProject(t);
                                        if (null != e && null != eD)
                                            (0, en.A)({ project: e, target: eD, action: "delete" });
                                        else
                                            (0, et.A)({
                                                title: z.intl.formatToPlainString(G.default.CJBhb2, { name: n }),
                                                subtitle: z.intl.string(G.default["0OmrVn"]),
                                                confirmText: z.intl.string(z.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, L.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: z.intl.string(G.default["0XDHob"]),
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
function ed(e) {
    let { trigger: t = "header", ...n } = e,
        i = r.useRef(null);
    return (0, l.jsx)(v.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: v.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(ec, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: a } = n;
            return (0, l.jsx)("div", {
                ref: i,
                className: eo.h,
                children:
                    "iconButton" === t
                        ? (0, l.jsx)(w.m, {
                              text: z.intl.string(z.t["UKOtz+"]),
                              children: (0, l.jsx)(j.K, {
                                  icon: k.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": z.intl.string(z.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: r,
                              }),
                          })
                        : (0, l.jsx)(A.A.Icon, {
                              icon: k.MoreHorizontalIcon,
                              tooltip: z.intl.string(z.t["UKOtz+"]),
                              "aria-label": z.intl.string(z.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: r,
                          }),
            });
        },
    });
}
