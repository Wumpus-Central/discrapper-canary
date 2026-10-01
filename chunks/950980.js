t.d(n, { ExperimentEmbed: () => N });
var l = t(477900),
    r = t(582128),
    a = t(17928),
    i = t(376357),
    o = t(97483),
    s = t(939249),
    c = t(173936),
    u = t(834730),
    d = t(331322),
    m = t(776078),
    h = t(821609),
    p = t(280450),
    g = t(287809),
    f = t(957565),
    A = t(100392),
    y = t(102609),
    x = t(271478),
    E = t(386976),
    j = t(257433),
    I = t(32523),
    C = t(688151),
    k = t(263748);
function v(e) {
    let { url: n } = e,
        t = r.useCallback(() => {
            (0, f.C)(n, () =>
                (0, i.P)({ id: "experiment-link-copied", message: "Copied experiment link", type: o.Ck.SUCCESS }),
            );
        }, [n]);
    return (0, l.jsx)(s.D, {
        className: k.wp,
        onClick: t,
        children: (0, l.jsx)(c.LinkIcon, { size: "sm", color: "currentColor" }),
    });
}
function N(e) {
    let { url: n } = e,
        t = (0, A.OL)(n),
        i = (0, A.Kb)(n),
        { experiments: o, overridesInfo: s } = (0, I.hI)(),
        { experiments: c, overridesInfo: f } = (0, E.op)(),
        N = r.useMemo(() => (null == t ? null : null != o[t] ? o[t] : c[t]), [o, c, t]),
        S = r.useMemo(() => {
            if (null == t);
            else if (null != s[t]) return s[t];
            else if (null != f[t]) return f[t];
        }, [s, f, t]),
        b = p.default.getId(),
        T = (0, j.Fm)(N, b),
        L = r.useMemo(() => (0, A.GI)(N, T), [T, N]),
        M = (0, a.bG)([g.default], () => {
            let e = g.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == t || null == N) return null;
    let _ = (0, A.hp)(N).find((e) => e.value === i),
        P = null != _ ? C.Ps.EXPERIMENT_TREATMENT : C.Ps.EXPERIMENT,
        R = null != S && null != _ && S.variantId === _.value,
        O = (0, l.jsx)(v, { url: n }),
        w = null;
    return (P === C.Ps.EXPERIMENT_TREATMENT && null != _
        ? (w = (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: _.label }))
        : null != T &&
          (w = (0, l.jsxs)(u.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", L] })),
    M)
        ? (0, l.jsxs)("div", {
              className: k.zr,
              children: [
                  (0, l.jsx)("div", {
                      children: (0, l.jsx)("div", {
                          className: k.wx,
                          children: (0, l.jsxs)(d.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, l.jsxs)(d.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(m.g, { size: "lg" }),
                                          (0, l.jsxs)(d.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, l.jsx)(u.E, { variant: "text-md/semibold", children: N.title }),
                                                  w,
                                              ],
                                          }),
                                      ],
                                  }),
                                  O,
                              ],
                          }),
                      }),
                  }),
                  null != _
                      ? (0, l.jsx)(h.$, {
                            fullWidth: !0,
                            variant: R ? "critical-primary" : "primary",
                            text: R ? `Clear Treatment ${_.value}` : `Apply Treatment ${_.value}`,
                            onClick: function () {
                                null == t ||
                                    null == N ||
                                    (null != _ && (R ? (0, y.t$)(N.system, t, null) : (0, y.t$)(N.system, t, _.value)));
                            },
                        })
                      : (0, l.jsx)("div", {
                            className: k.uh,
                            children: (0, l.jsx)(x.g, { experiment: N, experimentId: t, overrideInfo: S }),
                        }),
              ],
          })
        : null;
}
