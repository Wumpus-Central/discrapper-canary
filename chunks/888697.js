n.d(t, { _: () => s, e: () => a });
var i = n(73153),
    l = n(435183);
async function s(e, t) {
    i.h.dispatch({ type: "HANGOUT_WINDOW_IMAGE_SELECTED", url: t }), await l.Ay.updateVoiceChannelStatus(e, t);
}
function a(e) {
    l.Ay.updateVoiceChannelStatus(e, "");
}
