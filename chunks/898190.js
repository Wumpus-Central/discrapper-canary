n.d(t, {
    A: () => i,
});
var r = n(64700),
    l = n(181940);

function i(e, t) {
    let { isLoading: n, error: i, onToggle: a } = (0, l.A)(e, t);
    return {
        isLoading: n,
        error: i,
        onDeactivate: r.useCallback(() => a(!1), [a]),
    };
}
