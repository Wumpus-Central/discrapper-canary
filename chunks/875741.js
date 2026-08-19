t.d(r, { A: () => l, i: () => a }), t(582128);
var n = t(940622);
function a(e) {
    return {
        profileFrameStyle: {
            "--custom-profile-frame-container-width": e.innerWidth,
            "--custom-profile-frame-overflow-top": e.overflowTop,
            "--custom-profile-frame-overflow-bottom": e.overflowBottom,
            "--custom-profile-frame-overflow-horizontal": e.overflowHorizontal,
        },
        profileFrameClassName: "custom-profile-frame",
    };
}
function l(e) {
    let r = (0, n.lM)();
    return null == e ? { profileFrameStyle: void 0, profileFrameClassName: void 0 } : (r ?? a(e));
}
