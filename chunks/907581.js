a.d(l, { C: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/38e9b5b82f80eb8908b757cf6987d77f6d7a67290610458d2119151a1052bd5b.riv";
var n = a(502377),
    i = a(799226);
let r = { "Nitro 3P Rewards Anim Illo": { reducedMotion: "boolean" } };
function s(e) {
    let { artboard: l = "Nitro 3P Rewards Anim Illo", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o),
        c = (0, i.m2)(o);
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
s.riveSrc = o;
