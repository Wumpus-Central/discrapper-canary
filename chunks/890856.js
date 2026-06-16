"use strict";
n.d(t, { s: () => o });
var i = n(627968),
    r = n(64700),
    s = n(939249),
    a = n(445401);
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
            onContextMenu: h,
            onKeyDown: f,
            onFocus: p,
            onBlur: E,
            onMouseOver: m,
            onMouseDown: g,
            onMouseLeave: A,
            buttonProps: I,
            "aria-label": T,
            "aria-describedby": S,
            ref: y,
            buttonRef: C,
        } = e,
        N = r.useRef(null),
        v = y ?? N;
    return (0, i.jsxs)(t, {
        ref: v,
        className: o,
        style: l,
        onClick: c,
        onMouseEnter: d,
        onMouseOver: m,
        onMouseLeave: A,
        onDoubleClick: _,
        onMouseDown: g,
        onContextMenu: h,
        children: [
            (0, i.jsx)(s.D, {
                ...I,
                innerRef: C,
                focusProps: { ringTarget: v, ...u },
                className: a.K,
                "aria-label": T,
                "aria-describedby": S,
                onClick: (e) => {
                    e.stopPropagation(), c?.(e);
                },
                onKeyDown: f,
                onFocus: p,
                onBlur: E,
                onMouseDown: g,
            }),
            n,
        ],
    });
};
