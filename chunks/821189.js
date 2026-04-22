n.d(t, { A: () => s, f: () => i });
var a = n(627968);
n(64700);
var r = n(691885),
    l = n(976114);
function i(e) {
    let { currencies: t, className: n, children: r } = e;
    return t.length < 2 ? null : (0, a.jsx)("div", { className: n, children: r });
}
let s = function (e) {
    let { label: t, currencies: n, onChange: i, selectedCurrency: s, disabled: o = !1 } = e;
    if (n.length < 2 || null == s) return null;
    let u = n.map((e, t) => ({ id: t.toString(), value: e, label: `${e.toUpperCase()} - ${(0, l.Q)(e)}` }));
    return (0, a.jsx)(r.l, {
        selectionMode: "single",
        label: t,
        value: s,
        options: u,
        onSelectionChange: (e) => {
            null != e && i(e);
        },
        disabled: o,
    });
};
