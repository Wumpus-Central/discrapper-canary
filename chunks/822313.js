n.d(t, { A: () => i });
var l = n(582128);
function i(e, t) {
    let [n, i] = l.useState(null),
        [r, a] = l.useState(e);
    return (
        e !== r && (a(e), i(null)),
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
