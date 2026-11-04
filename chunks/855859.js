var r = n(582128);
let s = new Set();
n.d(
    t,
    {},
    {
        b: function (e, t) {
            for (let n of s) n(e, t);
        },
        x: function (e, t) {
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
        },
    },
);
