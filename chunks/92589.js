n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var l = n(907331),
    a = n(481060),
    s = n(168020),
    o = n(794324),
    i = n(859788),
    c = n(388032),
    u = n(984623);
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
let f = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        f = (0, l.O)(
            (e) => {
                null == n || n(e);
            },
            0.33,
            null != n,
        ),
        { bannerUrl: g, bannerAnimatedUrl: b } = (0, o._M)(t),
        p = null != t.textColor ? { color: t.textColor } : void 0,
        m = null != t.body && "" !== t.body,
        h = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, r.jsxs)("div", {
        ref: f,
        className: u.immersiveBannerBlock,
        children: [
            (0, r.jsx)("div", {
                className: u.banner,
                children:
                    null != g &&
                    (0, r.jsx)(i.Z, {
                        bannerStatic: g,
                        bannerAnimated: b,
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
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-xxl/bold",
                            className: u.title,
                            color: "text-strong",
                            style: d({}, p),
                            children: t.title,
                        }),
                        m || h
                            ? (0, r.jsxs)(a.Text, {
                                  variant: "text-md/medium",
                                  style: d({}, p),
                                  children: [
                                      m && t.body,
                                      m && h && " ",
                                      h &&
                                          (0, r.jsx)(a.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: u.learnMoreLink,
                                              style: d({}, p),
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
