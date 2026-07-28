"use strict";
n.d(t, { l: () => A, A: () => h });
var i = n(582128),
    r = n(17928),
    a = n(99753),
    s = n(734057),
    l = n(543465),
    o = n(574520);
let d = [];
var c = n(52133),
    u = n(290863),
    _ = n(583846),
    E = n(818348);
function A(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function h(e) {
    var t, n, h;
    let I,
        f,
        p,
        T,
        m,
        g,
        S,
        { id: N, unrankedEntries: C = !1 } = e,
        { feed: O, filters: R } = (0, r.cf)([a.A], () => ({ feed: a.A.getFeed(N), filters: a.A.getFilters() })),
        L = i.useMemo(() => {
            let e = C ? O?.unranked_game_entries.map((e) => e.content) : O?.entries.map((e) => e.content);
            return null != R ? e?.filter((e) => A(R, e)) : e;
        }, [O, R, C]);
    return (
        (t = L),
        (I = (0, r.bG)([s.A], () => s.A.getPrivateChannelsVersion())),
        (f = (0, r.bG)([s.A], () => s.A.getMutableDMsByUserIds(), [I])),
        (p = (0, r.bG)([l.Ay], () => l.Ay.getMutedChannels(null))),
        (T = i.useMemo(() => {
            let e = new Set();
            for (let t in f) {
                let n = f[t];
                null != n && p.has(n) && e.add(t);
            }
            return e;
        }, [f, p])),
        (n = L =
            i.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (T.has(t)) return !1;
                        return !0;
                    }),
                [t, T],
            )),
        (h = L = (0, r.yK)([o.A], () => (null == n ? d : n.filter(o.A.canRenderContent)), [n])),
        (m = i.useRef(new Set())),
        (g = i.useMemo(() => {
            let e = new Set(h?.map((e) => e.author_id));
            return (0, c.v)([...m.current], [...e]) || (m.current = e), m.current;
        }, [h])),
        (S = (0, r.yK)([u.A], () =>
            Array.from(g).filter((e) => {
                let t = u.A.getStatus(e);
                return null !== t && [E.cl.OFFLINE, E.cl.INVISIBLE].includes(t);
            }),
        )),
        (L = i.useMemo(() => {
            let e = new Set(S);
            return h?.filter((t) => !(0, _.JM)(t) || !e.has(t.author_id));
        }, [h, S]))
    );
}
