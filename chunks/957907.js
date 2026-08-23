n.d(t, { A: () => o });
var u = n(582128),
    e = n(17928),
    i = n(71393),
    r = n(576705),
    c = n(948230),
    d = n(683180),
    p = n(972786),
    A = n(652215);
function o(l) {
    let t = (0, d.B9)(l?.topic),
        n = null != t,
        o = l?.guild_id ?? null,
        a = (0, e.bG)([i.A, r.A], () => {
            let l = null != o ? i.A.getGuild(o) : null;
            return null != l && r.A.can(A.xBc.MANAGE_GUILD, l);
        }, [o]);
    return (
        u.useEffect(() => {
            if (!n || null == t) return;
            let l = p.A.getProjectsFetchState();
            (null == l || "error" === l.type || (a && null == p.A.findProjectByApplicationId(t))) &&
                (0, c.hF)(o ?? void 0);
        }, [n, t, o, a]),
        (0, e.bG)([p.A], () => {
            if (null == t) return null;
            let l = p.A.findProjectByApplicationId(t);
            return null == l || (0, p.P)(l) || (a && l.guild_id === o) ? l : null;
        }, [t, a, o])
    );
}
