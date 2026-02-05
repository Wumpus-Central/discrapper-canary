"use strict";
n.d(t, { E: () => s, a: () => a });
var r = n(73153),
    i = n(430452);
function a(e) {
    i.A.getMediaEngine()?.presentNativeScreenSharePicker?.(e),
        r.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT", style: e });
}
function s() {
    i.A.getMediaEngine()?.releaseNativeDesktopVideoSourcePickerStream?.(),
        r.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" });
}
