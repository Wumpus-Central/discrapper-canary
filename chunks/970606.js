n.d(t, {
    Af: () => c,
    GO: () => u,
    Gh: () => f,
    Pq: () => _,
    Q2: () => E,
    Qh: () => d,
    Vr: () => s,
    _v: () => p,
    hx: () => o,
    r: () => I
}),
    n(704215),
    n(605236);
var r = n(314897);
n(271383);
var i = n(626135),
    l = n(308083),
    a = n(981631);
function s(e) {
    let { guildId: t, source: n, location: l, messageId: s, tagUserId: o } = e,
        u = r.default.getId();
    i.default.track(a.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: t,
        source: n,
        location: l,
        viewing_user_id: u,
        tag_owner_user_id: o,
        message_id: s
    });
}
function o(e) {
    let { guildId: t, userId: n, source: r } = e;
    i.default.track(a.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: r
    });
}
function u(e, t) {
    i.default.track(a.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function c(e) {
    i.default.track(a.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function d(e) {
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
function _(e) {
    i.default.track(a.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function E(e) {
    let { guildId: t, source: n, tab: r } = e;
    i.default.track(a.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: r
    });
}
function I(e) {
    let { guildId: t, position: n } = e;
    i.default.track(a.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        guild_id: t,
        position: n
    });
}
function f(e) {
    let { feature: t, guildId: n, position: r } = e;
    i.default.track(a.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: n,
        feature: t,
        position: r
    });
}
function p(e) {
    let { guildId: t, position: n } = e;
    i.default.track(a.rMx.GUILD_APPLICATION_ABANDONED, {
        guild_id: t,
        position: n
    });
}
n(921944);
