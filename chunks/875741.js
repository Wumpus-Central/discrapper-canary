"use strict";
n.d(t, { A: () => o, a: () => a }), n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(77157);
function a(e) {
    return {
        profileFrameStyle: {
            "--custom-profile-frame-container-width": e.innerWidth,
            "--custom-profile-frame-overflow-top": e.overflowTop,
            "--custom-profile-frame-overflow-bottom": e.overflowBottom,
            "--custom-profile-frame-overflow-horizontal": e.overflowHorizontal,
        },
        profileFrameClassName: r()({
            "custom-profile-frame": !0,
            "custom-profile-frame-bottom": e.layers.some((e) => {
                let { type: t, anchor: n } = e;
                return "staple" === t && "bottom" === n;
            }),
        }),
    };
}
function o(e) {
    let t = (0, s.A)(e);
    return null == t ? { profileFrameStyle: void 0, profileFrameClassName: void 0 } : a(t);
}
