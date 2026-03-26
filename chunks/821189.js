"use strict";
n.d(t, { A: () => o, f: () => a });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(976114);
function a(e) {
    let { currencies: t, className: n, children: i } = e;
    return t.length < 2 ? null : (0, r.jsx)("div", { className: n, children: i });
}
let o = function (e) {
    let { label: t, currencies: n, onChange: a, selectedCurrency: o, disabled: l = !1 } = e;
    if (n.length < 2 || null == o) return null;
    let u = n.map((e, t) => ({ id: t.toString(), value: e, label: `${e.toUpperCase()} - ${(0, s.Q)(e)}` })),
        c = (e) => {
            null != e && a(e);
        };
    return (0, r.jsx)(i.l6P, {
        selectionMode: "single",
        label: t,
        value: o,
        options: u,
        onSelectionChange: c,
        disabled: l,
    });
};
