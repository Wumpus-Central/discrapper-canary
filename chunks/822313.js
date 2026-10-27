n.d(t, { A: () => l });
var r = n(582128);
function l(e, t) {
    let [n, l] = r.useState(null),
        [i, a] = r.useState(e);
    return (
        e !== i && (a(e), l(null)),
        [
            n ?? e,
            r.useCallback(
                (e) => {
                    (l(e), t(e));
                },
                [t],
            ),
        ]
    );
}
