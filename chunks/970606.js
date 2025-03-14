n.d(t, {
    Af: () => _,
    GO: () => f,
    Gh: () => v,
    Pq: () => m,
    Q2: () => g,
    Qh: () => p,
    UE: () => l,
    Vr: () => u,
    _v: () => b,
    hM: () => h,
    hx: () => d,
    r: () => E,
    u0: () => c
}),
    n(704215),
    n(605236);
var r = n(314897),
    i = n(271383),
    o = n(626135),
    a = n(308083),
    s = n(981631);
n(921944);
var l = (function (e) {
    return (e.TAG_ADOPTION = 'to-tag-adoption'), (e.APPLY_FLOW = 'to-apply-flow'), (e.APPLICATION = 'to-application'), (e.GUILD = 'to-guild'), (e.DISCOVERY = 'to-discovery'), (e.ASK_TO_JOIN = 'ask-to-join'), e;
})({});
function c(e) {
    let { guildId: t, hasJoinRequest: n, source: a, messageId: l, tagUserId: c, location: u } = e,
        d = r.default.getId(),
        f = i.ZP.getMember(t, r.default.getId()),
        _ = (null == f ? void 0 : f.joinedAt) != null;
    o.default.track(s.rMx.CLAN_PROFILE_VIEWED, {
        guild_id: t,
        is_member: _,
        has_join_request: n,
        source: a,
        location: u,
        viewing_user_id: d,
        tag_owner_user_id: c,
        message_id: l
    });
}
function u(e) {
    let { guildId: t, source: n, location: i, messageId: a, tagUserId: l } = e,
        c = r.default.getId();
    o.default.track(s.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: t,
        source: n,
        location: i,
        viewing_user_id: c,
        tag_owner_user_id: l,
        message_id: a
    });
}
function d(e) {
    let { guildId: t, userId: n, source: r } = e;
    o.default.track(s.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: r
    });
}
function f(e, t) {
    o.default.track(s.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function _(e) {
    o.default.track(s.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function p(e) {
    switch (e) {
        case a.Wy.GAMES:
            return 'games';
        case a.Wy.PLAYSTYLE:
            return 'playstyle';
        case a.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case a.Wy.INTERESTS:
            return 'interests';
        case a.Wy.DESCRIPTION:
            return 'description';
        case a.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case a.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case a.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function h(e, t) {
    o.default.track(s.rMx.RAPIDASH_PROFILE_CTA_CLICKED, {
        guild_id: e,
        action_type: t
    });
}
function m(e) {
    o.default.track(s.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function g(e) {
    let { guildId: t, source: n, tab: r } = e;
    o.default.track(s.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: r
    });
}
function E(e) {
    let { guildId: t, position: n } = e;
    o.default.track(s.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        guild_id: t,
        position: n
    });
}
function v(e) {
    let { feature: t, guildId: n, position: r } = e;
    o.default.track(s.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: n,
        feature: t,
        position: r
    });
}
function b(e) {
    let { guildId: t, position: n } = e;
    o.default.track(s.rMx.GUILD_APPLICATION_ABANDONED, {
        guild_id: t,
        position: n
    });
}
