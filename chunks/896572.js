a.d(r, { i: () => s });
var i = a(477900);
a(582128);
let t =
    "https://cdn.discordapp.com/assets/content/087fb34ba986c4c0e0ed4973e0a2e7cc730de3a715dfed275d9533742484f3b4.riv";
var d = a(502377),
    c = a(799226);
let o = { "Emoji Neg": {}, "Emoji Mid": {}, "Emoji Happy": {} };
function s(e) {
    let { artboard: r = "Emoji Neg", stateMachine: a, ...s } = e,
        { status: p, buffer: n } = (0, c.CE)(t),
        b = (0, c.m2)(t);
    return p === c.BW.Loading
        ? null
        : (0, i.jsx)(d.w, {
              ...(b ? { key: "override" } : {}),
              buffer: n,
              artboard: r,
              stateMachine: a,
              artboardProperties: o,
              ...s,
          });
}
s.riveSrc = t;
