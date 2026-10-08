n.d(t, { A: () => E });
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
    A = n(246338),
    C = n(435558),
    j = n(696451),
    P = n(317525),
    w = n(260498);
function M(e, t) {
    return (0, a.bG)([w.Ay], () => (0, A.Ux)(w.Ay.getProject(e), t), [t, e]);
}
var k = n(261425),
    S = n(660183),
    I = n(183265);
let N = { values: {}, secrets: {} };
function E(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: p = !1, isPreview: h = !1, children: g } = e,
        m = (0, a.bG)([x.Ay], () => x.Ay.getSettings(t)),
        [b, A] = i.useState(N),
        [C, j] = i.useState({}),
        [P, w] = i.useState(!1),
        [M, E] = i.useState(!1),
        R = i.useCallback((e, t) => {
            (E(!1), A((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        L = i.useCallback((e, t) => {
            (E(!1), A((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        W = i.useMemo(() => m?.schema ?? [], [m]),
        F = i.useMemo(() => m?.values ?? {}, [m]),
        T = i.useMemo(
            () =>
                (m?.secrets ?? []).map((e) => ({ ...e, def: W.find((t) => t.key === e.name && "secret" === t.type) })),
            [W, m],
        ),
        G = W.filter((e) => "secret" !== e.type),
        D = new Map(T.map((e) => [e.name, e])),
        B = (n ?? []).filter((e) => G.some((t) => t.key === e) || D.has(e)),
        U = B.length > 0,
        q = B.some((e) => D.has(e)),
        Z = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(b.values)) {
                var t;
                let i = W.find((e) => e.key === n);
                if (null == i) continue;
                let a = (function (e, t) {
                    if ("number" === e.type) {
                        if ("number" == typeof t) return t;
                        let e = String(t).trim();
                        if ("" === e) return null;
                        let n = Number(e.replace(",", "."));
                        return Number.isFinite(n) ? n : void 0;
                    }
                    if (!0 === e.multiple) {
                        let e = Array.isArray(t)
                            ? t
                            : String(t)
                                  .split(/[\s,]+/)
                                  .filter((e) => "" !== e);
                        return 0 === e.length ? null : e;
                    }
                    return "string" == typeof t && "" === t.trim() ? null : t;
                })(i, l);
                void 0 === a ||
                    ((t = F[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(a) === JSON.stringify(t)) ||
                    (e[n] = a);
            }
            let n = {};
            for (let [e, t] of Object.entries(b.secrets)) "" !== t.trim() && (n[e] = t.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(n).length > 0 ? { secrets: n } : {}),
            };
        }, [b, W, F]),
        $ = null != Z.values || null != Z.secrets,
        X = i.useCallback(async () => {
            if (!$ || P) return !0;
            (w(!0), E(!1));
            try {
                let { rebuildRequired: e } = await (0, x.nU)(t, Z);
                return (
                    p || v.Ay.hasPendingSettingsRequest(t)
                        ? (0, x.dv)(t, S.intl.string(k.default["08bsJL"]))
                        : e
                          ? (0, x.ss)(t)
                          : (0, y.BD)(t),
                    A(N),
                    j({}),
                    !0
                );
            } catch {
                return (E(!0), !1);
            } finally {
                w(!1);
            }
        }, [$, p, t, P, Z]);
    function V(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? S.intl.string(k.default["4kCM6H"]) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function z(e) {
        let n = V(e);
        if ("select" === e.type) {
            let t = b.values[e.key] ?? F[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: I._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => R(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: P,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => R(e.key, t),
                                  selectionMode: "single",
                                  disabled: P,
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
            let t = b.values[e.key] ?? F[e.key];
            return (0, l.jsx)(
                s.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => R(e.key, t), disabled: P },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, l.jsx)(
                  _,
                  {
                      projectId: t,
                      isPreview: h,
                      def: e,
                      hint: n,
                      value: b.values[e.key] ?? F[e.key],
                      disabled: P,
                      onChange: (t) => R(e.key, t),
                      fallback: J(e, n),
                  },
                  e.key,
              )
            : "role" === e.type || "user" === e.type
              ? (0, l.jsx)(
                    O,
                    {
                        projectId: t,
                        isPreview: h,
                        def: e,
                        hint: n,
                        value: b.values[e.key] ?? F[e.key],
                        disabled: P,
                        onChange: (t) => R(e.key, t),
                        fallback: J(e, n),
                    },
                    e.key,
                )
              : J(e, n);
    }
    function J(e, t) {
        let n = b.values[e.key] ?? F[e.key];
        return (0, l.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                onChange: (t) => R(e.key, t),
                disabled: P,
                fullWidth: !0,
                ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
            },
            e.key,
        );
    }
    function Q(e) {
        let t = e.def?.label ?? e.name,
            n = V(e.def);
        return e.set && !0 !== C[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: I.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: I.DE,
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
                              text: S.intl.string(k.default.RsvBGf),
                              "aria-label": S.intl.formatToPlainString(k.default.WjoM7z, { label: t }),
                              disabled: P,
                              onClick: () => j((t) => ({ ...t, [e.name]: !0 })),
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
                      onChange: (t) => L(e.name, t),
                      disabled: P,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let H = M
            ? (0, l.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(k.default["A5TC+K"]),
              })
            : null,
        K = (0, l.jsxs)("div", {
            className: I.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == m
                    ? (0, l.jsx)("div", { className: I.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === G.length && 0 === T.length
                      ? (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(k.default.lJJayk),
                        })
                      : null,
                null == m
                    ? null
                    : U
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                q
                                    ? (0, l.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(k.default.dsHRPK),
                                      })
                                    : null,
                                B.map(function (e) {
                                    let t = D.get(e);
                                    if (null != t) return Q(t);
                                    let n = G.find((t) => t.key === e);
                                    return null == n ? null : z(n);
                                }),
                            ],
                        })
                      : G.map(z),
                H,
            ],
        }),
        Y = (0, l.jsxs)("div", {
            className: I.Ek,
            children: [
                (0, l.jsx)(u.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(k.default.dsHRPK),
                }),
                T.map(Q),
                H,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: g({
            fields: K,
            secretFields: Y,
            loaded: null != m,
            valueCount: G.length,
            secretCount: T.length,
            canSave: $,
            saving: P,
            isScoped: U,
            submit: X,
        }),
    });
}
function _(e) {
    let { projectId: t, isPreview: n, def: i, hint: r, value: s, disabled: o, onChange: d, fallback: c } = e,
        v = M(t, n),
        x = (0, a.bG)([g.Ay], () => (null == v ? null : g.Ay.getChannels(v)), [v]);
    if (null == x) return c;
    let y = (0, A.Lp)(x, i.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, p.m1)(e, b.default, m.A),
        leading: (0, h.gU)(e),
    }));
    return (0, l.jsxs)("div", {
        className: I._6,
        children: [
            !0 === i.multiple
                ? (0, l.jsx)(f.Z, {
                      selectionMode: "multiple",
                      clearable: !0,
                      label: i.label,
                      options: y,
                      value: Array.isArray(s) ? s : [],
                      placeholder: S.intl.string(k.default.iZIF9m),
                      onSelectionChange: (e) => d(e ?? []),
                      disabled: o,
                      fullWidth: !0,
                  })
                : (0, l.jsx)(f.Z, {
                      selectionMode: "single",
                      clearable: !0,
                      label: i.label,
                      options: y,
                      value: "string" == typeof s && "" !== s ? s : void 0,
                      placeholder: S.intl.string(k.default.iZIF9m),
                      onSelectionChange: (e) => d(e ?? ""),
                      disabled: o,
                      fullWidth: !0,
                  }),
            null != r ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: r }) : null,
        ],
    });
}
function O(e) {
    var t;
    let n,
        { projectId: i, isPreview: r, def: s, hint: o, value: d, disabled: c, onChange: h, fallback: v } = e,
        x = M(i, r),
        y = ((t = (0, a.bG)(
            [g.Ay, P.A, j.Ay, b.default, m.A],
            () => {
                if (null == x) return [];
                switch (s.type) {
                    case "channel":
                        return (0, A.Lp)(g.Ay.getChannels(x), s.channel_filter).map((e) => ({
                            id: e.id,
                            label: (0, p.m1)(e, b.default, m.A, !0),
                        }));
                    case "role":
                        return P.A.getSortedRoles(x)
                            .filter((e) => String(e.id) !== String(x))
                            .map((e) => ({ id: e.id, label: e.name }));
                    case "user":
                        return j.Ay.getMembers(x).map((e) => {
                            let t = b.default.getUser(e.userId);
                            return { id: e.userId, label: e.nick ?? t?.globalName ?? t?.username ?? e.userId };
                        });
                    default:
                        return [];
                }
            },
            [x, s.type, s.channel_filter],
            C.isEqual,
        )),
        0 === (n = Array.isArray(d) ? d : "string" == typeof d && "" !== d ? [d] : []).length
            ? t
            : [
                  ...n.map((e) => t.find((t) => t.id === e) ?? { id: e, label: e }),
                  ...t.filter((e) => !n.includes(e.id)),
              ]).map((e) => ({ ...e, value: e.id }));
    return null == x
        ? v
        : (0, l.jsxs)("div", {
              className: I._6,
              children: [
                  !0 === s.multiple
                      ? (0, l.jsx)(f.Z, {
                            selectionMode: "multiple",
                            clearable: !0,
                            label: s.label,
                            options: y,
                            value: Array.isArray(d) ? d : [],
                            onSelectionChange: (e) => h(e ?? []),
                            disabled: c,
                            fullWidth: !0,
                        })
                      : (0, l.jsx)(f.Z, {
                            selectionMode: "single",
                            clearable: !0,
                            label: s.label,
                            options: y,
                            value: "string" == typeof d && "" !== d ? d : void 0,
                            onSelectionChange: (e) => h(e ?? ""),
                            disabled: c,
                            fullWidth: !0,
                        }),
                  null != o ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: o }) : null,
              ],
          });
}
