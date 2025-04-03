n.d(t, { Z: () => l });
var i = n(442837),
    r = n(496675),
    s = n(981631);
function l(e) {
    let {
        canManageGuild: t,
        canManageRoles: n,
        canBanMembers: l,
        canManageNicknames: a,
        canCreateEmojisAndStickers: o,
        canManageEmojisAndStickers: c,
        canManageWebhooks: u,
        canViewAuditLog: d
    } = (0, i.cj)(
        [r.Z],
        () => ({
            canManageGuild: r.Z.can(s.Plq.MANAGE_GUILD, e),
            canManageRoles: r.Z.can(s.Plq.MANAGE_ROLES, e),
            canBanMembers: r.Z.can(s.Plq.BAN_MEMBERS, e),
            canManageNicknames: r.Z.can(s.Plq.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: r.Z.can(s.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canManageEmojisAndStickers: r.Z.can(s.Plq.MANAGE_GUILD_EXPRESSIONS, e),
            canManageWebhooks: r.Z.can(s.Plq.MANAGE_WEBHOOKS, e),
            canViewAuditLog: r.Z.can(s.Plq.VIEW_AUDIT_LOG, e)
        }),
        [e]
    );
    return t || n || l || a || o || c || u || d;
}
