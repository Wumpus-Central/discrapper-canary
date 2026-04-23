"use strict";
n.d(t, { A: () => h });
var r = n(64700),
    i = n(311907),
    s = n(946261),
    a = n(536184),
    o = n(523006),
    l = n(253932),
    u = n(723702),
    c = n(209932),
    d = n(536432),
    _ = n(102597),
    f = n(904054),
    p = n(257645);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (l.dG.getSetting()?.volume ?? 100),
        h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.a.DEFAULT,
        { audioRef: E } = r.useContext(o.A),
        [m, g] = r.useState(!1),
        A = (0, i.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: r.useCallback(
            (n) => {
                null != E.current && E.current.pause(), null != t && (0, d.Ak)(e, t, n);
            },
            [e, E, t],
        ),
        isPlayingSound: A,
        previewSound: r.useCallback(async () => {
            let t = (0, _.A)(e.soundId),
                r = new (await (0, a.A)(t))();
            (r.src = t),
                null != E.current && E.current.pause(),
                u.isPlatformEmbedded && h === p.a.VOICE && r.setSinkId?.(s.voiceSinkId),
                (E.current = r),
                (r.currentTime = 0),
                (r.volume = (0, f.A)(e.volume, n)),
                r.play(),
                g(!0),
                r.addEventListener("pause", () => g(!1), { once: !0 });
        }, [e, n, E, h]),
        isPreviewingSound: m,
    };
}
