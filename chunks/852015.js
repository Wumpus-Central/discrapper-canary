"use strict";
var r, i, s, a;
let o;
n.d(t, { O0: () => i, f$: () => r }),
    ((s = r || (r = {})).symbol = Symbol.for("protobuf-ts/unknown")),
    (s.onRead = (e, t, n, r, i) => {
        (o(t) ? t[s.symbol] : (t[s.symbol] = [])).push({ no: n, wireType: r, data: i });
    }),
    (s.onWrite = (e, t, n) => {
        for (let { no: e, wireType: r, data: i } of s.list(t)) n.tag(e, r).raw(i);
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
    ((a = i || (i = {}))[(a.Varint = 0)] = "Varint"),
    (a[(a.Bit64 = 1)] = "Bit64"),
    (a[(a.LengthDelimited = 2)] = "LengthDelimited"),
    (a[(a.StartGroup = 3)] = "StartGroup"),
    (a[(a.EndGroup = 4)] = "EndGroup"),
    (a[(a.Bit32 = 5)] = "Bit32");
