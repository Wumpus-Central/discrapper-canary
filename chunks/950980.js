"use strict";
n.d(t, { Z: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(691540),
    a = n(97483),
    o = n(939249),
    c = n(173936),
    u = n(834730),
    d = n(331322),
    h = n(776078),
    m = n(821609),
    p = n(961350),
    f = n(287809),
    g = n(957565),
    _ = n(100392),
    x = n(102609),
    A = n(271478),
    C = n(386976),
    E = n(257433),
    I = n(32523),
    v = n(688151),
    y = n(919093);
function S(e) {
    let { url: t } = e,
        n = l.useCallback(() => {
            (0, g.C)(t, () =>
                (0, r.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: a.Ck.SUCCESS }),
            );
        }, [t]);
    return (0, i.jsx)(o.D, {
        className: y.wp,
        onClick: n,
        children: (0, i.jsx)(c.q, { size: "sm", color: "currentColor" }),
    });
}
function b(e) {
    let { url: t } = e,
        n = (0, _.OL)(t),
        r = (0, _.Kb)(t),
        { experiments: a, overridesInfo: o } = (0, I.hI)(),
        { experiments: c, overridesInfo: g } = (0, C.op)(),
        b = l.useMemo(() => (null == n ? null : null != a[n] ? a[n] : c[n]), [a, c, n]),
        N = l.useMemo(() => {
            if (null == n);
            else if (null != o[n]) return o[n];
            else if (null != g[n]) return g[n];
        }, [o, g, n]),
        T = p.default.getId(),
        j = (0, E.Fm)(b, T),
        R = l.useMemo(() => (0, _.GI)(b, j), [j, b]),
        w = (0, s.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == b) return null;
    let L = (0, _.hp)(b).find((e) => e.value === r),
        M = null != L ? v.Ps.EXPERIMENT_TREATMENT : v.Ps.EXPERIMENT,
        k = null != N && null != L && N.variantId === L.value,
        O = (0, i.jsx)(S, { url: t }),
        P = null;
    return (M === v.Ps.EXPERIMENT_TREATMENT && null != L
        ? (P = (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: L.label }))
        : null != j &&
          (P = (0, i.jsxs)(u.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", R] })),
    w)
        ? (0, i.jsxs)("div", {
              className: y.zr,
              children: [
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("div", {
                          className: y.wx,
                          children: (0, i.jsxs)(d.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, i.jsxs)(d.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, i.jsx)(h.g, { size: "lg" }),
                                          (0, i.jsxs)(d.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, i.jsx)(u.E, { variant: "text-md/semibold", children: b.title }),
                                                  P,
                                              ],
                                          }),
                                      ],
                                  }),
                                  O,
                              ],
                          }),
                      }),
                  }),
                  null != L
                      ? (0, i.jsx)(m.$, {
                            fullWidth: !0,
                            variant: k ? "critical-primary" : "primary",
                            text: k ? `Clear Treatment ${L.value}` : `Apply Treatment ${L.value}`,
                            onClick: () => {
                                null != L && (k ? (0, x.t$)(b.system, n, null) : (0, x.t$)(b.system, n, L.value));
                            },
                        })
                      : (0, i.jsx)("div", {
                            className: y.uh,
                            children: (0, i.jsx)(A.g, { experiment: b, experimentId: n, overrideInfo: N }),
                        }),
              ],
          })
        : null;
}
