i.d(n, { Z: () => c });
var t = i(200651);
i(192379);
var r = i(793030),
    a = i(690221),
    s = i(767218),
    o = i(128310);
function c() {
    return (0, t.jsxs)('div', {
        className: o.container,
        children: [
            (0, t.jsxs)('div', {
                className: o.headerContainer,
                children: [
                    (0, t.jsx)(r.xv, {
                        variant: 'eyebrow',
                        children: 'Server Boosts'
                    }),
                    (0, t.jsx)(a.Z, {
                        onClick: () => {},
                        children: (0, t.jsx)(r.xv, {
                            variant: 'text-xs/semibold',
                            color: 'currentColor',
                            children: 'Learn More'
                        })
                    })
                ]
            }),
            (0, t.jsxs)('div', {
                className: o.contentContainer,
                children: [
                    (0, t.jsx)(s.Z, {
                        count: 3,
                        type: s.b.AVAILABLE
                    }),
                    (0, t.jsx)(s.Z, {
                        count: 2,
                        type: s.b.SPENT
                    }),
                    (0, t.jsx)(s.Z, {
                        count: 5,
                        type: s.b.TOTAL
                    })
                ]
            })
        ]
    });
}
