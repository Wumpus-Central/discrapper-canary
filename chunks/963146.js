"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    o = n(939249),
    l = n(632533);
function u(e) {
    let { name: t, className: n, state: i, isInline: u, onClick: c } = e,
        d = null;
    i?.isActive && !u
        ? (d = l.vu)
        : i?.lastValidationResult?.success === !1
          ? (d = l.z3)
          : i?.hasValue && !u && (d = l.hZ);
    let _ = (0, r.jsx)(a.E, {
        variant: u ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: s()(l.uK, { [l.mG]: u }, d, n),
        children: t + (u ? ":" : ""),
    });
    return null == c ? _ : (0, r.jsx)(o.D, { className: l.vk, onClick: () => c(t), children: _ });
}
