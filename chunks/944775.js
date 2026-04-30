"use strict";
n.d(t, { Lk: () => u, hK: () => l }), n(627968), n(64700);
var i = n(228366),
    r = n(489277);
n(979186), n(574172), n(734057), n(763827);
var s = n(184809);
n(19575), n(317084);
var a = n(980504);
n(652215), n(375708);
let o = {
    width: a.ed.width,
    height: a.ed.height,
    resizable: !1,
    movable: !1,
    alwaysOnTop: !0,
    frame: !1,
    transparent: !0,
    hasShadow: !1,
    skipTaskbar: !0,
    menubar: !0,
    backgroundColor: "#00000000",
    titleBarStyle: null,
};
function l(e, t) {
    let n = r.A.isOverlayV3EnabledForPID(t),
        a = s.default.disableClickableRegions;
    n || a || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e });
}
function u(e) {
    i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = r.A.isOverlayV3EnabledForPID(e),
        n = s.default.disableClickableRegions;
    s.default.isLocked(e) || t || n || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
a.ed.padding, o.width, o.height;
