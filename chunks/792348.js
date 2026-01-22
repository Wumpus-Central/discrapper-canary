n.d(t, { A: () => h }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(946261),
    s = n(536184),
    o = n(523006),
    l = n(253932),
    c = n(723702),
    u = n(209932),
    d = n(536432),
    f = n(102597),
    p = n(904054),
    _ = n(257645);
function h(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (() => {
                      var e, t;
                      return null != (e = null == (t = l.dG.getSetting()) ? void 0 : t.volume) ? e : 100;
                  })(),
        h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.a.DEFAULT,
        { audioRef: m } = r.useContext(o.A),
        [g, E] = r.useState(!1),
        b = (0, i.bG)([u.A], () => u.A.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: r.useCallback(
            (n) => {
                null != m.current && m.current.pause(), null != t && (0, d.Ak)(e, t, n);
            },
            [e, m, t],
        ),
        isPlayingSound: b,
        previewSound: r.useCallback(async () => {
            let t = (0, f.A)(e.soundId),
                r = new (await (0, s.A)(t))();
            if (((r.src = t), null != m.current && m.current.pause(), c.isPlatformEmbedded && h === _.a.VOICE)) {
                var i;
                null == (i = r.setSinkId) || i.call(r, a.voiceSinkId);
            }
            (m.current = r),
                (r.currentTime = 0),
                (r.volume = (0, p.A)(e.volume, n)),
                r.play(),
                E(!0),
                r.addEventListener("pause", () => E(!1), { once: !0 });
        }, [e, n, m, h]),
        isPreviewingSound: g,
    };
}
