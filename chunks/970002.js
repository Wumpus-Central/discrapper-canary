"use strict";
n.d(t, { e: () => l });
var r = n(627968);
n(64700);
var i = n(671325),
    a = n(786558),
    s = n(799226);
let o = {
    Base: { EntryTrigger: "trigger", ExitTrigger: "trigger", PosX: "number", PosY: "number" },
    "Nitro Illustration — Spaceship": {},
    "Nitro Illustration — Lightning": {},
    "Nitro Illustration — Power Jar": {},
    Wumpus: {},
    "Nitro Illustration — Box": {},
    "Nitro Illustration — Battery": {},
    "Nitro Illustration — Key": {},
    "Nitro Illustration — Star": {},
};
function l(e) {
    let { artboard: t = "Base", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, s.CE)(i.A),
        d = (0, s.m2)(i.A);
    return u === s.BW.Loading
        ? null
        : (0, r.jsx)(a.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = i.A;
