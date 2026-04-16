"use strict";
n.d(t, { s: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(86968),
    u = n(900283),
    c = n(563014),
    d = n(745396),
    _ = n(298063),
    f = n(112378),
    p = n(52738),
    h = n(885621),
    m = n(32271);
function E(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            checked: E,
            subtext: g,
            subtextLineClamp: A,
            leftIcon: I,
            leadingAccessory: T,
            disabled: S,
            isFocused: y,
            menuItemProps: v,
            action: N,
            className: C,
            focusedClassName: R,
        } = e,
        { onInteraction: O } = i.useContext(u.x),
        b = (0, _.Y)("MenuCheckboxItem"),
        D = i.useRef(null);
    i.useEffect(() => {
        y && (0, c.Y)(D);
    }, [y]);
    let L = i.useCallback(
        (e) => {
            N(e), O?.({ type: u.Q.CHECKBOX });
        },
        [N, O],
    );
    return (0, r.jsxs)(o.DUT, {
        innerRef: D,
        className: a()(m.item, m.checkboxContainer, m.labelContainer, h.jV[t], C, {
            [m.disabled]: S,
            [m.focused]: y,
            [R ?? ""]: y,
        }),
        onClick: S ? void 0 : L,
        ...v,
        "aria-checked": E,
        "aria-disabled": S,
        children: [
            b
                ? null != T && (0, r.jsx)(p.B, { accessory: T, isFocused: y })
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
                    (0, r.jsx)(f.V, { children: (0, l.J)(s ?? n, { isFocused: y, disabled: S }) }),
                    null != g &&
                        (0, r.jsx)(o.EYj, {
                            variant: "text-xs/normal",
                            className: a()(m.subtext, { [m.subtextLineClamp]: null != A }),
                            lineClamp: A,
                            children: g,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.iconContainer,
                children: (0, r.jsx)(o.P7L, { checked: E, disabled: S, size: 20 }),
            }),
        ],
    });
}
