"use strict";
n.d(t, { p: () => o });
var r = n(73153),
    i = n(954571),
    s = n(312671),
    a = n(652215);
function o(e, t) {
    i.default.track(a.HAw.SOUNDPACK_UPDATED, { soundpack: e, previous_soundpack: s.A.getSoundpack() }),
        r.h.dispatch({ type: "SET_SOUNDPACK", soundpack: e, forExperimentId: t });
}
