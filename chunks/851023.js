"use strict";
n.d(t, { A: () => c });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(101555),
    d = n(162868);
function c(e) {
    let { onClick: t, children: n, tooltip: a, dangerous: c = !1, className: u, "aria-label": _ } = e;
    return (0, i.jsx)(l.m, {
        text: a,
        children: (0, i.jsx)(o.$n, {
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            dangerous: c,
            "aria-label": _ ?? a,
            className: u,
            children: r.Children.map(n, (e) =>
                r.isValidElement(e) ? r.cloneElement(e, { className: s()(e.props.className, d.l) }) : e,
            ),
        }),
    });
}
