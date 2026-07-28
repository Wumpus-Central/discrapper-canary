s.d(e, { I: () => l });
var n = s(582128),
    i = s(203879);
function l(t, e) {
    let [s, l] = n.useState(e),
        a = n.useCallback((t) => {
            t.isIntersecting && l(!0);
        }, []),
        r = n.useMemo(() => ({ root: t ?? null, threshold: 0, rootMargin: "900px 900px 900px 900px" }), [t]),
        o = n.useMemo(() => !s && null != t, [s, t]);
    return { visibilityElementRef: (0, i.B)(a, r, o), almostVisibleInViewport: s };
}
