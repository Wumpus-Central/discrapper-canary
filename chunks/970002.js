"use strict";
n.d(t, { e: () => o });
var i = n(477900);
n(582128);
var r = n(671325),
    a = n(502377),
    s = n(799226);
let l = {
    Base: { EntryTrigger: "trigger", ExitTrigger: "trigger", PosX: "number", PosY: "number" },
    "Nitro Illustration \u2014 Star": {},
    "Nitro Illustration \u2014 Key": {},
    "Nitro Illustration \u2014 Battery": {},
    "Nitro Illustration \u2014 Box": {},
    Wumpus: {},
    "Nitro Illustration \u2014 Power Jar": {},
    "Nitro Illustration \u2014 Lightning": {},
    "Nitro Illustration \u2014 Spaceship": {},
};
function o(e) {
    let { artboard: t = "Base", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(r.A),
        u = (0, s.m2)(r.A);
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
o.riveSrc = r.A;
