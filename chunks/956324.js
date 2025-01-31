n.d(t, { Z: () => a });
var i = n(442837),
    l = n(496675),
    s = n(981631);
function a(e) {
    let {
        canManageGuild: t,
        canManageRoles: n,
        canBanMembers: a,
        canManageNicknames: r,
        canCreateEmojisAndStickers: d,
        canManageEmojisAndStickers: u,
        canManageWebhooks: c,
        canViewAuditLog: o
    } = (0, i.cj)(
        [l.Z],
        () => ({
            canManageGuild: l.Z.can(s.Plq.MANAGE_GUILD, e),
            canManageRoles: l.Z.can(s.Plq.MANAGE_ROLES, e),
            canBanMembers: l.Z.can(s.Plq.BAN_MEMBERS, e),
            canManageNicknames: l.Z.can(s.Plq.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: l.Z.can(s.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canManageEmojisAndStickers: l.Z.can(s.Plq.MANAGE_GUILD_EXPRESSIONS, e),
            canManageWebhooks: l.Z.can(s.Plq.MANAGE_WEBHOOKS, e),
            canViewAuditLog: l.Z.can(s.Plq.VIEW_AUDIT_LOG, e)
        }),
        [e]
    );
    return t || n || a || r || d || u || c || o;
}
