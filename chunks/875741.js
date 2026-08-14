n.d(t, { A: () => s, i: () => l }), n(582128);
var i = n(940622);
function l(e) {
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
function s(e) {
    let t = (0, i.lM)();
    return null == e ? { profileFrameStyle: void 0, profileFrameClassName: void 0 } : (t ?? l(e));
}
