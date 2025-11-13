n.d(t, { v: () => b });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(314897),
    l = n(594174),
    c = n(572004),
    u = n(922699),
    d = n(492435),
    f = n(389494),
    _ = n(667344),
    p = n(453032),
    h = n(493075),
    m = n(987338),
    g = n(941189);
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
        { experiments: b, overridesInfo: y } = (0, h.sI)(),
        { experiments: O, overridesInfo: v } = (0, _.Qb)(),
        I = i.useMemo(() => (null == n ? null : null != b[n] ? b[n] : O[n]), [b, O, n]),
        T = i.useMemo(() => {
            if (null == n);
            else if (null != y[n]) return y[n];
            else if (null != v[n]) return v[n];
        }, [y, v, n]),
        S = s.default.getId(),
        A = (0, p.aN)(I, S),
        C = i.useMemo(() => (0, u.rB)(I, A), [A, I]),
        N = (0, a.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        });
    if (null == n || null == I) return null;
    let R = (0, u.ak)(I).find((e) => e.value === c),
        P = null != R ? m.su.EXPERIMENT_TREATMENT : m.su.EXPERIMENT,
        D = null != T && null != R && T.variantId === R.value,
        w = () => {
            null != R && (D ? (0, d.rX)(I.system, n, null) : (0, d.rX)(I.system, n, R.value));
        },
        x = (0, r.jsx)(E, { url: t }),
        L = null;
    return (P === m.su.EXPERIMENT_TREATMENT && null != R
        ? (L = (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: R.label,
          }))
        : null != A &&
          (L = (0, r.jsxs)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Server Config: ", C],
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
                                                      children: I.title,
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
                      ? (0, r.jsx)(o.Button, {
                            fullWidth: !0,
                            variant: D ? "critical-primary" : "primary",
                            text: D ? "Clear Treatment ".concat(R.value) : "Apply Treatment ".concat(R.value),
                            onClick: w,
                        })
                      : (0, r.jsx)("div", {
                            className: g.experimentOverride,
                            children: (0, r.jsx)(f.y, {
                                experiment: I,
                                experimentId: n,
                                overrideInfo: T,
                            }),
                        }),
              ],
          })
        : null;
}
