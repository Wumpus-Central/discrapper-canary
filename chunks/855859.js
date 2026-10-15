n.d(t, { b: () => a, x: () => i });
var r = n(582128);
let o = new Set();
function a(e, t) {
    for (let n of o) n(e, t);
}
function i(e, t) {
    let n = r.useRef(t);
    (r.useLayoutEffect(() => {
        n.current = t;
    }),
        r.useEffect(() => {
            if (null == e) return;
            let t = (t, r) => {
                t === e && n.current(r);
            };
            return (
                o.add(t),
                () => {
                    o.delete(t);
                }
            );
        }, [e]));
}
