"use strict";
a.d(t, { B: () => n });
var r = a(403581),
    l = a(245383);
let n = (e) => {
    let { iconOverride: t, variantOverride: a, ...n } = e,
        { buttonText: i, disabled: s } = (0, l.A)(n);
    return { subscribeButtonProps: { text: i, disabled: s, icon: t ?? r.t, variant: a ?? "expressive" } };
};
