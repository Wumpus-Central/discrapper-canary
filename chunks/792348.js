n.d(t, { A: () => f });
var l = n(582128),
    i = n(17928),
    s = n(946261),
    r = n(536184),
    a = n(523006),
    o = n(885386),
    u = n(723702),
    c = n(209932),
    d = n(813564),
    m = n(102597),
    h = n(904054),
    p = n(257645);
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.a.DEFAULT,
        { audioRef: g } = l.useContext(a.A),
        [x, A] = l.useState(!1),
        C = (0, i.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: l.useCallback(
            (n) => {
                (null != g.current && g.current.pause(), null != t && (0, d.Ak)(e, t, n));
            },
            [e, g, t],
        ),
        isPlayingSound: C,
        previewSound: l.useCallback(async () => {
            let t = (0, m.A)(e.soundId),
                l = new (await (0, r.A)(t))();
            ((l.src = t),
                null != g.current && g.current.pause(),
                u.isPlatformEmbedded && f === p.a.VOICE && l.setSinkId?.(s.voiceSinkId),
                (g.current = l),
                (l.currentTime = 0),
                (l.volume = (0, h.A)(e.volume, n)),
                l.play(),
                A(!0),
                l.addEventListener("pause", () => A(!1), { once: !0 }));
        }, [e, n, g, f]),
        isPreviewingSound: x,
    };
}
