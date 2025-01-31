n.d(t, { j: () => l }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(607070),
    s = n(451478);
let o = 1000,
    l = (e, t) => {
        let n = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
            l = (0, r.e7)([s.Z], () => s.Z.isFocused()),
            [u, c] = i.useState(!1),
            d = i.useRef(null);
        return (
            i.useEffect(() => {
                clearTimeout(d.current), (d.current = null);
                let i = !n && !t,
                    r = l && (e || i);
                r && n
                    ? (d.current = window.setTimeout(() => {
                          c(!0);
                      }, o))
                    : c(r);
            }, [l, e, n, t]),
            i.useEffect(() => () => clearTimeout(d.current), []),
            { canAnimate: u }
        );
    };
