n.d(t, { C: () => d });
var r = n(951288),
    i = n(647438),
    a = n(651609),
    o = n(301713),
    s = n(155127),
    l = n(657707),
    c = n(777207),
    u = n(726550);
function d(e) {
    let {
            inputRef: t,
            checked: n,
            defaultChecked: d,
            onChange: f,
            disabled: _ = !1,
            displayOnly: p,
            label: h,
            labeledBy: m,
            labelSize: g = "medium",
        } = e,
        E = i.useRef(null),
        b = i.useRef(null),
        y = void 0 !== t ? t : b,
        O = null != h && "" !== h;
    return (0, r.jsx)(s.tE, {
        focusTarget: y,
        ringTarget: E,
        children: (0, r.jsx)(a.XZ, {
            inputRef: y,
            "aria-hidden": p || void 0,
            "aria-labelledby": m,
            isSelected: n,
            defaultSelected: d,
            onChange: f,
            isDisabled: _,
            isReadOnly: p,
            "data-mana-component": "checkbox",
            className: u.checkboxWrapper,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        ref: E,
                        className: u.checkbox,
                        style: {
                            width: 24,
                            height: 24,
                        },
                        children: (0, r.jsx)(l.kSu, {
                            size: "sm",
                            "aria-hidden": !0,
                            color: "currentColor",
                        }),
                    }),
                    O &&
                        (0, r.jsx)(o._, {
                            className: u.label,
                            children: (0, r.jsx)(c.x, {
                                variant: "small" === g ? "text-sm/normal" : "text-md/normal",
                                children: h,
                            }),
                        }),
                ],
            }),
        }),
    });
}
