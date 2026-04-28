r.d(a, { m: () => d });
var c = r(627968);
r(64700);
let t =
    "https://cdn.discordapp.com/assets/content/b02469d463aaa6b145fab2e70084146735951008acc87c49261038a2e5864994.riv";
var o = r(502377),
    i = r(799226);
let s = { "Icon Dice": { fill: "color", muted: "boolean" } };
function d(e) {
    let { artboard: a = "Icon Dice", stateMachine: r, ...d } = e,
        { status: n, buffer: p } = (0, i.CE)(t),
        b = (0, i.m2)(t);
    return n === i.BW.Loading
        ? null
        : (0, c.jsx)(o.w, {
              ...(b ? { key: "override" } : {}),
              buffer: p,
              artboard: a,
              stateMachine: r,
              artboardProperties: s,
              ...d,
          });
}
d.riveSrc = t;
