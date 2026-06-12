c.d(t, { A: () => i });
var e = c(64700),
    s = c(181940);
function i(a, t) {
    let { isLoading: c, error: i, onToggle: p } = (0, s.A)(a, t);
    return { isLoading: c, error: i, onDeactivate: e.useCallback(() => p(!1), [p]) };
}
