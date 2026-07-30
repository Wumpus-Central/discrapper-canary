"use strict";
n.d(t, { I: () => l });
var i = n(477900);
n(582128);
var r = n(7689),
    a = n(292666),
    s = n(375708);
function l(e) {
    let {
        query: t,
        autoFocus: n,
        onClear: l,
        placeholder: o = s.intl.string(s.t["5h0QOP"]),
        onKeyDown: d,
        size: c = "md",
        disabled: u = !1,
        onChange: _,
        onBlur: E,
        onFocus: A,
        autoComplete: h,
        inputProps: I,
        "aria-label": f = s.intl.string(s.t["5h0QOP"]),
        ref: p,
    } = e;
    return (0, i.jsx)(a.k, {
        ...I,
        onFocus: A,
        onBlur: E,
        value: t,
        onChange: _,
        onKeyDown: d,
        placeholder: o,
        disabled: u,
        autoFocus: n,
        autoComplete: h,
        "aria-label": f,
        inputRef: p,
        leading: r.$,
        onClear: l,
        clearable: null != l,
        size: c,
        fullWidth: !0,
    });
}
