l.d(t, { A: () => a });
var n = l(582128);
function a(e, t) {
    let [l, a] = n.useState(null),
        [i, r] = n.useState(e);
    return (
        e !== i && (r(e), a(null)),
        [
            l ?? e,
            n.useCallback(
                (e) => {
                    (a(e), t(e));
                },
                [t],
            ),
        ]
    );
}
