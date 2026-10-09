n.d(t, { b: () => o, x: () => i });
var r = n(582128);
let s = new Set();
function o(e, t) {
    for (let n of s) n(e, t);
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
                s.add(t),
                () => {
                    s.delete(t);
                }
            );
        }, [e]));
}
