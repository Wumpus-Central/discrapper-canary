n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(434650),
    a = n(168020),
    s = n(859788),
    o = n(388032),
    c = n(80931);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let d = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        d = (0, i.O)(
            (e) => {
                null == n || n(e);
            },
            0.33,
            null != n,
        ),
        g = null != t.textColor ? { color: t.textColor } : void 0,
        p = null != t.body && "" !== t.body,
        f = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, r.jsxs)("div", {
        ref: d,
        className: c.immersiveBannerBlock,
        children: [
            (0, r.jsx)("div", {
                className: c.banner,
                children: (0, r.jsx)(s.Z, {
                    bannerStatic: t.bannerAsset.static,
                    bannerAnimated: t.bannerAsset.animated,
                }),
            }),
            (0, r.jsx)("div", {
                className: c.immersiveBannerContent,
                children: (0, r.jsxs)("div", {
                    className: c.immersiveBannerTextContainer,
                    children: [
                        null != t.endTime
                            ? (0, r.jsx)(a.R, {
                                  endDate: t.endTime,
                                  size: "lg",
                              })
                            : null,
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-xxl/bold",
                            className: c.title,
                            color: "header-primary",
                            style: u({}, g),
                            children: t.title,
                        }),
                        p || f
                            ? (0, r.jsxs)(l.Text, {
                                  variant: "text-md/medium",
                                  style: u({}, g),
                                  children: [
                                      p && t.body,
                                      p && f && " ",
                                      f &&
                                          (0, r.jsx)(l.eee, {
                                              href: t.helpCenterUrl,
                                              className: c.learnMoreLink,
                                              style: u({}, g),
                                              children: o.intl.string(o.t.O7ADgo),
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
