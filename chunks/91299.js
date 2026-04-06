"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(377049),
    l = n(158954),
    u = n(352306),
    c = n(610223),
    d = n(40126);
function _(e) {
    let { className: t, onClick: n, clickSound: s, disabled: _ = !1, ...f } = e,
        p = (0, c.W)(s ?? o.A),
        { eventOver: h } = u.s.useConfig({ location: "clickable" }),
        m = (0, i.useCallback)(
            (e) => {
                _ || (h || p(), n?.(e));
            },
            [_, h, n, p],
        );
    return (0, r.jsx)(l.DUT, { className: a()(t, d.v), ...f, onClick: m });
}
