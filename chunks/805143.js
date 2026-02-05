"use strict";
n.d(t, { Y: () => d }), n(667532);
var r = n(64700),
    i = n(417597),
    a = n(576705),
    s = n(711014),
    o = n(287809),
    l = n(927578),
    u = n(652215),
    c = n(818348);
function d(e, t) {
    let n = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        d = e?.guild_id ?? u.dJq,
        _ = (0, i.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
        f = (0, i.bG)([a.A], () => null == e || null == e.guild_id || a.A.can(c.xB.USE_EXTERNAL_SOUNDS, e));
    return r.useMemo(() => {
        if ((l.Ay.canUseSoundboardEverywhere(n) || !t) && f) {
            let e = "" !== d,
                t = e ? _.filter((e) => e !== d) : _;
            return e && t.unshift(d), t;
        }
        return [d];
    }, [n, t, d, _, f]);
}
