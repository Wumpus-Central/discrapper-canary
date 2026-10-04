(t.d(l, { default: () => T }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(17928),
    s = t(189213),
    r = t(761508),
    u = t(834730),
    d = t(289873),
    o = t(277977),
    c = t(972786),
    g = t(98115),
    f = t(349735);
t(938796);
var p = t(545442),
    x = t(331322),
    b = t(95477),
    h = t(193249),
    m = t(890497),
    S = t(317525),
    v = t(673724),
    j = t(948230),
    C = t(683180),
    y = t(421690),
    k = t(716248),
    A = t(652215),
    E = t(50617),
    I = t(375708),
    w = t(249154);
let P = { project: E.default.wo1EUp, app: E.default["8drwHu"], secrets: E.default.iD7xfZ, model: E.default.aMTBSX };
function T(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: g,
            scopeKeys: T,
            note: B,
            notifyAgent: V,
            isPreview: L,
            transitionState: R,
            onClose: U,
        } = e,
        G = (0, i.bG)([c.Ay], () => c.Ay.getProject(l), [l]),
        H = (0, i.bG)([o.Ay], () => o.Ay.getModelSettings(l), [l]),
        Z = (0, i.bG)([o.Ay], () => "open" === o.Ay.getConnState(l), [l]),
        q = null != G && (0, c.PV)(G),
        z = (function (e, l) {
            var t;
            let s,
                r = (0, i.bG)([c.Ay], () => c.Ay.getProject(e), [e]),
                d = (0, i.yK)([S.A], () => (null != l ? S.A.getSortedRoles(l) : []), [l]),
                g = a.useMemo(
                    () =>
                        d.map((e) => ({
                            key: e.id,
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: () => (0, n.jsx)(p.R, { color: e.colorString ?? A.TpD, colors: e.colorStrings }),
                        })),
                    [d],
                ),
                f = (function (e) {
                    let l = (0, i.bG)([y.A], () => y.A.getLiveReload(e), [e]),
                        [t, n] = a.useState(null),
                        [s, r] = a.useState(null);
                    null != s && l !== s.before && r(null);
                    let u = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != t && t === u && n(null);
                    let d = null != l && null != t && t !== u,
                        c = a.useCallback(
                            () => !d || null == t || (!!(0, o.ct)(e, t) && (r({ enabled: t, before: l }), n(null), !0)),
                            [d, t, l, e],
                        );
                    return {
                        available: null != l,
                        checked: t ?? u ?? !1,
                        description: null == l ? "" : (0, k.oV)(l),
                        changed: d,
                        setChecked: n,
                        save: c,
                    };
                })(e),
                w = f.save,
                P = r?.collaborator_role_ids ?? [],
                [T, _] = a.useState(r?.name ?? ""),
                [B, V] = a.useState(null),
                [L, R] = a.useState(T),
                [U, G] = a.useState(r?.flags ?? 0),
                [H, Z] = a.useState(() => [...P]),
                [q, z] = a.useState(!1),
                [F, M] = a.useState(null),
                [D, Q] = a.useState(null),
                [W, X] = a.useState(null),
                K = a.useId(),
                N = L.trim(),
                J = null != r && (0, v.IU)(r),
                O = null != r && "user" !== r.install_scope,
                Y = O && null != l && (0, v.RX)(r),
                { isPublic: $, isShared: ee } = (0, C.oA)(U),
                el = null != r && N !== T,
                et = J && U !== (B?.flags ?? r?.flags ?? 0),
                en =
                    Y &&
                    ((t = B?.roleIds ?? P),
                    !((s = H instanceof Set ? H : new Set(H)).size === t.length && t.every((e) => s.has(e)))),
                ea = el || et || en,
                ei = ea || f.changed,
                es = a.useCallback((e) => {
                    (R(e), M(null), X(null));
                }, []),
                er = a.useCallback((e, l) => {
                    (G((t) => (l ? t | e : t & ~e)), Q(null), X(null));
                }, []),
                eu = a.useCallback((e) => {
                    e.length > v.sq
                        ? Q(I.intl.formatToPlainString(E.default.VPUL05, { max: v.sq }))
                        : (Z(e), Q(null), X(null));
                }, []),
                ed = a.useCallback(async () => {
                    if (null == r || !ei || q) return !0;
                    if ("" === N) return (M(I.intl.string(E.default.I2hgEB)), !1);
                    let t = {};
                    (el && (t.name = N),
                        et && (t.flags = U),
                        en && (t.collaborator_role_ids = [...H].sort()),
                        null == r.guild_id && null != l && (en || (et && $)) && (t.guild_id = l),
                        z(!0),
                        X(null));
                    try {
                        if (ea) {
                            if (!(await (0, j.CW)(e, t)).ok) return (X(I.intl.string(E.default.dxH2ZV)), !1);
                            (_(N), V({ flags: U, roleIds: [...H] }));
                        }
                        if (!w()) return (X(I.intl.string(E.default.ITBIXb)), !1);
                        return !0;
                    } catch {
                        return (X(I.intl.string(E.default.dxH2ZV)), !1);
                    } finally {
                        z(!1);
                    }
                }, [U, et, w, ea, l, ei, $, el, r, e, en, q, H, N]);
            return {
                fields: (0, n.jsxs)(x.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(b.k, {
                            label: I.intl.string(E.default.u9UpIx),
                            value: L,
                            onChange: es,
                            error: F,
                            maxLength: 128,
                            disabled: q,
                            fullWidth: !0,
                        }),
                        J
                            ? (0, n.jsx)(h.d, {
                                  label: I.intl.string(E.default.EHMPvA),
                                  description: I.intl.string(E.default.bQQ4uT),
                                  checked: ee,
                                  disabled: q,
                                  onChange: (e) => er(v.A2.SHAREABLE, e),
                              })
                            : null,
                        J && O
                            ? (0, n.jsx)(h.d, {
                                  label: I.intl.string(E.default.fvxLKl),
                                  description: I.intl.string(E.default.Eb3Pe3),
                                  checked: $,
                                  disabled: q,
                                  onChange: (e) => er(v.A2.PUBLIC, e),
                              })
                            : null,
                        f.available
                            ? (0, n.jsx)(h.d, {
                                  label: I.intl.string(E.default["Fti+F5"]),
                                  badge: { text: I.intl.string(E.default["m3/pu8"]) },
                                  description: f.description,
                                  checked: f.checked,
                                  disabled: q,
                                  onChange: (e) => {
                                      (f.setChecked(e), X(null));
                                  },
                              })
                            : null,
                        Y
                            ? (0, n.jsxs)(x.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(u.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: I.intl.string(E.default.gWSQVl),
                                      }),
                                      (0, n.jsx)(m.Z, {
                                          selectionMode: "multiple",
                                          label: I.intl.string(E.default.fqvhf0),
                                          placeholder: I.intl.string(E.default.xEhUCx),
                                          value: H,
                                          options: g,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: q || !$,
                                          "aria-invalid": null != D,
                                          "aria-errormessage": null != D ? K : void 0,
                                          onSelectionChange: eu,
                                      }),
                                      (0, n.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: I.intl.formatToPlainString(E.default.eaqbJt, {
                                              count: H.length,
                                              max: v.sq,
                                          }),
                                      }),
                                      $
                                          ? null
                                          : (0, n.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: I.intl.string(E.default.FTvt33),
                                            }),
                                      null != D
                                          ? (0, n.jsx)(u.E, {
                                                id: K,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: D,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != W
                            ? (0, n.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: W,
                              })
                            : null,
                    ],
                }),
                canSave: ei && "" !== N,
                saving: q,
                submit: ed,
            };
        })(l, G?.guild_id ?? t ?? void 0),
        [F, M] = a.useState(null);
    return (0, n.jsx)(f.A, {
        projectId: l,
        scopeKeys: T,
        note: B,
        notifyAgent: V,
        isPreview: L,
        children: (e) => {
            let t = [];
            (q && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                H?.tierSettings != null && t.push("model"));
            let a = [F, g].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                o = z.saving || e.saving,
                c = e.canSave || (!i && z.canSave);
            async function f(l) {
                if ((l.preventDefault(), !c || o)) return;
                let [n, s] = await Promise.all([!!i || z.submit(), e.submit()]);
                n && s ? await U() : n ? "secrets" !== a && M(t.includes("app") ? "app" : "secrets") : M("project");
            }
            return (0, n.jsx)("form", {
                onSubmit: f,
                children: (0, n.jsxs)(s.a, {
                    transitionState: R,
                    onClose: U,
                    title: I.intl.string(i ? E.default.wgDhiQ : E.default.cWmjzs),
                    size: "md",
                    input:
                        i || t.length < 2
                            ? void 0
                            : (0, n.jsx)(r.V, {
                                  selectedItem: a,
                                  type: "top",
                                  onItemSelect: (e) => M(e),
                                  "aria-label": I.intl.string(E.default.FAz9Zy),
                                  children: t.map((e) =>
                                      (0, n.jsx)(r.V.Item, { id: e, children: I.intl.string(P[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: I.intl.string(I.t["ETE/oC"]), variant: "secondary", onClick: U, disabled: o },
                        {
                            text: I.intl.string(i ? E.default.Tuz9vw : I.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: o,
                            disabled: !c,
                        },
                    ],
                    children: [
                        i || "app" === a ? e.fields : null,
                        i || "project" !== a ? null : z.fields,
                        i || "secrets" !== a ? null : e.secretFields,
                        i || "model" !== a || H?.tierSettings == null
                            ? null
                            : (0, n.jsx)(_, { projectId: l, modelSettings: H, tierSettings: H.tierSettings }),
                        i || null != a
                            ? null
                            : Z
                              ? (0, n.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.string(E.default.URnN4B),
                                })
                              : (0, n.jsx)("div", { className: w.L, children: (0, n.jsx)(d.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function _(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, i.bG)([o.Ay], () => "open" === o.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, o.XZ)(l, e), [l]),
        [d, c] = (0, g.kn)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: c });
}
