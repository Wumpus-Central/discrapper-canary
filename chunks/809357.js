n.d(t, {
    Z: function () {
        return o;
    },
    o: function () {
        return a;
    }
});
var i = n(442837),
    r = n(522474),
    s = n(658785),
    l = n(981631);
function o(e) {
    let { location: t, options: n } = e,
        i = a(),
        { showKeybindIndicators: r } = s.Z.useExperiment({ location: t }, n);
    return r && i;
}
function a() {
    return !(0, i.e7)([r.Z], () => r.Z.getWindowVisible(l.KJ3.ACTIVITY_POPOUT));
}
