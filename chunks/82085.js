n.d(t, { Z: () => a });
var i = n(703656),
    r = n(981631);
let a = {
    onOpenHubInvite(e) {
        let { guild: t } = e;
        null != t && (0, i.uL)(r.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code));
    }
};
