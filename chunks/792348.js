n.d(t, { A: () => j });
var i = n(582128),
    s = n(17928),
    l = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(885386),
    d = n(723702),
    c = n(209932),
    u = n(813564),
    m = n(102597),
    x = n(904054),
    h = n(257645);
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        j = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.DEFAULT,
        { audioRef: g } = i.useContext(r.A),
        [p, N] = i.useState(!1),
        I = (0, s.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: i.useCallback(
            (n) => {
                (null != g.current && g.current.pause(), null != t && (0, u.Ak)(e, t, n));
            },
            [e, g, t],
        ),
        isPlayingSound: I,
        previewSound: i.useCallback(async () => {
            let t = (0, m.A)(e.soundId),
                i = new (await (0, a.A)(t))();
            ((i.src = t),
                null != g.current && g.current.pause(),
                d.isPlatformEmbedded && j === h.a.VOICE && i.setSinkId?.(l.voiceSinkId),
                (g.current = i),
                (i.currentTime = 0),
                (i.volume = (0, x.A)(e.volume, n)),
                i.play(),
                N(!0),
                i.addEventListener("pause", () => N(!1), { once: !0 }));
        }, [e, n, g, j]),
        isPreviewingSound: p,
    };
}
