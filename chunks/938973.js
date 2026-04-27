a.d(t, { B: () => l });
var r = a(403581),
    n = a(245383);
let l = (e) => {
    let { iconOverride: t, variantOverride: a, ...l } = e,
        { buttonText: i, disabled: s } = (0, n.A)(l);
    return { subscribeButtonProps: { text: i, disabled: s, icon: t ?? r.t, variant: a ?? "expressive" } };
};
