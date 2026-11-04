var e = i(477900);
i(582128);
var l = i(503698),
    r = i.n(l),
    s = i(559106),
    a = i(855522),
    u = i(834730),
    o = i(715641),
    d = i(646514),
    c = i(942436),
    A = i(840362);
i.d(
    n,
    {},
    {
        F: function (t) {
            let { icon: n, header: i, description: l } = t;
            return (0, e.jsxs)("div", {
                className: c.w2,
                children: [
                    (0, e.jsx)("div", { className: c.z8, children: n }),
                    (0, e.jsxs)("div", {
                        children: [
                            null != i &&
                                (0, e.jsx)(u.E, { variant: "body-md/semibold", color: "text-strong", children: i }),
                            (0, e.jsx)(u.E, { variant: "body-sm/normal", children: l }),
                        ],
                    }),
                ],
            });
        },
        O: function (t) {
            let {
                description: n,
                imgSrc: i,
                renderPurchaseButton: l,
                onPurchase: p,
                title: I,
                onDetails: m,
                benefitItems: S,
                benefitsSummary: f,
                subtitle: h,
                maxBenefits: g = 5,
            } = t;
            return (0, e.jsx)(s.vN, {
                children: (0, e.jsxs)("div", {
                    className: r()(c.kL, A.t),
                    tabIndex: 0,
                    onClick: () => {
                        null != m ? m() : null != p && p();
                    },
                    onKeyUp: (t) => {
                        "Enter" === t.key &&
                            (t.stopPropagation(), t.preventDefault(), null != m ? m() : null != p && p());
                    },
                    children: [
                        (0, e.jsx)("div", {
                            className: c.Nr,
                            children: (0, e.jsxs)("div", {
                                className: c.rf,
                                children: [
                                    (0, e.jsx)(u.E, { tag: "div", variant: "heading-lg/semibold", children: I }),
                                    (0, e.jsx)("div", {
                                        className: c.Sl,
                                        children:
                                            null != i
                                                ? (0, e.jsx)("img", { src: i.toString(), alt: "" })
                                                : (0, e.jsx)(o.b, {
                                                      color: d.A.colors.ICON_STRONG,
                                                      size: "custom",
                                                      height: 48,
                                                      width: 48,
                                                  }),
                                    }),
                                    null != l
                                        ? l({
                                              onClick: (t) => {
                                                  (t.stopPropagation(), p?.());
                                              },
                                          })
                                        : null,
                                    h,
                                    null != n &&
                                        "" !== n &&
                                        (0, e.jsx)(u.E, {
                                            className: c.h_,
                                            color: "text-default",
                                            variant: "body-sm/medium",
                                            children: n,
                                        }),
                                ],
                            }),
                        }),
                        null != f &&
                            (0, e.jsx)("div", {
                                className: c.xl,
                                children: (0, e.jsx)(u.E, {
                                    color: "interactive-text-default",
                                    variant: "body-sm/medium",
                                    children: a.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: f }),
                                }),
                            }),
                        null != S &&
                            S.length > 0 &&
                            (0, e.jsx)("div", {
                                className: c.PX,
                                children: (0, e.jsx)("div", {
                                    className: c.iq,
                                    children: (0, e.jsxs)("div", {
                                        className: c.Pp,
                                        children: [
                                            (0, e.jsx)(u.E, {
                                                color: "text-default",
                                                variant: "body-sm/medium",
                                                children: a.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                            }),
                                            S.length > g
                                                ? (0, e.jsxs)(e.Fragment, {
                                                      children: [
                                                          S.slice(0, g),
                                                          (0, e.jsx)(u.E, {
                                                              variant: "body-md/semibold",
                                                              color: "text-subtle",
                                                              children: a.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                                  count: S.length - g,
                                                              }),
                                                          }),
                                                      ],
                                                  })
                                                : S,
                                        ],
                                    }),
                                }),
                            }),
                    ],
                }),
            });
        },
    },
);
