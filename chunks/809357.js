n.d(t, {
    Z: () => o,
    o: () => s
});
var r = n(442837),
    l = n(522474),
    i = n(658785),
    a = n(981631);
function o(e) {
    let { location: t, options: n } = e,
        r = s(),
        { showKeybindIndicators: l } = i.Z.useExperiment({ location: t }, n);
    return l && r;
}
function s() {
    return !(0, r.e7)([l.Z], () => l.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT));
}
