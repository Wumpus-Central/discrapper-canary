n.d(t, { A: () => r, F: () => o });
var i = n(311907),
    l = n(87001),
    s = n(641376),
    a = n(652215);
function r(e) {
    let { location: t, options: n } = e,
        i = o(),
        { showKeybindIndicators: l } = s.A.useExperiment({ location: t }, n);
    return l && i;
}
function o() {
    return !(0, i.bG)([l.A], () => l.A.getWindowVisible(a.MLl.ACTIVITY_POPOUT));
}
