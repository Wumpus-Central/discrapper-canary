"use strict";
n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => U,
        AnalyticsContext: () => S,
        AnalyticsSchema: () => p,
        addExtraAnalyticsDecorator: () => k,
        clearAnalyticsEventsRecording: () => X,
        debugLogEvent: () => W,
        default: () => ei,
        expandEventProperties: () => Y,
        expandLocation: () => G,
        getAnalyticsEventsRecording: () => Z,
        getNewAnalyticsLoadId: () => er,
        isGameApplicationType: () => et,
        launchSignature: () => M,
        setUTMContext: () => j,
        startRecordingAnalyticsEvents: () => $,
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
    u = n(793574),
    c = n(686757),
    d = n(53943),
    _ = n(790171),
    f = n(111162),
    p = n(757811),
    h = n(321034),
    m = n(728458),
    E = n(652215),
    g = n(53298),
    A = n(705751),
    I = n(985018);
let T = { location: {} },
    S = r.createContext(T),
    y = {},
    v = 1e3,
    N = 1e4,
    C = 6e4,
    b = 12e4,
    R = 3e5,
    O = 9e5,
    D = 36e5,
    L = 864e5,
    w = 0.001,
    x = performance.now(),
    M = (0, o.xd)() ? (0, o.xy)((0, a.V)()) : null;
s.extendSuperProperties({ launch_signature: M });
let P = [];
function k(e) {
    P.push(e);
}
let U = {
    [E.HAw.APP_OPENED]: { throttlePeriod: R, throttleKeys: () => [] },
    [E.HAw.APP_BACKGROUND]: { throttlePeriod: b, throttleKeys: () => [] },
    [E.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === E.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [E.HAw.GUILD_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [E.HAw.FRIENDS_LIST_CLICKED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.START_SPEAKING]: { throttlePeriod: O, throttleKeys: (e) => [e.server] },
    [E.HAw.START_LISTENING]: { throttlePeriod: O, throttleKeys: (e) => [e.server] },
    [E.HAw.ACTIVITY_UPDATED]: { throttlePeriod: C, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [E.HAw.CHANNEL_OPENED]: {
        throttlePeriod: O,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : null != e.location && e.location.startsWith(u.A.FREQUENT_FRIENDS_ROW)
                  ? [e.channel_id, e.channel_view, e.location]
                  : [e.channel_id, e.channel_view],
    },
    [E.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: L, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.notif_type] },
    [E.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.DM_LIST_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: O, throttleKeys: () => [] },
    [E.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: b,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [E.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: N, throttleKeys: () => [] },
    [E.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.type] },
    [E.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: b, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [E.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: R, throttleKeys: () => [] },
    [E.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: R, throttleKeys: () => [] },
    [E.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: O, throttleKeys: () => [] },
    [E.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: O, throttleKeys: () => [] },
    [E.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: L, throttleKeys: () => [] },
    [E.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: w,
    },
    [E.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: w,
    },
    [E.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: L, throttleKeys: (e) => [e.application_id] },
    [E.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: L, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [E.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: C, throttleKeys: (e) => [e.type] },
    [E.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: C, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [E.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [E.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: C, throttleKeys: (e) => [e.user_id] },
    [E.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: C, throttleKeys: () => [] },
    [E.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: R, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.context, e.guild_id] },
    [E.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: O, throttleKeys: (e) => [e.tab] },
    [E.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: O, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [E.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: D, throttleKeys: () => [] },
    [E.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: R, throttleKeys: (e) => [e.location_stack] },
    [E.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: R, throttleKeys: (e) => [e.location_stack] },
    [E.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [E.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [E.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: v, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [E.HAw.OPEN_MODAL]: (e) =>
        e.type === E.JJy.MEDIA_VIEWER ? { throttlePeriod: C, throttleKeys: (e) => [e.type] } : void 0,
    [E.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: N, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * D,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [E.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.search_type] },
    [E.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: L, throttleKeys: () => [] },
    [E.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: L, throttleKeys: (e) => [e.application_id] },
    [E.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: D, throttleKeys: () => [] },
    [E.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: v, throttleKeys: () => [] },
    [E.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: O, throttleKeys: () => [] },
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
function F(e) {
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
let V = () => g.O.NONE;
function B(e) {
    V = e;
}
let H = (0, s.trackMaker)({ analyticEventConfigs: U, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function j(e) {
    return (y = e);
}
function Y(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...G(e) };
    }
    if (null != t.source) {
        let { source: e, ...n } = t;
        t = { ...n, ...F(e) };
    }
    (t.client_performance_cpu = h.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = h.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = h.A.getCPUCoreCount()),
        (t.accessibility_features = V()),
        (t.rendered_locale = I.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - x) / v));
    let n = h.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: r, utmMedium: i, utmCampaign: s, utmContent: a } = y;
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
function X() {
    Object.keys(z).forEach((e) => {
        delete z[e];
    });
}
function Q(e, t) {
    return !!K && (null != t && (Array.isArray(z[e]) ? z[e].push(t) : (z[e] = [t])), !0);
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (_.o.includes(r) || m.A.addBreadcrumb({ category: "analytics", message: `${r}` }),
        Q(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = Y(t);
    return W(r, i, n.logEventProperties), H(e, i, { flush: n.flush, fingerprint: n.fingerprint });
}
let ee = (0, s.trackMaker)({ analyticEventConfigs: U, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
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
    ...s,
    getCampaignParams: s.getCampaignParams,
    setSystemAccessibilityFeatures: B,
    expandEventProperties: Y,
    track: J,
};
