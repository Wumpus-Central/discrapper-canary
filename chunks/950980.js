t.d(n, { ExperimentEmbed: () => N });
var l = t(477900),
    a = t(582128),
    r = t(17928),
    i = t(858899),
    o = t(939249),
    s = t(173936),
    c = t(834730),
    u = t(331322),
    d = t(776078),
    m = t(821609),
    h = t(280450),
    p = t(287809),
    g = t(957565),
    f = t(100392),
    x = t(102609),
    j = t(271478),
    y = t(386976),
    A = t(257433),
    C = t(32523),
    k = t(688151),
    I = t(263748);
function E(e) {
    let { url: n } = e,
        t = a.useCallback(() => {
            (0, g.C)(n, () => (0, i.P0)({ text: "Copied experiment link", variant: "success" }));
        }, [n]);
    return (0, l.jsx)(o.D, {
        className: I.wp,
        onClick: t,
        children: (0, l.jsx)(s.LinkIcon, { size: "sm", color: "currentColor" }),
    });
}
function N(e) {
    let { url: n } = e,
        t = (0, f.OL)(n),
        i = (0, f.Kb)(n),
        { experiments: o, overridesInfo: s } = (0, C.hI)(),
        { experiments: g, overridesInfo: N } = (0, y.op)(),
        v = a.useMemo(() => (null == t ? null : null != o[t] ? o[t] : g[t]), [o, g, t]),
        b = a.useMemo(() => {
            if (null == t);
            else if (null != s[t]) return s[t];
            else if (null != N[t]) return N[t];
        }, [s, N, t]),
        S = h.default.getId(),
        L = (0, A.Fm)(v, S),
        M = a.useMemo(() => (0, f.GI)(v, L), [L, v]),
        T = (0, r.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == t || null == v) return null;
    let _ = (0, f.hp)(v).find((e) => e.value === i),
        P = null != _ ? k.Ps.EXPERIMENT_TREATMENT : k.Ps.EXPERIMENT,
        O = null != b && null != _ && b.variantId === _.value,
        w = (0, l.jsx)(E, { url: n }),
        D = null;
    return (P === k.Ps.EXPERIMENT_TREATMENT && null != _
        ? (D = (0, l.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: _.label }))
        : null != L &&
          (D = (0, l.jsxs)(c.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", M] })),
    T)
        ? (0, l.jsxs)("div", {
              className: I.zr,
              children: [
                  (0, l.jsx)("div", {
                      children: (0, l.jsx)("div", {
                          className: I.wx,
                          children: (0, l.jsxs)(u.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, l.jsxs)(u.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(d.g, { size: "lg" }),
                                          (0, l.jsxs)(u.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, l.jsx)(c.E, { variant: "text-md/semibold", children: v.title }),
                                                  D,
                                              ],
                                          }),
                                      ],
                                  }),
                                  w,
                              ],
                          }),
                      }),
                  }),
                  null != _
                      ? (0, l.jsx)(m.$, {
                            fullWidth: !0,
                            variant: O ? "critical-primary" : "primary",
                            text: O ? `Clear Treatment ${_.value}` : `Apply Treatment ${_.value}`,
                            onClick: function () {
                                null == t ||
                                    null == v ||
                                    (null != _ && (O ? (0, x.t$)(v.system, t, null) : (0, x.t$)(v.system, t, _.value)));
                            },
                        })
                      : (0, l.jsx)("div", {
                            className: I.uh,
                            children: (0, l.jsx)(j.g, { experiment: v, experimentId: t, overrideInfo: b }),
                        }),
              ],
          })
        : null;
}
