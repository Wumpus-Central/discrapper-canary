r.d(n, {
    j: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(607070),
    l = r(451478);
let u = 1000,
    c = (e, n) => {
        let r = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
            i = (0, o.e7)([l.Z], () => l.Z.isFocused()),
            [c, d] = a.useState(!1),
            f = a.useRef(null);
        return (
            a.useEffect(() => {
                clearTimeout(f.current), (f.current = null);
                let a = !r && !n,
                    o = i && (e || a);
                o && r
                    ? (f.current = window.setTimeout(() => {
                          d(!0);
                      }, u))
                    : d(o);
            }, [i, e, r, n]),
            a.useEffect(() => () => clearTimeout(f.current), []),
            { canAnimate: c }
        );
    };
