n.d(t, {
    Z: function () {
        return o;
    },
    o: function () {
        return s;
    }
});
var r = n(442837),
    a = n(522474),
    l = n(658785),
    i = n(981631);
function o(e) {
    let { location: t, options: n } = e,
        r = s(),
        { showKeybindIndicators: a } = l.Z.useExperiment({ location: t }, n);
    return a && r;
}
function s() {
    return !(0, r.e7)([a.Z], () => a.Z.getWindowVisible(i.KJ3.ACTIVITY_POPOUT));
}
