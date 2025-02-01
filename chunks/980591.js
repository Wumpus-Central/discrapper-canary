n.d(t, { Z: () => r });
var i = n(192379);
let r = (e, t) => {
    let n = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (null === t) return;
            let e = setTimeout(() => n.current(), t);
            return () => clearTimeout(e);
        }, [t, n]);
};
