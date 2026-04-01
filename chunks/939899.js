n.d(t, { A: () => T, R: () => N });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(485584),
    o = n(598748),
    c = n(158954),
    d = n(311907),
    u = n(793574),
    m = n(688810),
    g = n(362490),
    p = n(369374),
    x = n(531913),
    f = n(429913),
    _ = n(287809),
    h = n(183555),
    A = n(622543),
    I = n(985018),
    v = n(413525);
function j(e) {
    let { applicationId: t, size: n = "default" } = e,
        a = (0, d.bG)([A.A], () => A.A.getApplicationWidgetConfig(t));
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
function E(e) {
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
function T(e) {
    let t = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        { enabled: n } = p.A.useConfig({ location: "PlaceholderApplicationWidget" });
    return n ? (null == t ? null : (0, i.jsx)(E, { ...e, userId: t.id })) : (0, i.jsx)(j, { ...e });
}
function N(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, h.NJ)(),
        s = (0, f.h)(t),
        { hasAlreadyLinked: r, canStartAuthorization: o, startAuthorization: d, fetched: p } = (0, g.RD)(s),
        { analyticsLocations: x } = (0, m.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET),
        _ = a.useCallback(() => {
            o &&
                (l({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                d({ analyticsLocations: x }));
        }, [o, l, t, d, x]);
    return "default" !== n || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: v.qr,
              children: [
                  (0, i.jsx)(c.A5T, { size: "xs" }),
                  (0, i.jsx)(c.EYj, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: p
                          ? r
                              ? I.intl.format(I.t.wiyuG9, { applicationName: s.name })
                              : o
                                ? I.intl.format(I.t.RNWFOQ, { onConnect: _ })
                                : I.intl.string(I.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: v.bg }),
                  }),
              ],
          });
}
