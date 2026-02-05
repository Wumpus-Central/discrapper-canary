n.d(t, { A: () => s });
var i = n(64700),
    l = n(181940);
function s(e, t) {
    let { isLoading: n, error: s, onToggle: a } = (0, l.A)(e, t);
    return { isLoading: n, error: s, onDeactivate: i.useCallback(() => a(!1), [a]) };
}
