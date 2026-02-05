"use strict";
n.d(t, { M: () => a });
var r = n(723906),
    i = n(48284);
function a(e) {
    let { id: t, label: n, "aria-labelledby": a, "aria-label": s, labelElementType: o = "label" } = e;
    t = (0, r.Bi)(t);
    let l = (0, r.Bi)(),
        u = {};
    return (
        n && ((a = a ? `${l} ${a}` : l), (u = { id: l, htmlFor: "label" === o ? t : void 0 })),
        { labelProps: u, fieldProps: (0, i.b)({ id: t, "aria-label": s, "aria-labelledby": a }) }
    );
}
