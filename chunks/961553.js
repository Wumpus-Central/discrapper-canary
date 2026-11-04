var e = i(582128),
    l = i(371169),
    u = i(535466);
i.d(
    t,
    {},
    {
        A: function (n) {
            let t = (0, u.Ay)(n);
            e.useEffect(() => {
                (0, l._b)(n).catch(() => {});
            }, [n]);
            let [i, c] = e.useState(null),
                [r, a] = e.useState(null),
                p = r ?? t.description,
                o = p.trim(),
                s = o !== t.description.trim() ? o : null,
                d = e.useMemo(
                    () => ({ ...(null != i ? { icon: i } : {}), ...(null != s ? { description: s } : {}) }),
                    [i, s],
                ),
                g = e.useCallback(() => {
                    (c(null), a(null));
                }, []);
            return {
                iconURL: i ?? t.iconURL,
                setIcon: c,
                description: p,
                setDescription: a,
                changes: d,
                changed: null != i || null != s,
                commit: g,
            };
        },
    },
);
