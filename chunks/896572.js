t.d(a, { i: () => s });
var l = t(627968);
t(64700);
let n =
    "https://cdn.discordapp.com/assets/content/087fb34ba986c4c0e0ed4973e0a2e7cc730de3a715dfed275d9533742484f3b4.riv";
var i = t(502377),
    r = t(799226);
let d = { "Emoji Neg": {}, "Emoji Mid": {}, "Emoji Happy": {} };
function s(e) {
    let { artboard: a = "Emoji Neg", stateMachine: t, ...s } = e,
        { status: u, buffer: E } = (0, r.CE)(n),
        O = (0, r.m2)(n);
    return u === r.BW.Loading
        ? null
        : (0, l.jsx)(i.w, {
              ...(O ? { key: "override" } : {}),
              buffer: E,
              artboard: a,
              stateMachine: t,
              artboardProperties: d,
              ...s,
          });
}
s.riveSrc = n;
