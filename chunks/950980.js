var l = t(477900),
    a = t(582128),
    i = t(855986),
    r = t(858899),
    s = t(939249),
    o = t(173936),
    c = t(834730),
    u = t(331322),
    d = t(776078),
    m = t(821609),
    h = t(46653),
    p = t(287809),
    x = t(957565),
    j = t(100392),
    g = t(102609),
    f = t(271478),
    A = t(386976),
    y = t(257433),
    I = t(32523),
    k = t(688151),
    C = t(263748);
function E(e) {
    let { url: n } = e,
        t = a.useCallback(() => {
            (0, x.C)(n, () => (0, r.P0)({ text: "Copied experiment link", variant: "success" }));
        }, [n]);
    return (0, l.jsx)(s.D, {
        className: C.wp,
        onClick: t,
        children: (0, l.jsx)(o.LinkIcon, { size: "sm", color: "currentColor" }),
    });
}
t.d(
    n,
    {},
    {
        ExperimentEmbed: function (e) {
            let { url: n } = e,
                t = (0, j.OL)(n),
                r = (0, j.Kb)(n),
                { experiments: s, overridesInfo: o } = (0, I.hI)(),
                { experiments: x, overridesInfo: v } = (0, A.op)(),
                N = a.useMemo(() => (null == t ? null : null != s[t] ? s[t] : x[t]), [s, x, t]),
                b = a.useMemo(() => {
                    if (null == t);
                    else if (null != o[t]) return o[t];
                    else if (null != v[t]) return v[t];
                }, [o, v, t]),
                S = h.default.getId(),
                _ = (0, y.Fm)(N, S),
                M = a.useMemo(() => (0, j.GI)(N, _), [_, N]),
                L = (0, i.bG)([p.default], () => {
                    let e = p.default.getCurrentUser();
                    return e?.isStaff() || e?.isStaffPersonal();
                });
            if (null == t || null == N) return null;
            let w = (0, j.hp)(N).find((e) => e.value === r),
                T = null != w ? k.Ps.EXPERIMENT_TREATMENT : k.Ps.EXPERIMENT,
                O = null != b && null != w && b.variantId === w.value,
                P = (0, l.jsx)(E, { url: n }),
                R = null;
            return (T === k.Ps.EXPERIMENT_TREATMENT && null != w
                ? (R = (0, l.jsx)(c.E, { variant: "body-xs/normal", color: "text-muted", children: w.label }))
                : null != _ &&
                  (R = (0, l.jsxs)(c.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: ["Server Config: ", M],
                  })),
            L)
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
                                                  (0, l.jsx)(d.ScienceIcon, { size: "lg" }),
                                                  (0, l.jsxs)(u.B, {
                                                      direction: "vertical",
                                                      gap: 0,
                                                      children: [
                                                          (0, l.jsx)(c.E, {
                                                              variant: "body-md/semibold",
                                                              children: N.title,
                                                          }),
                                                          R,
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          P,
                                      ],
                                  }),
                              }),
                          }),
                          null != w
                              ? (0, l.jsx)(m.$, {
                                    fullWidth: !0,
                                    variant: O ? "critical-primary" : "primary",
                                    text: O ? `Clear Treatment ${w.value}` : `Apply Treatment ${w.value}`,
                                    onClick: function () {
                                        null == t ||
                                            null == N ||
                                            (null != w &&
                                                (O ? (0, g.t$)(N.system, t, null) : (0, g.t$)(N.system, t, w.value)));
                                    },
                                })
                              : (0, l.jsx)("div", {
                                    className: C.uh,
                                    children: (0, l.jsx)(f.g, { experiment: N, experimentId: t, overrideInfo: b }),
                                }),
                      ],
                  })
                : null;
        },
    },
);
