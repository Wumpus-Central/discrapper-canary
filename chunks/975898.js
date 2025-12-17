n.d(t, { O: () => l });
var r = n(158821),
    i = n(880016),
    a = n(179549),
    o = n(226098),
    s = n(497448);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: c = !1,
            value: u,
            name: d,
            form: f,
            children: p,
            "aria-label": _,
            "aria-labelledby": m,
            validationState: h = "valid",
            isInvalid: g,
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPress: O,
            onPressUp: v,
            onClick: S,
        } = e,
        I = (e) => {
            e.stopPropagation(), t.setSelected(e.target.checked);
        },
        { pressProps: T, isPressed: C } = (0, o.r)({
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPress: O,
            onPressUp: v,
            onClick: S,
            isDisabled: l,
        }),
        { pressProps: A, isPressed: N } = (0, o.r)({
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPressUp: v,
            onClick: S,
            onPress(e) {
                var r;
                null == O || O(e), t.toggle(), null == (r = n.current) || r.focus();
            },
            isDisabled: l || c,
        }),
        { focusableProps: P } = (0, s.kc)(e, n),
        R = (0, r.d)(T, P),
        w = (0, i.z)(e, { labelable: !0 });
    return (
        (0, a.y)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, r.d)(A, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.d)(w, {
                "aria-invalid": g || "invalid" === h || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": c || void 0,
                onChange: I,
                disabled: l,
                ...(null == u ? {} : { value: u }),
                name: d,
                form: f,
                type: "checkbox",
                ...R,
            }),
            isSelected: t.isSelected,
            isPressed: C || N,
            isDisabled: l,
            isReadOnly: c,
            isInvalid: g || "invalid" === h,
        }
    );
}
