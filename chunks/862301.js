"use strict";
n.d(t, { F: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(676344);
function o(e) {
    let {
            as: t,
            readOnly: n,
            disabled: i,
            fullWidth: o = !1,
            children: l,
            validation: u,
            className: d,
            ref: c,
            containerClassName: _,
            ...f
        } = e,
        E = u?.hasError;
    return (0, r.jsx)(t ?? "div", {
        ref: c,
        className: s()(a.kL, _),
        "data-full-width": o,
        ...f,
        children: (0, r.jsx)("div", {
            className: s()(a.iE, d),
            "data-error": E,
            "data-read-only": n,
            "data-disabled": i,
            children: l,
        }),
    });
}
