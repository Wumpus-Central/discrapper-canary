i.d(n, { FY: () => S, GS: () => p, OP: () => I });
var e = i(477900);
i(582128);
var l = i(503698),
    r = i.n(l),
    s = i(559106),
    a = i(855522),
    o = i(834730),
    u = i(715641),
    d = i(661531),
    c = i(942436),
    A = i(840362);
let p = 5;
function I(t) {
    let {
        description: n,
        imgSrc: i,
        renderPurchaseButton: l,
        onPurchase: I,
        title: S,
        onDetails: f,
        benefitItems: m,
        benefitsSummary: h,
        subtitle: g,
        maxBenefits: v = p,
    } = t;
    return (0, e.jsx)(s.vN, {
        children: (0, e.jsxs)("div", {
            className: r()(c.kL, A.t),
            tabIndex: 0,
            onClick: () => {
                null != f ? f() : null != I && I();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != f ? f() : null != I && I());
            },
            children: [
                (0, e.jsx)("div", {
                    className: c.Nr,
                    children: (0, e.jsxs)("div", {
                        className: c.rf,
                        children: [
                            (0, e.jsx)(o.E, { tag: "div", variant: "heading-lg/semibold", children: S }),
                            (0, e.jsx)("div", {
                                className: c.Sl,
                                children:
                                    null != i
                                        ? (0, e.jsx)("img", { src: i.toString(), alt: "" })
                                        : (0, e.jsx)(u.b, {
                                              color: d.A.colors.ICON_STRONG,
                                              size: "custom",
                                              height: 48,
                                              width: 48,
                                          }),
                            }),
                            null != l
                                ? l({
                                      onClick: (t) => {
                                          (t.stopPropagation(), I?.());
                                      },
                                  })
                                : null,
                            g,
                            null != n &&
                                "" !== n &&
                                (0, e.jsx)(o.E, {
                                    className: c.h_,
                                    color: "text-default",
                                    variant: "body-sm/medium",
                                    children: n,
                                }),
                        ],
                    }),
                }),
                null != h &&
                    (0, e.jsx)("div", {
                        className: c.xl,
                        children: (0, e.jsx)(o.E, {
                            color: "interactive-text-default",
                            variant: "body-sm/medium",
                            children: a.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: h }),
                        }),
                    }),
                null != m &&
                    m.length > 0 &&
                    (0, e.jsx)("div", {
                        className: c.PX,
                        children: (0, e.jsx)("div", {
                            className: c.iq,
                            children: (0, e.jsxs)("div", {
                                className: c.Pp,
                                children: [
                                    (0, e.jsx)(o.E, {
                                        color: "text-default",
                                        variant: "body-sm/medium",
                                        children: a.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    m.length > v
                                        ? (0, e.jsxs)(e.Fragment, {
                                              children: [
                                                  m.slice(0, v),
                                                  (0, e.jsx)(o.E, {
                                                      variant: "body-md/semibold",
                                                      color: "text-subtle",
                                                      children: a.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: m.length - v,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : m,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function S(t) {
    let { icon: n, header: i, description: l } = t;
    return (0, e.jsxs)("div", {
        className: c.w2,
        children: [
            (0, e.jsx)("div", { className: c.z8, children: n }),
            (0, e.jsxs)("div", {
                children: [
                    null != i && (0, e.jsx)(o.E, { variant: "body-md/semibold", color: "text-strong", children: i }),
                    (0, e.jsx)(o.E, { variant: "body-sm/normal", children: l }),
                ],
            }),
        ],
    });
}
