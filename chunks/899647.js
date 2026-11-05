t.d(l, { G: () => a });
var s = t(582128),
    r = t(120692);
class n {
    top = new r.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
}
function a() {
    let e = s.useRef(new n()),
        l = s.useCallback((l) => {
            e.current.handleScroll(l);
        }, []);
    return {
        resetScrollPosition: s.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: l,
    };
}
