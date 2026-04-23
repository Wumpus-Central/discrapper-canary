a.d(l, { l: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
var n = a(502377),
    i = a(799226);
let r = { "Nitro Referral Confirmation - Old Logo": {} };
function s(e) {
    let { artboard: l = "Nitro Referral Confirmation - Old Logo", stateMachine: a, ...s } = e,
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
