(n.d(t, {
    q: () => c,
    z: () => l
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(916704);
function l(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: s.cellGroup,
        children: (0, r.jsx)('div', {
            className: s.content,
            children: t
        })
    });
}
function c(e) {
    let { icon: t, title: n, description: i, iconClassName: l, color: c, listType: u = 'icon', index: d } = e;
    return (0, r.jsxs)('div', {
        className: s.cell,
        children: [
            'numbered' === u && null != d
                ? (0, r.jsx)(a.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: s.number,
                      children: d + 1
                  })
                : null != t &&
                  (0, r.jsx)('div', {
                      className: s.iconContainer,
                      children: (0, r.jsx)(t, {
                          color: null != c ? c : 'currentColor',
                          className: o()(s.icon, l)
                      })
                  }),
            (0, r.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != i &&
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: i
                        })
                ]
            })
        ]
    });
}
