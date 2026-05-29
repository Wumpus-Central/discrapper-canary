"use strict";
n.d(t, { A: () => a }), n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(77157);
function a(e) {
    let t = (0, s.A)(e);
    return null == t
        ? { profileFrameStyle: void 0, profileFrameClassName: void 0 }
        : {
              profileFrameStyle: {
                  "--custom-profile-frame-container-width": t.innerWidth,
                  "--custom-profile-frame-overflow-top": t.overflowTop,
                  "--custom-profile-frame-overflow-bottom": t.overflowBottom,
                  "--custom-profile-frame-overflow-horizontal": t.overflowHorizontal,
              },
              profileFrameClassName: r()({
                  "custom-profile-frame": !0,
                  "custom-profile-frame-bottom": t.layers.some((e) => {
                      let { type: t, anchor: n } = e;
                      return "staple" === t && "bottom" === n;
                  }),
              }),
          };
}
