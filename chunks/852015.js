"use strict";
var i, r, s, a;
let o;
n.d(t, { O0: () => r, f$: () => i }),
    ((s = i || (i = {})).symbol = Symbol.for("protobuf-ts/unknown")),
    (s.onRead = (e, t, n, i, r) => {
        (o(t) ? t[s.symbol] : (t[s.symbol] = [])).push({ no: n, wireType: i, data: r });
    }),
    (s.onWrite = (e, t, n) => {
        for (let { no: e, wireType: i, data: r } of s.list(t)) n.tag(e, i).raw(r);
    }),
    (s.list = (e, t) => {
        if (o(e)) {
            let n = e[s.symbol];
            return t ? n.filter((e) => e.no == t) : n;
        }
        return [];
    }),
    (s.last = (e, t) => s.list(e, t).slice(-1)[0]),
    (o = (e) => e && Array.isArray(e[s.symbol])),
    ((a = r || (r = {}))[(a.Varint = 0)] = "Varint"),
    (a[(a.Bit64 = 1)] = "Bit64"),
    (a[(a.LengthDelimited = 2)] = "LengthDelimited"),
    (a[(a.StartGroup = 3)] = "StartGroup"),
    (a[(a.EndGroup = 4)] = "EndGroup"),
    (a[(a.Bit32 = 5)] = "Bit32");
