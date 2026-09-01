"use strict";
n.d(t, { l: () => f, A: () => p });
var l = n(582128),
    i = n(17928),
    s = n(99753),
    r = n(734057),
    a = n(543465),
    o = n(574520);
let u = [];
var c = n(52133),
    d = n(290863),
    h = n(583846),
    m = n(818348);
function f(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function p(e) {
    var t, n, p;
    let g,
        x,
        A,
        E,
        C,
        I,
        y,
        { id: S, unrankedEntries: N = !1 } = e,
        { feed: v, filters: _ } = (0, i.cf)([s.A], () => ({ feed: s.A.getFeed(S), filters: s.A.getFilters() })),
        T = l.useMemo(() => {
            let e = N ? v?.unranked_game_entries.map((e) => e.content) : v?.entries.map((e) => e.content);
            return null != _ ? e?.filter((e) => f(_, e)) : e;
        }, [v, _, N]);
    return (
        (t = T),
        (g = (0, i.bG)([r.A], () => r.A.getPrivateChannelsVersion())),
        (x = (0, i.bG)([r.A], () => r.A.getMutableDMsByUserIds(), [g])),
        (A = (0, i.bG)([a.Ay], () => a.Ay.getMutedChannels(null))),
        (E = l.useMemo(() => {
            let e = new Set();
            for (let t in x) {
                let n = x[t];
                null != n && A.has(n) && e.add(t);
            }
            return e;
        }, [x, A])),
        (n = T =
            l.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (E.has(t)) return !1;
                        return !0;
                    }),
                [t, E],
            )),
        (p = T = (0, i.yK)([o.A], () => (null == n ? u : n.filter(o.A.canRenderContent)), [n])),
        (C = l.useRef(new Set())),
        (I = l.useMemo(() => {
            let e = new Set(p?.map((e) => e.author_id));
            return (0, c.v)([...C.current], [...e]) || (C.current = e), C.current;
        }, [p])),
        (y = (0, i.yK)([d.A], () =>
            Array.from(I).filter((e) => {
                let t = d.A.getStatus(e);
                return null !== t && [m.cl.OFFLINE, m.cl.INVISIBLE].includes(t);
            }),
        )),
        (T = l.useMemo(() => {
            let e = new Set(y);
            return p?.filter((t) => !(0, h.JM)(t) || !e.has(t.author_id));
        }, [p, y]))
    );
}
