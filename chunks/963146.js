"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(834730),
    a = n(939249),
    o = n(632533);
function c(e) {
    let { name: t, className: n, state: l, isInline: c, onClick: u } = e,
        d = null;
    l?.isActive && !c
        ? (d = o.vu)
        : l?.lastValidationResult?.success === !1
          ? (d = o.z3)
          : l?.hasValue && !c && (d = o.hZ);
    let h = (0, i.jsx)(r.E, {
        variant: c ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: s()(o.uK, { [o.mG]: c }, d, n),
        children: t + (c ? ":" : ""),
    });
    return null == u ? h : (0, i.jsx)(a.D, { className: o.vk, onClick: () => u(t), children: h });
}
