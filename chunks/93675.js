t.d(r, { f: () => c });
var a = t(477900);
t(582128);
let d =
    "https://cdn.discordapp.com/assets/content/67d52916de05ae5374f3644778bee66c05ae690f07026521e7d55ff97dd80850.riv";
var o = t(502377),
    s = t(799226);
let n = { "Server Hub Perk": { on: "boolean", reducedMotion: "boolean" }, _Asset_Pencil: {} };
function c(e) {
    let { artboard: r = "Server Hub Perk", stateMachine: t, ...c } = e,
        { status: i, buffer: p } = (0, s.CE)(d),
        u = (0, s.m2)(d);
    return i === s.BW.Loading
        ? null
        : (0, a.jsx)(o.w, {
              ...(u ? { key: "override" } : {}),
              buffer: p,
              artboard: r,
              stateMachine: t,
              artboardProperties: n,
              ...c,
          });
}
c.riveSrc = d;
