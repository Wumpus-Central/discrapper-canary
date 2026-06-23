n.d(t, { A: () => c });
var r = n(627968),
    l = n(364801),
    a = n(498381),
    s = n(891167),
    i = n(891396);
let c = function (e) {
    let { bannerSrc: t, logoSrc: n, backgroundColor: c, href: o, children: u } = e;
    return (0, r.jsx)("div", {
        className: i.ZK,
        children: (0, r.jsx)(l.A, {
            backgroundImage: t,
            backgroundColor: c,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            padding: "var(--space-8)",
            children: (0, r.jsxs)("div", {
                className: i.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: i.VW,
                        children: [
                            null != n && (0, r.jsx)("div", { className: i.wm, children: (0, r.jsx)(s.A, { src: n }) }),
                            null != o &&
                                (0, r.jsx)(a.aF, {
                                    variant: "overlay-primary",
                                    href: o,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != u && (0, r.jsx)("div", { className: i.Y_, children: u }),
                ],
            }),
        }),
    });
};
