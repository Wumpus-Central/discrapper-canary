"use strict";
n.d(t, { A: () => h });
var i = n(582128),
    r = n(17928),
    a = n(946261),
    s = n(536184),
    l = n(523006),
    o = n(885386),
    d = n(723702),
    c = n(209932),
    u = n(813564),
    _ = n(102597),
    E = n(904054),
    A = n(257645);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.a.DEFAULT,
        { audioRef: I } = i.useContext(l.A),
        [f, p] = i.useState(!1),
        T = (0, r.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: i.useCallback(
            (n) => {
                null != I.current && I.current.pause(), null != t && (0, u.Ak)(e, t, n);
            },
            [e, I, t],
        ),
        isPlayingSound: T,
        previewSound: i.useCallback(async () => {
            let t = (0, _.A)(e.soundId),
                i = new (await (0, s.A)(t))();
            (i.src = t),
                null != I.current && I.current.pause(),
                d.isPlatformEmbedded && h === A.a.VOICE && i.setSinkId?.(a.voiceSinkId),
                (I.current = i),
                (i.currentTime = 0),
                (i.volume = (0, E.A)(e.volume, n)),
                i.play(),
                p(!0),
                i.addEventListener("pause", () => p(!1), { once: !0 });
        }, [e, n, I, h]),
        isPreviewingSound: f,
    };
}
