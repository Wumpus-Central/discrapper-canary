"use strict";
n.d(t, { s: () => o });
var r = n(627968),
    i = n(64700),
    a = n(939249),
    s = n(250614);
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
            onMouseOver: g,
            onMouseDown: E,
            onMouseLeave: A,
            buttonProps: I,
            "aria-label": T,
            "aria-describedby": y,
            ref: S,
            buttonRef: v,
        } = e,
        C = i.useRef(null),
        b = S ?? C;
    return (0, r.jsxs)(t, {
        ref: b,
        className: o,
        style: l,
        onClick: c,
        onMouseEnter: d,
        onMouseOver: g,
        onMouseLeave: A,
        onDoubleClick: _,
        onMouseDown: E,
        onContextMenu: f,
        children: [
            (0, r.jsx)(a.D, {
                ...I,
                innerRef: v,
                focusProps: { ringTarget: b, ...u },
                className: s.K,
                "aria-label": T,
                "aria-describedby": y,
                onClick: (e) => {
                    e.stopPropagation(), c?.(e);
                },
                onKeyDown: p,
                onFocus: h,
                onBlur: m,
                onMouseDown: E,
            }),
            n,
        ],
    });
};
