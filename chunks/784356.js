n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    o = n(543233),
    c = n(76707),
    d = n(296388);
let u = (e) => {
    var t, n, i;
    let {
            title: u,
            titleClassName: _,
            buttonClassName: p,
            perkImage: m,
            isCarousel: g,
            onCtaClick: A,
            perkComponent: f,
            subtitle: h = "",
            descriptionCta: b = "",
            customContent: E,
            cardVariant: x,
            subtitleClassName: O,
            imageOverlayText: C,
        } = e,
        I = (0, o.Q)(x),
        T = null != C;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(d.Iv, d.Gz),
            }),
            (0, r.jsx)(c.A, {
                title: u,
                shouldShowElement: (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
                cardVariantStyleInfo: I,
                titleClassName: _,
                subtitle: h,
                subtitleClassName: O,
            }),
            null != m &&
                (0, r.jsxs)("div", {
                    className: l()(
                        d.V8,
                        {
                            [d.wP]: !g,
                            [d.QN]: !g && !(null == I || null == (t = I.perkImage) ? void 0 : t.disableHoverAnimation),
                        },
                        null == I || null == (n = I.perkImage) ? void 0 : n.className,
                    ),
                    children: [
                        (0, r.jsx)("img", {
                            src: m,
                            alt: "",
                            className: g ? (T ? d.ls : d.gu) : "",
                        }),
                        T
                            ? (0, r.jsx)("div", {
                                  className: d.Yh,
                                  children: (0, r.jsx)(a.Text, {
                                      className: d.nj,
                                      variant: "text-md/bold",
                                      children: C,
                                  }),
                              })
                            : null,
                    ],
                }),
            null != f &&
                (0, r.jsxs)("div", {
                    className: d.wX,
                    children: [
                        f,
                        0 !== b.length &&
                            null != A &&
                            (0, r.jsx)(s.$n, {
                                "data-migration-pending": !0,
                                className: p,
                                fullWidth: !0,
                                onClick: A,
                                children: (0, r.jsx)("div", {
                                    className: null == I || null == (i = I.descriptionCta) ? void 0 : i.className,
                                    children: b,
                                }),
                            }),
                    ],
                }),
            E,
        ],
    });
};
