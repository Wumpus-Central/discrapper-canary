n.d(e, { I: () => l });
var s = n(582128),
    i = n(203879);
function l(t, e) {
    let [n, l] = s.useState(e),
        a = s.useCallback((t) => {
            t.isIntersecting && l(!0);
        }, []),
        r = s.useMemo(() => ({ root: t ?? null, threshold: 0, rootMargin: "900px 900px 900px 900px" }), [t]),
        o = s.useMemo(() => !n && null != t, [n, t]);
    return { visibilityElementRef: (0, i.B)(a, r, o), almostVisibleInViewport: n };
}
