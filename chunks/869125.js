"use strict";
n.d(t, { y: () => o });
var r = n(564949),
    i = n(138026),
    s = n(74172),
    a = n(64700);
function o(e) {
    let { selectionManager: t, collection: n, disabledKeys: o, ref: l, keyboardDelegate: u, layoutDelegate: c } = e,
        d = (0, s.Q)({ usage: "search", sensitivity: "base" }),
        _ = t.disabledBehavior,
        f = (0, a.useMemo)(
            () =>
                u ||
                new (0, i.n)({
                    collection: n,
                    disabledKeys: o,
                    disabledBehavior: _,
                    ref: l,
                    collator: d,
                    layoutDelegate: c,
                }),
            [u, c, n, o, l, d, _],
        ),
        { collectionProps: p } = (0, r.y)({ ...e, ref: l, selectionManager: t, keyboardDelegate: f });
    return { listProps: p };
}
