n.d(t, {
    $O: () => C,
    DY: () => y,
    Me: () => m,
    Wj: () => h,
    Y1: () => E,
    Yh: () => A,
    b9: () => b,
    dangerouslyConstructGuildRecordFromUntypedObject: () => S,
    fh: () => p,
    kI: () => g,
    rx: () => O,
    tJ: () => N,
    xi: () => v,
    yF: () => I,
    yN: () => T,
    zT: () => _,
}),
    n(228524);
var r = n(284009),
    i = n.n(r),
    a = n(357758),
    o = n(867051),
    s = n(260509),
    l = n(652215);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p(e) {
    return (0, o.Wj)(s.vI, e);
}

function _(e, t, n) {
    var r, i, l, c, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S, T, C, N, w, P, L, x;
    return (0, o.e)(s.vI, n, {
        id: e.id,
        joinedAt: t.joinedAt,
        premiumSubscriberCount: t.premiumSubscriberCount,
        name: e.name,
        description: null != (r = e.description) ? r : null,
        icon: null != (i = e.icon) ? i : null,
        splash: null != (l = e.splash) ? l : null,
        banner: null != (c = e.banner) ? c : null,
        homeHeader: null != (u = e.home_header) ? u : null,
        features: (0, a.y)(e.features),
        preferredLocale: null != (d = e.preferred_locale) ? d : s.do.preferredLocale,
        ownerId: e.owner_id,
        application_id: null != (f = e.application_id) ? f : null,
        afkChannelId: null != (p = e.afk_channel_id) ? p : null,
        afkTimeout: null != (_ = e.afk_timeout) ? _ : s.do.afkTimeout,
        systemChannelId: null != (h = e.system_channel_id) ? h : null,
        verificationLevel: null != (m = e.verification_level) ? m : s.do.verificationLevel,
        explicitContentFilter: null != (g = e.explicit_content_filter) ? g : s.do.explicitContentFilter,
        defaultMessageNotifications: e.default_message_notifications,
        mfaLevel: null != (E = e.mfa_level) ? E : s.do.mfaLevel,
        vanityURLCode: null != (y = e.vanity_url_code) ? y : null,
        premiumTier: null != (b = e.premium_tier) ? b : s.do.premiumTier,
        premiumProgressBarEnabled: e.premium_progress_bar_enabled || s.do.premiumProgressBarEnabled,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premium_progress_bar_enabled_user_updated_at
                ? new Date(e.premium_progress_bar_enabled_user_updated_at)
                : null,
        systemChannelFlags: e.system_channel_flags,
        discoverySplash: null != (O = e.discovery_splash) ? O : null,
        rulesChannelId: null != (v = e.rules_channel_id) ? v : null,
        safetyAlertsChannelId: null != (A = e.safety_alerts_channel_id) ? A : null,
        publicUpdatesChannelId: null != (I = e.public_updates_channel_id) ? I : null,
        maxStageVideoChannelUsers: null != (S = e.max_stage_video_channel_users) ? S : s.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: null != (T = e.max_video_channel_users) ? T : s.do.maxVideoChannelUsers,
        maxMembers: null != (C = e.max_members) ? C : s.do.maxMembers,
        nsfwLevel: null != (N = e.nsfw_level) ? N : s.do.nsfwLevel,
        ownerConfiguredContentLevel: null != (w = e.owner_configured_content_level) ? w : null,
        hubType: null != (P = e.hub_type) ? P : null,
        latestOnboardingQuestionId: null != (L = e.latest_onboarding_question_id) ? L : null,
        profile: null != (x = e.profile) ? x : null,
        premiumFeatures: null != e.premium_features ? R(e.premium_features) : null,
        moderatorReporting: null != e.moderator_reporting ? D(e.moderator_reporting) : null,
    });
}

function h(e, t) {
    var n, r;
    let a = null != e.joined_at ? new Date(e.joined_at) : null != (n = null == t ? void 0 : t.joinedAt) ? n : null,
        s = null != (r = e.premium_subscription_count) ? r : 0;
    return null == e.properties
        ? (i()(null != t, "If guild.properties is null, existingGuild must be passed in"),
          (0, o.h1)(t, {
              joinedAt: a,
              premiumSubscriberCount: s,
          }))
        : _(
              e.properties,
              {
                  joinedAt: a,
                  premiumSubscriberCount: s,
              },
              t,
          );
}

function m(e, t, n) {
    return f(u({}, e), {
        joinedAt: null != e.joinedAt ? e.joinedAt.toISOString() : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? e.premiumProgressBarEnabledUserUpdatedAt.toISOString()
                : null,
        features: Array.from(e.features),
        roles: t,
        member:
            null != n
                ? {
                      userId: n.userId,
                      roles: n.roles,
                  }
                : null,
    });
}

function g(e, t) {
    return null == e.properties
        ? t
        : _(
              e.properties,
              {
                  joinedAt: t.joinedAt,
                  premiumSubscriberCount: t.premiumSubscriberCount,
              },
              t,
          );
}

function E(e, t) {
    var n;
    return _(
        e,
        {
            joinedAt:
                null != e.joined_at ? new Date(e.joined_at) : null != (n = null == t ? void 0 : t.joinedAt) ? n : null,
            premiumSubscriberCount: e.premium_subscription_count,
        },
        t,
    );
}

