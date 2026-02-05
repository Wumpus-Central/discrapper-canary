"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(690868);
function l(e) {
    let { name: t, className: n, state: i, isInline: l, onClick: u } = e,
        c = t + (l ? ":" : ""),
        d = null;
    i?.isActive && !l
        ? (d = o.vu)
        : i?.lastValidationResult?.success === !1
          ? (d = o.z3)
          : i?.hasValue && !l && (d = o.hZ);
    let _ = (0, r.jsx)(s.Text, {
        variant: l ? "text-md/normal" : "text-sm/normal",
        color: "text-strong",
        className: a()(o.uK, { [o.mG]: l }, d, n),
        children: c,
    });
    return null == u ? _ : (0, r.jsx)(s.DUT, { className: o.vk, onClick: () => u(t), children: _ });
}
