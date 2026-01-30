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
            subtitle: b,
            descriptionCta: h,
            customContent: E,
            cardVariant: O,
            subtitleClassName: C,
            imageOverlayText: x,
        } = e,
        S = (0, o.Q)(O),
        T = null != x;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(d.Iv, d.Gz),
            }),
            (0, r.jsx)(c.A, {
                title: u,
                cardVariantStyleInfo: S,
                titleClassName: _,
                subtitle: b,
                subtitleClassName: C,
                isOverlay: !1,
            }),
            null != m &&
                (0, r.jsxs)("div", {
                    className: l()(
                        d.V8,
                        {
                            [d.wP]: !g,
                            [d.QN]: !g && !(null == S || null == (t = S.perkImage) ? void 0 : t.disableHoverAnimation),
                        },
                        null == S || null == (n = S.perkImage) ? void 0 : n.className,
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
                                      children: x,
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
                        null != h &&
                            null != A &&
                            (0, r.jsx)(s.$n, {
                                "data-migration-pending": !0,
                                className: p,
                                fullWidth: !0,
                                onClick: A,
                                children: (0, r.jsx)("div", {
                                    className: null == S || null == (i = S.descriptionCta) ? void 0 : i.className,
                                    children: h,
                                }),
                            }),
                    ],
                }),
            E,
        ],
    });
};
