"use strict";
n.d(t, {
    $O: () => S,
    DY: () => h,
    Me: () => _,
    Wj: () => d,
    Y1: () => p,
    Yh: () => A,
    b9: () => m,
    dangerouslyConstructGuildRecordFromUntypedObject: () => T,
    fh: () => u,
    kI: () => f,
    rx: () => g,
    tJ: () => v,
    xi: () => E,
    yF: () => I,
    yN: () => y,
    zT: () => c,
});
var r = n(284009),
    i = n.n(r),
    a = n(357758),
    s = n(867051),
    o = n(260509),
    l = n(652215);
function u(e) {
    return (0, s.Wj)(o.vI, e);
}
function c(e, t, n) {
    return (0, s.e)(o.vI, n, {
        id: e.id,
        joinedAt: t.joinedAt,
        premiumSubscriberCount: t.premiumSubscriberCount,
        name: e.name,
        description: e.description ?? null,
        icon: e.icon ?? null,
        splash: e.splash ?? null,
        banner: e.banner ?? null,
        homeHeader: e.home_header ?? null,
        features: (0, a.y)(e.features),
        preferredLocale: e.preferred_locale ?? o.do.preferredLocale,
        ownerId: e.owner_id,
        application_id: e.application_id ?? null,
        afkChannelId: e.afk_channel_id ?? null,
        afkTimeout: e.afk_timeout ?? o.do.afkTimeout,
        systemChannelId: e.system_channel_id ?? null,
        verificationLevel: e.verification_level ?? o.do.verificationLevel,
        explicitContentFilter: e.explicit_content_filter ?? o.do.explicitContentFilter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: e.mfa_level ?? o.do.mfaLevel,
        vanityURLCode: e.vanity_url_code ?? null,
        premiumTier: e.premium_tier ?? o.do.premiumTier,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled || o.do.premiumProgressBarEnabled,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premium_progress_bar_enabled_user_updated_at
                ? new Date(e.premium_progress_bar_enabled_user_updated_at)
                : null,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: e.discovery_splash ?? null,
        rulesChannelId: e.rules_channel_id ?? null,
        safetyAlertsChannelId: e.safety_alerts_channel_id ?? null,
        publicUpdatesChannelId: e.public_updates_channel_id ?? null,
        maxStageVideoChannelUsers: e.max_stage_video_channel_users ?? o.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.max_video_channel_users ?? o.do.maxVideoChannelUsers,
        maxMembers: e.max_members ?? o.do.maxMembers,
        nsfwLevel: e.nsfw_level ?? o.do.nsfwLevel,
        ownerConfiguredContentLevel: e.owner_configured_content_level ?? null,
        hubType: e.hub_type ?? null,
        latestOnboardingQuestionId: e.latest_onboarding_question_id ?? null,
        profile: e.profile ?? null,
        premiumFeatures: null != e.premium_features ? b(e.premium_features) : null,
        moderatorReporting: null != e.moderator_reporting ? R(e.moderator_reporting) : null,
    });
}
function d(e, t) {
    let n = null != e.joined_at ? new Date(e.joined_at) : (t?.joinedAt ?? null),
        r = e.premium_subscription_count ?? 0;
    return null == e.properties
        ? (i()(null != t, "If guild.properties is null, existingGuild must be passed in"),
          (0, s.h1)(t, { joinedAt: n, premiumSubscriberCount: r }))
        : c(e.properties, { joinedAt: n, premiumSubscriberCount: r }, t);
}
function _(e, t, n) {
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
        : c(e.properties, { joinedAt: t.joinedAt, premiumSubscriberCount: t.premiumSubscriberCount }, t);
}
function p(e, t) {
    return c(
        e,
        {
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : (t?.joinedAt ?? null),
            premiumSubscriberCount: e.premium_subscription_count,
        },
        t,
    );
}
function h(e) {
    return v({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        splash: e.splash,
        banner: e.banner,
        features: (0, a.y)(e.features),
        verificationLevel: e.verification_level,
        vanityURLCode: e.vanity_url_code,
        premiumSubscriberCount: e.premium_subscription_count,
        nsfwLevel: e.nsfw_level,
        premiumTier: e.premium_tier,
        homeHeader: e.home_header,
    });
}
function m(e) {
    return v({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        premiumSubscriberCount: e.premiumSubscriberCount ?? o.do.premiumSubscriberCount,
        premiumTier: e.premiumTier ?? o.do.premiumTier,
        features: (0, a.y)(e.features),
    });
}
function g(e) {
    return v({ id: e.id, name: e.name, icon: e.icon ?? null });
}
function E(e) {
    return v({
        id: e.guildId,
        name: e.name ?? "",
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        features: (0, a.y)(e.features),
    });
}
function A(e) {
    return v({
        id: e.id,
        name: e.name,
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        features: (0, a.y)(e.features),
        verificationLevel: e.verification_level ?? o.do.verificationLevel,
    });
}
function I(e) {
    return v({
        id: e.id,
        name: e.name,
        icon: e.icon ?? null,
        description: e.description ?? null,
        splash: e.splash ?? null,
        discoverySplash: e.discovery_splash ?? null,
        features: (0, a.y)(e.features),
    });
}
function T(e) {
    return C({
        id: e.id,
        name: e.name || "",
        description: e.description || null,
        ownerId: e.ownerId || null,
        icon: e.icon || null,
        splash: e.splash || null,
        banner: e.banner || null,
        homeHeader: e.homeHeader || null,
        features: (0, a.y)(e.features),
        preferredLocale: e.preferredLocale || o.do.preferredLocale,
        afkChannelId: e.afkChannelId || null,
        afkTimeout: e.afkTimeout,
        systemChannelId: e.systemChannelId || null,
        verificationLevel: e.verificationLevel || o.do.verificationLevel,
        joinedAt: e.joinedAt instanceof Date ? e.joinedAt : null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt,
        defaultMessageNotifications: e.defaultMessageNotifications || o.do.defaultMessageNotifications,
        mfaLevel: e.mfaLevel || o.do.mfaLevel,
        application_id: e.application_id || null,
        explicitContentFilter: e.explicitContentFilter || o.do.explicitContentFilter,
        vanityURLCode: e.vanityURLCode || null,
        premiumTier: e.premiumTier || o.do.premiumTier,
        premiumSubscriberCount: e.premiumSubscriberCount || o.do.premiumSubscriberCount,
        premiumProgressBarEnabled: e.premiumProgressBarEnabled || o.do.premiumProgressBarEnabled,
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
        maxStageVideoChannelUsers: e.maxStageVideoChannelUsers || o.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.maxVideoChannelUsers || o.do.maxVideoChannelUsers,
        maxMembers: e.maxMembers || o.do.maxMembers,
        nsfwLevel: e.nsfwLevel ?? o.do.nsfwLevel,
        ownerConfiguredContentLevel: e.ownerConfiguredContentLevel ?? null,
        hubType: e.hubType,
        latestOnboardingQuestionId: e.latestOnboardingQuestionId ?? null,
        profile: e.profile ?? null,
        premiumFeatures: e.premiumFeatures ?? null,
        moderatorReporting: e.moderatorReporting ?? null,
    });
}
function y(e) {
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
        premium_features: null != e.premiumFeatures ? N(e.premiumFeatures) : null,
        system_channel_flags: e.systemChannelFlags,
        discovery_splash: e.discoverySplash,
        rules_channel_id: e.rulesChannelId,
        safety_alerts_channel_id: e.safetyAlertsChannelId,
        public_updates_channel_id: e.publicUpdatesChannelId,
        max_stage_video_channel_users: e.maxStageVideoChannelUsers,
        max_video_channel_users: e.maxVideoChannelUsers,
        max_members: e.maxMembers,
        nsfw_level: e.nsfwLevel,
        nsfw: [l.ftr.AGE_RESTRICTED, l.ftr.EXPLICIT].includes(e.nsfwLevel),
        owner_configured_content_level: e.ownerConfiguredContentLevel,
        hub_type: e.hubType,
        latest_onboarding_question_id: e.latestOnboardingQuestionId,
        profile: e.profile,
        moderator_reporting: null != e.moderatorReporting ? O(e.moderatorReporting) : null,
        incidents_data: null,
    };
}
function S(e) {
    let t = {
        ...e,
        features: (0, a.y)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                : null,
    };
    return delete t.roles, delete t.member, C(t);
}
function v(e) {
    return C({ ...o.do, ...e });
}
function C(e) {
    return (0, s.yE)(o.vI, e);
}
function b(e) {
    return {
        features: e.features,
        additionalEmojiSlots: e.additional_emoji_slots,
        additionalStickerSlots: e.additional_sticker_slots,
        additionalSoundSlots: e.additional_sound_slots,
    };
}
function N(e) {
    return {
        features: e.features,
        additional_emoji_slots: e.additionalEmojiSlots,
        additional_sticker_slots: e.additionalStickerSlots,
        additional_sound_slots: e.additionalSoundSlots,
    };
}
function R(e) {
    return {
        moderatorReportingEnabled: e.moderator_reporting_enabled,
        moderatorReportChannelId: e.moderator_report_channel_id,
    };
}
function O(e) {
    return {
        moderator_reporting_enabled: e.moderatorReportingEnabled,
        moderator_report_channel_id: e.moderatorReportChannelId,
    };
}
