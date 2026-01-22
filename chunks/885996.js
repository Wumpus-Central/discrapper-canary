n.d(t, {
    FY: () => h,
    GS: () => p,
    OP: () => _,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(187322),
    o = n(855522),
    l = n(158954),
    c = n(827734),
    u = n(596678),
    d = n(671816);
let f = 48,
    p = 5;

function _(e) {
    let {
        description: t,
        imgSrc: n,
        renderPurchaseButton: i,
        onPurchase: _,
        title: h,
        onDetails: m,
        benefitItems: g,
        benefitsSummary: E,
        subtitle: b,
        maxBenefits: y = p,
    } = e;
    return (0, r.jsx)(s.vN, {
        children: (0, r.jsxs)("div", {
            className: a()(u.kL, d.t),
            tabIndex: 0,
            onClick: () => {
                null != m ? m() : null != _ && _();
            },
            onKeyUp: (e) => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != m ? m() : null != _ && _());
            },
            children: [
                (0, r.jsx)("div", {
                    className: u.Nr,
                    children: (0, r.jsxs)("div", {
                        className: u.rf,
                        children: [
                            (0, r.jsx)(l.EYj, {
                                tag: "div",
                                variant: "heading-lg/semibold",
                                children: h,
                            }),
                            (0, r.jsx)("div", {
                                className: u.Sl,
                                children:
                                    null != n
                                        ? (0, r.jsx)("img", {
                                              src: n.toString(),
                                              alt: "",
                                          })
                                        : (0, r.jsx)(l.bhD, {
                                              color: c.A.colors.ICON_STRONG,
                                              size: "custom",
                                              height: f,
                                              width: f,
                                          }),
                            }),
                            null != i
                                ? i({
                                      onClick: (e) => {
                                          e.stopPropagation(), null == _ || _();
                                      },
                                  })
                                : null,
                            b,
                            null != t &&
                                "" !== t &&
                                (0, r.jsx)(l.EYj, {
                                    className: u.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: t,
                                }),
                        ],
                    }),
                }),
                null != E &&
                    (0, r.jsx)("div", {
                        className: u.xl,
                        children: (0, r.jsx)(l.EYj, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: o.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                                count: E,
                            }),
                        }),
                    }),
                null != g &&
                    g.length > 0 &&
                    (0, r.jsx)("div", {
                        className: u.PX,
                        children: (0, r.jsx)("div", {
                            className: u.iq,
                            children: (0, r.jsxs)("div", {
                                className: u.Pp,
                                children: [
                                    (0, r.jsx)(l.EYj, {
                                        color: "text-default",
                                        variant: "eyebrow",
                                        children: o.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    g.length > y
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  g.slice(0, y),
                                                  (0, r.jsx)(l.EYj, {
                                                      variant: "text-md/semibold",
                                                      color: "text-subtle",
                                                      children: o.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: g.length - y,
                                                      }),
                                                  }),
                                              ],
                                          })
                                        : g,
                                ],
                            }),
                        }),
                    }),
            ],
        }),
    });
}

function h(e) {
    let { icon: t, header: n, description: i } = e;
    return (0, r.jsxs)("div", {
        className: u.w2,
        children: [
            (0, r.jsx)("div", {
                className: u.z8,
                children: t,
            }),
            (0, r.jsxs)("div", {
                children: [
                    null != n &&
                        (0, r.jsx)(l.EYj, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: n,
                        }),
                    (0, r.jsx)(l.EYj, {
                        variant: "text-sm/normal",
                        children: i,
                    }),
                ],
            }),
        ],
    });
}
