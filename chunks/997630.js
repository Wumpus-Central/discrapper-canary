n.d(t, { E: () => s, a: () => a });
var i = n(228366),
    r = n(916546);
function a(e) {
    r.Ay.getMediaEngine()?.presentNativeScreenSharePicker?.(e),
        i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT", style: e });
}
function s() {
    r.Ay.getMediaEngine()?.releaseNativeDesktopVideoSourcePickerStream?.(),
        i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" });
}
