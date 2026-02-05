"use strict";
n.d(t, {
    Ay: () => l,
    GK: () => o,
    J7: () => s,
    PJ: () => c,
    R8: () => d,
    Xw: () => u,
    cF: () => f,
    fG: () => _,
    jd: () => a,
    lp: () => r,
    mn: () => p,
    qs: () => i,
});
var r = (function (e) {
        return (
            (e[(e.STREAM = 0)] = "STREAM"),
            (e[(e.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
            (e[(e.USER = 2)] = "USER"),
            (e[(e.ACTIVITY = 3)] = "ACTIVITY"),
            e
        );
    })({}),
    i = (function (e) {
        return (e.STREAM = "STREAM"), (e.USER = "USER"), (e.ACTIVITY = "ACTIVITY"), e;
    })({}),
    a = (function (e) {
        return (e.NONE = "NONE"), (e.AUTO = "AUTO"), e;
    })({}),
    s = (function (e) {
        return (
            (e[(e.DESKTOP = 0)] = "DESKTOP"),
            (e[(e.MOBILE = 1)] = "MOBILE"),
            (e[(e.XBOX = 2)] = "XBOX"),
            (e[(e.PLAYSTATION = 3)] = "PLAYSTATION"),
            (e[(e.QUEST = 4)] = "QUEST"),
            e
        );
    })({}),
    o = (function (e) {
        return (
            (e.CONTEXT_MENU = "Context Menu"),
            (e.THREE_DOT = "Three-Dot"),
            (e.CARET = "Caret"),
            (e.OTHER_BUTTON = "Other Button"),
            e
        );
    })({});
function l(e) {
    return e?.type === 0 || e?.type === 1;
}
function u(e) {
    return e?.type === 2;
}
function c(e) {
    return e?.type === 3;
}
var d = (function (e) {
    return (
        (e[(e.VIDEO = 0)] = "VIDEO"), (e[(e.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"), (e[(e.HAVEN = 2)] = "HAVEN"), e
    );
})({});
let _ = { 0: 320, 1: 160, 2: 320 },
    f = { 0: 960, 1: 480, 2: 960 },
    p = { 0: 200, 1: 160, 2: 200 };
