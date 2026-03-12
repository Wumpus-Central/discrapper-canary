n.d(t, { A: () => i });
var r = n(64700),
    l = n(536968);
function i(e) {
    let { videoRef: t, hlsRef: n, enabled: i, contentMetadata: s, isHls: a, debug: o } = e,
        u = r.useRef(null);
    r.useEffect(() => {
        if (!i || null == t.current || (a && null == n.current)) return;
        let e = {
            debug: o ?? !1,
            videoElement: t.current,
            hlsInstance: a ? (n.current ?? void 0) : void 0,
            feature: s.contentType,
            contentMetadata: s,
        };
        return (
            (u.current = new l.Gb(e)),
            u.current.initialize(),
            () => {
                null != u.current && (u.current.endSession(), u.current.destroy(), (u.current = null));
            }
        );
    }, [i, a, n, t, s, o]);
}
