t.d(r, { Z: () => d });
var e = t(477900);
t(582128);
let s =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var n = t(729901),
    i = t(799226);
let o = { Torbs_Main: {} },
    c = { Torbs_Main: ["Instance"] },
    b = { Torbs_Main: ["SM_Torbs"] };
function d(a) {
    let { artboard: r = "Torbs_Main", stateMachine: t, ...d } = a,
        { status: p, buffer: h } = (0, i.CE)(s),
        u = (0, i.m2)(s);
    return p === i.BW.Loading
        ? null
        : (0, e.jsx)(n.w, {
              ...(u ? { key: "override" } : {}),
              buffer: h,
              artboard: r,
              stateMachine: t,
              artboardProperties: o,
              artboardViewModelInstances: c,
              artboardStateMachines: b,
              ...d,
          });
}
d.riveSrc = s;
