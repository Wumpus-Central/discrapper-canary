n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(414626),
    l = n(243056);
let s = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: s,
            isDropHovered: a,
            onDrop: c,
            onEdit: o,
            onRemove: d,
            canRemove: u,
            actionsLocation: f,
            fieldStyle: g,
        } = e,
        { label: b } = t;
    return (0, r.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: s,
        isDropHovered: a,
        onDrop: c,
        onEdit: o,
        onRemove: d,
        title: b,
        canRemove: u,
        actionsLocation: f,
        fieldStyle: g,
        children: (0, r.jsx)(i.mR, {
            field: t,
            value: void 0,
            disabled: !1,
        }),
    });
};
