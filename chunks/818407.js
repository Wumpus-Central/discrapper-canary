a.d(l, { V: () => s });
var t = a(627968);
a(64700);
var n = a(597858),
    o = a(786558),
    i = a(799226);
let r = { "Icon Unlock": { reducedMotion: "boolean", locked: "boolean", fill: "color" } };
function s(e) {
    let { artboard: l = "Icon Unlock", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(n.A),
        c = (0, i.m2)(n.A);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(o.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = n.A;
