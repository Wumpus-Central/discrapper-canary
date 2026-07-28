"use strict";
n.d(t, { Y: () => u }), n(667532);
var i = n(582128),
    r = n(702841),
    a = n(576705),
    s = n(711014),
    l = n(287809),
    o = n(428262),
    d = n(652215),
    c = n(818348);
function u(e, t) {
    let n = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        u = e?.guild_id ?? d.dJq,
        _ = (0, r.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
        E = (0, r.bG)([a.A], () => null == e || null == e.guild_id || a.A.can(c.xB.USE_EXTERNAL_SOUNDS, e));
    return i.useMemo(() => {
        if ((o.Ay.canUseSoundboardEverywhere(n) || !t) && E) {
            let e = "" !== u,
                t = e ? _.filter((e) => e !== u) : _;
            return e && t.unshift(u), t;
        }
        return [u];
    }, [n, t, u, _, E]);
}
