n.d(t, {
    A: () => o,
    F: () => l,
});
var r = n(311907),
    i = n(87001),
    a = n(641376),
    s = n(652215);
function o(e) {
    let { location: t, options: n } = e,
        r = l(),
        { showKeybindIndicators: i } = a.A.useExperiment({ location: t }, n);
    return i && r;
}
function l() {
    return !(0, r.bG)([i.A], () => i.A.getWindowVisible(s.MLl.ACTIVITY_POPOUT));
}
