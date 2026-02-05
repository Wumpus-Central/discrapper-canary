"use strict";
n.d(t, { C: () => u });
var r = n(627968),
    i = n(64700),
    a = n(868903),
    s = n(15626),
    o = n(778328),
    l = n(46751);
function u(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: u,
            selectionMode: c = "none",
            layout: d = "default",
            items: _,
            onRemove: f,
            children: p,
        } = e,
        [h, m] = i.useState(() => new Set()),
        g = i.useContext(s._);
    return (0, r.jsxs)(a.CR, {
        "aria-label": n,
        id: g?.controlId,
        "aria-describedby": g?.describedById,
        "data-layout": d,
        className: l.WD,
        selectionMode: c,
        selectedKeys: h,
        onSelectionChange: m,
        disabledKeys: u,
        onRemove: f,
        children: [
            (0, r.jsx)(a.LY, {
                ref: t,
                className: l.Tw,
                children: _.map((e) =>
                    (0, i.createElement)(o.v, { ...e, key: e.id, layout: d, accessibilityHint: e.accessibilityHint }),
                ),
            }),
            p,
        ],
    });
}
