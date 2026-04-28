a.d(t, { B: () => r });
var n = a(403581),
    l = a(245383);
let r = (e) => {
    let { iconOverride: t, variantOverride: a, ...r } = e,
        { buttonText: i, disabled: s } = (0, l.A)(r);
    return { subscribeButtonProps: { text: i, disabled: s, icon: t ?? n.t, variant: a ?? "expressive" } };
};
