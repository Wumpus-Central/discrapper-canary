n.d(t, { E: () => c });
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(892196);
let c = r.memo(function (e) {
    let { emptyText: t, icon: n, absolute: r = !1 } = e;
    return (0, i.jsx)('div', {
        className: a()(s.emptyWidgetContainer, r && s.absolute),
        children: (0, i.jsx)(l.ua7, {
            text: t,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: (0, i.jsx)(n, {
                        size: 'md',
                        color: l.TVs.colors.WHITE,
                        className: s.emptyWidgetIcon
                    })
                })
        })
    });
});
