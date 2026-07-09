"use strict";
n.d(t, { C: () => o });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/38e9b5b82f80eb8908b757cf6987d77f6d7a67290610458d2119151a1052bd5b.riv";
var a = n(502377),
    s = n(799226);
let l = { "Nitro 3P Rewards Anim Illo": { reducedMotion: "boolean" } };
function o(e) {
    let { artboard: t = "Nitro 3P Rewards Anim Illo", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(r),
        u = (0, s.m2)(r);
    return d === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              ...o,
          });
}
o.riveSrc = r;
