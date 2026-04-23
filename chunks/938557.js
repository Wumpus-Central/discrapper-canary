n.d(t, { A: () => i });
var a = n(734057),
    r = n(71393),
    l = n(287809),
    s = n(652215);
function o(e) {
    if (!e.isPrivate()) {
        let t = r.A.getGuild(e.guild_id);
        return null != t && t.features.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = l.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function i(e, t) {
    if (!l.default.getCurrentUser()?.isStaff()) return !1;
    let n = a.A.getChannel(e.channel_id);
    return (
        null != n &&
        !!o(n) &&
        t.some((e) => {
            let t = a.A.getChannel(e);
            return !(null == t || t.isPrivate()) && !o(t);
        })
    );
}
