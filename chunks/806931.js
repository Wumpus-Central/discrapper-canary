"use strict";
n.d(t, {
    Ay: () => E,
    GK: () => f,
    J7: () => _,
    PJ: () => p,
    R8: () => m,
    Xw: () => h,
    cF: () => A,
    fG: () => g,
    jd: () => c,
    lp: () => u,
    mn: () => I,
    qs: () => d,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u =
        (((r = {})[(r.STREAM = 0)] = "STREAM"),
        (r[(r.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
        (r[(r.USER = 2)] = "USER"),
        (r[(r.ACTIVITY = 3)] = "ACTIVITY"),
        r),
    d = (((i = {}).STREAM = "STREAM"), (i.USER = "USER"), (i.ACTIVITY = "ACTIVITY"), i),
    c = (((s = {}).NONE = "NONE"), (s.AUTO = "AUTO"), s),
    _ =
        (((a = {})[(a.DESKTOP = 0)] = "DESKTOP"),
        (a[(a.MOBILE = 1)] = "MOBILE"),
        (a[(a.XBOX = 2)] = "XBOX"),
        (a[(a.PLAYSTATION = 3)] = "PLAYSTATION"),
        (a[(a.QUEST = 4)] = "QUEST"),
        a),
    f =
        (((o = {}).CONTEXT_MENU = "Context Menu"),
        (o.THREE_DOT = "Three-Dot"),
        (o.CARET = "Caret"),
        (o.OTHER_BUTTON = "Other Button"),
        o);
function E(e) {
    return e?.type === 0 || e?.type === 1;
}
function h(e) {
    return e?.type === 2;
}
function p(e) {
    return e?.type === 3;
}
var m =
    (((l = {})[(l.VIDEO = 0)] = "VIDEO"),
    (l[(l.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"),
    (l[(l.HAVEN = 2)] = "HAVEN"),
    l);
let g = { 0: 320, 1: 160, 2: 320 },
    A = { 0: 960, 1: 480, 2: 960 },
    I = { 0: 200, 1: 160, 2: 200 };
