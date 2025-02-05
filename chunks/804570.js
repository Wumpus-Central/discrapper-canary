t.d(i, { E: () => o });
var l = t(200651),
    n = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(481060),
    d = t(892196);
let o = n.memo(function (e) {
    let { emptyText: i, icon: t, absolute: n = !1 } = e;
    return (0, l.jsx)('div', {
        className: r()(d.emptyWidgetContainer, n && d.absolute),
        children: (0, l.jsx)(s.ua7, {
            text: i,
            children: (e) =>
                (0, l.jsx)('div', {
                    ...e,
                    children: (0, l.jsx)(t, {
                        size: 'md',
                        color: s.TVs.colors.WHITE,
                        className: d.emptyWidgetIcon
                    })
                })
        })
    });
});
