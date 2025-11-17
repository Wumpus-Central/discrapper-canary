n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
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
            canRemove: g,
            actionsLocation: m,
            fieldStyle: p,
        } = e,
        { label: f, placeholder: h } = t;
    return (0, r.jsx)(l.Z, {
        field: t,
        index: n,
        isDragEnabled: s,
        isDropHovered: o,
        onDrop: c,
        onEdit: d,
        onRemove: u,
        title: f,
        canRemove: g,
        actionsLocation: m,
        fieldStyle: p,
        children: (0, r.jsx)(i.Gi, {
            placeholder: null != h ? h : a.intl.string(a.t["Sqn+Wh"]),
            disabled: !0,
        }),
    });
};
