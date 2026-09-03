n.d(t, { A: () => c });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(866665),
    o = n(101555),
    u = n(343005);
function c(e) {
    let { onClick: t, children: n, tooltip: s, dangerous: c = !1, className: d, "aria-label": h } = e;
    return (0, l.jsx)(a.m, {
        text: s,
        children: (0, l.jsx)(o.$n, {
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            dangerous: c,
            "aria-label": h ?? s,
            className: d,
            children: i.Children.map(n, (e) =>
                i.isValidElement(e) ? i.cloneElement(e, { className: r()(e.props.className, u.l) }) : e,
            ),
        }),
    });
}
