o.d(e, {
    q: () => s,
    z: () => c
}),
    o(953529);
var t = o(200651);
o(192379);
var r = o(120356),
    i = o.n(r),
    l = o(481060),
    a = o(916704);
function c(n) {
    let { children: e } = n;
    return (0, t.jsx)('div', {
        className: a.cellGroup,
        children: (0, t.jsx)('div', {
            className: a.content,
            children: e
        })
    });
}
function s(n) {
    let { icon: e, title: o, description: r, iconClassName: c, color: s, listType: d = 'icon', index: u } = n;
    return (0, t.jsxs)('div', {
        className: a.cell,
        children: [
            'numbered' === d && null != u
                ? (0, t.jsx)(l.X6q, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: a.number,
                      children: u + 1
                  })
                : null != e &&
                  (0, t.jsx)('div', {
                      className: a.iconContainer,
                      children: (0, t.jsx)(e, {
                          color: null != s ? s : 'currentColor',
                          className: i()(a.icon, c)
                      })
                  }),
            (0, t.jsxs)('div', {
                className: a.textContainer,
                children: [
                    (0, t.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: o
                    }),
                    null != r &&
                        (0, t.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        ]
    });
}
