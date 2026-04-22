"use strict";
n.d(t, { FT: () => c, F_: () => o, Iq: () => l, Kj: () => d, _3: () => a, vC: () => u });
var r,
    i,
    s,
    a =
        (((r = {}).SIZE_16 = "SIZE_16"),
        (r.SIZE_20 = "SIZE_20"),
        (r.SIZE_24 = "SIZE_24"),
        (r.SIZE_32 = "SIZE_32"),
        (r.SIZE_40 = "SIZE_40"),
        (r.SIZE_44 = "SIZE_44"),
        (r.SIZE_48 = "SIZE_48"),
        (r.SIZE_56 = "SIZE_56"),
        (r.SIZE_72 = "SIZE_72"),
        (r.SIZE_80 = "SIZE_80"),
        (r.SIZE_96 = "SIZE_96"),
        (r.SIZE_120 = "SIZE_120"),
        (r.SIZE_152 = "SIZE_152"),
        (r.DEPRECATED_SIZE_30 = "DEPRECATED_SIZE_30"),
        (r.DEPRECATED_SIZE_60 = "DEPRECATED_SIZE_60"),
        (r.DEPRECATED_SIZE_100 = "DEPRECATED_SIZE_100"),
        r),
    o = (((i = {}).BLACK = "black"), (i.WHITE = "white"), i),
    l = (((s = {})[(s.HIGH = 0.7)] = "HIGH"), (s[(s.LOW = 0.45)] = "LOW"), s);
let u = Object.freeze({
    SIZE_16: Object.freeze({ size: 16, status: 6, stroke: 2, offset: 0 }),
    SIZE_20: Object.freeze({ size: 20, status: 6, stroke: 2, offset: 0 }),
    SIZE_24: Object.freeze({ size: 24, status: 8, stroke: 3, offset: 0 }),
    SIZE_32: Object.freeze({ size: 32, status: 10, stroke: 3, offset: 0 }),
    SIZE_40: Object.freeze({ size: 40, status: 12, stroke: 4, offset: 0 }),
    SIZE_44: Object.freeze({ size: 44, status: 12, stroke: 4, offset: 0 }),
    SIZE_48: Object.freeze({ size: 48, status: 12, stroke: 4, offset: 0 }),
    SIZE_56: Object.freeze({ size: 56, status: 14, stroke: 4, offset: 2 }),
    SIZE_72: Object.freeze({ size: 72, status: 16, stroke: 6, offset: 4 }),
    SIZE_80: Object.freeze({ size: 80, status: 16, stroke: 6, offset: 4 }),
    SIZE_96: Object.freeze({ size: 96, status: 20, stroke: 8, offset: 6 }),
    SIZE_120: Object.freeze({ size: 120, status: 24, stroke: 8, offset: 8 }),
    SIZE_152: Object.freeze({ size: 152, status: 30, stroke: 10, offset: 10 }),
    DEPRECATED_SIZE_30: Object.freeze({ size: 30, status: 0, stroke: 0, offset: 0 }),
    DEPRECATED_SIZE_60: Object.freeze({ size: 60, status: 0, stroke: 0, offset: 0 }),
    DEPRECATED_SIZE_100: Object.freeze({ size: 100, status: 0, stroke: 0, offset: 0 }),
});
function d(e) {
    return u[e];
}
function c(e) {
    return "number" != typeof e ? u[e].size : e;
}
