n.d(t, { Y: () => d }), n(667532);
var r = n(64700),
    i = n(417597),
    a = n(576705),
    s = n(711014),
    o = n(287809),
    l = n(927578),
    c = n(652215),
    u = n(818348);
function d(e, t) {
    var n;
    let d = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        f = null != (n = null == e ? void 0 : e.guild_id) ? n : c.dJq,
        p = (0, i.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
        _ = (0, i.bG)([a.A], () => null == e || null == e.guild_id || a.A.can(u.xB.USE_EXTERNAL_SOUNDS, e));
    return r.useMemo(() => {
        if ((l.Ay.canUseSoundboardEverywhere(d) || !t) && _) {
            let e = "" !== f,
                t = e ? p.filter((e) => e !== f) : p;
            return e && t.unshift(f), t;
        }
        return [f];
    }, [d, t, f, p, _]);
}
