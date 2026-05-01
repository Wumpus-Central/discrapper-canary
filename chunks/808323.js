"use strict";
n.d(t, { l: () => h, A: () => p });
var i = n(64700),
    r = n(17928),
    s = n(99753),
    a = n(734057),
    o = n(543465),
    l = n(574520);
let u = [];
var c = n(52133),
    d = n(290863),
    _ = n(832384),
    f = n(818348);
function h(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function p(e) {
    var t, n, p;
    let E,
        m,
        g,
        A,
        I,
        T,
        S,
        { id: N, unrankedEntries: y = !1 } = e,
        { feed: C, filters: v } = (0, r.cf)([s.A], () => ({ feed: s.A.getFeed(N), filters: s.A.getFilters() })),
        O = i.useMemo(() => {
            let e = y ? C?.unranked_game_entries.map((e) => e.content) : C?.entries.map((e) => e.content);
            return null != v ? e?.filter((e) => h(v, e)) : e;
        }, [C, v, y]);
    return (
        (t = O),
        (E = (0, r.bG)([a.A], () => a.A.getPrivateChannelsVersion())),
        (m = (0, r.bG)([a.A], () => a.A.getMutableDMsByUserIds(), [E])),
        (g = (0, r.bG)([o.Ay], () => o.Ay.getMutedChannels(null))),
        (A = i.useMemo(() => {
            let e = new Set();
            for (let t in m) {
                let n = m[t];
                null != n && g.has(n) && e.add(t);
            }
            return e;
        }, [m, g])),
        (n = O =
            i.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (A.has(t)) return !1;
                        return !0;
                    }),
                [t, A],
            )),
        (p = O = (0, r.yK)([l.A], () => (null == n ? u : n.filter(l.A.canRenderContent)), [n])),
        (I = i.useRef(new Set())),
        (T = i.useMemo(() => {
            let e = new Set(p?.map((e) => e.author_id));
            return (0, c.v)([...I.current], [...e]) || (I.current = e), I.current;
        }, [p])),
        (S = (0, r.yK)([d.A], () =>
            Array.from(T).filter((e) => {
                let t = d.A.getStatus(e);
                return null !== t && [f.cl.OFFLINE, f.cl.INVISIBLE].includes(t);
            }),
        )),
        (O = i.useMemo(() => {
            let e = new Set(S);
            return p?.filter((t) => !(0, _.JM)(t) || !e.has(t.author_id));
        }, [p, S]))
    );
}
