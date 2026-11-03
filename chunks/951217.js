function i(e) {
    return {
        id: e.game_organization_id,
        applicationId: e.application_id,
        guildId: e.guild_id,
        name: e.name,
        description: e.description,
        iconUrl: e.icon_url,
        memberCount: e.member_count,
        maxMembers: e.max_members,
    };
}
n.d(t, { p: () => i });
