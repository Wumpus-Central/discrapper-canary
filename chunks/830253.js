n.d(t, { Z: () => p }), n(47120);
var i,
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(386965),
    l = n(695346),
    u = n(763296),
    c = n(242291),
    d = n(22382),
    f = n(747071),
    _ = n(388032);
function p(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (() => {
                      var e;
                      return null !== (i = null === (e = l.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== i ? i : 100;
                  })(),
        { audioRef: p } = r.useContext(o.Z),
        [h, m] = r.useState(!1),
        g = (0, a.e7)([u.Z], () => u.Z.isPlayingSound(e.soundId), [e]),
        E = r.useCallback(
            (n) => {
                null != p.current && p.current.pause(), null != t && (0, c.GN)(e, t, n);
            },
            [e, p, t]
        ),
        v = r.useCallback(() => {
            let t = new Audio((0, d.Z)(e.soundId));
            null != p.current && p.current.pause(),
                (p.current = t),
                (t.currentTime = 0),
                (t.volume = (0, f.Z)(e.volume, n)),
                t.play().catch(() => {
                    'Safari' === platform.name && (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.qAsyjI), s.ToastType.FAILURE));
                }),
                m(!0),
                t.addEventListener('pause', () => m(!1), { once: !0 });
        }, [e, n, p]);
    return (
        r.useCallback(
            () => () => {
                var e;
                return null === (e = p.current) || void 0 === e ? void 0 : e.pause();
            },
            [p]
        ),
        {
            playSoundboardSound: E,
            isPlayingSound: g,
            previewSound: v,
            isPreviewingSound: h
        }
    );
}
