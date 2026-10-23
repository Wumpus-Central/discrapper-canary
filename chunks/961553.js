e.d(t, { A: () => u });
var i = e(582128),
    l = e(371169),
    c = e(535466);
function u(n) {
    let t = (0, c.Ay)(n);
    i.useEffect(() => {
        (0, l._b)(n).catch(() => {});
    }, [n]);
    let [e, u] = i.useState(null),
        [r, a] = i.useState(null),
        p = r ?? t.description,
        o = p.trim(),
        s = o !== t.description.trim() ? o : null,
        d = i.useMemo(() => ({ ...(null != e ? { icon: e } : {}), ...(null != s ? { description: s } : {}) }), [e, s]),
        g = i.useCallback(() => {
            (u(null), a(null));
        }, []);
    return {
        iconURL: e ?? t.iconURL,
        setIcon: u,
        description: p,
        setDescription: a,
        changes: d,
        changed: null != e || null != s,
        commit: g,
    };
}
