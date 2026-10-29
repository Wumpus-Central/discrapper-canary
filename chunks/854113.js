(t.d(l, { default: () => ey }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(17928),
    i = t(314116),
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
    j = t(87501),
    v = t(105292);
let b = [];
var C = t(323384),
    S = t(661531),
    k = t(265872),
    y = t(980707),
    E = t(477782),
    A = t(866665),
    I = t(408278),
    P = t(365199),
    _ = t(719564),
    T = t(843313);
function N(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: r, failed: s, setBuild: u, remove: c } = l;
    return (0, n.jsx)("div", {
        className: T.Mf,
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
                    children: t.map((e) => {
                        let l = r[e.project_id];
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
                                        void (0, i.A)({
                                            title: v.intl.formatToPlainString(j.default.zSfIvv, { name: l }),
                                            subtitle: v.intl.formatToPlainString(j.default["7TX+mR"], { name: l }),
                                            confirmText: v.intl.string(j.default.vDZEGQ),
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
                          children: v.intl.string(j.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let { caller: l, project: t, name: r, onBuildChange: i, onRemove: s } = e,
        u = a.useRef(null),
        c = v.intl.formatToPlainString(j.default.bzMlmh, { name: r });
    return (0, n.jsxs)("div", {
        className: T.nM,
        children: [
            null != t
                ? (0, n.jsx)(_.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: T.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: S.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: T.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-md/medium", lineClamp: 1, children: r }),
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
                                label: v.intl.string(j.default.Odrcmq),
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
                                                (i(e), t());
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
                                    label: v.intl.string(j.default.bN1S9T),
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
                        className: T.hZ,
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
    F = t(223347),
    z = t(822313),
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
            let t = (0, r.bG)([x.default], () => "open" === x.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, x.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [g, h] = a.useState(null),
                [b, C] = a.useState(0),
                S = a.useRef(!1),
                k = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = k.current,
                    a = ++n.value;
                return (
                    (0, V.fi)(e)
                        .then((e) => {
                            k.current.value === a && (i(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            k.current.value === a && (m(v.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, b]);
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
                        (i(l), h(v.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        k.current.value === t && m(e instanceof H.A ? e.message : v.intl.string(j.default.i5Xp1l));
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
                  (0, n.jsx)(D.D, { id: u, variant: "heading-md/semibold", children: v.intl.string(j.default.ptzKKH) }),
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
                                        (0, Z.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(O.$, {
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
                      : (0, n.jsx)(O.$, {
                            type: "button",
                            variant: "secondary",
                            text: v.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var G = t(11120);
async function X(e) {
    let { appInvalid: l, submitApp: t, submitProject: n } = e;
    if (l) return { saved: !1, failedTab: "app" };
    let [a, r] = await Promise.all([n?.() ?? null, t()]);
    return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
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
    er = t(951178),
    ei = t(535466),
    es = t(154600);
function eu(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: es.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: Y()(es.Vs, { [es.A6]: u }),
                "aria-label": v.intl.string(u ? v.t["MsUY/S"] : v.t["6yrpFR"]),
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
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: p,
            disabled: m = !1,
        } = e,
        [x, g] = a.useState(null),
        { rowRef: h, fieldRef: b } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ec(e, n, a);
                let r = new ResizeObserver(() => ec(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
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
                            (0, n.jsx)(eu, { iconURL: r, disabled: m, onChange: i, onError: g }),
                            (0, n.jsx)("div", {
                                ref: b,
                                className: es.yD,
                                children: (0, n.jsx)(et.k, {
                                    label: v.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: er.eq,
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
                label: v.intl.string(j.default.ynaGa1),
                placeholder: v.intl.string(j.default["I+3UTL"]),
                value: d,
                onChange: p,
                maxLength: er.HR,
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
    ev = t(426035),
    eb = t(246338),
    eC = t(277085),
    eS = t(453430);
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
        _ = (0, r.bG)([g.Ay], () => g.Ay.getProject(l), [l]),
        T = (0, r.bG)([w.A], () => w.A.getModelSettings(l), [l]),
        R = (0, r.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        F = null != _ && (0, g.PV)(_),
        z = null != _ && (0, g.jf)(_),
        B = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, K.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: p,
                    hostApproval: m,
                    name: x,
                    nameError: h,
                    nameChanged: b,
                    isPublic: C,
                    isGuildCollaboration: S,
                    selectedRoleIds: k,
                    supportsVisibility: y,
                    supportsCollaboration: E,
                    supportsCollaboratorRoles: A,
                    checkingAppInGuild: I,
                    saving: P,
                    selectionError: _,
                    saveError: T,
                    experimentalError: N,
                    canSave: R,
                    handleIconChange: w,
                    handleNameChange: F,
                    handleDescriptionChange: z,
                    handleFlagChange: B,
                    handleLiveReloadChange: L,
                    handleRoleSelectionChange: U,
                    handleSmartContextChange: D,
                    handleRequireHostApprovalChange: O,
                    submit: Z,
                } = (function (e, l) {
                    var t;
                    let n,
                        i = (0, r.bG)([g.Ay], () => g.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([ex.A], () => ex.A.getLiveReload(e), [e]),
                                t = (0, em.A)(e),
                                [n, i] = a.useState(null),
                                [s, u] = a.useState(null);
                            null != s && l !== s.before && u(null);
                            let c = null != s && l === s.before ? s.enabled : l?.enabled;
                            null != n && n === c && i(null);
                            let d = null != l && null != n && n !== c,
                                o = a.useCallback(
                                    () =>
                                        !d ||
                                        null == n ||
                                        (!!(0, eg.c)(e, n) && (u({ enabled: n, before: l }), i(null), !0)),
                                    [d, n, l, e],
                                );
                            return {
                                available: null != l && !t,
                                checked: n ?? c ?? !1,
                                description: null == l ? "" : (0, eh.oV)(l),
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
                        m = (0, ef._t)(e),
                        x = m.save,
                        h = i?.collaborator_role_ids ?? [],
                        [b, C] = a.useState(i?.name ?? ""),
                        [S, k] = a.useState(null),
                        [y, E] = a.useState(b),
                        [A, I] = a.useState(i?.flags ?? 0),
                        [P, _] = a.useState(() => [...h]),
                        [T, N] = a.useState(!1),
                        [R, w] = a.useState(null),
                        [F, z] = a.useState(null),
                        [B, L] = a.useState(null),
                        [U, D] = a.useState(null),
                        [O, Z] = a.useState(!1),
                        H = a.useRef(null),
                        V = a.useRef(!1),
                        q = y.trim(),
                        G = null != i && (0, er.IU)(i),
                        X = null != i && "user" !== i.install_scope,
                        J = X && null != l && (0, er.RX)(i),
                        { isPublic: Q, isGuildCollaboration: K } = (0, eb.n5)(A),
                        W = null != i && q !== b,
                        $ = G && A !== (S?.flags ?? i?.flags ?? 0),
                        Y =
                            J &&
                            ((t = S?.roleIds ?? h), !((n = new Set(P)).size === t.length && t.every((e) => n.has(e)))),
                        ee = W || $ || Y || c.changed,
                        el = ee || s.changed || f.changed || m.changed,
                        { setIcon: et, setDescription: en } = c,
                        ea = s.setChecked,
                        ei = f.setChecked,
                        es = m.setChecked,
                        eu = a.useCallback(
                            (e) => {
                                (et(e), L(null));
                            },
                            [et],
                        ),
                        ec = a.useCallback(
                            (e) => {
                                (en(e), L(null));
                            },
                            [en],
                        ),
                        ed = a.useCallback((e) => {
                            (E(e), w(null), L(null));
                        }, []),
                        eS = a.useCallback((e, l) => {
                            (I((t) => (l ? t | e : t & ~e)), z(null), L(null));
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
                                null == l ||
                                null == i.preview_application_id ||
                                null != i.install_scope_setup ||
                                (0, er.Fl)(i) ||
                                H.current === l
                            )
                                return !0;
                            if (V.current) return !1;
                            ((V.current = !0), Z(!0));
                            try {
                                let e = await (0, ev.cC)(i, l);
                                if (!1 !== e) return (!0 === e && (H.current = l), !0);
                                await (0, M.vL)(i.id, l);
                                let t = (await (0, ev.cC)(i, l)) === !0;
                                return (t && (H.current = l), t);
                            } finally {
                                ((V.current = !1), Z(!1));
                            }
                        }, [l, i]),
                        eE = a.useCallback(
                            async (e) => {
                                if (e.length > er.sq)
                                    return void z(v.intl.formatToPlainString(j.default["dH7+/Z"], { max: er.sq }));
                                let l = () => {
                                    (_(e), z(null), L(null));
                                };
                                if (!e.some((e) => !P.includes(e))) return void l();
                                try {
                                    (await ey()) && l();
                                } catch {}
                            },
                            [ey, P],
                        ),
                        eA = a.useCallback(
                            (e) => {
                                (ei(e), D(null));
                            },
                            [ei],
                        ),
                        eI = a.useCallback(
                            (e) => {
                                (es(e), D(null));
                            },
                            [es],
                        ),
                        eP = a.useCallback(async () => {
                            if (null == i || !el || T) return null;
                            let t = W ? (0, eC.p)(q) : null;
                            if (null != t) return (w(t), "project");
                            let n = { ...d };
                            (W && (n.name = q),
                                $ && (n.flags = A),
                                Y && (n.collaborator_role_ids = [...P].sort()),
                                null == i.guild_id && null != l && (Y || ($ && K)) && (n.guild_id = l),
                                N(!0),
                                L(null),
                                D(null));
                            try {
                                if ((ee && (await (0, ej.CW)(e, n), C(q), k({ flags: A, roleIds: [...P] }), o()), !u()))
                                    return (L(v.intl.string(j.default.XzkNBw)), "project");
                                if (!p() || !x()) return (D(v.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (L(v.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                N(!1);
                            }
                        }, [o, A, $, l, el, d, K, W, i, e, ee, Y, x, u, p, T, P, q]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: m,
                        name: y,
                        nameError: R,
                        nameChanged: W,
                        isPublic: Q,
                        isGuildCollaboration: K,
                        selectedRoleIds: P,
                        supportsVisibility: G,
                        supportsCollaboration: X,
                        supportsCollaboratorRoles: J,
                        checkingAppInGuild: O,
                        saving: T,
                        selectionError: F,
                        saveError: B,
                        experimentalError: U,
                        canSave: el && "" !== q,
                        handleIconChange: eu,
                        handleNameChange: ed,
                        handleDescriptionChange: ec,
                        handleFlagChange: eS,
                        handleLiveReloadChange: ek,
                        handleRoleSelectionChange: eE,
                        ensureAppInGuild: ey,
                        handleSmartContextChange: eA,
                        handleRequireHostApprovalChange: eI,
                        submit: eP,
                    };
                })(e, l),
                H = P || t;
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: v.intl.string(j.default.s7VnVF),
                              })
                            : null,
                        (0, n.jsx)(ed, {
                            iconURL: u,
                            onIconChange: w,
                            name: x,
                            nameError: h,
                            onNameChange: F,
                            description: c,
                            onDescriptionChange: z,
                            disabled: H,
                        }),
                        y
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.ujIxRm),
                                  description: v.intl.string(j.default.gT8zk1),
                                  checked: C,
                                  disabled: H,
                                  onChange: (e) => B(er.Zh.PUBLIC, e),
                              })
                            : null,
                        y && E
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.lVvR4E),
                                  description: v.intl.string(j.default.SQZGoV),
                                  checked: S,
                                  disabled: H,
                                  onChange: (e) => B(er.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(J.d, {
                                  label: v.intl.string(j.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: H,
                                  onChange: L,
                              })
                            : null,
                        A
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(Q.Z, {
                                          selectionMode: "multiple",
                                          label: v.intl.string(j.default["pO3+p5"]),
                                          placeholder: v.intl.string(j.default.gvL7QS),
                                          value: k,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: H || !S || I,
                                          "aria-invalid": null != _,
                                          "aria-errormessage": null != _ ? s : void 0,
                                          onSelectionChange: U,
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
                            label: v.intl.string(j.default["4liZ45"]),
                            description: v.intl.string(j.default.I5cl7p),
                            checked: p.checked,
                            disabled: P,
                            onChange: D,
                        }),
                        (0, n.jsx)(J.d, {
                            label: v.intl.string(j.default.mpjaVm),
                            description: v.intl.string(j.default["2PxChh"]),
                            checked: m.checked,
                            disabled: P,
                            onChange: O,
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
                canSave: R,
                saving: P,
                nameChanged: b,
                submit: Z,
            };
        })(l, _?.guild_id ?? t ?? void 0, { readOnly: !F }),
        D = (function (e, l) {
            let [t, n] = a.useState(b),
                [i, s] = a.useState(!1);
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
            let u = (0, r.cf)(
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
                                    u[l]?.name ?? v.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [t, u],
                );
            return {
                callers: t,
                projects: u,
                names: c,
                failed: i,
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
        })(l, z),
        [O, Z] = a.useState(null);
    return (0, n.jsx)(G.A, {
        projectId: l,
        scopeKeys: S,
        note: k,
        notifyAgent: y,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((F || z) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                T?.tierSettings != null && t.push("model"),
                D.callers.length > 0 && t.push("linked"),
                F && t.push("experimental"));
            let a = [O, C].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                x = !F && !r && !t.includes("app") && !t.includes("secrets"),
                h = (F && B.saving) || e.saving,
                b = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && F && B.canSave });
            async function S(n) {
                if ((n.preventDefault(), !b || h)) {
                    e.invalid && t.includes("app") && Z("app");
                    return;
                }
                let s = !r && F && B.nameChanged,
                    u = await X({
                        appInvalid: e.invalid,
                        submitApp: e.submit,
                        submitProject: r || !F ? null : B.submit,
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
                                    (0, i.A)({
                                        title: v.intl.string(j.default["48pvCR"]),
                                        subtitle: v.intl.string(j.default["Xk+JsJ"]),
                                        confirmText: v.intl.string(j.default.guoHDk),
                                        cancelText: v.intl.string(j.default.HSyPrY),
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
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": v.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
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
                                          children: [B.fields, (0, n.jsx)(q, { projectId: l, canEdit: z }, l)],
                                      }),
                                r || "linked" !== a ? null : (0, n.jsx)(N, { linkedApps: D }),
                                r || "experimental" !== a ? null : B.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || T?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eE, { projectId: l, modelSettings: T, tierSettings: T.tierSettings }),
                                r || null != a
                                    ? null
                                    : R
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: v.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eS.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(m.H, {
                            actionsFullWidth: !0,
                            actions: x
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
function eE(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, F.X)(l, e), [l]),
        [c, d] = (0, z.A)(i, u);
    return (0, n.jsx)(B.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
