e.d(n, { A: () => g });
var t = e(582128),
    i = e(17928),
    u = e(696451),
    c = e(71393),
    r = e(576705),
    o = e(935208),
    a = e(371169),
    d = e(260498),
    s = e(951178),
    A = e(246338),
    p = e(652215);
function g(l) {
    let n = (0, A.us)(l),
        e = null != n,
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
        t.useEffect(() => {
            e && null != n && (0, a.hF)(g ?? void 0);
        }, [e, n, g, y, f]),
        (0, i.bG)(
            [d.Ay],
            () => {
                if (null == n) return null;
                let l = d.Ay.findProjectByApplicationId(n);
                if (null == l || (0, d.PV)(l)) return l;
                let e = null != g ? o.default.castGuildIdAsEveryoneGuildRoleId(g) : null,
                    t = (l.collaborator_role_ids ?? []).some((l) => l === e || f.includes(l));
                return l.guild_id === g && (0, s.pL)(l) && (y || t) ? l : null;
            },
            [n, y, f, g],
        )
    );
}
