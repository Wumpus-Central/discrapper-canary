"use strict";
n.d(t, { B: () => s });
var i = n(403581),
    r = n(245383);
let s = (e) => {
    let { iconOverride: t, variantOverride: n, ...s } = e,
        { buttonText: a, disabled: o } = (0, r.A)(s);
    return { subscribeButtonProps: { text: a, disabled: o, icon: t ?? i.t, variant: n ?? "expressive" } };
};
