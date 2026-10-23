n.d(t, { A: () => i });
var l = n(582128);
function i(e, t) {
    let [n, i] = l.useState(null),
        [a, r] = l.useState(e);
    return (
        e !== a && (r(e), i(null)),
        [
            n ?? e,
            l.useCallback(
                (e) => {
                    (i(e), t(e));
                },
                [t],
            ),
        ]
    );
}
