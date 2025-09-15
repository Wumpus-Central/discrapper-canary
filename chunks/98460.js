n.d(t, { Z: () => a }), n(388685), n(290780);
var r = n(647438),
    i = n(918222);
function a() {
    let [e, t] = (0, i.R)("RecentDismissibleOverrides", []),
        n = (0, r.useCallback)(
            (n) => {
                let r = new Set(e);
                r.delete(n);
                let i = Array.from(r).slice(0, 4);
                i.unshift(n), t(i);
            },
            [e, t],
        );
    return [e, n];
}
