(l.d(t, { default: () => ey }), l(321073));
var n = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(314116),
    s = l(224640),
    u = l(20742),
    c = l(430993),
    d = l(761508),
    o = l(331322),
    f = l(834730),
    p = l(289873),
    x = l(696208),
    m = l(322227),
    g = l(260498),
    h = l(360047),
    j = l(87501),
    v = l(105292);
let b = [];
var C = l(323384),
    S = l(661531),
    k = l(265872),
    y = l(980707),
    A = l(477782),
    E = l(866665),
    I = l(408278),
    P = l(365199),
    _ = l(719564),
    R = l(843313);
function T(e) {
    let { linkedApps: t } = e,
        { callers: l, projects: a, names: r, failed: s, setBuild: u, remove: c } = t;
    return (0, n.jsx)("div", {
        className: R.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: v.intl.string(j.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: l.map((e) => {
                        let t = r[e.project_id];
                        return (0, n.jsx)(
                            N,
                            {
                                caller: e,
                                project: a[e.project_id],
                                name: t,
                                onBuildChange: (t) => u(e.project_id, t),
                                onRemove: () => {
                                    var l;
                                    return (
                                        (l = e.project_id),
                                        void (0, i.A)({
                                            title: v.intl.formatToPlainString(j.default.zSfIvv, { name: t }),
                                            subtitle: v.intl.formatToPlainString(j.default["7TX+mR"], { name: t }),
                                            confirmText: v.intl.string(j.default.vDZEGQ),
                                            variant: "critical",
                                            onConfirm: () => c(l),
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
                          children: v.intl.string(j.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function N(e) {
    let { caller: t, project: l, name: r, onBuildChange: i, onRemove: s } = e,
        u = a.useRef(null),
        c = v.intl.formatToPlainString(j.default.bzMlmh, { name: r });
    return (0, n.jsxs)("div", {
        className: R.nM,
        children: [
            null != l
                ? (0, n.jsx)(_.A, { project: l, size: "card" })
                : (0, n.jsx)("div", {
                      className: R.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: S.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: R.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-md/medium", lineClamp: 1, children: r }),
                    (0, n.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, h.hU)(t.build),
                    }),
                ],
            }),
            (0, n.jsx)(k.Y, {
                targetElementRef: u,
                position: "bottom",
                align: "right",
                animation: k.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsxs)(y.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-linked-app-${t.project_id}`,
                        "aria-label": c,
                        onClose: l,
                        onSelect: l,
                        children: [
                            (0, n.jsx)(A.rX, {
                                label: v.intl.string(j.default.Odrcmq),
                                children: h.Hi.map((e) =>
                                    (0, n.jsx)(
                                        A.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${t.project_id}`,
                                            label: (0, h.hU)(e),
                                            subtext: (0, h.Vq)(e),
                                            checked: e === t.build,
                                            action: () => {
                                                (i(e), l());
                                            },
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            (0, n.jsx)(A.bX, {}),
                            (0, n.jsx)(A.rX, {
                                children: (0, n.jsx)(A.Dr, {
                                    id: "remove",
                                    color: "danger",
                                    label: v.intl.string(j.default.bN1S9T),
                                    action: s,
                                }),
                            }),
                        ],
                    });
                },
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: a } = t;
                    return (0, n.jsx)("div", {
                        ref: u,
                        className: R.hZ,
                        children: (0, n.jsx)(E.m, {
                            text: c,
                            children: (0, n.jsx)(I.K, {
                                icon: P.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": c,
                                "aria-haspopup": "menu",
                                "aria-expanded": a,
                                onClick: l,
                            }),
                        }),
                    });
                },
            }),
        ],
    });
}
var w = l(557744),
    F = l(223347),
    B = l(822313),
    z = l(359589),
    L = l(722701),
    M = l(811587),
    U = l(79733),
    O = l(297264),
    D = l(821609),
    Z = l(44255),
    G = l(303345),
    H = l(416473);
function V(e) {
    let { projectId: t, canEdit: l } = e,
        s = (function (e, t) {
            let l = (0, r.bG)([m.default], () => "open" === m.default.getConnState(e), [e]);
            a.useEffect(() => {
                t && (0, m.ensureConnection)(e);
            }, [e, t]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, x] = a.useState(null),
                [g, h] = a.useState(null),
                [b, C] = a.useState(0),
                S = a.useRef(!1),
                k = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!t || !l) return;
                let n = k.current,
                    a = ++n.value;
                return (
                    (0, H.fi)(e)
                        .then((e) => {
                            k.current.value === a && (i(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            k.current.value === a && (x(v.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, t, l, b]);
            let y = a.useCallback(() => {
                    (u(!0), x(null), C((e) => e + 1));
                }, []),
                A = a.useCallback(async () => {
                    if (!t || !c || S.current) return;
                    S.current = !0;
                    let l = ++k.current.value;
                    (f(!0), x(null), h(null));
                    try {
                        let t = await (0, H.MN)(e);
                        if (k.current.value !== l) return;
                        (i(t), h(v.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        k.current.value === l && x(e instanceof G.A ? e.message : v.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), k.current.value === l && f(!1));
                    }
                }, [t, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: p, status: g, retry: y, remove: A };
        })(t, l),
        u = a.useId();
    return !l || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(O.D, { id: u, variant: "heading-md/semibold", children: v.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: v.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: v.intl.string(j.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, Z.Dt)(s.saved).map((e, t) =>
                                            (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, t),
                                        ),
                                        (0, n.jsx)(D.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: v.intl.string(j.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, i.A)({
                                                    title: v.intl.string(j.default["Tw/KaB"]),
                                                    subtitle: v.intl.string(j.default.qr1iIe),
                                                    confirmText: v.intl.string(j.default.J7ZMMf),
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
                      : (0, n.jsx)(D.$, {
                            type: "button",
                            variant: "secondary",
                            text: v.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var q = l(11120);
async function X(e) {
    let { appInvalid: t, submitApp: l, submitProject: n } = e;
    if (t) return { saved: !1, failedTab: "app" };
    let [a, r] = await Promise.all([n?.() ?? null, l()]);
    return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
}
var J = l(193249),
    K = l(890497),
    Q = l(904363),
    W = l(540338),
    $ = l(503698),
    Y = l.n($),
    ee = l(750943),
    et = l(22231),
    el = l(95477),
    en = l(103557),
    ea = l(946274),
    er = l(951178),
    ei = l(535466),
    es = l(154600);
function eu(e) {
    let { iconURL: t, disabled: l, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == t;
    return (0, n.jsxs)("div", {
        className: es.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: Y()(es.Vs, { [es.A6]: u }),
                "aria-label": v.intl.string(u ? v.t["MsUY/S"] : v.t["6yrpFR"]),
                disabled: l,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(ee.X, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: es.uP, src: t, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: es.Jx,
                                  children: (0, n.jsx)(et.PencilIcon, {
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
                filters: [{ name: v.intl.string(v.t["Sp2NF+"]), extensions: ei.En }],
                maxFileSizeBytes: ei.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(v.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ec(e, t, l) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, t) {
            let l = t.offsetHeight;
            for (let n = t; null != n && n !== e; n = n.offsetParent) l += n.offsetTop;
            return l;
        })(t, l)}px`,
    );
}
function ed(e) {
    let t,
        l,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: p,
            disabled: x = !1,
        } = e,
        [m, g] = a.useState(null),
        { rowRef: h, fieldRef: b } =
            ((t = a.useRef(null)),
            (l = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = t.current,
                    n = l.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ec(e, n, a);
                let r = new ResizeObserver(() => ec(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
            }, []),
            { rowRef: t, fieldRef: l });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: h,
                        className: es.S7,
                        children: [
                            (0, n.jsx)(eu, { iconURL: r, disabled: x, onChange: i, onError: g }),
                            (0, n.jsx)("div", {
                                ref: b,
                                className: es.yD,
                                children: (0, n.jsx)(el.k, {
                                    label: v.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: er.eq,
                                    disabled: x,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != m
                        ? (0, n.jsx)(f.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: m,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(en.f, {
                label: v.intl.string(j.default.ynaGa1),
                placeholder: v.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: p,
                maxLength: er.HR,
                disabled: x,
            }),
        ],
    });
}
l(938796);
var eo = l(862026),
    ef = l(709753),
    ep = l(961553),
    ex = l(502707),
    em = l(944142),
    eg = l(788493),
    eh = l(532247),
    ej = l(371169),
    ev = l(426035),
    eb = l(246338),
    eC = l(277085),
    eS = l(453430);
let ek = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function ey(e) {
    let {
            projectId: t,
            guildId: l,
            initialTab: C,
            scopeKeys: S,
            note: k,
            notifyAgent: y,
            isPreview: A,
            publishOptions: E,
            transitionState: I,
            onClose: P,
        } = e,
        _ = (0, r.bG)([g.Ay], () => g.Ay.getProject(t), [t]),
        R = (0, r.bG)([w.A], () => w.A.getModelSettings(t), [t]),
        N = (0, r.bG)([m.default], () => "open" === m.default.getConnState(t), [t]),
        F = null != _ && (0, g.PV)(_),
        B = null != _ && (0, g.jf)(_),
        z = (function (e, t) {
            let { readOnly: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, Q.A)(t),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: p,
                    hostApproval: x,
                    name: m,
                    nameError: h,
                    nameChanged: b,
                    isPublic: C,
                    isGuildCollaboration: S,
                    selectedRoleIds: k,
                    supportsVisibility: y,
                    supportsCollaboration: A,
                    supportsCollaboratorRoles: E,
                    checkingAppInGuild: I,
                    saving: P,
                    selectionError: _,
                    saveError: R,
                    experimentalError: T,
                    canSave: N,
                    handleIconChange: w,
                    handleNameChange: F,
                    handleDescriptionChange: B,
                    handleFlagChange: z,
                    handleLiveReloadChange: L,
                    handleRoleSelectionChange: M,
                    handleSmartContextChange: O,
                    handleRequireHostApprovalChange: D,
                    submit: Z,
                } = (function (e, t) {
                    var l;
                    let n,
                        i = (0, r.bG)([g.Ay], () => g.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let t = (0, r.bG)([em.A], () => em.A.getLiveReload(e), [e]),
                                l = (0, ex.A)(e),
                                [n, i] = a.useState(null),
                                [s, u] = a.useState(null);
                            null != s && t !== s.before && u(null);
                            let c = null != s && t === s.before ? s.enabled : t?.enabled;
                            null != n && n === c && i(null);
                            let d = null != t && null != n && n !== c,
                                o = a.useCallback(
                                    () =>
                                        !d ||
                                        null == n ||
                                        (!!(0, eg.c)(e, n) && (u({ enabled: n, before: t }), i(null), !0)),
                                    [d, n, t, e],
                                );
                            return {
                                available: null != t && !l,
                                checked: n ?? c ?? !1,
                                description: null == t ? "" : (0, eh.oV)(t),
                                changed: d,
                                setChecked: i,
                                save: o,
                            };
                        })(e),
                        u = s.save,
                        c = (0, ep.A)(e),
                        { changes: d, commit: o } = c,
                        f = (0, eo.Q)(e),
                        p = f.save,
                        x = (0, ef._t)(e),
                        m = x.save,
                        h = i?.collaborator_role_ids ?? [],
                        [b, C] = a.useState(i?.name ?? ""),
                        [S, k] = a.useState(null),
                        [y, A] = a.useState(b),
                        [E, I] = a.useState(i?.flags ?? 0),
                        [P, _] = a.useState(() => [...h]),
                        [R, T] = a.useState(!1),
                        [N, w] = a.useState(null),
                        [F, B] = a.useState(null),
                        [z, L] = a.useState(null),
                        [M, O] = a.useState(null),
                        [D, Z] = a.useState(!1),
                        G = a.useRef(null),
                        H = a.useRef(!1),
                        V = y.trim(),
                        q = null != i && (0, er.IU)(i),
                        X = null != i && "user" !== i.install_scope,
                        J = X && null != t && (0, er.RX)(i),
                        { isPublic: K, isGuildCollaboration: Q } = (0, eb.n5)(E),
                        W = null != i && V !== b,
                        $ = q && E !== (S?.flags ?? i?.flags ?? 0),
                        Y =
                            J &&
                            ((l = S?.roleIds ?? h), !((n = new Set(P)).size === l.length && l.every((e) => n.has(e)))),
                        ee = W || $ || Y || c.changed,
                        et = ee || s.changed || f.changed || x.changed,
                        { setIcon: el, setDescription: en } = c,
                        ea = s.setChecked,
                        ei = f.setChecked,
                        es = x.setChecked,
                        eu = a.useCallback(
                            (e) => {
                                (el(e), L(null));
                            },
                            [el],
                        ),
                        ec = a.useCallback(
                            (e) => {
                                (en(e), L(null));
                            },
                            [en],
                        ),
                        ed = a.useCallback((e) => {
                            (A(e), w(null), L(null));
                        }, []),
                        eS = a.useCallback((e, t) => {
                            (I((l) => (t ? l | e : l & ~e)), B(null), L(null));
                        }, []),
                        ek = a.useCallback(
                            (e) => {
                                (ea(e), L(null));
                            },
                            [ea],
                        ),
                        ey = a.useCallback(async () => {
                            if (
                                null == i ||
                                null == t ||
                                null == i.preview_application_id ||
                                null != i.install_scope_setup ||
                                (0, er.Fl)(i) ||
                                G.current === t
                            )
                                return !0;
                            if (H.current) return !1;
                            ((H.current = !0), Z(!0));
                            try {
                                let e = await (0, ev.cC)(i, t);
                                if (!1 !== e) return (!0 === e && (G.current = t), !0);
                                await (0, U.vL)(i.id, t);
                                let l = (await (0, ev.cC)(i, t)) === !0;
                                return (l && (G.current = t), l);
                            } finally {
                                ((H.current = !1), Z(!1));
                            }
                        }, [t, i]),
                        eA = a.useCallback(
                            async (e) => {
                                if (e.length > er.sq)
                                    return void B(v.intl.formatToPlainString(j.default["dH7+/Z"], { max: er.sq }));
                                let t = () => {
                                    (_(e), B(null), L(null));
                                };
                                if (!e.some((e) => !P.includes(e))) return void t();
                                try {
                                    (await ey()) && t();
                                } catch {}
                            },
                            [ey, P],
                        ),
                        eE = a.useCallback(
                            (e) => {
                                (ei(e), O(null));
                            },
                            [ei],
                        ),
                        eI = a.useCallback(
                            (e) => {
                                (es(e), O(null));
                            },
                            [es],
                        ),
                        eP = a.useCallback(async () => {
                            if (null == i || !et || R) return null;
                            let l = W ? (0, eC.p)(V) : null;
                            if (null != l) return (w(l), "project");
                            let n = { ...d };
                            (W && (n.name = V),
                                $ && (n.flags = E),
                                Y && (n.collaborator_role_ids = [...P].sort()),
                                null == i.guild_id && null != t && (Y || ($ && Q)) && (n.guild_id = t),
                                T(!0),
                                L(null),
                                O(null));
                            try {
                                if ((ee && (await (0, ej.CW)(e, n), C(V), k({ flags: E, roleIds: [...P] }), o()), !u()))
                                    return (L(v.intl.string(j.default.XzkNBw)), "project");
                                if (!p() || !m()) return (O(v.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (L(v.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                T(!1);
                            }
                        }, [o, E, $, t, et, d, Q, W, i, e, ee, Y, m, u, p, R, P, V]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: x,
                        name: y,
                        nameError: N,
                        nameChanged: W,
                        isPublic: K,
                        isGuildCollaboration: Q,
                        selectedRoleIds: P,
                        supportsVisibility: q,
                        supportsCollaboration: X,
                        supportsCollaboratorRoles: J,
                        checkingAppInGuild: D,
                        saving: R,
                        selectionError: F,
                        saveError: z,
                        experimentalError: M,
                        canSave: et && "" !== V,
                        handleIconChange: eu,
                        handleNameChange: ed,
                        handleDescriptionChange: ec,
                        handleFlagChange: eS,
                        handleLiveReloadChange: ek,
                        handleRoleSelectionChange: eA,
                        ensureAppInGuild: ey,
                        handleSmartContextChange: eE,
                        handleRequireHostApprovalChange: eI,
                        submit: eP,
                    };
                })(e, t),
                G = P || l;
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        l
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: v.intl.string(j.default.s7VnVF),
                              })
                            : null,
                        (0, n.jsx)(ed, {
                            iconURL: u,
                            onIconChange: w,
                            name: m,
                            nameError: h,
                            onNameChange: F,
                            description: c,
                            onDescriptionChange: B,
                            disabled: G,
                        }),
                        y
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.ujIxRm),
                                  description: v.intl.string(j.default.gT8zk1),
                                  checked: C,
                                  disabled: G,
                                  onChange: (e) => z(er.Zh.PUBLIC, e),
                              })
                            : null,
                        y && A
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.lVvR4E),
                                  description: v.intl.string(j.default.SQZGoV),
                                  checked: S,
                                  disabled: G,
                                  onChange: (e) => z(er.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: G,
                                  onChange: L,
                              })
                            : null,
                        E
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(K.Z, {
                                          selectionMode: "multiple",
                                          label: v.intl.string(j.default["pO3+p5"]),
                                          placeholder: v.intl.string(j.default.gvL7QS),
                                          value: k,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: G || !S || I,
                                          "aria-invalid": null != _,
                                          "aria-errormessage": null != _ ? s : void 0,
                                          onSelectionChange: M,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: v.intl.formatToPlainString(j.default.g5I05P, {
                                              count: k.length,
                                              max: er.sq,
                                          }),
                                      }),
                                      S
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: v.intl.string(j.default.nZw5r9),
                                            }),
                                      null != _
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: _,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != R
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: R,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(J.d, {
                            label: v.intl.string(j.default["4liZ45"]),
                            description: v.intl.string(j.default.I5cl7p),
                            checked: p.checked,
                            disabled: P,
                            onChange: O,
                        }),
                        (0, n.jsx)(J.d, {
                            label: v.intl.string(j.default.mpjaVm),
                            description: v.intl.string(j.default["2PxChh"]),
                            checked: x.checked,
                            disabled: P,
                            onChange: D,
                        }),
                        (0, n.jsx)(W.u, { projectId: e }),
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
                canSave: N,
                saving: P,
                nameChanged: b,
                submit: Z,
            };
        })(t, _?.guild_id ?? l ?? void 0, { readOnly: !F }),
        O = (function (e, t) {
            let [l, n] = a.useState(b),
                [i, s] = a.useState(!1);
            a.useEffect(() => {
                if (!t) return;
                let l = !0;
                return (
                    (async function () {
                        try {
                            let t = await (0, h.vk)(e);
                            l && n(t);
                        } catch {}
                    })(),
                    () => {
                        l = !1;
                    }
                );
            }, [e, t]);
            let u = (0, r.cf)(
                    [g.Ay],
                    () =>
                        Object.fromEntries(
                            l.map((e) => {
                                let { project_id: t } = e;
                                return [t, g.Ay.getProject(t)];
                            }),
                        ),
                    [l],
                ),
                c = a.useMemo(
                    () =>
                        Object.fromEntries(
                            l.map((e) => {
                                let { project_id: t } = e;
                                return [
                                    t,
                                    u[t]?.name ?? v.intl.formatToPlainString(j.default.HHCa93, { projectId: t }),
                                ];
                            }),
                        ),
                    [l, u],
                );
            return {
                callers: l,
                projects: u,
                names: c,
                failed: i,
                setBuild: a.useCallback(
                    async (t, l) => {
                        s(!1);
                        try {
                            await (0, h.Ol)(e, t, l);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.map((e) => (e.project_id === t ? { ...e, build: l } : e)));
                    },
                    [e],
                ),
                remove: a.useCallback(
                    async (t) => {
                        s(!1);
                        try {
                            await (0, h.pc)(e, t);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.filter((e) => e.project_id !== t));
                    },
                    [e],
                ),
            };
        })(t, B),
        [D, Z] = a.useState(null);
    return (0, n.jsx)(q.A, {
        projectId: t,
        scopeKeys: S,
        note: k,
        notifyAgent: y,
        isPreview: A,
        children: (e) => {
            let l = [];
            ((F || B) && l.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && l.push("app"),
                e.secretCount > 0 && l.push("secrets"),
                R?.tierSettings != null && l.push("model"),
                O.callers.length > 0 && l.push("linked"),
                F && l.push("experimental"));
            let a = [D, C].find((e) => null != e && l.includes(e)) ?? l[0],
                r = e.isScoped,
                m = !F && !r && !l.includes("app") && !l.includes("secrets"),
                h = (F && z.saving) || e.saving,
                b = (function (e) {
                    let { appCanSave: t, appInvalid: l, projectCanSave: n } = e;
                    return !l && (t || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && F && z.canSave });
            async function S(n) {
                if ((n.preventDefault(), !b || h)) {
                    e.invalid && l.includes("app") && Z("app");
                    return;
                }
                let s = !r && F && z.nameChanged,
                    u = await X({
                        appInvalid: e.invalid,
                        submitApp: e.submit,
                        submitProject: r || !F ? null : z.submit,
                    });
                if (u.saved) {
                    (await P(),
                        s &&
                            null != E &&
                            (function (e, t) {
                                let l = g.Ay.getProject(e);
                                if (null == l || !(0, U.qF)(l)) return;
                                let n = L.A.getPublishStatus(e);
                                null != n &&
                                    (0, M.lE)(n.publishState) &&
                                    (0, i.A)({
                                        title: v.intl.string(j.default["48pvCR"]),
                                        subtitle: v.intl.string(j.default["Xk+JsJ"]),
                                        confirmText: v.intl.string(j.default.guoHDk),
                                        cancelText: v.intl.string(j.default.HSyPrY),
                                        variant: "primary",
                                        onConfirm: () => {
                                            (0, U.FZ)(e, "name_prompt", t).catch(() => {});
                                        },
                                    });
                            })(t, E));
                    return;
                }
                "app" !== u.failedTab ? Z(u.failedTab) : "secrets" !== a && Z(l.includes("app") ? "app" : "secrets");
            }
            let k = v.intl.string(r ? j.default["jZjP+I"] : j.default.I2XSKe);
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
                                r || l.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": v.intl.string(j.default["2dtUiI"]),
                                          children: l.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: v.intl.string(ek[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eS.f,
                                          children: [z.fields, (0, n.jsx)(V, { projectId: t, canEdit: B }, t)],
                                      }),
                                r || "linked" !== a ? null : (0, n.jsx)(T, { linkedApps: O }),
                                r || "experimental" !== a ? null : z.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || R?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eA, { projectId: t, modelSettings: R, tierSettings: R.tierSettings }),
                                r || null != a
                                    ? null
                                    : N
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: v.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eS.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(x.H, {
                            actionsFullWidth: !0,
                            actions: m
                                ? [{ text: v.intl.string(v.t.cpT0Cq), variant: "secondary", onClick: P }]
                                : [
                                      {
                                          text: v.intl.string(v.t["ETE/oC"]),
                                          variant: "secondary",
                                          onClick: P,
                                          disabled: h,
                                      },
                                      {
                                          text: v.intl.string(r ? j.default.A7dQd9 : v.t["R3BPH+"]),
                                          variant: "primary",
                                          type: "submit",
                                          loading: h,
                                          disabled: !b,
                                      },
                                  ],
                        }),
                    ],
                }),
            });
        },
    });
}
function eA(e) {
    let { projectId: t, modelSettings: l, tierSettings: i } = e,
        s = (0, r.bG)([m.default], () => "open" === m.default.getConnState(t), [t]),
        u = a.useCallback((e) => (0, F.X)(t, e), [t]),
        [c, d] = (0, B.A)(i, u);
    return (0, n.jsx)(z.A, { settings: c, tiers: l.tiers, choices: l.choices, disabled: !s, onChange: d });
}
