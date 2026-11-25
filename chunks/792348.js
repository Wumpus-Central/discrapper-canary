var l = t(582128),
    s = t(855986),
    a = t(946261),
    i = t(536184),
    r = t(523006),
    o = t(253932),
    u = t(723702),
    c = t(209932),
    d = t(458976),
    m = t(102597),
    x = t(904054),
    h = t(257645);
t.d(
    n,
    {},
    {
        A: function (e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (o.dG.getSetting()?.volume ?? 100),
                p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.a.DEFAULT,
                { audioRef: j } = l.useContext(r.A),
                [g, f] = l.useState(!1),
                v = (0, s.bG)([c.A], () => c.A.isPlayingSound(e.soundId), [e]);
            return {
                playSoundboardSound: l.useCallback(
                    (t) => {
                        (null != j.current && j.current.pause(), null != n && (0, d.Ak)(e, n, t));
                    },
                    [e, j, n],
                ),
                isPlayingSound: v,
                previewSound: l.useCallback(async () => {
                    let n = (0, m.A)(e.soundId),
                        l = new (await (0, i.A)(n))();
                    ((l.src = n),
                        null != j.current && j.current.pause(),
                        u.isPlatformEmbedded && p === h.a.VOICE && l.setSinkId?.(a.B),
                        (j.current = l),
                        (l.currentTime = 0),
                        (l.volume = (0, x.A)(e.volume, t)),
                        l.play(),
                        f(!0),
                        l.addEventListener("pause", () => f(!1), { once: !0 }));
                }, [e, t, j, p]),
                isPreviewingSound: g,
            };
        },
    },
);
