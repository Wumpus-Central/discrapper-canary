n.d(e, { FY: () => S, GS: () => p, OP: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(187322),
    a = n(855522),
    u = n(834730),
    o = n(715641),
    d = n(661531),
    c = n(516871),
    A = n(693217);
let p = 5;
function I(t) {
    let {
        description: e,
        imgSrc: n,
        renderPurchaseButton: l,
        onPurchase: I,
        title: S,
        onDetails: h,
        benefitItems: m,
        benefitsSummary: f,
        subtitle: g,
        maxBenefits: v = p,
    } = t;
    return (0, i.jsx)(s.vN, {
        children: (0, i.jsxs)("div", {
            className: r()(c.kL, A.t),
            tabIndex: 0,
            onClick: () => {
                null != h ? h() : null != I && I();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != h ? h() : null != I && I());
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
                                    null != n
                                        ? (0, i.jsx)("img", { src: n.toString(), alt: "" })
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
                            null != e &&
                                "" !== e &&
                                (0, i.jsx)(u.E, {
                                    className: c.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: e,
                                }),
                        ],
                    }),
                }),
                null != f &&
                    (0, i.jsx)("div", {
                        className: c.xl,
                        children: (0, i.jsx)(u.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: a.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: f }),
                        }),
                    }),
                null != m &&
                    m.length > 0 &&
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
                                    m.length > v
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  m.slice(0, v),
                                                  (0, i.jsx)(u.E, {
                                                      variant: "text-md/semibold",
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
    let { icon: e, header: n, description: l } = t;
    return (0, i.jsxs)("div", {
        className: c.w2,
        children: [
            (0, i.jsx)("div", { className: c.z8, children: e }),
            (0, i.jsxs)("div", {
                children: [
                    null != n && (0, i.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                    (0, i.jsx)(u.E, { variant: "text-sm/normal", children: l }),
                ],
            }),
        ],
    });
}
