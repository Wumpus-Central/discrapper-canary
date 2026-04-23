"use strict";
n.d(t, { M: () => o });
var i = n(627968);
n(64700);
var s = n(63239),
    r = n(786558),
    l = n(799226);
let a = { Artboard: {} };
function o(e) {
    let { artboard: t = "Artboard", stateMachine: n, ...o } = e,
        { status: c, buffer: d } = (0, l.CE)(s.A),
        u = (0, l.m2)(s.A);
    return c === l.BW.Loading
        ? null
        : (0, i.jsx)(r.w, {
              ...(u ? { key: "override" } : {}),
              buffer: d,
              artboard: t,
              stateMachine: n,
              artboardProperties: a,
              ...o,
          });
}
o.riveSrc = s.A;
