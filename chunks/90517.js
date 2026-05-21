t.d(r, { l: () => o });
var n = t(627968);
t(64700);
let l =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
var c = t(594639),
    i = t(105596);
let a = { "Nitro Referral Confirmation - Old Logo": {} };
function o(e) {
    let { artboard: r = "Nitro Referral Confirmation - Old Logo", stateMachine: t, ...o } = e,
        { status: s, buffer: u } = (0, i.CE)(l),
        d = (0, i.m2)(l);
    return s === i.BW.Loading
        ? null
        : (0, n.jsx)(c.w, {
              ...(d ? { key: "override" } : {}),
              buffer: u,
              artboard: r,
              stateMachine: t,
              artboardProperties: a,
              ...o,
          });
}
o.riveSrc = l;
