"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(101555),
    c = n(389116);
function u(e) {
    let { onClick: t, children: n, tooltip: s, dangerous: u = !1, className: d, "aria-label": h } = e;
    return (0, l.jsx)(r.m, {
        text: s,
        children: (0, l.jsx)(o.$n, {
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            dangerous: u,
            "aria-label": h ?? s,
            className: d,
            children: i.Children.map(n, (e) =>
                i.isValidElement(e) ? i.cloneElement(e, { className: a()(e.props.className, c.l) }) : e,
            ),
        }),
    });
}
