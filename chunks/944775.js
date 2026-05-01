l.d(t, { Lk: () => o, hK: () => u }), l(627968), l(64700);
var n = l(228366),
    a = l(489277);
l(979186), l(574172), l(734057), l(763827);
var r = l(256415);
l(19575), l(317084);
var s = l(980504);
l(652215), l(985018);
let i = {
    width: s.ed.width,
    height: s.ed.height,
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
function u(e, t) {
    let l = a.A.isOverlayV3EnabledForPID(t),
        s = r.default.disableClickableRegions;
    l || s || n.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        n.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e });
}
function o(e) {
    n.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = a.A.isOverlayV3EnabledForPID(e),
        l = r.default.disableClickableRegions;
    r.default.isLocked(e) || t || l || n.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
s.ed.padding, i.width, i.height;
