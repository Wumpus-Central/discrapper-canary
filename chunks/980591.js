n.d(t, { Z: () => r });
var a = n(473749);
let r = (e, t) => {
    let n = (0, a.useRef)(e);
    (0, a.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, a.useEffect)(() => {
            if (null === t) return;
            let e = setTimeout(() => n.current(), t);
            return () => clearTimeout(e);
        }, [t, n]);
};
