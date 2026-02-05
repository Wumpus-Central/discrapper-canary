n.d(t, { Lk: () => c, hK: () => o }), n(627968), n(64700);
var i = n(73153),
    l = n(395011);
n(923917), n(574172), n(734057), n(383501);
var a = n(256415);
n(837921), n(927421);
var s = n(980504);
n(652215), n(985018);
let r = {
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
function o(e, t) {
    let n = l.A.isOverlayV3EnabledForPID(t),
        s = a.default.disableClickableRegions;
    n || s || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e });
}
function c(e) {
    i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = l.A.isOverlayV3EnabledForPID(e),
        n = a.default.disableClickableRegions;
    a.default.isLocked(e) || t || n || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
s.ed.padding, r.width, r.height;
