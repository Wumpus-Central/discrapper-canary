var i = t(200651);
t(192379);
var l = t(707592),
    a = t(137158),
    s = t(388032),
    r = t(31619);
n.Z = function (e) {
    let { formField: n, index: t, isDragEnabled: o, isDropHovered: c, onDrop: d, onEdit: u, onRemove: m, canRemove: x, actionsLocation: f, fieldStyle: h } = e,
        { label: g, placeholder: v } = n;
    return (0, i.jsx)(a.Z, {
        field: n,
        index: t,
        isDragEnabled: o,
        isDropHovered: c,
        onDrop: d,
        onEdit: u,
        onRemove: m,
        title: g,
        canRemove: x,
        actionsLocation: f,
        fieldStyle: h,
        children: (0, i.jsx)(l.Gi, {
            className: r.fieldBackground,
            placeholder: null != v ? v : s.intl.string(s.t['Sqn+Wl']),
            disabled: !0
        })
    });
};
