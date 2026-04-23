n.d(t, { A: () => b, R: () => C });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(485584),
    o = n(598748),
    c = n(141628),
    d = n(834730),
    u = n(311907),
    g = n(793574),
    m = n(688810),
    _ = n(362490),
    f = n(369374),
    x = n(531913),
    p = n(429913),
    I = n(287809),
    A = n(183555),
    h = n(622543),
    E = n(985018),
    v = n(923608);
function j(e) {
    let { applicationId: t, size: n = "default" } = e,
        a = (0, u.bG)([h.A], () => h.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(v.kL, { [v.PG]: "small" === n }),
        children: [
            (0, i.jsxs)("div", {
                className: v.Qs,
                children: [
                    (0, i.jsx)("div", { className: v.wx }),
                    (0, i.jsx)("div", { className: v.yF }),
                    (0, i.jsxs)("div", {
                        className: v.M1,
                        children: [
                            (0, i.jsx)("div", { className: v.dJ }),
                            (0, i.jsx)("div", { className: v.dJ }),
                            (0, i.jsx)("div", { className: v.dJ }),
                            (0, i.jsx)("div", { className: v.dJ }),
                            (0, i.jsx)("div", { className: v.dJ }),
                            (0, i.jsx)("div", { className: v.dJ }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: v.ZS,
                children:
                    a?.miniPreviewImage != null
                        ? (0, i.jsx)("img", { src: a.miniPreviewImage, alt: "", className: v.oz })
                        : (0, i.jsx)("div", { className: v.FQ }),
            }),
        ],
    });
}
function N(e) {
    let { applicationId: t, size: n = "default", userId: a } = e,
        l = (0, x.A)(a, t),
        c = l.surfaceConfigs[o.m.ADD_WIDGET_PREVIEW];
    return null == c
        ? null
        : (0, i.jsx)("div", {
              className: s()(v.iW, { [v.PG]: "small" === n }),
              children: (0, i.jsx)(r.kH, {
                  ...l,
                  surface: o.m.ADD_WIDGET_PREVIEW,
                  surfaceConfig: c,
                  layoutProps: { small: "small" === n },
              }),
          });
}
function b(e) {
    let t = (0, u.bG)([I.default], () => I.default.getCurrentUser()),
        { enabled: n } = f.A.useConfig({ location: "PlaceholderApplicationWidget" });
    return n ? (null == t ? null : (0, i.jsx)(N, { ...e, userId: t.id })) : (0, i.jsx)(j, { ...e });
}
function C(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, A.NJ)(),
        s = (0, p.h)(t),
        { hasAlreadyLinked: r, canStartAuthorization: o, startAuthorization: u, fetched: f } = (0, _.RD)(s),
        { analyticsLocations: x } = (0, m.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET),
        I = a.useCallback(() => {
            o &&
                (l({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                u({ analyticsLocations: x }));
        }, [o, l, t, u, x]);
    return "default" !== n || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: v.qr,
              children: [
                  (0, i.jsx)(c.A, { size: "xs" }),
                  (0, i.jsx)(d.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: f
                          ? r
                              ? E.intl.format(E.t.wiyuG9, { applicationName: s.name })
                              : o
                                ? E.intl.format(E.t.RNWFOQ, { onConnect: I })
                                : E.intl.string(E.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: v.bg }),
                  }),
              ],
          });
}
