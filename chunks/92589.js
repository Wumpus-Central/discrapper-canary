n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var l = n(907331),
    i = n(481060),
    s = n(168020),
    o = n(794324),
    a = n(859788),
    c = n(388032),
    u = n(449177);
function d(e) {
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
let g = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        g = (0, l.O)(
            (e) => {
                null == n || n(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: f, bannerAnimatedUrl: p } = (0, o._M)(t),
        m = null != t.textColor ? { color: t.textColor } : void 0,
        C = null != t.body && "" !== t.body,
        h = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, r.jsxs)("div", {
        ref: g,
        className: u.immersiveBannerBlock,
        children: [
            (0, r.jsx)("div", {
                className: u.banner,
                children:
                    null != f &&
                    (0, r.jsx)(a.Z, {
                        bannerStatic: f,
                        bannerAnimated: p,
                    }),
            }),
            (0, r.jsx)("div", {
                className: u.immersiveBannerContent,
                children: (0, r.jsxs)("div", {
                    className: u.immersiveBannerTextContainer,
                    children: [
                        null != t.endTime
                            ? (0, r.jsx)(s.R, {
                                  endDate: t.endTime,
                                  size: "lg",
                              })
                            : null,
                        (0, r.jsx)(i.Heading, {
                            variant: "heading-xxl/bold",
                            className: u.title,
                            color: "header-primary",
                            style: d({}, m),
                            children: t.title,
                        }),
                        C || h
                            ? (0, r.jsxs)(i.Text, {
                                  variant: "text-md/medium",
                                  style: d({}, m),
                                  children: [
                                      C && t.body,
                                      C && h && " ",
                                      h &&
                                          (0, r.jsx)(i.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: u.learnMoreLink,
                                              style: d({}, m),
                                              children: c.intl.string(c.t.O7ADgv),
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
