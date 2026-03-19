n.d(t, { A: () => h, R: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    d = n(793574),
    c = n(688810),
    u = n(362490),
    g = n(429913),
    m = n(183555),
    x = n(622543),
    p = n(985018),
    f = n(81157);
function h(e) {
    let { applicationId: t, size: n = "default" } = e,
        l = (0, o.bG)([x.A], () => x.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(f.kL, { [f.PG]: "small" === n }),
        children: [
            (0, i.jsxs)("div", {
                className: f.Qs,
                children: [
                    (0, i.jsx)("div", { className: f.wx }),
                    (0, i.jsx)("div", { className: f.yF }),
                    (0, i.jsxs)("div", {
                        className: f.M1,
                        children: [
                            (0, i.jsx)("div", { className: f.dJ }),
                            (0, i.jsx)("div", { className: f.dJ }),
                            (0, i.jsx)("div", { className: f.dJ }),
                            (0, i.jsx)("div", { className: f.dJ }),
                            (0, i.jsx)("div", { className: f.dJ }),
                            (0, i.jsx)("div", { className: f.dJ }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: f.ZS,
                children:
                    l?.miniPreviewImage != null
                        ? (0, i.jsx)("img", { src: l.miniPreviewImage, alt: "", className: f.oz })
                        : (0, i.jsx)("div", { className: f.FQ }),
            }),
        ],
    });
}
function _(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: a } = (0, m.NJ)(),
        s = (0, g.h)(t),
        { hasAlreadyLinked: o, canStartAuthorization: x, startAuthorization: h, fetched: _ } = (0, u.RD)(s),
        { analyticsLocations: A } = (0, c.Ay)(d.A.USER_PROFILE_APPLICATION_WIDGET),
        I = l.useCallback(() => {
            x &&
                (a({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: t }),
                h({ analyticsLocations: A }));
        }, [x, a, t, h, A]);
    return "default" !== n || null == s
        ? null
        : (0, i.jsxs)("div", {
              className: f.qr,
              children: [
                  (0, i.jsx)(r.A5T, { size: "xs" }),
                  (0, i.jsx)(r.EYj, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: _
                          ? o
                              ? p.intl.format(p.t.wiyuG9, { applicationName: s.name })
                              : x
                                ? p.intl.format(p.t.RNWFOQ, { onConnect: I })
                                : p.intl.string(p.t["9TX4UT"])
                          : (0, i.jsx)("div", { className: f.bg }),
                  }),
              ],
          });
}
