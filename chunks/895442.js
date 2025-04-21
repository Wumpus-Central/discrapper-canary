n.d(t, { Z: () => o });
var l = n(592125),
    r = n(430824),
    i = n(594174),
    a = n(981631);
function s(e) {
    if (!e.isPrivate()) {
        let t = r.Z.getGuild(e.guild_id);
        return null != t && t.hasFeature(a.oNc.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = i.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function o(e, t) {
    var n;
    if (!(null == (n = i.default.getCurrentUser()) ? void 0 : n.isStaff())) return !1;
    let r = l.Z.getChannel(e.channel_id);
    return (
        null != r &&
        !!s(r) &&
        t.some((e) => {
            let t = l.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !s(t);
        })
    );
}
