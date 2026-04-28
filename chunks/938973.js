"use strict";
n.d(t, { B: () => i });
var r = n(403581),
    a = n(245383);
let i = (e) => {
    let { iconOverride: t, variantOverride: n, ...i } = e,
        { buttonText: l, disabled: s } = (0, a.A)(i);
    return { subscribeButtonProps: { text: l, disabled: s, icon: t ?? r.t, variant: n ?? "expressive" } };
};
