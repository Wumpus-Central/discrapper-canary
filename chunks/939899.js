n.d(t, { A: () => g, R: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(793574),
    c = n(688810),
    u = n(362490),
    A = n(429913),
    h = n(183555),
    _ = n(622543),
    m = n(985018),
    p = n(413611);
function g(e) {
    let { applicationId: t, size: n = "default" } = e,
        r = (0, o.bG)([_.A], () => _.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: l()(p.kL, { [p.PG]: "small" === n }),
        children: [
            (0, i.jsxs)("div", {
                className: p.Qs,
                children: [
                    (0, i.jsx)("div", { className: p.wx }),
                    (0, i.jsx)("div", { className: p.yF }),
                    (0, i.jsxs)("div", {
                        className: p.M1,
                        children: [
                            (0, i.jsx)("div", { className: p.dJ }),
                            (0, i.jsx)("div", { className: p.dJ }),
                            (0, i.jsx)("div", { className: p.dJ }),
                            (0, i.jsx)("div", { className: p.dJ }),
                            (0, i.jsx)("div", { className: p.dJ }),
                            (0, i.jsx)("div", { className: p.dJ }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: p.ZS,
                children:
                    r?.miniPreviewImage != null
                        ? (0, i.jsx)("img", { src: r.miniPreviewImage, alt: "", className: p.oz })
                        : (0, i.jsx)("div", { className: p.FQ }),
            }),
        ],
    });
}
function E(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: a } = (0, h.NJ)(),
        l = (0, A.h)(t),
        { hasAlreadyLinked: o, canStartAuthorization: _, startAuthorization: g, fetched: E } = (0, u.RD)(l),
        { analyticsLocations: f } = (0, c.Ay)(d.A.USER_PROFILE_APPLICATION_WIDGET),
        I = r.useCallback(() => {
            _ &&
                (a({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                g({ analyticsLocations: f }));
        }, [_, a, t, g, f]);
    return "default" !== n || null == l
        ? null
        : (0, i.jsxs)("div", {
              className: p.qr,
              children: [
                  (0, i.jsx)(s.A5T, { size: "xs" }),
                  (0, i.jsx)(s.EYj, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: E
                          ? o
                              ? m.intl.format(m.t.wiyuG9, { applicationName: l.name })
                              : _
                                ? m.intl.format(m.t.RNWFOQ, { onConnect: I })
                                : m.intl.string(m.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: p.bg }),
                  }),
              ],
          });
}
