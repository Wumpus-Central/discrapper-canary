i.d(t, { A: () => p });
var n = i(582128),
    r = i(17928),
    a = i(71393),
    o = i(576705),
    l = i(948230),
    u = i(683180),
    _ = i(972786),
    c = i(652215);
function p(e) {
    let t = (0, u.B9)(e?.topic),
        i = null != t,
        p = e?.guild_id ?? null,
        d = (0, r.bG)([a.A, o.A], () => {
            let e = null != p ? a.A.getGuild(p) : null;
            return null != e && o.A.can(c.xBc.MANAGE_GUILD, e);
        }, [p]);
    return (
        n.useEffect(() => {
            if (!i || null == t) return;
            let e = _.A.getProjectsFetchState();
            (null == e || "error" === e.type || (d && null == _.A.findProjectByApplicationId(t))) &&
                (0, l.hF)(p ?? void 0);
        }, [i, t, p, d]),
        (0, r.bG)([_.A], () => {
            if (null == t) return null;
            let e = _.A.findProjectByApplicationId(t);
            return null == e || (0, _.P)(e) || (d && e.guild_id === p) ? e : null;
        }, [t, d, p])
    );
}
