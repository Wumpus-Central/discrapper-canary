n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var l = n(481060),
    a = n(434650),
    i = n(859788),
    o = n(706153);
let s = (e) => {
    let { immersiveBannerBlock: t, handleTransition: n, onVisibilityChange: s } = e,
        c = (0, a.O)(
            (e) => {
                null == s || s(e);
            },
            0.33,
            null != s,
        );
    return (0, r.jsxs)("div", {
        ref: c,
        className: o.immersiveBannerBlock,
        children: [
            (0, r.jsx)("div", {
                className: o.banner,
                children: (0, r.jsx)(i.Z, {
                    bannerStatic: t.bannerAsset.static,
                    bannerAnimated: t.bannerAsset.animated,
                }),
            }),
            (0, r.jsx)("div", {
                className: o.immersiveBannerContent,
                children: (0, r.jsxs)("div", {
                    className: o.immersiveBannerTextContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-xxl/bold",
                            className: o.title,
                            color: "header-primary",
                            style: null != t.textColor ? { color: t.textColor } : void 0,
                            children: t.title,
                        }),
                        null != t.body &&
                            "" !== t.body &&
                            (0, r.jsx)(l.Text, {
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
