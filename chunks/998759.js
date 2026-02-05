n.d(t, { z: () => s });
var i = n(64700),
    l = n(827762),
    a = n(149597);
function s(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: s } = e,
        r = i.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = l.toByteArray(t),
                i = (0, a.DB)(e, s, n);
            if (null == i) return null;
            let r = RegExp(`.{1,${n}}`, "g"),
                o = i.match(r);
            return null == o ? null : Array.from(o);
        }, [n, t, s]);
    if (null != t && "" !== t && null == r) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return r;
}
