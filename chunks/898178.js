n.d(e, { z: () => ti, A: () => ta });
var r = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(858899),
    o = n(782603),
    u = n(780338),
    s = n(782134),
    c = n(113494),
    d = n(12470),
    p = n(811893),
    f = n(165862),
    h = n(477782),
    m = n(92446),
    g = n(173936),
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
    P = n(171691),
    C = n(785389),
    A = n(889558),
    M = n(860402),
    D = n(191850),
    T = n(792996);
let E = new Set();
var $ = n(826058),
    q = n(233470),
    B = n(260498),
    z = n(733791),
    F = n(680032),
    O = n(189213),
    R = n(331322),
    L = n(834730),
    G = n(192308),
    N = n(653036);
function W(t) {
    let { project: e, transitionState: n, onClose: i } = t,
        o = (function (t) {
            let [e, n] = l.useState(!1),
                [r, i] = l.useState(null);
            l.useEffect(() => (0, q.GO)(t.id), [t.id]);
            let a = (0, z.Bs)(t.id),
                [o, u] = l.useState(null),
                s = null == o ? a : o.target,
                c = s?.appName ?? t.name,
                d = l.useMemo(() => (0, F.w)(t, s), [t, s]),
                p = l.useCallback(async () => {
                    (n(!0), i(null), u({ target: a }));
                    try {
                        await (0, q.kY)(t.id);
                    } catch {
                        return (i(T.intl.string(D.default["d+wTRF"])), u(null), n(!1), null);
                    }
                    n(!1);
                    let e = B.Ay.getIntegrationStatus(t.id)?.owner_authorization_revoked === !0;
                    return T.intl.formatToPlainString(e ? D.default.tOu7uv : D.default.TWYUzf, { app: c });
                }, [c, a, t.id]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == s ? null : (0, z.Mi)(s),
                pending: e,
                error: r,
                submit: p,
            };
        })(e),
        { appName: u, rows: s, keptChannels: c, pending: d, error: p } = o;
    return (0, r.jsx)(O.a, {
        transitionState: n,
        onClose: i,
        role: "alertdialog",
        title: T.intl.formatToPlainString(D.default.cAxBIL, { app: u }),
        size: "sm",
        notice: null == p ? void 0 : { type: "critical", message: p, role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: i, disabled: d },
            {
                text: T.intl.string(D.default.VAb6aE),
                variant: "critical-primary",
                onClick: async function () {
                    let t = await o.submit();
                    null != t && ((0, a.P0)({ text: t, variant: "success" }), i());
                },
                loading: d,
                disabled: d,
            },
        ],
        children: (0, r.jsxs)(R.B, {
            gap: 12,
            children: [
                (0, r.jsx)(N.A, { rows: s }),
                null != c ? (0, r.jsx)(L.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            ],
        }),
    });
}
var H = n(442331),
    V = n(616334);
n(321073);
var X = n(189714),
    K = n(314116),
    U = n(664619),
    Z = n(706935);
