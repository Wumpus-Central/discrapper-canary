"use strict";
n.d(t, { B: () => i });
var a = n(403581),
    r = n(245383);
let i = (e) => {
    let { iconOverride: t, variantOverride: n, ...i } = e,
        { buttonText: l, disabled: s } = (0, r.A)(i);
    return { subscribeButtonProps: { text: l, disabled: s, icon: t ?? a.t, variant: n ?? "expressive" } };
};
