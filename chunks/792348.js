"use strict";
n.d(t, { A: () => f });
var l = n(64700),
    i = n(17928),
    s = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(253932),
    c = n(723702),
    u = n(209932),
    d = n(536432),
    h = n(102597),
    m = n(904054),
    p = n(257645);
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.a.DEFAULT,
        { audioRef: g } = l.useContext(r.A),
        [_, x] = l.useState(!1),
        C = (0, i.bG)([u.A], () => u.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: l.useCallback(
            (n) => {
                null != g.current && g.current.pause(), null != t && (0, d.Ak)(e, t, n);
            },
            [e, g, t],
        ),
        isPlayingSound: C,
        previewSound: l.useCallback(async () => {
            let t = (0, h.A)(e.soundId),
                l = new (await (0, a.A)(t))();
            (l.src = t),
                null != g.current && g.current.pause(),
                c.isPlatformEmbedded && f === p.a.VOICE && l.setSinkId?.(s.voiceSinkId),
                (g.current = l),
                (l.currentTime = 0),
                (l.volume = (0, m.A)(e.volume, n)),
                l.play(),
                x(!0),
                l.addEventListener("pause", () => x(!1), { once: !0 });
        }, [e, n, g, f]),
        isPreviewingSound: _,
    };
}
