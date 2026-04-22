"use strict";
n.d(t, { I: () => o });
var r = n(627968);
n(64700);
var i = n(292666),
    s = n(7689),
    a = n(985018);
function o(e) {
    let {
        query: t,
        autoFocus: n,
        onClear: o,
        placeholder: l = a.intl.string(a.t["5h0QOP"]),
        onKeyDown: u,
        size: d = "md",
        disabled: c = !1,
        onChange: _,
        onBlur: f,
        onFocus: E,
        autoComplete: h,
        inputProps: p,
        "aria-label": m = a.intl.string(a.t["5h0QOP"]),
        ref: g,
    } = e;
    return (0, r.jsx)(i.k, {
        ...p,
        onFocus: E,
        onBlur: f,
        value: t,
        onChange: _,
        onKeyDown: u,
        placeholder: l,
        disabled: c,
        autoFocus: n,
        autoComplete: h,
        "aria-label": m,
        inputRef: g,
        leading: s.$,
        onClear: o,
        clearable: null != o,
        size: d,
        fullWidth: !0,
    });
}
