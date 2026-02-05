"use strict";
n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => U,
        AnalyticsContext: () => y,
        AnalyticsSchema: () => p,
        addExtraAnalyticsDecorator: () => k,
        clearAnalyticsEventsRecording: () => Q,
        debugLogEvent: () => W,
        default: () => ei,
        expandEventProperties: () => Y,
        expandLocation: () => G,
        getAnalyticsEventsRecording: () => Z,
        getNewAnalyticsLoadId: () => er,
        isGameApplicationType: () => et,
        launchSignature: () => P,
        setUTMContext: () => H,
        startRecordingAnalyticsEvents: () => $,
        stopRecordingAnalyticsEvents: () => q,
        trackNetworkAction: () => en,
    }),
    n(321073);
var r = n(64700),
    i = n(835245),
    a = n(110259),
    s = n(613345),
    o = n(306173),
    l = n(73153),
    u = n(793574),
    c = n(686757),
    d = n(53943),
    _ = n(790171),
    f = n(111162),
    p = n(757811),
    h = n(321034),
    m = n(728458),
    g = n(652215),
    E = n(53298),
    A = n(705751),
    I = n(985018);
let T = { location: {} },
    y = r.createContext(T),
    S = {},
    v = 1e3,
    C = 1e4,
    b = 6e4,
    N = 12e4,
    R = 3e5,
    O = 9e5,
    D = 36e5,
    L = 864e5,
    w = 0.001,
    x = performance.now(),
    P = (0, o.xd)() ? (0, o.xy)((0, s.V)()) : null;
a.extendSuperProperties({ launch_signature: P });
let M = [];
function k(e) {
    M.push(e);
}
let U = {
    [g.HAw.APP_OPENED]: { throttlePeriod: R, throttleKeys: () => [] },
    [g.HAw.APP_BACKGROUND]: { throttlePeriod: N, throttleKeys: () => [] },
    [g.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === g.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [g.HAw.GUILD_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [g.HAw.FRIENDS_LIST_CLICKED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [g.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [g.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [g.HAw.START_SPEAKING]: { throttlePeriod: O, throttleKeys: (e) => [e.server] },
    [g.HAw.START_LISTENING]: { throttlePeriod: O, throttleKeys: (e) => [e.server] },
    [g.HAw.ACTIVITY_UPDATED]: { throttlePeriod: b, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [g.HAw.CHANNEL_OPENED]: {
        throttlePeriod: O,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : null != e.location && e.location.startsWith(u.A.FREQUENT_FRIENDS_ROW)
                  ? [e.channel_id, e.channel_view, e.location]
                  : [e.channel_id, e.channel_view],
    },
    [g.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: L, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.notif_type] },
    [g.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.DM_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: O, throttleKeys: () => [] },
    [g.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [g.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: C, throttleKeys: () => [] },
    [g.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.type] },
    [g.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: N, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [g.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: R, throttleKeys: () => [] },
    [g.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: R, throttleKeys: () => [] },
    [g.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: O, throttleKeys: () => [] },
    [g.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: O, throttleKeys: () => [] },
    [g.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: L, throttleKeys: () => [] },
    [g.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: w,
    },
    [g.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: w,
    },
    [g.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: L, throttleKeys: (e) => [e.application_id] },
    [g.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: L, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [g.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: b, throttleKeys: (e) => [e.type] },
    [g.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: b, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [g.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [g.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: b, throttleKeys: (e) => [e.user_id] },
    [g.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: b, throttleKeys: () => [] },
    [g.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: R, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.context, e.guild_id] },
    [g.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id] },
    [g.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab] },
    [g.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id] },
    [g.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: b,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: D, throttleKeys: () => [] },
    [g.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: R, throttleKeys: (e) => [e.location_stack] },
    [g.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: R, throttleKeys: (e) => [e.location_stack] },
    [g.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [g.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [g.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: v, throttleKeys: (e) => [e.channel_id] },
    [g.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [g.HAw.OPEN_MODAL]: (e) =>
        e.type === g.JJy.MEDIA_VIEWER ? { throttlePeriod: b, throttleKeys: (e) => [e.type] } : void 0,
    [g.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: C, throttleKeys: (e) => [e.guild_id] },
    [g.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * D,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [g.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.search_type] },
    [g.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: L, throttleKeys: () => [] },
    [g.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: L, throttleKeys: (e) => [e.application_id] },
    [g.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: D, throttleKeys: () => [] },
    [g.HAw.DEBUG_MISSING_STRING]: { throttlePeriod: D, throttleKeys: () => [] },
    [g.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: v, throttleKeys: () => [] },
    [g.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: O, throttleKeys: () => [] },
};
function G(e) {
    return "string" == typeof e
        ? { location: e }
        : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType,
          };
}
function V(e) {
    return "string" == typeof e
        ? { source: e }
        : {
              source_page: e.page,
              source_section: e.section,
              source_object: e.object,
              source_object_type: e.objectType,
              source_promotion_id: e.promotionId,
          };
}
let F = () => E.O.NONE;
function B(e) {
    F = e;
}
let j = (0, a.trackMaker)({ analyticEventConfigs: U, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function H(e) {
    return (S = e);
}
function Y(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...G(e) };
    }
    if (null != t.source) {
        let { source: e, ...n } = t;
        t = { ...n, ...V(e) };
    }
    (t.client_performance_cpu = h.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = h.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = h.A.getCPUCoreCount()),
        (t.accessibility_features = F()),
        (t.rendered_locale = I.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - x) / v));
    let n = h.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: r, utmMedium: i, utmCampaign: a, utmContent: s } = S;
    return (
        (t.utm_source = t.utm_source ?? r),
        (t.utm_medium = t.utm_medium ?? i),
        (t.utm_campaign = t.utm_campaign ?? a),
        (t.utm_content = t.utm_content ?? s),
        (t.launch_signature = P),
        M.forEach((e) => e(t)),
        t
    );
}
function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    f.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? d.z8("Analytics", e, t) : d.z8("Analytics", e);
}
let K = !1,
    z = {};
function $() {
    K = !0;
}
function q() {
    K = !1;
}
function Z() {
    return z;
}
function Q() {
    Object.keys(z).forEach((e) => {
        delete z[e];
    });
}
function X(e, t) {
    return !!K && (null != t && (Array.isArray(z[e]) ? z[e].push(t) : (z[e] = [t])), !0);
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (_.o.includes(r) || m.A.addBreadcrumb({ category: "analytics", message: `${r}` }),
        X(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = Y(t);
    return W(r, i, n.logEventProperties), j(e, i, { flush: n.flush, fingerprint: n.fingerprint });
}
let ee = (0, a.trackMaker)({ analyticEventConfigs: U, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function et(e) {
    return e === A.S7.GAME || e === A.S7.DEPRECATED_GAME;
}
function en(e, t) {
    let n = Y({ location: (0, c.g$)(), ...t });
    (0, c.eE)(e, { type: "action", ...t }), W(e, n), ee(e, n);
}
function er() {
    return (0, i.A)();
}
let ei = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: B,
    expandEventProperties: Y,
    track: J,
};
