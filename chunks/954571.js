"use strict";
n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => k,
        AnalyticsContext: () => T,
        AnalyticsSchema: () => f,
        addExtraAnalyticsDecorator: () => x,
        clearAnalyticsEventsRecording: () => X,
        debugLogEvent: () => W,
        default: () => ei,
        expandEventProperties: () => Y,
        expandLocation: () => U,
        getAnalyticsEventsRecording: () => Z,
        getNewAnalyticsLoadId: () => er,
        isGameApplicationType: () => et,
        launchSignature: () => M,
        setUTMContext: () => j,
        startRecordingAnalyticsEvents: () => z,
        stopRecordingAnalyticsEvents: () => q,
        trackNetworkAction: () => en,
    }),
    n(321073);
var r = n(64700),
    i = n(835245),
    s = n(110259),
    a = n(613345),
    o = n(306173),
    l = n(73153),
    u = n(686757),
    c = n(53943),
    d = n(790171),
    _ = n(111162),
    f = n(757811),
    p = n(321034),
    h = n(728458),
    m = n(652215),
    E = n(53298),
    g = n(705751),
    A = n(985018);
let I = { location: {} },
    T = r.createContext(I),
    S = {},
    y = 1e3,
    v = 1e4,
    N = 6e4,
    C = 12e4,
    R = 3e5,
    O = 9e5,
    b = 36e5,
    D = 864e5,
    L = 0.001,
    w = performance.now(),
    M = (0, o.xd)() ? (0, o.xy)((0, a.V)()) : null;
s.extendSuperProperties({ launch_signature: M });
let P = [];
function x(e) {
    P.push(e);
}
let k = {
    [m.HAw.APP_OPENED]: { throttlePeriod: R, throttleKeys: () => [] },
    [m.HAw.APP_BACKGROUND]: { throttlePeriod: C, throttleKeys: () => [] },
    [m.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === m.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [m.HAw.GUILD_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [m.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [m.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [m.HAw.START_SPEAKING]: { throttlePeriod: O, throttleKeys: (e) => [e.server] },
    [m.HAw.START_LISTENING]: { throttlePeriod: O, throttleKeys: (e) => [e.server] },
    [m.HAw.ACTIVITY_UPDATED]: { throttlePeriod: N, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [m.HAw.CHANNEL_OPENED]: {
        throttlePeriod: O,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : [e.channel_id, e.channel_view],
    },
    [m.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: D, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.notif_type] },
    [m.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.DM_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: O, throttleKeys: () => [] },
    [m.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [m.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: v, throttleKeys: () => [] },
    [m.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.type] },
    [m.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: C, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [m.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: R, throttleKeys: () => [] },
    [m.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: R, throttleKeys: () => [] },
    [m.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: O, throttleKeys: () => [] },
    [m.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: O, throttleKeys: () => [] },
    [m.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: D, throttleKeys: () => [] },
    [m.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: L,
    },
    [m.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: L,
    },
    [m.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: D, throttleKeys: (e) => [e.application_id] },
    [m.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [m.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: N, throttleKeys: (e) => [e.type] },
    [m.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: N, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [m.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [m.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: N, throttleKeys: (e) => [e.user_id] },
    [m.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: N, throttleKeys: () => [] },
    [m.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: R, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.context, e.guild_id] },
    [m.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id] },
    [m.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab] },
    [m.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id] },
    [m.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [m.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: b, throttleKeys: () => [] },
    [m.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: R, throttleKeys: (e) => [e.location_stack] },
    [m.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: R, throttleKeys: (e) => [e.location_stack] },
    [m.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [m.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [m.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: y, throttleKeys: (e) => [e.channel_id] },
    [m.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [m.HAw.OPEN_MODAL]: (e) =>
        e.type === m.JJy.MEDIA_VIEWER ? { throttlePeriod: N, throttleKeys: (e) => [e.type] } : void 0,
    [m.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: v, throttleKeys: (e) => [e.guild_id] },
    [m.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * b,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [m.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: b, throttleKeys: (e) => [e.search_type] },
    [m.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: D, throttleKeys: () => [] },
    [m.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.application_id] },
    [m.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: b, throttleKeys: () => [] },
    [m.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: y, throttleKeys: () => [] },
    [m.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: O, throttleKeys: () => [] },
};
function U(e) {
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
function G(e) {
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
function V(e) {
    F = e;
}
function B(e) {
    d.o.includes(e) || h.A.addBreadcrumb({ category: "analytics", message: e });
}
let H = (0, s.trackMaker)({ addBreadcrumb: B, analyticEventConfigs: k, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function j(e) {
    return (S = e);
}
function Y(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...U(e) };
    }
    if (null != t.source) {
        let { source: e, ...n } = t;
        t = { ...n, ...G(e) };
    }
    (t.client_performance_cpu = p.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = p.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = p.A.getCPUCoreCount()),
        (t.accessibility_features = F()),
        (t.rendered_locale = A.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - w) / y));
    let n = p.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: r, utmMedium: i, utmCampaign: s, utmContent: a } = S;
    return (
        (t.utm_source = t.utm_source ?? r),
        (t.utm_medium = t.utm_medium ?? i),
        (t.utm_campaign = t.utm_campaign ?? s),
        (t.utm_content = t.utm_content ?? a),
        (t.launch_signature = M),
        P.forEach((e) => e(t)),
        t
    );
}
function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    _.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? c.z8("Analytics", e, t) : c.z8("Analytics", e);
}
let K = !1,
    $ = {};
function z() {
    K = !0;
}
function q() {
    K = !1;
}
function Z() {
    return $;
}
function X() {
    Object.keys($).forEach((e) => {
        delete $[e];
    });
}
function Q(e, t) {
    return !!K && (null != t && (Array.isArray($[e]) ? $[e].push(t) : ($[e] = [t])), !0);
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if ((Q(e, t), null != n.throttlePercent && Math.random() > n.throttlePercent)) return Promise.resolve();
    let i = Y(t);
    return W(r, i, n.logEventProperties), H(e, i, { flush: n.flush, fingerprint: n.fingerprint });
}
let ee = (0, s.trackMaker)({ addBreadcrumb: B, analyticEventConfigs: k, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function et(e) {
    return e === g.S7.GAME || e === g.S7.DEPRECATED_GAME;
}
function en(e, t) {
    let n = Y({ location: (0, u.g$)(), ...t });
    (0, u.eE)(e, { type: "action", ...t }), W(e, n), ee(e, n);
}
function er() {
    return (0, i.A)();
}
let ei = {
    ...s,
    getCampaignParams: s.getCampaignParams,
    setSystemAccessibilityFeatures: V,
    expandEventProperties: Y,
    track: J,
};
