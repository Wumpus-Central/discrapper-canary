n.d(t, { A: () => h }), n(321073);
var r = n(64700),
    l = n(136722),
    i = n(311907),
    a = n(52133),
    s = n(734057),
    o = n(256587),
    u = n(696451),
    c = n(488926),
    d = n(818348);
let _ = [],
    p = new Set();
function h(e) {
    let { entries: t, channelId: n } = e,
        h = (0, i.bG)([s.A], () => s.A.getChannel(n)),
        m = h?.guild_id,
        A = r.useRef(new Set()),
        f = r.useMemo(() => {
            let e = new Set(t?.map((e) => e.author_id));
            return (0, a.v)([...A.current], [...e]) || (A.current = e), A.current;
        }, [t]);
    r.useEffect(() => {
        null != m &&
            Array.from(f).forEach((e) => {
                o.A.requestMember(m, e);
            });
    }, [f, m]);
    let g = (0, i.yK)([u.Ay], () => {
            if (null == m) return _;
            let e = [];
            for (let t of f) u.Ay.isMember(m, t) && e.push(t);
            return e;
        }, [f, m]),
        E = r.useMemo(() => {
            if (null == h || 0 === g.length) return p;
            let e = new Set();
            for (let t of g) {
                let n = c.cc({ user: t, context: h });
                l.zy(n, d.xB.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [g, h]);
    return r.useMemo(() => t?.filter((e) => E.has(e.author_id)), [t, E]);
}
