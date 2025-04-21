n.d(t, { Z: () => s });
var i = n(442837),
    r = n(496675),
    l = n(981631);
function s(e) {
    let {
        canManageGuild: t,
        canManageRoles: n,
        canBanMembers: s,
        canManageNicknames: o,
        canCreateEmojisAndStickers: a,
        canManageEmojisAndStickers: c,
        canManageWebhooks: u,
        canViewAuditLog: d
    } = (0, i.cj)(
        [r.Z],
        () => ({
            canManageGuild: r.Z.can(l.Plq.MANAGE_GUILD, e),
            canManageRoles: r.Z.can(l.Plq.MANAGE_ROLES, e),
            canBanMembers: r.Z.can(l.Plq.BAN_MEMBERS, e),
            canManageNicknames: r.Z.can(l.Plq.MANAGE_NICKNAMES, e),
            canCreateEmojisAndStickers: r.Z.can(l.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canManageEmojisAndStickers: r.Z.can(l.Plq.MANAGE_GUILD_EXPRESSIONS, e),
            canManageWebhooks: r.Z.can(l.Plq.MANAGE_WEBHOOKS, e),
            canViewAuditLog: r.Z.can(l.Plq.VIEW_AUDIT_LOG, e)
        }),
        [e]
    );
    return t || n || s || o || a || c || u || d;
}
