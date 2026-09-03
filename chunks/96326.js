var n, i, o, a, s, l;
function u(e) {
    let t = !1,
        r = [];
    for (let n = 0; n < e.length; n++) {
        let i = e.charAt(n);
        "_" == i
            ? (t = !0)
            : /\d/.test(i)
              ? (r.push(i), (t = !0))
              : t
                ? (r.push(i.toUpperCase()), (t = !1))
                : 0 == n
                  ? r.push(i.toLowerCase())
                  : r.push(i);
    }
    return r.join("");
}
function c(e) {
    var t, r, n, i;
    return (
        (e.localName = null != (t = e.localName) ? t : u(e.name)),
        (e.jsonName = null != (r = e.jsonName) ? r : u(e.name)),
        (e.repeat = null != (n = e.repeat) ? n : o.NO),
        (e.opt = null != (i = e.opt) ? i : !e.repeat && !e.oneof && "message" == e.kind),
        e
    );
}
r.d(t, { sA: () => o, LN: () => n, rO: () => i, mS: () => c }),
    ((a = n || (n = {}))[(a.DOUBLE = 1)] = "DOUBLE"),
    (a[(a.FLOAT = 2)] = "FLOAT"),
    (a[(a.INT64 = 3)] = "INT64"),
    (a[(a.UINT64 = 4)] = "UINT64"),
    (a[(a.INT32 = 5)] = "INT32"),
    (a[(a.FIXED64 = 6)] = "FIXED64"),
    (a[(a.FIXED32 = 7)] = "FIXED32"),
    (a[(a.BOOL = 8)] = "BOOL"),
    (a[(a.STRING = 9)] = "STRING"),
    (a[(a.BYTES = 12)] = "BYTES"),
    (a[(a.UINT32 = 13)] = "UINT32"),
    (a[(a.SFIXED32 = 15)] = "SFIXED32"),
    (a[(a.SFIXED64 = 16)] = "SFIXED64"),
    (a[(a.SINT32 = 17)] = "SINT32"),
    (a[(a.SINT64 = 18)] = "SINT64"),
    ((s = i || (i = {}))[(s.BIGINT = 0)] = "BIGINT"),
    (s[(s.STRING = 1)] = "STRING"),
    (s[(s.NUMBER = 2)] = "NUMBER"),
    ((l = o || (o = {}))[(l.NO = 0)] = "NO"),
    (l[(l.PACKED = 1)] = "PACKED"),
    (l[(l.UNPACKED = 2)] = "UNPACKED");
