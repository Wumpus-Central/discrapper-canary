"use strict";
n.d(t, { p: () => c });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(305866),
    o = n(103552),
    d = n(183610);
function c(e) {
    let {
            children: t,
            placeholder: n,
            value: s,
            onChange: c,
            onClose: u,
            className: m,
            multiSelect: h,
            emptyStateText: g,
            emptyStateHeader: x,
            onQueryChange: f,
            ..._
        } = e,
        p = a.useCallback(
            (e) => {
                c(e), h || u?.();
            },
            [c, u, h],
        );
    return (0, l.jsx)(r.l, {
        className: i()(d.kL, d.XG, m),
        children: (0, l.jsx)(o.G3, {
            ..._,
            value: s,
            multiSelect: h,
            onChange: p,
            placeholder: n,
            children: t,
            listClassName: d.p_,
            emptyStateText: g,
            emptyStateHeader: x,
            onQueryChange: f,
        }),
    });
}
