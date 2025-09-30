n.d(t, { C: () => f }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(42650),
    o = n(499339),
    s = n(155127),
    l = n(657707),
    c = n(821541),
    u = n(777207),
    d = n(997562);
function f(e) {
    let {
            checked: t,
            defaultChecked: n,
            description: f,
            onChange: _,
            disabled: p = !1,
            displayOnly: h,
            label: m,
            labeledBy: g,
            leadingIcon: E,
            trailingIcon: b,
            value: y,
            groupVariant: O = "single",
            labelType: v = "primary",
        } = e,
        I = i.useRef(null),
        T = i.useRef(null),
        S = i.useRef(null),
        A = null != m && "" !== m,
        C = null != f && "" !== f,
        N = null != E ? E : null,
        R = null != b ? b : null;
    return (0, r.jsx)(s.tE, {
        focusTarget: T,
        ringTarget: S,
        children: (0, r.jsx)(a.XZ, {
            ref: S,
            inputRef: T,
            "aria-hidden": h || void 0,
            "aria-labelledby": g,
            isSelected: t,
            defaultSelected: n,
            onChange: _,
            isDisabled: p,
            isReadOnly: h,
            "data-mana-component": "checkbox",
            className: d.checkboxItem,
            value: String(y),
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        ref: I,
                        className: d.checkboxIndicator,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(l.kSu, {
                            size: "sm",
                            "aria-hidden": !0,
                            color: "currentColor",
                        }),
                    }),
                    A &&
                        (0, r.jsxs)(c.K, {
                            gap: 8,
                            children: [
                                (0, r.jsxs)(o._, {
                                    className: d.label,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: d.labelContent,
                                            children: [
                                                null != N &&
                                                    (0, r.jsx)(N, {
                                                        className: d.leadingIcon,
                                                        size: "sm",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                        focusable: !1,
                                                    }),
                                                (0, r.jsx)(u.x, {
                                                    variant: "group" === O ? "text-md/normal" : "text-md/medium",
                                                    color: "primary" === v ? "text-primary" : "text-secondary",
                                                    children: m,
                                                }),
                                            ],
                                        }),
                                        null != R &&
                                            (0, r.jsx)(R, {
                                                className: d.trailingIcon,
                                                size: "sm",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                                focusable: !1,
                                            }),
                                    ],
                                }),
                                C &&
                                    (0, r.jsx)(u.x, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: f,
                                    }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
