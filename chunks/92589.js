n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(481060),
    a = n(434650),
    i = n(168020),
    o = n(859788),
    s = n(706153);
let c = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: n } = e,
        c = (0, a.O)(
            (e) => {
                null == n || n(e);
            },
            0.33,
            null != n,
        );
    return (0, r.jsxs)("div", {
        ref: c,
        className: s.immersiveBannerBlock,
        children: [
            (0, r.jsx)("div", {
                className: s.banner,
                children: (0, r.jsx)(o.Z, {
                    bannerStatic: t.bannerAsset.static,
                    bannerAnimated: t.bannerAsset.animated,
                }),
            }),
            (0, r.jsx)("div", {
                className: s.immersiveBannerContent,
                children: (0, r.jsxs)("div", {
                    className: s.immersiveBannerTextContainer,
                    children: [
                        null != t.endTime
                            ? (0, r.jsx)(i.R, {
                                  endDate: t.endTime,
                                  size: "lg",
                              })
                            : null,
                        (0, r.jsx)(l.X6q, {
                            variant: "heading-xxl/bold",
                            className: s.title,
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
