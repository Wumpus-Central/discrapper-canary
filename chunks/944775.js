n.d(t, {
    Lk: () => c,
    hK: () => o,
}),
    n(627968),
    n(64700);
var l = n(73153),
    r = n(395011);
n(923917), n(574172), n(734057), n(383501);
var i = n(256415);
n(837921), n(927421);
var a = n(980504);
n(652215), n(985018);
let s = {
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

function o(e, t) {
    let n = r.A.isOverlayV3EnabledForPID(t),
        a = i.default.disableClickableRegions;
    n ||
        a ||
        l.h.dispatch({
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !1,
            pid: t,
        }),
        l.h.dispatch({
            type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
            pid: t,
            enabled: !0,
            keepOpen: e,
        });
}

function c(e) {
    l.h.dispatch({
        type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
        pid: e,
        enabled: !1,
    });
    let t = r.A.isOverlayV3EnabledForPID(e),
        n = i.default.disableClickableRegions;
    i.default.isLocked(e) ||
        t ||
        n ||
        l.h.dispatch({
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !0,
            pid: e,
        });
}
a.ed.padding, s.width, s.height;