function Y(t) {
    let { project: e, target: n, action: i, ...o } = t,
        [u, s] = l.useState(n.canRemovePreviewBot),
        [c, d] = l.useState(!1),
        [p, f] = l.useState(null),
        h = "delete" === i,
        m = h ? (0, z.fI)(n) : (0, z.Kd)(n),
        g = h ? null : (0, z.L4)(n),
        y = (0, z.Mi)(n),
        x = h
            ? T.intl.formatToPlainString(D.default.CJBhb2, { name: n.projectName })
            : T.intl.formatToPlainString(D.default.x6FvsZ, { app: n.appName });
    return (0, r.jsx)(O.a, {
        ...o,
        role: "alertdialog",
        title: h ? x : (0, z.WX)((0, Z.tb)(D.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, z.J)(n) : T.intl.string(D.default["8OKM1N"]),
        "aria-label": x,
        notice: null == p ? void 0 : { message: p, type: "critical", role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: o.onClose },
            {
                text: T.intl.string(h ? D.default.aC42bN : D.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    (async function () {
                        (d(!0), f(null));
                        let t = h ? (0, q.xx)(e.id) : (0, U.YI)(e.id, { alsoRemovePreviewBot: u }),
                            r = await t.catch(() => null);
                        (d(!1), r?.ok !== !0)
                            ? f(T.intl.string(h ? D.default["0XDHob"] : D.default.PJ2Fkn))
                            : (h || (0, a.P0)({ text: (0, z.p_)(n), variant: "success" }), o.onClose());
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(R.B, {
            gap: 12,
            children: [
                m.length > 0 || null != g
                    ? (0, r.jsx)(Z.Ay, {
                          items: m,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: u, onChange: s, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != y ? (0, r.jsx)(L.E, { variant: "body-sm/normal", color: "text-muted", children: y }) : null,
            ],
        }),
    });
}
function Q(t) {
    (0, G.qf)((e) => (0, r.jsx)(Y, { ...e, ...t }));
}
var J = n(587895);
function tt(t) {
    let { project: e, ...n } = t,
        [o, u] = l.useState(!1),
        [s, c] = l.useState(null),
        d = (0, i.bG)([J.A], () => J.A.getApplication(e.application_id)?.name ?? e.name, [e.application_id, e.name]),
        p = T.intl.formatToPlainString(D.default.m8KWic, { app: d });
    return (0, r.jsx)(O.a, {
        ...n,
        role: "alertdialog",
        title: p,
        subtitle: T.intl.string(D.default.wve4kB),
        "aria-label": p,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: T.intl.string(D.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let t = await (0, U.R_)(e.id);
                        (u(!1), t)
                            ? ((0, a.P0)({
                                  text: T.intl.formatToPlainString(D.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : c(T.intl.string(D.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
var te = n(746080),
    tn = n(552821);
let tr = [];
function tl(t) {
    (0, a.P0)({ text: t, variant: "critical" });
}
function ti(t) {
    let {
            projectId: e,
            projectName: n,
            guildId: b,
            projectGuildId: v,
            isOwner: w,
            canRemix: j,
            onPublish: _,
            publishLabel: F,
            publishDisabled: O = !1,
            onOpenProjectSettings: R,
            onExport: L,
            onImport: N,
            onRemix: U,
            onConnectTool: Z,
            onHistory: Y,
            onDismiss: J,
            onTogglePreviewPaused: tn,
            previewPaused: ti = !1,
            previewPauseDisabled: ta = !1,
            onTogglePopout: to,
            poppedOut: tu = !1,
            onToggleDebug: ts,
            debugOpen: tc = !1,
            refreshApplicationId: td,
            previewProjectId: tp,
            onCloseMenu: tf,
        } = t,
        th = (0, X.iI)(e),
        tm = (0, P.lQ)(e) && !ti,
        tg = l.useContext($.bI),
        { pending: ty, refresh: tx } = (0, k.A)(td ?? null),
        { pending: tb, connect: tv } = (function (t, e) {
            let [n, r] = l.useState(E),
                i = l.useRef(E),
                a = l.useCallback((t) => {
                    ((i.current = (0, C.Q6)(i.current, t)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == t) return;
                        let l = (0, C.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, M.JI)(t, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, A.h)({ href: r.url, trusted: !1 })
                                    : e(
                                          "setup" === (0, C.rq)(r.error)
                                              ? T.intl.string(D.default["jCQ/1B"])
                                              : T.intl.string(D.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [e, t, a],
                ),
            };
        })(tp ?? null, tl),
        tw = (0, i.bG)([H.A], () => (null == tp ? tr : H.A.getDeclaredConnections(tp))),
        tj = l.useMemo(() => (0, C.Xl)(tw), [tw]),
        tk = (0, z.Bs)(e),
        t_ = (0, z.CU)(e) && w,
        tS = (0, i.bG)(
            [B.Ay],
            () => {
                let t = B.Ay.getProject(e);
                return null != t && (0, B.jf)(t);
            },
            [e],
        ),
        tI = (0, i.bG)(
            [B.Ay],
            () => {
                var t;
                let n = B.Ay.getProject(e);
                return (
                    null != n &&
                    "guild" === (t = n).install_scope &&
                    null == t.install_scope_setup &&
                    null != t.guild_id &&
                    (0, B.PV)(t)
                );
            },
            [e],
        ),
        tP = null != R || w || tS,
        tC = (function (t) {
            let { canRefresh: e, refreshPending: n, offers: r, connectPending: l } = t,
                i = [];
            for (let { connection: t, offer: a } of (e &&
                i.push({
                    id: "preview-refresh",
                    label: T.intl.string(D.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${t.type}`,
                              label: T.intl.formatToPlainString(D.default.DEwmI5, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: l.has(t.type),
                          }
                        : {
                              id: `preview-connect-${t.type}`,
                              label: T.intl.formatToPlainString(D.default.GnHcWc, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != td, refreshPending: ty, offers: tj, connectPending: tb }),
        tA = l.useMemo(() => new Map(tw.map((t) => [t.type, t])), [tw]),
        tM = null != U && j,
        tD = w && null != N,
        tT = tM || null != L || tD || null != Z || null != Y,
        tE = I.p5 && null != b,
        t$ = I.p5,
        tq = th ? o.BellIcon : u.BellSlashIcon,
        tB = ti ? s.PlayIcon : c.PauseIcon,
        tz = tu ? d.WindowReturnIcon : p.WindowLaunchIcon;
    return (0, r.jsxs)(f.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${e}`,
        "aria-label": T.intl.string(T.t.ogxXGq),
        onClose: tf,
        onSelect: tf,
        children: [
            null != _
                ? (0, r.jsx)(h.rX, {
                      children: (0, r.jsx)(h.Dr, {
                          id: "publish",
                          label: F ?? T.intl.string(D.default["120EFN"]),
                          disabled: O,
                          action: _,
                      }),
                  })
                : null,
            null != tn || null != to
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          null != tn
                              ? (0, r.jsx)(h.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: tB,
                                    leadingAccessory: { type: "icon", icon: tB },
                                    label: T.intl.string(ti ? D.default.ZKd2Cw : D.default.VHxerm),
                                    subtext: tm ? T.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: ta || tm,
                                    action: tn,
                                })
                              : null,
                          null != to
                              ? (0, r.jsx)(h.Dr, {
                                    id: "toggle-popout",
                                    icon: tz,
                                    leadingAccessory: { type: "icon", icon: tz },
                                    label: T.intl.string(tu ? T.t["NKV/MO"] : T.t["3Zypbv"]),
                                    subtext: tm && !tu ? T.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: tm && !tu,
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
                          label: T.intl.string(D.default.Mt5k9d),
                          leftIcon: m.BugIcon,
                          leadingAccessory: { type: "icon", icon: m.BugIcon },
                          checked: tc,
                          action: ts,
                      }),
                  })
                : null,
            tC.length > 0
                ? (0, r.jsx)(h.rX, {
                      children: tC.map((t) =>
                          (0, r.jsx)(
                              h.Dr,
                              {
                                  id: t.id,
                                  label: t.label,
                                  disabled: t.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === t.kind) return void tx();
                                      let e = null == t.connectionType ? null : tA.get(t.connectionType);
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
                        label: T.intl.string(th ? D.default.s9rCuH : D.default["a+i/As"]),
                        icon: tq,
                        leadingAccessory: { type: "icon", icon: tq },
                        action: () => (0, X.$L)(e, !th),
                    }),
                    null != J
                        ? (0, r.jsx)(h.Dr, { id: "dismiss", label: T.intl.string(D.default.bWzWw9), action: J })
                        : null,
                ],
            }),
            tT
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tM
                              ? (0, r.jsx)(h.Dr, { id: "remix", label: T.intl.string(D.default["276ll6"]), action: U })
                              : null,
                          null != L
                              ? (0, r.jsx)(h.Dr, { id: "export", label: T.intl.string(D.default.WsEEP7), action: L })
                              : null,
                          tD
                              ? (0, r.jsx)(h.Dr, { id: "import", label: T.intl.string(D.default.rWGY3e), action: N })
                              : null,
                          null != Z
                              ? (0, r.jsx)(h.Dr, {
                                    id: "connect-tool",
                                    label: T.intl.string(D.default.yOIql5),
                                    action: Z,
                                })
                              : null,
                          null != Y
                              ? (0, r.jsx)(h.Dr, {
                                    id: "history",
                                    label: T.intl.string(D.default["3hIVou"]),
                                    action: Y,
                                })
                              : null,
                      ],
                  })
                : null,
            t$
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tE
                              ? (0, r.jsx)(h.Dr, {
                                    id: "copy-link",
                                    label: T.intl.string(T.t.WqhZss),
                                    icon: g.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: g.LinkIcon },
                                    action: () =>
                                        (0, I.C)((0, S.n)(b, te.VV.CONJURE, e), () =>
                                            (0, a.P0)({ text: T.intl.string(T.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(h.Dr, {
                              id: "copy-project-id",
                              label: T.intl.string(D.default["nm/zuU"]),
                              icon: y.IdIcon,
                              leadingAccessory: { type: "icon", icon: y.IdIcon },
                              action: () =>
                                  (0, I.C)(e, () =>
                                      (0, a.P0)({ text: T.intl.string(D.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            w || tP || tk?.canRemoveBot === !0
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tP
                              ? (0, r.jsx)(h.Dr, {
                                    id: "settings",
                                    label: T.intl.string(D.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        R ??
                                        (() =>
                                            (0, V.A)(e, {
                                                guildId: v ?? b,
                                                initialTab: "project",
                                                isPreview: !0,
                                                publishOptions: tg,
                                            })),
                                })
                              : null,
                          tk?.canRemoveBot === !0
                              ? (0, r.jsx)(h.Dr, {
                                    id: "remove-from-server",
                                    label: T.intl.formatToPlainString(D.default["3gKG2j"], { server: tk.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let t = B.Ay.getProject(e);
                                        null != t && Q({ project: t, target: tk, action: "remove" });
                                    },
                                })
                              : null,
                          tI
                              ? (0, r.jsx)(h.Dr, {
                                    id: "make-personal",
                                    label: T.intl.string(D.default.jNGawP),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = B.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, G.qf)((e) => (0, r.jsx)(W, { ...e, ...t })));
                                    },
                                })
                              : null,
                          t_
                              ? (0, r.jsx)(h.Dr, {
                                    id: "unpublish",
                                    label: T.intl.string(D.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = B.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, G.qf)((e) => (0, r.jsx)(tt, { ...e, ...t })));
                                    },
                                })
                              : null,
                          w
                              ? (0, r.jsx)(h.Dr, {
                                    id: "delete",
                                    label: T.intl.string(T.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let t = B.Ay.getProject(e);
                                        if (null != t && null != tk) Q({ project: t, target: tk, action: "delete" });
                                        else
                                            (0, K.A)({
                                                title: T.intl.formatToPlainString(D.default.CJBhb2, { name: n }),
                                                subtitle: T.intl.string(D.default["0OmrVn"]),
                                                confirmText: T.intl.string(T.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, q.K)(e, () =>
                                                        (0, a.P0)({
                                                            text: T.intl.string(D.default["0XDHob"]),
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
function ta(t) {
    let { trigger: e = "header", ...n } = t,
        i = l.useRef(null);
    return (0, r.jsx)(b.Y, {
        targetElementRef: i,
        position: "bottom",
        align: "right",
        animation: b.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return (0, r.jsx)(ti, { ...n, onCloseMenu: e });
        },
        children: (t, n) => {
            let { onClick: l } = t,
                { isShown: a } = n;
            return (0, r.jsx)("div", {
                ref: i,
                className: tn.h,
                children:
                    "iconButton" === e
                        ? (0, r.jsx)(v.m, {
                              text: T.intl.string(T.t["UKOtz+"]),
                              children: (0, r.jsx)(w.K, {
                                  icon: j.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": T.intl.string(T.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(_.A.Icon, {
                              icon: j.MoreHorizontalIcon,
                              tooltip: T.intl.string(T.t["UKOtz+"]),
                              "aria-label": T.intl.string(T.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": a,
                              selected: a,
                              onClick: l,
                          }),
            });
        },
    });
}
