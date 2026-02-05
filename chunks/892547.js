"use strict";
n.d(t, { I: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018);
function s(e) {
    let {
        query: t,
        autoFocus: n,
        onClear: s,
        placeholder: o = a.intl.string(a.t["5h0QOP"]),
        onKeyDown: l,
        size: u = "md",
        disabled: c = !1,
        onChange: d,
        onBlur: _,
        onFocus: f,
        autoComplete: p,
        inputProps: h,
        "aria-label": m = a.intl.string(a.t["5h0QOP"]),
        ref: g,
    } = e;
    return (0, r.jsx)(i.ksK, {
        ...h,
        onFocus: f,
        onBlur: _,
        value: t,
        onChange: d,
        onKeyDown: l,
        placeholder: o,
        disabled: c,
        autoFocus: n,
        autoComplete: p,
        "aria-label": m,
        inputRef: g,
        leading: i.$p$,
        clearable: null != s,
        size: u,
        fullWidth: !0,
    });
}
