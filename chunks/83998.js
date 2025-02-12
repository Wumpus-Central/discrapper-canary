l.d(i, { I: () => c });
var e = l(200651);
l(192379);
var t = l(557533),
    r = l.n(t),
    s = l(489948),
    d = l(790472),
    a = l(777207),
    u = l(661560),
    o = l(802415);
function c(n) {
    let { title: i, description: l, headerImage: t, onDetails: c, onPurchase: m, PurchaseButton: v, availabilityLabel: p } = n;
    return (0, e.jsx)(s.tE, {
        children: (0, e.jsxs)('div', {
            className: r()(u.wrapper, o.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            children: [
                (0, e.jsx)('div', {
                    className: u.cardHeaderImg,
                    style: null != t ? { backgroundImage: null != t ? 'url('.concat(t.toString(), ')') : void 0 } : void 0,
                    children:
                        null == t &&
                        (0, e.jsx)(d.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, e.jsxs)('div', {
                    className: u.details,
                    children: [
                        (0, e.jsx)(a.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: i
                        }),
                        null != l &&
                            (0, e.jsx)(a.x, {
                                className: u.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: l
                            })
                    ]
                }),
                null != v &&
                    (0, e.jsxs)('div', {
                        className: u.footer,
                        children: [
                            (0, e.jsx)(a.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: p
                            }),
                            (0, e.jsx)(v, {
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
