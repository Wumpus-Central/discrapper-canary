"use strict";
n.d(t, { Br: () => s, I2: () => a, Ms: () => o, Oy: () => r });
var i = n(41984);
function r(e) {
    return e;
}
function s(e) {
    switch (e) {
        case "click":
        case "unknown":
        default:
            return "click";
        case "mouseover":
            return "mouseover";
        case "mouseout":
            return "mouseout";
        case "mousemove":
        case "hover":
            return "mousemove";
    }
}
function a() {
    return {
        popoutOpened: !1,
        windowHandleSentToNative: !1,
        hasUseEffectFired: !1,
        trackedPidFocused: !1,
        reactInitializationStarted: !1,
        cssLoaded: !1,
        showInactiveCalled: !1,
        allDone: !1,
        errorMessage: null,
    };
}
let o = new Set([
    i.AR.WAITING_FOR_POPOUT_OPEN,
    i.AR.WAITING_FOR_REACT_INITIALIZATION,
    i.AR.WAITING_FOR_PID_FOCUS,
    i.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
