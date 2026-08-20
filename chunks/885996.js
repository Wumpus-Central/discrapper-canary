e.d(n, { FY: () => S, GS: () => p, OP: () => I });
var i = e(477900);
e(582128);
var l = e(503698),
    r = e.n(l),
    s = e(259678),
    a = e(855522),
    u = e(834730),
    o = e(715641),
    d = e(661531),
    c = e(942436),
    A = e(840362);
let p = 5;
function I(t) {
    let {
        description: n,
        imgSrc: e,
        renderPurchaseButton: l,
        onPurchase: I,
        title: S,
        onDetails: f,
        benefitItems: h,
        benefitsSummary: m,
        subtitle: g,
        maxBenefits: v = p,
    } = t;
    return (0, i.jsx)(s.vN, {
        children: (0, i.jsxs)("div", {
            className: r()(c.kL, A.t),
            tabIndex: 0,
            onClick: () => {
                null != f ? f() : null != I && I();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != f ? f() : null != I && I());
            },
            children: [
                (0, i.jsx)("div", {
                    className: c.Nr,
                    children: (0, i.jsxs)("div", {
                        className: c.rf,
                        children: [
                            (0, i.jsx)(u.E, { tag: "div", variant: "heading-lg/semibold", children: S }),
                            (0, i.jsx)("div", {
                                className: c.Sl,
                                children:
                                    null != e
                                        ? (0, i.jsx)("img", { src: e.toString(), alt: "" })
                                        : (0, i.jsx)(o.b, {
                                              color: d.A.colors.ICON_STRONG,
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
                            g,
                            null != n &&
                                "" !== n &&
                                (0, i.jsx)(u.E, {
                                    className: c.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: n,
                                }),
                        ],
                    }),
                }),
                null != m &&
                    (0, i.jsx)("div", {
                        className: c.xl,
                        children: (0, i.jsx)(u.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: a.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: m }),
                        }),
                    }),
                null != h &&
                    h.length > 0 &&
                    (0, i.jsx)("div", {
                        className: c.PX,
                        children: (0, i.jsx)("div", {
                            className: c.iq,
                            children: (0, i.jsxs)("div", {
                                className: c.Pp,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        color: "text-default",
                                        variant: "eyebrow",
                                        children: a.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    h.length > v
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  h.slice(0, v),
                                                  (0, i.jsx)(u.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-subtle",
                                                      children: a.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: h.length - v,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : h,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function S(t) {
    let { icon: n, header: e, description: l } = t;
    return (0, i.jsxs)("div", {
        className: c.w2,
        children: [
            (0, i.jsx)("div", { className: c.z8, children: n }),
            (0, i.jsxs)("div", {
                children: [
                    null != e && (0, i.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    (0, i.jsx)(u.E, { variant: "text-sm/normal", children: l }),
                ],
            }),
        ],
    });
}
