"use strict";
n.d(t, { A: () => s, i: () => a }), n(64700);
var i = n(940622),
    r = n(77157);
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
function s(e) {
    let t = (0, r.A)(e),
        n = (0, i.lM)();
    return null == t ? { profileFrameStyle: void 0, profileFrameClassName: void 0 } : (n ?? a(t));
}
