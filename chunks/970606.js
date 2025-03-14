n.d(t, {
    Af: () => d,
    GO: () => u,
    Gh: () => g,
    Pq: () => h,
    Q2: () => f,
    Qh: () => c,
    Vr: () => s,
    _v: () => v,
    hx: () => a,
    r: () => p
}),
    n(704215),
    n(605236);
var i = n(314897);
n(271383);
var r = n(626135),
    l = n(308083),
    o = n(981631);
function s(e) {
    let { guildId: t, source: n, location: l, messageId: s, tagUserId: a } = e,
        u = i.default.getId();
    r.default.track(o.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: t,
        source: n,
        location: l,
        viewing_user_id: u,
        tag_owner_user_id: a,
        message_id: s
    });
}
function a(e) {
    let { guildId: t, userId: n, source: i } = e;
    r.default.track(o.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: i
    });
}
function u(e, t) {
    r.default.track(o.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function d(e) {
    r.default.track(o.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function c(e) {
    switch (e) {
        case l.Wy.GAMES:
            return 'games';
        case l.Wy.PLAYSTYLE:
            return 'playstyle';
        case l.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case l.Wy.INTERESTS:
            return 'interests';
        case l.Wy.DESCRIPTION:
            return 'description';
        case l.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case l.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case l.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function h(e) {
    r.default.track(o.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function f(e) {
    let { guildId: t, source: n, tab: i } = e;
    r.default.track(o.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: i
    });
}
function p(e) {
    let { guildId: t, position: n } = e;
    r.default.track(o.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        guild_id: t,
        position: n
    });
}
function g(e) {
    let { feature: t, guildId: n, position: i } = e;
    r.default.track(o.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: n,
        feature: t,
        position: i
    });
}
function v(e) {
    let { guildId: t, position: n } = e;
    r.default.track(o.rMx.GUILD_APPLICATION_ABANDONED, {
        guild_id: t,
        position: n
    });
}
n(921944);
