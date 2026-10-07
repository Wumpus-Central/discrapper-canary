t.d(a, { i: () => n });
var i = t(477900);
t(582128);
let r =
    "https://cdn.discordapp.com/assets/content/087fb34ba986c4c0e0ed4973e0a2e7cc730de3a715dfed275d9533742484f3b4.riv";
var c = t(845867),
    d = t(799226);
let o = { "Emoji Neg": {}, "Emoji Mid": {}, "Emoji Happy": {} },
    s = { "Emoji Neg": ["State Machine"], "Emoji Mid": ["State Machine"], "Emoji Happy": ["State Machine"] };
function n(e) {
    let { artboard: a = "Emoji Neg", stateMachine: t, ...n } = e,
        { status: p, buffer: h } = (0, d.CE)(r),
        b = (0, d.m2)(r);
    return p === d.BW.Loading
        ? null
        : (0, i.jsx)(c.w, {
              ...(b ? { key: "override" } : {}),
              buffer: h,
              artboard: a,
              stateMachine: t,
              artboardProperties: o,
              artboardStateMachines: s,
              ...n,
          });
}
n.riveSrc = r;
