"use strict";
n.d(t, { M: () => s });
var i = n(985620),
    r = n(48284);
function s(e) {
    let { id: t, label: n, "aria-labelledby": s, "aria-label": a, labelElementType: o = "label" } = e;
    t = (0, i.Bi)(t);
    let l = (0, i.Bi)(),
        u = {};
    return (
        n && ((s = s ? `${l} ${s}` : l), (u = { id: l, htmlFor: "label" === o ? t : void 0 })),
        { labelProps: u, fieldProps: (0, r.b)({ id: t, "aria-label": a, "aria-labelledby": s }) }
    );
}
