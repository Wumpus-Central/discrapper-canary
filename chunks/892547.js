"use strict";
n.d(t, { I: () => a });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(985018);
function a(e) {
    let {
        query: t,
        autoFocus: n,
        onClear: a,
        placeholder: o = s.intl.string(s.t["5h0QOP"]),
        onKeyDown: l,
        size: u = "md",
        disabled: c = !1,
        onChange: d,
        onBlur: _,
        onFocus: f,
        autoComplete: p,
        inputProps: h,
        "aria-label": m = s.intl.string(s.t["5h0QOP"]),
        ref: E,
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
        inputRef: E,
        leading: i.$p$,
        onClear: a,
        clearable: null != a,
        size: u,
        fullWidth: !0,
    });
}
