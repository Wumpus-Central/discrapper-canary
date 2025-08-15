r.d(t, { Z: () => d });
var n = r(951288);
r(647438);
var l = r(481060),
    a = r(434650),
    i = r(168020),
    o = r(859788),
    s = r(388032),
    c = r(449177);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let d = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: r } = e,
        d = (0, a.O)(
            (e) => {
                null == r || r(e);
            },
            0.33,
            null != r,
        ),
        p = null != t.textColor ? { color: t.textColor } : void 0,
        g = null != t.body && "" !== t.body,
        f = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, n.jsxs)("div", {
        ref: d,
        className: c.immersiveBannerBlock,
        children: [
            (0, n.jsx)("div", {
                className: c.banner,
                children: (0, n.jsx)(o.Z, {
                    bannerStatic: t.bannerAsset.static,
                    bannerAnimated: t.bannerAsset.animated,
                }),
            }),
            (0, n.jsx)("div", {
                className: c.immersiveBannerContent,
                children: (0, n.jsxs)("div", {
                    className: c.immersiveBannerTextContainer,
                    children: [
                        null != t.endTime
                            ? (0, n.jsx)(i.R, {
                                  endDate: t.endTime,
                                  size: "lg",
                              })
                            : null,
                        (0, n.jsx)(l.X6q, {
                            variant: "heading-xxl/bold",
                            className: c.title,
                            color: "header-primary",
                            style: u({}, p),
                            children: t.title,
                        }),
                        g || f
                            ? (0, n.jsxs)(l.Text, {
                                  variant: "text-md/medium",
                                  style: u({}, p),
                                  children: [
                                      g && t.body,
                                      g && f && " ",
                                      f &&
                                          (0, n.jsx)(l.eee, {
                                              href: t.helpCenterUrl,
                                              className: c.learnMoreLink,
                                              style: u({}, p),
                                              children: s.intl.string(s.t.O7ADgo),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
