n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(52133),
    s = n(290863),
    o = n(583846),
    l = n(818348);

function c(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (0, a.v)([...t.current], [...n]) || (t.current = n), t.current;
        }, [e]),
        c = (0, i.yK)([s.A], () =>
            Array.from(n).filter((e) => {
                let t = s.A.getStatus(e);
                return null !== t && [l.cl.OFFLINE, l.cl.INVISIBLE].includes(t);
            }),
        );
    return r.useMemo(() => {
        let t = new Set(c);
        return null == e ? void 0 : e.filter((e) => !(0, o.JM)(e) || !t.has(e.author_id));
    }, [e, c]);
}
