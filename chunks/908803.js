"use strict";
n.d(t, { m: () => o });
var i = n(627968);
n(64700);
let a =
    "https://cdn.discordapp.com/assets/content/b02469d463aaa6b145fab2e70084146735951008acc87c49261038a2e5864994.riv";
var r = n(502377),
    l = n(799226);
let s = { "Icon Dice": { fill: "color", muted: "boolean" } };
function o(e) {
    let { artboard: t = "Icon Dice", stateMachine: n, ...o } = e,
        { status: c, buffer: d } = (0, l.CE)(a),
        u = (0, l.m2)(a);
    return c === l.BW.Loading
        ? null
        : (0, i.jsx)(r.w, {
              ...(u ? { key: "override" } : {}),
              buffer: d,
              artboard: t,
              stateMachine: n,
              artboardProperties: s,
              ...o,
          });
}
o.riveSrc = a;
