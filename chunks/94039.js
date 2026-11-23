l.d(n, { A: () => r });
var t = l(582128),
    i = l(435558),
    a = l.n(i);
function r(e) {
    let { enabled: n, isInteracting: l, items: i, preload: r } = e,
        [s, u] = t.useState(null),
        d = t.useRef(null),
        o = t.useRef(r);
    return (
        t.useEffect(() => {
            o.current = r;
        }, [r]),
        t.useEffect(() => {
            if (!n || 0 === i.length || null != d.current) return;
            let e = (function (e) {
                let { shuffle: n = a().shuffle, maxSize: l = 25 } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n(e).slice(0, l),
                    i = 0;
                return {
                    current: () => (0 === t.length ? null : t[i % t.length]),
                    advance: () => {
                        0 !== t.length && (i = (i + 1) % t.length);
                    },
                    get size() {
                        return t.length;
                    },
                };
            })(i);
            d.current = e;
            let l = e.current();
            null != l && o.current?.(l);
        }, [n, i]),
        t.useEffect(() => {
            let e = d.current;
            if (!n || !l || null == e) return void u(null);
            (u(e.current()), e.advance());
            let t = e.current();
            null != t && o.current?.(t);
        }, [l]),
        n && l ? s : null
    );
}
