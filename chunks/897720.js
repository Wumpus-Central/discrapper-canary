"use strict";
n.d(t, { IV: () => _, In: () => l, ZO: () => c, cv: () => d, dO: () => u, zb: () => o });
var r,
    i,
    s,
    a = n(652215),
    o =
        (((r = {})[(r.GENERIC = 0)] = "GENERIC"),
        (r[(r.TEXT = 1)] = "TEXT"),
        (r[(r.INCOMING_CALL = 2)] = "INCOMING_CALL"),
        (r[(r.NUDGE = 3)] = "NUDGE"),
        r),
    l = (((i = {})[(i.NORMAL = 0)] = "NORMAL"), (i[(i.HIGH = 1)] = "HIGH"), (i[(i.URGENT = 2)] = "URGENT"), i);
function u(e) {
    return e?.type === a.uss.GO_LIVE;
}
function d(e) {
    return e.type === a.uss.VIDEO;
}
function c(e) {
    return e.type === a.uss.VOICE_V3;
}
var _ = (((s = {}).HORIZONTAL = "horizontal"), (s.VERTICAL = "vertical"), s);
