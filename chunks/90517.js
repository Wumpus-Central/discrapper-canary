a.d(r, { l: () => s });
var t = a(477900);
a(582128);
let o =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
var i = a(845867),
    d = a(799226);
let n = { "Nitro Referral Confirmation - Old Logo": {} },
    c = { "Nitro Referral Confirmation - Old Logo": ["State Machine 1"] };
function s(e) {
    let { artboard: r = "Nitro Referral Confirmation - Old Logo", stateMachine: a, ...s } = e,
        { status: f, buffer: l } = (0, d.CE)(o),
        p = (0, d.m2)(o);
    return f === d.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(p ? { key: "override" } : {}),
              buffer: l,
              artboard: r,
              stateMachine: a,
              artboardProperties: n,
              artboardStateMachines: c,
              ...s,
          });
}
s.riveSrc = o;
