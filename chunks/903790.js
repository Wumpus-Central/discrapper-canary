"use strict";
n.d(t, { A: () => p }), n(321073);
var r = n(64700),
    i = n(136722),
    a = n(311907),
    s = n(52133),
    o = n(734057),
    l = n(256587),
    u = n(696451),
    c = n(488926),
    d = n(818348);
let _ = [],
    f = new Set();
function p(e) {
    let { entries: t, channelId: n } = e,
        p = (0, a.bG)([o.A], () => o.A.getChannel(n)),
        h = p?.guild_id,
        m = r.useRef(new Set()),
        g = r.useMemo(() => {
            let e = new Set(t?.map((e) => e.author_id));
            return (0, s.v)([...m.current], [...e]) || (m.current = e), m.current;
        }, [t]);
    r.useEffect(() => {
        null != h &&
            Array.from(g).forEach((e) => {
                l.A.requestMember(h, e);
            });
    }, [g, h]);
    let E = (0, a.yK)([u.Ay], () => {
            if (null == h) return _;
            let e = [];
            for (let t of g) u.Ay.isMember(h, t) && e.push(t);
            return e;
        }, [g, h]),
        A = r.useMemo(() => {
            if (null == p || 0 === E.length) return f;
            let e = new Set();
            for (let t of E) {
                let n = c.cc({ user: t, context: p });
                i.zy(n, d.xB.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [E, p]);
    return r.useMemo(() => t?.filter((e) => A.has(e.author_id)), [t, A]);
}
