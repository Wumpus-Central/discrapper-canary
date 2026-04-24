l.d(e, { FY: () => I, GS: () => p, OP: () => h });
var i = l(627968);
l(64700);
var n = l(503698),
    a = l.n(n),
    s = l(187322),
    r = l(855522),
    o = l(834730),
    d = l(715641),
    u = l(661531),
    c = l(516871),
    A = l(693217);
let p = 5;
function h(t) {
    let {
        description: e,
        imgSrc: l,
        renderPurchaseButton: n,
        onPurchase: h,
        title: I,
        onDetails: m,
        benefitItems: f,
        benefitsSummary: g,
        subtitle: v,
        maxBenefits: x = p,
    } = t;
    return (0, i.jsx)(s.vN, {
        children: (0, i.jsxs)("div", {
            className: a()(c.kL, A.t),
            tabIndex: 0,
            onClick: () => {
                null != m ? m() : null != h && h();
            },
            onKeyUp: (t) => {
                "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != m ? m() : null != h && h());
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
                                    null != l
                                        ? (0, i.jsx)("img", { src: l.toString(), alt: "" })
                                        : (0, i.jsx)(d.b, {
                                              color: u.A.colors.ICON_STRONG,
                                              size: "custom",
                                              height: 48,
                                              width: 48,
                                          }),
                            }),
                            null != n
                                ? n({
                                      onClick: (t) => {
                                          t.stopPropagation(), h?.();
                                      },
                                  })
                                : null,
                            v,
                            null != e &&
                                "" !== e &&
                                (0, i.jsx)(o.E, {
                                    className: c.h_,
                                    color: "text-default",
                                    variant: "text-sm/medium",
                                    children: e,
                                }),
                        ],
                    }),
                }),
                null != g &&
                    (0, i.jsx)("div", {
                        className: c.xl,
                        children: (0, i.jsx)(o.E, {
                            color: "interactive-text-default",
                            variant: "text-sm/medium",
                            children: r.A.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: g }),
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
                                        variant: "eyebrow",
                                        children: r.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                    }),
                                    f.length > x
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  f.slice(0, x),
                                                  (0, i.jsx)(o.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-subtle",
                                                      children: r.A.Messages.STOREFRONT_MORE_BENEFITS.format({
                                                          count: f.length - x,
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
function I(t) {
    let { icon: e, header: l, description: n } = t;
    return (0, i.jsxs)("div", {
        className: c.w2,
        children: [
            (0, i.jsx)("div", { className: c.z8, children: e }),
            (0, i.jsxs)("div", {
                children: [
                    null != l && (0, i.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(o.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
