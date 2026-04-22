"use strict";
n.d(t, { A: () => d }), n(321073);
var a = n(64700),
    i = n(311907),
    r = n(142120),
    l = n(71393),
    s = n(680646);
function d(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        d = (0, i.bG)([s.A], () => s.A.getGuildIdsForApplication(t?.id), [t]),
        o = (0, i.bG)([r.A], () => r.A.isConnected());
    return a.useMemo(() => {
        let e = [];
        if (!o || !n || null == d || null == t) return e;
        for (let t of d) {
            let n = l.A.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, d, t, n]);
}
