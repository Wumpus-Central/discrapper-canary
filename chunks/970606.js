n.d(t, {
    Af: () => _,
    GO: () => f,
    Gh: () => v,
    Pq: () => m,
    Q2: () => g,
    Qh: () => p,
    UE: () => l,
    Vr: () => c,
    _v: () => y,
    hM: () => h,
    hx: () => d,
    r: () => E,
    u0: () => u
}),
    n(704215),
    n(605236);
var i = n(314897),
    r = n(271383),
    a = n(626135),
    s = n(308083),
    o = n(981631);
n(921944);
var l = (function (e) {
    return (e.TAG_ADOPTION = 'to-tag-adoption'), (e.APPLY_FLOW = 'to-apply-flow'), (e.APPLICATION = 'to-application'), (e.GUILD = 'to-guild'), (e.DISCOVERY = 'to-discovery'), (e.ASK_TO_JOIN = 'ask-to-join'), e;
})({});
function u(e) {
    let { guildId: t, hasJoinRequest: n, source: s, messageId: l, tagUserId: u, location: c } = e,
        d = i.default.getId(),
        f = r.ZP.getMember(t, i.default.getId()),
        _ = (null == f ? void 0 : f.joinedAt) != null;
    a.default.track(o.rMx.CLAN_PROFILE_VIEWED, {
        guild_id: t,
        is_member: _,
        has_join_request: n,
        source: s,
        location: c,
        viewing_user_id: d,
        tag_owner_user_id: u,
        message_id: l
    });
}
function c(e) {
    let { guildId: t, source: n, location: r, messageId: s, tagUserId: l } = e,
        u = i.default.getId();
    a.default.track(o.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
        guild_id: t,
        source: n,
        location: r,
        viewing_user_id: u,
        tag_owner_user_id: l,
        message_id: s
    });
}
function d(e) {
    let { guildId: t, userId: n, source: i } = e;
    a.default.track(o.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: i
    });
}
function f(e, t) {
    a.default.track(o.rMx.CLAN_SETTINGS_VIEWED, {
        guild_id: e,
        page: t
    });
}
function _(e) {
    a.default.track(o.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function p(e) {
    switch (e) {
        case s.Wy.GAMES:
            return 'games';
        case s.Wy.PLAYSTYLE:
            return 'playstyle';
        case s.Wy.UTILITY_TRAITS:
            return 'utility_traits';
        case s.Wy.INTERESTS:
            return 'interests';
        case s.Wy.DESCRIPTION:
            return 'description';
        case s.Wy.CUSTOMIZE_TAG_BADGE:
            return 'tag';
        case s.Wy.CUSTOMIZE_BANNER:
            return 'banner';
        case s.Wy.MEMBER_APPLICATION:
            return 'member_application';
        default:
            return e;
    }
}
function h(e, t) {
    a.default.track(o.rMx.RAPIDASH_PROFILE_CTA_CLICKED, {
        guild_id: e,
        action_type: t
    });
}
function m(e) {
    a.default.track(o.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function g(e) {
    let { guildId: t, source: n, tab: i } = e;
    a.default.track(o.rMx.CLAN_APPLICATION_NAVIGATION, {
        guild_id: t,
        source: n,
        tab: i
    });
}
function E(e) {
    let { guildId: t, position: n } = e;
    a.default.track(o.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
        guild_id: t,
        position: n
    });
}
function v(e) {
    let { feature: t, guildId: n, position: i } = e;
    a.default.track(o.rMx.DISCOVERY_GUILD_CARD_INTERACTION, {
        guild_id: n,
        feature: t,
        position: i
    });
}
function y(e) {
    let { guildId: t, position: n } = e;
    a.default.track(o.rMx.GUILD_APPLICATION_ABANDONED, {
        guild_id: t,
        position: n
    });
}
