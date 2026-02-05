"use strict";
n.d(t, { p: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(305866),
    l = n(103552),
    u = n(291611);
function c(e) {
    let {
            children: t,
            placeholder: n,
            value: a,
            onChange: c,
            onClose: d,
            className: _,
            multiSelect: f,
            emptyStateText: p,
            emptyStateHeader: h,
            onQueryChange: m,
            ...g
        } = e,
        E = i.useCallback(
            (e) => {
                c(e), f || d?.();
            },
            [c, d, f],
        );
    return (0, r.jsx)(o.l, {
        className: s()(u.kL, u.XG, _),
        children: (0, r.jsx)(l.G3, {
            ...g,
            value: a,
            multiSelect: f,
            onChange: E,
            placeholder: n,
            children: t,
            listClassName: u.p_,
            emptyStateText: p,
            emptyStateHeader: h,
            onQueryChange: m,
        }),
    });
}
