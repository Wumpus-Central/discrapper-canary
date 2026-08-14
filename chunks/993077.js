s.d(r, { Z: () => R, s: () => t });
var a = s(477900),
    d = s(582128),
    c = s(503698),
    i = s.n(c),
    p = s(901400);
let t = { PRIMARY: p.Xc, DANGER: p.Wg, WARNING: p.vH, SUCCESS: p.CN, BRAND: p.cX, CUSTOM: p.Nr },
    N = d.forwardRef((e, r) => {
        let { children: s, outline: d = !1, editable: c, type: N = t.PRIMARY, className: R, ...l } = e;
        return (0, a.jsx)("div", { ref: r, className: i()(R, p.Nr, N, { [p.VR]: d }), ...l, children: s });
    });
(N.displayName = "Card"), (N.Types = t);
let R = N;
