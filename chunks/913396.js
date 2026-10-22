t.d(n, { A: () => g });
var e = t(582128),
    i = t(17928),
    u = t(696451),
    c = t(71393),
    r = t(576705),
    o = t(935208),
    a = t(371169),
    d = t(260498),
    s = t(951178),
    A = t(246338),
    p = t(652215);
function g(l) {
    let n = (0, A.us)(l),
        t = null != n,
        g = l?.guild_id ?? null,
        y = (0, i.bG)(
            [c.A, r.A],
            () => {
                let l = null != g ? c.A.getGuild(g) : null;
                return null != l && r.A.can(p.xBc.MANAGE_GUILD, l);
            },
            [g],
        ),
        f = (0, i.yK)([u.Ay], () => (null != g ? (u.Ay.getSelfMember(g)?.roles ?? []) : []), [g]);
    return (
        e.useEffect(() => {
            t && null != n && (0, a.hF)(g ?? void 0);
        }, [t, n, g, y, f]),
        (0, i.bG)(
            [d.Ay],
            () => {
                if (null == n) return null;
                let l = d.Ay.findProjectByApplicationId(n);
                if (null == l || (0, d.PV)(l)) return l;
                let t = null != g ? o.default.castGuildIdAsEveryoneGuildRoleId(g) : null,
                    e = (l.collaborator_role_ids ?? []).some((l) => l === t || f.includes(l));
                return l.guild_id === g && (0, s.pL)(l) && (y || e) ? l : null;
            },
            [n, y, f, g],
        )
    );
}
