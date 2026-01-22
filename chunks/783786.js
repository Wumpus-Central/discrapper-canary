n.d(t, { M: () => a });
var r = n(723906),
    i = n(48284);
function a(e) {
    let { id: t, label: n, "aria-labelledby": a, "aria-label": s, labelElementType: o = "label" } = e;
    t = (0, r.Bi)(t);
    let l = (0, r.Bi)(),
        c = {};
    return (
        n &&
            ((a = a ? `${l} ${a}` : l),
            (c = {
                id: l,
                htmlFor: "label" === o ? t : void 0,
            })),
        {
            labelProps: c,
            fieldProps: (0, i.b)({
                id: t,
                "aria-label": s,
                "aria-labelledby": a,
            }),
        }
    );
}
