r.d(n, {
    h: function () {
        return a;
    }
});
var i = r(558883);
function a(e, n, r) {
    let { labelProps: a, inputProps: o, isSelected: s, isPressed: l, isDisabled: u, isReadOnly: c } = (0, i.O)(e, n, r);
    return {
        labelProps: a,
        inputProps: {
            ...o,
            role: 'switch',
            checked: s
        },
        isSelected: s,
        isPressed: l,
        isDisabled: u,
        isReadOnly: c
    };
}
