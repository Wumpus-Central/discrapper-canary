n.d(t, { A: () => j });
var l = n(582128),
    i = n(17928),
    s = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(885386),
    u = n(723702),
    d = n(209932),
    c = n(813564),
    m = n(102597),
    x = n(904054),
    h = n(257645);
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        j = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.DEFAULT,
        { audioRef: g } = l.useContext(r.A),
        [p, f] = l.useState(!1),
        N = (0, i.bG)([d.A], () => d.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: l.useCallback(
            (n) => {
                (null != g.current && g.current.pause(), null != t && (0, c.Ak)(e, t, n));
            },
            [e, g, t],
        ),
        isPlayingSound: N,
        previewSound: l.useCallback(async () => {
            let t = (0, m.A)(e.soundId),
                l = new (await (0, a.A)(t))();
            ((l.src = t),
                null != g.current && g.current.pause(),
                u.isPlatformEmbedded && j === h.a.VOICE && l.setSinkId?.(s.voiceSinkId),
                (g.current = l),
                (l.currentTime = 0),
                (l.volume = (0, x.A)(e.volume, n)),
                l.play(),
                f(!0),
                l.addEventListener("pause", () => f(!1), { once: !0 }));
        }, [e, n, g, j]),
        isPreviewingSound: p,
    };
}
