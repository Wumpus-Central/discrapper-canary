n.d(t, { p: () => l });
var i = n(228366),
    r = n(174459),
    a = n(312671),
    s = n(652215);
function l(e, t) {
    r.default.track(s.HAw.SOUNDPACK_UPDATED, { soundpack: e, previous_soundpack: a.A.getSoundpack() }),
        i.h.dispatch({ type: "SET_SOUNDPACK", soundpack: e, forExperimentId: t });
}
