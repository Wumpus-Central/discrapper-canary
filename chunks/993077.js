a.d(s, { Z: () => N, s: () => t });
var r = a(477900);
a(582128);
var c = a(503698),
    d = a.n(c),
    i = a(717815);
let t = { PRIMARY: i.Xc, DANGER: i.Wg, WARNING: i.vH, SUCCESS: i.CN, BRAND: i.cX, CUSTOM: i.Nr };
function p(e) {
    let { children: s, outline: a = !1, editable: c, type: p = t.PRIMARY, className: N, ref: R, ...l } = e;
    return (0, r.jsx)("div", { ref: R, className: d()(N, i.Nr, p, { [i.VR]: a }), ...l, children: s });
}
((p.displayName = "Card"), (p.Types = t));
let N = p;
