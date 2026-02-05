"use strict";
n.d(t, { B: () => a });
var r = n(934551),
    i = n(245383);
let a = (e) => {
    let { iconOverride: t, variantOverride: n, ...a } = e,
        { buttonText: s, disabled: o } = (0, i.A)(a);
    return { subscribeButtonProps: { text: s, disabled: o, icon: t ?? r.NitroWheelIcon, variant: n ?? "expressive" } };
};
