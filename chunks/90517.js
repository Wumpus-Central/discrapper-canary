"use strict";
n.d(t, { l: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
var s = n(594639),
    a = n(105596);
let o = { "Nitro Referral Confirmation - Old Logo": {} };
function l(e) {
    let { artboard: t = "Nitro Referral Confirmation - Old Logo", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(r),
        d = (0, a.m2)(r);
    return u === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r;
