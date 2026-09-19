n.d(t, { ExperimentEmbed: () => _ });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(691540),
    a = n(97483),
    o = n(939249),
    u = n(173936),
    c = n(834730),
    d = n(331322),
    h = n(776078),
    m = n(821609),
    f = n(280450),
    p = n(287809),
    g = n(957565),
    x = n(100392),
    A = n(102609),
    C = n(271478),
    E = n(386976),
    I = n(257433),
    y = n(32523),
    S = n(688151),
    v = n(263748);
function N(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, g.C)(t, () =>
                (0, r.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: a.Ck.SUCCESS }),
            );
        }, [t]);
    return (0, l.jsx)(o.D, {
        className: v.wp,
        onClick: n,
        children: (0, l.jsx)(u.LinkIcon, { size: "sm", color: "currentColor" }),
    });
}
function _(e) {
    let { url: t } = e,
        n = (0, x.OL)(t),
        r = (0, x.Kb)(t),
        { experiments: a, overridesInfo: o } = (0, y.hI)(),
        { experiments: u, overridesInfo: g } = (0, E.op)(),
        _ = i.useMemo(() => (null == n ? null : null != a[n] ? a[n] : u[n]), [a, u, n]),
        j = i.useMemo(() => {
            if (null == n);
            else if (null != o[n]) return o[n];
            else if (null != g[n]) return g[n];
        }, [o, g, n]),
        b = f.default.getId(),
        T = (0, I.Fm)(_, b),
        R = i.useMemo(() => (0, x.GI)(_, T), [T, _]),
        O = (0, s.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == _) return null;
    let M = (0, x.hp)(_).find((e) => e.value === r),
        L = null != M ? S.Ps.EXPERIMENT_TREATMENT : S.Ps.EXPERIMENT,
        k = null != j && null != M && j.variantId === M.value,
        w = (0, l.jsx)(N, { url: t }),
        P = null;
    return (L === S.Ps.EXPERIMENT_TREATMENT && null != M
        ? (P = (0, l.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: M.label }))
        : null != T &&
          (P = (0, l.jsxs)(c.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", R] })),
    O)
        ? (0, l.jsxs)("div", {
              className: v.zr,
              children: [
                  (0, l.jsx)("div", {
                      children: (0, l.jsx)("div", {
                          className: v.wx,
                          children: (0, l.jsxs)(d.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, l.jsxs)(d.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(h.g, { size: "lg" }),
                                          (0, l.jsxs)(d.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, l.jsx)(c.E, { variant: "text-md/semibold", children: _.title }),
                                                  P,
                                              ],
                                          }),
                                      ],
                                  }),
                                  w,
                              ],
                          }),
                      }),
                  }),
                  null != M
                      ? (0, l.jsx)(m.$, {
                            fullWidth: !0,
                            variant: k ? "critical-primary" : "primary",
                            text: k ? `Clear Treatment ${M.value}` : `Apply Treatment ${M.value}`,
                            onClick: function () {
                                null == n ||
                                    null == _ ||
                                    (null != M && (k ? (0, A.t$)(_.system, n, null) : (0, A.t$)(_.system, n, M.value)));
                            },
                        })
                      : (0, l.jsx)("div", {
                            className: v.uh,
                            children: (0, l.jsx)(C.g, { experiment: _, experimentId: n, overrideInfo: j }),
                        }),
              ],
          })
        : null;
}
