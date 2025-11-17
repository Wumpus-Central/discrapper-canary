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
            children: _,
            "aria-label": p,
            "aria-labelledby": h,
            validationState: m = "valid",
            isInvalid: g,
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPress: O,
            onPressUp: v,
            onClick: I,
        } = e,
        T = (e) => {
            e.stopPropagation(), t.setSelected(e.target.checked);
        },
        { pressProps: S, isPressed: A } = (0, o.r)({
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPress: O,
            onPressUp: v,
            onClick: I,
            isDisabled: l,
        }),
        { pressProps: C, isPressed: N } = (0, o.r)({
            onPressStart: E,
            onPressEnd: b,
            onPressChange: y,
            onPressUp: v,
            onClick: I,
            onPress(e) {
                var r;
                null == O || O(e), t.toggle(), null == (r = n.current) || r.focus();
            },
            isDisabled: l || c,
        }),
        { focusableProps: R } = (0, s.kc)(e, n),
        P = (0, r.d)(S, R),
        D = (0, i.z)(e, { labelable: !0 });
    return (
        (0, a.y)(n, t.defaultSelected, t.setSelected),
        {
            labelProps: (0, r.d)(C, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.d)(D, {
                "aria-invalid": g || "invalid" === m || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": c || void 0,
                onChange: T,
                disabled: l,
                ...(null == u ? {} : { value: u }),
                name: d,
                form: f,
                type: "checkbox",
                ...P,
            }),
            isSelected: t.isSelected,
            isPressed: A || N,
            isDisabled: l,
            isReadOnly: c,
            isInvalid: g || "invalid" === m,
        }
    );
}
