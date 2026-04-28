e.d(s, { B: () => p });
var r = e(403581),
    i = e(245383);
let p = (t) => {
    let { iconOverride: s, variantOverride: e, ...p } = t,
        { buttonText: a, disabled: c } = (0, i.A)(p);
    return { subscribeButtonProps: { text: a, disabled: c, icon: s ?? r.t, variant: e ?? "expressive" } };
};
