n.d(t, { A: () => r });
var l = n(582128),
    i = n(371169),
    a = n(535466);
function r(e) {
    let t = (0, a.Ay)(e);
    l.useEffect(() => {
        (0, i._b)(e).catch(() => {});
    }, [e]);
    let [n, r] = l.useState(null),
        [u, s] = l.useState(null),
        o = u ?? t.description,
        d = o.trim(),
        c = d !== t.description.trim() ? d : null,
        f = l.useMemo(() => ({ ...(null != n ? { icon: n } : {}), ...(null != c ? { description: c } : {}) }), [n, c]),
        p = l.useCallback(() => {
            (r(null), s(null));
        }, []);
    return {
        iconURL: n ?? t.iconURL,
        setIcon: r,
        description: o,
        setDescription: s,
        changes: f,
        changed: null != n || null != c,
        commit: p,
    };
}
