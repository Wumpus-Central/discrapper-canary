n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(707592),
    l = n(137158),
    a = n(388032);
let s = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: s,
            isDropHovered: o,
            onDrop: c,
            onEdit: d,
            onRemove: u,
            canRemove: m,
            actionsLocation: g,
            fieldStyle: p,
        } = e,
        { label: h, placeholder: f } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: s,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        title: h,
        canRemove: m,
        actionsLocation: g,
        fieldStyle: p,
        children: (0, r.jsx)(i.Gi, {
            placeholder: null != f ? f : a.intl.string(a.t["Sqn+Wl"]),
            disabled: !0,
        }),
    });
};
