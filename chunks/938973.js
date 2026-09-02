i.d(n, { B: () => l });
var r = i(403581),
    e = i(245383);
function l(t) {
    let { iconOverride: n, variantOverride: i, ...l } = t,
        { buttonText: u, disabled: a } = (0, e.A)(l);
    return { subscribeButtonProps: { text: u, disabled: a, icon: n ?? r.t, variant: i ?? "expressive" } };
}
