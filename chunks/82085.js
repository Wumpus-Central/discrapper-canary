n.d(t, { Z: () => s });
var r = n(703656),
    i = n(430824),
    a = n(815016),
    o = n(981631);
let s = {
    onOpenHubInvite(e) {
        let { guild: t } = e;
        null != t && (null != i.Z.getGuild(t.id) ? (0, r.uL)(o.Z5c.CHANNEL(t.id)) : (0, a.Z)(e.code));
    },
};
