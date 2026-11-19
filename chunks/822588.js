n.d(t, { z: () => eo, A: () => eu });
var r = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(858899),
    o = n(782603),
    u = n(780338),
    c = n(12470),
    s = n(811893),
    d = n(86147),
    h = n(729475),
    f = n(165862),
    p = n(477782),
    g = n(625903),
    m = n(173936),
    y = n(473935),
    x = n(92446),
    b = n(265872),
    w = n(866665),
    j = n(408278),
    v = n(365199),
    k = n(742589),
    S = n(147036),
    I = n(957565),
    C = n(171691),
    M = n(785389),
    _ = n(889558),
    P = n(860402),
    A = n(191850),
    $ = n(792996);
let D = new Set();
var q = n(91242),
    z = n(156548),
    O = n(869146),
    T = n(475815),
    E = n(573083),
    F = n(652215),
    W = n(165610),
    B = n(738604),
    X = n(442331),
    L = n(616334),
    R = n(260498);
n(321073);
var G = n(189714),
    H = n(733791),
    N = n(314116),
    U = n(233470),
    V = n(189213),
    K = n(331322),
    Q = n(834730),
    Y = n(192308),
    Z = n(936508),
    J = n(199267),
    ee = n(706935);
function et(e) {
    let { project: t, target: n, otherTargets: i, ...a } = e,
        [o, u] = l.useState(!1),
        [c, s] = l.useState(null),
        d = (0, H.fI)(n, i),
        h = (0, H.Mi)(n);
    return (0, r.jsx)(V.a, {
        ...a,
        role: "alertdialog",
        title: $.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, H.J)(n, i),
        notice: null == c ? void 0 : { message: c, type: "critical", role: "alert" },
        actions: [
            { text: $.intl.string($.t["ETE/oC"]), variant: "secondary", onClick: a.onClose },
            {
                text: $.intl.string(A.default.aC42bN),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), s(null));
                        let e = await (0, U.xx)(t.id).catch(() => null);
                        (u(!1), e?.ok !== !0) ? s($.intl.string(A.default["0XDHob"])) : a.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(K.B, {
            gap: 12,
            children: [
                (0, r.jsx)(ee.Ay, { items: d }),
                null != h ? (0, r.jsx)(Q.E, { variant: "body-sm/normal", color: "text-muted", children: h }) : null,
            ],
        }),
    });
}
var en = n(256616),
    er = n(746080),
    el = n(552821);
