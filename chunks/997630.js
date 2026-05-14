"use strict";
n.d(t, { E: () => a, a: () => s });
var i = n(228366),
    r = n(235058);
function s(e) {
    r.Ay.getMediaEngine()?.presentNativeScreenSharePicker?.(e),
        i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT", style: e });
}
function a() {
    r.Ay.getMediaEngine()?.releaseNativeDesktopVideoSourcePickerStream?.(),
        i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" });
}
