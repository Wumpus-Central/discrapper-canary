"use strict";
r.d(t, { B: () => a });
var n = r(403581),
    i = r(245383);
let a = (e) => {
    let { iconOverride: t, variantOverride: r, ...a } = e,
        { buttonText: s, disabled: l } = (0, i.A)(a);
    return { subscribeButtonProps: { text: s, disabled: l, icon: t ?? n.t, variant: r ?? "expressive" } };
};
