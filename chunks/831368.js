var s = n(582128),
    i = n(203879);
n.d(
    t,
    {},
    {
        I: function (e, t) {
            let [n, l] = s.useState(t),
                a = s.useCallback((e) => {
                    e.isIntersecting && l(!0);
                }, []),
                r = s.useMemo(() => ({ root: e ?? null, threshold: 0, rootMargin: "900px 900px 900px 900px" }), [e]),
                o = s.useMemo(() => !n && null != e, [n, e]);
            return { visibilityElementRef: (0, i.B)(a, r, o), almostVisibleInViewport: n };
        },
    },
);
