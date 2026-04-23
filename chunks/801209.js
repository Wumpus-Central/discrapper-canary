n.d(t, { A: () => a });
var r = n(64700),
    s = n(536968);
function a(e) {
    let { videoRef: t, hlsRef: n, enabled: a, contentMetadata: l, isHls: i, debug: u } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        if (!a || null == t.current || (i && null == n.current)) return;
        let e = {
            debug: u ?? !1,
            videoElement: t.current,
            hlsInstance: i ? (n.current ?? void 0) : void 0,
            feature: l.contentType,
            contentMetadata: l,
        };
        return (
            (o.current = new s.Gb(e)),
            o.current.initialize(),
            () => {
                null != o.current && (o.current.endSession(), o.current.destroy(), (o.current = null));
            }
        );
    }, [a, i, n, t, l, u]);
}
