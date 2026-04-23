"use strict";
n.d(t, { E: () => r });
var l = n(64700),
    a = n(102597),
    s = n(904054),
    i = n(584014);
function r(e) {
    let { isPlaying: t, playSound: n, preloadSound: r } = (0, i.A)(null != e ? (0, a.A)(e.soundId) : null);
    return (
        l.useEffect(() => {
            null != e && r();
        }, [e, r]),
        { isPlaying: t, playSound: l.useCallback(() => !!n({ volume: (0, s.A)(e?.volume ?? 1) }), [n, e?.volume]) }
    );
}
