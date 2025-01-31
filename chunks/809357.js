n.d(t, {
    Z: () => o,
    o: () => u
});
var r = n(442837),
    i = n(522474),
    l = n(658785),
    a = n(981631);
function o(e) {
    let { location: t, options: n } = e,
        r = u(),
        { showKeybindIndicators: i } = l.Z.useExperiment({ location: t }, n);
    return i && r;
}
function u() {
    return !(0, r.e7)([i.Z], () => i.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT));
}
