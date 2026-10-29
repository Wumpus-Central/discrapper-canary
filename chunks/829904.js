r.d(t, { J: () => a });
var n = r(811390),
    i = r(582128);
let o = i.useInsertionEffect ?? n.N;
function a(e) {
    let t = (0, i.useRef)(null);
    return (
        o(() => {
            t.current = e;
        }, [e]),
        (0, i.useCallback)(function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            let i = t.current;
            return i?.(...r);
        }, [])
    );
}
