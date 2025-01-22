r.d(n, {
    q: function () {
        return c;
    },
    z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(182588);
function u(e) {
    let { children: n } = e;
    return (0, i.jsx)('div', {
        className: l.cellGroup,
        children: (0, i.jsx)('div', {
            className: l.content,
            children: n
        })
    });
}
function c(e) {
    let { icon: n, title: r, description: a, iconClassName: u, color: c, listType: d = 'icon', index: f } = e;
    return (0, i.jsxs)('div', {
        className: l.cell,
        children: [
            'numbered' === d && null != f
                ? (0, i.jsx)(s.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: l.number,
                      children: f + 1
                  })
                : null != n &&
                  (0, i.jsx)('div', {
                      className: l.iconContainer,
                      children: (0, i.jsx)(n, {
                          color: null != c ? c : 'currentColor',
                          className: o()(l.icon, u)
                      })
                  }),
            (0, i.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: r
                    }),
                    null != a &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-secondary',
                            children: a
                        })
                ]
            })
        ]
    });
}
