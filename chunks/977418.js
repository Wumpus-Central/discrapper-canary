"use strict";
r.d(t, { K: () => s });
var n = r(757260);
function s(e, t, r) {
    let { labelProps: s, inputProps: a, isSelected: o, isPressed: i, isDisabled: u, isReadOnly: c } = (0, n.e)(e, t, r);
    return {
        labelProps: s,
        inputProps: { ...a, role: "switch", checked: o },
        isSelected: o,
        isPressed: i,
        isDisabled: u,
        isReadOnly: c,
    };
}
