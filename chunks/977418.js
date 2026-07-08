"use strict";
r.d(t, { K: () => i });
var n = r(757260);
function i(e, t, r) {
    let { labelProps: i, inputProps: o, isSelected: a, isPressed: s, isDisabled: l, isReadOnly: u } = (0, n.e)(e, t, r);
    return {
        labelProps: i,
        inputProps: { ...o, role: "switch", checked: a },
        isSelected: a,
        isPressed: s,
        isDisabled: l,
        isReadOnly: u,
    };
}
