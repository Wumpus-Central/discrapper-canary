var s = r(582128),
    a = r(827762),
    n = r(843069);
r.d(
    l,
    {},
    {
        z: function (e) {
            let { fingerprintBase64: l, chunkSize: r, desiredLength: u } = e,
                t = s.useMemo(() => {
                    if (null == l || "" === l) return null;
                    let e = a.toByteArray(l),
                        s = (0, n.DB)(e, u, r);
                    if (null == s) return null;
                    let t = RegExp(`.{1,${r}}`, "g"),
                        c = s.match(t);
                    return null == c ? null : Array.from(c);
                }, [r, l, u]);
            if (null != l && "" !== l && null == t)
                throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
            return t;
        },
    },
);
