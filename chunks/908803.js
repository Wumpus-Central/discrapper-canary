a.d(t, { m: () => o });
var l = a(627968);
a(64700);
let n =
    "https://cdn.discordapp.com/assets/content/b02469d463aaa6b145fab2e70084146735951008acc87c49261038a2e5864994.riv";
var r = a(502377),
    s = a(799226);
let i = { "Icon Dice": { fill: "color", muted: "boolean" } };
function o(e) {
    let { artboard: t = "Icon Dice", stateMachine: a, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(n),
        u = (0, s.m2)(n);
    return d === s.BW.Loading
        ? null
        : (0, l.jsx)(r.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: a,
              artboardProperties: i,
              ...o,
          });
}
o.riveSrc = n;
