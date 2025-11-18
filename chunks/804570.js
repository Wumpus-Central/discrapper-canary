n.d(t, { E: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(64298);
let u = i.memo(function (e) {
    let { emptyText: t, icon: n, absolute: i = !1 } = e;
    return (0, r.jsx)("div", {
        className: o()(c.emptyWidgetContainer, i && c.absolute),
        children: (0, r.jsx)(s.u, {
            text: t,
            children: (0, r.jsx)("div", {
                children: (0, r.jsx)(n, {
                    size: "md",
                    color: l.TVs.colors.WHITE,
                    className: c.emptyWidgetIcon,
                }),
            }),
        }),
    });
});
