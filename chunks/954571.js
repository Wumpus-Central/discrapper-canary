n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => O,
        AnalyticsContext: () => m,
        AnalyticsSchema: () => E,
        addExtraAnalyticsDecorator: () => g,
        clearAnalyticsEventsRecording: () => B,
        debugLogEvent: () => G,
        default: () => Y,
        expandEventProperties: () => D,
        expandLocation: () => P,
        getAnalyticsEventsRecording: () => H,
        getNewAnalyticsLoadId: () => W,
        isGameApplicationType: () => k,
        launchSignature: () => R,
        setUTMContext: () => U,
        startRecordingAnalyticsEvents: () => v,
        stopRecordingAnalyticsEvents: () => F,
        trackNetworkAction: () => V,
    }),
    n(321073);
var o = n(64700),
    r = n(132500),
    a = n(110259),
    i = n(613345),
    l = n(306173),
    u = n(228366),
    s = n(686757),
    _ = n(53943),
    d = n(790171),
    C = n(111162),
    E = n(757811),
    p = n(321034),
    h = n(38405),
    c = n(652215),
    A = n(53298),
    y = n(705751),
    I = n(985018);
let m = o.createContext({ location: {} }),
    T = {},
    S = performance.now(),
    R = (0, l.xd)() ? (0, l.xy)((0, i.V)()) : null;
a.extendSuperProperties({ launch_signature: R });
let N = [];
function g(e) {
    N.push(e);
}
let O = {
    [c.HAw.APP_OPENED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [c.HAw.APP_BACKGROUND]: { throttlePeriod: 12e4, throttleKeys: () => [] },
    [c.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === c.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [c.HAw.GUILD_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [c.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab_opened] },
    [c.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab_opened] },
    [c.HAw.START_SPEAKING]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.server] },
    [c.HAw.START_LISTENING]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.server] },
    [c.HAw.ACTIVITY_UPDATED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [c.HAw.CHANNEL_OPENED]: {
        throttlePeriod: 9e5,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : [e.channel_id, e.channel_view],
    },
    [c.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.notif_type] },
    [c.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.DM_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [c.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: 12e4,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [c.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: 1e4, throttleKeys: () => [] },
    [c.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.type] },
    [c.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: 12e4, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [c.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [c.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [c.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [c.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [c.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: 864e5, throttleKeys: () => [] },
    [c.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: 0.001,
    },
    [c.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: 0.001,
    },
    [c.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.application_id] },
    [c.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [c.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] },
    [c.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [c.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [c.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.user_id] },
    [c.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: 6e4, throttleKeys: () => [] },
    [c.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.context, e.guild_id] },
    [c.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id] },
    [c.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab] },
    [c.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id] },
    [c.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: 6e4,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [c.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: 36e5, throttleKeys: () => [] },
    [c.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.location_stack] },
    [c.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.location_stack] },
    [c.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 3e5,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [c.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 3e5,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [c.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: 1e3, throttleKeys: (e) => [e.channel_id] },
    [c.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [c.HAw.OPEN_MODAL]: (e) =>
        e.type === c.JJy.MEDIA_VIEWER ? { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] } : void 0,
    [c.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: 1e4, throttleKeys: (e) => [e.guild_id] },
    [c.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 432e5,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [c.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: 36e5, throttleKeys: (e) => [e.search_type] },
    [c.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: 864e5, throttleKeys: () => [] },
    [c.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.application_id] },
    [c.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: 36e5, throttleKeys: () => [] },
    [c.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: 1e3, throttleKeys: () => [] },
    [c.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
};
function P(e) {
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
let M = () => A.O.NONE;
function f(e) {
    d.o.includes(e) || h.A.addBreadcrumb({ category: "analytics", message: e });
}
let L = (0, a.trackMaker)({ addBreadcrumb: f, analyticEventConfigs: O, dispatcher: u.h, TRACK_ACTION_NAME: "TRACK" });
function U(e) {
    return (T = e);
}
function D(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...P(e) };
    }
    if (null != t.source) {
        let { source: e, ...n } = t;
        t = {
            ...n,
            ...("string" == typeof e
                ? { source: e }
                : {
                      source_page: e.page,
                      source_section: e.section,
                      source_object: e.object,
                      source_object_type: e.objectType,
                      source_promotion_id: e.promotionId,
                  }),
        };
    }
    (t.client_performance_cpu = p.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = p.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = p.A.getCPUCoreCount()),
        (t.accessibility_features = M()),
        (t.rendered_locale = I.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - S) / 1e3));
    let n = p.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: o, utmMedium: r, utmCampaign: a, utmContent: i } = T;
    return (
        (t.utm_source = t.utm_source ?? o),
        (t.utm_medium = t.utm_medium ?? r),
        (t.utm_campaign = t.utm_campaign ?? a),
        (t.utm_content = t.utm_content ?? i),
        (t.launch_signature = R),
        N.forEach((e) => e(t)),
        t
    );
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    C.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? _.z8("Analytics", e, t) : _.z8("Analytics", e);
}
let b = !1,
    w = {};
function v() {
    b = !0;
}
function F() {
    b = !1;
}
function H() {
    return w;
}
function B() {
    Object.keys(w).forEach((e) => {
        delete w[e];
    });
}
let K = (0, a.trackMaker)({ addBreadcrumb: f, analyticEventConfigs: O, dispatcher: u.h, TRACK_ACTION_NAME: "TRACK" });
function k(e) {
    return e === y.S7.GAME || e === y.S7.DEPRECATED_GAME;
}
function V(e, t) {
    let n = D({ location: (0, s.g$)(), ...t });
    (0, s.eE)(e, { type: "action", ...t }), G(e, n), K(e, n);
}
function W() {
    return (0, r.A)();
}
let Y = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: function (e) {
        M = e;
    },
    expandEventProperties: D,
    track: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = String(e);
        if (
            (b && null != t && (Array.isArray(w[e]) ? w[e].push(t) : (w[e] = [t])),
            null != n.throttlePercent && Math.random() > n.throttlePercent)
        )
            return Promise.resolve();
        let r = D(t);
        return G(o, r, n.logEventProperties), L(e, r, { flush: n.flush, fingerprint: n.fingerprint });
    },
};
