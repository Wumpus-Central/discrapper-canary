n.d(t, { M: () => i });
var a = n(473749),
    r = n(660384);
function i() {
    let e = a.useRef(new r.Z()),
        t = a.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: a.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t,
    };
}
