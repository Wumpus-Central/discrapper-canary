"use strict";
n.d(t, { e: () => l });
var i = n(627968);
n(64700);
var r = n(671325),
    s = n(594639),
    a = n(105596);
let o = {
    Base: { EntryTrigger: "trigger", ExitTrigger: "trigger", PosX: "number", PosY: "number" },
    "Nitro Illustration \u2014 Spaceship": {},
    "Nitro Illustration \u2014 Lightning": {},
    "Nitro Illustration \u2014 Power Jar": {},
    Wumpus: {},
    "Nitro Illustration \u2014 Box": {},
    "Nitro Illustration \u2014 Battery": {},
    "Nitro Illustration \u2014 Key": {},
    "Nitro Illustration \u2014 Star": {},
};
function l(e) {
    let { artboard: t = "Base", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(r.A),
        d = (0, a.m2)(r.A);
    return u === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r.A;
