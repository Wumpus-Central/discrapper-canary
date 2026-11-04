var r = a(477900);
a(582128);
var c = a(503698),
    d = a.n(c),
    i = a(717815);
let p = { PRIMARY: i.Xc, DANGER: i.Wg, WARNING: i.vH, SUCCESS: i.CN, BRAND: i.cX, CUSTOM: i.Nr };
function t(e) {
    let { children: s, outline: a = !1, editable: c, type: t = p.PRIMARY, className: N, ref: R, ...n } = e;
    return (0, r.jsx)("div", { ref: R, className: d()(N, i.Nr, t, { [i.VR]: a }), ...n, children: s });
}
((t.displayName = "Card"), (t.Types = p), a.d(s, {}, { Z: t, s: p }));
