e.d(n, { A: () => p });
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
    g = e(652215);
function p(l) {
    let n = (0, A.us)(l),
        e = null != n,
        p = l?.guild_id ?? null,
        y = (0, i.bG)(
            [c.A, r.A],
            () => {
                let l = null != p ? c.A.getGuild(p) : null;
                return null != l && r.A.can(g.xBc.MANAGE_GUILD, l);
            },
            [p],
        ),
        f = (0, i.yK)([u.Ay], () => (null != p ? (u.Ay.getSelfMember(p)?.roles ?? []) : []), [p]);
    return (
        t.useEffect(() => {
            e && null != n && (0, a.hF)(p ?? void 0);
        }, [e, n, p, y, f]),
        (0, i.bG)(
            [d.Ay],
            () => {
                if (null == n) return null;
                let l = d.Ay.findProjectByApplicationId(n);
                if (null == l || (0, d.PV)(l)) return l;
                let e = null != p ? o.default.castGuildIdAsEveryoneGuildRoleId(p) : null,
                    t = (l.collaborator_role_ids ?? []).some((l) => l === e || f.includes(l));
                return l.guild_id === p && (0, s.pL)(l) && (y || t) ? l : null;
            },
            [n, y, f, p],
        )
    );
}
