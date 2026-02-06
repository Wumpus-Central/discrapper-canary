"use strict";
n.d(t, {
    AN: () => g,
    Ar: () => N,
    DQ: () => m,
    E: () => eg,
    F1: () => eT,
    GY: () => er,
    Ip: () => R,
    Ju: () => W,
    KJ: () => U,
    NS: () => S,
    PZ: () => C,
    Po: () => tu,
    Q0: () => P,
    Qd: () => E,
    Sx: () => y,
    TO: () => _,
    TY: () => eh,
    Tz: () => p,
    X9: () => eA,
    Y2: () => c,
    YW: () => Z,
    _o: () => to,
    ak: () => eF,
    eF: () => d,
    fL: () => I,
    he: () => f,
    iL: () => L,
    ju: () => v,
    kW: () => b,
    nT: () => x,
    nx: () => B,
    oJ: () => ef,
    oP: () => eW,
    wL: () => eH,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(406935),
    l = n(335871),
    u = n(813827),
    c = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.MENTIONS = 1)] = "MENTIONS"),
            (e[(e.UNREADS = 2)] = "UNREADS"),
            (e[(e.TODOS = 3)] = "TODOS"),
            (e[(e.FOR_YOU = 4)] = "FOR_YOU"),
            (e[(e.GAME_INVITES = 5)] = "GAME_INVITES"),
            (e[(e.BOOKMARKS = 6)] = "BOOKMARKS"),
            (e[(e.SCHEDULED = 7)] = "SCHEDULED"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e[(e.NO_GUILD_ONBOARDING = 0)] = "NO_GUILD_ONBOARDING"),
            (e[(e.GUILD_NOTICE_SHOWN = 1)] = "GUILD_NOTICE_SHOWN"),
            (e[(e.GUILD_NOTICE_CLEARED = 2)] = "GUILD_NOTICE_CLEARED"),
            e
        );
    })({}),
    _ = (function (e) {
        return (
            (e[(e.UNSET_EXPLICIT_CONTENT_REDACTION = 0)] = "UNSET_EXPLICIT_CONTENT_REDACTION"),
            (e[(e.SHOW = 1)] = "SHOW"),
            (e[(e.BLUR = 2)] = "BLUR"),
            (e[(e.BLOCK = 3)] = "BLOCK"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e[(e.DEFAULT_UNSET = 0)] = "DEFAULT_UNSET"),
            (e[(e.DISABLED = 1)] = "DISABLED"),
            (e[(e.NON_FRIENDS = 2)] = "NON_FRIENDS"),
            (e[(e.FRIENDS_AND_NON_FRIENDS = 3)] = "FRIENDS_AND_NON_FRIENDS"),
            e
        );
    })({}),
    p = (function (e) {
        return (
            (e[(e.NOTIFICATIONS_ENABLED = 0)] = "NOTIFICATIONS_ENABLED"),
            (e[(e.ONLY_DMS = 1)] = "ONLY_DMS"),
            (e[(e.NOTIFICATIONS_DISABLED = 2)] = "NOTIFICATIONS_DISABLED"),
            e
        );
    })({}),
    h = (function (e) {
        return (
            (e[(e.ACTIVITY_NOTIFICATIONS_UNSET = 0)] = "ACTIVITY_NOTIFICATIONS_UNSET"),
            (e[(e.ACTIVITY_NOTIFICATIONS_DISABLED = 1)] = "ACTIVITY_NOTIFICATIONS_DISABLED"),
            (e[(e.ACTIVITY_NOTIFICATIONS_ENABLED = 2)] = "ACTIVITY_NOTIFICATIONS_ENABLED"),
            (e[(e.ONLY_GAMES_PLAYED = 3)] = "ONLY_GAMES_PLAYED"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.STATUS_PUSH_UNSET = 0)] = "STATUS_PUSH_UNSET"),
            (e[(e.STATUS_PUSH_ENABLED = 1)] = "STATUS_PUSH_ENABLED"),
            (e[(e.STATUS_PUSH_DISABLED = 2)] = "STATUS_PUSH_DISABLED"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.OFF = 0)] = "OFF"),
            (e[(e.ON_FOR_LARGE_GUILDS = 1)] = "ON_FOR_LARGE_GUILDS"),
            (e[(e.ON = 2)] = "ON"),
            e
        );
    })({}),
    E = (function (e) {
        return (
            (e[(e.ACTIVITY_STATUS_UNSET = 0)] = "ACTIVITY_STATUS_UNSET"),
            (e[(e.ACTIVITY_STATUS_OFF = 1)] = "ACTIVITY_STATUS_OFF"),
            (e[(e.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS = 2)] = "ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS"),
            (e[(e.ACTIVITY_STATUS_ON = 3)] = "ACTIVITY_STATUS_ON"),
            e
        );
    })({}),
    A = (function (e) {
        return (
            (e[(e.OFF_FOR_NEW_GUILDS = 0)] = "OFF_FOR_NEW_GUILDS"),
            (e[(e.ON_FOR_NEW_GUILDS = 1)] = "ON_FOR_NEW_GUILDS"),
            e
        );
    })({}),
    I = (function (e) {
        return (
            (e[(e.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = 0)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET"),
            (e[(e.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = 1)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL"),
            (e[(e.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME = 2)] =
                "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME"),
            (e[(e.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE = 3)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE"),
            e
        );
    })({}),
    T = (function (e) {
        return (
            (e[(e.UNSET = 0)] = "UNSET"),
            (e[(e.FRIENDS_ONLY = 1)] = "FRIENDS_ONLY"),
            (e[(e.FRIENDS_AND_SMALL_GUILDS = 2)] = "FRIENDS_AND_SMALL_GUILDS"),
            (e[(e.FRIENDS_AND_ALL_GUILDS = 3)] = "FRIENDS_AND_ALL_GUILDS"),
            e
        );
    })({}),
    S = (function (e) {
        return (
            (e[(e.UNSET_UI_DENSITY = 0)] = "UNSET_UI_DENSITY"),
            (e[(e.COMPACT = 1)] = "COMPACT"),
            (e[(e.COZY = 2)] = "COZY"),
            (e[(e.RESPONSIVE = 3)] = "RESPONSIVE"),
            (e[(e.DEFAULT = 4)] = "DEFAULT"),
            e
        );
    })({}),
    y = (function (e) {
        return (
            (e[(e.UNSET = 0)] = "UNSET"),
            (e[(e.DARK = 1)] = "DARK"),
            (e[(e.LIGHT = 2)] = "LIGHT"),
            (e[(e.DARKER = 3)] = "DARKER"),
            (e[(e.MIDNIGHT = 4)] = "MIDNIGHT"),
            e
        );
    })({}),
    v = (function (e) {
        return (
            (e[(e.MINT_APPLE = 0)] = "MINT_APPLE"),
            (e[(e.CITRUS_SHERBERT = 1)] = "CITRUS_SHERBERT"),
            (e[(e.RETRO_RAINCLOUD = 2)] = "RETRO_RAINCLOUD"),
            (e[(e.HANAMI = 3)] = "HANAMI"),
            (e[(e.SUNRISE = 4)] = "SUNRISE"),
            (e[(e.COTTON_CANDY = 5)] = "COTTON_CANDY"),
            (e[(e.LOFI_VIBES = 6)] = "LOFI_VIBES"),
            (e[(e.DESERT_KHAKI = 7)] = "DESERT_KHAKI"),
            (e[(e.SUNSET = 8)] = "SUNSET"),
            (e[(e.CHROMA_GLOW = 9)] = "CHROMA_GLOW"),
            (e[(e.FOREST = 10)] = "FOREST"),
            (e[(e.CRIMSON_MOON = 11)] = "CRIMSON_MOON"),
            (e[(e.MIDNIGHT_BLURPLE = 12)] = "MIDNIGHT_BLURPLE"),
            (e[(e.MARS = 13)] = "MARS"),
            (e[(e.DUSK = 14)] = "DUSK"),
            (e[(e.UNDER_THE_SEA = 15)] = "UNDER_THE_SEA"),
            (e[(e.EASTER_EGG = 16)] = "EASTER_EGG"),
            (e[(e.RETRO_STORM = 17)] = "RETRO_STORM"),
            (e[(e.NEON_NIGHTS = 18)] = "NEON_NIGHTS"),
            (e[(e.SEPIA = 19)] = "SEPIA"),
            (e[(e.STRAWBERRY_LEMONADE = 20)] = "STRAWBERRY_LEMONADE"),
            (e[(e.AURORA = 21)] = "AURORA"),
            (e[(e.BLURPLE_TWILIGHT = 22)] = "BLURPLE_TWILIGHT"),
            e
        );
    })({}),
    C = (function (e) {
        return (e[(e.AUTO = 0)] = "AUTO"), (e[(e.H12 = 1)] = "H12"), (e[(e.H23 = 2)] = "H23"), e;
    })({}),
    N = (function (e) {
        return (
            (e[(e.LAUNCH_PAD_DISABLED = 0)] = "LAUNCH_PAD_DISABLED"),
            (e[(e.LAUNCH_PAD_GESTURE_FULL_SCREEN = 1)] = "LAUNCH_PAD_GESTURE_FULL_SCREEN"),
            (e[(e.LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2)] = "LAUNCH_PAD_GESTURE_RIGHT_EDGE"),
            (e[(e.LAUNCH_PAD_PULL_TAB = 3)] = "LAUNCH_PAD_PULL_TAB"),
            e
        );
    })({}),
    b = (function (e) {
        return (
            (e[(e.SWIPE_RIGHT_TO_LEFT_UNSET = 0)] = "SWIPE_RIGHT_TO_LEFT_UNSET"),
            (e[(e.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS = 1)] = "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS"),
            (e[(e.SWIPE_RIGHT_TO_LEFT_REPLY = 2)] = "SWIPE_RIGHT_TO_LEFT_REPLY"),
            e
        );
    })({}),
    R = (function (e) {
        return (
            (e[(e.UNSET_FAVORITE_CHANNEL_TYPE = 0)] = "UNSET_FAVORITE_CHANNEL_TYPE"),
            (e[(e.REFERENCE_ORIGINAL = 1)] = "REFERENCE_ORIGINAL"),
            (e[(e.CATEGORY = 2)] = "CATEGORY"),
            e
        );
    })({}),
    O = (function (e) {
        return (
            (e[(e.UNSET_SAFETY_SETTINGS_PRESET = 0)] = "UNSET_SAFETY_SETTINGS_PRESET"),
            (e[(e.BALANCED = 1)] = "BALANCED"),
            (e[(e.STRICT = 2)] = "STRICT"),
            (e[(e.RELAXED = 3)] = "RELAXED"),
            (e[(e.CUSTOM = 4)] = "CUSTOM"),
            e
        );
    })({}),
    D = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.ALL = 1)] = "ALL"),
            (e[(e.BOOKMARKS = 2)] = "BOOKMARKS"),
            (e[(e.REMINDERS = 3)] = "REMINDERS"),
            e
        );
    })({}),
    L = (function (e) {
        return (
            (e[(e.VOICE = 0)] = "VOICE"),
            (e[(e.STREAM = 1)] = "STREAM"),
            (e[(e.VIDEO_BACKGROUND = 2)] = "VIDEO_BACKGROUND"),
            (e[(e.ACTIVITY = 3)] = "ACTIVITY"),
            (e[(e.IN_APP_REPORTS = 4)] = "IN_APP_REPORTS"),
            (e[(e.BLOCK_USER = 6)] = "BLOCK_USER"),
            (e[(e.VOICE_FILTER = 7)] = "VOICE_FILTER"),
            (e[(e.SEARCH_RESULTS = 8)] = "SEARCH_RESULTS"),
            (e[(e.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
            e
        );
    })({});
class w extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.PreloadedUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => u.u },
            { no: 2, name: "inbox", kind: "message", T: () => P },
            { no: 3, name: "guilds", kind: "message", T: () => U },
            { no: 4, name: "user_content", kind: "message", T: () => Z },
            { no: 5, name: "voice_and_video", kind: "message", T: () => er },
            { no: 6, name: "text_and_images", kind: "message", T: () => ef },
            { no: 7, name: "notifications", kind: "message", T: () => eh },
            { no: 8, name: "privacy", kind: "message", T: () => eg },
            { no: 9, name: "debug", kind: "message", T: () => eA },
            { no: 10, name: "game_library", kind: "message", T: () => eT },
            { no: 11, name: "status", kind: "message", T: () => ey },
            { no: 12, name: "localization", kind: "message", T: () => eb },
            { no: 13, name: "appearance", kind: "message", T: () => eL },
            { no: 14, name: "guild_folders", kind: "message", T: () => eU },
            { no: 15, name: "favorites", kind: "message", T: () => eB },
            { no: 16, name: "audio_context_settings", kind: "message", T: () => ez },
            { no: 17, name: "communities", kind: "message", T: () => eq },
            { no: 18, name: "broadcast", kind: "message", T: () => e1 },
            { no: 19, name: "clips", kind: "message", T: () => e3 },
            { no: 20, name: "for_later", kind: "message", T: () => tt },
            { no: 21, name: "safety_settings", kind: "message", T: () => e9 },
            { no: 22, name: "icymi_settings", kind: "message", T: () => tr },
            { no: 23, name: "applications", kind: "message", T: () => ta },
            { no: 24, name: "ads", kind: "message", T: () => tf },
            { no: 25, name: "in_app_feedback_settings", kind: "message", T: () => tA },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.versions = u.u.internalBinaryRead(e, e.uint32(), n, a.versions);
                    break;
                case 2:
                    a.inbox = P.internalBinaryRead(e, e.uint32(), n, a.inbox);
                    break;
                case 3:
                    a.guilds = U.internalBinaryRead(e, e.uint32(), n, a.guilds);
                    break;
                case 4:
                    a.userContent = Z.internalBinaryRead(e, e.uint32(), n, a.userContent);
                    break;
                case 5:
                    a.voiceAndVideo = er.internalBinaryRead(e, e.uint32(), n, a.voiceAndVideo);
                    break;
                case 6:
                    a.textAndImages = ef.internalBinaryRead(e, e.uint32(), n, a.textAndImages);
                    break;
                case 7:
                    a.notifications = eh.internalBinaryRead(e, e.uint32(), n, a.notifications);
                    break;
                case 8:
                    a.privacy = eg.internalBinaryRead(e, e.uint32(), n, a.privacy);
                    break;
                case 9:
                    a.debug = eA.internalBinaryRead(e, e.uint32(), n, a.debug);
                    break;
                case 10:
                    a.gameLibrary = eT.internalBinaryRead(e, e.uint32(), n, a.gameLibrary);
                    break;
                case 11:
                    a.status = ey.internalBinaryRead(e, e.uint32(), n, a.status);
                    break;
                case 12:
                    a.localization = eb.internalBinaryRead(e, e.uint32(), n, a.localization);
                    break;
                case 13:
                    a.appearance = eL.internalBinaryRead(e, e.uint32(), n, a.appearance);
                    break;
                case 14:
                    a.guildFolders = eU.internalBinaryRead(e, e.uint32(), n, a.guildFolders);
                    break;
                case 15:
                    a.favorites = eB.internalBinaryRead(e, e.uint32(), n, a.favorites);
                    break;
                case 16:
                    a.audioContextSettings = ez.internalBinaryRead(e, e.uint32(), n, a.audioContextSettings);
                    break;
                case 17:
                    a.communities = eq.internalBinaryRead(e, e.uint32(), n, a.communities);
                    break;
                case 18:
                    a.broadcast = e1.internalBinaryRead(e, e.uint32(), n, a.broadcast);
                    break;
                case 19:
                    a.clips = e3.internalBinaryRead(e, e.uint32(), n, a.clips);
                    break;
                case 20:
                    a.forLater = tt.internalBinaryRead(e, e.uint32(), n, a.forLater);
                    break;
                case 21:
                    a.safetySettings = e9.internalBinaryRead(e, e.uint32(), n, a.safetySettings);
                    break;
                case 22:
                    a.icymiSettings = tr.internalBinaryRead(e, e.uint32(), n, a.icymiSettings);
                    break;
                case 23:
                    a.applications = ta.internalBinaryRead(e, e.uint32(), n, a.applications);
                    break;
                case 24:
                    a.ads = tf.internalBinaryRead(e, e.uint32(), n, a.ads);
                    break;
                case 25:
                    a.inAppFeedbackSettings = tA.internalBinaryRead(e, e.uint32(), n, a.inAppFeedbackSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && u.u.internalBinaryWrite(e.versions, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.inbox && P.internalBinaryWrite(e.inbox, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.guilds && U.internalBinaryWrite(e.guilds, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.userContent && Z.internalBinaryWrite(e.userContent, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.voiceAndVideo && er.internalBinaryWrite(e.voiceAndVideo, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.textAndImages && ef.internalBinaryWrite(e.textAndImages, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.notifications && eh.internalBinaryWrite(e.notifications, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.privacy && eg.internalBinaryWrite(e.privacy, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.debug && eA.internalBinaryWrite(e.debug, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.gameLibrary && eT.internalBinaryWrite(e.gameLibrary, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.status && ey.internalBinaryWrite(e.status, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.localization && eb.internalBinaryWrite(e.localization, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.appearance && eL.internalBinaryWrite(e.appearance, t.tag(13, r.O0.LengthDelimited).fork(), n).join(),
            e.guildFolders && eU.internalBinaryWrite(e.guildFolders, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            e.favorites && eB.internalBinaryWrite(e.favorites, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            e.audioContextSettings &&
                ez.internalBinaryWrite(e.audioContextSettings, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            e.communities && eq.internalBinaryWrite(e.communities, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            e.broadcast && e1.internalBinaryWrite(e.broadcast, t.tag(18, r.O0.LengthDelimited).fork(), n).join(),
            e.clips && e3.internalBinaryWrite(e.clips, t.tag(19, r.O0.LengthDelimited).fork(), n).join(),
            e.forLater && tt.internalBinaryWrite(e.forLater, t.tag(20, r.O0.LengthDelimited).fork(), n).join(),
            e.safetySettings &&
                e9.internalBinaryWrite(e.safetySettings, t.tag(21, r.O0.LengthDelimited).fork(), n).join(),
            e.icymiSettings &&
                tr.internalBinaryWrite(e.icymiSettings, t.tag(22, r.O0.LengthDelimited).fork(), n).join(),
            e.applications && ta.internalBinaryWrite(e.applications, t.tag(23, r.O0.LengthDelimited).fork(), n).join(),
            e.ads && tf.internalBinaryWrite(e.ads, t.tag(24, r.O0.LengthDelimited).fork(), n).join(),
            e.inAppFeedbackSettings &&
                tA.internalBinaryWrite(e.inAppFeedbackSettings, t.tag(25, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new w();
class M extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.InboxSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.InboxTab", c, "INBOX_TAB_"],
            },
            { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { currentTab: 0, viewedTutorial: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.currentTab = e.int32();
                    break;
                case 2:
                    a.viewedTutorial = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, r.O0.Varint).int32(e.currentTab),
            !1 !== e.viewedTutorial && t.tag(2, r.O0.Varint).bool(e.viewedTutorial);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new M();
class k extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllGuildSettings", [
            { no: 1, name: "guilds", kind: "map", K: 6, V: { kind: "message", T: () => B } },
        ]);
    }
    create(e) {
        let t = { guilds: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.guilds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = B.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds",
                    );
            }
        }
        e[a ?? "0"] = s ?? B.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guilds))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                B.internalBinaryWrite(e.guilds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let U = new k();
class G extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildDismissibleContentState", [
            { no: 1, name: "dismissed", kind: "scalar", T: 8 },
            { no: 2, name: "last_dismissed_version", kind: "scalar", T: 13 },
            { no: 3, name: "last_dismissed_at_ms", kind: "scalar", T: 4 },
            { no: 4, name: "last_dismissed_object_id", kind: "scalar", T: 4 },
            { no: 5, name: "num_times_dismissed", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = {
            dismissed: !1,
            lastDismissedVersion: 0,
            lastDismissedAtMs: "0",
            lastDismissedObjectId: "0",
            numTimesDismissed: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.dismissed = e.bool();
                    break;
                case 2:
                    a.lastDismissedVersion = e.uint32();
                    break;
                case 3:
                    a.lastDismissedAtMs = e.uint64().toString();
                    break;
                case 4:
                    a.lastDismissedObjectId = e.uint64().toString();
                    break;
                case 5:
                    a.numTimesDismissed = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.dismissed && t.tag(1, r.O0.Varint).bool(e.dismissed),
            0 !== e.lastDismissedVersion && t.tag(2, r.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(3, r.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(4, r.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(5, r.O0.Varint).uint32(e.numTimesDismissed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let F = new G();
class V extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildSettings", [
            { no: 1, name: "channels", kind: "map", K: 6, V: { kind: "message", T: () => W } },
            { no: 2, name: "hub_progress", kind: "scalar", T: 13 },
            { no: 3, name: "guild_onboarding_progress", kind: "scalar", T: 13 },
            { no: 4, name: "guild_recents_dismissed_at", kind: "message", T: () => l.D },
            { no: 5, name: "dismissed_guild_content", kind: "scalar", T: 12 },
            { no: 6, name: "join_sound", kind: "message", T: () => eJ },
            { no: 7, name: "mobile_redesign_channel_list_settings", kind: "message", T: () => eO },
            { no: 8, name: "disable_raid_alert_push", kind: "scalar", T: 8 },
            { no: 9, name: "disable_raid_alert_nag", kind: "scalar", T: 8 },
            { no: 10, name: "custom_notification_sound_config", kind: "message", T: () => z },
            { no: 11, name: "leaderboards_disabled", kind: "scalar", T: 8 },
            { no: 12, name: "guild_dismissible_content_states", kind: "map", K: 5, V: { kind: "message", T: () => F } },
        ]);
    }
    create(e) {
        let t = {
            channels: {},
            hubProgress: 0,
            guildOnboardingProgress: 0,
            dismissedGuildContent: new Uint8Array(0),
            disableRaidAlertPush: !1,
            disableRaidAlertNag: !1,
            leaderboardsDisabled: !1,
            guildDismissibleContentStates: {},
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.channels, e, n);
                    break;
                case 2:
                    a.hubProgress = e.uint32();
                    break;
                case 3:
                    a.guildOnboardingProgress = e.uint32();
                    break;
                case 4:
                    a.guildRecentsDismissedAt = l.D.internalBinaryRead(e, e.uint32(), n, a.guildRecentsDismissedAt);
                    break;
                case 5:
                    a.dismissedGuildContent = e.bytes();
                    break;
                case 6:
                    a.joinSound = eJ.internalBinaryRead(e, e.uint32(), n, a.joinSound);
                    break;
                case 7:
                    a.mobileRedesignChannelListSettings = eO.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.mobileRedesignChannelListSettings,
                    );
                    break;
                case 8:
                    a.disableRaidAlertPush = e.bool();
                    break;
                case 9:
                    a.disableRaidAlertNag = e.bool();
                    break;
                case 10:
                    a.customNotificationSoundConfig = z.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.customNotificationSoundConfig,
                    );
                    break;
                case 11:
                    a.leaderboardsDisabled = e.bool();
                    break;
                case 12:
                    this.binaryReadMap12(a.guildDismissibleContentStates, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = W.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels",
                    );
            }
        }
        e[a ?? "0"] = s ?? W.create();
    }
    binaryReadMap12(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.int32();
                    break;
                case 2:
                    s = F.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states",
                    );
            }
        }
        e[a ?? 0] = s ?? F.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.channels))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                W.internalBinaryWrite(e.channels[i], t, n),
                t.join().join();
        for (let i of (0 !== e.hubProgress && t.tag(2, r.O0.Varint).uint32(e.hubProgress),
        0 !== e.guildOnboardingProgress && t.tag(3, r.O0.Varint).uint32(e.guildOnboardingProgress),
        e.guildRecentsDismissedAt &&
            l.D.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
        e.dismissedGuildContent.length && t.tag(5, r.O0.LengthDelimited).bytes(e.dismissedGuildContent),
        e.joinSound && eJ.internalBinaryWrite(e.joinSound, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
        e.mobileRedesignChannelListSettings &&
            eO
                .internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, r.O0.LengthDelimited).fork(), n)
                .join(),
        !1 !== e.disableRaidAlertPush && t.tag(8, r.O0.Varint).bool(e.disableRaidAlertPush),
        !1 !== e.disableRaidAlertNag && t.tag(9, r.O0.Varint).bool(e.disableRaidAlertNag),
        e.customNotificationSoundConfig &&
            z.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
        !1 !== e.leaderboardsDisabled && t.tag(11, r.O0.Varint).bool(e.leaderboardsDisabled),
        Object.keys(e.guildDismissibleContentStates)))
            t.tag(12, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).int32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                F.internalBinaryWrite(e.guildDismissibleContentStates[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let B = new V();
class j extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelIconEmoji", [
            { no: 1, name: "id", kind: "message", T: () => o.ol },
            { no: 2, name: "name", kind: "message", T: () => o.hU },
            { no: 3, name: "color", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.id = o.ol.internalBinaryRead(e, e.uint32(), n, a.id);
                    break;
                case 2:
                    a.name = o.hU.internalBinaryRead(e, e.uint32(), n, a.name);
                    break;
                case 3:
                    a.color = o.ol.internalBinaryRead(e, e.uint32(), n, a.color);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.id && o.ol.internalBinaryWrite(e.id, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.name && o.hU.internalBinaryWrite(e.name, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.color && o.ol.internalBinaryWrite(e.color, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let H = new j();
class Y extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelSettings", [
            { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 },
            { no: 2, name: "icon_emoji", kind: "message", T: () => H },
            { no: 3, name: "custom_notification_sound_config", kind: "message", T: () => z },
        ]);
    }
    create(e) {
        let t = { collapsedInInbox: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.collapsedInInbox = e.bool();
                    break;
                case 2:
                    a.iconEmoji = H.internalBinaryRead(e, e.uint32(), n, a.iconEmoji);
                    break;
                case 3:
                    a.customNotificationSoundConfig = z.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.customNotificationSoundConfig,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.collapsedInInbox && t.tag(1, r.O0.Varint).bool(e.collapsedInInbox),
            e.iconEmoji && H.internalBinaryWrite(e.iconEmoji, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.customNotificationSoundConfig &&
                z.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let W = new Y();
class K extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomNotificationSoundConfig", [
            { no: 1, name: "notification_sound_pack_id", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                a.notificationSoundPackId = o.hU.internalBinaryRead(e, e.uint32(), n, a.notificationSoundPackId);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.notificationSoundPackId &&
            o.hU.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let z = new K();
class $ extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.RecurringDismissibleContentState", [
            { no: 1, name: "last_dismissed_version", kind: "scalar", T: 13 },
            { no: 2, name: "last_dismissed_at_ms", kind: "scalar", T: 4 },
            { no: 3, name: "last_dismissed_object_id", kind: "scalar", T: 4 },
            { no: 4, name: "num_times_dismissed", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.lastDismissedVersion = e.uint32();
                    break;
                case 2:
                    a.lastDismissedAtMs = e.uint64().toString();
                    break;
                case 3:
                    a.lastDismissedObjectId = e.uint64().toString();
                    break;
                case 4:
                    a.numTimesDismissed = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.lastDismissedVersion && t.tag(1, r.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(2, r.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(3, r.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(4, r.O0.Varint).uint32(e.numTimesDismissed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let q = new $();
class X extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.UserContentSettings", [
            { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 },
            { no: 2, name: "last_dismissed_outbound_promotion_start_date", kind: "message", T: () => o.hU },
            { no: 3, name: "premium_tier_0_modal_dismissed_at", kind: "message", T: () => l.D },
            { no: 4, name: "guild_onboarding_upsell_dismissed_at", kind: "message", T: () => l.D },
            { no: 5, name: "safety_user_sentiment_notice_dismissed_at", kind: "message", T: () => l.D },
            { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "recurring_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => q },
            },
        ]);
    }
    create(e) {
        let t = {
            dismissedContents: new Uint8Array(0),
            lastReceivedChangelogId: "0",
            recurringDismissibleContentStates: {},
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.dismissedContents = e.bytes();
                    break;
                case 2:
                    a.lastDismissedOutboundPromotionStartDate = o.hU.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.lastDismissedOutboundPromotionStartDate,
                    );
                    break;
                case 3:
                    a.premiumTier0ModalDismissedAt = l.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.premiumTier0ModalDismissedAt,
                    );
                    break;
                case 4:
                    a.guildOnboardingUpsellDismissedAt = l.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.guildOnboardingUpsellDismissedAt,
                    );
                    break;
                case 5:
                    a.safetyUserSentimentNoticeDismissedAt = l.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.safetyUserSentimentNoticeDismissedAt,
                    );
                    break;
                case 6:
                    a.lastReceivedChangelogId = e.fixed64().toString();
                    break;
                case 7:
                    this.binaryReadMap7(a.recurringDismissibleContentStates, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let u = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, u);
            }
        }
        return a;
    }
    binaryReadMap7(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.int32();
                    break;
                case 2:
                    s = q.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states",
                    );
            }
        }
        e[a ?? 0] = s ?? q.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of (e.dismissedContents.length && t.tag(1, r.O0.LengthDelimited).bytes(e.dismissedContents),
        e.lastDismissedOutboundPromotionStartDate &&
            o.hU
                .internalBinaryWrite(
                    e.lastDismissedOutboundPromotionStartDate,
                    t.tag(2, r.O0.LengthDelimited).fork(),
                    n,
                )
                .join(),
        e.premiumTier0ModalDismissedAt &&
            l.D.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
        e.guildOnboardingUpsellDismissedAt &&
            l.D.internalBinaryWrite(
                e.guildOnboardingUpsellDismissedAt,
                t.tag(4, r.O0.LengthDelimited).fork(),
                n,
            ).join(),
        e.safetyUserSentimentNoticeDismissedAt &&
            l.D.internalBinaryWrite(
                e.safetyUserSentimentNoticeDismissedAt,
                t.tag(5, r.O0.LengthDelimited).fork(),
                n,
            ).join(),
        "0" !== e.lastReceivedChangelogId && t.tag(6, r.O0.Bit64).fixed64(e.lastReceivedChangelogId),
        Object.keys(e.recurringDismissibleContentStates)))
            t.tag(7, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).int32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                q.internalBinaryWrite(e.recurringDismissibleContentStates[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Z = new X();
class Q extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterAsset", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "asset_hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { id: "0", assetHash: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.id = e.fixed64().toString();
                    break;
                case 2:
                    a.assetHash = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.O0.Bit64).fixed64(e.id),
            "" !== e.assetHash && t.tag(2, r.O0.LengthDelimited).string(e.assetHash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let J = new Q();
class ee extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [
            { no: 1, name: "use_blur", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { useBlur: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.useBlur = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.useBlur && t.tag(1, r.O0.Varint).bool(e.useBlur);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let et = new ee();
class en extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [
            { no: 1, name: "blur", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => et },
            { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 },
            { no: 3, name: "custom_asset", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => J },
            { no: 5, name: "always_preview_video", kind: "message", T: () => o._t },
            { no: 6, name: "afk_timeout", kind: "message", T: () => o.ZQ },
            { no: 7, name: "stream_notifications_enabled", kind: "message", T: () => o._t },
            { no: 8, name: "native_phone_integration_enabled", kind: "message", T: () => o._t },
            { no: 9, name: "soundboard_settings", kind: "message", T: () => eZ },
            { no: 10, name: "disable_stream_previews", kind: "message", T: () => o._t },
            { no: 11, name: "soundmoji_volume", kind: "message", T: () => o.uN },
        ]);
    }
    create(e) {
        let t = { videoBackgroundFilterDesktop: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.videoBackgroundFilterDesktop = {
                        oneofKind: "blur",
                        blur: et.internalBinaryRead(e, e.uint32(), n, a.videoBackgroundFilterDesktop.blur),
                    };
                    break;
                case 2:
                    a.videoBackgroundFilterDesktop = { oneofKind: "presetOption", presetOption: e.uint32() };
                    break;
                case 3:
                    a.videoBackgroundFilterDesktop = {
                        oneofKind: "customAsset",
                        customAsset: J.internalBinaryRead(e, e.uint32(), n, a.videoBackgroundFilterDesktop.customAsset),
                    };
                    break;
                case 5:
                    a.alwaysPreviewVideo = o._t.internalBinaryRead(e, e.uint32(), n, a.alwaysPreviewVideo);
                    break;
                case 6:
                    a.afkTimeout = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.afkTimeout);
                    break;
                case 7:
                    a.streamNotificationsEnabled = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.streamNotificationsEnabled,
                    );
                    break;
                case 8:
                    a.nativePhoneIntegrationEnabled = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.nativePhoneIntegrationEnabled,
                    );
                    break;
                case 9:
                    a.soundboardSettings = eZ.internalBinaryRead(e, e.uint32(), n, a.soundboardSettings);
                    break;
                case 10:
                    a.disableStreamPreviews = o._t.internalBinaryRead(e, e.uint32(), n, a.disableStreamPreviews);
                    break;
                case 11:
                    a.soundmojiVolume = o.uN.internalBinaryRead(e, e.uint32(), n, a.soundmojiVolume);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "blur" === e.videoBackgroundFilterDesktop.oneofKind &&
            et
                .internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, r.O0.LengthDelimited).fork(), n)
                .join(),
            "presetOption" === e.videoBackgroundFilterDesktop.oneofKind &&
                t.tag(2, r.O0.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption),
            "customAsset" === e.videoBackgroundFilterDesktop.oneofKind &&
                J.internalBinaryWrite(
                    e.videoBackgroundFilterDesktop.customAsset,
                    t.tag(3, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            e.alwaysPreviewVideo &&
                o._t.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.afkTimeout && o.ZQ.internalBinaryWrite(e.afkTimeout, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.streamNotificationsEnabled &&
                o._t.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.nativePhoneIntegrationEnabled &&
                o._t
                    .internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.soundboardSettings &&
                eZ.internalBinaryWrite(e.soundboardSettings, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.disableStreamPreviews &&
                o._t.internalBinaryWrite(e.disableStreamPreviews, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.soundmojiVolume &&
                o.uN.internalBinaryWrite(e.soundmojiVolume, t.tag(11, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let er = new en();
class ei extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ExplicitContentSettings", [
            {
                no: 1,
                name: "explicit_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
            {
                no: 2,
                name: "explicit_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
            {
                no: 3,
                name: "explicit_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
        ]);
    }
    create(e) {
        let t = { explicitContentGuilds: 0, explicitContentFriendDm: 0, explicitContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.explicitContentGuilds = e.int32();
                    break;
                case 2:
                    a.explicitContentFriendDm = e.int32();
                    break;
                case 3:
                    a.explicitContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.explicitContentGuilds && t.tag(1, r.O0.Varint).int32(e.explicitContentGuilds),
            0 !== e.explicitContentFriendDm && t.tag(2, r.O0.Varint).int32(e.explicitContentFriendDm),
            0 !== e.explicitContentNonFriendDm && t.tag(3, r.O0.Varint).int32(e.explicitContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ea = new ei();
class es extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GoreContentSettings", [
            {
                no: 1,
                name: "gore_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
            {
                no: 2,
                name: "gore_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
            {
                no: 3,
                name: "gore_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
        ]);
    }
    create(e) {
        let t = { goreContentGuilds: 0, goreContentFriendDm: 0, goreContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.goreContentGuilds = e.int32();
                    break;
                case 2:
                    a.goreContentFriendDm = e.int32();
                    break;
                case 3:
                    a.goreContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.goreContentGuilds && t.tag(1, r.O0.Varint).int32(e.goreContentGuilds),
            0 !== e.goreContentFriendDm && t.tag(2, r.O0.Varint).int32(e.goreContentFriendDm),
            0 !== e.goreContentNonFriendDm && t.tag(3, r.O0.Varint).int32(e.goreContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eo = new es();
class el extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.SelfHarmContentSettings", [
            {
                no: 1,
                name: "self_harm_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
            {
                no: 2,
                name: "self_harm_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
            {
                no: 3,
                name: "self_harm_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", _],
            },
        ]);
    }
    create(e) {
        let t = { selfHarmContentGuilds: 0, selfHarmContentFriendDm: 0, selfHarmContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.selfHarmContentGuilds = e.int32();
                    break;
                case 2:
                    a.selfHarmContentFriendDm = e.int32();
                    break;
                case 3:
                    a.selfHarmContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.selfHarmContentGuilds && t.tag(1, r.O0.Varint).int32(e.selfHarmContentGuilds),
            0 !== e.selfHarmContentFriendDm && t.tag(2, r.O0.Varint).int32(e.selfHarmContentFriendDm),
            0 !== e.selfHarmContentNonFriendDm && t.tag(3, r.O0.Varint).int32(e.selfHarmContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eu = new el();
class ec extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.KeywordFilterSettings", [
            { no: 1, name: "profanity", kind: "message", T: () => o._t },
            { no: 2, name: "sexual_content", kind: "message", T: () => o._t },
            { no: 3, name: "slurs", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.profanity = o._t.internalBinaryRead(e, e.uint32(), n, a.profanity);
                    break;
                case 2:
                    a.sexualContent = o._t.internalBinaryRead(e, e.uint32(), n, a.sexualContent);
                    break;
                case 3:
                    a.slurs = o._t.internalBinaryRead(e, e.uint32(), n, a.slurs);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.profanity && o._t.internalBinaryWrite(e.profanity, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.sexualContent &&
                o._t.internalBinaryWrite(e.sexualContent, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.slurs && o._t.internalBinaryWrite(e.slurs, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ed = new ec();
class e_ extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.TextAndImagesSettings", [
            { no: 1, name: "diversity_surrogate", kind: "message", T: () => o.hU },
            { no: 2, name: "use_rich_chat_input", kind: "message", T: () => o._t },
            { no: 3, name: "use_thread_sidebar", kind: "message", T: () => o._t },
            { no: 4, name: "render_spoilers", kind: "message", T: () => o.hU },
            { no: 5, name: "emoji_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 6, name: "sticker_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 7, name: "view_image_descriptions", kind: "message", T: () => o._t },
            { no: 8, name: "show_command_suggestions", kind: "message", T: () => o._t },
            { no: 9, name: "inline_attachment_media", kind: "message", T: () => o._t },
            { no: 10, name: "inline_embed_media", kind: "message", T: () => o._t },
            { no: 11, name: "gif_auto_play", kind: "message", T: () => o._t },
            { no: 12, name: "render_embeds", kind: "message", T: () => o._t },
            { no: 13, name: "render_reactions", kind: "message", T: () => o._t },
            { no: 14, name: "animate_emoji", kind: "message", T: () => o._t },
            { no: 15, name: "animate_stickers", kind: "message", T: () => o.ZQ },
            { no: 16, name: "enable_tts_command", kind: "message", T: () => o._t },
            { no: 17, name: "message_display_compact", kind: "message", T: () => o._t },
            { no: 19, name: "explicit_content_filter", kind: "message", T: () => o.ZQ },
            { no: 20, name: "view_nsfw_guilds", kind: "message", T: () => o._t },
            { no: 21, name: "convert_emoticons", kind: "message", T: () => o._t },
            { no: 22, name: "expression_suggestions_enabled", kind: "message", T: () => o._t },
            { no: 23, name: "view_nsfw_commands", kind: "message", T: () => o._t },
            { no: 24, name: "use_legacy_chat_input", kind: "message", T: () => o._t },
            { no: 25, name: "soundboard_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 26, name: "dm_spam_filter", kind: "message", T: () => o.ZQ },
            {
                no: 27,
                name: "dm_spam_filter_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", f],
            },
            { no: 28, name: "include_stickers_in_autocomplete", kind: "message", T: () => o._t },
            { no: 29, name: "explicit_content_settings", kind: "message", T: () => ea },
            { no: 30, name: "keyword_filter_settings", kind: "message", T: () => ed },
            { no: 31, name: "include_soundmoji_in_autocomplete", kind: "message", T: () => o._t },
            { no: 32, name: "gore_content_settings", kind: "message", T: () => eo },
            { no: 33, name: "default_reaction_emoji", kind: "message", T: () => tg },
            { no: 34, name: "show_mention_suggestions", kind: "message", T: () => o._t },
            { no: 35, name: "self_harm_content_settings", kind: "message", T: () => eu },
            { no: 36, name: "is_cross_dm_search_enabled", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {
            emojiPickerCollapsedSections: [],
            stickerPickerCollapsedSections: [],
            soundboardPickerCollapsedSections: [],
            dmSpamFilterV2: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.diversitySurrogate = o.hU.internalBinaryRead(e, e.uint32(), n, a.diversitySurrogate);
                    break;
                case 2:
                    a.useRichChatInput = o._t.internalBinaryRead(e, e.uint32(), n, a.useRichChatInput);
                    break;
                case 3:
                    a.useThreadSidebar = o._t.internalBinaryRead(e, e.uint32(), n, a.useThreadSidebar);
                    break;
                case 4:
                    a.renderSpoilers = o.hU.internalBinaryRead(e, e.uint32(), n, a.renderSpoilers);
                    break;
                case 5:
                    a.emojiPickerCollapsedSections.push(e.string());
                    break;
                case 6:
                    a.stickerPickerCollapsedSections.push(e.string());
                    break;
                case 7:
                    a.viewImageDescriptions = o._t.internalBinaryRead(e, e.uint32(), n, a.viewImageDescriptions);
                    break;
                case 8:
                    a.showCommandSuggestions = o._t.internalBinaryRead(e, e.uint32(), n, a.showCommandSuggestions);
                    break;
                case 9:
                    a.inlineAttachmentMedia = o._t.internalBinaryRead(e, e.uint32(), n, a.inlineAttachmentMedia);
                    break;
                case 10:
                    a.inlineEmbedMedia = o._t.internalBinaryRead(e, e.uint32(), n, a.inlineEmbedMedia);
                    break;
                case 11:
                    a.gifAutoPlay = o._t.internalBinaryRead(e, e.uint32(), n, a.gifAutoPlay);
                    break;
                case 12:
                    a.renderEmbeds = o._t.internalBinaryRead(e, e.uint32(), n, a.renderEmbeds);
                    break;
                case 13:
                    a.renderReactions = o._t.internalBinaryRead(e, e.uint32(), n, a.renderReactions);
                    break;
                case 14:
                    a.animateEmoji = o._t.internalBinaryRead(e, e.uint32(), n, a.animateEmoji);
                    break;
                case 15:
                    a.animateStickers = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.animateStickers);
                    break;
                case 16:
                    a.enableTtsCommand = o._t.internalBinaryRead(e, e.uint32(), n, a.enableTtsCommand);
                    break;
                case 17:
                    a.messageDisplayCompact = o._t.internalBinaryRead(e, e.uint32(), n, a.messageDisplayCompact);
                    break;
                case 19:
                    a.explicitContentFilter = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.explicitContentFilter);
                    break;
                case 20:
                    a.viewNsfwGuilds = o._t.internalBinaryRead(e, e.uint32(), n, a.viewNsfwGuilds);
                    break;
                case 21:
                    a.convertEmoticons = o._t.internalBinaryRead(e, e.uint32(), n, a.convertEmoticons);
                    break;
                case 22:
                    a.expressionSuggestionsEnabled = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.expressionSuggestionsEnabled,
                    );
                    break;
                case 23:
                    a.viewNsfwCommands = o._t.internalBinaryRead(e, e.uint32(), n, a.viewNsfwCommands);
                    break;
                case 24:
                    a.useLegacyChatInput = o._t.internalBinaryRead(e, e.uint32(), n, a.useLegacyChatInput);
                    break;
                case 25:
                    a.soundboardPickerCollapsedSections.push(e.string());
                    break;
                case 26:
                    a.dmSpamFilter = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.dmSpamFilter);
                    break;
                case 27:
                    a.dmSpamFilterV2 = e.int32();
                    break;
                case 28:
                    a.includeStickersInAutocomplete = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.includeStickersInAutocomplete,
                    );
                    break;
                case 29:
                    a.explicitContentSettings = ea.internalBinaryRead(e, e.uint32(), n, a.explicitContentSettings);
                    break;
                case 30:
                    a.keywordFilterSettings = ed.internalBinaryRead(e, e.uint32(), n, a.keywordFilterSettings);
                    break;
                case 31:
                    a.includeSoundmojiInAutocomplete = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.includeSoundmojiInAutocomplete,
                    );
                    break;
                case 32:
                    a.goreContentSettings = eo.internalBinaryRead(e, e.uint32(), n, a.goreContentSettings);
                    break;
                case 33:
                    a.defaultReactionEmoji = tg.internalBinaryRead(e, e.uint32(), n, a.defaultReactionEmoji);
                    break;
                case 34:
                    a.showMentionSuggestions = o._t.internalBinaryRead(e, e.uint32(), n, a.showMentionSuggestions);
                    break;
                case 35:
                    a.selfHarmContentSettings = eu.internalBinaryRead(e, e.uint32(), n, a.selfHarmContentSettings);
                    break;
                case 36:
                    a.isCrossDmSearchEnabled = o._t.internalBinaryRead(e, e.uint32(), n, a.isCrossDmSearchEnabled);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.diversitySurrogate &&
            o.hU.internalBinaryWrite(e.diversitySurrogate, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.useRichChatInput &&
                o._t.internalBinaryWrite(e.useRichChatInput, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.useThreadSidebar &&
                o._t.internalBinaryWrite(e.useThreadSidebar, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.renderSpoilers &&
                o.hU.internalBinaryWrite(e.renderSpoilers, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++)
            t.tag(5, r.O0.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
        for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++)
            t.tag(6, r.O0.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
        e.viewImageDescriptions &&
            o._t.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.showCommandSuggestions &&
                o._t.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.inlineAttachmentMedia &&
                o._t.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.inlineEmbedMedia &&
                o._t.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.gifAutoPlay && o._t.internalBinaryWrite(e.gifAutoPlay, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.renderEmbeds &&
                o._t.internalBinaryWrite(e.renderEmbeds, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.renderReactions &&
                o._t.internalBinaryWrite(e.renderReactions, t.tag(13, r.O0.LengthDelimited).fork(), n).join(),
            e.animateEmoji &&
                o._t.internalBinaryWrite(e.animateEmoji, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            e.animateStickers &&
                o.ZQ.internalBinaryWrite(e.animateStickers, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            e.enableTtsCommand &&
                o._t.internalBinaryWrite(e.enableTtsCommand, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            e.messageDisplayCompact &&
                o._t.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            e.explicitContentFilter &&
                o.ZQ.internalBinaryWrite(e.explicitContentFilter, t.tag(19, r.O0.LengthDelimited).fork(), n).join(),
            e.viewNsfwGuilds &&
                o._t.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, r.O0.LengthDelimited).fork(), n).join(),
            e.convertEmoticons &&
                o._t.internalBinaryWrite(e.convertEmoticons, t.tag(21, r.O0.LengthDelimited).fork(), n).join(),
            e.expressionSuggestionsEnabled &&
                o._t
                    .internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.viewNsfwCommands &&
                o._t.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, r.O0.LengthDelimited).fork(), n).join(),
            e.useLegacyChatInput &&
                o._t.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, r.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++)
            t.tag(25, r.O0.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
        e.dmSpamFilter && o.ZQ.internalBinaryWrite(e.dmSpamFilter, t.tag(26, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dmSpamFilterV2 && t.tag(27, r.O0.Varint).int32(e.dmSpamFilterV2),
            e.includeStickersInAutocomplete &&
                o._t
                    .internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.explicitContentSettings &&
                ea.internalBinaryWrite(e.explicitContentSettings, t.tag(29, r.O0.LengthDelimited).fork(), n).join(),
            e.keywordFilterSettings &&
                ed.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, r.O0.LengthDelimited).fork(), n).join(),
            e.includeSoundmojiInAutocomplete &&
                o._t
                    .internalBinaryWrite(e.includeSoundmojiInAutocomplete, t.tag(31, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.goreContentSettings &&
                eo.internalBinaryWrite(e.goreContentSettings, t.tag(32, r.O0.LengthDelimited).fork(), n).join(),
            e.defaultReactionEmoji &&
                tg.internalBinaryWrite(e.defaultReactionEmoji, t.tag(33, r.O0.LengthDelimited).fork(), n).join(),
            e.showMentionSuggestions &&
                o._t.internalBinaryWrite(e.showMentionSuggestions, t.tag(34, r.O0.LengthDelimited).fork(), n).join(),
            e.selfHarmContentSettings &&
                eu.internalBinaryWrite(e.selfHarmContentSettings, t.tag(35, r.O0.LengthDelimited).fork(), n).join(),
            e.isCrossDmSearchEnabled &&
                o._t.internalBinaryWrite(e.isCrossDmSearchEnabled, t.tag(36, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ef = new e_();
class ep extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.NotificationSettings", [
            { no: 1, name: "show_in_app_notifications", kind: "message", T: () => o._t },
            { no: 2, name: "notify_friends_on_go_live", kind: "message", T: () => o._t },
            { no: 3, name: "notification_center_acked_before_id", kind: "scalar", T: 6 },
            { no: 4, name: "enable_burst_reaction_notifications", kind: "message", T: () => o._t },
            { no: 5, name: "quiet_mode", kind: "message", T: () => o._t },
            { no: 6, name: "focus_mode_expires_at_ms", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "reaction_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ReactionNotificationType", p],
            },
            {
                no: 8,
                name: "game_activity_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GameActivityNotificationType", h],
            },
            {
                no: 9,
                name: "custom_status_push_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.CustomStatusPushNotificationType", m],
            },
            { no: 10, name: "game_activity_exclude_steam_notifications", kind: "message", T: () => o._t },
            { no: 11, name: "enable_voice_activity_notifications", kind: "message", T: () => o._t },
            { no: 12, name: "enable_friend_online_notifications", kind: "message", T: () => o._t },
            { no: 13, name: "enable_user_resurrection_notifications", kind: "message", T: () => o._t },
            { no: 14, name: "enable_friend_anniversary_notifications", kind: "message", T: () => o._t },
            { no: 15, name: "enable_game_update_notifications", kind: "message", T: () => o._t },
            { no: 16, name: "enable_profile_updates_notifications", kind: "message", T: () => o._t },
            { no: 17, name: "enable_server_trending_notifications", kind: "message", T: () => o._t },
            { no: 18, name: "enable_dm_reply_nudge_reminders", kind: "message", T: () => o._t },
            { no: 19, name: "enable_summary_reminder_notifications", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {
            notificationCenterAckedBeforeId: "0",
            focusModeExpiresAtMs: "0",
            reactionNotifications: 0,
            gameActivityNotifications: 0,
            customStatusPushNotifications: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.showInAppNotifications = o._t.internalBinaryRead(e, e.uint32(), n, a.showInAppNotifications);
                    break;
                case 2:
                    a.notifyFriendsOnGoLive = o._t.internalBinaryRead(e, e.uint32(), n, a.notifyFriendsOnGoLive);
                    break;
                case 3:
                    a.notificationCenterAckedBeforeId = e.fixed64().toString();
                    break;
                case 4:
                    a.enableBurstReactionNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableBurstReactionNotifications,
                    );
                    break;
                case 5:
                    a.quietMode = o._t.internalBinaryRead(e, e.uint32(), n, a.quietMode);
                    break;
                case 6:
                    a.focusModeExpiresAtMs = e.fixed64().toString();
                    break;
                case 7:
                    a.reactionNotifications = e.int32();
                    break;
                case 8:
                    a.gameActivityNotifications = e.int32();
                    break;
                case 9:
                    a.customStatusPushNotifications = e.int32();
                    break;
                case 10:
                    a.gameActivityExcludeSteamNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.gameActivityExcludeSteamNotifications,
                    );
                    break;
                case 11:
                    a.enableVoiceActivityNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableVoiceActivityNotifications,
                    );
                    break;
                case 12:
                    a.enableFriendOnlineNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableFriendOnlineNotifications,
                    );
                    break;
                case 13:
                    a.enableUserResurrectionNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableUserResurrectionNotifications,
                    );
                    break;
                case 14:
                    a.enableFriendAnniversaryNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableFriendAnniversaryNotifications,
                    );
                    break;
                case 15:
                    a.enableGameUpdateNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableGameUpdateNotifications,
                    );
                    break;
                case 16:
                    a.enableProfileUpdatesNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableProfileUpdatesNotifications,
                    );
                    break;
                case 17:
                    a.enableServerTrendingNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableServerTrendingNotifications,
                    );
                    break;
                case 18:
                    a.enableDmReplyNudgeReminders = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableDmReplyNudgeReminders,
                    );
                    break;
                case 19:
                    a.enableSummaryReminderNotifications = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.enableSummaryReminderNotifications,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.showInAppNotifications &&
            o._t.internalBinaryWrite(e.showInAppNotifications, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.notifyFriendsOnGoLive &&
                o._t.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.notificationCenterAckedBeforeId &&
                t.tag(3, r.O0.Bit64).fixed64(e.notificationCenterAckedBeforeId),
            e.enableBurstReactionNotifications &&
                o._t
                    .internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.quietMode && o._t.internalBinaryWrite(e.quietMode, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.focusModeExpiresAtMs && t.tag(6, r.O0.Bit64).fixed64(e.focusModeExpiresAtMs),
            0 !== e.reactionNotifications && t.tag(7, r.O0.Varint).int32(e.reactionNotifications),
            0 !== e.gameActivityNotifications && t.tag(8, r.O0.Varint).int32(e.gameActivityNotifications),
            0 !== e.customStatusPushNotifications && t.tag(9, r.O0.Varint).int32(e.customStatusPushNotifications),
            e.gameActivityExcludeSteamNotifications &&
                o._t
                    .internalBinaryWrite(
                        e.gameActivityExcludeSteamNotifications,
                        t.tag(10, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableVoiceActivityNotifications &&
                o._t
                    .internalBinaryWrite(e.enableVoiceActivityNotifications, t.tag(11, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendOnlineNotifications &&
                o._t
                    .internalBinaryWrite(e.enableFriendOnlineNotifications, t.tag(12, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableUserResurrectionNotifications &&
                o._t
                    .internalBinaryWrite(
                        e.enableUserResurrectionNotifications,
                        t.tag(13, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableFriendAnniversaryNotifications &&
                o._t
                    .internalBinaryWrite(
                        e.enableFriendAnniversaryNotifications,
                        t.tag(14, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGameUpdateNotifications &&
                o._t
                    .internalBinaryWrite(e.enableGameUpdateNotifications, t.tag(15, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableProfileUpdatesNotifications &&
                o._t
                    .internalBinaryWrite(e.enableProfileUpdatesNotifications, t.tag(16, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableServerTrendingNotifications &&
                o._t
                    .internalBinaryWrite(e.enableServerTrendingNotifications, t.tag(17, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableDmReplyNudgeReminders &&
                o._t
                    .internalBinaryWrite(e.enableDmReplyNudgeReminders, t.tag(18, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableSummaryReminderNotifications &&
                o._t
                    .internalBinaryWrite(
                        e.enableSummaryReminderNotifications,
                        t.tag(19, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eh = new ep();
class em extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.PrivacySettings", [
            { no: 1, name: "allow_activity_party_privacy_friends", kind: "message", T: () => o._t },
            { no: 2, name: "allow_activity_party_privacy_voice_channel", kind: "message", T: () => o._t },
            { no: 3, name: "restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "default_guilds_restricted", kind: "scalar", T: 8 },
            { no: 7, name: "allow_accessibility_detection", kind: "scalar", T: 8 },
            { no: 8, name: "detect_platform_accounts", kind: "message", T: () => o._t },
            { no: 9, name: "passwordless", kind: "message", T: () => o._t },
            { no: 10, name: "contact_sync_enabled", kind: "message", T: () => o._t },
            { no: 11, name: "friend_source_flags", kind: "message", T: () => o.ZQ },
            { no: 12, name: "friend_discovery_flags", kind: "message", T: () => o.ZQ },
            { no: 13, name: "activity_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            {
                no: 14,
                name: "default_guilds_activity_restricted",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", g],
            },
            { no: 15, name: "activity_joining_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 16, name: "message_request_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 17, name: "default_message_request_restricted", kind: "message", T: () => o._t },
            { no: 18, name: "drops_opted_out", kind: "message", T: () => o._t },
            { no: 19, name: "non_spam_retraining_opt_in", kind: "message", T: () => o._t },
            { no: 20, name: "family_center_enabled", kind: "message", T: () => o._t },
            { no: 21, name: "family_center_enabled_v2", kind: "message", T: () => o._t },
            { no: 22, name: "hide_legacy_username", kind: "message", T: () => o._t },
            { no: 23, name: "inappropriate_conversation_warnings", kind: "message", T: () => o._t },
            { no: 24, name: "recent_games_enabled", kind: "message", T: () => o._t },
            {
                no: 25,
                name: "guilds_leaderboard_opt_out_default",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", A],
            },
            { no: 26, name: "allow_game_friend_dms_in_discord", kind: "message", T: () => o._t },
            { no: 27, name: "default_guilds_restricted_v2", kind: "message", T: () => o._t },
            {
                no: 28,
                name: "slayer_sdk_receive_dms_in_game",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SlayerSDKReceiveInGameDMs", I],
            },
            {
                no: 29,
                name: "default_guilds_activity_restricted_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2", E],
            },
            {
                no: 30,
                name: "quests_3p_data_opted_out",
                kind: "message",
                jsonName: "quests3pDataOptedOut",
                T: () => o._t,
            },
            { no: 31, name: "show_local_time", kind: "message", T: () => o._t },
            {
                no: 32,
                name: "profile_visibility",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ProfileVisibility", T, "PROFILE_VISIBILITY_"],
            },
        ]);
    }
    create(e) {
        let t = {
            restrictedGuildIds: [],
            defaultGuildsRestricted: !1,
            allowAccessibilityDetection: !1,
            activityRestrictedGuildIds: [],
            defaultGuildsActivityRestricted: 0,
            activityJoiningRestrictedGuildIds: [],
            messageRequestRestrictedGuildIds: [],
            guildsLeaderboardOptOutDefault: 0,
            slayerSdkReceiveDmsInGame: 0,
            defaultGuildsActivityRestrictedV2: 0,
            profileVisibility: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.allowActivityPartyPrivacyFriends = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.allowActivityPartyPrivacyFriends,
                    );
                    break;
                case 2:
                    a.allowActivityPartyPrivacyVoiceChannel = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.allowActivityPartyPrivacyVoiceChannel,
                    );
                    break;
                case 3:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.restrictedGuildIds.push(e.fixed64().toString());
                    else a.restrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 4:
                    a.defaultGuildsRestricted = e.bool();
                    break;
                case 7:
                    a.allowAccessibilityDetection = e.bool();
                    break;
                case 8:
                    a.detectPlatformAccounts = o._t.internalBinaryRead(e, e.uint32(), n, a.detectPlatformAccounts);
                    break;
                case 9:
                    a.passwordless = o._t.internalBinaryRead(e, e.uint32(), n, a.passwordless);
                    break;
                case 10:
                    a.contactSyncEnabled = o._t.internalBinaryRead(e, e.uint32(), n, a.contactSyncEnabled);
                    break;
                case 11:
                    a.friendSourceFlags = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.friendSourceFlags);
                    break;
                case 12:
                    a.friendDiscoveryFlags = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.friendDiscoveryFlags);
                    break;
                case 13:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            a.activityRestrictedGuildIds.push(e.fixed64().toString());
                    else a.activityRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 14:
                    a.defaultGuildsActivityRestricted = e.int32();
                    break;
                case 15:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            a.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    else a.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 16:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            a.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    else a.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 17:
                    a.defaultMessageRequestRestricted = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.defaultMessageRequestRestricted,
                    );
                    break;
                case 18:
                    a.dropsOptedOut = o._t.internalBinaryRead(e, e.uint32(), n, a.dropsOptedOut);
                    break;
                case 19:
                    a.nonSpamRetrainingOptIn = o._t.internalBinaryRead(e, e.uint32(), n, a.nonSpamRetrainingOptIn);
                    break;
                case 20:
                    a.familyCenterEnabled = o._t.internalBinaryRead(e, e.uint32(), n, a.familyCenterEnabled);
                    break;
                case 21:
                    a.familyCenterEnabledV2 = o._t.internalBinaryRead(e, e.uint32(), n, a.familyCenterEnabledV2);
                    break;
                case 22:
                    a.hideLegacyUsername = o._t.internalBinaryRead(e, e.uint32(), n, a.hideLegacyUsername);
                    break;
                case 23:
                    a.inappropriateConversationWarnings = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.inappropriateConversationWarnings,
                    );
                    break;
                case 24:
                    a.recentGamesEnabled = o._t.internalBinaryRead(e, e.uint32(), n, a.recentGamesEnabled);
                    break;
                case 25:
                    a.guildsLeaderboardOptOutDefault = e.int32();
                    break;
                case 26:
                    a.allowGameFriendDmsInDiscord = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.allowGameFriendDmsInDiscord,
                    );
                    break;
                case 27:
                    a.defaultGuildsRestrictedV2 = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.defaultGuildsRestrictedV2,
                    );
                    break;
                case 28:
                    a.slayerSdkReceiveDmsInGame = e.int32();
                    break;
                case 29:
                    a.defaultGuildsActivityRestrictedV2 = e.int32();
                    break;
                case 30:
                    a.quests3PDataOptedOut = o._t.internalBinaryRead(e, e.uint32(), n, a.quests3PDataOptedOut);
                    break;
                case 31:
                    a.showLocalTime = o._t.internalBinaryRead(e, e.uint32(), n, a.showLocalTime);
                    break;
                case 32:
                    a.profileVisibility = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowActivityPartyPrivacyFriends &&
                o._t
                    .internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.allowActivityPartyPrivacyVoiceChannel &&
                o._t
                    .internalBinaryWrite(
                        e.allowActivityPartyPrivacyVoiceChannel,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.restrictedGuildIds.length)
        ) {
            t.tag(3, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
            t.join();
        }
        if (
            (!1 !== e.defaultGuildsRestricted && t.tag(4, r.O0.Varint).bool(e.defaultGuildsRestricted),
            !1 !== e.allowAccessibilityDetection && t.tag(7, r.O0.Varint).bool(e.allowAccessibilityDetection),
            e.detectPlatformAccounts &&
                o._t.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.passwordless && o._t.internalBinaryWrite(e.passwordless, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.contactSyncEnabled &&
                o._t.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.friendSourceFlags &&
                o.ZQ.internalBinaryWrite(e.friendSourceFlags, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.friendDiscoveryFlags &&
                o.ZQ.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.activityRestrictedGuildIds.length)
        ) {
            t.tag(13, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
            t.join();
        }
        if (
            (0 !== e.defaultGuildsActivityRestricted && t.tag(14, r.O0.Varint).int32(e.defaultGuildsActivityRestricted),
            e.activityJoiningRestrictedGuildIds.length)
        ) {
            t.tag(15, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++)
                t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
            t.join();
        }
        if (e.messageRequestRestrictedGuildIds.length) {
            t.tag(16, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++)
                t.fixed64(e.messageRequestRestrictedGuildIds[n]);
            t.join();
        }
        e.defaultMessageRequestRestricted &&
            o._t
                .internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, r.O0.LengthDelimited).fork(), n)
                .join(),
            e.dropsOptedOut &&
                o._t.internalBinaryWrite(e.dropsOptedOut, t.tag(18, r.O0.LengthDelimited).fork(), n).join(),
            e.nonSpamRetrainingOptIn &&
                o._t.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, r.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabled &&
                o._t.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, r.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabledV2 &&
                o._t.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, r.O0.LengthDelimited).fork(), n).join(),
            e.hideLegacyUsername &&
                o._t.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, r.O0.LengthDelimited).fork(), n).join(),
            e.inappropriateConversationWarnings &&
                o._t
                    .internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.recentGamesEnabled &&
                o._t.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.guildsLeaderboardOptOutDefault && t.tag(25, r.O0.Varint).int32(e.guildsLeaderboardOptOutDefault),
            e.allowGameFriendDmsInDiscord &&
                o._t
                    .internalBinaryWrite(e.allowGameFriendDmsInDiscord, t.tag(26, r.O0.LengthDelimited).fork(), n)
                    .join(),
            e.defaultGuildsRestrictedV2 &&
                o._t.internalBinaryWrite(e.defaultGuildsRestrictedV2, t.tag(27, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.slayerSdkReceiveDmsInGame && t.tag(28, r.O0.Varint).int32(e.slayerSdkReceiveDmsInGame),
            0 !== e.defaultGuildsActivityRestrictedV2 &&
                t.tag(29, r.O0.Varint).int32(e.defaultGuildsActivityRestrictedV2),
            e.quests3PDataOptedOut &&
                o._t.internalBinaryWrite(e.quests3PDataOptedOut, t.tag(30, r.O0.LengthDelimited).fork(), n).join(),
            e.showLocalTime &&
                o._t.internalBinaryWrite(e.showLocalTime, t.tag(31, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.profileVisibility && t.tag(32, r.O0.Varint).int32(e.profileVisibility);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eg = new em();
class eE extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.DebugSettings", [
            { no: 1, name: "rtc_panel_show_voice_states", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                a.rtcPanelShowVoiceStates = o._t.internalBinaryRead(e, e.uint32(), n, a.rtcPanelShowVoiceStates);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.rtcPanelShowVoiceStates &&
            o._t.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eA = new eE();
class eI extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GameLibrarySettings", [
            { no: 1, name: "install_shortcut_desktop", kind: "message", T: () => o._t },
            { no: 2, name: "install_shortcut_start_menu", kind: "message", T: () => o._t },
            { no: 3, name: "disable_games_tab", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.installShortcutDesktop = o._t.internalBinaryRead(e, e.uint32(), n, a.installShortcutDesktop);
                    break;
                case 2:
                    a.installShortcutStartMenu = o._t.internalBinaryRead(e, e.uint32(), n, a.installShortcutStartMenu);
                    break;
                case 3:
                    a.disableGamesTab = o._t.internalBinaryRead(e, e.uint32(), n, a.disableGamesTab);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.installShortcutDesktop &&
            o._t.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.installShortcutStartMenu &&
                o._t.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.disableGamesTab &&
                o._t.internalBinaryWrite(e.disableGamesTab, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eT = new eI();
class eS extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.StatusSettings", [
            { no: 1, name: "status", kind: "message", T: () => o.hU },
            { no: 2, name: "custom_status", kind: "message", T: () => eC },
            { no: 3, name: "show_current_game", kind: "message", T: () => o._t },
            { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "status_created_at_ms", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = { statusExpiresAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.status = o.hU.internalBinaryRead(e, e.uint32(), n, a.status);
                    break;
                case 2:
                    a.customStatus = eC.internalBinaryRead(e, e.uint32(), n, a.customStatus);
                    break;
                case 3:
                    a.showCurrentGame = o._t.internalBinaryRead(e, e.uint32(), n, a.showCurrentGame);
                    break;
                case 4:
                    a.statusExpiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    a.statusCreatedAtMs = o.ol.internalBinaryRead(e, e.uint32(), n, a.statusCreatedAtMs);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.status && o.hU.internalBinaryWrite(e.status, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.customStatus && eC.internalBinaryWrite(e.customStatus, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.showCurrentGame &&
                o._t.internalBinaryWrite(e.showCurrentGame, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.statusExpiresAtMs && t.tag(4, r.O0.Bit64).fixed64(e.statusExpiresAtMs),
            e.statusCreatedAtMs &&
                o.ol.internalBinaryWrite(e.statusCreatedAtMs, t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ey = new eS();
class ev extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomStatus", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "emoji_id", kind: "scalar", T: 6 },
            { no: 3, name: "emoji_name", kind: "scalar", T: 9 },
            { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "created_at_ms", kind: "scalar", T: 6 },
            { no: 6, name: "label", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = { text: "", emojiId: "0", emojiName: "", expiresAtMs: "0", createdAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.text = e.string();
                    break;
                case 2:
                    a.emojiId = e.fixed64().toString();
                    break;
                case 3:
                    a.emojiName = e.string();
                    break;
                case 4:
                    a.expiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    a.createdAtMs = e.fixed64().toString();
                    break;
                case 6:
                    a.label = o.hU.internalBinaryRead(e, e.uint32(), n, a.label);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.text && t.tag(1, r.O0.LengthDelimited).string(e.text),
            "0" !== e.emojiId && t.tag(2, r.O0.Bit64).fixed64(e.emojiId),
            "" !== e.emojiName && t.tag(3, r.O0.LengthDelimited).string(e.emojiName),
            "0" !== e.expiresAtMs && t.tag(4, r.O0.Bit64).fixed64(e.expiresAtMs),
            "0" !== e.createdAtMs && t.tag(5, r.O0.Bit64).fixed64(e.createdAtMs),
            e.label && o.hU.internalBinaryWrite(e.label, t.tag(6, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eC = new ev();
class eN extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.LocalizationSettings", [
            { no: 1, name: "locale", kind: "message", T: () => o.hU },
            { no: 2, name: "timezone_offset", kind: "message", T: () => o.as },
            { no: 3, name: "timezone_name", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.locale = o.hU.internalBinaryRead(e, e.uint32(), n, a.locale);
                    break;
                case 2:
                    a.timezoneOffset = o.as.internalBinaryRead(e, e.uint32(), n, a.timezoneOffset);
                    break;
                case 3:
                    a.timezoneName = o.hU.internalBinaryRead(e, e.uint32(), n, a.timezoneName);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.locale && o.hU.internalBinaryWrite(e.locale, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.timezoneOffset &&
                o.as.internalBinaryWrite(e.timezoneOffset, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.timezoneName && o.hU.internalBinaryWrite(e.timezoneName, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eb = new eN();
class eR extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelListSettings", [
            { no: 1, name: "layout", kind: "message", T: () => o.hU },
            { no: 2, name: "message_previews", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.layout = o.hU.internalBinaryRead(e, e.uint32(), n, a.layout);
                    break;
                case 2:
                    a.messagePreviews = o.hU.internalBinaryRead(e, e.uint32(), n, a.messagePreviews);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.layout && o.hU.internalBinaryWrite(e.layout, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                o.hU.internalBinaryWrite(e.messagePreviews, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eO = new eR();
class eD extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.AppearanceSettings", [
            { no: 1, name: "theme", kind: "enum", T: () => ["discord_protos.discord_users.v1.Theme", y] },
            { no: 2, name: "developer_mode", kind: "scalar", T: 8 },
            { no: 3, name: "client_theme_settings", kind: "message", T: () => eP },
            { no: 4, name: "mobile_redesign_disabled", kind: "scalar", T: 8 },
            { no: 6, name: "channel_list_layout", kind: "message", T: () => o.hU },
            { no: 7, name: "message_previews", kind: "message", T: () => o.hU },
            { no: 8, name: "search_result_exact_count_enabled", kind: "message", T: () => o._t },
            {
                no: 9,
                name: "timestamp_hour_cycle",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.TimestampHourCycle", C],
            },
            { no: 10, name: "happening_now_cards_disabled", kind: "message", T: () => o._t },
            {
                no: 11,
                name: "launch_pad_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.LaunchPadMode", N],
            },
            { no: 12, name: "ui_density", kind: "enum", T: () => ["discord_protos.discord_users.v1.UIDensity", S] },
            {
                no: 13,
                name: "swipe_right_to_left_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SwipeRightToLeftMode", b],
            },
        ]);
    }
    create(e) {
        let t = {
            theme: 0,
            developerMode: !1,
            mobileRedesignDisabled: !1,
            timestampHourCycle: 0,
            launchPadMode: 0,
            uiDensity: 0,
            swipeRightToLeftMode: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.theme = e.int32();
                    break;
                case 2:
                    a.developerMode = e.bool();
                    break;
                case 3:
                    a.clientThemeSettings = eP.internalBinaryRead(e, e.uint32(), n, a.clientThemeSettings);
                    break;
                case 4:
                    a.mobileRedesignDisabled = e.bool();
                    break;
                case 6:
                    a.channelListLayout = o.hU.internalBinaryRead(e, e.uint32(), n, a.channelListLayout);
                    break;
                case 7:
                    a.messagePreviews = o.hU.internalBinaryRead(e, e.uint32(), n, a.messagePreviews);
                    break;
                case 8:
                    a.searchResultExactCountEnabled = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.searchResultExactCountEnabled,
                    );
                    break;
                case 9:
                    a.timestampHourCycle = e.int32();
                    break;
                case 10:
                    a.happeningNowCardsDisabled = o._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.happeningNowCardsDisabled,
                    );
                    break;
                case 11:
                    a.launchPadMode = e.int32();
                    break;
                case 12:
                    a.uiDensity = e.int32();
                    break;
                case 13:
                    a.swipeRightToLeftMode = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.theme && t.tag(1, r.O0.Varint).int32(e.theme),
            !1 !== e.developerMode && t.tag(2, r.O0.Varint).bool(e.developerMode),
            e.clientThemeSettings &&
                eP.internalBinaryWrite(e.clientThemeSettings, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.mobileRedesignDisabled && t.tag(4, r.O0.Varint).bool(e.mobileRedesignDisabled),
            e.channelListLayout &&
                o.hU.internalBinaryWrite(e.channelListLayout, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                o.hU.internalBinaryWrite(e.messagePreviews, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.searchResultExactCountEnabled &&
                o._t
                    .internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.timestampHourCycle && t.tag(9, r.O0.Varint).int32(e.timestampHourCycle),
            e.happeningNowCardsDisabled &&
                o._t.internalBinaryWrite(e.happeningNowCardsDisabled, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.launchPadMode && t.tag(11, r.O0.Varint).int32(e.launchPadMode),
            0 !== e.uiDensity && t.tag(12, r.O0.Varint).int32(e.uiDensity),
            0 !== e.swipeRightToLeftMode && t.tag(13, r.O0.Varint).int32(e.swipeRightToLeftMode);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eL = new eD();
class ew extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomUserThemeSettings", [
            { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "gradient_color_stops", kind: "scalar", repeat: 1, T: 2 },
            { no: 3, name: "gradient_angle", kind: "scalar", T: 5 },
            { no: 4, name: "base_mix", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { colors: [], gradientColorStops: [], gradientAngle: 0, baseMix: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.colors.push(e.string());
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.gradientColorStops.push(e.float());
                    else a.gradientColorStops.push(e.float());
                    break;
                case 3:
                    a.gradientAngle = e.int32();
                    break;
                case 4:
                    a.baseMix = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.colors[n]);
        if (e.gradientColorStops.length) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.gradientColorStops.length; n++) t.float(e.gradientColorStops[n]);
            t.join();
        }
        0 !== e.gradientAngle && t.tag(3, r.O0.Varint).int32(e.gradientAngle),
            0 !== e.baseMix && t.tag(4, r.O0.Varint).int32(e.baseMix);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ex = new ew();
class eM extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClientThemeSettings", [
            { no: 2, name: "background_gradient_preset_id", kind: "message", T: () => o.ZQ },
            { no: 4, name: "custom_user_theme_settings", kind: "message", T: () => ex },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 2:
                    a.backgroundGradientPresetId = o.ZQ.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.backgroundGradientPresetId,
                    );
                    break;
                case 4:
                    a.customUserThemeSettings = ex.internalBinaryRead(e, e.uint32(), n, a.customUserThemeSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.backgroundGradientPresetId &&
            o.ZQ.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.customUserThemeSettings &&
                ex.internalBinaryWrite(e.customUserThemeSettings, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eP = new eM();
class ek extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolders", [
            { no: 1, name: "folders", kind: "message", repeat: 1, T: () => eF },
            { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { folders: [], guildPositions: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.folders.push(eF.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.guildPositions.push(e.fixed64().toString());
                    else a.guildPositions.push(e.fixed64().toString());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.folders.length; i++)
            eF.internalBinaryWrite(e.folders[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        if (e.guildPositions.length) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eU = new ek();
class eG extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolder", [
            { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 2, name: "id", kind: "message", T: () => o.j1 },
            { no: 3, name: "name", kind: "message", T: () => o.hU },
            { no: 4, name: "color", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.guildIds.push(e.fixed64().toString());
                    else a.guildIds.push(e.fixed64().toString());
                    break;
                case 2:
                    a.id = o.j1.internalBinaryRead(e, e.uint32(), n, a.id);
                    break;
                case 3:
                    a.name = o.hU.internalBinaryRead(e, e.uint32(), n, a.name);
                    break;
                case 4:
                    a.color = o.ol.internalBinaryRead(e, e.uint32(), n, a.color);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        e.id && o.j1.internalBinaryWrite(e.id, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.name && o.hU.internalBinaryWrite(e.name, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.color && o.ol.internalBinaryWrite(e.color, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eF = new eG();
class eV extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.Favorites", [
            { no: 1, name: "favorite_channels", kind: "map", K: 6, V: { kind: "message", T: () => eH } },
            { no: 2, name: "muted", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { favoriteChannels: {}, muted: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.favoriteChannels, e, n);
                    break;
                case 2:
                    a.muted = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = eH.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels",
                    );
            }
        }
        e[a ?? "0"] = s ?? eH.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.favoriteChannels))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                eH.internalBinaryWrite(e.favoriteChannels[i], t, n),
                t.join().join();
        !1 !== e.muted && t.tag(2, r.O0.Varint).bool(e.muted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eB = new eV();
class ej extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteChannel", [
            { no: 1, name: "nickname", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", R] },
            { no: 3, name: "position", kind: "scalar", T: 13 },
            { no: 4, name: "parent_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { nickname: "", type: 0, position: 0, parentId: "0" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.nickname = e.string();
                    break;
                case 2:
                    a.type = e.int32();
                    break;
                case 3:
                    a.position = e.uint32();
                    break;
                case 4:
                    a.parentId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.nickname && t.tag(1, r.O0.LengthDelimited).string(e.nickname),
            0 !== e.type && t.tag(2, r.O0.Varint).int32(e.type),
            0 !== e.position && t.tag(3, r.O0.Varint).uint32(e.position),
            "0" !== e.parentId && t.tag(4, r.O0.Bit64).fixed64(e.parentId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eH = new ej();
class eY extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.AudioContextSetting", [
            { no: 1, name: "muted", kind: "scalar", T: 8 },
            { no: 2, name: "volume", kind: "scalar", T: 2 },
            { no: 3, name: "modified_at", kind: "scalar", T: 6 },
            { no: 4, name: "soundboard_muted", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { muted: !1, volume: 0, modifiedAt: "0", soundboardMuted: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.muted = e.bool();
                    break;
                case 2:
                    a.volume = e.float();
                    break;
                case 3:
                    a.modifiedAt = e.fixed64().toString();
                    break;
                case 4:
                    a.soundboardMuted = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.muted && t.tag(1, r.O0.Varint).bool(e.muted),
            0 !== e.volume && t.tag(2, r.O0.Bit32).float(e.volume),
            "0" !== e.modifiedAt && t.tag(3, r.O0.Bit64).fixed64(e.modifiedAt),
            !1 !== e.soundboardMuted && t.tag(4, r.O0.Varint).bool(e.soundboardMuted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eW = new eY();
class eK extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.AudioSettings", [
            { no: 1, name: "user", kind: "map", K: 6, V: { kind: "message", T: () => eW } },
            { no: 2, name: "stream", kind: "map", K: 6, V: { kind: "message", T: () => eW } },
        ]);
    }
    create(e) {
        let t = { user: {}, stream: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.user, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(a.stream, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = eW.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user",
                    );
            }
        }
        e[a ?? "0"] = s ?? eW.create();
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = eW.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream",
                    );
            }
        }
        e[a ?? "0"] = s ?? eW.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.user))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                eW.internalBinaryWrite(e.user[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.stream))
            t.tag(2, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                eW.internalBinaryWrite(e.stream[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ez = new eK();
class e$ extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.CommunitiesSettings", [
            { no: 1, name: "disable_home_auto_nav", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.disableHomeAutoNav = o._t.internalBinaryRead(e, e.uint32(), n, a.disableHomeAutoNav);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.disableHomeAutoNav &&
            o._t.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eq = new e$();
class eX extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.SoundboardSettings", [{ no: 1, name: "volume", kind: "scalar", T: 2 }]);
    }
    create(e) {
        let t = { volume: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.volume = e.float();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.volume && t.tag(1, r.O0.Bit32).float(e.volume);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eZ = new eX();
class eQ extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomCallSound", [
            { no: 1, name: "sound_id", kind: "scalar", T: 6 },
            { no: 2, name: "guild_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { soundId: "0", guildId: "0" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.soundId = e.fixed64().toString();
                    break;
                case 2:
                    a.guildId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.soundId && t.tag(1, r.O0.Bit64).fixed64(e.soundId),
            "0" !== e.guildId && t.tag(2, r.O0.Bit64).fixed64(e.guildId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eJ = new eQ();
class e0 extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.BroadcastSettings", [
            { no: 1, name: "allow_friends", kind: "message", T: () => o._t },
            { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "auto_broadcast", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = { allowedGuildIds: [], allowedUserIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.allowFriends = o._t.internalBinaryRead(e, e.uint32(), n, a.allowFriends);
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.allowedGuildIds.push(e.fixed64().toString());
                    else a.allowedGuildIds.push(e.fixed64().toString());
                    break;
                case 3:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.allowedUserIds.push(e.fixed64().toString());
                    else a.allowedUserIds.push(e.fixed64().toString());
                    break;
                case 4:
                    a.autoBroadcast = o._t.internalBinaryRead(e, e.uint32(), n, a.autoBroadcast);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowFriends &&
                o._t.internalBinaryWrite(e.allowFriends, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.allowedGuildIds.length)
        ) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
            t.join();
        }
        if (e.allowedUserIds.length) {
            t.tag(3, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
            t.join();
        }
        e.autoBroadcast && o._t.internalBinaryWrite(e.autoBroadcast, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e1 = new e0();
class e2 extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClipsSettings", [
            { no: 1, name: "allow_voice_recording", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.allowVoiceRecording = o._t.internalBinaryRead(e, e.uint32(), n, a.allowVoiceRecording);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.allowVoiceRecording &&
            o._t.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e3 = new e2();
class e6 extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimit", [
            { no: 1, name: "amount", kind: "scalar", T: 4 },
            { no: 2, name: "currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { amount: "0", currency: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.amount = e.uint64().toString();
                    break;
                case 2:
                    a.currency = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.amount && t.tag(1, r.O0.Varint).uint64(e.amount),
            "" !== e.currency && t.tag(2, r.O0.LengthDelimited).string(e.currency);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e4 = new e6();
class e5 extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimitSettings", [
            { no: 1, name: "one_time_purchase_limit", kind: "message", T: () => e4 },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.oneTimePurchaseLimit = e4.internalBinaryRead(e, e.uint32(), n, a.oneTimePurchaseLimit);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.oneTimePurchaseLimit &&
            e4.internalBinaryWrite(e.oneTimePurchaseLimit, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e7 = new e5();
class e8 extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.SafetySettings", [
            {
                no: 1,
                name: "safety_settings_preset",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SafetySettingsPresetType", O],
            },
            { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 },
            { no: 3, name: "spending_limit_settings", kind: "message", T: () => e7 },
        ]);
    }
    create(e) {
        let t = { safetySettingsPreset: 0, ignoreProfileSpeedbumpDisabled: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.safetySettingsPreset = e.int32();
                    break;
                case 2:
                    a.ignoreProfileSpeedbumpDisabled = e.bool();
                    break;
                case 3:
                    a.spendingLimitSettings = e7.internalBinaryRead(e, e.uint32(), n, a.spendingLimitSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.safetySettingsPreset && t.tag(1, r.O0.Varint).int32(e.safetySettingsPreset),
            !1 !== e.ignoreProfileSpeedbumpDisabled && t.tag(2, r.O0.Varint).bool(e.ignoreProfileSpeedbumpDisabled),
            e.spendingLimitSettings &&
                e7.internalBinaryWrite(e.spendingLimitSettings, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e9 = new e8();
class te extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ForLaterSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ForLaterTab", D, "FOR_LATER_TAB_"],
            },
        ]);
    }
    create(e) {
        let t = { currentTab: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.currentTab = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, r.O0.Varint).int32(e.currentTab);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tt = new te();
class tn extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ICYMISettings", [
            { no: 1, name: "feed_generated_at", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { feedGeneratedAt: "0" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.feedGeneratedAt = e.fixed64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.feedGeneratedAt && t.tag(1, r.O0.Bit64).fixed64(e.feedGeneratedAt);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tr = new tn();
class ti extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllApplicationSettings", [
            { no: 1, name: "app_settings", kind: "map", K: 6, V: { kind: "message", T: () => to } },
        ]);
    }
    create(e) {
        let t = { appSettings: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.appSettings, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = to.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings",
                    );
            }
        }
        e[a ?? "0"] = s ?? to.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.appSettings))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                to.internalBinaryWrite(e.appSettings[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ta = new ti();
class ts extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSettings", [
            { no: 1, name: "app_dm_settings", kind: "message", T: () => tu },
            { no: 2, name: "app_sharing_settings", kind: "message", T: () => td },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.appDmSettings = tu.internalBinaryRead(e, e.uint32(), n, a.appDmSettings);
                    break;
                case 2:
                    a.appSharingSettings = td.internalBinaryRead(e, e.uint32(), n, a.appSharingSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.appDmSettings && tu.internalBinaryWrite(e.appDmSettings, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.appSharingSettings &&
                td.internalBinaryWrite(e.appSharingSettings, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let to = new ts();
class tl extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationDMSettings", [
            { no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { allowMobilePush: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (2 === t) a.allowMobilePush = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.allowMobilePush && t.tag(2, r.O0.Varint).bool(e.allowMobilePush);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tu = new tl();
class tc extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSharingSettings", [
            { no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { disableApplicationActivitySharing: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.disableApplicationActivitySharing = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.disableApplicationActivitySharing && t.tag(1, r.O0.Varint).bool(e.disableApplicationActivitySharing);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let td = new tc();
class t_ extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.AdsSettings", [{ no: 1, name: "always_deliver", kind: "scalar", T: 8 }]);
    }
    create(e) {
        let t = { alwaysDeliver: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.alwaysDeliver = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.alwaysDeliver && t.tag(1, r.O0.Varint).bool(e.alwaysDeliver);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tf = new t_();
class tp extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackState", [
            { no: 1, name: "last_impression_time", kind: "message", T: () => o.ol },
            { no: 2, name: "opt_out_expiry_time", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.lastImpressionTime = o.ol.internalBinaryRead(e, e.uint32(), n, a.lastImpressionTime);
                    break;
                case 2:
                    a.optOutExpiryTime = o.ol.internalBinaryRead(e, e.uint32(), n, a.optOutExpiryTime);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.lastImpressionTime &&
            o.ol.internalBinaryWrite(e.lastImpressionTime, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.optOutExpiryTime &&
                o.ol.internalBinaryWrite(e.optOutExpiryTime, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let th = new tp();
class tm extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.DefaultReactionEmoji", [
            { no: 1, name: "emoji_id", kind: "message", T: () => o.ol },
            { no: 2, name: "emoji_name", kind: "message", T: () => o.hU },
            { no: 3, name: "animated", kind: "message", T: () => o._t },
            { no: 4, name: "disable_double_tap", kind: "message", T: () => o._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.emojiId = o.ol.internalBinaryRead(e, e.uint32(), n, a.emojiId);
                    break;
                case 2:
                    a.emojiName = o.hU.internalBinaryRead(e, e.uint32(), n, a.emojiName);
                    break;
                case 3:
                    a.animated = o._t.internalBinaryRead(e, e.uint32(), n, a.animated);
                    break;
                case 4:
                    a.disableDoubleTap = o._t.internalBinaryRead(e, e.uint32(), n, a.disableDoubleTap);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.emojiId && o.ol.internalBinaryWrite(e.emojiId, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.emojiName && o.hU.internalBinaryWrite(e.emojiName, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.animated && o._t.internalBinaryWrite(e.animated, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.disableDoubleTap &&
                o._t.internalBinaryWrite(e.disableDoubleTap, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tg = new tm();
class tE extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackSettings", [
            { no: 1, name: "in_app_feedback_states", kind: "map", K: 5, V: { kind: "message", T: () => th } },
        ]);
    }
    create(e) {
        let t = { inAppFeedbackStates: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.inAppFeedbackStates, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.int32();
                    break;
                case 2:
                    s = th.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states",
                    );
            }
        }
        e[a ?? 0] = s ?? th.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.inAppFeedbackStates))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).int32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                th.internalBinaryWrite(e.inAppFeedbackStates[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tA = new tE();
