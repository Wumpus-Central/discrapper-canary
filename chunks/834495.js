n.d(t, { _: () => s });
var r = n(705696),
    i = n(94280),
    a = n(191905),
    o = n(647438);
function s(e) {
    let { selectionManager: t, collection: n, disabledKeys: s, ref: l, keyboardDelegate: c, layoutDelegate: u } = e,
        d = (0, a.X)({
            usage: "search",
            sensitivity: "base",
        }),
        f = t.disabledBehavior,
        _ = (0, o.useMemo)(
            () =>
                c ||
                new (0, i.d)({
                    collection: n,
                    disabledKeys: s,
                    disabledBehavior: f,
                    ref: l,
                    collator: d,
                    layoutDelegate: u,
                }),
            [c, u, n, s, l, d, f],
        ),
        { collectionProps: p } = (0, r.g)({
            ...e,
            ref: l,
            selectionManager: t,
            keyboardDelegate: _,
        });
    return { listProps: p };
}
