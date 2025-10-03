n.d(t, { C: () => p }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(42650),
    l = n(499339),
    c = n(155127),
    u = n(657707),
    d = n(821541),
    f = n(777207),
    _ = n(726550);
function p(e) {
    let {
            checked: t,
            defaultChecked: n,
            description: a,
            onChange: p,
            disabled: h = !1,
            displayOnly: m,
            label: g,
            labeledBy: E,
            leadingIcon: b,
            value: y,
            labelType: O = "primary",
        } = e,
        v = i.useRef(null),
        I = i.useRef(null),
        T = i.useRef(null),
        S = null != g && "" !== g,
        A = null != a && "" !== a,
        C = null != b ? b : null,
        [N, R] = i.useState(!1),
        P = (e) => {
            e || R(!0), null != p && p(e);
        };
    return (0, r.jsx)(c.tE, {
        focusTarget: I,
        ringTarget: T,
        children: (0, r.jsx)(s.XZ, {
            ref: T,
            inputRef: I,
            "aria-hidden": m || void 0,
            "aria-labelledby": E,
            isSelected: t,
            defaultSelected: n,
            onChange: P,
            isDisabled: h,
            isReadOnly: m,
            "data-mana-component": "checkbox",
            className: o()(_.checkboxItem, N && _.animateOut),
            value: String(y),
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: _.checkboxIndicator,
                        ref: v,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)("div", {
                                className: _.backgroundFill,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)("svg", {
                                className: _.checkmark,
                                width: 20,
                                height: 20,
                                viewBox: "0 0 20 20",
                                fill: "none",
                                "aria-hidden": !0,
                                children: (0, r.jsx)("circle", {
                                    className: _.dot,
                                    cx: "10",
                                    cy: "10",
                                    r: "1.1",
                                    fill: "currentColor",
                                }),
                            }),
                            (0, r.jsx)(u.kSu, {
                                className: _.checkStroke,
                                size: "refresh_sm",
                                color: "currentColor",
                            }),
                        ],
                    }),
                    S &&
                        (0, r.jsxs)(d.K, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(l._, {
                                    className: _.label,
                                    children: (0, r.jsxs)("div", {
                                        className: _.labelContent,
                                        children: [
                                            null != C &&
                                                (0, r.jsx)(C, {
                                                    className: _.leadingIcon,
                                                    size: "sm",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                    focusable: !1,
                                                }),
                                            (0, r.jsx)(f.x, {
                                                variant: "text-md/normal",
                                                color: "primary" === O ? "text-primary" : "text-secondary",
                                                children: g,
                                            }),
                                        ],
                                    }),
                                }),
                                A &&
                                    (0, r.jsx)(f.x, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: a,
                                    }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
