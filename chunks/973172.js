"use strict";
n.d(t, { A: () => o }), n(321073);
var a = n(64700),
    r = n(17928),
    i = n(366853),
    l = n(71393),
    s = n(680646);
function o(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        o = (0, r.bG)([s.A], () => s.A.getGuildIdsForApplication(t?.id), [t]),
        c = (0, r.bG)([i.A], () => i.A.isConnected());
    return a.useMemo(() => {
        let e = [];
        if (!c || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = l.A.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [c, o, t, n]);
}
