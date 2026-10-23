n.d(t, { b: () => r, x: () => o });
var i = n(582128);
let a = new Set();
function r(e, t) {
    for (let n of a) n(e, t);
}
function o(e, t) {
    let n = i.useRef(t);
    (i.useLayoutEffect(() => {
        n.current = t;
    }),
        i.useEffect(() => {
            if (null == e) return;
            let t = (t, i) => {
                t === e && n.current(i);
            };
            return (
                a.add(t),
                () => {
                    a.delete(t);
                }
            );
        }, [e]));
}
