"use strict";
n.d(t, { s: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(834730),
    u = n(658675),
    d = n(86968),
    c = n(900283),
    _ = n(563014),
    f = n(745396),
    E = n(298063),
    h = n(112378),
    p = n(52738),
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
            isFocused: O,
            menuItemProps: R,
            action: v,
            className: C,
            focusedClassName: b,
        } = e,
        { onInteraction: D } = i.useContext(c.x),
        L = (0, E.Y)("MenuCheckboxItem"),
        w = i.useRef(null);
    i.useEffect(() => {
        O && (0, _.Y)(w);
    }, [O]);
    let M = i.useCallback(
        (e) => {
            v(e), D?.({ type: c.Q.CHECKBOX });
        },
        [v, D],
    );
    return (0, r.jsxs)(o.D, {
        innerRef: w,
        className: a()(g.item, g.checkboxContainer, g.labelContainer, m.jV[t], C, {
            [g.disabled]: N,
            [g.focused]: O,
            [b ?? ""]: O,
        }),
        onClick: N ? void 0 : M,
        ...R,
        "aria-checked": A,
        "aria-disabled": N,
        children: [
            L
                ? null != y && (0, r.jsx)(p.B, { accessory: y, isFocused: O })
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
                    (0, r.jsx)(h.V, { children: (0, d.J)(s ?? n, { isFocused: O, disabled: N }) }),
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
