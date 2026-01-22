n.d(t, { A: () => _ }), n(896048), n(321073);
var r = n(64700),
    i = n(136722),
    a = n(311907),
    s = n(52133),
    o = n(734057),
    l = n(256587),
    c = n(696451),
    u = n(488926),
    d = n(818348);
let f = [],
    p = new Set();
function _(e) {
    let { entries: t, channelId: n } = e,
        _ = (0, a.bG)([o.A], () => o.A.getChannel(n)),
        h = null == _ ? void 0 : _.guild_id,
        m = r.useRef(new Set()),
        g = r.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return (0, s.v)([...m.current], [...e]) || (m.current = e), m.current;
        }, [t]);
    r.useEffect(() => {
        null != h &&
            Array.from(g).forEach((e) => {
                l.A.requestMember(h, e);
            });
    }, [g, h]);
    let E = (0, a.yK)([c.Ay], () => {
            if (null == h) return f;
            let e = [];
            for (let t of g) c.Ay.isMember(h, t) && e.push(t);
            return e;
        }, [g, h]),
        b = r.useMemo(() => {
            if (null == _ || 0 === E.length) return p;
            let e = new Set();
            for (let t of E) {
                let n = u.cc({
                    user: t,
                    context: _,
                });
                i.zy(n, d.xB.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [E, _]);
    return r.useMemo(() => (null == t ? void 0 : t.filter((e) => b.has(e.author_id))), [t, b]);
}
