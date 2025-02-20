n.d(t, { Z: () => i });
var r = n(981631);
function i(e) {
    let { LayerStore: t, PopoutWindowStore: n } = e,
        i = t.hasLayers(),
        o = n.getWindowOpen(r.KJ3.CHANNEL_CALL_POPOUT) || n.getWindowOpen(r.KJ3.ACTIVITY_POPOUT);
    return i && !o;
}