function y(e) {
    return N({
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

function b(e) {
    var t, n;
    return N({
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon,
        premiumSubscriberCount: null != (t = e.premiumSubscriberCount) ? t : s.do.premiumSubscriberCount,
        premiumTier: null != (n = e.premiumTier) ? n : s.do.premiumTier,
        features: (0, a.y)(e.features),
    });
}

function O(e) {
    var t;
    return N({
        id: e.id,
        name: e.name,
        icon: null != (t = e.icon) ? t : null,
    });
}

function v(e) {
    var t, n, r, i;
    return N({
        id: e.guildId,
        name: null != (t = e.name) ? t : "",
        icon: null != (n = e.icon) ? n : null,
        description: null != (r = e.description) ? r : null,
        splash: null != (i = e.splash) ? i : null,
        features: (0, a.y)(e.features),
    });
}

function A(e) {
    var t, n, r, i;
    return N({
        id: e.id,
        name: e.name,
        icon: null != (t = e.icon) ? t : null,
        description: null != (n = e.description) ? n : null,
        splash: null != (r = e.splash) ? r : null,
        features: (0, a.y)(e.features),
        verificationLevel: null != (i = e.verification_level) ? i : s.do.verificationLevel,
    });
}

function I(e) {
    var t, n, r, i;
    return N({
        id: e.id,
        name: e.name,
        icon: null != (t = e.icon) ? t : null,
        description: null != (n = e.description) ? n : null,
        splash: null != (r = e.splash) ? r : null,
        discoverySplash: null != (i = e.discovery_splash) ? i : null,
        features: (0, a.y)(e.features),
    });
}

function S(e) {
    var t, n, r, i, o, l;
    return w({
        id: e.id,
        name: e.name || "",
        description: e.description || null,
        ownerId: e.ownerId || null,
        icon: e.icon || null,
        splash: e.splash || null,
        banner: e.banner || null,
        homeHeader: e.homeHeader || null,
        features: (0, a.y)(e.features),
        preferredLocale: e.preferredLocale || s.do.preferredLocale,
        afkChannelId: e.afkChannelId || null,
        afkTimeout: e.afkTimeout,
        systemChannelId: e.systemChannelId || null,
        verificationLevel: e.verificationLevel || s.do.verificationLevel,
        joinedAt: e.joinedAt instanceof Date ? e.joinedAt : null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt,
        defaultMessageNotifications: e.defaultMessageNotifications || s.do.defaultMessageNotifications,
        mfaLevel: e.mfaLevel || s.do.mfaLevel,
        application_id: e.application_id || null,
        explicitContentFilter: e.explicitContentFilter || s.do.explicitContentFilter,
        vanityURLCode: e.vanityURLCode || null,
        premiumTier: e.premiumTier || s.do.premiumTier,
        premiumSubscriberCount: e.premiumSubscriberCount || s.do.premiumSubscriberCount,
        premiumProgressBarEnabled: e.premiumProgressBarEnabled || s.do.premiumProgressBarEnabled,
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
        maxStageVideoChannelUsers: e.maxStageVideoChannelUsers || s.do.maxStageVideoChannelUsers,
        maxVideoChannelUsers: e.maxVideoChannelUsers || s.do.maxVideoChannelUsers,
        maxMembers: e.maxMembers || s.do.maxMembers,
        nsfwLevel: null != (t = e.nsfwLevel) ? t : s.do.nsfwLevel,
        ownerConfiguredContentLevel: null != (n = e.ownerConfiguredContentLevel) ? n : null,
        hubType: e.hubType,
        latestOnboardingQuestionId: null != (r = e.latestOnboardingQuestionId) ? r : null,
        profile: null != (i = e.profile) ? i : null,
        premiumFeatures: null != (o = e.premiumFeatures) ? o : null,
        moderatorReporting: null != (l = e.moderatorReporting) ? l : null,
    });
}

function T(e) {
    var t, n, r;
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
        vanity_url_code: null != (t = e.vanityURLCode) ? t : null,
        premium_tier: e.premiumTier,
        premium_progress_bar_enabled: e.premiumProgressBarEnabled,
        premium_progress_bar_enabled_user_updated_at:
            null != (n = null == (r = e.premiumProgressBarEnabledUserUpdatedAt) ? void 0 : r.toISOString()) ? n : null,
        premium_features: null != e.premiumFeatures ? P(e.premiumFeatures) : null,
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
        moderator_reporting: null != e.moderatorReporting ? L(e.moderatorReporting) : null,
        incidents_data: null,
    };
}

function C(e) {
    let t = f(u({}, e), {
        features: (0, a.y)(e.features),
        joinedAt: null != e.joinedAt ? new Date(e.joinedAt) : null,
        premiumProgressBarEnabledUserUpdatedAt:
            null != e.premiumProgressBarEnabledUserUpdatedAt
                ? new Date(e.premiumProgressBarEnabledUserUpdatedAt)
                : null,
    });
    return delete t.roles, delete t.member, w(t);
}

function N(e) {
    return w(u({}, s.do, e));
}

function w(e) {
    return (0, o.yE)(s.vI, e);
}

function R(e) {
    return {
        features: e.features,
        additionalEmojiSlots: e.additional_emoji_slots,
        additionalStickerSlots: e.additional_sticker_slots,
        additionalSoundSlots: e.additional_sound_slots,
    };
}

function P(e) {
    return {
        features: e.features,
        additional_emoji_slots: e.additionalEmojiSlots,
        additional_sticker_slots: e.additionalStickerSlots,
        additional_sound_slots: e.additionalSoundSlots,
    };
}

function D(e) {
    return {
        moderatorReportingEnabled: e.moderator_reporting_enabled,
        moderatorReportChannelId: e.moderator_report_channel_id,
    };
}

function L(e) {
    return {
        moderator_reporting_enabled: e.moderatorReportingEnabled,
        moderator_report_channel_id: e.moderatorReportChannelId,
    };
}
