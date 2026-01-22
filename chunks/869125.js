n.d(t, { y: () => o });
var r = n(564949),
    i = n(138026),
    a = n(74172),
    s = n(64700);
function o(e) {
    let { selectionManager: t, collection: n, disabledKeys: o, ref: l, keyboardDelegate: c, layoutDelegate: u } = e,
        d = (0, a.Q)({
            usage: "search",
            sensitivity: "base",
        }),
        f = t.disabledBehavior,
        p = (0, s.useMemo)(
            () =>
                c ||
                new (0, i.n)({
                    collection: n,
                    disabledKeys: o,
                    disabledBehavior: f,
                    ref: l,
                    collator: d,
                    layoutDelegate: u,
                }),
            [c, u, n, o, l, d, f],
        ),
        { collectionProps: _ } = (0, r.y)({
            ...e,
            ref: l,
            selectionManager: t,
            keyboardDelegate: p,
        });
    return { listProps: _ };
}
