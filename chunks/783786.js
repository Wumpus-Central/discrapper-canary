"use strict";
n.d(t, { M: () => s });
var r = n(723906),
    i = n(48284);
function s(e) {
    let { id: t, label: n, "aria-labelledby": s, "aria-label": a, labelElementType: o = "label" } = e;
    t = (0, r.Bi)(t);
    let l = (0, r.Bi)(),
        u = {};
    return (
        n && ((s = s ? `${l} ${s}` : l), (u = { id: l, htmlFor: "label" === o ? t : void 0 })),
        { labelProps: u, fieldProps: (0, i.b)({ id: t, "aria-label": a, "aria-labelledby": s }) }
    );
}
