n.d(t, {
    Af: () => u,
    GO: () => c,
    Gh: () => h,
    Pq: () => _,
    Q2: () => p,
    Qh: () => d,
    Vr: () => s,
    hx: () => a
}),
    n(704215),
    n(605236);
var r = n(314897);
n(271383);
var i = n(626135),
    o = n(308083),
    l = n(981631);
function s(e) {
    let { guildId: t, source: n, location: o, messageId: s, tagUserId: a } = e,
        c = r.default.getId();
    i.default.track(l.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: t,
        source: n,
        location: o,
        viewing_user_id: c,
        tag_owner_user_id: a,
        message_id: s
    });
}
function a(e) {
    let { guildId: t, userId: n, source: r } = e;
    i.default.track(l.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: r
    });
}
function c(e, t) {
    i.default.track(l.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function u(e) {
    i.default.track(l.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function d(e) {
    switch (e) {
        case o.Wy.GAMES:
            return 'games';
        case o.Wy.PLAYSTYLE:
            return 'playstyle';
        case o.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case o.Wy.INTERESTS:
            return 'interests';
        case o.Wy.DESCRIPTION:
            return 'description';
        case o.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case o.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case o.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function _(e) {
    i.default.track(l.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function p(e) {
    let { guildId: t, source: n, tab: r } = e;
    i.default.track(l.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: r
    });
}
function h(e) {
    let { feature: t, guildId: n, position: r } = e;
    i.default.track(l.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: n,
        feature: t,
        position: r
    });
}
n(921944);
