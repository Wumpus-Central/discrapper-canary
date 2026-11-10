var i = e(477900);
e(582128);
var l = e(503698),
    r = e.n(l),
    s = e(559106),
    a = e(855522),
    o = e(834730),
    u = e(715641),
    d = e(646514),
    c = e(942436),
    A = e(840362);
e.d(
    n,
    {},
    {
        F: function (t) {
            let { icon: n, header: e, description: l } = t;
            return (0, i.jsxs)("div", {
                className: c.w2,
                children: [
                    (0, i.jsx)("div", { className: c.z8, children: n }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != e &&
                                (0, i.jsx)(o.E, { variant: "body-md/semibold", color: "text-strong", children: e }),
                            (0, i.jsx)(o.E, { variant: "body-sm/normal", children: l }),
                        ],
                    }),
                ],
            });
        },
        O: function (t) {
            let {
                description: n,
                imgSrc: e,
                renderPurchaseButton: l,
                onPurchase: p,
                title: I,
                onDetails: m,
                benefitItems: f,
                benefitsSummary: S,
                subtitle: g,
                maxBenefits: h = 5,
            } = t;
            return (0, i.jsx)(s.vN, {
                children: (0, i.jsxs)("div", {
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
                        (0, i.jsx)("div", {
                            className: c.Nr,
                            children: (0, i.jsxs)("div", {
                                className: c.rf,
                                children: [
                                    (0, i.jsx)(o.E, { tag: "div", variant: "heading-lg/semibold", children: I }),
                                    (0, i.jsx)("div", {
                                        className: c.Sl,
                                        children:
                                            null != e
                                                ? (0, i.jsx)("img", { src: e.toString(), alt: "" })
                                                : (0, i.jsx)(u.BadgeIcon, {
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
                                    g,
                                    null != n &&
                                        "" !== n &&
                                        (0, i.jsx)(o.E, {
                                            className: c.h_,
                                            color: "text-default",
                                            variant: "body-sm/medium",
                                            children: n,
                                        }),
                                ],
                            }),
                        }),
                        null != S &&
                            (0, i.jsx)("div", {
                                className: c.xl,
                                children: (0, i.jsx)(o.E, {
                                    color: "interactive-text-default",
                                    variant: "body-sm/medium",
                                    children: a.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: S }),
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
                                            (0, i.jsx)(o.E, {
                                                color: "text-default",
                                                variant: "body-sm/medium",
                                                children: a.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                            }),
                                            f.length > h
                                                ? (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          f.slice(0, h),
                                                          (0, i.jsx)(o.E, {
                                                              variant: "body-md/semibold",
                                                              color: "text-subtle",
                                                              children: a.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                                  count: f.length - h,
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
        },
    },
);
