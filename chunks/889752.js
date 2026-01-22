n.d(t, {
    A: () => f,
});
var r = n(64700),
    l = n(311907),
    i = n(211059),
    a = n(609511),
    s = n(696451),
    o = n(71393),
    c = n(287809),
    u = n(652215),
    d = n(957173);

function f(e) {
    let t = (0, l.bG)([o.A, a.A, c.default, s.Ay], () => {
        let t = o.A.getGuild(e);
        if (
            (null == t ? void 0 : t.features.has(u.GuildFeatures.HUB)) !== !0 ||
            !0 === a.A.hasViewedPrompt(d.X.REAL_NAME_PROMPT, t.id)
        )
            return null;
        let n = c.default.getCurrentUser();
        if (null == n) return null;
        let r = s.Ay.getMember(t.id, null == n ? void 0 : n.id);
        return (null == r ? void 0 : r.nick) == null;
    });
    return (
        r.useEffect(() => {
            null != e && null != t && (t || i.A.viewPrompt(d.X.REAL_NAME_PROMPT, e));
        }, [t, e]),
        !0 === t
    );
}
