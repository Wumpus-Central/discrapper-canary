a.d(l, { z: () => s });
var t = a(627968);
a(64700);
var o = a(339858),
    n = a(786558),
    i = a(799226);
let r = {
    "Gem L3": { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Gem L3", stateMachine: a, ...s } = e,
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
