e.d(i, {
    I: function () {
        return c;
    }
});
var l = e(200651);
e(192379);
var t = e(557533),
    r = e.n(t),
    s = e(489948),
    d = e(790472),
    a = e(777207),
    u = e(134992),
    o = e(717729);
function c(n) {
    let { title: i, description: e, headerImage: t, onDetails: c, onPurchase: m, PurchaseButton: v, availabilityLabel: p } = n;
    return (0, l.jsx)(s.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(u.wrapper, o.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            children: [
                (0, l.jsx)('div', {
                    className: u.cardHeaderImg,
                    style: null != t ? { backgroundImage: null != t ? 'url('.concat(t.toString(), ')') : void 0 } : void 0,
                    children:
                        null == t &&
                        (0, l.jsx)(d.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, l.jsxs)('div', {
                    className: u.details,
                    children: [
                        (0, l.jsx)(a.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: i
                        }),
                        null != e &&
                            (0, l.jsx)(a.x, {
                                className: u.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: e
                            })
                    ]
                }),
                null != v &&
                    (0, l.jsxs)('div', {
                        className: u.footer,
                        children: [
                            (0, l.jsx)(a.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: p
                            }),
                            (0, l.jsx)(v, {
                                onClick: (n) => {
                                    n.stopPropagation(), null == m || m();
                                }
                            })
                        ]
                    })
            ]
        })
    });
}
