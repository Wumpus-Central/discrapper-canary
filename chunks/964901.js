n.d(t, {
    E: () => s,
});
var l = n(64700),
    r = n(102597),
    a = n(904054),
    i = n(584014);

function s(e) {
    let { isPlaying: t, playSound: n, preloadSound: s } = (0, i.A)(null != e ? (0, r.A)(e.soundId) : null);
    return (
        l.useEffect(() => {
            null != e && s();
        }, [e, s]),
        {
            isPlaying: t,
            playSound: l.useCallback(() => {
                var t;
                return !!n({
                    volume: (0, a.A)(null != (t = null == e ? void 0 : e.volume) ? t : 1),
                });
            }, [n, null == e ? void 0 : e.volume]),
        }
    );
}
