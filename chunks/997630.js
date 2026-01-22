n.d(t, {
    E: () => s,
    a: () => a,
});
var r = n(73153),
    i = n(430452);
function a(e) {
    var t, n;
    null == (n = i.A.getMediaEngine()) || null == (t = n.presentNativeScreenSharePicker) || t.call(n, e),
        r.h.dispatch({
            type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT",
            style: e,
        });
}
function s() {
    var e, t;
    null == (t = i.A.getMediaEngine()) || null == (e = t.releaseNativeDesktopVideoSourcePickerStream) || e.call(t),
        r.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" });
}
