"use strict";
n.d(t, { z: () => s });
var i = n(64700),
    r = n(827762),
    a = n(277515);
function s(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: s } = e,
        l = i.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = r.toByteArray(t),
                i = (0, a.DB)(e, s, n);
            if (null == i) return null;
            let l = RegExp(`.{1,${n}}`, "g"),
                o = i.match(l);
            return null == o ? null : Array.from(o);
        }, [n, t, s]);
    if (null != t && "" !== t && null == l) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return l;
}
