n.d(t, {
    A: () => m,
    R: () => b,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(793574),
    u = n(688810),
    d = n(362490),
    p = n(429913),
    f = n(183555),
    h = n(622543),
    A = n(985018),
    g = n(413611);

function m(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, o.bG)([h.A], () => h.A.getApplicationWidgetConfig(t));
    return (0, r.jsxs)("div", {
        className: a()(g.kL, {
            [g.PG]: "small" === n,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: g.Qs,
                children: [
                    (0, r.jsx)("div", {
                        className: g.wx,
                    }),
                    (0, r.jsx)("div", {
                        className: g.yF,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.M1,
                        children: [
                            (0, r.jsx)("div", {
                                className: g.dJ,
                            }),
                            (0, r.jsx)("div", {
                                className: g.dJ,
                            }),
                            (0, r.jsx)("div", {
                                className: g.dJ,
                            }),
                            (0, r.jsx)("div", {
                                className: g.dJ,
                            }),
                            (0, r.jsx)("div", {
                                className: g.dJ,
                            }),
                            (0, r.jsx)("div", {
                                className: g.dJ,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.ZS,
                children:
                    (null == i ? void 0 : i.miniPreviewImage) != null
                        ? (0, r.jsx)("img", {
                              src: i.miniPreviewImage,
                              alt: "",
                              className: g.oz,
                          })
                        : (0, r.jsx)("div", {
                              className: g.FQ,
                          }),
            }),
        ],
    });
}

function b(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, f.NJ)(),
        a = (0, p.h)(t),
        { hasAlreadyLinked: o, canStartAuthorization: h, startAuthorization: m, fetched: b } = (0, d.RD)(a),
        { analyticsLocations: _ } = (0, u.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        E = i.useCallback(() => {
            h &&
                (l({
                    action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
                    applicationId: t,
                }),
                m({
                    analyticsLocations: _,
                }));
        }, [h, l, t, m, _]);
    return "default" !== n || null == a
        ? null
        : (0, r.jsxs)("div", {
              className: g.qr,
              children: [
                  (0, r.jsx)(s.A5T, {
                      size: "xs",
                  }),
                  (0, r.jsx)(s.EYj, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: b
                          ? o
                              ? A.intl.format(A.t.wiyuG9, {
                                    applicationName: a.name,
                                })
                              : h
                                ? A.intl.format(A.t.RNWFOQ, {
                                      onConnect: E,
                                  })
                                : A.intl.string(A.t["9TX4UT"])
                          : (0, r.jsx)("div", {
                                className: g.bg,
                            }),
                  }),
              ],
          });
}
