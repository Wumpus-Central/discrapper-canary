e.d(l, { default: () => b });
var a = e(477900),
    i = e(582128),
    n = e(314116),
    s = e(224640),
    r = e(331322),
    c = e(408278),
    d = e(789645),
    o = e(297264),
    u = e(834730),
    x = e(95477),
    h = e(825484),
    g = e(821609),
    m = e(957565),
    j = e(277977),
    f = e(50617),
    p = e(375708),
    C = e(397239);
function b(t) {
    let { projectId: l, transitionState: e, onClose: b } = t,
        [k, v] = i.useState(null),
        [y, z] = i.useState(!0),
        [N, T] = i.useState(!1),
        [B, w] = i.useState(!1),
        [A, S] = i.useState(!1),
        E = i.useCallback(
            async (t) => {
                (z(!0), T(!1), w(!1), S(!1));
                try {
                    v(await (0, j.y_)(l, { regenerate: t }));
                } catch {
                    (t && v(null), T(!0));
                } finally {
                    z(!1);
                }
            },
            [l],
        );
    i.useEffect(() => {
        E(!1).catch(() => {});
    }, [E]);
    let K = i.useCallback(() => {
            null != k && (0, m.C)(k.url, () => w(!0));
        }, [k]),
        W = i.useCallback(() => {
            null != k && (0, m.C)(`Authorization: Bearer ${k.token}`, () => S(!0));
        }, [k]),
        $ = i.useCallback(() => {
            (0, n.A)({
                title: p.intl.string(f.default.jKNAzJ),
                subtitle: p.intl.string(f.default.oWzC0r),
                confirmText: p.intl.string(f.default.dZxnCn),
                variant: "critical",
                onConfirm: () => {
                    E(!0).catch(() => {});
                },
            });
        }, [E]),
        O = p.intl.string(f.default["xMOS+Z"]);
    return (0, a.jsx)(s.d, {
        transitionState: e,
        onClose: b,
        "aria-label": O,
        size: "md",
        children: (0, a.jsxs)(r.B, {
            gap: 24,
            padding: { top: 16, right: 24, bottom: 8, left: 24 },
            className: C.GV,
            children: [
                (0, a.jsx)("div", {
                    className: C.b,
                    children: (0, a.jsx)(c.K, {
                        "aria-label": p.intl.string(p.t.cpT0Cq),
                        icon: d.P,
                        onClick: b,
                        variant: "secondary",
                        size: "sm",
                    }),
                }),
                (0, a.jsxs)(r.B, {
                    gap: 8,
                    children: [
                        (0, a.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: O }),
                        (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: p.intl.string(f.default["1Ew5/j"]),
                        }),
                    ],
                }),
                null != k
                    ? (0, a.jsxs)(r.B, {
                          gap: 8,
                          children: [
                              (0, a.jsxs)(r.B, {
                                  direction: "horizontal",
                                  align: "end",
                                  gap: 8,
                                  className: C._T,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: C.UQ,
                                          children: (0, a.jsx)(x.k, {
                                              label: p.intl.string(f.default.DRgXyU),
                                              value: k.url,
                                              readOnly: !0,
                                              fullWidth: !0,
                                              onFocus: (t) => t.currentTarget.select(),
                                          }),
                                      }),
                                      (0, a.jsxs)(h.e, {
                                          size: "md",
                                          wrap: !1,
                                          className: C.CA,
                                          children: [
                                              (0, a.jsx)(g.$, {
                                                  variant: "primary",
                                                  minWidth: 60,
                                                  text: p.intl.string(B ? p.t.t5VZ88 : p.t.OpuAlK),
                                                  onClick: K,
                                              }),
                                              (0, a.jsx)(g.$, {
                                                  variant: "secondary",
                                                  minWidth: 60,
                                                  text: p.intl.string(f.default.bsDgiq),
                                                  onClick: $,
                                                  loading: y,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)(r.B, {
                                  direction: "horizontal",
                                  align: "end",
                                  gap: 8,
                                  className: C._T,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: C.UQ,
                                          children: (0, a.jsx)(x.k, {
                                              label: p.intl.string(f.default.tgtTuF),
                                              value: `Authorization: Bearer ${k.token}`,
                                              readOnly: !0,
                                              fullWidth: !0,
                                              onFocus: (t) => t.currentTarget.select(),
                                          }),
                                      }),
                                      (0, a.jsx)(h.e, {
                                          size: "md",
                                          wrap: !1,
                                          className: C.CA,
                                          children: (0, a.jsx)(g.$, {
                                              variant: "primary",
                                              minWidth: 60,
                                              text: p.intl.string(A ? p.t.t5VZ88 : p.t.OpuAlK),
                                              onClick: W,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: p.intl.string(f.default.lTtxBT),
                              }),
                          ],
                      })
                    : y
                      ? (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            role: "status",
                            children: p.intl.string(f.default.c3R8Tx),
                        })
                      : null,
                N
                    ? (0, a.jsxs)(r.B, {
                          direction: "horizontal",
                          align: "center",
                          justify: "space-between",
                          gap: 12,
                          children: [
                              (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: p.intl.string(f.default.QJKw6N),
                              }),
                              (0, a.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: p.intl.string(f.default["7xdKYd"]),
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
