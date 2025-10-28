n.d(t, { Z: () => a });
var r = n(647438);
let a = (e, t) => {
    let n = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            if (null === t) return;
            let e = setTimeout(() => n.current(), t);
            return () => clearTimeout(e);
        }, [t, n]);
};
