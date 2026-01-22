n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => H,
        AnalyticsContext: () => N,
        AnalyticsSchema: () => _,
        addExtraAnalyticsDecorator: () => B,
        clearAnalyticsEventsRecording: () => er,
        debugLogEvent: () => Q,
        default: () => eu,
        expandEventProperties: () => Z,
        expandLocation: () => Y,
        getAnalyticsEventsRecording: () => en,
        getNewAnalyticsLoadId: () => ec,
        isGameApplicationType: () => eo,
        launchSignature: () => V,
        setUTMContext: () => X,
        startRecordingAnalyticsEvents: () => ee,
        stopRecordingAnalyticsEvents: () => et,
        trackNetworkAction: () => el,
    }),
    n(321073),
    n(896048);
var r = n(64700),
    i = n(835245),
    a = n(110259),
    s = n(613345),
    o = n(306173),
    l = n(73153),
    c = n(793574),
    u = n(686757),
    d = n(53943),
    f = n(790171),
    p = n(111162),
    _ = n(757811),
    h = n(321034),
    m = n(728458),
    g = n(652215),
    E = n(53298),
    b = n(705751),
    y = n(985018);

function O(e, t, n) {
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

function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let C = {
        location: {},
    },
    N = r.createContext(C),
    R = {},
    w = 1e3,
    P = 1e4,
    D = 6e4,
    x = 12e4,
    L = 3e5,
    j = 9e5,
    M = 36e5,
    k = 864e5,
    U = 0.001,
    G = performance.now(),
    V = (0, o.xd)() ? (0, o.xy)((0, s.V)()) : null;
a.extendSuperProperties({
    launch_signature: V,
});
let F = [];

function B(e) {
    F.push(e);
}
let H = {
    [g.HAw.APP_OPENED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.HAw.APP_BACKGROUND]: {
        throttlePeriod: x,
        throttleKeys: () => [],
    },
    [g.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === g.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : {
                  throttlePeriod: j,
                  throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section],
              },
    [g.HAw.GUILD_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.guild_id, e.is_pending],
    },
    [g.HAw.FRIENDS_LIST_CLICKED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.HAw.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.HAw.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.HAw.START_SPEAKING]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.server],
    },
    [g.HAw.START_LISTENING]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.server],
    },
    [g.HAw.ACTIVITY_UPDATED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0,
    },
    [g.HAw.CHANNEL_OPENED]: {
        throttlePeriod: j,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : null != e.location && e.location.startsWith(c.A.FREQUENT_FRIENDS_ROW)
                  ? [e.channel_id, e.channel_view, e.location]
                  : [e.channel_id, e.channel_view],
    },
    [g.HAw.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.NOTIFICATION_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.notif_type],
    },
    [g.HAw.MEMBER_LIST_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.DM_LIST_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.NAV_DRAWER_OPENED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: x,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null != (t = e.source_class_list) ? t : [])];
        },
    },
    [g.HAw.QUICKSWITCHER_OPENED]: {
        throttlePeriod: P,
        throttleKeys: () => [],
    },
    [g.HAw.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.type],
    },
    [g.HAw.ROLE_PAGE_VIEWED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.role_id, e.tab_opened],
    },
    [g.HAw.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.HAw.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.HAw.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.HAw.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: k,
        throttleKeys: () => [],
    },
    [g.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: U,
    },
    [g.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: U,
    },
    [g.HAw.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id],
    },
    [g.HAw.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.banner_type, e.channel_id],
    },
    [g.HAw.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.type],
    },
    [g.HAw.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.HAw.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.user_id],
    },
    [g.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: D,
        throttleKeys: () => [],
    },
    [g.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.context, e.guild_id],
    },
    [g.HAw.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.HAw.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab],
    },
    [g.HAw.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: M,
        throttleKeys: () => [],
    },
    [g.HAw.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.location_stack],
    },
    [g.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.location_stack],
    },
    [g.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [g.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [g.HAw.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.HAw.REDACTABLE_MESSAGE_LOADED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id, e.message_id],
    },
    [g.HAw.OPEN_MODAL]: (e) =>
        e.type === g.JJy.MEDIA_VIEWER
            ? {
                  throttlePeriod: D,
                  throttleKeys: (e) => [e.type],
              }
            : void 0,
    [g.HAw.MODERATOR_QUEUE_ACTION]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * M,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [g.HAw.SEARCH_BAR_VIEWED]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.search_type],
    },
    [g.HAw.AD_IDENTIFIER_FETCHED]: {
        throttlePeriod: k,
        throttleKeys: () => [],
    },
    [g.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id],
    },
    [g.HAw.LIBDISCORE_SLOW_TIMERS]: {
        throttlePeriod: M,
        throttleKeys: () => [],
    },
    [g.HAw.DEBUG_MISSING_STRING]: {
        throttlePeriod: M,
        throttleKeys: () => [],
    },
    [g.HAw.VIDEO_STREAM_ZOOM_CHANGED]: {
        throttlePeriod: w,
        throttleKeys: () => [],
    },
    [g.HAw.CACHE_STATS_RECORDED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
};

