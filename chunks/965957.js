var i = n(73153),
    r = n(129230),
    a = n(312671),
    s = n(652215);
n.d(
    t,
    {},
    {
        p: function (e, t) {
            (r.default.track(s.HAw.SOUNDPACK_UPDATED, { soundpack: e, previous_soundpack: a.A.getSoundpack() }),
                i.h.dispatch({ type: "SET_SOUNDPACK", soundpack: e, forExperimentId: t }));
        },
    },
);
