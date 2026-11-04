var i = n(73153),
    r = n(718197);
n.d(
    t,
    {},
    {
        E: function () {
            (r.Ay.getMediaEngine()?.releaseNativeDesktopVideoSourcePickerStream?.(),
                i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" }));
        },
        a: function (e) {
            (r.Ay.getMediaEngine()?.presentNativeScreenSharePicker?.(e),
                i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT", style: e }));
        },
    },
);
