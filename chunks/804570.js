l.d(i, { E: () => s });
var t = l(200651),
    n = l(192379),
    d = l(120356),
    a = l.n(d),
    r = l(481060),
    o = l(997925);
let s = n.memo(function (e) {
    let { emptyText: i, icon: l, absolute: n = !1 } = e;
    return (0, t.jsx)('div', {
        className: a()(o.emptyWidgetContainer, n && o.absolute),
        children: (0, t.jsx)(r.ua7, {
            text: i,
            children: (e) =>
                (0, t.jsx)('div', {
                    ...e,
                    children: (0, t.jsx)(l, {
                        size: 'md',
                        color: r.TVs.colors.WHITE,
                        className: o.emptyWidgetIcon
                    })
                })
        })
    });
});
