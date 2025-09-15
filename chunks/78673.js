n.d(t, { I: () => c }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(67136),
    s = n(793030),
    u = n(979138),
    a = n(635549);
function c(e) {
    let {
        title: t,
        description: n,
        headerImage: i,
        onDetails: c,
        onPurchase: d,
        PurchaseButton: p,
        GiftButton: b,
        availabilityLabel: m,
    } = e;
    return (0, r.jsx)(o.tE, {
        children: (0, r.jsxs)("div", {
            className: l()(u.wrapper, a.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != d && d();
            },
            onKeyUp: (e) => {
                "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d());
            },
            children: [
                (0, r.jsx)("div", {
                    className: u.cardHeaderImg,
                    style:
                        null != i ? { backgroundImage: null != i ? "url(".concat(i.toString(), ")") : void 0 } : void 0,
                    children:
                        null == i &&
                        (0, r.jsx)(s.Prq, {
                            color: "white",
                            size: "custom",
                            height: 80,
                            width: 80,
                        }),
                }),
                (0, r.jsxs)("div", {
                    className: u.details,
                    children: [
                        (0, r.jsx)(s.xvT, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: t,
                        }),
                        null != n &&
                            (0, r.jsx)(s.xvT, {
                                className: u.description,
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: n,
                            }),
                    ],
                }),
                (null != p || null != b) &&
                    (0, r.jsxs)("div", {
                        className: u.footer,
                        children: [
                            null != p &&
                                (0, r.jsx)(s.xvT, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    children: m,
                                }),
                            (0, r.jsxs)("div", {
                                className: u.buttonGroup,
                                children: [
                                    null != p &&
                                        (0, r.jsx)(p, {
                                            onClick: (e) => {
                                                e.stopPropagation(), null == d || d();
                                            },
                                        }),
                                    null != b && (0, r.jsx)(b, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
