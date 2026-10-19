n.d(t, { b: () => i, x: () => o });
var r = n(582128);
let a = new Set();
function i(e, t) {
    for (let n of a) n(e, t);
}
function o(e, t) {
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
                a.add(t),
                () => {
                    a.delete(t);
                }
            );
        }, [e]));
}
