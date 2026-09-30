n.d(t, { l: () => p, A: () => f });
var l = n(582128),
    i = n(17928),
    s = n(99753),
    r = n(734057),
    a = n(543465),
    o = n(574520);
let u = [];
var c = n(52133),
    d = n(290863),
    m = n(583846),
    h = n(818348);
function p(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function f(e) {
    var t, n, f;
    let g,
        x,
        A,
        C,
        E,
        I,
        y,
        { id: S, unrankedEntries: v = !1 } = e,
        { feed: N, filters: _ } = (0, i.cf)([s.A], () => ({ feed: s.A.getFeed(S), filters: s.A.getFilters() })),
        j = l.useMemo(() => {
            let e = v ? N?.unranked_game_entries.map((e) => e.content) : N?.entries.map((e) => e.content);
            return null != _ ? e?.filter((e) => p(_, e)) : e;
        }, [N, _, v]);
    return (
        (t = j),
        (g = (0, i.bG)([r.A], () => r.A.getPrivateChannelsVersion())),
        (x = (0, i.bG)([r.A], () => r.A.getMutableDMsByUserIds(), [g])),
        (A = (0, i.bG)([a.Ay], () => a.Ay.getMutedChannels(null))),
        (C = l.useMemo(() => {
            let e = new Set();
            for (let t in x) {
                let n = x[t];
                null != n && A.has(n) && e.add(t);
            }
            return e;
        }, [x, A])),
        (n = j =
            l.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (C.has(t)) return !1;
                        return !0;
                    }),
                [t, C],
            )),
        (f = j = (0, i.yK)([o.A], () => (null == n ? u : n.filter(o.A.canRenderContent)), [n])),
        (E = l.useRef(new Set())),
        (I = l.useMemo(() => {
            let e = new Set(f?.map((e) => e.author_id));
            return ((0, c.v)([...E.current], [...e]) || (E.current = e), E.current);
        }, [f])),
        (y = (0, i.yK)([d.A], () =>
            Array.from(I).filter((e) => {
                let t = d.A.getStatus(e);
                return null !== t && [h.cl.OFFLINE, h.cl.INVISIBLE].includes(t);
            }),
        )),
        (j = l.useMemo(() => {
            let e = new Set(y);
            return f?.filter((t) => !(0, m.JM)(t) || !e.has(t.author_id));
        }, [f, y]))
    );
}