function Y(e) {
    return "string" == typeof e
        ? {
              location: e,
          }
        : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType,
          };
}

function W(e) {
    return "string" == typeof e
        ? {
              source: e,
          }
        : {
              source_page: e.page,
              source_section: e.section,
              source_object: e.object,
              source_object_type: e.objectType,
              source_promotion_id: e.promotionId,
          };
}
let K = () => E.O.NONE;

function z(e) {
    K = e;
}
let q = (0, a.trackMaker)({
    analyticEventConfigs: H,
    dispatcher: l.h,
    TRACK_ACTION_NAME: "TRACK",
});

function X(e) {
    return (R = e);
}

function Z(e) {
    var t, n, r, i;
    let a = null != e ? e : {};
    if (null != a.location) {
        let { location: e } = a;
        a = A({}, I(a, ["location"]), Y(e));
    }
    if (null != a.source) {
        let { source: e } = a;
        a = A({}, I(a, ["source"]), W(e));
    }
    (a.client_performance_cpu = h.A.getCurrentCPUUsagePercent()),
        (a.client_performance_memory = h.A.getCurrentMemoryUsageKB()),
        (a.cpu_core_count = h.A.getCPUCoreCount()),
        (a.accessibility_features = K()),
        (a.rendered_locale = y.intl.currentLocale),
        (a.uptime_app = Math.floor((performance.now() - G) / w));
    let s = h.A.getProcessUptime();
    null != s && (a.uptime_process_renderer = Math.floor(s));
    let { utmSource: o, utmMedium: l, utmCampaign: c, utmContent: u } = R;
    return (
        (a.utm_source = null != (t = a.utm_source) ? t : o),
        (a.utm_medium = null != (n = a.utm_medium) ? n : l),
        (a.utm_campaign = null != (r = a.utm_campaign) ? r : c),
        (a.utm_content = null != (i = a.utm_content) ? i : u),
        (a.launch_signature = V),
        F.forEach((e) => e(a)),
        a
    );
}

function Q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    p.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? d.z8("Analytics", e, t) : d.z8("Analytics", e);
}
let $ = !1,
    J = {};

function ee() {
    $ = !0;
}

function et() {
    $ = !1;
}

function en() {
    return J;
}

function er() {
    Object.keys(J).forEach((e) => {
        delete J[e];
    });
}

function ei(e, t) {
    return !!$ && (null != t && (Array.isArray(J[e]) ? J[e].push(t) : (J[e] = [t])), !0);
}

function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (f.o.includes(r) ||
            m.A.addBreadcrumb({
                category: "analytics",
                message: "".concat(r),
            }),
        ei(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = Z(t);
    return (
        Q(r, i, n.logEventProperties),
        q(e, i, {
            flush: n.flush,
            fingerprint: n.fingerprint,
        })
    );
}
let es = (0, a.trackMaker)({
    analyticEventConfigs: H,
    dispatcher: l.h,
    TRACK_ACTION_NAME: "TRACK",
});

function eo(e) {
    return e === b.S7.GAME || e === b.S7.DEPRECATED_GAME;
}

function el(e, t) {
    let n = Z(
        A(
            {
                location: (0, u.g$)(),
            },
            t,
        ),
    );
    (0, u.eE)(
        e,
        A(
            {
                type: "action",
            },
            t,
        ),
    ),
        Q(e, n),
        es(e, n);
}

function ec() {
    return (0, i.A)();
}
let eu = S(A({}, a), {
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: z,
    expandEventProperties: Z,
    track: ea,
});
