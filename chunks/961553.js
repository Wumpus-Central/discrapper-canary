var l = e(582128),
    r = e(233470),
    i = e(535466);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, i.Ay)(t);
            l.useEffect(() => {
                (0, r._b)(t).catch(() => {});
            }, [t]);
            let [e, u] = l.useState(null),
                [a, c] = l.useState(null),
                d = a ?? n.description,
                s = d.trim(),
                o = s !== n.description.trim() ? s : null,
                f = l.useMemo(
                    () => ({ ...(null != e ? { icon: e } : {}), ...(null != o ? { description: o } : {}) }),
                    [e, o],
                ),
                p = l.useCallback(() => {
                    (u(null), c(null));
                }, []);
            return {
                iconURL: e ?? n.iconURL,
                setIcon: u,
                description: d,
                setDescription: c,
                changes: f,
                changed: null != e || null != o,
                commit: p,
            };
        },
    },
);
