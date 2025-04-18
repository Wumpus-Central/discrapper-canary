n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(707592),
    s = n(137158),
    l = n(388032),
    a = n(664305);
let o = function (e) {
    let { formField: t, index: n, isDragEnabled: o, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: g, actionsLocation: p, fieldStyle: h } = e,
        { label: f, placeholder: x } = t;
    return (0, r.jsx)(s.Z, {
        field: t,
        index: n,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: f,
        canRemove: g,
        actionsLocation: p,
        fieldStyle: h,
        children: (0, r.jsx)(i.Gi, {
            className: a.fieldBackground,
            placeholder: null != x ? x : l.NW.string(l.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
