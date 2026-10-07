n.d(t, { e: () => d });
var i = n(477900);
n(582128);
var r = n(671325),
    a = n(845867),
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
    },
    o = {
        Base: ["State Machine 1"],
        "Nitro Illustration \u2014 Star": ["State Machine 1"],
        "Nitro Illustration \u2014 Key": ["State Machine 1"],
        "Nitro Illustration \u2014 Battery": ["State Machine 1"],
        "Nitro Illustration \u2014 Box": ["State Machine 1"],
        Wumpus: ["State Machine 1"],
        "Nitro Illustration \u2014 Power Jar": ["State Machine 1"],
        "Nitro Illustration \u2014 Lightning": ["State Machine 1"],
        "Nitro Illustration \u2014 Spaceship": ["State Machine 1"],
    };
function d(e) {
    let { artboard: t = "Base", stateMachine: n, ...d } = e,
        { status: c, buffer: u } = (0, s.CE)(r.A),
        _ = (0, s.m2)(r.A);
    return c === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(_ ? { key: "override" } : {}),
              buffer: u,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              artboardStateMachines: o,
              ...d,
          });
}
d.riveSrc = r.A;
