n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(707592),
    l = n(137158),
    a = n(388032),
    s = n(31829);
let o = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: o,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: g,
            actionsLocation: p,
            fieldStyle: h,
        } = e,
        { label: f, placeholder: b } = t;
    return (0, r.jsx)(l.Z, {
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
            className: s.fieldBackground,
            placeholder: null != b ? b : a.intl.string(a.t["Sqn+Wl"]),
            disabled: !0,
        }),
    });
};
