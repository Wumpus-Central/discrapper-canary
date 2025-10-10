n.d(t, { x: () => u });
var r = n(45821),
    i = n(586235),
    a = n(436773),
    o = n(408558),
    s = n(146810),
    l = n(600711),
    c = n(300319);
function u(e, t, n) {
    let {
            value: u,
            children: d,
            "aria-label": f,
            "aria-labelledby": _,
            onPressStart: p,
            onPressEnd: h,
            onPressChange: m,
            onPress: g,
            onPressUp: E,
            onClick: b,
        } = e,
        y = e.isDisabled || t.isDisabled,
        O = t.selectedValue === u,
        v = (e) => {
            e.stopPropagation(), t.setSelectedValue(u);
        },
        { pressProps: I, isPressed: T } = (0, s.r)({
            onPressStart: p,
            onPressEnd: h,
            onPressChange: m,
            onPress: g,
            onPressUp: E,
            onClick: b,
            isDisabled: y,
        }),
        { pressProps: S, isPressed: A } = (0, s.r)({
            onPressStart: p,
            onPressEnd: h,
            onPressChange: m,
            onPressUp: E,
            onClick: b,
            isDisabled: y,
            onPress(e) {
                var r;
                null == g || g(e), t.setSelectedValue(u), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: C } = (0, l.kc)((0, i.d)(e, { onFocus: () => t.setLastFocusedValue(u) }), n),
        N = (0, i.d)(I, C),
        R = (0, a.z)(e, { labelable: !0 }),
        P = -1;
    null != t.selectedValue
        ? t.selectedValue === u && (P = 0)
        : (t.lastFocusedValue === u || null == t.lastFocusedValue) && (P = 0),
        y && (P = void 0);
    let { name: w, form: D, descriptionId: L, errorMessageId: x, validationBehavior: M } = r.H.get(t);
    return (
        (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, c.Q)({ validationBehavior: M }, t, n),
        {
            labelProps: (0, i.d)(S, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, i.d)(R, {
                ...N,
                type: "radio",
                name: w,
                form: D,
                tabIndex: P,
                disabled: y,
                required: t.isRequired && "native" === M,
                checked: O,
                value: u,
                onChange: v,
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? x : null, L].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: y,
            isSelected: O,
            isPressed: T || A,
        }
    );
}
