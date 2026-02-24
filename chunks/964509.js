"use strict";
n.d(t, { x: () => l });
var r = n(627968);
n(64700);
var i = n(716164),
    s = n(786558),
    a = n(799226);
let o = { "Icon Gift": { reducedMotion: "boolean", fill: "color" } };
function l(e) {
    let { artboard: t = "Icon Gift", stateMachine: n, ...l } = e,
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
