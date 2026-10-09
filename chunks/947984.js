r.d(e, { U: () => i });
var t = r(477900);
r(582128);
let o =
    "https://cdn.discordapp.com/assets/content/478c4e2368b95b01e5322800305a95640e4044e34f0da08b51845bc91b51526e.riv";
var c = r(509482),
    d = r(799226);
let s = { "Badges Coachmark": { on: "boolean", reducedMotion: "boolean" } },
    n = { "Badges Coachmark": ["State Machine 1"] };
function i(a) {
    let { artboard: e = "Badges Coachmark", stateMachine: r, ...i } = a,
        { status: b, buffer: h } = (0, d.CE)(o),
        p = (0, d.m2)(o);
    return b === d.BW.Loading
        ? null
        : (0, t.jsx)(c.w, {
              ...(p ? { key: "override" } : {}),
              buffer: h,
              artboard: e,
              stateMachine: r,
              artboardProperties: s,
              artboardStateMachines: n,
              ...i,
          });
}
i.riveSrc = o;
