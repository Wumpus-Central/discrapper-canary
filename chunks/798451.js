n.d(t, { K: () => a });
var r = n(849572),
    i = n(647438);
function a(e, t, n) {
    let a = (0, i.useMemo)(() => new (0, r.y)(), []),
        { children: o, items: s, collection: l } = e;
    return (0, i.useMemo)(
        () =>
            l ||
            t(
                a.build(
                    {
                        children: o,
                        items: s,
                    },
                    n,
                ),
            ),
        [a, o, s, l, n, t],
    );
}
