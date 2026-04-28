"use strict";
n.d(t, { Y: () => d }), n(667532);
var l = n(64700),
    i = n(702841),
    s = n(576705),
    a = n(711014),
    r = n(287809),
    o = n(927578),
    c = n(652215),
    u = n(818348);
function d(e, t) {
    let n = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        d = e?.guild_id ?? c.dJq,
        h = (0, i.bG)([a.Ay], () => a.Ay.getFlattenedGuildIds()),
        m = (0, i.bG)([s.A], () => null == e || null == e.guild_id || s.A.can(u.xB.USE_EXTERNAL_SOUNDS, e));
    return l.useMemo(() => {
        if ((o.Ay.canUseSoundboardEverywhere(n) || !t) && m) {
            let e = "" !== d,
                t = e ? h.filter((e) => e !== d) : h;
            return e && t.unshift(d), t;
        }
        return [d];
    }, [n, t, d, h, m]);
}
