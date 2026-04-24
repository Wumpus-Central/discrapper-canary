n.d(t, { B: () => l });
var a = n(403581),
    i = n(245383);
let l = (e) => {
    let { iconOverride: t, variantOverride: n, ...l } = e,
        { buttonText: r, disabled: o } = (0, i.A)(l);
    return { subscribeButtonProps: { text: r, disabled: o, icon: t ?? a.t, variant: n ?? "expressive" } };
};
