n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(388032),
    c = n(196880);
function l(e) {
    let { title: t, subtitle: n, headingId: l } = e;
    return (0, r.jsxs)('div', {
        className: c.headerRow,
        children: [
            (0, r.jsxs)('div', {
                className: c.title,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-sm/medium',
                        color: 'text-default',
                        id: l,
                        children: t
                    }),
                    null != n &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: n
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: c.actions,
                children: [
                    (0, r.jsx)(o.zxk, {
                        size: 'sm',
                        text: i.intl.string(i.t.uqw8wM),
                        onClick: () => {},
                        variant: 'secondary'
                    }),
                    (0, r.jsx)(o.hU, {
                        icon: o.xhG,
                        variant: 'secondary',
                        'aria-label': i.intl.string(i.t.xpSHSk),
                        onClick: () => {},
                        size: 'sm'
                    })
                ]
            })
        ]
    });
}
