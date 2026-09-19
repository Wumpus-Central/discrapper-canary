n.d(i, { B: () => l });
var r = n(403581),
    e = n(245383);
function l(t) {
    let { iconOverride: i, variantOverride: n, ...l } = t,
        { buttonText: u, disabled: s } = (0, e.A)(l);
    return { subscribeButtonProps: { text: u, disabled: s, icon: i ?? r.t, variant: n ?? "expressive" } };
}
