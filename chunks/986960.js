"use strict";
r.d(t, { M: () => i });
var n = r(985620),
    a = r(48284),
    s = r(318473);
function i(e) {
    let { description: t, errorMessage: r, isInvalid: i, validationState: o } = e,
        { labelProps: l, fieldProps: u } = (function (e) {
            let { id: t, label: r, "aria-labelledby": s, "aria-label": i, labelElementType: o = "label" } = e;
            t = (0, n.Bi)(t);
            let l = (0, n.Bi)(),
                u = {};
            return (
                r && ((s = s ? `${l} ${s}` : l), (u = { id: l, htmlFor: "label" === o ? t : void 0 })),
                { labelProps: u, fieldProps: (0, a.b)({ id: t, "aria-label": i, "aria-labelledby": s }) }
            );
        })(e),
        c = (0, n.X1)([!!t, !!r, i, o]),
        d = (0, n.X1)([!!t, !!r, i, o]);
    return {
        labelProps: l,
        fieldProps: (u = (0, s.v)(u, {
            "aria-describedby": [c, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d },
    };
}
