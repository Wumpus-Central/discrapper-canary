a.d(l, { default: () => C });
var e = a(477900),
    i = a(582128),
    n = a(314116),
    s = a(224640),
    r = a(331322),
    c = a(408278),
    d = a(789645),
    o = a(297264),
    u = a(834730),
    x = a(95477),
    g = a(825484),
    h = a(821609),
    m = a(957565),
    f = a(18739),
    j = a(50617),
    p = a(375708),
    b = a(397239);
function C(t) {
    let { projectId: l, transitionState: a, onClose: C } = t,
        [v, k] = i.useState(null),
        [y, z] = i.useState(!0),
        [w, N] = i.useState(!1),
        [T, B] = i.useState(!1),
        E = i.useCallback(
            async (t) => {
                z(!0), N(!1), B(!1);
                try {
                    k(await (0, f.y_)(l, { regenerate: t }));
                } catch {
                    t && k(null), N(!0);
                } finally {
                    z(!1);
                }
            },
            [l],
        );
    i.useEffect(() => {
        E(!1).catch(() => {});
    }, [E]);
    let S = i.useCallback(() => {
            null != v && (0, m.C)(v.url, () => B(!0));
        }, [v]),
        K = i.useCallback(() => {
            (0, n.A)({
                title: p.intl.string(j.default.jKNAzJ),
                subtitle: p.intl.string(j.default.oWzC0r),
                confirmText: p.intl.string(j.default.dZxnCn),
                variant: "critical",
                onConfirm: () => {
                    E(!0).catch(() => {});
                },
            });
        }, [E]),
        A = p.intl.string(j.default["xMOS+Z"]);
    return (0, e.jsx)(s.d, {
        transitionState: a,
        onClose: C,
        "aria-label": A,
        size: "md",
        children: (0, e.jsxs)(r.B, {
            gap: 24,
            padding: { top: 16, right: 24, bottom: 8, left: 24 },
            className: b.GV,
            children: [
                (0, e.jsx)("div", {
                    className: b.b,
                    children: (0, e.jsx)(c.K, {
                        "aria-label": p.intl.string(p.t.cpT0Cq),
                        icon: d.P,
                        onClick: C,
                        variant: "secondary",
                        size: "sm",
                    }),
                }),
                (0, e.jsxs)(r.B, {
                    gap: 8,
                    children: [
                        (0, e.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: A }),
                        (0, e.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: p.intl.string(j.default["1Ew5/j"]),
                        }),
                    ],
                }),
                null != v
                    ? (0, e.jsxs)(r.B, {
                          gap: 8,
                          children: [
                              (0, e.jsxs)(r.B, {
                                  direction: "horizontal",
                                  align: "end",
                                  gap: 8,
                                  className: b._T,
                                  children: [
                                      (0, e.jsx)("div", {
                                          className: b.UQ,
                                          children: (0, e.jsx)(x.k, {
                                              label: p.intl.string(j.default.DRgXyU),
                                              value: v.url,
                                              readOnly: !0,
                                              fullWidth: !0,
                                              onFocus: (t) => t.currentTarget.select(),
                                          }),
                                      }),
                                      (0, e.jsxs)(g.e, {
                                          size: "md",
                                          wrap: !1,
                                          className: b.CA,
                                          children: [
                                              (0, e.jsx)(h.$, {
                                                  variant: "primary",
                                                  minWidth: 60,
                                                  text: p.intl.string(T ? p.t.t5VZ88 : p.t.OpuAlK),
                                                  onClick: S,
                                              }),
                                              (0, e.jsx)(h.$, {
                                                  variant: "secondary",
                                                  minWidth: 60,
                                                  text: p.intl.string(j.default.bsDgiq),
                                                  onClick: K,
                                                  loading: y,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, e.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: p.intl.string(j.default.lTtxBT),
                              }),
                          ],
                      })
                    : y
                      ? (0, e.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            role: "status",
                            children: p.intl.string(j.default.c3R8Tx),
                        })
                      : null,
                w
                    ? (0, e.jsxs)(r.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "space-between",
                          gap: 12,
                          children: [
                              (0, e.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: p.intl.string(j.default.QJKw6N),
                              }),
                              (0, e.jsx)(h.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: p.intl.string(j.default["7xdKYd"]),
                                  onClick: () => {
                                      E(!1).catch(() => {});
                                  },
                                  loading: y,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
