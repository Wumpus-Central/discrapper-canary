n.d(t, { K: () => i });
var r = n(757260);
function i(e, t, n) {
    let { labelProps: i, inputProps: a, isSelected: s, isPressed: o, isDisabled: l, isReadOnly: c } = (0, r.e)(e, t, n);
    return {
        labelProps: i,
        inputProps: {
            ...a,
            role: "switch",
            checked: s,
        },
        isSelected: s,
        isPressed: o,
        isDisabled: l,
        isReadOnly: c,
    };
}
