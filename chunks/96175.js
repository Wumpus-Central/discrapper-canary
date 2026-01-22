n.d(t, {
    Br: () => a,
    I2: () => s,
    Ms: () => o,
    Oy: () => i,
}),
    n(896048);
var r = n(41984);
function i(e) {
    return e;
}
function a(e) {
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
function s() {
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
    r.AR.WAITING_FOR_POPOUT_OPEN,
    r.AR.WAITING_FOR_REACT_INITIALIZATION,
    r.AR.WAITING_FOR_PID_FOCUS,
    r.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
