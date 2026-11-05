var s = t(582128),
    i = t(855986),
    l = t(946261),
    a = t(536184),
    r = t(523006),
    o = t(253932),
    c = t(723702),
    d = t(209932),
    u = t(458976),
    m = t(102597),
    h = t(904054),
    x = t(257645);
t.d(
    n,
    {},
    {
        A: function (e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
                j = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x.a.DEFAULT,
                { audioRef: g } = s.useContext(r.A),
                [p, b] = s.useState(!1),
                N = (0, i.bG)([d.A], () => d.A.isPlayingSound(e.soundId), [e]);
            return {
                playSoundboardSound: s.useCallback(
                    (t) => {
                        (null != g.current && g.current.pause(), null != n && (0, u.Ak)(e, n, t));
                    },
                    [e, g, n],
                ),
                isPlayingSound: N,
                previewSound: s.useCallback(async () => {
                    let n = (0, m.A)(e.soundId),
                        s = new (await (0, a.A)(n))();
                    ((s.src = n),
                        null != g.current && g.current.pause(),
                        c.isPlatformEmbedded && j === x.a.VOICE && s.setSinkId?.(l.B),
                        (g.current = s),
                        (s.currentTime = 0),
                        (s.volume = (0, h.A)(e.volume, t)),
                        s.play(),
                        b(!0),
                        s.addEventListener("pause", () => b(!1), { once: !0 }));
                }, [e, t, g, j]),
                isPreviewingSound: p,
            };
        },
    },
);
