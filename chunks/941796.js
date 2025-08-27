n.d(t, { z: () => a });
var r = n(300941),
    i = n(647438);
function a(e, t, n, a) {
    let o = (0, r.i)(n),
        s = null == n;
    (0, i.useEffect)(() => {
        if (s || !e.current) return;
        let n = e.current;
        return (
            n.addEventListener(t, o, a),
            () => {
                n.removeEventListener(t, o, a);
            }
        );
    }, [e, t, a, s, o]);
}
