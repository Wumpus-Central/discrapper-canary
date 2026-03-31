n.d(t, { A: () => h });
var i = n(64700),
    l = n(311907),
    s = n(211059),
    a = n(609511),
    r = n(696451),
    o = n(71393),
    c = n(287809),
    d = n(652215),
    u = n(957173);
function h(e) {
    let t = (0, l.bG)([o.A, a.A, c.default, r.Ay], () => {
        let t = o.A.getGuild(e);
        if (t?.features.has(d.GuildFeatures.HUB) !== !0 || !0 === a.A.hasViewedPrompt(u.X.REAL_NAME_PROMPT, t.id))
            return null;
        let n = c.default.getCurrentUser();
        if (null == n) return null;
        let i = r.Ay.getMember(t.id, n?.id);
        return i?.nick == null;
    });
    return (
        i.useEffect(() => {
            null != e && null != t && (t || s.A.viewPrompt(u.X.REAL_NAME_PROMPT, e));
        }, [t, e]),
        !0 === t
    );
}
