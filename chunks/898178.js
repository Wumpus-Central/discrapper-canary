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
    f = n(811893),
    p = n(165862),
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
    S = n(742589),
    _ = n(147036),
    P = n(957565),
    C = n(171691),
    I = n(785389),
    M = n(889558),
    A = n(860402),
    D = n(191850),
    $ = n(792996);
let T = new Set();
var E = n(826058),
    B = n(233470),
    z = n(260498),
    q = n(733791),
    F = n(680032),
    N = n(189213),
    O = n(331322),
    R = n(834730),
    G = n(192308),
    W = n(653036);
function L(t) {
    let { project: e, transitionState: n, onClose: i } = t,
        o = (function (t) {
            let [e, n] = l.useState(!1),
                [r, i] = l.useState(null);
            l.useEffect(() => (0, B.GO)(t.id), [t.id]);
            let a = (0, q.Bs)(t.id),
                [o, u] = l.useState(null),
                s = null == o ? a : o.target,
                c = s?.appName ?? t.name,
                d = l.useMemo(() => (0, F.w)(t, s), [t, s]),
                f = l.useCallback(async () => {
                    (n(!0), i(null), u({ target: a }));
                    try {
                        await (0, B.kY)(t.id);
                    } catch {
                        return (i($.intl.string(D.default["d+wTRF"])), u(null), n(!1), null);
                    }
                    n(!1);
                    let e = z.Ay.getIntegrationStatus(t.id)?.owner_authorization_revoked === !0;
                    return $.intl.formatToPlainString(e ? D.default.tOu7uv : D.default.TWYUzf, { app: c });
                }, [c, a, t.id]);
            return {
                appName: c,
                rows: d,
                keptChannels: null == s ? null : (0, q.Mi)(s),
                pending: e,
                error: r,
                submit: f,
            };
        })(e),
        { appName: u, rows: s, keptChannels: c, pending: d, error: f } = o;
    return (0, r.jsx)(N.a, {
        transitionState: n,
        onClose: i,
        role: "alertdialog",
        title: $.intl.formatToPlainString(D.default.cAxBIL, { app: u }),
        size: "sm",
        notice: null == f ? void 0 : { type: "critical", message: f, role: "alert" },
        actions: [
            { text: $.intl.string($.t["ETE/oC"]), variant: "secondary", onClick: i, disabled: d },
            {
                text: $.intl.string(D.default.VAb6aE),
                variant: "critical-primary",
                onClick: async function () {
                    let t = await o.submit();
                    null != t && ((0, a.P0)({ text: t, variant: "success" }), i());
                },
                loading: d,
                disabled: d,
            },
        ],
        children: (0, r.jsxs)(O.B, {
            gap: 12,
            children: [
                (0, r.jsx)(W.A, { rows: s }),
                null != c ? (0, r.jsx)(R.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            ],
        }),
    });
}
var X = n(442331),
    K = n(616334);
n(321073);
var H = n(189714),
    V = n(314116),
    U = n(664619),
    Q = n(706935);
function Z(t) {
    let { project: e, target: n, action: i, ...o } = t,
        [u, s] = l.useState(n.canRemovePreviewBot),
        [c, d] = l.useState(!1),
        [f, p] = l.useState(null),
        h = "delete" === i,
        m = h ? (0, q.fI)(n) : (0, q.Kd)(n),
        g = h ? null : (0, q.L4)(n),
        y = (0, q.Mi)(n),
        x = h
            ? $.intl.formatToPlainString(D.default.CJBhb2, { name: n.projectName })
            : $.intl.formatToPlainString(D.default.x6FvsZ, { app: n.appName });
    return (0, r.jsx)(N.a, {
        ...o,
        role: "alertdialog",
        title: h ? x : (0, q.WX)((0, Q.tb)(D.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, q.J)(n) : $.intl.string(D.default["8OKM1N"]),
        "aria-label": x,
        notice: null == f ? void 0 : { message: f, type: "critical", role: "alert" },
        actions: [
            { text: $.intl.string($.t["ETE/oC"]), variant: "secondary", onClick: o.onClose },
            {
                text: $.intl.string(h ? D.default.aC42bN : D.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    (async function () {
                        (d(!0), p(null));
                        let t = h ? (0, B.xx)(e.id) : (0, U.YI)(e.id, { alsoRemovePreviewBot: u }),
                            r = await t.catch(() => null);
                        (d(!1), r?.ok !== !0)
                            ? p($.intl.string(h ? D.default["0XDHob"] : D.default.PJ2Fkn))
                            : (h || (0, a.P0)({ text: (0, q.p_)(n), variant: "success" }), o.onClose());
                    })().catch(() => {});
                },
            },
        ],
        children: (0, r.jsxs)(O.B, {
            gap: 12,
            children: [
                m.length > 0 || null != g
                    ? (0, r.jsx)(Q.Ay, {
                          items: m,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: u, onChange: s, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != y ? (0, r.jsx)(R.E, { variant: "body-sm/normal", color: "text-muted", children: y }) : null,
            ],
        }),
    });
}
function Y(t) {
    (0, G.qf)((e) => (0, r.jsx)(Z, { ...e, ...t }));
}
var J = n(587895);
function tt(t) {
    let { project: e, ...n } = t,
        [o, u] = l.useState(!1),
        [s, c] = l.useState(null),
        d = (0, i.bG)([J.A], () => J.A.getApplication(e.application_id)?.name ?? e.name, [e.application_id, e.name]),
        f = $.intl.formatToPlainString(D.default.m8KWic, { app: d });
    return (0, r.jsx)(N.a, {
        ...n,
        role: "alertdialog",
        title: f,
        subtitle: $.intl.string(D.default.wve4kB),
        "aria-label": f,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: $.intl.string($.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: $.intl.string(D.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (u(!0), c(null));
                        let t = await (0, U.R_)(e.id);
                        (u(!1), t)
                            ? ((0, a.P0)({
                                  text: $.intl.formatToPlainString(D.default.b8LN7N, { app: d }),
                                  variant: "success",
                              }),
                              n.onClose())
                            : c($.intl.string(D.default["rE/0SD"]));
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
            onPublish: S,
            publishLabel: F,
            publishDisabled: N = !1,
            onOpenProjectSettings: O,
            onExport: R,
            onImport: W,
            onRemix: U,
            onConnectTool: Q,
            onHistory: Z,
            onDismiss: J,
            onTogglePreviewPaused: tn,
            previewPaused: ti = !1,
            previewPauseDisabled: ta = !1,
            onTogglePopout: to,
            poppedOut: tu = !1,
            onToggleDebug: ts,
            debugOpen: tc = !1,
            refreshApplicationId: td,
            previewProjectId: tf,
            onCloseMenu: tp,
        } = t,
        th = (0, H.iI)(e),
        tm = (0, C.lQ)(e) && !ti,
        tg = l.useContext(E.bI),
        { pending: ty, refresh: tx } = (0, k.A)(td ?? null),
        { pending: tb, connect: tv } = (function (t, e) {
            let [n, r] = l.useState(T),
                i = l.useRef(T),
                a = l.useCallback((t) => {
                    ((i.current = (0, I.Q6)(i.current, t)), r(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == t) return;
                        let l = (0, I.K9)(i.current, n.type);
                        null != l &&
                            ((i.current = l),
                            r(l),
                            (async function () {
                                let r = await (0, A.JI)(t, n.type);
                                (a(n.type), "url" === r.type)
                                    ? (0, M.h)({ href: r.url, trusted: !1 })
                                    : e(
                                          "setup" === (0, I.rq)(r.error)
                                              ? $.intl.string(D.default["jCQ/1B"])
                                              : $.intl.string(D.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [e, t, a],
                ),
            };
        })(tf ?? null, tl),
        tw = (0, i.bG)([X.A], () => (null == tf ? tr : X.A.getDeclaredConnections(tf))),
        tj = l.useMemo(() => (0, I.Xl)(tw), [tw]),
        tk = (0, q.Bs)(e),
        tS = (0, q.CU)(e) && w,
        t_ = (0, i.bG)(
            [z.Ay],
            () => {
                let t = z.Ay.getProject(e);
                return null != t && (0, z.jf)(t);
            },
            [e],
        ),
        tP = (0, i.bG)(
            [z.Ay],
            () => {
                var t;
                let n = z.Ay.getProject(e);
                return (
                    null != n &&
                    "guild" === (t = n).install_scope &&
                    null == t.install_scope_setup &&
                    null != t.guild_id &&
                    (0, z.PV)(t)
                );
            },
            [e],
        ),
        tC = null != O || w || t_,
        tI = (function (t) {
            let { canRefresh: e, refreshPending: n, offers: r, connectPending: l } = t,
                i = [];
            for (let { connection: t, offer: a } of (e &&
                i.push({
                    id: "preview-refresh",
                    label: $.intl.string(D.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            r))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${t.type}`,
                              label: $.intl.formatToPlainString(D.default.DEwmI5, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: l.has(t.type),
                          }
                        : {
                              id: `preview-connect-${t.type}`,
                              label: $.intl.formatToPlainString(D.default.GnHcWc, { label: t.label }),
                              kind: "connect",
                              connectionType: t.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: null != td, refreshPending: ty, offers: tj, connectPending: tb }),
        tM = l.useMemo(() => new Map(tw.map((t) => [t.type, t])), [tw]),
        tA = null != U && j,
        tD = w && null != W,
        t$ = tA || null != R || tD || null != Q || null != Z,
        tT = P.p5 && null != b,
        tE = P.p5,
        tB = th ? o.BellIcon : u.BellSlashIcon,
        tz = ti ? s.PlayIcon : c.PauseIcon,
        tq = tu ? d.WindowReturnIcon : f.WindowLaunchIcon;
    return (0, r.jsxs)(p.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${e}`,
        "aria-label": $.intl.string($.t.ogxXGq),
        onClose: tp,
        onSelect: tp,
        children: [
            null != S
                ? (0, r.jsx)(h.rX, {
                      children: (0, r.jsx)(h.Dr, {
                          id: "publish",
                          label: F ?? $.intl.string(D.default["120EFN"]),
                          disabled: N,
                          action: S,
                      }),
                  })
                : null,
            null != tn || null != to
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          null != tn
                              ? (0, r.jsx)(h.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: tz,
                                    leadingAccessory: { type: "icon", icon: tz },
                                    label: $.intl.string(ti ? D.default.ZKd2Cw : D.default.VHxerm),
                                    subtext: tm ? $.intl.string(D.default.WjdaFw) : void 0,
                                    disabled: ta || tm,
                                    action: tn,
                                })
                              : null,
                          null != to
                              ? (0, r.jsx)(h.Dr, {
                                    id: "toggle-popout",
                                    icon: tq,
                                    leadingAccessory: { type: "icon", icon: tq },
                                    label: $.intl.string(tu ? $.t["NKV/MO"] : $.t["3Zypbv"]),
                                    subtext: tm && !tu ? $.intl.string(D.default.WjdaFw) : void 0,
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
                          label: $.intl.string(D.default.Mt5k9d),
                          leftIcon: m.BugIcon,
                          leadingAccessory: { type: "icon", icon: m.BugIcon },
                          checked: tc,
                          action: ts,
                      }),
                  })
                : null,
            tI.length > 0
                ? (0, r.jsx)(h.rX, {
                      children: tI.map((t) =>
                          (0, r.jsx)(
                              h.Dr,
                              {
                                  id: t.id,
                                  label: t.label,
                                  disabled: t.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === t.kind) return void tx();
                                      let e = null == t.connectionType ? null : tM.get(t.connectionType);
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
                        label: $.intl.string(th ? D.default.s9rCuH : D.default["a+i/As"]),
                        icon: tB,
                        leadingAccessory: { type: "icon", icon: tB },
                        action: () => (0, H.$L)(e, !th),
                    }),
                    null != J
                        ? (0, r.jsx)(h.Dr, { id: "dismiss", label: $.intl.string(D.default.bWzWw9), action: J })
                        : null,
                ],
            }),
            t$
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tA
                              ? (0, r.jsx)(h.Dr, { id: "remix", label: $.intl.string(D.default["276ll6"]), action: U })
                              : null,
                          null != R
                              ? (0, r.jsx)(h.Dr, { id: "export", label: $.intl.string(D.default.WsEEP7), action: R })
                              : null,
                          tD
                              ? (0, r.jsx)(h.Dr, { id: "import", label: $.intl.string(D.default.rWGY3e), action: W })
                              : null,
                          null != Q
                              ? (0, r.jsx)(h.Dr, {
                                    id: "connect-tool",
                                    label: $.intl.string(D.default.yOIql5),
                                    action: Q,
                                })
                              : null,
                          null != Z
                              ? (0, r.jsx)(h.Dr, {
                                    id: "history",
                                    label: $.intl.string(D.default["3hIVou"]),
                                    action: Z,
                                })
                              : null,
                      ],
                  })
                : null,
            tE
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tT
                              ? (0, r.jsx)(h.Dr, {
                                    id: "copy-link",
                                    label: $.intl.string($.t.WqhZss),
                                    icon: g.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: g.LinkIcon },
                                    action: () =>
                                        (0, P.C)((0, _.n)(b, te.VV.CONJURE, e), () =>
                                            (0, a.P0)({ text: $.intl.string($.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, r.jsx)(h.Dr, {
                              id: "copy-project-id",
                              label: $.intl.string(D.default["nm/zuU"]),
                              icon: y.IdIcon,
                              leadingAccessory: { type: "icon", icon: y.IdIcon },
                              action: () =>
                                  (0, P.C)(e, () =>
                                      (0, a.P0)({ text: $.intl.string(D.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            w || tC || tk?.canRemoveBot === !0
                ? (0, r.jsxs)(h.rX, {
                      children: [
                          tC
                              ? (0, r.jsx)(h.Dr, {
                                    id: "settings",
                                    label: $.intl.string(D.default.FzfmQ8),
                                    icon: x.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: x.SettingsIcon },
                                    action:
                                        O ??
                                        (() =>
                                            (0, K.A)(e, {
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
                                    label: $.intl.formatToPlainString(D.default["3gKG2j"], { server: tk.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let t = z.Ay.getProject(e);
                                        null != t && Y({ project: t, target: tk, action: "remove" });
                                    },
                                })
                              : null,
                          tP
                              ? (0, r.jsx)(h.Dr, {
                                    id: "make-personal",
                                    label: $.intl.string(D.default.jNGawP),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = z.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, G.qf)((e) => (0, r.jsx)(L, { ...e, ...t })));
                                    },
                                })
                              : null,
                          tS
                              ? (0, r.jsx)(h.Dr, {
                                    id: "unpublish",
                                    label: $.intl.string(D.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var t;
                                        let n = z.Ay.getProject(e);
                                        null != n &&
                                            ((t = { project: n }), (0, G.qf)((e) => (0, r.jsx)(tt, { ...e, ...t })));
                                    },
                                })
                              : null,
                          w
                              ? (0, r.jsx)(h.Dr, {
                                    id: "delete",
                                    label: $.intl.string($.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let t = z.Ay.getProject(e);
                                        if (null != t && null != tk) Y({ project: t, target: tk, action: "delete" });
                                        else
                                            (0, V.A)({
                                                title: $.intl.formatToPlainString(D.default.CJBhb2, { name: n }),
                                                subtitle: $.intl.string(D.default["0OmrVn"]),
                                                confirmText: $.intl.string($.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, B.K)(e, () =>
                                                        (0, a.P0)({
                                                            text: $.intl.string(D.default["0XDHob"]),
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
                              text: $.intl.string($.t["UKOtz+"]),
                              children: (0, r.jsx)(w.K, {
                                  icon: j.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": $.intl.string($.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": a,
                                  onClick: l,
                              }),
                          })
                        : (0, r.jsx)(S.A.Icon, {
                              icon: j.MoreHorizontalIcon,
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
