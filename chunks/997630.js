"use strict";
n.d(t, { E: () => a, a: () => s });
var r = n(73153),
    i = n(430452);
function s(e) {
    i.Ay.getMediaEngine()?.presentNativeScreenSharePicker?.(e),
        r.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT", style: e });
}
function a() {
    i.Ay.getMediaEngine()?.releaseNativeDesktopVideoSourcePickerStream?.(),
        r.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" });
}
