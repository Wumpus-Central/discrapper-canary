n.d(t, { A: () => k });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    r = n(691885),
    u = n(834730),
    s = n(150934),
    o = n(95477),
    d = n(821609),
    c = n(289873),
    f = n(890497),
    p = n(47167),
    h = n(713654),
    g = n(808728),
    m = n(994500),
    b = n(287809),
    v = n(245179),
    x = n(712808),
    y = n(371169),
    A = n(260498),
    C = n(246338),
    j = n(261425),
    P = n(660183),
    w = n(183265);
let M = { values: {}, secrets: {} };
function k(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: p = !1, isPreview: h = !1, children: g } = e,
        m = (0, a.bG)([x.Ay], () => x.Ay.getSettings(t)),
        [b, A] = i.useState(M),
        [C, k] = i.useState({}),
        [E, N] = i.useState(!1),
        [S, _] = i.useState(!1),
        R = i.useCallback((e, t) => {
            (_(!1), A((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        O = i.useCallback((e, t) => {
            (_(!1), A((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        L = i.useMemo(() => m?.schema ?? [], [m]),
        W = i.useMemo(() => m?.values ?? {}, [m]),
        F = i.useMemo(
            () =>
                (m?.secrets ?? []).map((e) => ({ ...e, def: L.find((t) => t.key === e.name && "secret" === t.type) })),
            [L, m],
        ),
        T = L.filter((e) => "secret" !== e.type),
        D = new Map(F.map((e) => [e.name, e])),
        G = (n ?? []).filter((e) => T.some((t) => t.key === e) || D.has(e)),
        B = G.length > 0,
        U = G.some((e) => D.has(e)),
        q = i.useMemo(() => {
            let e = {};
            for (let [t, n] of Object.entries(b.values)) {
                let l = L.find((e) => e.key === t);
                null != l &&
                    n !== (W[t] ?? ("checkbox" !== l.type && "")) &&
                    (e[t] = "string" == typeof n && "" === n.trim() ? null : n);
            }
            let t = {};
            for (let [e, n] of Object.entries(b.secrets)) "" !== n.trim() && (t[e] = n.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [b, L, W]),
        $ = null != q.values || null != q.secrets,
        X = i.useCallback(async () => {
            if (!$ || E) return !0;
            (N(!0), _(!1));
            try {
                let { rebuildRequired: e } = await (0, x.nU)(t, q);
                return (
                    p || v.Ay.hasPendingSettingsRequest(t)
                        ? (0, x.dv)(t, P.intl.string(j.default["08bsJL"]))
                        : e
                          ? (0, x.ss)(t)
                          : (0, y.BD)(t),
                    A(M),
                    k({}),
                    !0
                );
            } catch {
                return (_(!0), !1);
            } finally {
                N(!1);
            }
        }, [$, p, t, E, q]);
    function V(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? P.intl.string(j.default["4kCM6H"]) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function z(e) {
        let n = V(e);
        if ("select" === e.type) {
            let t = b.values[e.key] ?? W[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: w._6,
                    children: [
                        (0, l.jsx)(r.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => R(e.key, t),
                            selectionMode: "single",
                            disabled: E,
                            fullWidth: !0,
                        }),
                        null != n
                            ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = b.values[e.key] ?? W[e.key];
            return (0, l.jsx)(
                s.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => R(e.key, t), disabled: E },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, l.jsx)(
                  I,
                  {
                      projectId: t,
                      isPreview: h,
                      def: e,
                      hint: n,
                      value: b.values[e.key] ?? W[e.key],
                      disabled: E,
                      onChange: (t) => R(e.key, t),
                      fallback: Q(e, n),
                  },
                  e.key,
              )
            : Q(e, n);
    }
    function Q(e, t) {
        let n = b.values[e.key] ?? W[e.key];
        return (0, l.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof n ? n : "",
                onChange: (t) => R(e.key, t),
                disabled: E,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function Z(e) {
        let t = e.def?.label ?? e.name,
            n = V(e.def);
        return e.set && !0 !== C[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: w.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: w.DE,
                              children: [
                                  (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != n
                                      ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              text: P.intl.string(j.default.RsvBGf),
                              "aria-label": P.intl.formatToPlainString(j.default.WjoM7z, { label: t }),
                              disabled: E,
                              onClick: () => k((t) => ({ ...t, [e.name]: !0 })),
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
                      value: b.secrets[e.name] ?? "",
                      onChange: (t) => O(e.name, t),
                      disabled: E,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let J = S
            ? (0, l.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: P.intl.string(j.default["A5TC+K"]),
              })
            : null,
        H = (0, l.jsxs)("div", {
            className: w.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == m
                    ? (0, l.jsx)("div", { className: w.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === T.length && 0 === F.length
                      ? (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: P.intl.string(j.default.lJJayk),
                        })
                      : null,
                null == m
                    ? null
                    : B
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                U
                                    ? (0, l.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: P.intl.string(j.default.dsHRPK),
                                      })
                                    : null,
                                G.map(function (e) {
                                    let t = D.get(e);
                                    if (null != t) return Z(t);
                                    let n = T.find((t) => t.key === e);
                                    return null == n ? null : z(n);
                                }),
                            ],
                        })
                      : T.map(z),
                J,
            ],
        }),
        K = (0, l.jsxs)("div", {
            className: w.Ek,
            children: [
                (0, l.jsx)(u.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: P.intl.string(j.default.dsHRPK),
                }),
                F.map(Z),
                J,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: g({
            fields: H,
            secretFields: K,
            loaded: null != m,
            valueCount: T.length,
            secretCount: F.length,
            canSave: $,
            saving: E,
            isScoped: B,
            submit: X,
        }),
    });
}
function I(e) {
    let { projectId: t, isPreview: n, def: i, hint: r, value: s, disabled: o, onChange: d, fallback: c } = e,
        v = (0, a.bG)([A.Ay], () => (0, C.Ux)(A.Ay.getProject(t), n), [n, t]),
        x = (0, a.bG)([g.Ay], () => (null == v ? null : g.Ay.getChannels(v)), [v]);
    if (null == x) return c;
    let y = (0, C.Lp)(x, i.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, p.m1)(e, b.default, m.A),
        leading: (0, h.gU)(e),
    }));
    return (0, l.jsxs)("div", {
        className: w._6,
        children: [
            (0, l.jsx)(f.Z, {
                selectionMode: "single",
                clearable: !0,
                label: i.label,
                options: y,
                value: "string" == typeof s && "" !== s ? s : void 0,
                placeholder: P.intl.string(j.default.iZIF9m),
                onSelectionChange: (e) => d(e ?? ""),
                disabled: o,
                fullWidth: !0,
            }),
            null != r ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: r }) : null,
        ],
    });
}
