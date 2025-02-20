n.d(t, { M: () => i });
var r = n(192379),
    a = n(660384);
function i() {
    let e = r.useRef(new a.Z()),
        t = r.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: r.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t
    };
}
