n.d(t, { A: () => h, R: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(362490),
    m = n(429913),
    g = n(183555),
    x = n(622543),
    f = n(985018),
    p = n(413611);
function h(e) {
    let { applicationId: t, size: n = "default" } = e,
        l = (0, o.bG)([x.A], () => x.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(p.kL, { [p.PG]: "small" === n }),
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
                    l?.miniPreviewImage != null
                        ? (0, i.jsx)("img", { src: l.miniPreviewImage, alt: "", className: p.oz })
                        : (0, i.jsx)("div", { className: p.FQ }),
            }),
        ],
    });
}
function _(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: a } = (0, g.NJ)(),
        s = (0, m.h)(t),
        { hasAlreadyLinked: o, canStartAuthorization: x, startAuthorization: h, fetched: _ } = (0, u.RD)(s),
        { analyticsLocations: A } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        I = l.useCallback(() => {
            x &&
                (a({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                h({ analyticsLocations: A }));
        }, [x, a, t, h, A]);
    return "default" !== n || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: p.qr,
              children: [
                  (0, i.jsx)(r.A5T, { size: "xs" }),
                  (0, i.jsx)(r.EYj, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: _
                          ? o
                              ? f.intl.format(f.t.wiyuG9, { applicationName: s.name })
                              : x
                                ? f.intl.format(f.t.RNWFOQ, { onConnect: I })
                                : f.intl.string(f.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: p.bg }),
                  }),
              ],
          });
}
