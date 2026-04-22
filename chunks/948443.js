n.d(t, { A: () => u });
var r = n(64700),
    l = n(311907),
    i = n(52133),
    a = n(290863),
    s = n(583846),
    o = n(818348);
function u(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(e?.map((e) => e.author_id));
            return (0, i.v)([...t.current], [...n]) || (t.current = n), t.current;
        }, [e]),
        u = (0, l.yK)([a.A], () =>
            Array.from(n).filter((e) => {
                let t = a.A.getStatus(e);
                return null !== t && [o.cl.OFFLINE, o.cl.INVISIBLE].includes(t);
            }),
        );
    return r.useMemo(() => {
        let t = new Set(u);
        return e?.filter((e) => !(0, s.JM)(e) || !t.has(e.author_id));
    }, [e, u]);
}
