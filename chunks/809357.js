n.d(t, {
    Z: function () {
        return o;
    },
    o: function () {
        return s;
    }
});
var a = n(442837),
    r = n(522474),
    l = n(658785),
    i = n(981631);
function o(e) {
    let { location: t, options: n } = e,
        a = s(),
        { showKeybindIndicators: r } = l.Z.useExperiment({ location: t }, n);
    return r && a;
}
function s() {
    return !(0, a.e7)([r.Z], () => r.Z.getWindowVisible(i.KJ3.ACTIVITY_POPOUT));
}
