var e = l(582128),
    r = l(233470),
    u = l(535466);
l.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, u.Ay)(t);
            e.useEffect(() => {
                (0, r._b)(t).catch(() => {});
            }, [t]);
            let [l, a] = e.useState(null),
                [i, s] = e.useState(null),
                c = i ?? n.description,
                o = c.trim(),
                d = o !== n.description.trim() ? o : null,
                f = e.useMemo(
                    () => ({ ...(null != l ? { icon: l } : {}), ...(null != d ? { description: d } : {}) }),
                    [l, d],
                ),
                g = e.useCallback(() => {
                    (a(null), s(null));
                }, []);
            return {
                iconURL: l ?? n.iconURL,
                setIcon: a,
                description: c,
                setDescription: s,
                changes: f,
                changed: null != l || null != d,
                commit: g,
            };
        },
    },
);
