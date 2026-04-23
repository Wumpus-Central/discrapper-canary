"use strict";
n.d(t, { Z: () => C });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(691540),
    o = n(97483),
    l = n(939249),
    u = n(173936),
    c = n(834730),
    d = n(331322),
    _ = n(776078),
    f = n(821609),
    p = n(961350),
    h = n(287809),
    E = n(957565),
    m = n(100392),
    g = n(102609),
    A = n(271478),
    I = n(386976),
    T = n(257433),
    S = n(32523),
    y = n(688151),
    N = n(919093);
function v(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, E.C)(t, () =>
                (0, a.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: o.Ck.SUCCESS }),
            );
        }, [t]);
    return (0, r.jsx)(l.D, {
        className: N.wp,
        onClick: n,
        children: (0, r.jsx)(u.q, { size: "sm", color: "currentColor" }),
    });
}
function C(e) {
    let { url: t } = e,
        n = (0, m.OL)(t),
        a = (0, m.Kb)(t),
        { experiments: o, overridesInfo: l } = (0, S.hI)(),
        { experiments: u, overridesInfo: E } = (0, I.op)(),
        C = i.useMemo(() => (null == n ? null : null != o[n] ? o[n] : u[n]), [o, u, n]),
        O = i.useMemo(() => {
            if (null == n);
            else if (null != l[n]) return l[n];
            else if (null != E[n]) return E[n];
        }, [l, E, n]),
        R = p.default.getId(),
        b = (0, T.Fm)(C, R),
        D = i.useMemo(() => (0, m.GI)(C, b), [b, C]),
        L = (0, s.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == C) return null;
    let w = (0, m.hp)(C).find((e) => e.value === a),
        M = null != w ? y.Ps.EXPERIMENT_TREATMENT : y.Ps.EXPERIMENT,
        P = null != O && null != w && O.variantId === w.value,
        x = (0, r.jsx)(v, { url: t }),
        k = null;
    return (M === y.Ps.EXPERIMENT_TREATMENT && null != w
        ? (k = (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: w.label }))
        : null != b &&
          (k = (0, r.jsxs)(c.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", D] })),
    L)
        ? (0, r.jsxs)("div", {
              className: N.zr,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("div", {
                          className: N.wx,
                          children: (0, r.jsxs)(d.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, r.jsxs)(d.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, r.jsx)(_.g, { size: "lg" }),
                                          (0, r.jsxs)(d.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, r.jsx)(c.E, { variant: "text-md/semibold", children: C.title }),
                                                  k,
                                              ],
                                          }),
                                      ],
                                  }),
                                  x,
                              ],
                          }),
                      }),
                  }),
                  null != w
                      ? (0, r.jsx)(f.$, {
                            fullWidth: !0,
                            variant: P ? "critical-primary" : "primary",
                            text: P ? `Clear Treatment ${w.value}` : `Apply Treatment ${w.value}`,
                            onClick: () => {
                                null != w && (P ? (0, g.t$)(C.system, n, null) : (0, g.t$)(C.system, n, w.value));
                            },
                        })
                      : (0, r.jsx)("div", {
                            className: N.uh,
                            children: (0, r.jsx)(A.g, { experiment: C, experimentId: n, overrideInfo: O }),
                        }),
              ],
          })
        : null;
}
