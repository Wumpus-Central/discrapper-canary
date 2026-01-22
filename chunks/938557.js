n.d(t, {
    A: () => o,
});
var l = n(734057),
    r = n(71393),
    a = n(287809),
    i = n(652215);

function s(e) {
    if (!e.isPrivate()) {
        let t = r.A.getGuild(e.guild_id);
        return null != t && t.features.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = a.default.getUser(e);
        return null != t && t.isStaff();
    });
}

function o(e, t) {
    var n;
    if (!(null == (n = a.default.getCurrentUser()) ? void 0 : n.isStaff())) return !1;
    let r = l.A.getChannel(e.channel_id);
    return (
        null != r &&
        !!s(r) &&
        t.some((e) => {
            let t = l.A.getChannel(e);
            return !(null == t || t.isPrivate()) && !s(t);
        })
    );
}
