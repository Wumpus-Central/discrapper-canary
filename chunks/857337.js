e.d(t, { default: () => k }), e(938796);
var n = e(477900),
    a = e(582128),
    i = e(17928),
    r = e(189213),
    s = e(545442),
    u = e(331322),
    o = e(95477),
    d = e(243721),
    c = e(834730),
    g = e(783878),
    x = e(317525),
    f = e(673724),
    h = e(948230),
    b = e(683180),
    m = e(972786),
    p = e(652215),
    v = e(295813),
    S = e(375708);
function k(l) {
    let { projectId: t, guildId: e, transitionState: k, onClose: C } = l,
        j = (0, i.bG)([m.A], () => m.A.getProject(t), [t]),
        E = (0, i.yK)([x.A], () => (null != e ? x.A.getSortedRoles(e) : []), [e]),
        A = a.useMemo(
            () =>
                E.map((l) => ({
                    key: l.id,
                    id: l.id,
                    label: l.name,
                    value: l.id,
                    leading: () => (0, n.jsx)(s.R, { color: l.colorString ?? p.TpD, colors: l.colorStrings }),
                })),
            [E],
        ),
        y = j?.collaborator_role_ids ?? [],
        [P] = a.useState(j?.name ?? ""),
        [_, T] = a.useState(P),
        [w, B] = a.useState(j?.flags ?? 0),
        [q, H] = a.useState(() => [...y]),
        [I, L] = a.useState(!1),
        [R, U] = a.useState(null),
        [V, M] = a.useState(null),
        [Q, W] = a.useState(null),
        Z = a.useId(),
        D = _.trim(),
        F = null != j && (0, f.IU)(j),
        K = null != j && null != e && (0, f.RX)(j),
        { isPublic: z, isShared: G } = (0, b.oA)(w),
        J = null != j && D !== P,
        O = F && w !== (j?.flags ?? 0),
        X =
            K &&
            !(function (l, t) {
                if (l.length !== t.length) return !1;
                let e = new Set(t);
                return l.every((l) => e.has(l));
            })(q, y),
        Y = J || O || X,
        N = a.useCallback((l) => {
            T(l), U(null), W(null);
        }, []),
        $ = a.useCallback((l, t) => {
            B((e) => (t ? e | l : e & ~l)), M(null), W(null);
        }, []),
        ll = a.useCallback((l) => {
            l.length > f.sq ? M(S.intl.formatToPlainString(v.default.VPUL05, { max: f.sq })) : (H(l), M(null), W(null));
        }, []),
        lt = a.useCallback(
            async (l) => {
                if ((l.preventDefault(), null == j || !Y || I)) return;
                if ("" === D) return void U(S.intl.string(v.default.I2hgEB));
                let n = {};
                J && (n.name = D),
                    O && (n.flags = w),
                    X && (n.collaborator_role_ids = [...q].sort()),
                    null == j.guild_id && null != e && (X || (O && z)) && (n.guild_id = e),
                    L(!0),
                    W(null);
                try {
                    if (!(await (0, h.CW)(t, n)).ok) return void W(S.intl.string(v.default.dxH2ZV));
                    await C();
                } catch {
                    W(S.intl.string(v.default.dxH2ZV));
                } finally {
                    L(!1);
                }
            },
            [w, O, e, Y, z, J, C, j, t, X, I, q, D],
        );
    return (0, n.jsx)("form", {
        onSubmit: lt,
        children: (0, n.jsx)(r.Modal, {
            transitionState: k,
            onClose: C,
            title: S.intl.string(v.default["xhcY+n"]),
            size: "md",
            actions: [
                { text: S.intl.string(S.t["ETE/oC"]), variant: "secondary", onClick: C, disabled: I },
                {
                    text: S.intl.string(S.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    onClick: lt,
                    loading: I,
                    disabled: !Y || "" === D || I,
                },
            ],
            children: (0, n.jsxs)(u.B, {
                gap: 20,
                children: [
                    (0, n.jsx)(o.k, {
                        label: S.intl.string(v.default.u9UpIx),
                        value: _,
                        onChange: N,
                        error: R,
                        maxLength: 128,
                        disabled: I,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                    F
                        ? (0, n.jsx)(d.d, {
                              label: S.intl.string(v.default.EHMPvA),
                              description: S.intl.string(v.default.bQQ4uT),
                              checked: G,
                              disabled: I,
                              onChange: (l) => $(f.A2.SHAREABLE, l),
                          })
                        : null,
                    F
                        ? (0, n.jsx)(d.d, {
                              label: S.intl.string(v.default.fvxLKl),
                              description: S.intl.string(v.default.Eb3Pe3),
                              checked: z,
                              disabled: I,
                              onChange: (l) => $(f.A2.PUBLIC, l),
                          })
                        : null,
                    K
                        ? (0, n.jsxs)(u.B, {
                              gap: 8,
                              children: [
                                  (0, n.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: S.intl.string(v.default.gWSQVl),
                                  }),
                                  (0, n.jsx)(g.Z, {
                                      selectionMode: "multiple",
                                      label: S.intl.string(v.default.fqvhf0),
                                      placeholder: S.intl.string(v.default.xEhUCx),
                                      value: q,
                                      options: A,
                                      maxOptionsVisible: 6,
                                      wrapTags: !0,
                                      disabled: I || !z,
                                      "aria-invalid": null != V,
                                      "aria-errormessage": null != V ? Z : void 0,
                                      onSelectionChange: ll,
                                  }),
                                  (0, n.jsx)(c.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: S.intl.formatToPlainString(v.default.eaqbJt, {
                                          count: q.length,
                                          max: f.sq,
                                      }),
                                  }),
                                  z
                                      ? null
                                      : (0, n.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: S.intl.string(v.default.FTvt33),
                                        }),
                                  null != V
                                      ? (0, n.jsx)(c.E, {
                                            id: Z,
                                            variant: "text-xs/normal",
                                            color: "text-feedback-critical",
                                            role: "alert",
                                            children: V,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    null != Q
                        ? (0, n.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: Q,
                          })
                        : null,
                ],
            }),
        }),
    });
}
