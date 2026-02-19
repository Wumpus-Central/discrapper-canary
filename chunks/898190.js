"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(181940);
function l(e, t) {
    let { isLoading: n, error: l, onToggle: r } = (0, s.A)(e, t);
    return { isLoading: n, error: l, onDeactivate: i.useCallback(() => r(!1), [r]) };
}
