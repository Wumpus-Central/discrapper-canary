s.d(e, { A: () => L, R: () => v });
var n = s(627968),
    t = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(158954),
    o = s(311907),
    c = s(793574),
    u = s(688810),
    d = s(362490),
    g = s(429913),
    A = s(183555),
    E = s(622543),
    I = s(985018),
    O = s(81157);
function L(i) {
    let { applicationId: e, size: s = "default" } = i,
        t = (0, o.bG)([E.A], () => E.A.getApplicationWidgetConfig(e));
    return (0, n.jsxs)("div", {
        className: l()(O.kL, { [O.PG]: "small" === s }),
        children: [
            (0, n.jsxs)("div", {
                className: O.Qs,
                children: [
                    (0, n.jsx)("div", { className: O.wx }),
                    (0, n.jsx)("div", { className: O.yF }),
                    (0, n.jsxs)("div", {
                        className: O.M1,
                        children: [
                            (0, n.jsx)("div", { className: O.dJ }),
                            (0, n.jsx)("div", { className: O.dJ }),
                            (0, n.jsx)("div", { className: O.dJ }),
                            (0, n.jsx)("div", { className: O.dJ }),
                            (0, n.jsx)("div", { className: O.dJ }),
                            (0, n.jsx)("div", { className: O.dJ }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: O.ZS,
                children:
                    t?.miniPreviewImage != null
                        ? (0, n.jsx)("img", { src: t.miniPreviewImage, alt: "", className: O.oz })
                        : (0, n.jsx)("div", { className: O.FQ }),
            }),
        ],
    });
}
function v(i) {
    let { applicationId: e, size: s = "default" } = i,
        { trackUserProfileAction: a } = (0, A.NJ)(),
        l = (0, g.h)(e),
        { hasAlreadyLinked: o, canStartAuthorization: E, startAuthorization: L, fetched: v } = (0, d.RD)(l),
        { analyticsLocations: S } = (0, u.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        _ = t.useCallback(() => {
            E &&
                (a({ action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT", applicationId: e }),
                L({ analyticsLocations: S }));
        }, [E, a, e, L, S]);
    return "default" !== s || null == l
        ? null
        : (0, n.jsxs)("div", {
              className: O.qr,
              children: [
                  (0, n.jsx)(r.A5T, { size: "xs" }),
                  (0, n.jsx)(r.EYj, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: v
                          ? o
                              ? I.intl.format(I.t.wiyuG9, { applicationName: l.name })
                              : E
                                ? I.intl.format(I.t.RNWFOQ, { onConnect: _ })
                                : I.intl.string(I.t["9TX4UT"])
                          : (0, n.jsx)("div", { className: O.bg }),
                  }),
              ],
          });
}
