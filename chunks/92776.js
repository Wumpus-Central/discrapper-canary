(t.d(l, { default: () => eS }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(855986),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    c = t(430993),
    d = t(761508),
    o = t(331322),
    f = t(834730),
    p = t(289873),
    m = t(696208),
    g = t(540665),
    h = t(260498),
    x = t(360047),
    b = t(191850),
    j = t(792996);
let v = [];
var y = t(323384),
    C = t(646514),
    S = t(265872),
    k = t(165862),
    A = t(477782),
    E = t(866665),
    I = t(408278),
    P = t(365199),
    _ = t(845079),
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
        c = j.intl.formatToPlainString(b.default.bzMlmh, { name: r });
    return (0, n.jsxs)("div", {
        className: T.nM,
        children: [
            null != t
                ? (0, n.jsx)(_.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: T.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(y.k, { size: "md", color: C.A.colors.INTERACTIVE_ICON_DEFAULT }),
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
                        "aria-label": c,
                        onClose: t,
                        onSelect: t,
                        children: [
                            (0, n.jsx)(A.rX, {
                                label: j.intl.string(b.default.Odrcmq),
                                children: x.Hi.map((e) =>
                                    (0, n.jsx)(
                                        A.iD,
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
                            (0, n.jsx)(A.bX, {}),
                            (0, n.jsx)(A.rX, {
                                children: (0, n.jsx)(A.Dr, {
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
                        children: (0, n.jsx)(E.m, {
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
    M = t(826058),
    D = t(534514),
    O = t(821609),
    Z = t(44255),
    V = t(303345),
    G = t(416473);
function H(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([g.Ay], () => "open" === g.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, g.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [h, x] = a.useState(null),
                [v, y] = a.useState(0),
                C = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, G.fi)(e)
                        .then((e) => {
                            S.current.value === a && (i(e), d(!0), u(!1));
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
                    (u(!0), m(null), y((e) => e + 1));
                }, []),
                A = a.useCallback(async () => {
                    if (!l || !c || C.current) return;
                    C.current = !0;
                    let t = ++S.current.value;
                    (f(!0), m(null), x(null));
                    try {
                        let l = await (0, G.MN)(e);
                        if (S.current.value !== t) return;
                        (i(l), x(j.intl.string(b.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && m(e instanceof V.A ? e.message : j.intl.string(b.default.i5Xp1l));
                    } finally {
                        ((C.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: p, status: h, retry: k, remove: A };
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
var X = t(290713),
    J = t(143129),
    q = t(890497),
    Q = t(904363),
    K = t(540338),
    W = t(503698),
    $ = t.n(W),
    Y = t(750943),
    ee = t(22231),
    el = t(95477),
    et = t(103557),
    en = t(946274),
    ea = t(951178),
    er = t(535466),
    ei = t(154600);
function es(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ei.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: $()(ei.Vs, { [ei.A6]: u }),
                "aria-label": j.intl.string(u ? j.t["MsUY/S"] : j.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(Y.X, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ei.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ei.Jx,
                                  children: (0, n.jsx)(ee.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(en.Ay, {
                ref: s,
                className: ei.Fg,
                multiple: !1,
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: er.En }],
                maxFileSizeBytes: er.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(j.intl.string(b.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function eu(e, l, t) {
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
            onNameChange: c,
            description: d,
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
                eu(e, n, a);
                let r = new ResizeObserver(() => eu(e, n, a));
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
                        className: ei.S7,
                        children: [
                            (0, n.jsx)(es, { iconURL: r, disabled: m, onChange: i, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ei.yD,
                                children: (0, n.jsx)(el.k, {
                                    label: j.intl.string(b.default.GWBCF9),
                                    value: s,
                                    onChange: c,
                                    error: u,
                                    maxLength: 128,
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
            (0, n.jsx)(et.f, {
                label: j.intl.string(b.default.ynaGa1),
                placeholder: j.intl.string(b.default["I+3UTL"]),
                value: d,
                onChange: p,
                maxLength: 400,
                disabled: m,
            }),
        ],
    });
}
t(938796);
var ed = t(862026),
    eo = t(709753),
    ef = t(961553),
    ep = t(502707),
    em = t(944142),
    eg = t(788493),
    eh = t(532247),
    ex = t(371169),
    eb = t(426035),
    ej = t(246338),
    ev = t(277085),
    ey = t(453430);
let eC = {
    project: b.default.W0eQfN,
    app: b.default.lFaJYF,
    secrets: b.default.vDpCPU,
    model: b.default.Rs3qc9,
    linked: b.default.fBEHdq,
    experimental: b.default["0Pe9uw"],
};
function eS(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: y,
            scopeKeys: C,
            note: S,
            notifyAgent: k,
            isPreview: A,
            publishOptions: E,
            transitionState: I,
            onClose: P,
        } = e,
        _ = (0, r.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        T = (0, r.bG)([w.A], () => w.A.getModelSettings(l), [l]),
        R = (0, r.bG)([g.Ay], () => "open" === g.Ay.getConnState(l), [l]),
        F = null != _ && (0, h.PV)(_),
        z = null != _ && (0, h.jf)(_),
        B = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, Q.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: p,
                    hostApproval: m,
                    name: g,
                    nameError: x,
                    nameChanged: v,
                    isPublic: y,
                    isGuildCollaboration: C,
                    selectedRoleIds: S,
                    supportsVisibility: k,
                    supportsCollaboration: A,
                    supportsCollaboratorRoles: E,
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
                            let l = (0, r.bG)([em.A], () => em.A.getLiveReload(e), [e]),
                                t = (0, ep.A)(e),
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
                        c = (0, ef.A)(e),
                        { changes: d, commit: o } = c,
                        f = (0, ed.Q)(e),
                        p = f.save,
                        m = (0, eo._t)(e),
                        g = m.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(i?.name ?? ""),
                        [C, S] = a.useState(null),
                        [k, A] = a.useState(v),
                        [E, I] = a.useState(i?.flags ?? 0),
                        [P, _] = a.useState(() => [...x]),
                        [T, N] = a.useState(!1),
                        [R, w] = a.useState(null),
                        [F, z] = a.useState(null),
                        [B, L] = a.useState(null),
                        [U, D] = a.useState(null),
                        [O, Z] = a.useState(!1),
                        V = a.useRef(null),
                        G = a.useRef(!1),
                        H = k.trim(),
                        X = null != i && (0, ea.IU)(i),
                        J = null != i && "guild" === i.install_scope,
                        q = J && null != l && (0, ea.RX)(i),
                        { isPublic: Q, isGuildCollaboration: K } = (0, ej.n5)(E),
                        W = null != i && H !== v,
                        $ = X && E !== (C?.flags ?? i?.flags ?? 0),
                        Y =
                            q &&
                            ((t = C?.roleIds ?? x), !((n = new Set(P)).size === t.length && t.every((e) => n.has(e)))),
                        ee = W || $ || Y || c.changed,
                        el = ee || s.changed || f.changed || m.changed,
                        { setIcon: et, setDescription: en } = c,
                        er = s.setChecked,
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
                        ey = a.useCallback((e) => {
                            (A(e), w(null), L(null));
                        }, []),
                        eC = a.useCallback((e, l) => {
                            (I((t) => (l ? t | e : t & ~e)), z(null), L(null));
                        }, []),
                        eS = a.useCallback(
                            (e) => {
                                (er(e), L(null));
                            },
                            [er],
                        ),
                        ek = a.useCallback(async () => {
                            if (
                                null == i ||
                                null == l ||
                                null == i.preview_application_id ||
                                null != i.install_scope_setup ||
                                (0, ea.Fl)(i) ||
                                V.current === l
                            )
                                return !0;
                            if (G.current) return !1;
                            ((G.current = !0), Z(!0));
                            try {
                                let e = await (0, eb.cC)(i, l);
                                if (!1 !== e) return (!0 === e && (V.current = l), !0);
                                await (0, M.vL)(i.id, l);
                                let t = (await (0, eb.cC)(i, l)) === !0;
                                return (t && (V.current = l), t);
                            } finally {
                                ((G.current = !1), Z(!1));
                            }
                        }, [l, i]),
                        eA = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void z(j.intl.formatToPlainString(b.default["dH7+/Z"], { max: 25 }));
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
                        eE = a.useCallback(
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
                            let t = W ? (0, ev.p)(H) : null;
                            if (null != t) return (w(t), "project");
                            let n = { ...d };
                            (W && (n.name = H),
                                $ && (n.flags = E),
                                Y && (n.collaborator_role_ids = [...P].sort()),
                                null == i.guild_id && null != l && (Y || ($ && K)) && (n.guild_id = l),
                                N(!0),
                                L(null),
                                D(null));
                            try {
                                if ((ee && (await (0, ex.CW)(e, n), y(H), S({ flags: E, roleIds: [...P] }), o()), !u()))
                                    return (L(j.intl.string(b.default.XzkNBw)), "project");
                                if (!p() || !g()) return (D(j.intl.string(b.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (L(j.intl.string(b.default["9JPr8h"])), "project");
                            } finally {
                                N(!1);
                            }
                        }, [o, E, $, l, el, d, K, W, i, e, ee, Y, g, u, p, T, P, H]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: m,
                        name: k,
                        nameError: R,
                        nameChanged: W,
                        isPublic: Q,
                        isGuildCollaboration: K,
                        selectedRoleIds: P,
                        supportsVisibility: X,
                        supportsCollaboration: J,
                        supportsCollaboratorRoles: q,
                        checkingAppInGuild: O,
                        saving: T,
                        selectionError: F,
                        saveError: B,
                        experimentalError: U,
                        canSave: el && "" !== H,
                        handleIconChange: eu,
                        handleNameChange: ey,
                        handleDescriptionChange: ec,
                        handleFlagChange: eC,
                        handleLiveReloadChange: eS,
                        handleRoleSelectionChange: eA,
                        ensureAppInGuild: ek,
                        handleSmartContextChange: eE,
                        handleRequireHostApprovalChange: eI,
                        submit: eP,
                    };
                })(e, l),
                V = P || t;
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
                            description: c,
                            onDescriptionChange: z,
                            disabled: V,
                        }),
                        k
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.ujIxRm),
                                  description: j.intl.string(b.default.gT8zk1),
                                  checked: y,
                                  disabled: V,
                                  onChange: (e) => B(ea.Zh.PUBLIC, e),
                              })
                            : null,
                        k && A
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.lVvR4E),
                                  description: j.intl.string(b.default.SQZGoV),
                                  checked: C,
                                  disabled: V,
                                  onChange: (e) => B(ea.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(J.d, {
                                  label: j.intl.string(b.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: V,
                                  onChange: L,
                              })
                            : null,
                        E
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: j.intl.string(b.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(q.Z, {
                                          selectionMode: "multiple",
                                          label: j.intl.string(b.default["pO3+p5"]),
                                          placeholder: j.intl.string(b.default.gvL7QS),
                                          value: S,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: V || !C || I,
                                          "aria-invalid": null != _,
                                          "aria-errormessage": null != _ ? s : void 0,
                                          onSelectionChange: U,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(b.default.g5I05P, {
                                              count: S.length,
                                              max: 25,
                                          }),
                                      }),
                                      C
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
                        (0, n.jsx)(K.u, { projectId: e }),
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
                    !(async function () {
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
                c = a.useMemo(
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
                names: c,
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
    return (0, n.jsx)(X.A, {
        projectId: l,
        scopeKeys: C,
        note: S,
        notifyAgent: k,
        isPreview: A,
        children: (e) => {
            let t = [];
            ((F || z) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                T?.tierSettings != null && t.push("model"),
                D.callers.length > 0 && t.push("linked"),
                F && t.push("experimental"));
            let a = [O, y].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                g = !F && !r && !t.includes("app") && !t.includes("secrets"),
                x = (F && B.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && F && B.canSave }),
                C = j.intl.string(r ? b.default["jZjP+I"] : b.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && Z("app");
                        return;
                    }
                    let s = !r && F && B.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, r] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: r || !F ? null : B.submit });
                    if (u.saved) {
                        (await P(),
                            s &&
                                null != E &&
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
                                })(l, E));
                        return;
                    }
                    "app" !== u.failedTab
                        ? Z(u.failedTab)
                        : "secrets" !== a && Z(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: P,
                    "aria-label": C,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: C }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => Z(e),
                                          "aria-label": j.intl.string(b.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: j.intl.string(eC[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: ey.f,
                                          children: [B.fields, (0, n.jsx)(H, { projectId: l, canEdit: z }, l)],
                                      }),
                                r || "linked" !== a ? null : (0, n.jsx)(N, { linkedApps: D }),
                                r || "experimental" !== a ? null : B.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || T?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(ek, { projectId: l, modelSettings: T, tierSettings: T.tierSettings }),
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
function ek(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([g.Ay], () => "open" === g.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, F.X)(l, e), [l]),
        [c, d] = (0, z.A)(i, u);
    return (0, n.jsx)(B.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
