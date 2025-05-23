n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(707592),
    l = n(137158),
    s = n(388032),
    a = n(194898);
let o = function (e) {
    let { formField: t, index: n, isDragEnabled: o, isDropHovered: c, onDrop: u, onEdit: d, onRemove: m, canRemove: g, actionsLocation: p, fieldStyle: f } = e,
        { label: h, placeholder: x } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: u,
        onEdit: d,
        onRemove: m,
        title: h,
        canRemove: g,
        actionsLocation: p,
        fieldStyle: f,
        children: (0, r.jsx)(i.Gi, {
            className: a.fieldBackground,
            placeholder: null != x ? x : s.intl.string(s.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
