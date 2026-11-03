(t.d(l, { default: () => ek }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(17928),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    d = t(430993),
    c = t(761508),
    o = t(331322),
    f = t(834730),
    p = t(289873),
    m = t(696208),
    g = t(322227),
    h = t(260498),
    x = t(360047),
    b = t(809526),
    j = t(105292);
let v = [];
var C = t(323384),
    y = t(661531),
    S = t(265872),
    k = t(980707),
    E = t(477782),
    A = t(866665),
    I = t(408278),
    P = t(365199),
    _ = t(845079),
    T = t(843313);
function N(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: r, failed: s, setBuild: u, remove: d } = l;
    return (0, n.jsx)("div", {
        className: T.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: j.intl.string(b.default["6c2rjv"]),
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
                                            title: j.intl.formatToPlainString(b.default.zSfIvv, { name: l }),
                                            subtitle: j.intl.formatToPlainString(b.default["7TX+mR"], { name: l }),
                                            confirmText: j.intl.string(b.default.vDZEGQ),
                                            variant: "critical",
                                            onConfirm: () => d(t),
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
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: j.intl.string(b.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let { caller: l, project: t, name: r, onBuildChange: i, onRemove: s } = e,
        u = a.useRef(null),
        d = j.intl.formatToPlainString(b.default.bzMlmh, { name: r });
    return (0, n.jsxs)("div", {
        className: T.nM,
        children: [
            null != t
                ? (0, n.jsx)(_.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: T.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: y.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: T.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "body-md/medium", lineClamp: 1, children: r }),
                    (0, n.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, x.hU)(l.build),
                    }),
                ],
            }),
            (0, n.jsx)(S.Y, {
                targetElementRef: u,
                position: "bottom",
                align: "right",
                animation: S.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsxs)(k.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-linked-app-${l.project_id}`,
                        "aria-label": d,
                        onClose: t,
                        onSelect: t,
                        children: [
                            (0, n.jsx)(E.rX, {
                                label: j.intl.string(b.default.Odrcmq),
                                children: x.Hi.map((e) =>
                                    (0, n.jsx)(
                                        E.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${l.project_id}`,
                                            label: (0, x.hU)(e),
                                            subtext: (0, x.Vq)(e),
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
                                    label: j.intl.string(b.default.bN1S9T),
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
                            text: d,
                            children: (0, n.jsx)(I.K, {
                                icon: P.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": d,
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
    M = t(79733),
    D = t(534514),
    O = t(821609),
    Z = t(44255),
    H = t(303345),
    V = t(416473);
function q(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([g.default], () => "open" === g.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, g.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [d, c] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [h, x] = a.useState(null),
                [v, C] = a.useState(0),
                y = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, V.fi)(e)
                        .then((e) => {
                            S.current.value === a && (i(e), c(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (m(j.intl.string(b.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let k = a.useCallback(() => {
                    (u(!0), m(null), C((e) => e + 1));
                }, []),
                E = a.useCallback(async () => {
                    if (!l || !d || y.current) return;
                    y.current = !0;
                    let t = ++S.current.value;
                    (f(!0), m(null), x(null));
                    try {
                        let l = await (0, V.MN)(e);
                        if (S.current.value !== t) return;
                        (i(l), x(j.intl.string(b.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && m(e instanceof H.A ? e.message : j.intl.string(b.default.i5Xp1l));
                    } finally {
                        ((y.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: o, error: p, status: h, retry: k, remove: E };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(D.D, { id: u, variant: "heading-sm/semibold", children: j.intl.string(b.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            role: "status",
                            children: j.intl.string(b.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: j.intl.string(b.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, Z.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(O.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: j.intl.string(b.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, i.A)({
                                                    title: j.intl.string(b.default["Tw/KaB"]),
                                                    subtitle: j.intl.string(b.default.qr1iIe),
                                                    confirmText: j.intl.string(b.default.J7ZMMf),
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
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "body-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(O.$, {
                            type: "button",
                            variant: "secondary",
                            text: j.intl.string(b.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var G = t(702374);
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
                "aria-label": j.intl.string(u ? j.t["MsUY/S"] : j.t["6yrpFR"]),
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
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: ei.En }],
                maxFileSizeBytes: ei.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(j.intl.string(b.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ed(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function ec(e) {
    let l,
        t,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: d,
            description: c,
            onDescriptionChange: p,
            disabled: m = !1,
        } = e,
        [g, h] = a.useState(null),
        { rowRef: x, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ed(e, n, a);
                let r = new ResizeObserver(() => ed(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: x,
                        className: es.S7,
                        children: [
                            (0, n.jsx)(eu, { iconURL: r, disabled: m, onChange: i, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: es.yD,
                                children: (0, n.jsx)(et.k, {
                                    label: j.intl.string(b.default.GWBCF9),
                                    value: s,
                                    onChange: d,
                                    error: u,
                                    maxLength: er.eq,
                                    disabled: m,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != g
                        ? (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: g,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(en.f, {
                label: j.intl.string(b.default.ynaGa1),
                placeholder: j.intl.string(b.default["I+3UTL"]),
                value: c,
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
    eg = t(944142),
    eh = t(788493),
    ex = t(532247),
    eb = t(371169),
    ej = t(426035),
    ev = t(246338),
    eC = t(277085),
    ey = t(453430);
let eS = {
    project: b.default.W0eQfN,
    app: b.default.lFaJYF,
    secrets: b.default.vDpCPU,
    model: b.default.Rs3qc9,
    linked: b.default.fBEHdq,
    experimental: b.default["0Pe9uw"],
};
function ek(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: y,
            note: S,
            notifyAgent: k,
            isPreview: E,
            publishOptions: A,
            transitionState: I,
            onClose: P,
        } = e,
        _ = (0, r.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        T = (0, r.bG)([w.A], () => w.A.getModelSettings(l), [l]),
        R = (0, r.bG)([g.default], () => "open" === g.default.getConnState(l), [l]),
        F = null != _ && (0, h.PV)(_),
        z = null != _ && (0, h.jf)(_),
        B = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, K.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: d,
                    liveReload: c,
                    smartContext: p,
                    hostApproval: m,
                    name: g,
                    nameError: x,
                    nameChanged: v,
                    isPublic: C,
                    isGuildCollaboration: y,
                    selectedRoleIds: S,
                    supportsVisibility: k,
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
                        i = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([eg.A], () => eg.A.getLiveReload(e), [e]),
                                t = (0, em.A)(e),
                                [n, i] = a.useState(null),
                                [s, u] = a.useState(null);
                            null != s && l !== s.before && u(null);
                            let d = null != s && l === s.before ? s.enabled : l?.enabled;
                            null != n && n === d && i(null);
                            let c = null != l && null != n && n !== d,
                                o = a.useCallback(
                                    () =>
                                        !c ||
                                        null == n ||
                                        (!!(0, eh.c)(e, n) && (u({ enabled: n, before: l }), i(null), !0)),
                                    [c, n, l, e],
                                );
                            return {
                                available: null != l && !t,
                                checked: n ?? d ?? !1,
                                description: null == l ? "" : (0, ex.oV)(l),
                                changed: c,
                                setChecked: i,
                                save: o,
                            };
                        })(e),
                        u = s.save,
                        d = (0, ep.A)(e),
                        { changes: c, commit: o } = d,
                        f = (0, eo.Q)(e),
                        p = f.save,
                        m = (0, ef._t)(e),
                        g = m.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, C] = a.useState(i?.name ?? ""),
                        [y, S] = a.useState(null),
                        [k, E] = a.useState(v),
                        [A, I] = a.useState(i?.flags ?? 0),
                        [P, _] = a.useState(() => [...x]),
                        [T, N] = a.useState(!1),
                        [R, w] = a.useState(null),
                        [F, z] = a.useState(null),
                        [B, L] = a.useState(null),
                        [U, D] = a.useState(null),
                        [O, Z] = a.useState(!1),
                        H = a.useRef(null),
                        V = a.useRef(!1),
                        q = k.trim(),
                        G = null != i && (0, er.IU)(i),
                        X = null != i && "guild" === i.install_scope,
                        J = X && null != l && (0, er.RX)(i),
                        { isPublic: Q, isGuildCollaboration: K } = (0, ev.n5)(A),
                        W = null != i && q !== v,
                        $ = G && A !== (y?.flags ?? i?.flags ?? 0),
                        Y =
                            J &&
                            ((t = y?.roleIds ?? x), !((n = new Set(P)).size === t.length && t.every((e) => n.has(e)))),
                        ee = W || $ || Y || d.changed,
                        el = ee || s.changed || f.changed || m.changed,
                        { setIcon: et, setDescription: en } = d,
                        ea = s.setChecked,
                        ei = f.setChecked,
                        es = m.setChecked,
                        eu = a.useCallback(
                            (e) => {
                                (et(e), L(null));
                            },
                            [et],
                        ),
                        ed = a.useCallback(
                            (e) => {
                                (en(e), L(null));
                            },
                            [en],
                        ),
                        ec = a.useCallback((e) => {
                            (E(e), w(null), L(null));
                        }, []),
                        ey = a.useCallback((e, l) => {
                            (I((t) => (l ? t | e : t & ~e)), z(null), L(null));
                        }, []),
                        eS = a.useCallback(
                            (e) => {
                                (ea(e), L(null));
                            },
                            [ea],
                        ),
                        ek = a.useCallback(async () => {
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
                                let e = await (0, ej.cC)(i, l);
                                if (!1 !== e) return (!0 === e && (H.current = l), !0);
                                await (0, M.vL)(i.id, l);
                                let t = (await (0, ej.cC)(i, l)) === !0;
                                return (t && (H.current = l), t);
                            } finally {
                                ((V.current = !1), Z(!1));
                            }
                        }, [l, i]),
                        eE = a.useCallback(
                            async (e) => {
                                if (e.length > er.sq)
                                    return void z(j.intl.formatToPlainString(b.default["dH7+/Z"], { max: er.sq }));
                                let l = () => {
                                    (_(e), z(null), L(null));
                                };
                                if (!e.some((e) => !P.includes(e))) return void l();
                                try {
                                    (await ek()) && l();
                                } catch {}
                            },
                            [ek, P],
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
                            let n = { ...c };
                            (W && (n.name = q),
                                $ && (n.flags = A),
                                Y && (n.collaborator_role_ids = [...P].sort()),
                                null == i.guild_id && null != l && (Y || ($ && K)) && (n.guild_id = l),
                                N(!0),
                                L(null),
                                D(null));
                            try {
                                if ((ee && (await (0, eb.CW)(e, n), C(q), S({ flags: A, roleIds: [...P] }), o()), !u()))
                                    return (L(j.intl.string(b.default.XzkNBw)), "project");
                                if (!p() || !g()) return (D(j.intl.string(b.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (L(j.intl.string(b.default["9JPr8h"])), "project");
                            } finally {
                                N(!1);
                            }
                        }, [o, A, $, l, el, c, K, W, i, e, ee, Y, g, u, p, T, P, q]);
                    return {
                        iconURL: d.iconURL,
                        description: d.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: m,
                        name: k,
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
                        handleNameChange: ec,
                        handleDescriptionChange: ed,
                        handleFlagChange: ey,
                        handleLiveReloadChange: eS,
                        handleRoleSelectionChange: eE,
                        ensureAppInGuild: ek,
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
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: j.intl.string(b.default.s7VnVF),
                              })
                            : null,
                        (0, n.jsx)(ec, {
                            iconURL: u,
                            onIconChange: w,
                            name: g,
                            nameError: x,
                            onNameChange: F,
                            description: d,
                            onDescriptionChange: z,
                            disabled: H,
                        }),
                        k
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.ujIxRm),
                                  description: j.intl.string(b.default.gT8zk1),
                                  checked: C,
                                  disabled: H,
                                  onChange: (e) => B(er.Zh.PUBLIC, e),
                              })
                            : null,
                        k && E
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.lVvR4E),
                                  description: j.intl.string(b.default.SQZGoV),
                                  checked: y,
                                  disabled: H,
                                  onChange: (e) => B(er.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: H,
                                  onChange: L,
                              })
                            : null,
                        A
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: j.intl.string(b.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(Q.Z, {
                                          selectionMode: "multiple",
                                          label: j.intl.string(b.default["pO3+p5"]),
                                          placeholder: j.intl.string(b.default.gvL7QS),
                                          value: S,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: H || !y || I,
                                          "aria-invalid": null != _,
                                          "aria-errormessage": null != _ ? s : void 0,
                                          onSelectionChange: U,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(b.default.g5I05P, {
                                              count: S.length,
                                              max: er.sq,
                                          }),
                                      }),
                                      y
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: j.intl.string(b.default.nZw5r9),
                                            }),
                                      null != _
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
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
                                  variant: "body-xs/normal",
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
                            label: j.intl.string(b.default["4liZ45"]),
                            description: j.intl.string(b.default.I5cl7p),
                            checked: p.checked,
                            disabled: P,
                            onChange: D,
                        }),
                        (0, n.jsx)(J.d, {
                            label: j.intl.string(b.default.mpjaVm),
                            description: j.intl.string(b.default["2PxChh"]),
                            checked: m.checked,
                            disabled: P,
                            onChange: O,
                        }),
                        (0, n.jsx)(W.u, { projectId: e }),
                        null != N
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: N,
                              })
                            : null,
                    ],
                }),
                canSave: R,
                saving: P,
                nameChanged: v,
                submit: Z,
            };
        })(l, _?.guild_id ?? t ?? void 0, { readOnly: !F }),
        D = (function (e, l) {
            let [t, n] = a.useState(v),
                [i, s] = a.useState(!1);
            a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    (async function () {
                        try {
                            let l = await (0, x.vk)(e);
                            t && n(l);
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]);
            let u = (0, r.cf)(
                    [h.Ay],
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [l, h.Ay.getProject(l)];
                            }),
                        ),
                    [t],
                ),
                d = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    u[l]?.name ?? j.intl.formatToPlainString(b.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [t, u],
                );
            return {
                callers: t,
                projects: u,
                names: d,
                failed: i,
                setBuild: a.useCallback(
                    async (l, t) => {
                        s(!1);
                        try {
                            await (0, x.Ol)(e, l, t);
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
                            await (0, x.pc)(e, l);
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
        scopeKeys: y,
        note: S,
        notifyAgent: k,
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
                g = !F && !r && !t.includes("app") && !t.includes("secrets"),
                x = (F && B.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && F && B.canSave });
            async function y(n) {
                if ((n.preventDefault(), !v || x)) {
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
                                let t = h.Ay.getProject(e);
                                if (null == t || !(0, M.qF)(t)) return;
                                let n = L.A.getPublishStatus(e);
                                null != n &&
                                    (0, U.lE)(n.publishState) &&
                                    (0, i.A)({
                                        title: j.intl.string(b.default["48pvCR"]),
                                        subtitle: j.intl.string(b.default["Xk+JsJ"]),
                                        confirmText: j.intl.string(b.default.guoHDk),
                                        cancelText: j.intl.string(b.default.HSyPrY),
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
            let S = j.intl.string(r ? b.default["jZjP+I"] : b.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: y,
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: P,
                    "aria-label": S,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: S }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": j.intl.string(b.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: j.intl.string(eS[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: ey.f,
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
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.string(b.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: ey.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(m.H, {
                            actionsFullWidth: !0,
                            actions: g
                                ? [{ text: j.intl.string(j.t.cpT0Cq), variant: "secondary", onClick: P }]
                                : [
                                      {
                                          text: j.intl.string(j.t["ETE/oC"]),
                                          variant: "secondary",
                                          onClick: P,
                                          disabled: x,
                                      },
                                      {
                                          text: j.intl.string(r ? b.default.A7dQd9 : j.t["R3BPH+"]),
                                          variant: "primary",
                                          type: "submit",
                                          loading: x,
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
function eE(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([g.default], () => "open" === g.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, F.X)(l, e), [l]),
        [d, c] = (0, z.A)(i, u);
    return (0, n.jsx)(B.A, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: c });
}
