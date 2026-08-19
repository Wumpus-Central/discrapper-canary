a.d(e, { A: () => r });
var s = a(582128),
    i = a(181940);
function r(t, e) {
    let { isLoading: a, error: r, onToggle: l } = (0, i.A)(t, e);
    return { isLoading: a, error: r, onDeactivate: s.useCallback(() => l(!1), [l]) };
}
