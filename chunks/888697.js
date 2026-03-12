"use strict";
n.d(t, { _: () => l, e: () => a });
var i = n(73153),
    s = n(435183);
async function l(e, t) {
    i.h.dispatch({ type: "HANGOUT_WINDOW_IMAGE_SELECTED", url: t }), await s.Ay.updateVoiceChannelStatus(e, t);
}
function a(e) {
    s.Ay.updateVoiceChannelStatus(e, "");
}
