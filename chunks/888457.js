"use strict";
n.d(t, { s: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(834730),
    u = n(658675),
    c = n(86968),
    d = n(900283),
    _ = n(563014),
    f = n(745396),
    p = n(298063),
    h = n(112378),
    E = n(52738),
    m = n(885621),
    g = n(32271);
function A(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            checked: A,
            subtext: I,
            subtextLineClamp: T,
            leftIcon: S,
            leadingAccessory: y,
            disabled: N,
            isFocused: v,
            menuItemProps: C,
            action: O,
            className: R,
            focusedClassName: b,
        } = e,
        { onInteraction: D } = i.useContext(d.x),
        L = (0, p.Y)("MenuCheckboxItem"),
        w = i.useRef(null);
    i.useEffect(() => {
        v && (0, _.Y)(w);
    }, [v]);
    let M = i.useCallback(
        (e) => {
            O(e), D?.({ type: d.Q.CHECKBOX });
        },
        [O, D],
    );
    return (0, r.jsxs)(o.D, {
        innerRef: w,
        className: a()(g.item, g.checkboxContainer, g.labelContainer, m.jV[t], R, {
            [g.disabled]: N,
            [g.focused]: v,
            [b ?? ""]: v,
        }),
        onClick: N ? void 0 : M,
        ...C,
        "aria-checked": A,
        "aria-disabled": N,
        children: [
            L
                ? null != y && (0, r.jsx)(E.B, { accessory: y, isFocused: v })
                : (0, f.O)(S)
                  ? S
                  : null != S &&
                    (0, r.jsx)("div", {
                        className: g.iconContainerLeft,
                        children: (0, r.jsx)(S, { color: "currentColor", className: g.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: g.label,
                children: [
                    (0, r.jsx)(h.V, { children: (0, c.J)(s ?? n, { isFocused: v, disabled: N }) }),
                    null != I &&
                        (0, r.jsx)(l.E, {
                            variant: "text-xs/normal",
                            className: a()(g.subtext, { [g.subtextLineClamp]: null != T }),
                            lineClamp: T,
                            children: I,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.iconContainer,
                children: (0, r.jsx)(u.P, { checked: A, disabled: N, size: 20 }),
            }),
        ],
    });
}
