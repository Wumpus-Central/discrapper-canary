n.d(t, { Z: () => r });
var i = n(981631);
function r(e) {
    let { LayerStore: t, PopoutWindowStore: n } = e,
        r = t.hasLayers(),
        a = n.getWindowOpen(i.KJ3.CHANNEL_CALL_POPOUT) || n.getWindowOpen(i.KJ3.ACTIVITY_POPOUT);
    return r && !a;
}
