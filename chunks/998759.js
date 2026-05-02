"use strict";
n.d(t, { z: () => a });
var i = n(64700),
    r = n(827762),
    s = n(277515);
function a(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: a } = e,
        o = i.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = r.toByteArray(t),
                i = (0, s.DB)(e, a, n);
            if (null == i) return null;
            let o = RegExp(`.{1,${n}}`, "g"),
                l = i.match(o);
            return null == l ? null : Array.from(l);
        }, [n, t, a]);
    if (null != t && "" !== t && null == o) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return o;
}
