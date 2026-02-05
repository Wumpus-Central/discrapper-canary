"use strict";
n.d(t, { F: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(534205);
function o(e) {
    let {
            as: t,
            readOnly: n,
            disabled: i,
            fullWidth: o = !1,
            children: l,
            validation: u,
            className: c,
            ref: d,
            containerClassName: _,
            ...f
        } = e,
        p = t ?? "div",
        h = u?.hasError;
    return (0, r.jsx)(p, {
        ref: d,
        className: a()(s.kL, _),
        "data-full-width": o,
        ...f,
        children: (0, r.jsx)("div", {
            className: a()(s.iE, c),
            "data-error": h,
            "data-read-only": n,
            "data-disabled": i,
            children: l,
        }),
    });
}
