t.d(n, { ExperimentEmbed: () => v });
var l = t(477900),
    r = t(582128),
    a = t(17928),
    i = t(376357),
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
    A = t(102609),
    y = t(271478),
    x = t(386976),
    E = t(257433),
    j = t(32523),
    I = t(688151),
    C = t(263748);
function k(e) {
    let { url: n } = e,
        t = r.useCallback(() => {
            (0, g.C)(n, () =>
                (0, i.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: i.Ck.SUCCESS }),
            );
        }, [n]);
    return (0, l.jsx)(o.D, {
        className: C.wp,
        onClick: t,
        children: (0, l.jsx)(s.LinkIcon, { size: "sm", color: "currentColor" }),
    });
}
function v(e) {
    let { url: n } = e,
        t = (0, f.OL)(n),
        i = (0, f.Kb)(n),
        { experiments: o, overridesInfo: s } = (0, j.hI)(),
        { experiments: g, overridesInfo: v } = (0, x.op)(),
        N = r.useMemo(() => (null == t ? null : null != o[t] ? o[t] : g[t]), [o, g, t]),
        S = r.useMemo(() => {
            if (null == t);
            else if (null != s[t]) return s[t];
            else if (null != v[t]) return v[t];
        }, [s, v, t]),
        b = h.default.getId(),
        T = (0, E.Fm)(N, b),
        L = r.useMemo(() => (0, f.GI)(N, T), [T, N]),
        M = (0, a.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == t || null == N) return null;
    let _ = (0, f.hp)(N).find((e) => e.value === i),
        P = null != _ ? I.Ps.EXPERIMENT_TREATMENT : I.Ps.EXPERIMENT,
        R = null != S && null != _ && S.variantId === _.value,
        O = (0, l.jsx)(k, { url: n }),
        w = null;
    return (P === I.Ps.EXPERIMENT_TREATMENT && null != _
        ? (w = (0, l.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: _.label }))
        : null != T &&
          (w = (0, l.jsxs)(c.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", L] })),
    M)
        ? (0, l.jsxs)("div", {
              className: C.zr,
              children: [
                  (0, l.jsx)("div", {
                      children: (0, l.jsx)("div", {
                          className: C.wx,
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
                                                  (0, l.jsx)(c.E, { variant: "text-md/semibold", children: N.title }),
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
                      ? (0, l.jsx)(m.$, {
                            fullWidth: !0,
                            variant: R ? "critical-primary" : "primary",
                            text: R ? `Clear Treatment ${_.value}` : `Apply Treatment ${_.value}`,
                            onClick: function () {
                                null == t ||
                                    null == N ||
                                    (null != _ && (R ? (0, A.t$)(N.system, t, null) : (0, A.t$)(N.system, t, _.value)));
                            },
                        })
                      : (0, l.jsx)("div", {
                            className: C.uh,
                            children: (0, l.jsx)(y.g, { experiment: N, experimentId: t, overrideInfo: S }),
                        }),
              ],
          })
        : null;
}
