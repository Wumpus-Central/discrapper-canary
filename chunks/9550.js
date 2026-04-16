"use strict";
n.d(t, { s: () => l });
var r = n(627968);
n(64700);
var i = n(860193),
    s = n(786558),
    a = n(799226);
let o = {
    "Icon Waveform": { reducedMotion: "boolean", fill: "color", on: "boolean" },
    Lottie_HoverOnOff_NoiseSuppression_nested_comp_2: {},
};
function l(e) {
    let { artboard: t = "Icon Waveform", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(i.A),
        d = (0, a.m2)(i.A);
    return u === a.BW.Loading
        ? null
        : (0, r.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = i.A;
