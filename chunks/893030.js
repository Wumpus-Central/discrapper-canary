e.d(a, { M: () => n });
var t = e(477900);
e(582128);
let d =
    "https://cdn.discordapp.com/assets/content/5ff46e6a38cbffb1450e062ca9e8dcabf8452f6890907b70dc0489fb3ec489de.riv";
var c = e(729901),
    s = e(799226);
let o = { Artboard: {} },
    b = { Artboard: [] },
    i = { Artboard: ["stateMachine"] };
function n(r) {
    let { artboard: a = "Artboard", stateMachine: e, ...n } = r,
        { status: p, buffer: f } = (0, s.CE)(d),
        h = (0, s.m2)(d);
    return p === s.BW.Loading
        ? null
        : (0, t.jsx)(c.w, {
              ...(h ? { key: "override" } : {}),
              buffer: f,
              artboard: a,
              stateMachine: e,
              artboardProperties: o,
              artboardViewModelInstances: b,
              artboardStateMachines: i,
              ...n,
          });
}
n.riveSrc = d;
