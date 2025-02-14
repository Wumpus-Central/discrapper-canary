i.d(l, { E: () => o });
var t = i(200651),
    n = i(192379),
    r = i(120356),
    d = i.n(r),
    a = i(481060),
    s = i(221515);
let o = n.memo(function (e) {
    let { emptyText: l, icon: i, absolute: n = !1 } = e;
    return (0, t.jsx)('div', {
        className: d()(s.emptyWidgetContainer, n && s.absolute),
        children: (0, t.jsx)(a.ua7, {
            text: l,
            children: (e) =>
                (0, t.jsx)('div', {
                    ...e,
                    children: (0, t.jsx)(i, {
                        size: 'md',
                        color: a.TVs.colors.WHITE,
                        className: s.emptyWidgetIcon
                    })
                })
        })
    });
});
