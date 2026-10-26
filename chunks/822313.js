n.d(t, { A: () => a });
var l = n(582128);
function a(e, t) {
    let [n, a] = l.useState(null),
        [i, r] = l.useState(e);
    return (
        e !== i && (r(e), a(null)),
        [
            n ?? e,
            l.useCallback(
                (e) => {
                    (a(e), t(e));
                },
                [t],
            ),
        ]
    );
}
