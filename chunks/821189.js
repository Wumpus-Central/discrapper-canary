n.d(t, {
    A: () => o,
    f: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(976114);

function s(e) {
    let { currencies: t, className: n, children: i } = e;
    return t.length < 2
        ? null
        : (0, r.jsx)("div", {
              className: n,
              children: i,
          });
}
let o = function (e) {
    let { label: t, currencies: n, onChange: s, selectedCurrency: o, disabled: l = !1 } = e;
    if (n.length < 2) return null;
    let c = n.map((e, t) => ({
            id: t.toString(),
            value: e,
            label: "".concat(e.toUpperCase(), " - ").concat((0, a.Q)(e)),
        })),
        u = (e) => {
            null != e && s(e);
        };
    return (0, r.jsx)(i.l6P, {
        selectionMode: "single",
        label: t,
        value: o,
        options: c,
        onSelectionChange: u,
        disabled: l,
    });
};
