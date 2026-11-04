t.d(e, { s: () => o });
var r = t(477900);
t(582128);
let d =
    "https://cdn.discordapp.com/assets/content/fac02dd925a746a61291e1f604a8affff663e9d8a22cd9b21749991ff745f1f2.riv";
var s = t(729901),
    c = t(799226);
let i = { "STACKED COINS": {}, "SINGLE COIN": {} },
    n = { "STACKED COINS": [], "SINGLE COIN": [] },
    S = { "STACKED COINS": ["State Machine 1"], "SINGLE COIN": ["State Machine 1"] };
function o(a) {
    let { artboard: e = "STACKED COINS", stateMachine: t, ...o } = a,
        { status: C, buffer: f } = (0, c.CE)(d),
        p = (0, c.m2)(d);
    return C === c.BW.Loading
        ? null
        : (0, r.jsx)(s.w, {
              ...(p ? { key: "override" } : {}),
              buffer: f,
              artboard: e,
              stateMachine: t,
              artboardProperties: i,
              artboardViewModelInstances: n,
              artboardStateMachines: S,
              ...o,
          });
}
o.riveSrc = d;
