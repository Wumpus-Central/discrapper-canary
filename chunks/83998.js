t.d(n, { I: () => d }), t(266796);
var r = t(200651);
t(192379);
var i = t(557533),
    l = t.n(i),
    s = t(928873),
    o = t(790472),
    u = t(777207),
    a = t(559554),
    c = t(820468);
function d(e) {
    let { title: n, description: t, headerImage: i, onDetails: d, onPurchase: p, PurchaseButton: m, availabilityLabel: b } = e;
    return (0, r.jsx)(s.tE, {
        children: (0, r.jsxs)('div', {
            className: l()(a.wrapper, c.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != d ? d() : null != p && p();
            },
            children: [
                (0, r.jsx)('div', {
                    className: a.cardHeaderImg,
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
                    className: a.details,
                    children: [
                        (0, r.jsx)(u.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: n
                        }),
                        null != t &&
                            (0, r.jsx)(u.x, {
                                className: a.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: t
                            })
                    ]
                }),
                null != m &&
                    (0, r.jsxs)('div', {
                        className: a.footer,
                        children: [
                            (0, r.jsx)(u.x, {
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
