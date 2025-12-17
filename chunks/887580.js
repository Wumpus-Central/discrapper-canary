n.d(t, { v: () => b });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(314897),
    l = n(594174),
    c = n(572004),
    u = n(922699),
    d = n(492435),
    f = n(389494),
    p = n(667344),
    _ = n(453032),
    m = n(493075),
    h = n(987338),
    g = n(615838);
function E(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, c.JG)(t, () =>
                (0, o.showToast)({
                    id: "experiment-link-copied",
                    message: "Copied experiment link",
                    type: o.ToastType.SUCCESS,
                }),
            );
        }, [t]);
    return (0, r.jsx)(o.P3F, {
        className: g.copyLinkButton,
        onClick: n,
        children: (0, r.jsx)(o.xPt, {
            size: "sm",
            color: "currentColor",
        }),
    });
}
function b(e) {
    let { url: t } = e,
        n = (0, u.q3)(t),
        c = (0, u.XV)(t),
        { experiments: b, overridesInfo: y } = (0, m.sI)(),
        { experiments: O, overridesInfo: v } = (0, p.Qb)(),
        S = i.useMemo(() => (null == n ? null : null != b[n] ? b[n] : O[n]), [b, O, n]),
        I = i.useMemo(() => {
            if (null == n);
            else if (null != y[n]) return y[n];
            else if (null != v[n]) return v[n];
        }, [y, v, n]),
        T = s.default.getId(),
        C = (0, _.aN)(S, T),
        A = i.useMemo(() => (0, u.rB)(S, C), [C, S]),
        N = (0, a.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n || null == S) return null;
    let P = (0, u.ak)(S).find((e) => e.value === c),
        R = null != P ? h.su.EXPERIMENT_TREATMENT : h.su.EXPERIMENT,
        w = null != I && null != P && I.variantId === P.value,
        D = () => {
            null != P && (w ? (0, d.rX)(S.system, n, null) : (0, d.rX)(S.system, n, P.value));
        },
        x = (0, r.jsx)(E, { url: t }),
        L = null;
    return (R === h.su.EXPERIMENT_TREATMENT && null != P
        ? (L = (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: P.label,
          }))
        : null != C &&
          (L = (0, r.jsxs)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Server Config: ", A],
          })),
    N)
        ? (0, r.jsxs)("div", {
              className: g.root,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("div", {
                          className: g.header,
                          children: (0, r.jsxs)(o.Kqy, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, r.jsxs)(o.Kqy, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, r.jsx)(o.Che, { size: "lg" }),
                                          (0, r.jsxs)(o.Kqy, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-md/semibold",
                                                      children: S.title,
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
                  null != P
                      ? (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            variant: w ? "critical-primary" : "primary",
                            text: w ? "Clear Treatment ".concat(P.value) : "Apply Treatment ".concat(P.value),
                            onClick: D,
                        })
                      : (0, r.jsx)("div", {
                            className: g.experimentOverride,
                            children: (0, r.jsx)(f.y, {
                                experiment: S,
                                experimentId: n,
                                overrideInfo: I,
                            }),
                        }),
              ],
          })
        : null;
}
