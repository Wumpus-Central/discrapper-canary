n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(707592),
    s = n(137158),
    a = n(388032),
    l = n(664305);
let o = function (e) {
    let { formField: t, index: n, isDragEnabled: o, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: g, actionsLocation: p, fieldStyle: f } = e,
        { label: h, placeholder: b } = t;
    return (0, r.jsx)(s.Z, {
        field: t,
        index: n,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: h,
        canRemove: g,
        actionsLocation: p,
        fieldStyle: f,
        children: (0, r.jsx)(i.Gi, {
            className: l.fieldBackground,
            placeholder: null != b ? b : a.NW.string(a.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
