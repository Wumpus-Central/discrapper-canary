t.d(n, {
    M: function () {
        return r;
    }
});
var a = t(192379),
    i = t(397341);
function r() {
    let e = a.useRef(new i.Z()),
        n = a.useCallback((n) => {
            e.current.handleScroll(n);
        }, []);
    return {
        resetScrollPosition: a.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: n
    };
}
