n.d(t, {
    Ay: () => _,
    GK: () => E,
    J7: () => h,
    PJ: () => A,
    R8: () => f,
    Xw: () => p,
    cF: () => I,
    fG: () => g,
    jd: () => c,
    lp: () => d,
    mn: () => T,
    qs: () => u,
});
var i,
    r,
    l,
    a,
    s,
    o,
    d =
        (((i = {})[(i.STREAM = 0)] = "STREAM"),
        (i[(i.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
        (i[(i.USER = 2)] = "USER"),
        (i[(i.ACTIVITY = 3)] = "ACTIVITY"),
        i),
    u = (((r = {}).STREAM = "STREAM"), (r.USER = "USER"), (r.ACTIVITY = "ACTIVITY"), r),
    c = (((l = {}).NONE = "NONE"), (l.AUTO = "AUTO"), l),
    h =
        (((a = {})[(a.DESKTOP = 0)] = "DESKTOP"),
        (a[(a.MOBILE = 1)] = "MOBILE"),
        (a[(a.XBOX = 2)] = "XBOX"),
        (a[(a.PLAYSTATION = 3)] = "PLAYSTATION"),
        (a[(a.QUEST = 4)] = "QUEST"),
        a),
    E =
        (((s = {}).CONTEXT_MENU = "Context Menu"),
        (s.THREE_DOT = "Three-Dot"),
        (s.CARET = "Caret"),
        (s.OTHER_BUTTON = "Other Button"),
        s);
function _(e) {
    return e?.type === 0 || e?.type === 1;
}
function p(e) {
    return e?.type === 2;
}
function A(e) {
    return e?.type === 3;
}
var f =
    (((o = {})[(o.VIDEO = 0)] = "VIDEO"),
    (o[(o.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"),
    (o[(o.HAVEN = 2)] = "HAVEN"),
    o);
let g = { 0: 320, 1: 160, 2: 320 },
    I = { 0: 960, 1: 480, 2: 960 },
    T = { 0: 200, 1: 160, 2: 200 };
