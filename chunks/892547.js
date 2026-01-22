n.d(t, { I: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    let {
        query: t,
        autoFocus: n,
        onClear: s,
        placeholder: l = a.intl.string(a.t["5h0QOP"]),
        onKeyDown: u,
        size: d = "md",
        disabled: f = !1,
        onChange: p,
        onBlur: _,
        onFocus: h,
        autoComplete: m,
        inputProps: g,
        "aria-label": E = a.intl.string(a.t["5h0QOP"]),
        ref: b,
    } = e;
    return (0, r.jsx)(
        i.ksK,
        c(o({}, g), {
            onFocus: h,
            onBlur: _,
            value: t,
            onChange: p,
            onKeyDown: u,
            placeholder: l,
            disabled: f,
            autoFocus: n,
            autoComplete: m,
            "aria-label": E,
            inputRef: b,
            leading: i.$p$,
            clearable: null != s,
            size: d,
            fullWidth: !0,
        }),
    );
}
