n.d(e, {
    FY: () => S,
    GS: () => p,
    OP: () => f,
}),
    n(228524);
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    u = n(187322),
    o = n(855522),
    s = n(158954),
    a = n(827734),
    c = n(596678),
    d = n(671816);
let p = 5;

function f(t) {
    let {
        description: e,
        imgSrc: n,
        renderPurchaseButton: r,
        onPurchase: f,
        title: S,
        onDetails: A,
        benefitItems: b,
        benefitsSummary: O,
        subtitle: g,
        maxBenefits: I = p,
    } = t;
    return (0, l.jsx)(u.vN, {
        children: (0, l.jsxs)("div", {
            className: i()(c.kL, d.t),
            tabIndex: 0,
            onClick: () => {
                null != A ? A() : null != f && f();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != A ? A() : null != f && f());
            },
            children: [
                (0, l.jsx)("div", {
                    className: c.Nr,
                    children: (0, l.jsxs)("div", {
                        className: c.rf,
                        children: [
                            (0, l.jsx)(s.EYj, {
                                tag: "div",
                                variant: "heading-lg/semibold",
                                children: S,
                            }),
                            (0, l.jsx)("div", {
                                className: c.Sl,
                                children:
                                    null != n
                                        ? (0, l.jsx)("img", {
                                              src: n.toString(),
                                              alt: "",
                                          })
                                        : (0, l.jsx)(s.bhD, {
                                              color: a.A.colors.ICON_STRONG,
                                              size: "custom",
                                              height: 48,
                                              width: 48,
                                          }),
                            }),
                            null != r
                                ? r({
                                      onClick: (t) => {
                                          t.stopPropagation(), null == f || f();
                                      },
                                  })
                                : null,
                            g,
                            null != e &&
                                "" !== e &&
                                (0, l.jsx)(s.EYj, {
                                    className: c.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: e,
                                }),
                        ],
                    }),
                }),
                null != O &&
                    (0, l.jsx)("div", {
                        className: c.xl,
                        children: (0, l.jsx)(s.EYj, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: o.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                                count: O,
                            }),
                        }),
                    }),
                null != b &&
                    b.length > 0 &&
                    (0, l.jsx)("div", {
                        className: c.PX,
                        children: (0, l.jsx)("div", {
                            className: c.iq,
                            children: (0, l.jsxs)("div", {
                                className: c.Pp,
                                children: [
                                    (0, l.jsx)(s.EYj, {
                                        color: "text-default",
                                        variant: "eyebrow",
                                        children: o.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    b.length > I
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  b.slice(0, I),
                                                  (0, l.jsx)(s.EYj, {
                                                      variant: "text-md/semibold",
                                                      color: "text-subtle",
                                                      children: o.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: b.length - I,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : b,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}

function S(t) {
    let { icon: e, header: n, description: r } = t;
    return (0, l.jsxs)("div", {
        className: c.w2,
        children: [
            (0, l.jsx)("div", {
                className: c.z8,
                children: e,
            }),
            (0, l.jsxs)("div", {
                children: [
                    null != n &&
                        (0, l.jsx)(s.EYj, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: n,
                        }),
                    (0, l.jsx)(s.EYj, {
                        variant: "text-sm/normal",
                        children: r,
                    }),
                ],
            }),
        ],
    });
}
