a.d(l, { V: () => s });
var t = a(627968);
a(64700);
var o = a(597858),
    n = a(786558),
    i = a(799226);
let r = { "Icon Unlock": { reducedMotion: "boolean", locked: "boolean", fill: "color" } };
function s(e) {
    let { artboard: l = "Icon Unlock", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o.A),
        c = (0, i.m2)(o.A);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(n.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = o.A;
