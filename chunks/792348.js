"use strict";
n.d(t, { A: () => m });
var i = n(64700),
    r = n(17928),
    s = n(946261),
    a = n(536184),
    o = n(523006),
    l = n(253932),
    d = n(723702),
    _ = n(209932),
    u = n(536432),
    c = n(102597),
    E = n(904054),
    h = n(257645);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (l.dG.getSetting()?.volume ?? 100),
        m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.DEFAULT,
        { audioRef: f } = i.useContext(o.A),
        [g, p] = i.useState(!1),
        A = (0, r.bG)([_.A], () => _.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: i.useCallback(
            (n) => {
                null != f.current && f.current.pause(), null != t && (0, u.Ak)(e, t, n);
            },
            [e, f, t],
        ),
        isPlayingSound: A,
        previewSound: i.useCallback(async () => {
            let t = (0, c.A)(e.soundId),
                i = new (await (0, a.A)(t))();
            (i.src = t),
                null != f.current && f.current.pause(),
                d.isPlatformEmbedded && m === h.a.VOICE && i.setSinkId?.(s.voiceSinkId),
                (f.current = i),
                (i.currentTime = 0),
                (i.volume = (0, E.A)(e.volume, n)),
                i.play(),
                p(!0),
                i.addEventListener("pause", () => p(!1), { once: !0 });
        }, [e, n, f, m]),
        isPreviewingSound: g,
    };
}
