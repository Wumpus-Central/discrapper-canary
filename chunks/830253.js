n.d(t, { Z: () => _ }), n(47120);
var r,
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(386965),
    l = n(695346),
    c = n(763296),
    u = n(242291),
    d = n(22382),
    f = n(747071),
    p = n(388032);
function _(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (() => {
                      var e;
                      return null !== (r = null === (e = l.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== r ? r : 100;
                  })(),
        { audioRef: _ } = i.useContext(s.Z),
        [h, m] = i.useState(!1),
        g = (0, o.e7)([c.Z], () => c.Z.isPlayingSound(e.soundId), [e]),
        E = i.useCallback(
            (n) => {
                null != _.current && _.current.pause(), null != t && (0, u.GN)(e, t, n);
            },
            [e, _, t]
        ),
        v = i.useCallback(() => {
            let t = new Audio((0, d.Z)(e.soundId));
            null != _.current && _.current.pause(),
                (_.current = t),
                (t.currentTime = 0),
                (t.volume = (0, f.Z)(e.volume, n)),
                t.play().catch(() => {
                    'Safari' === platform.name && (0, a.showToast)((0, a.createToast)(p.NW.string(p.t.qAsyjI), a.ToastType.FAILURE));
                }),
                m(!0),
                t.addEventListener('pause', () => m(!1), { once: !0 });
        }, [e, n, _]);
    return (
        i.useCallback(
            () => () => {
                var e;
                return null === (e = _.current) || void 0 === e ? void 0 : e.pause();
            },
            [_]
        ),
        {
            playSoundboardSound: E,
            isPlayingSound: g,
            previewSound: v,
            isPreviewingSound: h
        }
    );
}
