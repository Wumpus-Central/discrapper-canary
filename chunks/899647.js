t.d(l, { G: () => a });
var n = t(582128),
    r = t(120692);
class s {
    top = new r.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
}
function a() {
    let e = n.useRef(new s()),
        l = n.useCallback((l) => {
            e.current.handleScroll(l);
        }, []);
    return {
        resetScrollPosition: n.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: l,
    };
}
