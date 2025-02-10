e.d(t, {
    q: () => c,
    z: () => s
});
var i = e(200651);
e(192379);
var r = e(120356),
    o = e.n(r),
    l = e(481060),
    a = e(564515);
function s(n) {
    let { children: t } = n;
    return (0, i.jsx)('div', {
        className: a.cellGroup,
        children: (0, i.jsx)('div', {
            className: a.content,
            children: t
        })
    });
}
function c(n) {
    let { icon: t, title: e, description: r, iconClassName: s, color: c, listType: d = 'icon', index: x } = n;
    return (0, i.jsxs)('div', {
        className: a.cell,
        children: [
            'numbered' === d && null != x
                ? (0, i.jsx)(l.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: a.number,
                      children: x + 1
                  })
                : null != t &&
                  (0, i.jsx)('div', {
                      className: a.iconContainer,
                      children: (0, i.jsx)(t, {
                          color: null != c ? c : 'currentColor',
                          className: o()(a.icon, s)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: a.textContainer,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: e
                    }),
                    null != r &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        ]
    });
}
