s.d(l, { z: () => a });
var r = s(64700),
    n = s(827762),
    t = s(149597);
function a(e) {
    let { fingerprintBase64: l, chunkSize: s, desiredLength: a } = e,
        c = r.useMemo(() => {
            if (null == l || "" === l) return null;
            let e = n.toByteArray(l),
                r = (0, t.DB)(e, a, s);
            if (null == r) return null;
            let c = RegExp(`.{1,${s}}`, "g"),
                u = r.match(c);
            return null == u ? null : Array.from(u);
        }, [s, l, a]);
    if (null != l && "" !== l && null == c) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return c;
}
