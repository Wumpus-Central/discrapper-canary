t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(442837),
    l = t(496675),
    a = t(981631);
function s(e) {
    let {
        canManageGuild: n,
        canManageRoles: t,
        canBanMembers: s,
        canManageNicknames: u,
        canCreateEmojisAndStickers: r,
        canManageEmojisAndStickers: o,
        canManageWebhooks: d,
        canViewAuditLog: c
    } = (0, i.cj)(
        [l.Z],
        () => ({
            canManageGuild: l.Z.can(a.Plq.MANAGE_GUILD, e),
            canManageRoles: l.Z.can(a.Plq.MANAGE_ROLES, e),
            canBanMembers: l.Z.can(a.Plq.BAN_MEMBERS, e),
            canManageNicknames: l.Z.can(a.Plq.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: l.Z.can(a.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canManageEmojisAndStickers: l.Z.can(a.Plq.MANAGE_GUILD_EXPRESSIONS, e),
            canManageWebhooks: l.Z.can(a.Plq.MANAGE_WEBHOOKS, e),
            canViewAuditLog: l.Z.can(a.Plq.VIEW_AUDIT_LOG, e)
        }),
        [e]
    );
    return n || t || s || u || r || o || d || c;
}
