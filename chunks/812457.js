n.d(t, { j: () => l }), n(388685);
var r = n(192379),
    i = n(442837),
    a = n(607070),
    o = n(451478);
let s = 1000,
    l = (e, t) => {
        let n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            l = (0, i.e7)([o.Z], () => o.Z.isFocused()),
            [c, u] = r.useState(!1),
            d = r.useRef(null);
        return (
            r.useEffect(() => {
                clearTimeout(d.current), (d.current = null);
                let r = !n && !t,
                    i = l && (e || r);
                i && n
                    ? (d.current = window.setTimeout(() => {
                          u(!0);
                      }, s))
                    : u(i);
            }, [l, e, n, t]),
            r.useEffect(() => () => clearTimeout(d.current), []),
            { canAnimate: c }
        );
    };
