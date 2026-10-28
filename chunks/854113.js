(t.d(l, { default: () => ek }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(17928),
    r = t(314116),
    s = t(224640),
    u = t(20742),
    c = t(430993),
    d = t(761508),
    o = t(331322),
    f = t(834730),
    p = t(289873),
    m = t(696208),
    x = t(889921),
    g = t(260498),
    h = t(360047),
    j = t(248675),
    b = t(105292);
let v = [];
var C = t(323384),
    S = t(661531),
    k = t(265872),
    y = t(980707),
    E = t(477782),
    A = t(866665),
    I = t(408278),
    P = t(365199),
    T = t(497183),
    N = t(843313);
function _(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: i, failed: s, setBuild: u, remove: c } = l;
    return (0, n.jsx)("div", {
        className: N.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: b.intl.string(j.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: t.map((e) => {
                        let l = i[e.project_id];
                        return (0, n.jsx)(
                            R,
                            {
                                caller: e,
                                project: a[e.project_id],
                                name: l,
                                onBuildChange: (l) => u(e.project_id, l),
                                onRemove: () => {
                                    var t;
                                    return (
                                        (t = e.project_id),
                                        void (0, r.A)({
                                            title: b.intl.formatToPlainString(j.default.zSfIvv, { name: l }),
                                            subtitle: b.intl.formatToPlainString(j.default["7TX+mR"], { name: l }),
                                            confirmText: b.intl.string(j.default.vDZEGQ),
                                            variant: "critical",
                                            onConfirm: () => c(t),
                                        })
                                    );
                                },
                            },
                            e.project_id,
                        );
                    }),
                }),
                s
                    ? (0, n.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: b.intl.string(j.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let { caller: l, project: t, name: i, onBuildChange: r, onRemove: s } = e,
        u = a.useRef(null),
        c = b.intl.formatToPlainString(j.default.bzMlmh, { name: i });
    return (0, n.jsxs)("div", {
        className: N.nM,
        children: [
            null != t
                ? (0, n.jsx)(T.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: N.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: S.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: N.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-md/medium", lineClamp: 1, children: i }),
                    (0, n.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, h.hU)(l.build),
                    }),
                ],
            }),
            (0, n.jsx)(k.Y, {
                targetElementRef: u,
                position: "bottom",
                align: "right",
                animation: k.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsxs)(y.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-linked-app-${l.project_id}`,
                        "aria-label": c,
                        onClose: t,
                        onSelect: t,
                        children: [
                            (0, n.jsx)(E.rX, {
                                label: b.intl.string(j.default.Odrcmq),
                                children: h.Hi.map((e) =>
                                    (0, n.jsx)(
                                        E.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${l.project_id}`,
                                            label: (0, h.hU)(e),
                                            subtext: (0, h.Vq)(e),
                                            checked: e === l.build,
                                            action: () => {
                                                (r(e), t());
                                            },
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            (0, n.jsx)(E.bX, {}),
                            (0, n.jsx)(E.rX, {
                                children: (0, n.jsx)(E.Dr, {
                                    id: "remove",
                                    color: "danger",
                                    label: b.intl.string(j.default.bN1S9T),
                                    action: s,
                                }),
                            }),
                        ],
                    });
                },
                children: (e, l) => {
                    let { onClick: t } = e,
                        { isShown: a } = l;
                    return (0, n.jsx)("div", {
                        ref: u,
                        className: N.hZ,
                        children: (0, n.jsx)(A.m, {
                            text: c,
                            children: (0, n.jsx)(I.K, {
                                icon: P.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": c,
                                "aria-haspopup": "menu",
                                "aria-expanded": a,
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
        ],
    });
}
var w = t(557744),
    z = t(223347),
    F = t(822313),
    B = t(359589),
    L = t(722701),
    U = t(811587),
    M = t(893067),
    D = t(297264),
    O = t(821609),
    Z = t(44255),
    H = t(303345),
    V = t(416473);
function q(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([x.default], () => "open" === x.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, x.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [g, h] = a.useState(null),
                [v, C] = a.useState(0),
                S = a.useRef(!1),
                k = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = k.current,
                    a = ++n.value;
                return (
                    (0, V.fi)(e)
                        .then((e) => {
                            k.current.value === a && (r(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            k.current.value === a && (m(b.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let y = a.useCallback(() => {
                    (u(!0), m(null), C((e) => e + 1));
                }, []),
                E = a.useCallback(async () => {
                    if (!l || !c || S.current) return;
                    S.current = !0;
                    let t = ++k.current.value;
                    (f(!0), m(null), h(null));
                    try {
                        let l = await (0, V.MN)(e);
                        if (k.current.value !== t) return;
                        (r(l), h(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        k.current.value === t && m(e instanceof H.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), k.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: p, status: g, retry: y, remove: E };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(D.D, { id: u, variant: "heading-md/semibold", children: b.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: b.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(j.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, Z.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(O.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: b.intl.string(j.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, r.A)({
                                                    title: b.intl.string(j.default["Tw/KaB"]),
                                                    subtitle: b.intl.string(j.default.qr1iIe),
                                                    confirmText: b.intl.string(j.default.J7ZMMf),
                                                    variant: "critical",
                                                    onConfirm: s.remove,
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : null,
                  null != s.error
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "text-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(O.$, {
                            type: "button",
                            variant: "secondary",
                            text: b.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var G = t(11120);
async function X(e) {
    let { appInvalid: l, submitApp: t, submitProject: n } = e;
    if (l) return { saved: !1, failedTab: "app" };
    let [a, i] = await Promise.all([n?.() ?? null, t()]);
    return null == a && i ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
}
var J = t(193249),
    Q = t(890497),
    K = t(904363),
    W = t(540338),
    $ = t(503698),
    Y = t.n($),
    ee = t(750943),
    el = t(22231),
    et = t(95477),
    en = t(103557),
    ea = t(946274),
    ei = t(951178),
    er = t(535466),
    es = t(154600);
function eu(e) {
    let { iconURL: l, disabled: t, onChange: i, onError: r } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: es.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: Y()(es.Vs, { [es.A6]: u }),
                "aria-label": b.intl.string(u ? b.t["MsUY/S"] : b.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(ee.X, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: es.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: es.Jx,
                                  children: (0, n.jsx)(el.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(ea.Ay, {
                ref: s,
                className: es.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: er.En }],
                maxFileSizeBytes: er.Q0,
                onChange: (e) => {
                    (r(null), i(e));
                },
                onFileSizeError: () => r(b.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ec(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function ed(e) {
    let l,
        t,
        {
            iconURL: i,
            onIconChange: r,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: p,
            disabled: m = !1,
        } = e,
        [x, g] = a.useState(null),
        { rowRef: h, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ec(e, n, a);
                let i = new ResizeObserver(() => ec(e, n, a));
                return (i.observe(n), i.observe(a), () => i.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: h,
                        className: es.S7,
                        children: [
                            (0, n.jsx)(eu, { iconURL: i, disabled: m, onChange: r, onError: g }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: es.yD,
                                children: (0, n.jsx)(et.k, {
                                    label: b.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: ei.eq,
                                    disabled: m,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != x
                        ? (0, n.jsx)(f.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: x,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(en.f, {
                label: b.intl.string(j.default.ynaGa1),
                placeholder: b.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: p,
                maxLength: ei.HR,
                disabled: m,
            }),
        ],
    });
}
t(938796);
var eo = t(862026),
    ef = t(709753),
    ep = t(961553),
    em = t(502707),
    ex = t(944142),
    eg = t(788493),
    eh = t(532247),
    ej = t(371169),
    eb = t(246338),
    ev = t(277085),
    eC = t(453430);
let eS = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function ek(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: S,
            note: k,
            notifyAgent: y,
            isPreview: E,
            publishOptions: A,
            transitionState: I,
            onClose: P,
        } = e,
        T = (0, i.bG)([g.Ay], () => g.Ay.getProject(l), [l]),
        N = (0, i.bG)([w.A], () => w.A.getModelSettings(l), [l]),
        R = (0, i.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        z = null != T && (0, g.PV)(T),
        F = null != T && (0, g.jf)(T),
        B = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = (0, K.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: p,
                    hostApproval: m,
                    name: x,
                    nameError: h,
                    nameChanged: v,
                    isPublic: C,
                    isGuildCollaboration: S,
                    selectedRoleIds: k,
                    supportsVisibility: y,
                    supportsCollaboration: E,
                    supportsCollaboratorRoles: A,
                    saving: I,
                    selectionError: P,
                    saveError: T,
                    experimentalError: N,
                    canSave: _,
                    handleIconChange: R,
                    handleNameChange: w,
                    handleDescriptionChange: z,
                    handleFlagChange: F,
                    handleLiveReloadChange: B,
                    handleRoleSelectionChange: L,
                    handleSmartContextChange: U,
                    handleRequireHostApprovalChange: M,
                    submit: D,
                } = (function (e, l) {
                    var t;
                    let n,
                        r = (0, i.bG)([g.Ay], () => g.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, i.bG)([ex.A], () => ex.A.getLiveReload(e), [e]),
                                t = (0, em.A)(e),
                                [n, r] = a.useState(null),
                                [s, u] = a.useState(null);
                            null != s && l !== s.before && u(null);
                            let c = null != s && l === s.before ? s.enabled : l?.enabled;
                            null != n && n === c && r(null);
                            let d = null != l && null != n && n !== c,
                                o = a.useCallback(
                                    () =>
                                        !d ||
                                        null == n ||
                                        (!!(0, eg.c)(e, n) && (u({ enabled: n, before: l }), r(null), !0)),
                                    [d, n, l, e],
                                );
                            return {
                                available: null != l && !t,
                                checked: n ?? c ?? !1,
                                description: null == l ? "" : (0, eh.oV)(l),
                                changed: d,
                                setChecked: r,
                                save: o,
                            };
                        })(e),
                        u = s.save,
                        c = (0, ep.A)(e),
                        { changes: d, commit: o } = c,
                        f = (0, eo.Q)(e),
                        p = f.save,
                        m = (0, ef._t)(e),
                        x = m.save,
                        h = r?.collaborator_role_ids ?? [],
                        [v, C] = a.useState(r?.name ?? ""),
                        [S, k] = a.useState(null),
                        [y, E] = a.useState(v),
                        [A, I] = a.useState(r?.flags ?? 0),
                        [P, T] = a.useState(() => [...h]),
                        [N, _] = a.useState(!1),
                        [R, w] = a.useState(null),
                        [z, F] = a.useState(null),
                        [B, L] = a.useState(null),
                        [U, M] = a.useState(null),
                        D = y.trim(),
                        O = null != r && (0, ei.IU)(r),
                        Z = null != r && "user" !== r.install_scope,
                        H = Z && null != l && (0, ei.RX)(r),
                        { isPublic: V, isGuildCollaboration: q } = (0, eb.n5)(A),
                        G = null != r && D !== v,
                        X = O && A !== (S?.flags ?? r?.flags ?? 0),
                        J =
                            H &&
                            ((t = S?.roleIds ?? h), !((n = new Set(P)).size === t.length && t.every((e) => n.has(e)))),
                        Q = G || X || J || c.changed,
                        K = Q || s.changed || f.changed || m.changed,
                        { setIcon: W, setDescription: $ } = c,
                        Y = s.setChecked,
                        ee = f.setChecked,
                        el = m.setChecked,
                        et = a.useCallback(
                            (e) => {
                                (W(e), L(null));
                            },
                            [W],
                        ),
                        en = a.useCallback(
                            (e) => {
                                ($(e), L(null));
                            },
                            [$],
                        ),
                        ea = a.useCallback((e) => {
                            (E(e), w(null), L(null));
                        }, []),
                        er = a.useCallback((e, l) => {
                            (I((t) => (l ? t | e : t & ~e)), F(null), L(null));
                        }, []),
                        es = a.useCallback(
                            (e) => {
                                (Y(e), L(null));
                            },
                            [Y],
                        ),
                        eu = a.useCallback((e) => {
                            e.length > ei.sq
                                ? F(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: ei.sq }))
                                : (T(e), F(null), L(null));
                        }, []),
                        ec = a.useCallback(
                            (e) => {
                                (ee(e), M(null));
                            },
                            [ee],
                        ),
                        ed = a.useCallback(
                            (e) => {
                                (el(e), M(null));
                            },
                            [el],
                        ),
                        eC = a.useCallback(async () => {
                            if (null == r || !K || N) return null;
                            let t = G ? (0, ev.p)(D) : null;
                            if (null != t) return (w(t), "project");
                            let n = { ...d };
                            (G && (n.name = D),
                                X && (n.flags = A),
                                J && (n.collaborator_role_ids = [...P].sort()),
                                null == r.guild_id && null != l && (J || (X && q)) && (n.guild_id = l),
                                _(!0),
                                L(null),
                                M(null));
                            try {
                                if ((Q && (await (0, ej.CW)(e, n), C(D), k({ flags: A, roleIds: [...P] }), o()), !u()))
                                    return (L(b.intl.string(j.default.XzkNBw)), "project");
                                if (!p() || !x()) return (M(b.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (L(b.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                _(!1);
                            }
                        }, [o, A, X, l, K, d, q, G, r, e, Q, J, x, u, p, N, P, D]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: m,
                        name: y,
                        nameError: R,
                        nameChanged: G,
                        isPublic: V,
                        isGuildCollaboration: q,
                        selectedRoleIds: P,
                        supportsVisibility: O,
                        supportsCollaboration: Z,
                        supportsCollaboratorRoles: H,
                        saving: N,
                        selectionError: z,
                        saveError: B,
                        experimentalError: U,
                        canSave: K && "" !== D,
                        handleIconChange: et,
                        handleNameChange: ea,
                        handleDescriptionChange: en,
                        handleFlagChange: er,
                        handleLiveReloadChange: es,
                        handleRoleSelectionChange: eu,
                        handleSmartContextChange: ec,
                        handleRequireHostApprovalChange: ed,
                        submit: eC,
                    };
                })(e, l),
                O = I || t;
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: b.intl.string(j.default.s7VnVF),
                              })
                            : null,
                        (0, n.jsx)(ed, {
                            iconURL: u,
                            onIconChange: R,
                            name: x,
                            nameError: h,
                            onNameChange: w,
                            description: c,
                            onDescriptionChange: z,
                            disabled: O,
                        }),
                        y
                            ? (0, n.jsx)(J.d, {
                                  label: b.intl.string(j.default.ujIxRm),
                                  description: b.intl.string(j.default.gT8zk1),
                                  checked: C,
                                  disabled: O,
                                  onChange: (e) => F(ei.Zh.PUBLIC, e),
                              })
                            : null,
                        y && E
                            ? (0, n.jsx)(J.d, {
                                  label: b.intl.string(j.default.lVvR4E),
                                  description: b.intl.string(j.default.SQZGoV),
                                  checked: S,
                                  disabled: O,
                                  onChange: (e) => F(ei.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(J.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: O,
                                  onChange: B,
                              })
                            : null,
                        A
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(Q.Z, {
                                          selectionMode: "multiple",
                                          label: b.intl.string(j.default["pO3+p5"]),
                                          placeholder: b.intl.string(j.default.gvL7QS),
                                          value: k,
                                          options: r,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: O || !S,
                                          "aria-invalid": null != P,
                                          "aria-errormessage": null != P ? s : void 0,
                                          onSelectionChange: L,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: b.intl.formatToPlainString(j.default.g5I05P, {
                                              count: k.length,
                                              max: ei.sq,
                                          }),
                                      }),
                                      S
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: b.intl.string(j.default.nZw5r9),
                                            }),
                                      null != P
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: P,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != T
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: T,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(J.d, {
                            label: b.intl.string(j.default["4liZ45"]),
                            description: b.intl.string(j.default.I5cl7p),
                            checked: p.checked,
                            disabled: I,
                            onChange: U,
                        }),
                        (0, n.jsx)(J.d, {
                            label: b.intl.string(j.default.mpjaVm),
                            description: b.intl.string(j.default["2PxChh"]),
                            checked: m.checked,
                            disabled: I,
                            onChange: M,
                        }),
                        (0, n.jsx)(W.u, { projectId: e }),
                        null != N
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: N,
                              })
                            : null,
                    ],
                }),
                canSave: _,
                saving: I,
                nameChanged: v,
                submit: D,
            };
        })(l, T?.guild_id ?? t ?? void 0, { readOnly: !z }),
        D = (function (e, l) {
            let [t, n] = a.useState(v),
                [r, s] = a.useState(!1);
            a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    (async function () {
                        try {
                            let l = await (0, h.vk)(e);
                            t && n(l);
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]);
            let u = (0, i.cf)(
                    [g.Ay],
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [l, g.Ay.getProject(l)];
                            }),
                        ),
                    [t],
                ),
                c = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    u[l]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [t, u],
                );
            return {
                callers: t,
                projects: u,
                names: c,
                failed: r,
                setBuild: a.useCallback(
                    async (l, t) => {
                        s(!1);
                        try {
                            await (0, h.Ol)(e, l, t);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e)));
                    },
                    [e],
                ),
                remove: a.useCallback(
                    async (l) => {
                        s(!1);
                        try {
                            await (0, h.pc)(e, l);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.filter((e) => e.project_id !== l));
                    },
                    [e],
                ),
            };
        })(l, F),
        [O, Z] = a.useState(null);
    return (0, n.jsx)(G.A, {
        projectId: l,
        scopeKeys: S,
        note: k,
        notifyAgent: y,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((z || F) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                N?.tierSettings != null && t.push("model"),
                D.callers.length > 0 && t.push("linked"),
                z && t.push("experimental"));
            let a = [O, C].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                x = !z && !i && !t.includes("app") && !t.includes("secrets"),
                h = (z && B.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !i && z && B.canSave });
            async function S(n) {
                if ((n.preventDefault(), !v || h)) {
                    e.invalid && t.includes("app") && Z("app");
                    return;
                }
                let s = !i && z && B.nameChanged,
                    u = await X({
                        appInvalid: e.invalid,
                        submitApp: e.submit,
                        submitProject: i || !z ? null : B.submit,
                    });
                if (u.saved) {
                    (await P(),
                        s &&
                            null != A &&
                            (function (e, l) {
                                let t = g.Ay.getProject(e);
                                if (null == t || !(0, M.qF)(t)) return;
                                let n = L.A.getPublishStatus(e);
                                null != n &&
                                    (0, U.lE)(n.publishState) &&
                                    (0, r.A)({
                                        title: b.intl.string(j.default["48pvCR"]),
                                        subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                        confirmText: b.intl.string(j.default.guoHDk),
                                        cancelText: b.intl.string(j.default.HSyPrY),
                                        variant: "primary",
                                        onConfirm: () => {
                                            (0, M.FZ)(e, "name_prompt", l).catch(() => {});
                                        },
                                    });
                            })(l, A));
                    return;
                }
                "app" !== u.failedTab ? Z(u.failedTab) : "secrets" !== a && Z(t.includes("app") ? "app" : "secrets");
            }
            let k = b.intl.string(i ? j.default["jZjP+I"] : j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: S,
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: P,
                    "aria-label": k,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: k }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: b.intl.string(eS[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eC.f,
                                          children: [B.fields, (0, n.jsx)(q, { projectId: l, canEdit: F }, l)],
                                      }),
                                i || "linked" !== a ? null : (0, n.jsx)(_, { linkedApps: D }),
                                i || "experimental" !== a ? null : B.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || N?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(ey, { projectId: l, modelSettings: N, tierSettings: N.tierSettings }),
                                i || null != a
                                    ? null
                                    : R
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eC.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(m.H, {
                            actionsFullWidth: !0,
                            actions: x
                                ? [{ text: b.intl.string(b.t.cpT0Cq), variant: "secondary", onClick: P }]
                                : [
                                      {
                                          text: b.intl.string(b.t["ETE/oC"]),
                                          variant: "secondary",
                                          onClick: P,
                                          disabled: h,
                                      },
                                      {
                                          text: b.intl.string(i ? j.default.A7dQd9 : b.t["R3BPH+"]),
                                          variant: "primary",
                                          type: "submit",
                                          loading: h,
                                          disabled: !v,
                                      },
                                  ],
                        }),
                    ],
                }),
            });
        },
    });
}
function ey(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, z.X)(l, e), [l]),
        [c, d] = (0, F.A)(r, u);
    return (0, n.jsx)(B.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
