l.d(t, { A: () => c });
var r = l(627968),
    n = l(364801),
    a = l(498381),
    s = l(891167),
    i = l(891396);
let c = (e) => {
    let { bannerSrc: t, logoSrc: l, backgroundColor: c, href: d, children: o } = e;
    return (0, r.jsx)("div", {
        className: i.ZK,
        children: (0, r.jsx)(n.A, {
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
                            null != l && (0, r.jsx)("div", { className: i.wm, children: (0, r.jsx)(s.A, { src: l }) }),
                            null != d &&
                                (0, r.jsx)(a.aF, {
                                    variant: "overlay-primary",
                                    href: d,
                                    ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION",
                                }),
                        ],
                    }),
                    null != o && (0, r.jsx)("div", { className: i.Y_, children: o }),
                ],
            }),
        }),
    });
};
