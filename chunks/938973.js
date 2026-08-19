r.d(e, { B: () => i });
var n = r(403581),
    s = r(245383);
function i(t) {
    let { iconOverride: e, variantOverride: r, ...i } = t,
        { buttonText: c, disabled: u } = (0, s.A)(i);
    return { subscribeButtonProps: { text: c, disabled: u, icon: e ?? n.t, variant: r ?? "expressive" } };
}
