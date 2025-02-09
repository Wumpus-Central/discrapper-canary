n.d(t, { M: () => r });
var i = n(192379),
    a = n(660384);
function r() {
    let e = i.useRef(new a.Z()),
        t = i.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: i.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t
    };
}
