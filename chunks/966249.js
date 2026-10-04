n.d(t, { A: () => E });
var l = n(477900),
    r = n(582128),
    a = n(17928),
    i = n(691885),
    s = n(834730),
    u = n(150934),
    o = n(95477),
    d = n(821609),
    c = n(289873),
    f = n(890497),
    h = n(47167),
    m = n(713654),
    p = n(808728),
    x = n(994500),
    g = n(287809),
    b = n(477818),
    v = n(870440),
    y = n(485163),
    j = n(597331),
    k = n(26278),
    M = n(248675),
    C = n(375708),
    A = n(898651);
let w = { values: {}, secrets: {} };
function E(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: h = !1, isPreview: m = !1, children: p } = e,
        x = (0, a.bG)([j.Ay], () => j.Ay.getSettings(t)),
        [g, v] = r.useState(w),
        [k, E] = r.useState({}),
        [S, P] = r.useState(!1),
        [R, W] = r.useState(!1),
        N = r.useCallback((e, t) => {
            (W(!1), v((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        I = r.useCallback((e, t) => {
            (W(!1), v((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        B = r.useMemo(() => x?.schema ?? [], [x]),
        q = r.useMemo(() => x?.values ?? {}, [x]),
        F = r.useMemo(
            () =>
                (x?.secrets ?? []).map((e) => ({ ...e, def: B.find((t) => t.key === e.name && "secret" === t.type) })),
            [B, x],
        ),
        $ = B.filter((e) => "secret" !== e.type),
        z = new Map(F.map((e) => [e.name, e])),
        O = (n ?? []).filter((e) => $.some((t) => t.key === e) || z.has(e)),
        T = O.length > 0,
        D = O.some((e) => z.has(e)),
        G = r.useMemo(() => {
            let e = {};
            for (let [t, n] of Object.entries(g.values)) {
                let l = B.find((e) => e.key === t);
                null != l &&
                    n !== (q[t] ?? ("checkbox" !== l.type && "")) &&
                    (e[t] = "string" == typeof n && "" === n.trim() ? null : n);
            }
            let t = {};
            for (let [e, n] of Object.entries(g.secrets)) "" !== n.trim() && (t[e] = n.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [g, B, q]),
        X = null != G.values || null != G.secrets,
        U = r.useCallback(async () => {
            if (!X || S) return !0;
            (P(!0), W(!1));
            try {
                let { rebuildRequired: e } = await (0, j.nU)(t, G);
                return (
                    h || y.Ay.hasPendingSettingsRequest(t)
                        ? (0, j.dv)(t, C.intl.string(M.default["08bsJL"]))
                        : e
                          ? (0, j.ss)(t)
                          : (0, b.BD)(t),
                    v(w),
                    E({}),
                    !0
                );
            } catch {
                return (W(!0), !1);
            } finally {
                P(!1);
            }
        }, [X, h, t, S, G]);
    function V(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? C.intl.string(M.default["4kCM6H"]) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function Z(e) {
        let n = V(e);
        if ("select" === e.type) {
            let t = g.values[e.key] ?? q[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: A._6,
                    children: [
                        (0, l.jsx)(i.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => N(e.key, t),
                            selectionMode: "single",
                            disabled: S,
                            fullWidth: !0,
                        }),
                        null != n
                            ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = g.values[e.key] ?? q[e.key];
            return (0, l.jsx)(
                u.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => N(e.key, t), disabled: S },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, l.jsx)(
                  L,
                  {
                      projectId: t,
                      isPreview: m,
                      def: e,
                      hint: n,
                      value: g.values[e.key] ?? q[e.key],
                      disabled: S,
                      onChange: (t) => N(e.key, t),
                      fallback: _(e, n),
                  },
                  e.key,
              )
            : _(e, n);
    }
    function _(e, t) {
        let n = g.values[e.key] ?? q[e.key];
        return (0, l.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof n ? n : "",
                onChange: (t) => N(e.key, t),
                disabled: S,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function J(e) {
        let t = e.def?.label ?? e.name,
            n = V(e.def);
        return e.set && !0 !== k[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: A.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: A.DE,
                              children: [
                                  (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, l.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != n
                                      ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              text: C.intl.string(M.default.RsvBGf),
                              "aria-label": C.intl.formatToPlainString(M.default.WjoM7z, { label: t }),
                              disabled: S,
                              onClick: () => E((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, l.jsx)(
                  o.k,
                  {
                      label: t,
                      helperText: n,
                      name: e.name,
                      type: "password",
                      autoComplete: "off",
                      placeholder: e.set
                          ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                          : void 0,
                      required: e.def?.required === !0 && !e.set,
                      value: g.secrets[e.name] ?? "",
                      onChange: (t) => I(e.name, t),
                      disabled: S,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let Q = R
            ? (0, l.jsx)(s.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: C.intl.string(M.default["A5TC+K"]),
              })
            : null,
        H = (0, l.jsxs)("div", {
            className: A.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == x
                    ? (0, l.jsx)("div", { className: A.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === $.length && 0 === F.length
                      ? (0, l.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: C.intl.string(M.default.lJJayk),
                        })
                      : null,
                null == x
                    ? null
                    : T
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                D
                                    ? (0, l.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: C.intl.string(M.default.dsHRPK),
                                      })
                                    : null,
                                O.map(function (e) {
                                    let t = z.get(e);
                                    if (null != t) return J(t);
                                    let n = $.find((t) => t.key === e);
                                    return null == n ? null : Z(n);
                                }),
                            ],
                        })
                      : $.map(Z),
                Q,
            ],
        }),
        K = (0, l.jsxs)("div", {
            className: A.Ek,
            children: [
                (0, l.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: C.intl.string(M.default.dsHRPK),
                }),
                F.map(J),
                Q,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: p({
            fields: H,
            secretFields: K,
            loaded: null != x,
            valueCount: $.length,
            secretCount: F.length,
            canSave: X,
            saving: S,
            isScoped: T,
            submit: U,
        }),
    });
}
function L(e) {
    let { projectId: t, isPreview: n, def: r, hint: i, value: u, disabled: o, onChange: d, fallback: c } = e,
        b = (0, a.bG)([k.Ay], () => (0, v.Ux)(k.Ay.getProject(t), n), [n, t]),
        y = (0, a.bG)([p.Ay], () => (null == b ? null : p.Ay.getChannels(b)), [b]);
    if (null == y) return c;
    let j = (0, v.Lp)(y, r.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, h.m1)(e, g.default, x.A),
        leading: (0, m.gU)(e),
    }));
    return (0, l.jsxs)("div", {
        className: A._6,
        children: [
            (0, l.jsx)(f.Z, {
                selectionMode: "single",
                clearable: !0,
                label: r.label,
                options: j,
                value: "string" == typeof u && "" !== u ? u : void 0,
                placeholder: C.intl.string(M.default.iZIF9m),
                onSelectionChange: (e) => d(e ?? ""),
                disabled: o,
                fullWidth: !0,
            }),
            null != i ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: i }) : null,
        ],
    });
}
