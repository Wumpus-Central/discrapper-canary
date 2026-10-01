n.d(t, { l: () => f, A: () => h });
var r = n(582128),
    i = n(17928),
    u = n(99753),
    a = n(734057),
    l = n(543465),
    s = n(574520);
let o = [];
var d = n(52133),
    c = n(290863),
    p = n(583846),
    A = n(818348);
function f(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function h(e) {
    var t, n, h;
    let _,
        y,
        m,
        E,
        M,
        v,
        C,
        { id: I, unrankedEntries: L = !1 } = e,
        { feed: g, filters: w } = (0, i.cf)([u.A], () => ({ feed: u.A.getFeed(I), filters: u.A.getFilters() })),
        S = r.useMemo(() => {
            let e = L ? g?.unranked_game_entries.map((e) => e.content) : g?.entries.map((e) => e.content);
            return null != w ? e?.filter((e) => f(w, e)) : e;
        }, [g, w, L]);
    return (
        (t = S),
        (_ = (0, i.bG)([a.A], () => a.A.getPrivateChannelsVersion())),
        (y = (0, i.bG)([a.A], () => a.A.getMutableDMsByUserIds(), [_])),
        (m = (0, i.bG)([l.Ay], () => l.Ay.getMutedChannels(null))),
        (E = r.useMemo(() => {
            let e = new Set();
            for (let t in y) {
                let n = y[t];
                null != n && m.has(n) && e.add(t);
            }
            return e;
        }, [y, m])),
        (n = S =
            r.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (E.has(t)) return !1;
                        return !0;
                    }),
                [t, E],
            )),
        (h = S = (0, i.yK)([s.A], () => (null == n ? o : n.filter(s.A.canRenderContent)), [n])),
        (M = r.useRef(new Set())),
        (v = r.useMemo(() => {
            let e = new Set(h?.map((e) => e.author_id));
            return ((0, d.v)([...M.current], [...e]) || (M.current = e), M.current);
        }, [h])),
        (C = (0, i.yK)([c.A], () =>
            Array.from(v).filter((e) => {
                let t = c.A.getStatus(e);
                return null !== t && [A.cl.OFFLINE, A.cl.INVISIBLE].includes(t);
            }),
        )),
        (S = r.useMemo(() => {
            let e = new Set(C);
            return h?.filter((t) => !(0, p.JM)(t) || !e.has(t.author_id));
        }, [h, C]))
    );
}
