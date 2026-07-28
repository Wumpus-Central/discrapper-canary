"use strict";
n.d(t, { s: () => l });
var i = n(477900),
    r = n(582128),
    a = n(939249),
    s = n(861777);
let l = (e) => {
    let {
            tag: t = "div",
            children: n,
            className: l,
            style: o,
            focusProps: d,
            onClick: c,
            onMouseEnter: u,
            onDoubleClick: _,
            onContextMenu: E,
            onKeyDown: A,
            onFocus: h,
            onBlur: I,
            onMouseOver: f,
            onMouseDown: p,
            onMouseLeave: T,
            buttonProps: m,
            "aria-label": g,
            "aria-describedby": S,
            ref: N,
            buttonRef: C,
        } = e,
        O = r.useRef(null),
        R = N ?? O;
    return (0, i.jsxs)(t, {
        ref: R,
        className: l,
        style: o,
        onClick: c,
        onMouseEnter: u,
        onMouseOver: f,
        onMouseLeave: T,
        onDoubleClick: _,
        onMouseDown: p,
        onContextMenu: E,
        children: [
            (0, i.jsx)(a.D, {
                ...m,
                innerRef: C,
                focusProps: { ringTarget: R, ...d },
                className: s.K,
                "aria-label": g,
                "aria-describedby": S,
                onClick: (e) => {
                    e.stopPropagation(), c?.(e);
                },
                onKeyDown: A,
                onFocus: h,
                onBlur: I,
                onMouseDown: p,
            }),
            n,
        ],
    });
};
