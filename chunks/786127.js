n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(707592),
    l = n(137158),
    s = n(388032);
let a = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: o,
            onDrop: c,
            onEdit: d,
            onRemove: u,
            canRemove: g,
            actionsLocation: m,
            fieldStyle: p,
        } = e,
        { label: f, placeholder: h } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: a,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        title: f,
        canRemove: g,
        actionsLocation: m,
        fieldStyle: p,
        children: (0, r.jsx)(i.Gi, {
            placeholder: null != h ? h : s.intl.string(s.t["Sqn+Wl"]),
            disabled: !0,
        }),
    });
};
