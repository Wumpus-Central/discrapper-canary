"use strict";
n.d(t, { A: () => p });
var i = n(64700),
    r = n(17928),
    s = n(946261),
    a = n(536184),
    o = n(523006),
    l = n(885386),
    u = n(723702),
    c = n(209932),
    d = n(813564),
    _ = n(102597),
    h = n(904054),
    f = n(257645);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (l.dG.getSetting()?.volume ?? 100),
        p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.a.DEFAULT,
        { audioRef: E } = i.useContext(o.A),
        [m, g] = i.useState(!1),
        A = (0, r.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: i.useCallback(
            (n) => {
                null != E.current && E.current.pause(), null != t && (0, d.Ak)(e, t, n);
            },
            [e, E, t],
        ),
        isPlayingSound: A,
        previewSound: i.useCallback(async () => {
            let t = (0, _.A)(e.soundId),
                i = new (await (0, a.A)(t))();
            (i.src = t),
                null != E.current && E.current.pause(),
                u.isPlatformEmbedded && p === f.a.VOICE && i.setSinkId?.(s.voiceSinkId),
                (E.current = i),
                (i.currentTime = 0),
                (i.volume = (0, h.A)(e.volume, n)),
                i.play(),
                g(!0),
                i.addEventListener("pause", () => g(!1), { once: !0 });
        }, [e, n, E, p]),
        isPreviewingSound: m,
    };
}
