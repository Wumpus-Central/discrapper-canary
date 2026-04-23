"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    s = n(52133),
    a = n(290863),
    o = n(583846),
    l = n(818348);
function u(e) {
    let t = r.useRef(new Set()),
        n = r.useMemo(() => {
            let n = new Set(e?.map((e) => e.author_id));
            return (0, s.v)([...t.current], [...n]) || (t.current = n), t.current;
        }, [e]),
        u = (0, i.yK)([a.A], () =>
            Array.from(n).filter((e) => {
                let t = a.A.getStatus(e);
                return null !== t && [l.cl.OFFLINE, l.cl.INVISIBLE].includes(t);
            }),
        );
    return r.useMemo(() => {
        let t = new Set(u);
        return e?.filter((e) => !(0, o.JM)(e) || !t.has(e.author_id));
    }, [e, u]);
}
