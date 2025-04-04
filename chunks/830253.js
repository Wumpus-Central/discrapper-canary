n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(192379),
    o = n(442837),
    a = n(146779),
    s = n(545511),
    l = n(386965),
    c = n(695346),
    u = n(358085),
    d = n(763296),
    f = n(242291),
    _ = n(22382),
    p = n(747071),
    h = n(509571);
function m(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (() => {
                      var e;
                      return null != (r = null == (e = c.kU.getSetting()) ? void 0 : e.volume) ? r : 100;
                  })(),
        m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.w.DEFAULT,
        { audioRef: g } = i.useContext(l.Z),
        [E, b] = i.useState(!1),
        y = (0, o.e7)([d.Z], () => d.Z.isPlayingSound(e.soundId), [e]);
    return {
        playSoundboardSound: i.useCallback(
            (n) => {
                null != g.current && g.current.pause(), null != t && (0, f.GN)(e, t, n);
            },
            [e, g, t]
        ),
        isPlayingSound: y,
        previewSound: i.useCallback(async () => {
            let t = (0, _.Z)(e.soundId),
                r = new (await (0, s.Z)(t))();
            if (((r.src = t), null != g.current && g.current.pause(), u.isPlatformEmbedded && m === h.w.VOICE)) {
                var i;
                null == (i = r.setSinkId) || i.call(r, a.voiceSinkId);
            }
            (g.current = r), (r.currentTime = 0), (r.volume = (0, p.Z)(e.volume, n)), r.play(), b(!0), r.addEventListener('pause', () => b(!1), { once: !0 });
        }, [e, n, g, m]),
        isPreviewingSound: E
    };
}
