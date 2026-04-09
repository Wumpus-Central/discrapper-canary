"use strict";
n.d(t, { s: () => o });
var r = n(627968),
    i = n(64700),
    s = n(939249),
    a = n(815241);
let o = (e) => {
    let {
            tag: t = "div",
            children: n,
            className: o,
            style: l,
            focusProps: u,
            onClick: c,
            onMouseEnter: d,
            onDoubleClick: _,
            onContextMenu: f,
            onKeyDown: p,
            onFocus: h,
            onBlur: m,
            onMouseOver: E,
            onMouseDown: g,
            onMouseLeave: A,
            buttonProps: I,
            "aria-label": T,
            "aria-describedby": S,
            ref: y,
            buttonRef: v,
        } = e,
        N = i.useRef(null),
        C = y ?? N;
    return (0, r.jsxs)(t, {
        ref: C,
        className: o,
        style: l,
        onClick: c,
        onMouseEnter: d,
        onMouseOver: E,
        onMouseLeave: A,
        onDoubleClick: _,
        onMouseDown: g,
        onContextMenu: f,
        children: [
            (0, r.jsx)(s.D, {
                ...I,
                innerRef: v,
                focusProps: { ringTarget: C, ...u },
                className: a.K,
                "aria-label": T,
                "aria-describedby": S,
                onClick: (e) => {
                    e.stopPropagation(), c?.(e);
                },
                onKeyDown: p,
                onFocus: h,
                onBlur: m,
                onMouseDown: g,
            }),
            n,
        ],
    });
};
