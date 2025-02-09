l.d(i, { E: () => r });
var t = l(200651),
    n = l(192379),
    d = l(120356),
    a = l.n(d),
    o = l(481060),
    s = l(997925);
let r = n.memo(function (e) {
    let { emptyText: i, icon: l, absolute: n = !1 } = e;
    return (0, t.jsx)('div', {
        className: a()(s.emptyWidgetContainer, n && s.absolute),
        children: (0, t.jsx)(o.ua7, {
            text: i,
            children: (e) =>
                (0, t.jsx)('div', {
                    ...e,
                    children: (0, t.jsx)(l, {
                        size: 'md',
                        color: o.TVs.colors.WHITE,
                        className: s.emptyWidgetIcon
                    })
                })
        })
    });
});
