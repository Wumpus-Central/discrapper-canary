(t.d(l, { default: () => eS }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(855986),
    r = t(314116),
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
    b = t(360047),
    x = t(191850),
    j = t(792996);
let v = [];
var y = t(323384),
    C = t(646514),
    S = t(265872),
    k = t(165862),
    A = t(477782),
    E = t(866665),
    I = t(408278),
    _ = t(365199),
    P = t(845079),
    T = t(843313);
function w(e) {
    let { linkedApps: l } = e,
        { callers: t, projects: a, names: i, failed: s, setBuild: u, remove: c } = l;
    return (0, n.jsx)("div", {
        className: T.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: j.intl.string(x.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: t.map((e) => {
                        let l = i[e.project_id];
                        return (0, n.jsx)(
                            N,
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
                                            title: j.intl.formatToPlainString(x.default.zSfIvv, { name: l }),
                                            subtitle: j.intl.formatToPlainString(x.default["7TX+mR"], { name: l }),
                                            confirmText: j.intl.string(x.default.vDZEGQ),
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
                          children: j.intl.string(x.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function N(e) {
    let { caller: l, project: t, name: i, onBuildChange: r, onRemove: s } = e,
        u = a.useRef(null),
        c = j.intl.formatToPlainString(x.default.bzMlmh, { name: i });
    return (0, n.jsxs)("div", {
        className: T.nM,
        children: [
            null != t
                ? (0, n.jsx)(P.A, { project: t, size: "card" })
                : (0, n.jsx)("div", {
                      className: T.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(y.AppsIcon, { size: "md", color: C.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: T.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "body-md/medium", lineClamp: 1, children: i }),
                    (0, n.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, b.hU)(l.build),
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
                                label: j.intl.string(x.default.Odrcmq),
                                children: b.Hi.map((e) =>
                                    (0, n.jsx)(
                                        A.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${l.project_id}`,
                                            label: (0, b.hU)(e),
                                            subtext: (0, b.Vq)(e),
                                            checked: e === l.build,
                                            action: () => {
                                                (r(e), t());
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
                                    label: j.intl.string(x.default.bN1S9T),
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
                                icon: _.MoreHorizontalIcon,
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
var R = t(557744),
    z = t(223347),
    F = t(822313),
    B = t(359589),
    L = t(722701),
    U = t(811587),
    D = t(826058),
    M = t(534514),
    V = t(821609),
    O = t(44255),
    Z = t(303345),
    G = t(416473);
function H(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([g.Ay], () => "open" === g.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, g.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [p, m] = a.useState(null),
                [h, b] = a.useState(null),
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
                            S.current.value === a && (r(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (m(j.intl.string(x.default.n25haz)), u(!1));
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
                    (f(!0), m(null), b(null));
                    try {
                        let l = await (0, G.MN)(e);
                        if (S.current.value !== t) return;
                        (r(l), b(j.intl.string(x.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && m(e instanceof Z.A ? e.message : j.intl.string(x.default.i5Xp1l));
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
                  (0, n.jsx)(M.D, { id: u, variant: "heading-sm/semibold", children: j.intl.string(x.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            role: "status",
                            children: j.intl.string(x.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: j.intl.string(x.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, O.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(V.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: j.intl.string(x.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, r.A)({
                                                    title: j.intl.string(x.default["Tw/KaB"]),
                                                    subtitle: j.intl.string(x.default.qr1iIe),
                                                    confirmText: j.intl.string(x.default.J7ZMMf),
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
                      : (0, n.jsx)(V.$, {
                            type: "button",
                            variant: "secondary",
                            text: j.intl.string(x.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var J = t(290713),
    X = t(143129),
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
    ei = t(535466),
    er = t(154600);
function es(e) {
    let { iconURL: l, disabled: t, onChange: i, onError: r } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: er.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: $()(er.Vs, { [er.A6]: u }),
                "aria-label": j.intl.string(u ? j.t["MsUY/S"] : j.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(Y.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: er.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: er.Jx,
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
                className: er.Fg,
                multiple: !1,
                filters: [{ name: j.intl.string(j.t["Sp2NF+"]), extensions: ei.En }],
                maxFileSizeBytes: ei.Q0,
                onChange: (e) => {
                    (r(null), i(e));
                },
                onFileSizeError: () => r(j.intl.string(x.default.ZTAAMc)),
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
            iconURL: i,
            onIconChange: r,
            name: s,
            nameError: u,
            onNameChange: c,
            description: d,
            onDescriptionChange: p,
            disabled: m = !1,
        } = e,
        [g, h] = a.useState(null),
        { rowRef: b, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                eu(e, n, a);
                let i = new ResizeObserver(() => eu(e, n, a));
                return (i.observe(n), i.observe(a), () => i.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: b,
                        className: er.S7,
                        children: [
                            (0, n.jsx)(es, { iconURL: i, disabled: m, onChange: r, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: er.yD,
                                children: (0, n.jsx)(el.k, {
                                    label: j.intl.string(x.default.GWBCF9),
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
                label: j.intl.string(x.default.ynaGa1),
                placeholder: j.intl.string(x.default["I+3UTL"]),
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
    ep = t(726532),
    em = t(944142),
    eg = t(788493),
    eh = t(532247),
    eb = t(233470),
    ex = t(426035),
    ej = t(246338),
    ev = t(277085),
    ey = t(453430);
let eC = {
    project: x.default.W0eQfN,
    app: x.default.lFaJYF,
    secrets: x.default.vDpCPU,
    model: x.default.Rs3qc9,
    linked: x.default.fBEHdq,
    experimental: x.default["0Pe9uw"],
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
            onClose: _,
        } = e,
        P = (0, i.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        T = (0, i.bG)([R.A], () => R.A.getModelSettings(l), [l]),
        N = (0, i.bG)([g.Ay], () => "open" === g.Ay.getConnState(l), [l]),
        z = null != P && (0, h.PV)(P),
        F = null != P && (0, h.jf)(P),
        B = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = (0, Q.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: c,
                    liveReload: d,
                    smartContext: p,
                    hostApproval: m,
                    name: g,
                    nameError: b,
                    nameChanged: v,
                    isPublic: y,
                    isGuildCollaboration: C,
                    usesPreviewApp: S,
                    canChangePreviewApp: k,
                    selectedRoleIds: A,
                    supportsVisibility: E,
                    supportsCollaboration: I,
                    supportsCollaboratorRoles: _,
                    checkingAppInGuild: P,
                    saving: T,
                    selectionError: w,
                    saveError: N,
                    experimentalError: R,
                    canSave: z,
                    handleIconChange: F,
                    handleNameChange: B,
                    handleDescriptionChange: L,
                    handleFlagChange: U,
                    handleUsesPreviewAppChange: M,
                    handleLiveReloadChange: V,
                    handleRoleSelectionChange: O,
                    handleSmartContextChange: Z,
                    handleRequireHostApprovalChange: G,
                    submit: H,
                } = (function (e, l) {
                    var t;
                    let n,
                        r = (0, i.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, i.bG)([em.A], () => em.A.getLiveReload(e), [e]),
                                t = (0, ep.A)(e),
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
                                available: null != l && t,
                                checked: n ?? c ?? !1,
                                description: null == l ? "" : (0, eh.oV)(l),
                                changed: d,
                                setChecked: r,
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
                        b = r?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(r?.name ?? ""),
                        [C, S] = a.useState(null),
                        [k, A] = a.useState(v),
                        [E, I] = a.useState(r?.flags ?? 0),
                        [_, P] = a.useState(() => [...b]),
                        T = r?.uses_preview_app,
                        [w, N] = a.useState(null);
                    null != w && w === T && N(null);
                    let [R, z] = a.useState(!1),
                        [F, B] = a.useState(null),
                        [L, U] = a.useState(null),
                        [M, V] = a.useState(null),
                        [O, Z] = a.useState(null),
                        [G, H] = a.useState(!1),
                        J = a.useRef(null),
                        X = a.useRef(!1),
                        q = k.trim(),
                        Q = null != r && (0, ea.IU)(r),
                        K = null != r && "guild" === r.install_scope,
                        W = K && null != l && (0, ea.RX)(r),
                        { isPublic: $, isGuildCollaboration: Y } = (0, ej.n5)(E),
                        ee = null != r && q !== v,
                        el = Q && E !== (C?.flags ?? r?.flags ?? 0),
                        et =
                            W &&
                            ((t = C?.roleIds ?? b), !((n = new Set(_)).size === t.length && t.every((e) => n.has(e)))),
                        en = null != T,
                        ei = w ?? T ?? !1,
                        er = en && null != w,
                        es = ee || el || et || er || c.changed,
                        eu = es || s.changed || f.changed || m.changed,
                        { setIcon: ec, setDescription: ey } = c,
                        eC = s.setChecked,
                        eS = f.setChecked,
                        ek = m.setChecked,
                        eA = a.useCallback(
                            (e) => {
                                (ec(e), V(null));
                            },
                            [ec],
                        ),
                        eE = a.useCallback(
                            (e) => {
                                (ey(e), V(null));
                            },
                            [ey],
                        ),
                        eI = a.useCallback((e) => {
                            (A(e), B(null), V(null));
                        }, []),
                        e_ = a.useCallback((e, l) => {
                            (I((t) => (l ? t | e : t & ~e)), U(null), V(null));
                        }, []),
                        eP = a.useCallback((e) => {
                            (N(e), V(null));
                        }, []),
                        eT = a.useCallback(
                            (e) => {
                                (eC(e), V(null));
                            },
                            [eC],
                        ),
                        ew = a.useCallback(async () => {
                            if (
                                null == r ||
                                null == l ||
                                null == r.preview_application_id ||
                                null != r.install_scope_setup ||
                                J.current === l
                            )
                                return !0;
                            if (X.current) return !1;
                            ((X.current = !0), H(!0));
                            try {
                                let e = await (0, ex.cC)(r, l);
                                if (!1 !== e) return (!0 === e && (J.current = l), !0);
                                await (0, D.vL)(r.id, l);
                                let t = (await (0, ex.cC)(r, l)) === !0;
                                return (t && (J.current = l), t);
                            } finally {
                                ((X.current = !1), H(!1));
                            }
                        }, [l, r]),
                        eN = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void U(j.intl.formatToPlainString(x.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (P(e), U(null), V(null));
                                };
                                if (!e.some((e) => !_.includes(e))) return void l();
                                try {
                                    (await ew()) && l();
                                } catch {}
                            },
                            [ew, _],
                        ),
                        eR = a.useCallback(
                            (e) => {
                                (eS(e), Z(null));
                            },
                            [eS],
                        ),
                        ez = a.useCallback(
                            (e) => {
                                (ek(e), Z(null));
                            },
                            [ek],
                        ),
                        eF = a.useCallback(async () => {
                            if (null == r || !eu || R) return null;
                            let t = ee ? (0, ev.p)(q) : null;
                            if (null != t) return (B(t), "project");
                            let n = { ...d };
                            (ee && (n.name = q),
                                el && (n.flags = E),
                                et && (n.collaborator_role_ids = [..._].sort()),
                                er && (n.uses_preview_app = ei),
                                null == r.guild_id && null != l && (et || (el && Y)) && (n.guild_id = l),
                                z(!0),
                                V(null),
                                Z(null));
                            try {
                                if ((es && (await (0, eb.CW)(e, n), y(q), S({ flags: E, roleIds: [..._] }), o()), !u()))
                                    return (V(j.intl.string(x.default.XzkNBw)), "project");
                                if (!p() || !g()) return (Z(j.intl.string(x.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (V(j.intl.string(x.default["9JPr8h"])), "project");
                            } finally {
                                z(!1);
                            }
                        }, [o, E, el, l, eu, d, Y, ee, er, ei, r, e, es, et, g, u, p, R, _, q]);
                    return {
                        iconURL: c.iconURL,
                        description: c.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: m,
                        name: k,
                        nameError: F,
                        nameChanged: ee,
                        isPublic: $,
                        isGuildCollaboration: Y,
                        usesPreviewApp: ei,
                        canChangePreviewApp: en,
                        selectedRoleIds: _,
                        supportsVisibility: Q,
                        supportsCollaboration: K,
                        supportsCollaboratorRoles: W,
                        checkingAppInGuild: G,
                        saving: R,
                        selectionError: L,
                        saveError: M,
                        experimentalError: O,
                        canSave: eu && "" !== q,
                        handleIconChange: eA,
                        handleNameChange: eI,
                        handleDescriptionChange: eE,
                        handleFlagChange: e_,
                        handleUsesPreviewAppChange: eP,
                        handleLiveReloadChange: eT,
                        handleRoleSelectionChange: eN,
                        ensureAppInGuild: ew,
                        handleSmartContextChange: eR,
                        handleRequireHostApprovalChange: ez,
                        submit: eF,
                    };
                })(e, l),
                J = T || t;
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: j.intl.string(x.default.s7VnVF),
                              })
                            : null,
                        (0, n.jsx)(ec, {
                            iconURL: u,
                            onIconChange: F,
                            name: g,
                            nameError: b,
                            onNameChange: B,
                            description: c,
                            onDescriptionChange: L,
                            disabled: J,
                        }),
                        E
                            ? (0, n.jsx)(X.d, {
                                  label: j.intl.string(x.default.ujIxRm),
                                  description: j.intl.string(x.default.gT8zk1),
                                  checked: y,
                                  disabled: J,
                                  onChange: (e) => U(ea.Zh.PUBLIC, e),
                              })
                            : null,
                        E && I
                            ? (0, n.jsx)(X.d, {
                                  label: j.intl.string(x.default.lVvR4E),
                                  description: j.intl.string(x.default.SQZGoV),
                                  checked: C,
                                  disabled: J,
                                  onChange: (e) => U(ea.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        k
                            ? (0, n.jsx)(X.d, {
                                  label: j.intl.string(x.default.DV2hcV),
                                  description: j.intl.string(x.default.yjWIzb),
                                  checked: S,
                                  disabled: J,
                                  onChange: M,
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(X.d, {
                                  label: j.intl.string(x.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: J,
                                  onChange: V,
                              })
                            : null,
                        _
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: j.intl.string(x.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(q.Z, {
                                          selectionMode: "multiple",
                                          label: j.intl.string(x.default["pO3+p5"]),
                                          placeholder: j.intl.string(x.default.gvL7QS),
                                          value: A,
                                          options: r,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: J || !C || P,
                                          "aria-invalid": null != w,
                                          "aria-errormessage": null != w ? s : void 0,
                                          onSelectionChange: O,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: j.intl.formatToPlainString(x.default.g5I05P, {
                                              count: A.length,
                                              max: 25,
                                          }),
                                      }),
                                      C
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: j.intl.string(x.default.nZw5r9),
                                            }),
                                      null != w
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: w,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
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
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(X.d, {
                            label: j.intl.string(x.default["4liZ45"]),
                            description: j.intl.string(x.default.I5cl7p),
                            checked: p.checked,
                            disabled: T,
                            onChange: Z,
                        }),
                        (0, n.jsx)(X.d, {
                            label: j.intl.string(x.default.mpjaVm),
                            description: j.intl.string(x.default["2PxChh"]),
                            checked: m.checked,
                            disabled: T,
                            onChange: G,
                        }),
                        (0, n.jsx)(K.u, { projectId: e }),
                        null != R
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: R,
                              })
                            : null,
                    ],
                }),
                canSave: z,
                saving: T,
                nameChanged: v,
                submit: H,
            };
        })(l, P?.guild_id ?? t ?? void 0, { readOnly: !z }),
        M = (function (e, l) {
            let [t, n] = a.useState(v),
                [r, s] = a.useState(!1);
            a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    !(async function () {
                        try {
                            let l = await (0, b.vk)(e);
                            t && n(l);
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]);
            let u = (0, i.cf)(
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
                                    u[l]?.name ?? j.intl.formatToPlainString(x.default.HHCa93, { projectId: l }),
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
                            await (0, b.Ol)(e, l, t);
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
                            await (0, b.pc)(e, l);
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
        [V, O] = a.useState(null);
    return (0, n.jsx)(J.A, {
        projectId: l,
        scopeKeys: C,
        note: S,
        notifyAgent: k,
        isPreview: A,
        children: (e) => {
            let t = [];
            ((z || F) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                T?.tierSettings != null && t.push("model"),
                M.callers.length > 0 && t.push("linked"),
                z && t.push("experimental"));
            let a = [V, y].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                g = !z && !i && !t.includes("app") && !t.includes("secrets"),
                b = (z && B.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !i && z && B.canSave }),
                C = j.intl.string(i ? x.default["jZjP+I"] : x.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || b)) {
                        e.invalid && t.includes("app") && O("app");
                        return;
                    }
                    let s = !i && z && B.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, i] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && i ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: i || !z ? null : B.submit });
                    if (u.saved) {
                        (await _(),
                            s &&
                                null != E &&
                                (function (e, l) {
                                    let t = h.Ay.getProject(e);
                                    if (null == t || !(0, D.qF)(t)) return;
                                    let n = L.A.getPublishStatus(e);
                                    null != n &&
                                        (0, U.lE)(n.publishState) &&
                                        (0, r.A)({
                                            title: j.intl.string(x.default["48pvCR"]),
                                            subtitle: j.intl.string(x.default["Xk+JsJ"]),
                                            confirmText: j.intl.string(x.default.guoHDk),
                                            cancelText: j.intl.string(x.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, D.FZ)(e, "name_prompt", l).catch(() => {});
                                            },
                                        });
                                })(l, E));
                        return;
                    }
                    "app" !== u.failedTab
                        ? O(u.failedTab)
                        : "secrets" !== a && O(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: I,
                    onClose: _,
                    "aria-label": C,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: C }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => O(e),
                                          "aria-label": j.intl.string(x.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: j.intl.string(eC[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: ey.f,
                                          children: [B.fields, (0, n.jsx)(H, { projectId: l, canEdit: F }, l)],
                                      }),
                                i || "linked" !== a ? null : (0, n.jsx)(w, { linkedApps: M }),
                                i || "experimental" !== a ? null : B.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || T?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(ek, { projectId: l, modelSettings: T, tierSettings: T.tierSettings }),
                                i || null != a
                                    ? null
                                    : N
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: j.intl.string(x.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: ey.L, children: (0, n.jsx)(p.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(m.H, {
                            actionsFullWidth: !0,
                            actions: g
                                ? [{ text: j.intl.string(j.t.cpT0Cq), variant: "secondary", onClick: _ }]
                                : [
                                      {
                                          text: j.intl.string(j.t["ETE/oC"]),
                                          variant: "secondary",
                                          onClick: _,
                                          disabled: b,
                                      },
                                      {
                                          text: j.intl.string(i ? x.default.A7dQd9 : j.t["R3BPH+"]),
                                          variant: "primary",
                                          type: "submit",
                                          loading: b,
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
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([g.Ay], () => "open" === g.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, z.X)(l, e), [l]),
        [c, d] = (0, F.A)(r, u);
    return (0, n.jsx)(B.A, { settings: c, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: d });
}
