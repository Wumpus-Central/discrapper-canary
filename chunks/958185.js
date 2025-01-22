r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(981631);
function a(e) {
    let { LayerStore: n, PopoutWindowStore: r } = e,
        a = n.hasLayers(),
        o = r.getWindowOpen(i.KJ3.CHANNEL_CALL_POPOUT) || r.getWindowOpen(i.KJ3.ACTIVITY_POPOUT);
    return a && !o;
}
