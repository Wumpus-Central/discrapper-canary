a.d(t, { B: () => l });
var n = a(403581),
    r = a(245383);
let l = (e) => {
    let { iconOverride: t, variantOverride: a, ...l } = e,
        { buttonText: i, disabled: s } = (0, r.A)(l);
    return { subscribeButtonProps: { text: i, disabled: s, icon: t ?? n.t, variant: a ?? "expressive" } };
};
