n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(414626),
    l = n(243056);
let r = function (e) {
    let {
            formField: t,
            index: n,
            isDragEnabled: r,
            isDropHovered: a,
            onDrop: c,
            onEdit: d,
            onRemove: o,
            canRemove: u,
            actionsLocation: x,
            fieldStyle: m,
        } = e,
        { label: h } = t;
    return (0, i.jsx)(l.A, {
        field: t,
        index: n,
        isDragEnabled: r,
        isDropHovered: a,
        onDrop: c,
        onEdit: d,
        onRemove: o,
        title: h,
        canRemove: u,
        actionsLocation: x,
        fieldStyle: m,
        children: (0, i.jsx)(s.mR, { field: t, value: void 0, disabled: !1 }),
    });
};
