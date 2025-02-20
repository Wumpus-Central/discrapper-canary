t.d(n, { I: () => d }), t(266796);
var r = t(200651);
t(192379);
var i = t(557533),
    l = t.n(i),
    s = t(489948),
    o = t(790472),
    a = t(777207),
    u = t(268513),
    c = t(775600);
function d(e) {
    let { title: n, description: t, headerImage: i, onDetails: d, onPurchase: p, PurchaseButton: m, availabilityLabel: b } = e;
    return (0, r.jsx)(s.tE, {
        children: (0, r.jsxs)('div', {
            className: l()(u.wrapper, c.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != d ? d() : null != p && p();
            },
            children: [
                (0, r.jsx)('div', {
                    className: u.cardHeaderImg,
                    style: null != i ? { backgroundImage: null != i ? 'url('.concat(i.toString(), ')') : void 0 } : void 0,
                    children:
                        null == i &&
                        (0, r.jsx)(o.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, r.jsxs)('div', {
                    className: u.details,
                    children: [
                        (0, r.jsx)(a.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: n
                        }),
                        null != t &&
                            (0, r.jsx)(a.x, {
                                className: u.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: t
                            })
                    ]
                }),
                null != m &&
                    (0, r.jsxs)('div', {
                        className: u.footer,
                        children: [
                            (0, r.jsx)(a.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: b
                            }),
                            (0, r.jsx)(m, {
                                onClick: (e) => {
                                    e.stopPropagation(), null == p || p();
                                }
                            })
                        ]
                    })
            ]
        })
    });
}
