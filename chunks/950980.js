n.d(t, { Z: () => b });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(961350),
    l = n(287809),
    c = n(957565),
    u = n(100392),
    d = n(102609),
    f = n(271478),
    p = n(386976),
    _ = n(257433),
    h = n(32523),
    m = n(688151),
    g = n(717482);
function E(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, c.C)(t, () =>
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
        children: (0, r.jsx)(s.qYV, {
            size: "sm",
            color: "currentColor",
        }),
    });
}
function b(e) {
    let { url: t } = e,
        n = (0, u.OL)(t),
        c = (0, u.Kb)(t),
        { experiments: b, overridesInfo: y } = (0, h.hI)(),
        { experiments: O, overridesInfo: A } = (0, p.op)(),
        v = i.useMemo(() => (null == n ? null : null != b[n] ? b[n] : O[n]), [b, O, n]),
        S = i.useMemo(() => {
            if (null == n);
            else if (null != y[n]) return y[n];
            else if (null != A[n]) return A[n];
        }, [y, A, n]),
        I = o.default.getId(),
        T = (0, _.Fm)(v, I),
        C = i.useMemo(() => (0, u.GI)(v, T), [T, v]),
        N = (0, a.bG)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n || null == v) return null;
    let R = (0, u.hp)(v).find((e) => e.value === c),
        w = null != R ? m.Ps.EXPERIMENT_TREATMENT : m.Ps.EXPERIMENT,
        P = null != S && null != R && S.variantId === R.value,
        D = () => {
            null != R && (P ? (0, d.t$)(v.system, n, null) : (0, d.t$)(v.system, n, R.value));
        },
        x = (0, r.jsx)(E, { url: t }),
        L = null;
    return (w === m.Ps.EXPERIMENT_TREATMENT && null != R
        ? (L = (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: R.label,
          }))
        : null != T &&
          (L = (0, r.jsxs)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Server Config: ", C],
          })),
    N)
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
                                                      children: v.title,
                                                  }),
                                                  L,
                                              ],
                                          }),
                                      ],
                                  }),
                                  x,
                              ],
                          }),
                      }),
                  }),
                  null != R
                      ? (0, r.jsx)(s.Button, {
                            fullWidth: !0,
                            variant: P ? "critical-primary" : "primary",
                            text: P ? "Clear Treatment ".concat(R.value) : "Apply Treatment ".concat(R.value),
                            onClick: D,
                        })
                      : (0, r.jsx)("div", {
                            className: g.uh,
                            children: (0, r.jsx)(f.g, {
                                experiment: v,
                                experimentId: n,
                                overrideInfo: S,
                            }),
                        }),
              ],
          })
        : null;
}
