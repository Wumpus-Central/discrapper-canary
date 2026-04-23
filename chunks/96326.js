"use strict";
var n, a, s, i, o, l;
function u(e) {
    let t = !1,
        r = [];
    for (let n = 0; n < e.length; n++) {
        let a = e.charAt(n);
        "_" == a
            ? (t = !0)
            : /\d/.test(a)
              ? (r.push(a), (t = !0))
              : t
                ? (r.push(a.toUpperCase()), (t = !1))
                : 0 == n
                  ? r.push(a.toLowerCase())
                  : r.push(a);
    }
    return r.join("");
}
function c(e) {
    var t, r, n, a;
    return (
        (e.localName = null != (t = e.localName) ? t : u(e.name)),
        (e.jsonName = null != (r = e.jsonName) ? r : u(e.name)),
        (e.repeat = null != (n = e.repeat) ? n : s.NO),
        (e.opt = null != (a = e.opt) ? a : !e.repeat && !e.oneof && "message" == e.kind),
        e
    );
}
r.d(t, { sA: () => s, LN: () => n, rO: () => a, mS: () => c }),
    ((i = n || (n = {}))[(i.DOUBLE = 1)] = "DOUBLE"),
    (i[(i.FLOAT = 2)] = "FLOAT"),
    (i[(i.INT64 = 3)] = "INT64"),
    (i[(i.UINT64 = 4)] = "UINT64"),
    (i[(i.INT32 = 5)] = "INT32"),
    (i[(i.FIXED64 = 6)] = "FIXED64"),
    (i[(i.FIXED32 = 7)] = "FIXED32"),
    (i[(i.BOOL = 8)] = "BOOL"),
    (i[(i.STRING = 9)] = "STRING"),
    (i[(i.BYTES = 12)] = "BYTES"),
    (i[(i.UINT32 = 13)] = "UINT32"),
    (i[(i.SFIXED32 = 15)] = "SFIXED32"),
    (i[(i.SFIXED64 = 16)] = "SFIXED64"),
    (i[(i.SINT32 = 17)] = "SINT32"),
    (i[(i.SINT64 = 18)] = "SINT64"),
    ((o = a || (a = {}))[(o.BIGINT = 0)] = "BIGINT"),
    (o[(o.STRING = 1)] = "STRING"),
    (o[(o.NUMBER = 2)] = "NUMBER"),
    ((l = s || (s = {}))[(l.NO = 0)] = "NO"),
    (l[(l.PACKED = 1)] = "PACKED"),
    (l[(l.UNPACKED = 2)] = "UNPACKED");