let ei = [];
function ea(e) {
    (0, a.P0)({ text: e, variant: "critical" });
}
function eo(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: b,
            projectGuildId: w,
            isOwner: j,
            canRemix: v,
            onPublish: k,
            publishLabel: V,
            publishDisabled: K = !1,
            hideProjectSettings: Q = !1,
            onExport: ee,
            onImport: el,
            onRemix: eo,
            onConnectTool: eu,
            onHistory: ec,
            onDismiss: es,
            fullscreenFrame: ed,
            onTogglePopout: eh,
            poppedOut: ef = !1,
            onToggleDebug: ep,
            debugOpen: eg = !1,
            previewProjectId: em,
            onCloseMenu: ey,
        } = e,
        ex = (0, G.iI)(t),
        eb = (0, C.lQ)(t),
        ew = (function (e, t) {
            let n = (0, z.cR)(e?.id ?? null),
                r = (0, E.Zv)(t),
                l = (0, i.bG)(
                    [O.A, q.A],
                    () => null != e && O.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT) && q.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, W.x1)(e) || l || r) return null;
            let a = (0, z.fl)(e.id);
            return null != a && (0, T.Ub)(a) ? { active: n, toggle: () => (0, z.U8)(e.id) } : null;
        })(ed, t),
        ej = l.useContext(B.bI),
        { pending: ev, connect: ek } = (function (e, t) {
            let [n, r] = l.useState(D),
                i = l.useRef(D),
                a = l.useCallback((e) => {
                    ((i.current = (0, M.Q6)(i.current, e)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == e) return;
                        let l = (0, M.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, P.JI)(e, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, _.h)({ href: r.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, M.rq)(r.error)
                                              ? $.intl.string(A.default["jCQ/1B"])
                                              : $.intl.string(A.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(em ?? null, ea),
        eS = (0, i.bG)([X.A], () => (null == em ? ei : X.A.getDeclaredConnections(em))),
        eI = l.useMemo(() => (0, M.Xl)(eS), [eS]),
        eC = (0, H.Bs)(t),
        eM = (0, H.CU)(t) && j,
        e_ = (0, i.bG)(
            [R.Ay],
            () => {
                let e = R.Ay.getProject(t);
                return null != e && (0, R.jf)(e);
            },
            [t],
        ),
        eP = !Q && (j || e_),
        eA = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: r, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: $.intl.string(A.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: $.intl.formatToPlainString(A.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: $.intl.formatToPlainString(A.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: !1, refreshPending: !1, offers: eI, connectPending: ev }),
        e$ = l.useMemo(() => new Map(eS.map((e) => [e.type, e])), [eS]),
        eD = null != eo && v,
        eq = j && null != el,
        ez = I.p5 && null != b,
        eO = null != ee || eq || null != eu || eA.length > 0 || null != ec,
        eT = ex ? o.BellIcon : u.BellSlashIcon,
        eE = ef ? c.WindowReturnIcon : s.WindowLaunchIcon,
        eF = ew?.active === !0 ? d.FullscreenExitIcon : h.FullscreenEnterIcon;
    return (0, r.jsxs)(f.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": $.intl.string($.t.ogxXGq),
        onClose: ey,
        onSelect: ey,
        children: [
            null != k
                ? (0, r.jsx)(p.rX, {
                      children: (0, r.jsx)(p.Dr, {
                          id: "publish",
                          label: V ?? $.intl.string(A.default["120EFN"]),
                          disabled: K,
                          action: k,
                      }),
                  })
                : null,
            eD || eP
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eD
                              ? (0, r.jsx)(p.Dr, { id: "remix", label: $.intl.string(A.default.XWgAfc), action: eo })
                              : null,
                          eP
                              ? (0, r.jsx)(p.Dr, {
                                    id: "settings",
                                    label: $.intl.string(A.default.FzfmQ8),
                                    icon: g.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: g.SettingsIcon },
                                    action: () =>
                                        (0, L.A)(t, {
                                            guildId: w ?? b,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: ej,
                                        }),
                                })
                              : null,
                      ],
                  })
                : null,
            null != ew || null != eh || ez
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != ew
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-fullscreen",
                                    icon: eF,
                                    leadingAccessory: { type: "icon", icon: eF },
                                    label: $.intl.string(ew.active ? $.t.Z7MyNB : $.t.OIDkcp),
                                    action: ew.toggle,
                                })
                              : null,
                          null != eh
                              ? (0, r.jsx)(p.Dr, {
                                    id: "toggle-popout",
                                    icon: eE,
                                    leadingAccessory: { type: "icon", icon: eE },
                                    label: $.intl.string(ef ? $.t["NKV/MO"] : $.t["3Zypbv"]),
                                    subtext: eb && !ef ? $.intl.string(A.default.WjdaFw) : void 0,
                                    disabled: eb && !ef,
                                    action: eh,
                                })
                              : null,
                          ez
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-link",
                                    label: $.intl.string($.t.WqhZss),
                                    icon: m.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: m.LinkIcon },
                                    action: () =>
                                        (0, I.C)((0, S.n)(b, er.VV.CONJURE, t), () =>
                                            (0, a.P0)({ text: $.intl.string($.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, r.jsxs)(p.rX, {
                children: [
                    (0, r.jsx)(p.Dr, {
                        id: "mute",
                        label: $.intl.string(ex ? A.default.s9rCuH : A.default["a+i/As"]),
                        icon: eT,
                        leadingAccessory: { type: "icon", icon: eT },
                        action: () => (0, G.$L)(t, !ex),
                    }),
                    null != es
                        ? (0, r.jsx)(p.Dr, { id: "dismiss", label: $.intl.string(A.default.bWzWw9), action: es })
                        : null,
                ],
            }),
            eO
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          null != ee
                              ? (0, r.jsx)(p.Dr, { id: "export", label: $.intl.string(A.default.WsEEP7), action: ee })
                              : null,
                          eq
                              ? (0, r.jsx)(p.Dr, { id: "import", label: $.intl.string(A.default.rWGY3e), action: el })
                              : null,
                          null != eu
                              ? (0, r.jsx)(p.Dr, {
                                    id: "connect-tool",
                                    label: $.intl.string(A.default.yOIql5),
                                    action: eu,
                                })
                              : null,
                          eA.map((e) =>
                              (0, r.jsx)(
                                  p.Dr,
                                  {
                                      id: e.id,
                                      label: e.label,
                                      disabled: e.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          let t = null == e.connectionType ? null : e$.get(e.connectionType);
                                          null != t && ek(t);
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          null != ec
                              ? (0, r.jsx)(p.Dr, {
                                    id: "history",
                                    label: $.intl.string(A.default["3hIVou"]),
                                    action: ec,
                                })
                              : null,
                      ],
                  })
                : null,
            eM || j || I.p5 || null != ep
                ? (0, r.jsxs)(p.rX, {
                      children: [
                          eM
                              ? (0, r.jsx)(p.Dr, {
                                    id: "unpublish",
                                    label: $.intl.string(A.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = R.Ay.getProject(t);
                                        null != e && (0, en.A)({ project: e });
                                    },
                                })
                              : null,
                          j
                              ? (0, r.jsx)(p.Dr, {
                                    id: "delete",
                                    label: $.intl.string($.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = R.Ay.getProject(t);
                                        if (null != e && null != eC)
                                            !(function (e) {
                                                let { project: t, target: n, action: l } = e;
                                                if ("delete" === l) {
                                                    let e = (0, H.zu)(t);
                                                    (0, Y.qf)((l) =>
                                                        (0, r.jsx)(et, {
                                                            ...l,
                                                            project: t,
                                                            target: n,
                                                            otherTargets: e,
                                                        }),
                                                    );
                                                    return;
                                                }
                                                let i = (0, Z.hJ)(t, n);
                                                (0, Y.qf)((e) => (0, r.jsx)(J.A, { ...e, target: i }));
                                            })({ project: e, target: eC, action: "delete" });
                                        else
                                            (0, N.A)({
                                                title: $.intl.formatToPlainString(A.default.CJBhb2, { name: n }),
                                                subtitle: $.intl.string(A.default["0OmrVn"]),
                                                confirmText: $.intl.string($.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, U.K)(t, () =>
                                                        (0, a.P0)({
                                                            text: $.intl.string(A.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                          I.p5
                              ? (0, r.jsx)(p.Dr, {
                                    id: "copy-project-id",
                                    label: $.intl.string(A.default["nm/zuU"]),
                                    icon: y.IdIcon,
                                    leadingAccessory: { type: "icon", icon: y.IdIcon },
                                    action: () =>
                                        (0, I.C)(t, () =>
                                            (0, a.P0)({ text: $.intl.string(A.default.CmfaZG), variant: "success" }),
                                        ),
                                })
                              : null,
                          null != ep
                              ? (0, r.jsx)(p.sL, {
                                    id: "debug",
                                    label: $.intl.string(A.default.Mt5k9d),
                                    leftIcon: x.BugIcon,
                                    leadingAccessory: { type: "icon", icon: x.BugIcon },
                                    checked: eg,
                                    action: ep,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function eu(e) {
    let { trigger: t = "header", ...n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(eo, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: el.h,
                children:
                    "iconButton" === t
                        ? (0, r.jsx)(w.m, {
                              text: $.intl.string($.t["UKOtz+"]),
                              children: (0, r.jsx)(j.K, {
                                  icon: v.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": $.intl.string($.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(k.A.Icon, {
                              icon: v.MoreHorizontalIcon,
                              tooltip: $.intl.string($.t["UKOtz+"]),
                              "aria-label": $.intl.string($.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: l,
                          }),
            });
        },
    });
}
