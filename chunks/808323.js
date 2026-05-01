n.d(t, { l: () => A, A: () => I });
var i = n(64700),
    a = n(17928),
    r = n(99753),
    s = n(734057),
    l = n(543465),
    o = n(574520);
let d = [];
var c = n(52133),
    _ = n(290863),
    E = n(583846),
    u = n(818348);
function A(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function I(e) {
    var t, n, I;
    let T,
        h,
        S,
        N,
        f,
        p,
        m,
        { id: O, unrankedEntries: C = !1 } = e,
        { feed: R, filters: g } = (0, a.cf)([r.A], () => ({ feed: r.A.getFeed(O), filters: r.A.getFilters() })),
        L = i.useMemo(() => {
            let e = C ? R?.unranked_game_entries.map((e) => e.content) : R?.entries.map((e) => e.content);
            return null != g ? e?.filter((e) => A(g, e)) : e;
        }, [R, g, C]);
    return (
        (t = L),
        (T = (0, a.bG)([s.A], () => s.A.getPrivateChannelsVersion())),
        (h = (0, a.bG)([s.A], () => s.A.getMutableDMsByUserIds(), [T])),
        (S = (0, a.bG)([l.Ay], () => l.Ay.getMutedChannels(null))),
        (N = i.useMemo(() => {
            let e = new Set();
            for (let t in h) {
                let n = h[t];
                null != n && S.has(n) && e.add(t);
            }
            return e;
        }, [h, S])),
        (n = L =
            i.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (N.has(t)) return !1;
                        return !0;
                    }),
                [t, N],
            )),
        (I = L = (0, a.yK)([o.A], () => (null == n ? d : n.filter(o.A.canRenderContent)), [n])),
        (f = i.useRef(new Set())),
        (p = i.useMemo(() => {
            let e = new Set(I?.map((e) => e.author_id));
            return (0, c.v)([...f.current], [...e]) || (f.current = e), f.current;
        }, [I])),
        (m = (0, a.yK)([_.A], () =>
            Array.from(p).filter((e) => {
                let t = _.A.getStatus(e);
                return null !== t && [u.cl.OFFLINE, u.cl.INVISIBLE].includes(t);
            }),
        )),
        (L = i.useMemo(() => {
            let e = new Set(m);
            return I?.filter((t) => !(0, E.JM)(t) || !e.has(t.author_id));
        }, [I, m]))
    );
}
