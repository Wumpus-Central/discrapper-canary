t.d(r, { f: () => o });
var a = t(477900);
t(582128);
let d =
    "https://cdn.discordapp.com/assets/content/67d52916de05ae5374f3644778bee66c05ae690f07026521e7d55ff97dd80850.riv";
var n = t(509482),
    s = t(799226);
let c = { "Server Hub Perk": { on: "boolean", reducedMotion: "boolean" }, _Asset_Pencil: {} },
    i = { "Server Hub Perk": ["State Machine 1"], _Asset_Pencil: ["State Machine 1"] };
function o(e) {
    let { artboard: r = "Server Hub Perk", stateMachine: t, ...o } = e,
        { status: b, buffer: u } = (0, s.CE)(d),
        p = (0, s.m2)(d);
    return b === s.BW.Loading
        ? null
        : (0, a.jsx)(n.w, {
              ...(p ? { key: "override" } : {}),
              buffer: u,
              artboard: r,
              stateMachine: t,
              artboardProperties: c,
              artboardStateMachines: i,
              ...o,
          });
}
o.riveSrc = d;
