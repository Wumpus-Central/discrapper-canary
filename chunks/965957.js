"use strict";
n.d(t, { p: () => o });
var i = n(228366),
    r = n(954571),
    s = n(312671),
    a = n(652215);
function o(e, t) {
    r.default.track(a.HAw.SOUNDPACK_UPDATED, { soundpack: e, previous_soundpack: s.A.getSoundpack() }),
        i.h.dispatch({ type: "SET_SOUNDPACK", soundpack: e, forExperimentId: t });
}
