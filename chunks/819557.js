n.d(t, {
    q: () => u,
    z: () => l
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(182588);
function l(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: o.cellGroup,
        children: (0, i.jsx)('div', {
            className: o.content,
            children: t
        })
    });
}
function u(e) {
    let { icon: t, title: n, description: r, iconClassName: l, color: u, listType: c = 'icon', index: d } = e;
    return (0, i.jsxs)('div', {
        className: o.cell,
        children: [
            'numbered' === c && null != d
                ? (0, i.jsx)(s.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: o.number,
                      children: d + 1
                  })
                : null != t &&
                  (0, i.jsx)('div', {
                      className: o.iconContainer,
                      children: (0, i.jsx)(t, {
                          color: null != u ? u : 'currentColor',
                          className: a()(o.icon, l)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != r &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        ]
    });
}
