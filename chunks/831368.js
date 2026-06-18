s.d(t, { I: () => a });
var n = s(64700),
    i = s(203879);
function a(e, t) {
    let [s, a] = n.useState(t),
        l = n.useCallback((e) => {
            e.isIntersecting && a(!0);
        }, []),
        r = n.useMemo(() => ({ root: e ?? null, threshold: 0, rootMargin: "900px 900px 900px 900px" }), [e]),
        o = n.useMemo(() => !s && null != e, [s, e]);
    return { visibilityElementRef: (0, i.B)(l, r, o), almostVisibleInViewport: s };
}
