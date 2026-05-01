n.d(t, {
    Ay: () => A,
    GK: () => E,
    J7: () => h,
    PJ: () => p,
    R8: () => g,
    Xw: () => _,
    cF: () => I,
    fG: () => f,
    jd: () => c,
    lp: () => d,
    mn: () => S,
    qs: () => u,
});
var i,
    l,
    a,
    r,
    s,
    o,
    d =
        (((i = {})[(i.STREAM = 0)] = "STREAM"),
        (i[(i.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
        (i[(i.USER = 2)] = "USER"),
        (i[(i.ACTIVITY = 3)] = "ACTIVITY"),
        i),
    u = (((l = {}).STREAM = "STREAM"), (l.USER = "USER"), (l.ACTIVITY = "ACTIVITY"), l),
    c = (((a = {}).NONE = "NONE"), (a.AUTO = "AUTO"), a),
    h =
        (((r = {})[(r.DESKTOP = 0)] = "DESKTOP"),
        (r[(r.MOBILE = 1)] = "MOBILE"),
        (r[(r.XBOX = 2)] = "XBOX"),
        (r[(r.PLAYSTATION = 3)] = "PLAYSTATION"),
        (r[(r.QUEST = 4)] = "QUEST"),
        r),
    E =
        (((s = {}).CONTEXT_MENU = "Context Menu"),
        (s.THREE_DOT = "Three-Dot"),
        (s.CARET = "Caret"),
        (s.OTHER_BUTTON = "Other Button"),
        s);
function A(e) {
    return e?.type === 0 || e?.type === 1;
}
function _(e) {
    return e?.type === 2;
}
function p(e) {
    return e?.type === 3;
}
var g =
    (((o = {})[(o.VIDEO = 0)] = "VIDEO"),
    (o[(o.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"),
    (o[(o.HAVEN = 2)] = "HAVEN"),
    o);
let f = { 0: 320, 1: 160, 2: 320 },
    I = { 0: 960, 1: 480, 2: 960 },
    S = { 0: 200, 1: 160, 2: 200 };
