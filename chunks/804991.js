(e.d(t, { default: () => k }), e(938796));
var n = e(477900),
    a = e(582128),
    i = e(17928),
    r = e(189213),
    s = e(545442),
    u = e(331322),
    o = e(95477),
    d = e(243721),
    c = e(834730),
    g = e(890497),
    x = e(317525),
    f = e(673724),
    h = e(948230),
    b = e(683180),
    m = e(972786),
    p = e(652215),
    v = e(759967),
    S = e(375708);
function k(l) {
    let t,
        { projectId: e, guildId: k, transitionState: C, onClose: j } = l,
        E = (0, i.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
        y = (0, i.yK)([x.A], () => (null != k ? x.A.getSortedRoles(k) : []), [k]),
        A = a.useMemo(
            () =>
                y.map((l) => ({
                    key: l.id,
                    id: l.id,
                    label: l.name,
                    value: l.id,
                    leading: () => (0, n.jsx)(s.R, { color: l.colorString ?? p.TpD, colors: l.colorStrings }),
                })),
            [y],
        ),
        P = E?.collaborator_role_ids ?? [],
        [_] = a.useState(E?.name ?? ""),
        [T, w] = a.useState(_),
        [B, q] = a.useState(E?.flags ?? 0),
        [H, I] = a.useState(() => [...P]),
        [L, R] = a.useState(!1),
        [U, V] = a.useState(null),
        [M, Q] = a.useState(null),
        [W, Z] = a.useState(null),
        z = a.useId(),
        D = T.trim(),
        F = null != E && (0, f.IU)(E),
        K = null != E && null != k && (0, f.RX)(E),
        { isPublic: G, isShared: J } = (0, b.oA)(B),
        O = null != E && D !== _,
        X = F && B !== (E?.flags ?? 0),
        Y = K && !((t = H instanceof Set ? H : new Set(H)).size === P.length && P.every((l) => t.has(l))),
        N = O || X || Y,
        $ = a.useCallback((l) => {
            (w(l), V(null), Z(null));
        }, []),
        ll = a.useCallback((l, t) => {
            (q((e) => (t ? e | l : e & ~l)), Q(null), Z(null));
        }, []),
        lt = a.useCallback((l) => {
            l.length > f.sq ? Q(S.intl.formatToPlainString(v.default.VPUL05, { max: f.sq })) : (I(l), Q(null), Z(null));
        }, []),
        le = a.useCallback(
            async (l) => {
                if ((l.preventDefault(), null == E || !N || L)) return;
                if ("" === D) return void V(S.intl.string(v.default.I2hgEB));
                let t = {};
                (O && (t.name = D),
                    X && (t.flags = B),
                    Y && (t.collaborator_role_ids = [...H].sort()),
                    null == E.guild_id && null != k && (Y || (X && G)) && (t.guild_id = k),
                    R(!0),
                    Z(null));
                try {
                    if (!(await (0, h.CW)(e, t)).ok) return void Z(S.intl.string(v.default.dxH2ZV));
                    await j();
                } catch {
                    Z(S.intl.string(v.default.dxH2ZV));
                } finally {
                    R(!1);
                }
            },
            [B, X, k, N, G, O, j, E, e, Y, L, H, D],
        );
    return (0, n.jsx)("form", {
        onSubmit: le,
        children: (0, n.jsx)(r.Modal, {
            transitionState: C,
            onClose: j,
            title: S.intl.string(v.default["xhcY+n"]),
            size: "md",
            actions: [
                { text: S.intl.string(S.t["ETE/oC"]), variant: "secondary", onClick: j, disabled: L },
                {
                    text: S.intl.string(S.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    onClick: le,
                    loading: L,
                    disabled: !N || "" === D || L,
                },
            ],
            children: (0, n.jsxs)(u.B, {
                gap: 20,
                children: [
                    (0, n.jsx)(o.k, {
                        label: S.intl.string(v.default.u9UpIx),
                        value: T,
                        onChange: $,
                        error: U,
                        maxLength: 128,
                        disabled: L,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                    F
                        ? (0, n.jsx)(d.d, {
                              label: S.intl.string(v.default.EHMPvA),
                              description: S.intl.string(v.default.bQQ4uT),
                              checked: J,
                              disabled: L,
                              onChange: (l) => ll(f.A2.SHAREABLE, l),
                          })
                        : null,
                    F
                        ? (0, n.jsx)(d.d, {
                              label: S.intl.string(v.default.fvxLKl),
                              description: S.intl.string(v.default.Eb3Pe3),
                              checked: G,
                              disabled: L,
                              onChange: (l) => ll(f.A2.PUBLIC, l),
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
                                      value: H,
                                      options: A,
                                      maxOptionsVisible: 6,
                                      wrapTags: !0,
                                      disabled: L || !G,
                                      "aria-invalid": null != M,
                                      "aria-errormessage": null != M ? z : void 0,
                                      onSelectionChange: lt,
                                  }),
                                  (0, n.jsx)(c.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: S.intl.formatToPlainString(v.default.eaqbJt, {
                                          count: H.length,
                                          max: f.sq,
                                      }),
                                  }),
                                  G
                                      ? null
                                      : (0, n.jsx)(c.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: S.intl.string(v.default.FTvt33),
                                        }),
                                  null != M
                                      ? (0, n.jsx)(c.E, {
                                            id: z,
                                            variant: "text-xs/normal",
                                            color: "text-feedback-critical",
                                            role: "alert",
                                            children: M,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    null != W
                        ? (0, n.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: W,
                          })
                        : null,
                ],
            }),
        }),
    });
}
