n.d(t, {
    J: () => o,
});
var r,
    i = n(3388),
    a = n(64700);
let s = null != (r = a.useInsertionEffect) ? r : i.N;

function o(e) {
    let t = (0, a.useRef)(null);
    return (
        s(() => {
            t.current = e;
        }, [e]),
        (0, a.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
        }, [])
    );
}
