"use strict";
n.d(t, { s: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(86968),
    u = n(900283),
    c = n(563014),
    d = n(745396),
    _ = n(298063),
    f = n(112378),
    p = n(52738),
    h = n(885621),
    m = n(658122);
function g(e) {
    let {
            color: t = "default",
            label: n,
            void_label: a,
            checked: g,
            subtext: E,
            subtextLineClamp: A,
            leftIcon: I,
            leadingAccessory: T,
            disabled: y,
            isFocused: S,
            menuItemProps: v,
            action: C,
            className: b,
            focusedClassName: N,
        } = e,
        { onInteraction: R } = i.useContext(u.x),
        O = (0, _.Y)("MenuCheckboxItem"),
        D = i.useRef(null);
    i.useEffect(() => {
        S && (0, c.Y)(D);
    }, [S]);
    let L = i.useCallback(
        (e) => {
            C(e), R?.({ type: u.Q.CHECKBOX });
        },
        [C, R],
    );
    return (0, r.jsxs)(o.DUT, {
        innerRef: D,
        className: s()(m.item, m.checkboxContainer, m.labelContainer, h.jV[t], b, {
            [m.disabled]: y,
            [m.focused]: S,
            [N ?? ""]: S,
        }),
        onClick: y ? void 0 : L,
        ...v,
        "aria-checked": g,
        "aria-disabled": y,
        children: [
            O
                ? null != T && (0, r.jsx)(p.B, { accessory: T, isFocused: S })
                : (0, d.O)(I)
                  ? I
                  : null != I &&
                    (0, r.jsx)("div", {
                        className: m.iconContainerLeft,
                        children: (0, r.jsx)(I, { color: "currentColor", className: m.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: m.label,
                children: [
                    (0, r.jsx)(f.V, { children: (0, l.J)(a ?? n, { isFocused: S, disabled: y }) }),
                    null != E &&
                        (0, r.jsx)(o.EYj, {
                            variant: "text-xs/normal",
                            className: s()(m.subtext, { [m.subtextLineClamp]: null != A }),
                            lineClamp: A,
                            children: E,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.iconContainer,
                children: (0, r.jsx)(o.P7L, { checked: g, disabled: y, size: 20 }),
            }),
        ],
    });
}
