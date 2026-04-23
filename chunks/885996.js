i.d(e, { FY: () => A, GS: () => S, OP: () => I });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(187322),
    r = i(855522),
    o = i(834730),
    u = i(715641),
    c = i(827734),
    d = i(516871),
    p = i(693217);
let S = 5;
function I(t) {
    let {
        description: e,
        imgSrc: i,
        renderPurchaseButton: l,
        onPurchase: I,
        title: A,
        onDetails: _,
        benefitItems: T,
        benefitsSummary: h,
        subtitle: E,
        maxBenefits: C = S,
    } = t;
    return (0, n.jsx)(a.vN, {
        children: (0, n.jsxs)("div", {
            className: s()(d.kL, p.t),
            tabIndex: 0,
            onClick: () => {
                null != _ ? _() : null != I && I();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != _ ? _() : null != I && I());
            },
            children: [
                (0, n.jsx)("div", {
                    className: d.Nr,
                    children: (0, n.jsxs)("div", {
                        className: d.rf,
                        children: [
                            (0, n.jsx)(o.E, { tag: "div", variant: "heading-lg/semibold", children: A }),
                            (0, n.jsx)("div", {
                                className: d.Sl,
                                children:
                                    null != i
                                        ? (0, n.jsx)("img", { src: i.toString(), alt: "" })
                                        : (0, n.jsx)(u.b, {
                                              color: c.A.colors.ICON_STRONG,
                                              size: "custom",
                                              height: 48,
                                              width: 48,
                                          }),
                            }),
                            null != l
                                ? l({
                                      onClick: (t) => {
                                          t.stopPropagation(), I?.();
                                      },
                                  })
                                : null,
                            E,
                            null != e &&
                                "" !== e &&
                                (0, n.jsx)(o.E, {
                                    className: d.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: e,
                                }),
                        ],
                    }),
                }),
                null != h &&
                    (0, n.jsx)("div", {
                        className: d.xl,
                        children: (0, n.jsx)(o.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: r.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: h }),
                        }),
                    }),
                null != T &&
                    T.length > 0 &&
                    (0, n.jsx)("div", {
                        className: d.PX,
                        children: (0, n.jsx)("div", {
                            className: d.iq,
                            children: (0, n.jsxs)("div", {
                                className: d.Pp,
                                children: [
                                    (0, n.jsx)(o.E, {
                                        color: "text-default",
                                        variant: "eyebrow",
                                        children: r.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    T.length > C
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  T.slice(0, C),
                                                  (0, n.jsx)(o.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-subtle",
                                                      children: r.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: T.length - C,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : T,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function A(t) {
    let { icon: e, header: i, description: l } = t;
    return (0, n.jsxs)("div", {
        className: d.w2,
        children: [
            (0, n.jsx)("div", { className: d.z8, children: e }),
            (0, n.jsxs)("div", {
                children: [
                    null != i && (0, n.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                    (0, n.jsx)(o.E, { variant: "text-sm/normal", children: l }),
                ],
            }),
        ],
    });
}
