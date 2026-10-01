(n.d(t, { Y: () => d }), n(667532));
var l = n(582128),
    i = n(702841),
    r = n(576705),
    s = n(711014),
    a = n(287809),
    o = n(158045),
    u = n(652215),
    c = n(818348);
function d(e, t) {
    let n = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        d = e?.guild_id ?? u.dJq,
        h = (0, i.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
        m = (0, i.bG)([r.A], () => null == e || null == e.guild_id || r.A.can(c.xB.USE_EXTERNAL_SOUNDS, e));
    return l.useMemo(() => {
        if ((o.Ay.canUseSoundboardEverywhere(n) || !t) && m) {
            let e = "" !== d,
                t = e ? h.filter((e) => e !== d) : h;
            return (e && t.unshift(d), t);
        }
        return [d];
    }, [n, t, d, h, m]);
}
