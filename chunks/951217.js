function i(e) {
    return {
        id: e.game_organization_id,
        applicationId: e.application_id,
        name: e.name,
        description: e.description,
        iconUrl: e.icon_url,
        memberCount: e.member_count,
        maxMembers: e.max_members,
    };
}
n.d(
    t,
    {},
    {
        b: function (e) {
            return {
                ...i(e),
                guildId: e.guild_id,
                userIsBlockedFromLink: e.user_is_blocked_from_link ?? !1,
                channels: e.channels.map((e) => ({ lobbyId: e.lobby_id, name: e.name })),
                roles: e.roles.map((e) => ({ id: e.id, name: e.name, canInvite: e.can_invite, canLink: e.can_link })),
                member: { gameOrganizationRoleIds: e.member.game_organization_role_ids },
            };
        },
        p: function (e) {
            return { ...i(e), guildId: e.guild_id };
        },
    },
);
