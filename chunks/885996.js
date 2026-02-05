n.d(e, { FY: () => S, GS: () => A, OP: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(187322),
    u = n(855522),
    a = n(158954),
    o = n(827734),
    c = n(596678),
    d = n(671816);
let A = 5;
function p(t) {
    let {
        description: e,
        imgSrc: n,
        renderPurchaseButton: l,
        onPurchase: p,
        title: S,
        onDetails: I,
        benefitItems: f,
        benefitsSummary: E,
        subtitle: g,
        maxBenefits: m = A,
    } = t;
    return (0, i.jsx)(s.vN, {
        children: (0, i.jsxs)("div", {
            className: r()(c.kL, d.t),
            tabIndex: 0,
            onClick: () => {
                null != I ? I() : null != p && p();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != I ? I() : null != p && p());
            },
            children: [
                (0, i.jsx)("div", {
                    className: c.Nr,
                    children: (0, i.jsxs)("div", {
                        className: c.rf,
                        children: [
                            (0, i.jsx)(a.EYj, { tag: "div", variant: "heading-lg/semibold", children: S }),
                            (0, i.jsx)("div", {
                                className: c.Sl,
                                children:
                                    null != n
                                        ? (0, i.jsx)("img", { src: n.toString(), alt: "" })
                                        : (0, i.jsx)(a.bhD, {
                                              color: o.A.colors.ICON_STRONG,
                                              size: "custom",
                                              height: 48,
                                              width: 48,
                                          }),
                            }),
                            null != l
                                ? l({
                                      onClick: (t) => {
                                          t.stopPropagation(), p?.();
                                      },
                                  })
                                : null,
                            g,
                            null != e &&
                                "" !== e &&
                                (0, i.jsx)(a.EYj, {
                                    className: c.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: e,
                                }),
                        ],
                    }),
                }),
                null != E &&
                    (0, i.jsx)("div", {
                        className: c.xl,
                        children: (0, i.jsx)(a.EYj, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: u.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: E }),
                        }),
                    }),
                null != f &&
                    f.length > 0 &&
                    (0, i.jsx)("div", {
                        className: c.PX,
                        children: (0, i.jsx)("div", {
                            className: c.iq,
                            children: (0, i.jsxs)("div", {
                                className: c.Pp,
                                children: [
                                    (0, i.jsx)(a.EYj, {
                                        color: "text-default",
                                        variant: "eyebrow",
                                        children: u.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    f.length > m
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  f.slice(0, m),
                                                  (0, i.jsx)(a.EYj, {
                                                      variant: "text-md/semibold",
                                                      color: "text-subtle",
                                                      children: u.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: f.length - m,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : f,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function S(t) {
    let { icon: e, header: n, description: l } = t;
    return (0, i.jsxs)("div", {
        className: c.w2,
        children: [
            (0, i.jsx)("div", { className: c.z8, children: e }),
            (0, i.jsxs)("div", {
                children: [
                    null != n && (0, i.jsx)(a.EYj, { variant: "text-md/semibold", color: "text-strong", children: n }),
                    (0, i.jsx)(a.EYj, { variant: "text-sm/normal", children: l }),
                ],
            }),
        ],
    });
}
