"use strict";
n.d(t, {
    $O: () => y,
    DY: () => E,
    Me: () => h,
    Wj: () => _,
    Y1: () => p,
    Yh: () => A,
    b9: () => m,
    dangerouslyConstructGuildRecordFromUntypedObject: () => T,
    fh: () => c,
    kI: () => f,
    tJ: () => C,
    xi: () => g,
    yF: () => I,
    yN: () => S,
    zT: () => d,
});
var i = n(284009),
    r = n.n(i),
    s = n(357758),
    a = n(867051),
    o = n(679787),
    l = n(260509),
    u = n(652215);
function c(e) {
    return (0, a.Wj)(l.vI, e);
}
function d(e, t, n) {
    var i, r, u, c;
    return (0, a.e)(l.vI, n, {
        id: e.id,
        joinedAt: t.joinedAt,
        premiumSubscriberCount: t.premiumSubscriberCount,
        name: e.name,
        description: e.description ?? null,
        icon: e.icon ?? null,
        splash: e.splash ?? null,
        banner: e.banner ?? null,
        homeHeader: e.home_header ?? null,
        features: (0, s.y)(e.features),
        preferredLocale: e.preferred_locale ?? l.do.preferredLocale,
        ownerId: e.owner_id,
        application_id: e.application_id ?? null,
        afkChannelId: e.afk_channel_id ?? null,
        afkTimeout: e.afk_timeout ?? l.do.afkTimeout,
        systemChannelId: e.system_channel_id ?? null,
        verificationLevel: e.verification_level ?? l.do.verificationLevel,
        explicitContentFilter: e.explicit_content_filter ?? l.do.explicitContentFilter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: e.mfa_level ?? l.do.mfaLevel,
        vanityURLCode: e.vanity_url_code ?? null,
        premiumTier: e.premium_tier ?? l.do.premiumTier,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled || l.do.premiumProgressBarEnabled,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premium_progress_bar_enabled_user_updated_at
                ? new Date(e.premium_progress_bar_enabled_user_updated_at)
                : null,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: e.discovery_splash ?? null,
        rulesChannelId: e.rules_channel_id ?? null,
        safetyAlertsChannelId: e.safety_alerts_channel_id ?? null,
        publicUpdatesChannelId: e.public_updates_channel_id ?? null,
        maxStageVideoChannelUsers: e.max_stage_video_channel_users ?? l.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.max_video_channel_users ?? l.do.maxVideoChannelUsers,
        maxMembers: e.max_members ?? l.do.maxMembers,
        nsfwLevel: e.nsfw_level ?? l.do.nsfwLevel,
        ownerConfiguredContentLevel: e.owner_configured_content_level ?? null,
        hubType: e.hub_type ?? null,
        latestOnboardingQuestionId: e.latest_onboarding_question_id ?? null,
        profile: e.profile ?? null,
        guildTheme:
            ((i = e.theme),
            (r = n),
            void 0 === i
                ? (r?.guildTheme ?? null)
                : null != i
                  ? ((0, o.UW)(i) ?? { enabled: !1, themeSettings: null })
                  : null),
        premiumFeatures:
            null != e.premium_features
                ? {
                      features: (u = e.premium_features).features,
                      additionalEmojiSlots: u.additional_emoji_slots,
                      additionalStickerSlots: u.additional_sticker_slots,
                      additionalSoundSlots: u.additional_sound_slots,
                  }
                : null,
        moderatorReporting:
            null != e.moderator_reporting
                ? {
                      moderatorReportingEnabled: (c = e.moderator_reporting).moderator_reporting_enabled,
                      moderatorReportChannelId: c.moderator_report_channel_id,
                  }
                : null,
        verificationRoleId: e.verification_role_id ?? null,
        gameApplicationIds: e.game_application_ids ?? null,
        officialMessageColor: e.official_message_color ?? null,
    });
}
function _(e, t) {
    let n = null != e.joined_at ? new Date(e.joined_at) : (t?.joinedAt ?? null),
        i = e.premium_subscription_count ?? 0;
    return null == e.properties
        ? (r()(null != t, "If guild.properties is null, existingGuild must be passed in"),
          (0, a.h1)(t, { joinedAt: n, premiumSubscriberCount: i }))
        : d(e.properties, { joinedAt: n, premiumSubscriberCount: i }, t);
}
function h(e, t, n) {
    return {
        ...e,
        joinedAt: null != e.joinedAt ? e.joinedAt.toISOString() : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? e.premiumProgressBarEnabledUserUpdatedAt.toISOString()
                : null,
        features: Array.from(e.features),
        roles: t,
        member: null != n ? { userId: n.userId, roles: n.roles } : null,
    };
}
function f(e, t) {
    return null == e.properties
        ? t
        : d(e.properties, { joinedAt: t.joinedAt, premiumSubscriberCount: t.premiumSubscriberCount }, t);
}
function p(e, t) {
    return d(
        e,
        {
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : (t?.joinedAt ?? null),
            premiumSubscriberCount: e.premium_subscription_count,
        },
        t,
    );
}
function E(e) {
    return C({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        features: (0, s.y)(e.features),
        verificationLevel: e.verification_level,
        vanityURLCode: e.vanity_url_code,
        premiumSubscriberCount: e.premium_subscription_count,
        nsfwLevel: e.nsfw_level,
        premiumTier: e.premium_tier,
        homeHeader: e.home_header,
    });
}
function m(e) {
    return C({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        premiumSubscriberCount: e.premiumSubscriberCount ?? l.do.premiumSubscriberCount,
        premiumTier: e.premiumTier ?? l.do.premiumTier,
        features: (0, s.y)(e.features),
    });
}
function g(e) {
    return C({
        id: e.guildId,
        name: e.name ?? "",
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        features: (0, s.y)(e.features),
    });
}
function A(e) {
    return C({
        id: e.id,
        name: e.name,
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        features: (0, s.y)(e.features),
        verificationLevel: e.verification_level ?? l.do.verificationLevel,
    });
}
function I(e) {
    return C({
        id: e.id,
        name: e.name,
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        discoverySplash: e.discovery_splash ?? null,
        features: (0, s.y)(e.features),
    });
}
function T(e) {
    return N({
        id: e.id,
        name: e.name || "",
        description: e.description || null,
        ownerId: e.ownerId || null,
        icon: e.icon || null,
        splash: e.splash || null,
        banner: e.banner || null,
        homeHeader: e.homeHeader || null,
        features: (0, s.y)(e.features),
        preferredLocale: e.preferredLocale || l.do.preferredLocale,
        afkChannelId: e.afkChannelId || null,
        afkTimeout: e.afkTimeout,
        systemChannelId: e.systemChannelId || null,
        verificationLevel: e.verificationLevel || l.do.verificationLevel,
        joinedAt: e.joinedAt instanceof Date ? e.joinedAt : null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt,
        defaultMessageNotifications: e.defaultMessageNotifications || l.do.defaultMessageNotifications,
        mfaLevel: e.mfaLevel || l.do.mfaLevel,
        application_id: e.application_id || null,
        explicitContentFilter: e.explicitContentFilter || l.do.explicitContentFilter,
        vanityURLCode: e.vanityURLCode || null,
        premiumTier: e.premiumTier || l.do.premiumTier,
        premiumSubscriberCount: e.premiumSubscriberCount || l.do.premiumSubscriberCount,
        premiumProgressBarEnabled: e.premiumProgressBarEnabled || l.do.premiumProgressBarEnabled,
        premiumProgressBarEnabledUserUpdatedAt:
            e.premiumProgressBarEnabledUserUpdatedAt instanceof Date
                ? e.premiumProgressBarEnabledUserUpdatedAt
                : null != e.premiumProgressBarEnabledUserUpdatedAt
                  ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                  : null,
        systemChannelFlags: e.systemChannelFlags,
        discoverySplash: e.discoverySplash || null,
        rulesChannelId: e.rulesChannelId || null,
        safetyAlertsChannelId: e.safetyAlertsChannelId || null,
        publicUpdatesChannelId: e.publicUpdatesChannelId || null,
        maxStageVideoChannelUsers: e.maxStageVideoChannelUsers || l.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.maxVideoChannelUsers || l.do.maxVideoChannelUsers,
        maxMembers: e.maxMembers || l.do.maxMembers,
        nsfwLevel: e.nsfwLevel ?? l.do.nsfwLevel,
        ownerConfiguredContentLevel: e.ownerConfiguredContentLevel ?? null,
        hubType: e.hubType,
        latestOnboardingQuestionId: e.latestOnboardingQuestionId ?? null,
        profile: e.profile ?? null,
        guildTheme: e.guildTheme ?? null,
        premiumFeatures: e.premiumFeatures ?? null,
        moderatorReporting: e.moderatorReporting ?? null,
        gameApplicationIds: e.gameApplicationIds ?? null,
        officialMessageColor: e.officialMessageColor ?? null,
        verificationRoleId: e.verificationRoleId ?? null,
    });
}
function S(e) {
    var t, n, i;
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        home_header: e.homeHeader,
        features: Array.from(e.features),
        preferred_locale: e.preferredLocale,
        owner_id: e.ownerId,
        application_id: e.application_id,
        afk_channel_id: e.afkChannelId,
        afk_timeout: e.afkTimeout,
        system_channel_id: e.systemChannelId,
        verification_level: e.verificationLevel,
        explicit_content_filter: e.explicitContentFilter,
        default_message_notifications: e.defaultMessageNotifications,
        mfa_level: e.mfaLevel,
        vanity_url_code: e.vanityURLCode ?? null,
        premium_tier: e.premiumTier,
        premium_progress_bar_enabled: e.premiumProgressBarEnabled,
        premium_progress_bar_enabled_user_updated_at: e.premiumProgressBarEnabledUserUpdatedAt?.toISOString() ?? null,
        premium_features:
            null != e.premiumFeatures
                ? {
                      features: (t = e.premiumFeatures).features,
                      additional_emoji_slots: t.additionalEmojiSlots,
                      additional_sticker_slots: t.additionalStickerSlots,
                      additional_sound_slots: t.additionalSoundSlots,
                  }
                : null,
        system_channel_flags: e.systemChannelFlags,
        discovery_splash: e.discoverySplash,
        rules_channel_id: e.rulesChannelId,
        safety_alerts_channel_id: e.safetyAlertsChannelId,
        public_updates_channel_id: e.publicUpdatesChannelId,
        max_stage_video_channel_users: e.maxStageVideoChannelUsers,
        max_video_channel_users: e.maxVideoChannelUsers,
        max_members: e.maxMembers,
        nsfw_level: e.nsfwLevel,
        nsfw: [u.ftr.AGE_RESTRICTED, u.ftr.EXPLICIT].includes(e.nsfwLevel),
        owner_configured_content_level: e.ownerConfiguredContentLevel,
        hub_type: e.hubType,
        latest_onboarding_question_id: e.latestOnboardingQuestionId,
        profile: e.profile,
        theme: null != e.guildTheme ? { enabled: (n = e.guildTheme).enabled, ...(0, o.QK)(n.themeSettings) } : null,
        moderator_reporting:
            null != e.moderatorReporting
                ? {
                      moderator_reporting_enabled: (i = e.moderatorReporting).moderatorReportingEnabled,
                      moderator_report_channel_id: i.moderatorReportChannelId,
                  }
                : null,
        official_message_color: e.officialMessageColor,
        incidents_data: null,
        game_application_ids: e.gameApplicationIds,
        verification_role_id: e.verificationRoleId,
    };
}
function y(e) {
    let t = {
        ...e,
        features: (0, s.y)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                : null,
    };
    return delete t.roles, delete t.member, N(t);
}
function C(e) {
    return N({ ...l.do, ...e });
}
function N(e) {
    return (0, a.yE)(l.vI, e);
}
