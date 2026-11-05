var s = n(582128),
    i = n(203879);
n.d(
    t,
    {},
    {
        I: function (e, t) {
            let [n, l] = s.useState(t),
                r = s.useCallback((e) => {
                    e.isIntersecting && l(!0);
                }, []),
                a = s.useMemo(() => ({ root: e ?? null, threshold: 0, rootMargin: "900px 900px 900px 900px" }), [e]),
                o = s.useMemo(() => !n && null != e, [n, e]);
            return { visibilityElementRef: (0, i.B)(r, a, o), almostVisibleInViewport: n };
        },
    },
);
