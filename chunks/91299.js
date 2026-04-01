"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(377049),
    l = n(158954),
    u = n(610223),
    c = n(40126);
function d(e) {
    let { className: t, onClick: n, clickSound: s, disabled: d, ..._ } = e,
        f = (0, u.W)(s ?? o.A),
        p = (0, i.useCallback)(
            (e) => {
                d || (f(), n?.(e));
            },
            [d, n, f],
        );
    return (0, r.jsx)(l.DUT, { className: a()(t, c.v), ..._, onClick: p });
}
