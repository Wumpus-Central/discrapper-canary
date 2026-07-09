t.d(r, { C: () => n });
var a = t(627968);
t(64700);
let d =
    "https://cdn.discordapp.com/assets/content/38e9b5b82f80eb8908b757cf6987d77f6d7a67290610458d2119151a1052bd5b.riv";
var o = t(502377),
    i = t(799226);
let s = { "Nitro 3P Rewards Anim Illo": { reducedMotion: "boolean" } };
function n(e) {
    let { artboard: r = "Nitro 3P Rewards Anim Illo", stateMachine: t, ...n } = e,
        { status: c, buffer: b } = (0, i.CE)(d),
        p = (0, i.m2)(d);
    return c === i.BW.Loading
        ? null
        : (0, a.jsx)(o.w, {
              ...(p ? { key: "override" } : {}),
              buffer: b,
              artboard: r,
              stateMachine: t,
              artboardProperties: s,
              ...n,
          });
}
n.riveSrc = d;
