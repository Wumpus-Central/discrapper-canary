n.d(t, { A: () => c });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(866665),
    o = n(101555),
    u = n(343005);
function c(e) {
    let { onClick: t, children: n, tooltip: r, dangerous: c = !1, className: d, "aria-label": h } = e;
    return (0, l.jsx)(a.m, {
        text: r,
        children: (0, l.jsx)(o.$n, {
            onClick: (e) => {
                (e.stopPropagation(), t(e));
            },
            dangerous: c,
            "aria-label": h ?? r,
            className: d,
            children: i.Children.map(n, (e) =>
                i.isValidElement(e) ? i.cloneElement(e, { className: s()(e.props.className, u.l) }) : e,
            ),
        }),
    });
}
