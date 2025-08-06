n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var l = n(481060),
    o = n(388032),
    i = n(196880);
function a(e) {
    let { title: t, subtitle: n, headingId: a } = e;
    return (0, r.jsxs)('div', {
        className: i.headerRow,
        children: [
            (0, r.jsxs)('div', {
                className: i.title,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-sm/medium',
                        color: 'text-default',
                        id: a,
                        children: t
                    }),
                    null != n &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: n
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i.actions,
                children: [
                    (0, r.jsx)(l.zxk, {
                        size: 'sm',
                        text: o.intl.string(o.t.uqw8wM),
                        onClick: () => {},
                        variant: 'secondary'
                    }),
                    (0, r.jsx)(l.hU, {
                        icon: l.xhG,
                        variant: 'secondary',
                        'aria-label': o.intl.string(o.t.xpSHSk),
                        onClick: () => {},
                        size: 'sm'
                    })
                ]
            })
        ]
    });
}
