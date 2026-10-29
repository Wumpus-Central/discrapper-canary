t.d(n, { ExperimentEmbed: () => N });
var l = t(477900),
    a = t(582128),
    i = t(17928),
    r = t(858899),
    s = t(939249),
    o = t(173936),
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
    A = t(386976),
    y = t(257433),
    C = t(32523),
    E = t(688151),
    I = t(263748);
function k(e) {
    let { url: n } = e,
        t = a.useCallback(() => {
            (0, g.C)(n, () => (0, r.P0)({ text: "Copied experiment link", variant: "success" }));
        }, [n]);
    return (0, l.jsx)(s.D, {
        className: I.wp,
        onClick: t,
        children: (0, l.jsx)(o.LinkIcon, { size: "sm", color: "currentColor" }),
    });
}
function N(e) {
    let { url: n } = e,
        t = (0, f.OL)(n),
        r = (0, f.Kb)(n),
        { experiments: s, overridesInfo: o } = (0, C.hI)(),
        { experiments: g, overridesInfo: N } = (0, A.op)(),
        v = a.useMemo(() => (null == t ? null : null != s[t] ? s[t] : g[t]), [s, g, t]),
        b = a.useMemo(() => {
            if (null == t);
            else if (null != o[t]) return o[t];
            else if (null != N[t]) return N[t];
        }, [o, N, t]),
        S = h.default.getId(),
        M = (0, y.Fm)(v, S),
        L = a.useMemo(() => (0, f.GI)(v, M), [M, v]),
        T = (0, i.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == t || null == v) return null;
    let _ = (0, f.hp)(v).find((e) => e.value === r),
        w = null != _ ? E.Ps.EXPERIMENT_TREATMENT : E.Ps.EXPERIMENT,
        O = null != b && null != _ && b.variantId === _.value,
        P = (0, l.jsx)(k, { url: n }),
        D = null;
    return (w === E.Ps.EXPERIMENT_TREATMENT && null != _
        ? (D = (0, l.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: _.label }))
        : null != M &&
          (D = (0, l.jsxs)(c.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", L] })),
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
                                  P,
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
