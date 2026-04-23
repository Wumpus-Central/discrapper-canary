n.d(t, { l: () => I, A: () => A });
var i = n(64700),
    r = n(17928),
    a = n(99753),
    s = n(734057),
    _ = n(543465),
    l = n(352139);
let o = [];
var E = n(52133),
    d = n(290863),
    c = n(583846),
    u = n(818348);
function I(e, t) {
    let { types: n } = e;
    return null == n || !!n.has(t.content_type);
}
function A(e) {
    var t, n, A;
    let T,
        S,
        N,
        O,
        R,
        f,
        C,
        { id: p, unrankedEntries: m = !1 } = e,
        { feed: L, filters: D } = (0, r.cf)([a.A], () => ({ feed: a.A.getFeed(p), filters: a.A.getFilters() })),
        h = i.useMemo(() => {
            let e = m ? L?.unranked_game_entries.map((e) => e.content) : L?.entries.map((e) => e.content);
            return null != D ? e?.filter((e) => I(D, e)) : e;
        }, [L, D, m]);
    return (
        (t = h),
        (T = (0, r.bG)([s.A], () => s.A.getPrivateChannelsVersion())),
        (S = (0, r.bG)([s.A], () => s.A.getMutableDMsByUserIds(), [T])),
        (N = (0, r.bG)([_.Ay], () => _.Ay.getMutedChannels(null))),
        (O = i.useMemo(() => {
            let e = new Set();
            for (let t in S) {
                let n = S[t];
                null != n && N.has(n) && e.add(t);
            }
            return e;
        }, [S, N])),
        (n = h =
            i.useMemo(
                () =>
                    t?.filter((e) => {
                        for (let t of e.participants) if (O.has(t)) return !1;
                        return !0;
                    }),
                [t, O],
            )),
        (A = h = (0, r.yK)([l.A], () => (null == n ? o : n.filter(l.A.canRenderContent)), [n])),
        (R = i.useRef(new Set())),
        (f = i.useMemo(() => {
            let e = new Set(A?.map((e) => e.author_id));
            return (0, E.v)([...R.current], [...e]) || (R.current = e), R.current;
        }, [A])),
        (C = (0, r.yK)([d.A], () =>
            Array.from(f).filter((e) => {
                let t = d.A.getStatus(e);
                return null !== t && [u.cl.OFFLINE, u.cl.INVISIBLE].includes(t);
            }),
        )),
        (h = i.useMemo(() => {
            let e = new Set(C);
            return A?.filter((t) => !(0, c.JM)(t) || !e.has(t.author_id));
        }, [A, C]))
    );
}
