n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(421380),
    o = n(397927),
    l = n(543233),
    c = n(76707),
    u = n(296388);
let d = (e) => {
    var t, n, i;
    let {
            title: d,
            titleClassName: f,
            buttonClassName: p,
            perkImage: _,
            isCarousel: h,
            onCtaClick: m,
            perkComponent: g,
            subtitle: E = "",
            descriptionCta: b = "",
            customContent: y,
            cardVariant: O,
            subtitleClassName: A,
            imageOverlayText: v,
        } = e,
        S = (e) => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
        I = (0, l.Q)(O),
        T = null != v;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: a()(u.Iv, u.Gz) }),
            (0, r.jsx)(c.A, {
                title: d,
                shouldShowElement: S,
                cardVariantStyleInfo: I,
                titleClassName: f,
                subtitle: E,
                subtitleClassName: A,
            }),
            null != _ &&
                (0, r.jsxs)("div", {
                    className: a()(
                        u.V8,
                        {
                            [u.wP]: !h,
                            [u.QN]: !h && !(null == I || null == (t = I.perkImage) ? void 0 : t.disableHoverAnimation),
                        },
                        null == I || null == (n = I.perkImage) ? void 0 : n.className,
                    ),
                    children: [
                        (0, r.jsx)("img", {
                            src: _,
                            alt: "",
                            className: h ? (T ? u.ls : u.gu) : "",
                        }),
                        T
                            ? (0, r.jsx)("div", {
                                  className: u.Yh,
                                  children: (0, r.jsx)(o.Text, {
                                      className: u.nj,
                                      variant: "text-md/bold",
                                      children: v,
                                  }),
                              })
                            : null,
                    ],
                }),
            null != g &&
                (0, r.jsxs)("div", {
                    className: u.wX,
                    children: [
                        g,
                        0 !== b.length &&
                            null != m &&
                            (0, r.jsx)(s.$n, {
                                "data-migration-pending": !0,
                                className: p,
                                fullWidth: !0,
                                onClick: m,
                                children: (0, r.jsx)("div", {
                                    className: null == I || null == (i = I.descriptionCta) ? void 0 : i.className,
                                    children: b,
                                }),
                            }),
                    ],
                }),
            y,
        ],
    });
};
