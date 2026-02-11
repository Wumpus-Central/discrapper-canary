"use strict";
n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => G,
        AnalyticsContext: () => S,
        AnalyticsSchema: () => h,
        addExtraAnalyticsDecorator: () => U,
        clearAnalyticsEventsRecording: () => Q,
        debugLogEvent: () => K,
        default: () => ea,
        expandEventProperties: () => W,
        expandLocation: () => F,
        getAnalyticsEventsRecording: () => Z,
        getNewAnalyticsLoadId: () => ei,
        isGameApplicationType: () => en,
        launchSignature: () => M,
        setUTMContext: () => Y,
        startRecordingAnalyticsEvents: () => q,
        stopRecordingAnalyticsEvents: () => X,
        trackNetworkAction: () => er,
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
    h = n(757811),
    p = n(321034),
    g = n(728458),
    E = n(652215),
    A = n(53298),
    I = n(705751),
    T = n(985018);
let y = { location: {} },
    S = r.createContext(y),
    v = {},
    C = 1e3,
    b = 1e4,
    N = 6e4,
    R = 12e4,
    O = 3e5,
    D = 9e5,
    L = 36e5,
    w = 864e5,
    x = 0.001,
    P = performance.now(),
    M = (0, o.xd)() ? (0, o.xy)((0, s.V)()) : null;
a.extendSuperProperties({ launch_signature: M });
let k = [];
function U(e) {
    k.push(e);
}
let G = {
    [E.HAw.APP_OPENED]: { throttlePeriod: O, throttleKeys: () => [] },
    [E.HAw.APP_BACKGROUND]: { throttlePeriod: R, throttleKeys: () => [] },
    [E.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === E.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: D, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [E.HAw.GUILD_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [E.HAw.FRIENDS_LIST_CLICKED]: { throttlePeriod: D, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: D, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.START_SPEAKING]: { throttlePeriod: D, throttleKeys: (e) => [e.server] },
    [E.HAw.START_LISTENING]: { throttlePeriod: D, throttleKeys: (e) => [e.server] },
    [E.HAw.ACTIVITY_UPDATED]: { throttlePeriod: N, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [E.HAw.CHANNEL_OPENED]: {
        throttlePeriod: D,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : null != e.location && e.location.startsWith(u.A.FREQUENT_FRIENDS_ROW)
                  ? [e.channel_id, e.channel_view, e.location]
                  : [e.channel_id, e.channel_view],
    },
    [E.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: w, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.notif_type] },
    [E.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.DM_LIST_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: D, throttleKeys: () => [] },
    [E.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [E.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: b, throttleKeys: () => [] },
    [E.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.type] },
    [E.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: R, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [E.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: O, throttleKeys: () => [] },
    [E.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: O, throttleKeys: () => [] },
    [E.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: D, throttleKeys: () => [] },
    [E.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: D, throttleKeys: () => [] },
    [E.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: w, throttleKeys: () => [] },
    [E.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: x,
    },
    [E.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: x,
    },
    [E.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: w, throttleKeys: (e) => [e.application_id] },
    [E.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: w, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [E.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: N, throttleKeys: (e) => [e.type] },
    [E.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: N, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [E.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: D, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [E.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: N, throttleKeys: (e) => [e.user_id] },
    [E.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: N, throttleKeys: () => [] },
    [E.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: O, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: D, throttleKeys: (e) => [e.context, e.guild_id] },
    [E.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: D, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: D, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: D, throttleKeys: (e) => [e.tab] },
    [E.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: D, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [E.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: L, throttleKeys: () => [] },
    [E.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: O, throttleKeys: (e) => [e.location_stack] },
    [E.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: O, throttleKeys: (e) => [e.location_stack] },
    [E.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: D, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [E.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [E.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: C, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: D, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [E.HAw.OPEN_MODAL]: (e) =>
        e.type === E.JJy.MEDIA_VIEWER ? { throttlePeriod: N, throttleKeys: (e) => [e.type] } : void 0,
    [E.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: b, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * L,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [E.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: L, throttleKeys: (e) => [e.search_type] },
    [E.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: w, throttleKeys: () => [] },
    [E.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: w, throttleKeys: (e) => [e.application_id] },
    [E.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: L, throttleKeys: () => [] },
    [E.HAw.DEBUG_MISSING_STRING]: { throttlePeriod: L, throttleKeys: () => [] },
    [E.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: C, throttleKeys: () => [] },
    [E.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: D, throttleKeys: () => [] },
};
function F(e) {
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
let B = () => A.O.NONE;
function j(e) {
    B = e;
}
let H = (0, a.trackMaker)({ analyticEventConfigs: G, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function Y(e) {
    return (v = e);
}
function W(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...F(e) };
    }
    if (null != t.source) {
        let { source: e, ...n } = t;
        t = { ...n, ...V(e) };
    }
    (t.client_performance_cpu = p.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = p.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = p.A.getCPUCoreCount()),
        (t.accessibility_features = B()),
        (t.rendered_locale = T.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - P) / C));
    let n = p.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: r, utmMedium: i, utmCampaign: a, utmContent: s } = v;
    return (
        (t.utm_source = t.utm_source ?? r),
        (t.utm_medium = t.utm_medium ?? i),
        (t.utm_campaign = t.utm_campaign ?? a),
        (t.utm_content = t.utm_content ?? s),
        (t.launch_signature = M),
        k.forEach((e) => e(t)),
        t
    );
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    f.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? d.z8("Analytics", e, t) : d.z8("Analytics", e);
}
let $ = !1,
    z = {};
function q() {
    $ = !0;
}
function X() {
    $ = !1;
}
function Z() {
    return z;
}
function Q() {
    Object.keys(z).forEach((e) => {
        delete z[e];
    });
}
function J(e, t) {
    return !!$ && (null != t && (Array.isArray(z[e]) ? z[e].push(t) : (z[e] = [t])), !0);
}
function ee(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (_.o.includes(r) || g.A.addBreadcrumb({ category: "analytics", message: `${r}` }),
        J(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = W(t);
    return K(r, i, n.logEventProperties), H(e, i, { flush: n.flush, fingerprint: n.fingerprint });
}
let et = (0, a.trackMaker)({ analyticEventConfigs: G, dispatcher: l.h, TRACK_ACTION_NAME: "TRACK" });
function en(e) {
    return e === I.S7.GAME || e === I.S7.DEPRECATED_GAME;
}
function er(e, t) {
    let n = W({ location: (0, c.g$)(), ...t });
    (0, c.eE)(e, { type: "action", ...t }), K(e, n), et(e, n);
}
function ei() {
    return (0, i.A)();
}
let ea = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: j,
    expandEventProperties: W,
    track: ee,
};
