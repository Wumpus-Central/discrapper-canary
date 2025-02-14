i.d(e, { Z: () => c });
var t = i(200651);
i(192379);
var a = i(793030),
    r = i(690221),
    o = i(767218),
    s = i(155337);
function c() {
    return (0, t.jsxs)('div', {
        className: s.container,
        children: [
            (0, t.jsxs)('div', {
                className: s.headerContainer,
                children: [
                    (0, t.jsx)(a.xv, {
                        variant: 'eyebrow',
                        children: 'Server Boosts'
                    }),
                    (0, t.jsx)(r.Z, {
                        onClick: () => {},
                        children: (0, t.jsx)(a.xv, {
                            variant: 'text-xs/semibold',
                            color: 'currentColor',
                            children: 'Learn More'
                        })
                    })
                ]
            }),
            (0, t.jsxs)('div', {
                className: s.contentContainer,
                children: [
                    (0, t.jsx)(o.Z, {
                        count: 3,
                        type: o.b.AVAILABLE
                    }),
                    (0, t.jsx)(o.Z, {
                        count: 2,
                        type: o.b.SPENT
                    }),
                    (0, t.jsx)(o.Z, {
                        count: 5,
                        type: o.b.TOTAL
                    })
                ]
            })
        ]
    });
}
