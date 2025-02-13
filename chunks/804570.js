l.d(i, { E: () => o });
var t = l(200651),
    n = l(192379),
    d = l(120356),
    r = l.n(d),
    a = l(481060),
    s = l(221515);
let o = n.memo(function (e) {
    let { emptyText: i, icon: l, absolute: n = !1 } = e;
    return (0, t.jsx)('div', {
        className: r()(s.emptyWidgetContainer, n && s.absolute),
        children: (0, t.jsx)(a.ua7, {
            text: i,
            children: (e) =>
                (0, t.jsx)('div', {
                    ...e,
                    children: (0, t.jsx)(l, {
                        size: 'md',
                        color: a.TVs.colors.WHITE,
                        className: s.emptyWidgetIcon
                    })
                })
        })
    });
});
