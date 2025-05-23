n.d(t, {
    q: () => c,
    z: () => s
}),
    n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(916704);
function s(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: o.cellGroup,
        children: (0, r.jsx)('div', {
            className: o.content,
            children: t
        })
    });
}
function c(e) {
    let { icon: t, title: n, description: i, iconClassName: s, color: c, listType: u = 'icon', index: d } = e;
    return (0, r.jsxs)('div', {
        className: o.cell,
        children: [
            'numbered' === u && null != d
                ? (0, r.jsx)(a.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: o.number,
                      children: d + 1
                  })
                : null != t &&
                  (0, r.jsx)('div', {
                      className: o.iconContainer,
                      children: (0, r.jsx)(t, {
                          color: null != c ? c : 'currentColor',
                          className: l()(o.icon, s)
                      })
                  }),
            (0, r.jsxs)('div', {
                className: o.textContainer,
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
