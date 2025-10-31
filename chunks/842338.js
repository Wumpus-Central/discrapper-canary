n.d(t, { x: () => d });
var r = n(46465),
    i = n(43341),
    a = n(735437),
    o = n(166435),
    s = n(647438),
    l = n(647199),
    c = n(752321),
    u = n(51386);
function d(e, t, n) {
    let {
            value: d,
            children: f,
            "aria-label": _,
            "aria-labelledby": p,
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
        } = e,
        O = e.isDisabled || t.isDisabled,
        v = t.selectedValue === d,
        I = (e) => {
            e.stopPropagation(), t.setSelectedValue(d);
        },
        { pressProps: T, isPressed: S } = (0, l.r)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPress: E,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
        }),
        { pressProps: A, isPressed: C } = (0, l.r)({
            onPressStart: h,
            onPressEnd: m,
            onPressChange: g,
            onPressUp: b,
            onClick: y,
            isDisabled: O,
            onPress(e) {
                var r;
                null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus();
            },
        }),
        { focusableProps: N } = (0, c.kc)((0, i.d)(e, { onFocus: () => t.setLastFocusedValue(d) }), n),
        R = (0, i.d)(T, N),
        P = (0, a.z)(e, { labelable: !0 }),
        w = -1;
    null != t.selectedValue
        ? t.selectedValue === d && (w = 0)
        : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (w = 0),
        O && (w = void 0);
    let { name: D, form: x, descriptionId: L, errorMessageId: M, validationBehavior: j } = r.H.get(t);
    return (
        (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue),
        (0, u.Q)({ validationBehavior: j }, t, n),
        {
            labelProps: (0, i.d)(
                A,
                (0, s.useMemo)(
                    () => ({
                        onClick: (e) => e.preventDefault(),
                        onMouseDown: (e) => e.preventDefault(),
                    }),
                    [],
                ),
            ),
            inputProps: (0, i.d)(P, {
                ...R,
                type: "radio",
                name: D,
                form: x,
                tabIndex: w,
                disabled: O,
                required: t.isRequired && "native" === j,
                checked: v,
                value: d,
                onChange: I,
                "aria-describedby":
                    [e["aria-describedby"], t.isInvalid ? M : null, L].filter(Boolean).join(" ") || void 0,
            }),
            isDisabled: O,
            isSelected: v,
            isPressed: S || C,
        }
    );
}
