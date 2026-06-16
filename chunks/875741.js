"use strict";
n.d(t, { A: () => s, i: () => r }), n(64700);
var i = n(77157);
function r(e) {
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
    let t = (0, i.A)(e);
    return null == t ? { profileFrameStyle: void 0, profileFrameClassName: void 0 } : r(t);
}
