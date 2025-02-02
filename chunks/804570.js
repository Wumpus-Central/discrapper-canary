n.d(t, { E: () => d });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    s = n(892196);
let d = l.memo(function (e) {
    let { emptyText: t, icon: n, absolute: l = !1 } = e;
    return (0, i.jsx)('div', {
        className: o()(s.emptyWidgetContainer, l && s.absolute),
        children: (0, i.jsx)(a.ua7, {
            text: t,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: (0, i.jsx)(n, {
                        size: 'md',
                        color: a.TVs.colors.WHITE,
                        className: s.emptyWidgetIcon
                    })
                })
        })
    });
});
