"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(101555),
    u = n(238855);
function c(e) {
    let { onClick: t, children: n, tooltip: a, dangerous: c = !1, className: d, "aria-label": _ } = e;
    return (0, r.jsx)(o.m, {
        text: a,
        children: (0, r.jsx)(l.$n, {
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            dangerous: c,
            "aria-label": _ ?? a,
            className: d,
            children: i.Children.map(n, (e) =>
                i.isValidElement(e) ? i.cloneElement(e, { className: s()(e.props.className, u.l) }) : e,
            ),
        }),
    });
}
