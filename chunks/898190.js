n.d(t, { A: () => l });
var r = n(64700),
    i = n(181940);
function l(e, t) {
    let { isLoading: n, error: l, onToggle: s } = (0, i.A)(e, t);
    return { isLoading: n, error: l, onDeactivate: r.useCallback(() => s(!1), [s]) };
}
