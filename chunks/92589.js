r.d(t, { Z: () => s });
var n = r(255367);
r(73800);
var l = r(481060),
    a = r(434650),
    i = r(859788),
    o = r(706153);
let s = (e) => {
    let { immersiveBannerBlock: t, handleTransition: r, onVisibilityChange: s } = e,
        c = (0, a.O)(
            (e) => {
                null == s || s(e);
            },
            0.33,
            null != s,
        );
    return (0, n.jsxs)("div", {
        ref: c,
        className: o.immersiveBannerBlock,
        children: [
            (0, n.jsx)("div", {
                className: o.banner,
                children: (0, n.jsx)(i.Z, {
                    bannerStatic: t.bannerAsset.static,
                    bannerAnimated: t.bannerAsset.animated,
                }),
            }),
            (0, n.jsx)("div", {
                className: o.immersiveBannerContent,
                children: (0, n.jsxs)("div", {
                    className: o.immersiveBannerTextContainer,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: "heading-xxl/bold",
                            className: o.title,
                            color: "header-primary",
                            style: null != t.textColor ? { color: t.textColor } : void 0,
                            children: t.title,
                        }),
                        null != t.body &&
                            "" !== t.body &&
                            (0, n.jsx)(l.Text, {
                                variant: "text-md/medium",
                                style: null != t.textColor ? { color: t.textColor } : void 0,
                                children: t.body,
                            }),
                    ],
                }),
            }),
        ],
    });
};
