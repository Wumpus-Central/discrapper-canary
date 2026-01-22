n.d(t, { s: () => d });
var r = n(627968),
    i = n(64700),
    a = n(939249),
    s = n(250614);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = (e) => {
    let {
            tag: t = "div",
            children: n,
            className: o,
            style: c,
            focusProps: d,
            onClick: f,
            onMouseEnter: p,
            onDoubleClick: _,
            onContextMenu: h,
            onKeyDown: m,
            onFocus: g,
            onBlur: E,
            onMouseOver: b,
            onMouseDown: y,
            onMouseLeave: O,
            buttonProps: A,
            "aria-label": v,
            "aria-describedby": S,
            ref: I,
            buttonRef: T,
        } = e,
        C = i.useRef(null),
        N = null != I ? I : C;
    return (0, r.jsxs)(t, {
        ref: N,
        className: o,
        style: c,
        onClick: f,
        onMouseEnter: p,
        onMouseOver: b,
        onMouseLeave: O,
        onDoubleClick: _,
        onMouseDown: y,
        onContextMenu: h,
        children: [
            (0, r.jsx)(
                a.D,
                u(l({}, A), {
                    innerRef: T,
                    focusProps: l({ ringTarget: N }, d),
                    className: s.K,
                    "aria-label": v,
                    "aria-describedby": S,
                    onClick: (e) => {
                        e.stopPropagation(), null == f || f(e);
                    },
                    onKeyDown: m,
                    onFocus: g,
                    onBlur: E,
                    onMouseDown: y,
                }),
            ),
            n,
        ],
    });
};
