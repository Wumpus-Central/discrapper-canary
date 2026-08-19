"use strict";
var n, o, i, a;
let s;
r.d(t, { O0: () => o, f$: () => n }),
    ((i = n || (n = {})).symbol = Symbol.for("protobuf-ts/unknown")),
    (i.onRead = (e, t, r, n, o) => {
        (s(t) ? t[i.symbol] : (t[i.symbol] = [])).push({ no: r, wireType: n, data: o });
    }),
    (i.onWrite = (e, t, r) => {
        for (let { no: e, wireType: n, data: o } of i.list(t)) r.tag(e, n).raw(o);
    }),
    (i.list = (e, t) => {
        if (s(e)) {
            let r = e[i.symbol];
            return t ? r.filter((e) => e.no == t) : r;
        }
        return [];
    }),
    (i.last = (e, t) => i.list(e, t).slice(-1)[0]),
    (s = (e) => e && Array.isArray(e[i.symbol])),
    ((a = o || (o = {}))[(a.Varint = 0)] = "Varint"),
    (a[(a.Bit64 = 1)] = "Bit64"),
    (a[(a.LengthDelimited = 2)] = "LengthDelimited"),
    (a[(a.StartGroup = 3)] = "StartGroup"),
    (a[(a.EndGroup = 4)] = "EndGroup"),
    (a[(a.Bit32 = 5)] = "Bit32");
