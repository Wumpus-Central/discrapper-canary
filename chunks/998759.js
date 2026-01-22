n.d(t, {
    z: () => a,
}),
    n(591487),
    n(727858),
    n(747238),
    n(65821);
var l = n(64700),
    r = n(827762),
    i = n(149597);

function a(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: a } = e,
        s = l.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = r.toByteArray(t),
                l = (0, i.DB)(e, a, n);
            if (null == l) return null;
            let s = RegExp(".{1,".concat(n, "}"), "g"),
                o = l.match(s);
            return null == o ? null : Array.from(o);
        }, [n, t, a]);
    if (null != t && "" !== t && null == s) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return s;
}
