a.d(t, { i: () => s });
var l = a(627968);
a(64700);
let n =
    "https://cdn.discordapp.com/assets/content/087fb34ba986c4c0e0ed4973e0a2e7cc730de3a715dfed275d9533742484f3b4.riv";
var i = a(502377),
    r = a(799226);
let d = { "Emoji Neg": {}, "Emoji Mid": {}, "Emoji Happy": {} };
function s(e) {
    let { artboard: t = "Emoji Neg", stateMachine: a, ...s } = e,
        { status: u, buffer: o } = (0, r.CE)(n),
        b = (0, r.m2)(n);
    return u === r.BW.Loading
        ? null
        : (0, l.jsx)(i.w, {
              ...(b ? { key: "override" } : {}),
              buffer: o,
              artboard: t,
              stateMachine: a,
              artboardProperties: d,
              ...s,
          });
}
s.riveSrc = n;
