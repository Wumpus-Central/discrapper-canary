t.d(r, { l: () => n });
var a = t(627968);
t(64700);
let o =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
var i = t(594639),
    d = t(105596);
let c = { "Nitro Referral Confirmation - Old Logo": {} };
function n(e) {
    let { artboard: r = "Nitro Referral Confirmation - Old Logo", stateMachine: t, ...n } = e,
        { status: s, buffer: p } = (0, d.CE)(o),
        f = (0, d.m2)(o);
    return s === d.BW.Loading
        ? null
        : (0, a.jsx)(i.w, {
              ...(f ? { key: "override" } : {}),
              buffer: p,
              artboard: r,
              stateMachine: t,
              artboardProperties: c,
              ...n,
          });
}
n.riveSrc = o;
