n.d(t, {
    Z: function () {
        return s;
    },
    o: function () {
        return o;
    }
});
var i = n(442837),
    r = n(522474),
    l = n(658785),
    a = n(981631);
function s(e) {
    let { location: t, options: n } = e,
        i = o(),
        { showKeybindIndicators: r } = l.Z.useExperiment({ location: t }, n);
    return r && i;
}
function o() {
    return !(0, i.e7)([r.Z], () => r.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT));
}
