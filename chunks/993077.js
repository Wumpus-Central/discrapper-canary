"use strict";
n.d(t, { Z: () => c, s: () => o });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(361264);
let o = { PRIMARY: l.Xc, DANGER: l.Wg, WARNING: l.vH, SUCCESS: l.CN, BRAND: l.cX, CUSTOM: l.Nr },
    d = r.forwardRef((e, t) => {
        let { children: n, outline: r = !1, editable: a, type: d = o.PRIMARY, className: c, ...u } = e;
        return (0, i.jsx)("div", { ref: t, className: s()(c, l.Nr, d, { [l.VR]: r }), ...u, children: n });
    });
(d.displayName = "Card"), (d.Types = o);
let c = d;
