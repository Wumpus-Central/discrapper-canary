n.d(t, {
    q: () => c,
    z: () => s
}),
    n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(916704);
function s(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: a.cellGroup,
        children: (0, r.jsx)('div', {
            className: a.content,
            children: t
        })
    });
}
function c(e) {
    let { icon: t, title: n, description: i, iconClassName: s, color: c, listType: u = 'icon', index: d } = e;
    return (0, r.jsxs)('div', {
        className: a.cell,
        children: [
            'numbered' === u && null != d
                ? (0, r.jsx)(o.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: a.number,
                      children: d + 1
                  })
                : null != t &&
                  (0, r.jsx)('div', {
                      className: a.iconContainer,
                      children: (0, r.jsx)(t, {
                          color: null != c ? c : 'currentColor',
                          className: l()(a.icon, s)
                      })
                  }),
            (0, r.jsxs)('div', {
                className: a.textContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: n
                    }),
                    null != i &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: i
                        })
                ]
            })
        ]
    });
}
