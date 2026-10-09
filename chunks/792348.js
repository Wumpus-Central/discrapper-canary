n.d(t, { A: () => j });
var l = n(582128),
    s = n(17928),
    i = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(885386),
    u = n(723702),
    c = n(209932),
    d = n(813564),
    m = n(102597),
    x = n(904054),
    h = n(257645);
function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        j = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.DEFAULT,
        { audioRef: p } = l.useContext(r.A),
        [g, f] = l.useState(!1),
        N = (0, s.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: l.useCallback(
            (n) => {
                (null != p.current && p.current.pause(), null != t && (0, d.Ak)(e, t, n));
            },
            [e, p, t],
        ),
        isPlayingSound: N,
        previewSound: l.useCallback(async () => {
            let t = (0, m.A)(e.soundId),
                l = new (await (0, a.A)(t))();
            ((l.src = t),
                null != p.current && p.current.pause(),
                u.isPlatformEmbedded && j === h.a.VOICE && l.setSinkId?.(i.voiceSinkId),
                (p.current = l),
                (l.currentTime = 0),
                (l.volume = (0, x.A)(e.volume, n)),
                l.play(),
                f(!0),
                l.addEventListener("pause", () => f(!1), { once: !0 }));
        }, [e, n, p, j]),
        isPreviewingSound: g,
    };
}
