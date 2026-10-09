t.d(a, { m: () => d });
var c = t(477900);
t(582128);
let r =
    "https://cdn.discordapp.com/assets/content/b02469d463aaa6b145fab2e70084146735951008acc87c49261038a2e5864994.riv";
var i = t(509482),
    o = t(799226);
let n = { "Icon Dice": { fill: "color", muted: "boolean" } },
    s = { "Icon Dice": ["State Machine 1"] };
function d(e) {
    let { artboard: a = "Icon Dice", stateMachine: t, ...d } = e,
        { status: p, buffer: b } = (0, o.CE)(r),
        h = (0, o.m2)(r);
    return p === o.BW.Loading
        ? null
        : (0, c.jsx)(i.w, {
              ...(h ? { key: "override" } : {}),
              buffer: b,
              artboard: a,
              stateMachine: t,
              artboardProperties: n,
              artboardStateMachines: s,
              ...d,
          });
}
d.riveSrc = r;
