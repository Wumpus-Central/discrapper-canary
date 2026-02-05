"use strict";
n.d(t, { Z: () => A });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(961350),
    l = n(287809),
    u = n(957565),
    c = n(100392),
    d = n(102609),
    _ = n(271478),
    f = n(386976),
    p = n(257433),
    h = n(32523),
    m = n(688151),
    g = n(717482);
function E(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, u.C)(t, () =>
                (0, s.showToast)({
                    id: "experiment-link-copied",
                    message: "Copied experiment link",
                    type: s.ToastType.SUCCESS,
                }),
            );
        }, [t]);
    return (0, r.jsx)(s.DUT, {
        className: g.wp,
        onClick: n,
        children: (0, r.jsx)(s.qYV, { size: "sm", color: "currentColor" }),
    });
}
function A(e) {
    let { url: t } = e,
        n = (0, c.OL)(t),
        u = (0, c.Kb)(t),
        { experiments: A, overridesInfo: I } = (0, h.hI)(),
        { experiments: T, overridesInfo: y } = (0, f.op)(),
        S = i.useMemo(() => (null == n ? null : null != A[n] ? A[n] : T[n]), [A, T, n]),
        v = i.useMemo(() => {
            if (null == n);
            else if (null != I[n]) return I[n];
            else if (null != y[n]) return y[n];
        }, [I, y, n]),
        C = o.default.getId(),
        b = (0, p.Fm)(S, C),
        N = i.useMemo(() => (0, c.GI)(S, b), [b, S]),
        R = (0, a.bG)([l.default], () => {
            let e = l.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == S) return null;
    let O = (0, c.hp)(S).find((e) => e.value === u),
        D = null != O ? m.Ps.EXPERIMENT_TREATMENT : m.Ps.EXPERIMENT,
        L = null != v && null != O && v.variantId === O.value,
        w = () => {
            null != O && (L ? (0, d.t$)(S.system, n, null) : (0, d.t$)(S.system, n, O.value));
        },
        x = (0, r.jsx)(E, { url: t }),
        P = null;
    return (D === m.Ps.EXPERIMENT_TREATMENT && null != O
        ? (P = (0, r.jsx)(s.Text, { variant: "text-xs/normal", color: "text-muted", children: O.label }))
        : null != b &&
          (P = (0, r.jsxs)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Server Config: ", N],
          })),
    R)
        ? (0, r.jsxs)("div", {
              className: g.zr,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("div", {
                          className: g.wx,
                          children: (0, r.jsxs)(s.BJc, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, r.jsxs)(s.BJc, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, r.jsx)(s.gR_, { size: "lg" }),
                                          (0, r.jsxs)(s.BJc, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, r.jsx)(s.Text, {
                                                      variant: "text-md/semibold",
                                                      children: S.title,
                                                  }),
                                                  P,
                                              ],
                                          }),
                                      ],
                                  }),
                                  x,
                              ],
                          }),
                      }),
                  }),
                  null != O
                      ? (0, r.jsx)(s.Button, {
                            fullWidth: !0,
                            variant: L ? "critical-primary" : "primary",
                            text: L ? `Clear Treatment ${O.value}` : `Apply Treatment ${O.value}`,
                            onClick: w,
                        })
                      : (0, r.jsx)("div", {
                            className: g.uh,
                            children: (0, r.jsx)(_.g, { experiment: S, experimentId: n, overrideInfo: v }),
                        }),
              ],
          })
        : null;
}
