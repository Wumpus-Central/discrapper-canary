"use strict";
n.d(t, { A: () => p });
var l = n(582128),
    i = n(17928),
    s = n(946261),
    r = n(536184),
    a = n(523006),
    o = n(885386),
    u = n(723702),
    c = n(209932),
    d = n(813564),
    h = n(102597),
    m = n(904054),
    f = n(257645);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.a.DEFAULT,
        { audioRef: g } = l.useContext(a.A),
        [x, A] = l.useState(!1),
        E = (0, i.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: l.useCallback(
            (n) => {
                null != g.current && g.current.pause(), null != t && (0, d.Ak)(e, t, n);
            },
            [e, g, t],
        ),
        isPlayingSound: E,
        previewSound: l.useCallback(async () => {
            let t = (0, h.A)(e.soundId),
                l = new (await (0, r.A)(t))();
            (l.src = t),
                null != g.current && g.current.pause(),
                u.isPlatformEmbedded && p === f.a.VOICE && l.setSinkId?.(s.voiceSinkId),
                (g.current = l),
                (l.currentTime = 0),
                (l.volume = (0, m.A)(e.volume, n)),
                l.play(),
                A(!0),
                l.addEventListener("pause", () => A(!1), { once: !0 });
        }, [e, n, g, p]),
        isPreviewingSound: x,
    };
}
