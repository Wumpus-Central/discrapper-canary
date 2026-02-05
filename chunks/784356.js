n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(421380),
    l = n(397927),
    o = n(543233),
    c = n(76707),
    d = n(296388);
let u = (e) => {
    let {
            title: t,
            titleClassName: n,
            buttonClassName: s,
            perkImage: u,
            isCarousel: _,
            onCtaClick: m,
            perkComponent: A,
            subtitle: g,
            descriptionCta: E,
            customContent: h,
            cardVariant: p,
            subtitleClassName: C,
            imageOverlayText: x,
        } = e,
        T = (0, o.Q)(p),
        I = null != x;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: r()(d.Iv, d.Gz) }),
            (0, i.jsx)(c.A, {
                title: t,
                cardVariantStyleInfo: T,
                titleClassName: n,
                subtitle: g,
                subtitleClassName: C,
                isOverlay: !1,
            }),
            null != u &&
                (0, i.jsxs)("div", {
                    className: r()(
                        d.V8,
                        { [d.wP]: !_, [d.QN]: !_ && !T?.perkImage?.disableHoverAnimation },
                        T?.perkImage?.className,
                    ),
                    children: [
                        (0, i.jsx)("img", { src: u, alt: "", className: _ ? (I ? d.ls : d.gu) : "" }),
                        I
                            ? (0, i.jsx)("div", {
                                  className: d.Yh,
                                  children: (0, i.jsx)(l.Text, {
                                      className: d.nj,
                                      variant: "text-md/bold",
                                      children: x,
                                  }),
                              })
                            : null,
                    ],
                }),
            null != A &&
                (0, i.jsxs)("div", {
                    className: d.wX,
                    children: [
                        A,
                        null != E &&
                            null != m &&
                            (0, i.jsx)(a.$n, {
                                "data-migration-pending": !0,
                                className: s,
                                fullWidth: !0,
                                onClick: m,
                                children: (0, i.jsx)("div", { className: T?.descriptionCta?.className, children: E }),
                            }),
                    ],
                }),
            h,
        ],
    });
};
