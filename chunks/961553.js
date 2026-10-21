n.d(t, { A: () => a });
var l = n(582128),
    i = n(371169),
    r = n(535466);
function a(e) {
    let t = (0, r.Ay)(e);
    l.useEffect(() => {
        (0, i._b)(e).catch(() => {});
    }, [e]);
    let [n, a] = l.useState(null),
        [u, s] = l.useState(null),
        o = u ?? t.description,
        d = o.trim(),
        c = d !== t.description.trim() ? d : null,
        f = l.useMemo(() => ({ ...(null != n ? { icon: n } : {}), ...(null != c ? { description: c } : {}) }), [n, c]),
        p = l.useCallback(() => {
            (a(null), s(null));
        }, []);
    return {
        iconURL: n ?? t.iconURL,
        setIcon: a,
        description: o,
        setDescription: s,
        changes: f,
        changed: null != n || null != c,
        commit: p,
    };
}
