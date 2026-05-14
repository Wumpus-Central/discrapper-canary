"use strict";
n.d(t, {
    AN: () => H,
    Ar: () => Q,
    DQ: () => V,
    E: () => ej,
    F1: () => ez,
    GY: () => eb,
    Ip: () => ee,
    Ju: () => em,
    KJ: () => eu,
    KP: () => K,
    NS: () => $,
    PZ: () => X,
    Q0: () => eo,
    Qd: () => j,
    Sx: () => q,
    TO: () => U,
    TY: () => eB,
    Tz: () => G,
    X9: () => eW,
    Y2: () => P,
    YW: () => eN,
    ak: () => tt,
    eF: () => x,
    fL: () => W,
    he: () => k,
    iL: () => ei,
    ju: () => Z,
    kW: () => J,
    nT: () => es,
    nx: () => ef,
    oJ: () => eF,
    oP: () => to,
    tI: () => z,
    wL: () => ts,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073);
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c,
    d,
    _,
    f,
    h,
    p,
    E,
    m,
    g,
    A,
    I,
    T,
    S,
    N,
    y,
    C,
    v,
    O = n(852015),
    R = n(144367),
    b = n(428420),
    D = n(535384),
    L = n(406935),
    w = n(335871),
    M = n(813827),
    P =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.MENTIONS = 1)] = "MENTIONS"),
        (i[(i.UNREADS = 2)] = "UNREADS"),
        (i[(i.TODOS = 3)] = "TODOS"),
        (i[(i.FOR_YOU = 4)] = "FOR_YOU"),
        (i[(i.GAME_INVITES = 5)] = "GAME_INVITES"),
        (i[(i.BOOKMARKS = 6)] = "BOOKMARKS"),
        (i[(i.SCHEDULED = 7)] = "SCHEDULED"),
        i),
    x =
        (((r = {})[(r.NO_GUILD_ONBOARDING = 0)] = "NO_GUILD_ONBOARDING"),
        (r[(r.GUILD_NOTICE_SHOWN = 1)] = "GUILD_NOTICE_SHOWN"),
        (r[(r.GUILD_NOTICE_CLEARED = 2)] = "GUILD_NOTICE_CLEARED"),
        r),
    U =
        (((s = {})[(s.UNSET_EXPLICIT_CONTENT_REDACTION = 0)] = "UNSET_EXPLICIT_CONTENT_REDACTION"),
        (s[(s.SHOW = 1)] = "SHOW"),
        (s[(s.BLUR = 2)] = "BLUR"),
        (s[(s.BLOCK = 3)] = "BLOCK"),
        s),
    k =
        (((a = {})[(a.DEFAULT_UNSET = 0)] = "DEFAULT_UNSET"),
        (a[(a.DISABLED = 1)] = "DISABLED"),
        (a[(a.NON_FRIENDS = 2)] = "NON_FRIENDS"),
        (a[(a.FRIENDS_AND_NON_FRIENDS = 3)] = "FRIENDS_AND_NON_FRIENDS"),
        a),
    G =
        (((o = {})[(o.NOTIFICATIONS_ENABLED = 0)] = "NOTIFICATIONS_ENABLED"),
        (o[(o.ONLY_DMS = 1)] = "ONLY_DMS"),
        (o[(o.NOTIFICATIONS_DISABLED = 2)] = "NOTIFICATIONS_DISABLED"),
        o),
    F =
        (((l = {})[(l.ACTIVITY_NOTIFICATIONS_UNSET = 0)] = "ACTIVITY_NOTIFICATIONS_UNSET"),
        (l[(l.ACTIVITY_NOTIFICATIONS_DISABLED = 1)] = "ACTIVITY_NOTIFICATIONS_DISABLED"),
        (l[(l.ACTIVITY_NOTIFICATIONS_ENABLED = 2)] = "ACTIVITY_NOTIFICATIONS_ENABLED"),
        (l[(l.ONLY_GAMES_PLAYED = 3)] = "ONLY_GAMES_PLAYED"),
        l),
    V =
        (((u = {})[(u.STATUS_PUSH_UNSET = 0)] = "STATUS_PUSH_UNSET"),
        (u[(u.STATUS_PUSH_ENABLED = 1)] = "STATUS_PUSH_ENABLED"),
        (u[(u.STATUS_PUSH_DISABLED = 2)] = "STATUS_PUSH_DISABLED"),
        u),
    B =
        (((c = {})[(c.UNSET = 0)] = "UNSET"),
        (c[(c.GOOGLE = 1)] = "GOOGLE"),
        (c[(c.BING = 2)] = "BING"),
        (c[(c.DUCKDUCKGO = 3)] = "DUCKDUCKGO"),
        (c[(c.CUSTOM = 4)] = "CUSTOM"),
        c),
    H =
        (((d = {})[(d.OFF = 0)] = "OFF"),
        (d[(d.ON_FOR_LARGE_GUILDS = 1)] = "ON_FOR_LARGE_GUILDS"),
        (d[(d.ON = 2)] = "ON"),
        d),
    j =
        (((_ = {})[(_.ACTIVITY_STATUS_UNSET = 0)] = "ACTIVITY_STATUS_UNSET"),
        (_[(_.ACTIVITY_STATUS_OFF = 1)] = "ACTIVITY_STATUS_OFF"),
        (_[(_.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS = 2)] = "ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS"),
        (_[(_.ACTIVITY_STATUS_ON = 3)] = "ACTIVITY_STATUS_ON"),
        _),
    Y =
        (((f = {})[(f.OFF_FOR_NEW_GUILDS = 0)] = "OFF_FOR_NEW_GUILDS"),
        (f[(f.ON_FOR_NEW_GUILDS = 1)] = "ON_FOR_NEW_GUILDS"),
        f),
    W =
        (((h = {})[(h.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = 0)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET"),
        (h[(h.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = 1)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL"),
        (h[(h.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME = 2)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME"),
        (h[(h.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE = 3)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE"),
        h),
    K =
        (((p = {})[(p.UNSET = 0)] = "UNSET"),
        (p[(p.FRIENDS_ONLY = 1)] = "FRIENDS_ONLY"),
        (p[(p.FRIENDS_AND_SMALL_GUILDS = 2)] = "FRIENDS_AND_SMALL_GUILDS"),
        (p[(p.FRIENDS_AND_ALL_GUILDS = 3)] = "FRIENDS_AND_ALL_GUILDS"),
        p),
    z =
        (((E = {})[(E.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (E[(E.PERSONAL = 1)] = "PERSONAL"),
        (E[(E.GUILD = 2)] = "GUILD"),
        E),
    $ =
        (((m = {})[(m.UNSET_UI_DENSITY = 0)] = "UNSET_UI_DENSITY"),
        (m[(m.COMPACT = 1)] = "COMPACT"),
        (m[(m.COZY = 2)] = "COZY"),
        (m[(m.RESPONSIVE = 3)] = "RESPONSIVE"),
        (m[(m.DEFAULT = 4)] = "DEFAULT"),
        m),
    q =
        (((g = {})[(g.UNSET = 0)] = "UNSET"),
        (g[(g.DARK = 1)] = "DARK"),
        (g[(g.LIGHT = 2)] = "LIGHT"),
        (g[(g.DARKER = 3)] = "DARKER"),
        (g[(g.MIDNIGHT = 4)] = "MIDNIGHT"),
        g),
    Z =
        (((A = {})[(A.MINT_APPLE = 0)] = "MINT_APPLE"),
        (A[(A.CITRUS_SHERBERT = 1)] = "CITRUS_SHERBERT"),
        (A[(A.RETRO_RAINCLOUD = 2)] = "RETRO_RAINCLOUD"),
        (A[(A.HANAMI = 3)] = "HANAMI"),
        (A[(A.SUNRISE = 4)] = "SUNRISE"),
        (A[(A.COTTON_CANDY = 5)] = "COTTON_CANDY"),
        (A[(A.LOFI_VIBES = 6)] = "LOFI_VIBES"),
        (A[(A.DESERT_KHAKI = 7)] = "DESERT_KHAKI"),
        (A[(A.SUNSET = 8)] = "SUNSET"),
        (A[(A.CHROMA_GLOW = 9)] = "CHROMA_GLOW"),
        (A[(A.FOREST = 10)] = "FOREST"),
        (A[(A.CRIMSON_MOON = 11)] = "CRIMSON_MOON"),
        (A[(A.MIDNIGHT_BLURPLE = 12)] = "MIDNIGHT_BLURPLE"),
        (A[(A.MARS = 13)] = "MARS"),
        (A[(A.DUSK = 14)] = "DUSK"),
        (A[(A.UNDER_THE_SEA = 15)] = "UNDER_THE_SEA"),
        (A[(A.EASTER_EGG = 16)] = "EASTER_EGG"),
        (A[(A.RETRO_STORM = 17)] = "RETRO_STORM"),
        (A[(A.NEON_NIGHTS = 18)] = "NEON_NIGHTS"),
        (A[(A.SEPIA = 19)] = "SEPIA"),
        (A[(A.STRAWBERRY_LEMONADE = 20)] = "STRAWBERRY_LEMONADE"),
        (A[(A.AURORA = 21)] = "AURORA"),
        (A[(A.BLURPLE_TWILIGHT = 22)] = "BLURPLE_TWILIGHT"),
        A),
    X = (((I = {})[(I.AUTO = 0)] = "AUTO"), (I[(I.H12 = 1)] = "H12"), (I[(I.H23 = 2)] = "H23"), I),
    Q =
        (((T = {})[(T.LAUNCH_PAD_DISABLED = 0)] = "LAUNCH_PAD_DISABLED"),
        (T[(T.LAUNCH_PAD_GESTURE_FULL_SCREEN = 1)] = "LAUNCH_PAD_GESTURE_FULL_SCREEN"),
        (T[(T.LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2)] = "LAUNCH_PAD_GESTURE_RIGHT_EDGE"),
        (T[(T.LAUNCH_PAD_PULL_TAB = 3)] = "LAUNCH_PAD_PULL_TAB"),
        T),
    J =
        (((S = {})[(S.SWIPE_RIGHT_TO_LEFT_UNSET = 0)] = "SWIPE_RIGHT_TO_LEFT_UNSET"),
        (S[(S.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS = 1)] = "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS"),
        (S[(S.SWIPE_RIGHT_TO_LEFT_REPLY = 2)] = "SWIPE_RIGHT_TO_LEFT_REPLY"),
        S),
    ee =
        (((N = {})[(N.UNSET_FAVORITE_CHANNEL_TYPE = 0)] = "UNSET_FAVORITE_CHANNEL_TYPE"),
        (N[(N.REFERENCE_ORIGINAL = 1)] = "REFERENCE_ORIGINAL"),
        (N[(N.CATEGORY = 2)] = "CATEGORY"),
        N),
    et =
        (((y = {})[(y.UNSET_SAFETY_SETTINGS_PRESET = 0)] = "UNSET_SAFETY_SETTINGS_PRESET"),
        (y[(y.BALANCED = 1)] = "BALANCED"),
        (y[(y.STRICT = 2)] = "STRICT"),
        (y[(y.RELAXED = 3)] = "RELAXED"),
        (y[(y.CUSTOM = 4)] = "CUSTOM"),
        y),
    en =
        (((C = {})[(C.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (C[(C.ALL = 1)] = "ALL"),
        (C[(C.BOOKMARKS = 2)] = "BOOKMARKS"),
        (C[(C.REMINDERS = 3)] = "REMINDERS"),
        C),
    ei =
        (((v = {})[(v.VOICE = 0)] = "VOICE"),
        (v[(v.STREAM = 1)] = "STREAM"),
        (v[(v.VIDEO_BACKGROUND = 2)] = "VIDEO_BACKGROUND"),
        (v[(v.ACTIVITY = 3)] = "ACTIVITY"),
        (v[(v.IN_APP_REPORTS = 4)] = "IN_APP_REPORTS"),
        (v[(v.SEARCH_RESULTS = 8)] = "SEARCH_RESULTS"),
        v);
class er extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.PreloadedUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => M.u },
            { no: 2, name: "inbox", kind: "message", T: () => eo },
            { no: 3, name: "guilds", kind: "message", T: () => eu },
            { no: 4, name: "user_content", kind: "message", T: () => eN },
            { no: 5, name: "voice_and_video", kind: "message", T: () => eb },
            { no: 6, name: "text_and_images", kind: "message", T: () => eF },
            { no: 7, name: "notifications", kind: "message", T: () => eB },
            { no: 8, name: "privacy", kind: "message", T: () => ej },
            { no: 9, name: "debug", kind: "message", T: () => eW },
            { no: 10, name: "game_library", kind: "message", T: () => ez },
            { no: 11, name: "status", kind: "message", T: () => eq },
            { no: 12, name: "localization", kind: "message", T: () => eJ },
            { no: 13, name: "appearance", kind: "message", T: () => e3 },
            { no: 14, name: "guild_folders", kind: "message", T: () => e9 },
            { no: 15, name: "favorites", kind: "message", T: () => ti },
            { no: 16, name: "audio_context_settings", kind: "message", T: () => tu },
            { no: 17, name: "communities", kind: "message", T: () => td },
            { no: 18, name: "broadcast", kind: "message", T: () => tm },
            { no: 19, name: "clips", kind: "message", T: () => tA },
            { no: 20, name: "for_later", kind: "message", T: () => tO },
            { no: 21, name: "safety_settings", kind: "message", T: () => tC },
            { no: 22, name: "icymi_settings", kind: "message", T: () => tb },
            { no: 23, name: "applications", kind: "message", T: () => tL },
            { no: 24, name: "ads", kind: "message", T: () => tF },
            { no: 25, name: "in_app_feedback_settings", kind: "message", T: () => tW },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.versions = M.u.internalBinaryRead(e, e.uint32(), n, r.versions);
                    break;
                case 2:
                    r.inbox = eo.internalBinaryRead(e, e.uint32(), n, r.inbox);
                    break;
                case 3:
                    r.guilds = eu.internalBinaryRead(e, e.uint32(), n, r.guilds);
                    break;
                case 4:
                    r.userContent = eN.internalBinaryRead(e, e.uint32(), n, r.userContent);
                    break;
                case 5:
                    r.voiceAndVideo = eb.internalBinaryRead(e, e.uint32(), n, r.voiceAndVideo);
                    break;
                case 6:
                    r.textAndImages = eF.internalBinaryRead(e, e.uint32(), n, r.textAndImages);
                    break;
                case 7:
                    r.notifications = eB.internalBinaryRead(e, e.uint32(), n, r.notifications);
                    break;
                case 8:
                    r.privacy = ej.internalBinaryRead(e, e.uint32(), n, r.privacy);
                    break;
                case 9:
                    r.debug = eW.internalBinaryRead(e, e.uint32(), n, r.debug);
                    break;
                case 10:
                    r.gameLibrary = ez.internalBinaryRead(e, e.uint32(), n, r.gameLibrary);
                    break;
                case 11:
                    r.status = eq.internalBinaryRead(e, e.uint32(), n, r.status);
                    break;
                case 12:
                    r.localization = eJ.internalBinaryRead(e, e.uint32(), n, r.localization);
                    break;
                case 13:
                    r.appearance = e3.internalBinaryRead(e, e.uint32(), n, r.appearance);
                    break;
                case 14:
                    r.guildFolders = e9.internalBinaryRead(e, e.uint32(), n, r.guildFolders);
                    break;
                case 15:
                    r.favorites = ti.internalBinaryRead(e, e.uint32(), n, r.favorites);
                    break;
                case 16:
                    r.audioContextSettings = tu.internalBinaryRead(e, e.uint32(), n, r.audioContextSettings);
                    break;
                case 17:
                    r.communities = td.internalBinaryRead(e, e.uint32(), n, r.communities);
                    break;
                case 18:
                    r.broadcast = tm.internalBinaryRead(e, e.uint32(), n, r.broadcast);
                    break;
                case 19:
                    r.clips = tA.internalBinaryRead(e, e.uint32(), n, r.clips);
                    break;
                case 20:
                    r.forLater = tO.internalBinaryRead(e, e.uint32(), n, r.forLater);
                    break;
                case 21:
                    r.safetySettings = tC.internalBinaryRead(e, e.uint32(), n, r.safetySettings);
                    break;
                case 22:
                    r.icymiSettings = tb.internalBinaryRead(e, e.uint32(), n, r.icymiSettings);
                    break;
                case 23:
                    r.applications = tL.internalBinaryRead(e, e.uint32(), n, r.applications);
                    break;
                case 24:
                    r.ads = tF.internalBinaryRead(e, e.uint32(), n, r.ads);
                    break;
                case 25:
                    r.inAppFeedbackSettings = tW.internalBinaryRead(e, e.uint32(), n, r.inAppFeedbackSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && M.u.internalBinaryWrite(e.versions, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.inbox && eo.internalBinaryWrite(e.inbox, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.guilds && eu.internalBinaryWrite(e.guilds, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
            e.userContent && eN.internalBinaryWrite(e.userContent, t.tag(4, O.O0.LengthDelimited).fork(), n).join(),
            e.voiceAndVideo && eb.internalBinaryWrite(e.voiceAndVideo, t.tag(5, O.O0.LengthDelimited).fork(), n).join(),
            e.textAndImages && eF.internalBinaryWrite(e.textAndImages, t.tag(6, O.O0.LengthDelimited).fork(), n).join(),
            e.notifications && eB.internalBinaryWrite(e.notifications, t.tag(7, O.O0.LengthDelimited).fork(), n).join(),
            e.privacy && ej.internalBinaryWrite(e.privacy, t.tag(8, O.O0.LengthDelimited).fork(), n).join(),
            e.debug && eW.internalBinaryWrite(e.debug, t.tag(9, O.O0.LengthDelimited).fork(), n).join(),
            e.gameLibrary && ez.internalBinaryWrite(e.gameLibrary, t.tag(10, O.O0.LengthDelimited).fork(), n).join(),
            e.status && eq.internalBinaryWrite(e.status, t.tag(11, O.O0.LengthDelimited).fork(), n).join(),
            e.localization && eJ.internalBinaryWrite(e.localization, t.tag(12, O.O0.LengthDelimited).fork(), n).join(),
            e.appearance && e3.internalBinaryWrite(e.appearance, t.tag(13, O.O0.LengthDelimited).fork(), n).join(),
            e.guildFolders && e9.internalBinaryWrite(e.guildFolders, t.tag(14, O.O0.LengthDelimited).fork(), n).join(),
            e.favorites && ti.internalBinaryWrite(e.favorites, t.tag(15, O.O0.LengthDelimited).fork(), n).join(),
            e.audioContextSettings &&
                tu.internalBinaryWrite(e.audioContextSettings, t.tag(16, O.O0.LengthDelimited).fork(), n).join(),
            e.communities && td.internalBinaryWrite(e.communities, t.tag(17, O.O0.LengthDelimited).fork(), n).join(),
            e.broadcast && tm.internalBinaryWrite(e.broadcast, t.tag(18, O.O0.LengthDelimited).fork(), n).join(),
            e.clips && tA.internalBinaryWrite(e.clips, t.tag(19, O.O0.LengthDelimited).fork(), n).join(),
            e.forLater && tO.internalBinaryWrite(e.forLater, t.tag(20, O.O0.LengthDelimited).fork(), n).join(),
            e.safetySettings &&
                tC.internalBinaryWrite(e.safetySettings, t.tag(21, O.O0.LengthDelimited).fork(), n).join(),
            e.icymiSettings &&
                tb.internalBinaryWrite(e.icymiSettings, t.tag(22, O.O0.LengthDelimited).fork(), n).join(),
            e.applications && tL.internalBinaryWrite(e.applications, t.tag(23, O.O0.LengthDelimited).fork(), n).join(),
            e.ads && tF.internalBinaryWrite(e.ads, t.tag(24, O.O0.LengthDelimited).fork(), n).join(),
            e.inAppFeedbackSettings &&
                tW.internalBinaryWrite(e.inAppFeedbackSettings, t.tag(25, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let es = new er();
class ea extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.InboxSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.InboxTab", P, "INBOX_TAB_"],
            },
            { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { currentTab: 0, viewedTutorial: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.currentTab = e.int32();
                    break;
                case 2:
                    r.viewedTutorial = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, O.O0.Varint).int32(e.currentTab),
            !1 !== e.viewedTutorial && t.tag(2, O.O0.Varint).bool(e.viewedTutorial);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eo = new ea();
class el extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllGuildSettings", [
            { no: 1, name: "guilds", kind: "map", K: 6, V: { kind: "message", T: () => ef } },
        ]);
    }
    create(e) {
        let t = { guilds: {} };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.guilds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = ef.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds",
                    );
            }
        }
        e[s ?? "0"] = a ?? ef.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guilds))
            t.tag(1, O.O0.LengthDelimited).fork().tag(1, O.O0.Bit64).fixed64(i),
                t.tag(2, O.O0.LengthDelimited).fork(),
                ef.internalBinaryWrite(e.guilds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eu = new el();
class ec extends D.G {
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.dismissed = e.bool();
                    break;
                case 2:
                    r.lastDismissedVersion = e.uint32();
                    break;
                case 3:
                    r.lastDismissedAtMs = e.uint64().toString();
                    break;
                case 4:
                    r.lastDismissedObjectId = e.uint64().toString();
                    break;
                case 5:
                    r.numTimesDismissed = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.dismissed && t.tag(1, O.O0.Varint).bool(e.dismissed),
            0 !== e.lastDismissedVersion && t.tag(2, O.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(3, O.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(4, O.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(5, O.O0.Varint).uint32(e.numTimesDismissed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ed = new ec();
class e_ extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildSettings", [
            { no: 1, name: "channels", kind: "map", K: 6, V: { kind: "message", T: () => em } },
            { no: 2, name: "hub_progress", kind: "scalar", T: 13 },
            { no: 3, name: "guild_onboarding_progress", kind: "scalar", T: 13 },
            { no: 4, name: "guild_recents_dismissed_at", kind: "message", T: () => w.D },
            { no: 5, name: "dismissed_guild_content", kind: "scalar", T: 12 },
            { no: 6, name: "join_sound", kind: "message", T: () => tp },
            { no: 7, name: "mobile_redesign_channel_list_settings", kind: "message", T: () => e1 },
            { no: 8, name: "disable_raid_alert_push", kind: "scalar", T: 8 },
            { no: 9, name: "disable_raid_alert_nag", kind: "scalar", T: 8 },
            { no: 10, name: "custom_notification_sound_config", kind: "message", T: () => eA },
            { no: 11, name: "leaderboards_disabled", kind: "scalar", T: 8 },
            {
                no: 12,
                name: "guild_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => ed },
            },
            {
                no: 13,
                name: "guild_theme_source_preference",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_users.v1.GuildThemeSourcePreference",
                    z,
                    "GUILD_THEME_SOURCE_PREFERENCE_",
                ],
            },
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
            guildThemeSourcePreference: 0,
        };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.channels, e, n);
                    break;
                case 2:
                    r.hubProgress = e.uint32();
                    break;
                case 3:
                    r.guildOnboardingProgress = e.uint32();
                    break;
                case 4:
                    r.guildRecentsDismissedAt = w.D.internalBinaryRead(e, e.uint32(), n, r.guildRecentsDismissedAt);
                    break;
                case 5:
                    r.dismissedGuildContent = e.bytes();
                    break;
                case 6:
                    r.joinSound = tp.internalBinaryRead(e, e.uint32(), n, r.joinSound);
                    break;
                case 7:
                    r.mobileRedesignChannelListSettings = e1.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.mobileRedesignChannelListSettings,
                    );
                    break;
                case 8:
                    r.disableRaidAlertPush = e.bool();
                    break;
                case 9:
                    r.disableRaidAlertNag = e.bool();
                    break;
                case 10:
                    r.customNotificationSoundConfig = eA.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.customNotificationSoundConfig,
                    );
                    break;
                case 11:
                    r.leaderboardsDisabled = e.bool();
                    break;
                case 12:
                    this.binaryReadMap12(r.guildDismissibleContentStates, e, n);
                    break;
                case 13:
                    r.guildThemeSourcePreference = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = em.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels",
                    );
            }
        }
        e[s ?? "0"] = a ?? em.create();
    }
    binaryReadMap12(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.int32();
                    break;
                case 2:
                    a = ed.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states",
                    );
            }
        }
        e[s ?? 0] = a ?? ed.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.channels))
            t.tag(1, O.O0.LengthDelimited).fork().tag(1, O.O0.Bit64).fixed64(i),
                t.tag(2, O.O0.LengthDelimited).fork(),
                em.internalBinaryWrite(e.channels[i], t, n),
                t.join().join();
        for (let i of (0 !== e.hubProgress && t.tag(2, O.O0.Varint).uint32(e.hubProgress),
        0 !== e.guildOnboardingProgress && t.tag(3, O.O0.Varint).uint32(e.guildOnboardingProgress),
        e.guildRecentsDismissedAt &&
            w.D.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, O.O0.LengthDelimited).fork(), n).join(),
        e.dismissedGuildContent.length && t.tag(5, O.O0.LengthDelimited).bytes(e.dismissedGuildContent),
        e.joinSound && tp.internalBinaryWrite(e.joinSound, t.tag(6, O.O0.LengthDelimited).fork(), n).join(),
        e.mobileRedesignChannelListSettings &&
            e1
                .internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, O.O0.LengthDelimited).fork(), n)
                .join(),
        !1 !== e.disableRaidAlertPush && t.tag(8, O.O0.Varint).bool(e.disableRaidAlertPush),
        !1 !== e.disableRaidAlertNag && t.tag(9, O.O0.Varint).bool(e.disableRaidAlertNag),
        e.customNotificationSoundConfig &&
            eA.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, O.O0.LengthDelimited).fork(), n).join(),
        !1 !== e.leaderboardsDisabled && t.tag(11, O.O0.Varint).bool(e.leaderboardsDisabled),
        Object.keys(e.guildDismissibleContentStates)))
            t.tag(12, O.O0.LengthDelimited).fork().tag(1, O.O0.Varint).int32(parseInt(i)),
                t.tag(2, O.O0.LengthDelimited).fork(),
                ed.internalBinaryWrite(e.guildDismissibleContentStates[i], t, n),
                t.join().join();
        0 !== e.guildThemeSourcePreference && t.tag(13, O.O0.Varint).int32(e.guildThemeSourcePreference);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ef = new e_();
class eh extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelIconEmoji", [
            { no: 1, name: "id", kind: "message", T: () => L.ol },
            { no: 2, name: "name", kind: "message", T: () => L.hU },
            { no: 3, name: "color", kind: "message", T: () => L.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.id = L.ol.internalBinaryRead(e, e.uint32(), n, r.id);
                    break;
                case 2:
                    r.name = L.hU.internalBinaryRead(e, e.uint32(), n, r.name);
                    break;
                case 3:
                    r.color = L.ol.internalBinaryRead(e, e.uint32(), n, r.color);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.id && L.ol.internalBinaryWrite(e.id, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.name && L.hU.internalBinaryWrite(e.name, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.color && L.ol.internalBinaryWrite(e.color, t.tag(3, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ep = new eh();
class eE extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelSettings", [
            { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 },
            { no: 2, name: "icon_emoji", kind: "message", T: () => ep },
            { no: 3, name: "custom_notification_sound_config", kind: "message", T: () => eA },
        ]);
    }
    create(e) {
        let t = { collapsedInInbox: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.collapsedInInbox = e.bool();
                    break;
                case 2:
                    r.iconEmoji = ep.internalBinaryRead(e, e.uint32(), n, r.iconEmoji);
                    break;
                case 3:
                    r.customNotificationSoundConfig = eA.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.customNotificationSoundConfig,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.collapsedInInbox && t.tag(1, O.O0.Varint).bool(e.collapsedInInbox),
            e.iconEmoji && ep.internalBinaryWrite(e.iconEmoji, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.customNotificationSoundConfig &&
                eA
                    .internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, O.O0.LengthDelimited).fork(), n)
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let em = new eE();
class eg extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomNotificationSoundConfig", [
            { no: 1, name: "notification_sound_pack_id", kind: "message", T: () => L.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                r.notificationSoundPackId = L.hU.internalBinaryRead(e, e.uint32(), n, r.notificationSoundPackId);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.notificationSoundPackId &&
            L.hU.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eA = new eg();
class eI extends D.G {
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lastDismissedVersion = e.uint32();
                    break;
                case 2:
                    r.lastDismissedAtMs = e.uint64().toString();
                    break;
                case 3:
                    r.lastDismissedObjectId = e.uint64().toString();
                    break;
                case 4:
                    r.numTimesDismissed = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.lastDismissedVersion && t.tag(1, O.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(2, O.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(3, O.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(4, O.O0.Varint).uint32(e.numTimesDismissed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eT = new eI();
class eS extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.UserContentSettings", [
            { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 },
            { no: 2, name: "last_dismissed_outbound_promotion_start_date", kind: "message", T: () => L.hU },
            { no: 3, name: "premium_tier_0_modal_dismissed_at", kind: "message", T: () => w.D },
            { no: 4, name: "guild_onboarding_upsell_dismissed_at", kind: "message", T: () => w.D },
            { no: 5, name: "safety_user_sentiment_notice_dismissed_at", kind: "message", T: () => w.D },
            { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "recurring_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => eT },
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.dismissedContents = e.bytes();
                    break;
                case 2:
                    r.lastDismissedOutboundPromotionStartDate = L.hU.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.lastDismissedOutboundPromotionStartDate,
                    );
                    break;
                case 3:
                    r.premiumTier0ModalDismissedAt = w.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.premiumTier0ModalDismissedAt,
                    );
                    break;
                case 4:
                    r.guildOnboardingUpsellDismissedAt = w.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.guildOnboardingUpsellDismissedAt,
                    );
                    break;
                case 5:
                    r.safetyUserSentimentNoticeDismissedAt = w.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.safetyUserSentimentNoticeDismissedAt,
                    );
                    break;
                case 6:
                    r.lastReceivedChangelogId = e.fixed64().toString();
                    break;
                case 7:
                    this.binaryReadMap7(r.recurringDismissibleContentStates, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap7(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.int32();
                    break;
                case 2:
                    a = eT.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states",
                    );
            }
        }
        e[s ?? 0] = a ?? eT.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of (e.dismissedContents.length && t.tag(1, O.O0.LengthDelimited).bytes(e.dismissedContents),
        e.lastDismissedOutboundPromotionStartDate &&
            L.hU
                .internalBinaryWrite(
                    e.lastDismissedOutboundPromotionStartDate,
                    t.tag(2, O.O0.LengthDelimited).fork(),
                    n,
                )
                .join(),
        e.premiumTier0ModalDismissedAt &&
            w.D.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
        e.guildOnboardingUpsellDismissedAt &&
            w.D.internalBinaryWrite(
                e.guildOnboardingUpsellDismissedAt,
                t.tag(4, O.O0.LengthDelimited).fork(),
                n,
            ).join(),
        e.safetyUserSentimentNoticeDismissedAt &&
            w.D.internalBinaryWrite(
                e.safetyUserSentimentNoticeDismissedAt,
                t.tag(5, O.O0.LengthDelimited).fork(),
                n,
            ).join(),
        "0" !== e.lastReceivedChangelogId && t.tag(6, O.O0.Bit64).fixed64(e.lastReceivedChangelogId),
        Object.keys(e.recurringDismissibleContentStates)))
            t.tag(7, O.O0.LengthDelimited).fork().tag(1, O.O0.Varint).int32(parseInt(i)),
                t.tag(2, O.O0.LengthDelimited).fork(),
                eT.internalBinaryWrite(e.recurringDismissibleContentStates[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eN = new eS();
class ey extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterAsset", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "asset_hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { id: "0", assetHash: "" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.id = e.fixed64().toString();
                    break;
                case 2:
                    r.assetHash = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, O.O0.Bit64).fixed64(e.id),
            "" !== e.assetHash && t.tag(2, O.O0.LengthDelimited).string(e.assetHash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eC = new ey();
class ev extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [
            { no: 1, name: "use_blur", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { useBlur: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.useBlur = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.useBlur && t.tag(1, O.O0.Varint).bool(e.useBlur);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eO = new ev();
class eR extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [
            { no: 1, name: "blur", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => eO },
            { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 },
            { no: 3, name: "custom_asset", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => eC },
            { no: 5, name: "always_preview_video", kind: "message", T: () => L._t },
            { no: 6, name: "afk_timeout", kind: "message", T: () => L.ZQ },
            { no: 7, name: "stream_notifications_enabled", kind: "message", T: () => L._t },
            { no: 8, name: "native_phone_integration_enabled", kind: "message", T: () => L._t },
            { no: 9, name: "soundboard_settings", kind: "message", T: () => tf },
            { no: 10, name: "disable_stream_previews", kind: "message", T: () => L._t },
            { no: 11, name: "soundmoji_volume", kind: "message", T: () => L.uN },
        ]);
    }
    create(e) {
        let t = { videoBackgroundFilterDesktop: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.videoBackgroundFilterDesktop = {
                        oneofKind: "blur",
                        blur: eO.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.blur),
                    };
                    break;
                case 2:
                    r.videoBackgroundFilterDesktop = { oneofKind: "presetOption", presetOption: e.uint32() };
                    break;
                case 3:
                    r.videoBackgroundFilterDesktop = {
                        oneofKind: "customAsset",
                        customAsset: eC.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.videoBackgroundFilterDesktop.customAsset,
                        ),
                    };
                    break;
                case 5:
                    r.alwaysPreviewVideo = L._t.internalBinaryRead(e, e.uint32(), n, r.alwaysPreviewVideo);
                    break;
                case 6:
                    r.afkTimeout = L.ZQ.internalBinaryRead(e, e.uint32(), n, r.afkTimeout);
                    break;
                case 7:
                    r.streamNotificationsEnabled = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.streamNotificationsEnabled,
                    );
                    break;
                case 8:
                    r.nativePhoneIntegrationEnabled = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.nativePhoneIntegrationEnabled,
                    );
                    break;
                case 9:
                    r.soundboardSettings = tf.internalBinaryRead(e, e.uint32(), n, r.soundboardSettings);
                    break;
                case 10:
                    r.disableStreamPreviews = L._t.internalBinaryRead(e, e.uint32(), n, r.disableStreamPreviews);
                    break;
                case 11:
                    r.soundmojiVolume = L.uN.internalBinaryRead(e, e.uint32(), n, r.soundmojiVolume);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "blur" === e.videoBackgroundFilterDesktop.oneofKind &&
            eO
                .internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, O.O0.LengthDelimited).fork(), n)
                .join(),
            "presetOption" === e.videoBackgroundFilterDesktop.oneofKind &&
                t.tag(2, O.O0.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption),
            "customAsset" === e.videoBackgroundFilterDesktop.oneofKind &&
                eC
                    .internalBinaryWrite(
                        e.videoBackgroundFilterDesktop.customAsset,
                        t.tag(3, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.alwaysPreviewVideo &&
                L._t.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, O.O0.LengthDelimited).fork(), n).join(),
            e.afkTimeout && L.ZQ.internalBinaryWrite(e.afkTimeout, t.tag(6, O.O0.LengthDelimited).fork(), n).join(),
            e.streamNotificationsEnabled &&
                L._t.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, O.O0.LengthDelimited).fork(), n).join(),
            e.nativePhoneIntegrationEnabled &&
                L._t
                    .internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.soundboardSettings &&
                tf.internalBinaryWrite(e.soundboardSettings, t.tag(9, O.O0.LengthDelimited).fork(), n).join(),
            e.disableStreamPreviews &&
                L._t.internalBinaryWrite(e.disableStreamPreviews, t.tag(10, O.O0.LengthDelimited).fork(), n).join(),
            e.soundmojiVolume &&
                L.uN.internalBinaryWrite(e.soundmojiVolume, t.tag(11, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eb = new eR();
class eD extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ExplicitContentSettings", [
            {
                no: 1,
                name: "explicit_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
            {
                no: 2,
                name: "explicit_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
            {
                no: 3,
                name: "explicit_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
        ]);
    }
    create(e) {
        let t = { explicitContentGuilds: 0, explicitContentFriendDm: 0, explicitContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.explicitContentGuilds = e.int32();
                    break;
                case 2:
                    r.explicitContentFriendDm = e.int32();
                    break;
                case 3:
                    r.explicitContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.explicitContentGuilds && t.tag(1, O.O0.Varint).int32(e.explicitContentGuilds),
            0 !== e.explicitContentFriendDm && t.tag(2, O.O0.Varint).int32(e.explicitContentFriendDm),
            0 !== e.explicitContentNonFriendDm && t.tag(3, O.O0.Varint).int32(e.explicitContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eL = new eD();
class ew extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.GoreContentSettings", [
            {
                no: 1,
                name: "gore_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
            {
                no: 2,
                name: "gore_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
            {
                no: 3,
                name: "gore_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
        ]);
    }
    create(e) {
        let t = { goreContentGuilds: 0, goreContentFriendDm: 0, goreContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.goreContentGuilds = e.int32();
                    break;
                case 2:
                    r.goreContentFriendDm = e.int32();
                    break;
                case 3:
                    r.goreContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.goreContentGuilds && t.tag(1, O.O0.Varint).int32(e.goreContentGuilds),
            0 !== e.goreContentFriendDm && t.tag(2, O.O0.Varint).int32(e.goreContentFriendDm),
            0 !== e.goreContentNonFriendDm && t.tag(3, O.O0.Varint).int32(e.goreContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eM = new ew();
class eP extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.SelfHarmContentSettings", [
            {
                no: 1,
                name: "self_harm_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
            {
                no: 2,
                name: "self_harm_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
            {
                no: 3,
                name: "self_harm_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", U],
            },
        ]);
    }
    create(e) {
        let t = { selfHarmContentGuilds: 0, selfHarmContentFriendDm: 0, selfHarmContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.selfHarmContentGuilds = e.int32();
                    break;
                case 2:
                    r.selfHarmContentFriendDm = e.int32();
                    break;
                case 3:
                    r.selfHarmContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.selfHarmContentGuilds && t.tag(1, O.O0.Varint).int32(e.selfHarmContentGuilds),
            0 !== e.selfHarmContentFriendDm && t.tag(2, O.O0.Varint).int32(e.selfHarmContentFriendDm),
            0 !== e.selfHarmContentNonFriendDm && t.tag(3, O.O0.Varint).int32(e.selfHarmContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ex = new eP();
class eU extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.KeywordFilterSettings", [
            { no: 1, name: "profanity", kind: "message", T: () => L._t },
            { no: 2, name: "sexual_content", kind: "message", T: () => L._t },
            { no: 3, name: "slurs", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.profanity = L._t.internalBinaryRead(e, e.uint32(), n, r.profanity);
                    break;
                case 2:
                    r.sexualContent = L._t.internalBinaryRead(e, e.uint32(), n, r.sexualContent);
                    break;
                case 3:
                    r.slurs = L._t.internalBinaryRead(e, e.uint32(), n, r.slurs);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.profanity && L._t.internalBinaryWrite(e.profanity, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.sexualContent &&
                L._t.internalBinaryWrite(e.sexualContent, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.slurs && L._t.internalBinaryWrite(e.slurs, t.tag(3, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ek = new eU();
class eG extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.TextAndImagesSettings", [
            { no: 1, name: "diversity_surrogate", kind: "message", T: () => L.hU },
            { no: 2, name: "use_rich_chat_input", kind: "message", T: () => L._t },
            { no: 3, name: "use_thread_sidebar", kind: "message", T: () => L._t },
            { no: 4, name: "render_spoilers", kind: "message", T: () => L.hU },
            { no: 5, name: "emoji_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 6, name: "sticker_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 7, name: "view_image_descriptions", kind: "message", T: () => L._t },
            { no: 8, name: "show_command_suggestions", kind: "message", T: () => L._t },
            { no: 9, name: "inline_attachment_media", kind: "message", T: () => L._t },
            { no: 10, name: "inline_embed_media", kind: "message", T: () => L._t },
            { no: 11, name: "gif_auto_play", kind: "message", T: () => L._t },
            { no: 12, name: "render_embeds", kind: "message", T: () => L._t },
            { no: 13, name: "render_reactions", kind: "message", T: () => L._t },
            { no: 14, name: "animate_emoji", kind: "message", T: () => L._t },
            { no: 15, name: "animate_stickers", kind: "message", T: () => L.ZQ },
            { no: 16, name: "enable_tts_command", kind: "message", T: () => L._t },
            { no: 17, name: "message_display_compact", kind: "message", T: () => L._t },
            { no: 19, name: "explicit_content_filter", kind: "message", T: () => L.ZQ },
            { no: 20, name: "view_nsfw_guilds", kind: "message", T: () => L._t },
            { no: 21, name: "convert_emoticons", kind: "message", T: () => L._t },
            { no: 22, name: "expression_suggestions_enabled", kind: "message", T: () => L._t },
            { no: 23, name: "view_nsfw_commands", kind: "message", T: () => L._t },
            { no: 24, name: "use_legacy_chat_input", kind: "message", T: () => L._t },
            { no: 25, name: "soundboard_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 26, name: "dm_spam_filter", kind: "message", T: () => L.ZQ },
            {
                no: 27,
                name: "dm_spam_filter_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", k],
            },
            { no: 28, name: "include_stickers_in_autocomplete", kind: "message", T: () => L._t },
            { no: 29, name: "explicit_content_settings", kind: "message", T: () => eL },
            { no: 30, name: "keyword_filter_settings", kind: "message", T: () => ek },
            { no: 31, name: "include_soundmoji_in_autocomplete", kind: "message", T: () => L._t },
            { no: 32, name: "gore_content_settings", kind: "message", T: () => eM },
            { no: 33, name: "default_reaction_emoji", kind: "message", T: () => tj },
            { no: 34, name: "show_mention_suggestions", kind: "message", T: () => L._t },
            { no: 35, name: "self_harm_content_settings", kind: "message", T: () => ex },
            { no: 36, name: "is_cross_dm_search_enabled", kind: "message", T: () => L._t },
            {
                no: 37,
                name: "search_provider",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SearchProvider", B, "SEARCH_PROVIDER_"],
            },
            { no: 38, name: "custom_search_url", kind: "message", T: () => L.hU },
        ]);
    }
    create(e) {
        let t = {
            emojiPickerCollapsedSections: [],
            stickerPickerCollapsedSections: [],
            soundboardPickerCollapsedSections: [],
            dmSpamFilterV2: 0,
            searchProvider: 0,
        };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.diversitySurrogate = L.hU.internalBinaryRead(e, e.uint32(), n, r.diversitySurrogate);
                    break;
                case 2:
                    r.useRichChatInput = L._t.internalBinaryRead(e, e.uint32(), n, r.useRichChatInput);
                    break;
                case 3:
                    r.useThreadSidebar = L._t.internalBinaryRead(e, e.uint32(), n, r.useThreadSidebar);
                    break;
                case 4:
                    r.renderSpoilers = L.hU.internalBinaryRead(e, e.uint32(), n, r.renderSpoilers);
                    break;
                case 5:
                    r.emojiPickerCollapsedSections.push(e.string());
                    break;
                case 6:
                    r.stickerPickerCollapsedSections.push(e.string());
                    break;
                case 7:
                    r.viewImageDescriptions = L._t.internalBinaryRead(e, e.uint32(), n, r.viewImageDescriptions);
                    break;
                case 8:
                    r.showCommandSuggestions = L._t.internalBinaryRead(e, e.uint32(), n, r.showCommandSuggestions);
                    break;
                case 9:
                    r.inlineAttachmentMedia = L._t.internalBinaryRead(e, e.uint32(), n, r.inlineAttachmentMedia);
                    break;
                case 10:
                    r.inlineEmbedMedia = L._t.internalBinaryRead(e, e.uint32(), n, r.inlineEmbedMedia);
                    break;
                case 11:
                    r.gifAutoPlay = L._t.internalBinaryRead(e, e.uint32(), n, r.gifAutoPlay);
                    break;
                case 12:
                    r.renderEmbeds = L._t.internalBinaryRead(e, e.uint32(), n, r.renderEmbeds);
                    break;
                case 13:
                    r.renderReactions = L._t.internalBinaryRead(e, e.uint32(), n, r.renderReactions);
                    break;
                case 14:
                    r.animateEmoji = L._t.internalBinaryRead(e, e.uint32(), n, r.animateEmoji);
                    break;
                case 15:
                    r.animateStickers = L.ZQ.internalBinaryRead(e, e.uint32(), n, r.animateStickers);
                    break;
                case 16:
                    r.enableTtsCommand = L._t.internalBinaryRead(e, e.uint32(), n, r.enableTtsCommand);
                    break;
                case 17:
                    r.messageDisplayCompact = L._t.internalBinaryRead(e, e.uint32(), n, r.messageDisplayCompact);
                    break;
                case 19:
                    r.explicitContentFilter = L.ZQ.internalBinaryRead(e, e.uint32(), n, r.explicitContentFilter);
                    break;
                case 20:
                    r.viewNsfwGuilds = L._t.internalBinaryRead(e, e.uint32(), n, r.viewNsfwGuilds);
                    break;
                case 21:
                    r.convertEmoticons = L._t.internalBinaryRead(e, e.uint32(), n, r.convertEmoticons);
                    break;
                case 22:
                    r.expressionSuggestionsEnabled = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.expressionSuggestionsEnabled,
                    );
                    break;
                case 23:
                    r.viewNsfwCommands = L._t.internalBinaryRead(e, e.uint32(), n, r.viewNsfwCommands);
                    break;
                case 24:
                    r.useLegacyChatInput = L._t.internalBinaryRead(e, e.uint32(), n, r.useLegacyChatInput);
                    break;
                case 25:
                    r.soundboardPickerCollapsedSections.push(e.string());
                    break;
                case 26:
                    r.dmSpamFilter = L.ZQ.internalBinaryRead(e, e.uint32(), n, r.dmSpamFilter);
                    break;
                case 27:
                    r.dmSpamFilterV2 = e.int32();
                    break;
                case 28:
                    r.includeStickersInAutocomplete = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.includeStickersInAutocomplete,
                    );
                    break;
                case 29:
                    r.explicitContentSettings = eL.internalBinaryRead(e, e.uint32(), n, r.explicitContentSettings);
                    break;
                case 30:
                    r.keywordFilterSettings = ek.internalBinaryRead(e, e.uint32(), n, r.keywordFilterSettings);
                    break;
                case 31:
                    r.includeSoundmojiInAutocomplete = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.includeSoundmojiInAutocomplete,
                    );
                    break;
                case 32:
                    r.goreContentSettings = eM.internalBinaryRead(e, e.uint32(), n, r.goreContentSettings);
                    break;
                case 33:
                    r.defaultReactionEmoji = tj.internalBinaryRead(e, e.uint32(), n, r.defaultReactionEmoji);
                    break;
                case 34:
                    r.showMentionSuggestions = L._t.internalBinaryRead(e, e.uint32(), n, r.showMentionSuggestions);
                    break;
                case 35:
                    r.selfHarmContentSettings = ex.internalBinaryRead(e, e.uint32(), n, r.selfHarmContentSettings);
                    break;
                case 36:
                    r.isCrossDmSearchEnabled = L._t.internalBinaryRead(e, e.uint32(), n, r.isCrossDmSearchEnabled);
                    break;
                case 37:
                    r.searchProvider = e.int32();
                    break;
                case 38:
                    r.customSearchUrl = L.hU.internalBinaryRead(e, e.uint32(), n, r.customSearchUrl);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.diversitySurrogate &&
            L.hU.internalBinaryWrite(e.diversitySurrogate, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.useRichChatInput &&
                L._t.internalBinaryWrite(e.useRichChatInput, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.useThreadSidebar &&
                L._t.internalBinaryWrite(e.useThreadSidebar, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
            e.renderSpoilers &&
                L.hU.internalBinaryWrite(e.renderSpoilers, t.tag(4, O.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++)
            t.tag(5, O.O0.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
        for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++)
            t.tag(6, O.O0.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
        e.viewImageDescriptions &&
            L._t.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, O.O0.LengthDelimited).fork(), n).join(),
            e.showCommandSuggestions &&
                L._t.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, O.O0.LengthDelimited).fork(), n).join(),
            e.inlineAttachmentMedia &&
                L._t.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, O.O0.LengthDelimited).fork(), n).join(),
            e.inlineEmbedMedia &&
                L._t.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, O.O0.LengthDelimited).fork(), n).join(),
            e.gifAutoPlay && L._t.internalBinaryWrite(e.gifAutoPlay, t.tag(11, O.O0.LengthDelimited).fork(), n).join(),
            e.renderEmbeds &&
                L._t.internalBinaryWrite(e.renderEmbeds, t.tag(12, O.O0.LengthDelimited).fork(), n).join(),
            e.renderReactions &&
                L._t.internalBinaryWrite(e.renderReactions, t.tag(13, O.O0.LengthDelimited).fork(), n).join(),
            e.animateEmoji &&
                L._t.internalBinaryWrite(e.animateEmoji, t.tag(14, O.O0.LengthDelimited).fork(), n).join(),
            e.animateStickers &&
                L.ZQ.internalBinaryWrite(e.animateStickers, t.tag(15, O.O0.LengthDelimited).fork(), n).join(),
            e.enableTtsCommand &&
                L._t.internalBinaryWrite(e.enableTtsCommand, t.tag(16, O.O0.LengthDelimited).fork(), n).join(),
            e.messageDisplayCompact &&
                L._t.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, O.O0.LengthDelimited).fork(), n).join(),
            e.explicitContentFilter &&
                L.ZQ.internalBinaryWrite(e.explicitContentFilter, t.tag(19, O.O0.LengthDelimited).fork(), n).join(),
            e.viewNsfwGuilds &&
                L._t.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, O.O0.LengthDelimited).fork(), n).join(),
            e.convertEmoticons &&
                L._t.internalBinaryWrite(e.convertEmoticons, t.tag(21, O.O0.LengthDelimited).fork(), n).join(),
            e.expressionSuggestionsEnabled &&
                L._t
                    .internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.viewNsfwCommands &&
                L._t.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, O.O0.LengthDelimited).fork(), n).join(),
            e.useLegacyChatInput &&
                L._t.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, O.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++)
            t.tag(25, O.O0.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
        e.dmSpamFilter && L.ZQ.internalBinaryWrite(e.dmSpamFilter, t.tag(26, O.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dmSpamFilterV2 && t.tag(27, O.O0.Varint).int32(e.dmSpamFilterV2),
            e.includeStickersInAutocomplete &&
                L._t
                    .internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.explicitContentSettings &&
                eL.internalBinaryWrite(e.explicitContentSettings, t.tag(29, O.O0.LengthDelimited).fork(), n).join(),
            e.keywordFilterSettings &&
                ek.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, O.O0.LengthDelimited).fork(), n).join(),
            e.includeSoundmojiInAutocomplete &&
                L._t
                    .internalBinaryWrite(e.includeSoundmojiInAutocomplete, t.tag(31, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.goreContentSettings &&
                eM.internalBinaryWrite(e.goreContentSettings, t.tag(32, O.O0.LengthDelimited).fork(), n).join(),
            e.defaultReactionEmoji &&
                tj.internalBinaryWrite(e.defaultReactionEmoji, t.tag(33, O.O0.LengthDelimited).fork(), n).join(),
            e.showMentionSuggestions &&
                L._t.internalBinaryWrite(e.showMentionSuggestions, t.tag(34, O.O0.LengthDelimited).fork(), n).join(),
            e.selfHarmContentSettings &&
                ex.internalBinaryWrite(e.selfHarmContentSettings, t.tag(35, O.O0.LengthDelimited).fork(), n).join(),
            e.isCrossDmSearchEnabled &&
                L._t.internalBinaryWrite(e.isCrossDmSearchEnabled, t.tag(36, O.O0.LengthDelimited).fork(), n).join(),
            0 !== e.searchProvider && t.tag(37, O.O0.Varint).int32(e.searchProvider),
            e.customSearchUrl &&
                L.hU.internalBinaryWrite(e.customSearchUrl, t.tag(38, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eF = new eG();
class eV extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.NotificationSettings", [
            { no: 1, name: "show_in_app_notifications", kind: "message", T: () => L._t },
            { no: 2, name: "notify_friends_on_go_live", kind: "message", T: () => L._t },
            { no: 3, name: "notification_center_acked_before_id", kind: "scalar", T: 6 },
            { no: 4, name: "enable_burst_reaction_notifications", kind: "message", T: () => L._t },
            { no: 5, name: "quiet_mode", kind: "message", T: () => L._t },
            { no: 6, name: "focus_mode_expires_at_ms", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "reaction_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ReactionNotificationType", G],
            },
            {
                no: 8,
                name: "game_activity_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GameActivityNotificationType", F],
            },
            {
                no: 9,
                name: "custom_status_push_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.CustomStatusPushNotificationType", V],
            },
            { no: 10, name: "game_activity_exclude_steam_notifications", kind: "message", T: () => L._t },
            { no: 11, name: "enable_voice_activity_notifications", kind: "message", T: () => L._t },
            { no: 12, name: "enable_friend_online_notifications", kind: "message", T: () => L._t },
            { no: 13, name: "enable_user_resurrection_notifications", kind: "message", T: () => L._t },
            { no: 14, name: "enable_friend_anniversary_notifications", kind: "message", T: () => L._t },
            { no: 15, name: "enable_game_update_notifications", kind: "message", T: () => L._t },
            { no: 16, name: "enable_profile_updates_notifications", kind: "message", T: () => L._t },
            { no: 17, name: "enable_server_trending_notifications", kind: "message", T: () => L._t },
            { no: 18, name: "enable_dm_reply_nudge_reminders", kind: "message", T: () => L._t },
            { no: 19, name: "enable_summary_reminder_notifications", kind: "message", T: () => L._t },
            { no: 20, name: "enable_gdm_all_reaction_notifications", kind: "message", T: () => L._t },
            { no: 21, name: "enable_friend_gaming_activity_notifications", kind: "message", T: () => L._t },
            { no: 22, name: "enable_upcoming_server_event_notifications", kind: "message", T: () => L._t },
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.showInAppNotifications = L._t.internalBinaryRead(e, e.uint32(), n, r.showInAppNotifications);
                    break;
                case 2:
                    r.notifyFriendsOnGoLive = L._t.internalBinaryRead(e, e.uint32(), n, r.notifyFriendsOnGoLive);
                    break;
                case 3:
                    r.notificationCenterAckedBeforeId = e.fixed64().toString();
                    break;
                case 4:
                    r.enableBurstReactionNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableBurstReactionNotifications,
                    );
                    break;
                case 5:
                    r.quietMode = L._t.internalBinaryRead(e, e.uint32(), n, r.quietMode);
                    break;
                case 6:
                    r.focusModeExpiresAtMs = e.fixed64().toString();
                    break;
                case 7:
                    r.reactionNotifications = e.int32();
                    break;
                case 8:
                    r.gameActivityNotifications = e.int32();
                    break;
                case 9:
                    r.customStatusPushNotifications = e.int32();
                    break;
                case 10:
                    r.gameActivityExcludeSteamNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.gameActivityExcludeSteamNotifications,
                    );
                    break;
                case 11:
                    r.enableVoiceActivityNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableVoiceActivityNotifications,
                    );
                    break;
                case 12:
                    r.enableFriendOnlineNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableFriendOnlineNotifications,
                    );
                    break;
                case 13:
                    r.enableUserResurrectionNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableUserResurrectionNotifications,
                    );
                    break;
                case 14:
                    r.enableFriendAnniversaryNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableFriendAnniversaryNotifications,
                    );
                    break;
                case 15:
                    r.enableGameUpdateNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableGameUpdateNotifications,
                    );
                    break;
                case 16:
                    r.enableProfileUpdatesNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableProfileUpdatesNotifications,
                    );
                    break;
                case 17:
                    r.enableServerTrendingNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableServerTrendingNotifications,
                    );
                    break;
                case 18:
                    r.enableDmReplyNudgeReminders = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableDmReplyNudgeReminders,
                    );
                    break;
                case 19:
                    r.enableSummaryReminderNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableSummaryReminderNotifications,
                    );
                    break;
                case 20:
                    r.enableGdmAllReactionNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableGdmAllReactionNotifications,
                    );
                    break;
                case 21:
                    r.enableFriendGamingActivityNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableFriendGamingActivityNotifications,
                    );
                    break;
                case 22:
                    r.enableUpcomingServerEventNotifications = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableUpcomingServerEventNotifications,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.showInAppNotifications &&
            L._t.internalBinaryWrite(e.showInAppNotifications, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.notifyFriendsOnGoLive &&
                L._t.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.notificationCenterAckedBeforeId &&
                t.tag(3, O.O0.Bit64).fixed64(e.notificationCenterAckedBeforeId),
            e.enableBurstReactionNotifications &&
                L._t
                    .internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.quietMode && L._t.internalBinaryWrite(e.quietMode, t.tag(5, O.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.focusModeExpiresAtMs && t.tag(6, O.O0.Bit64).fixed64(e.focusModeExpiresAtMs),
            0 !== e.reactionNotifications && t.tag(7, O.O0.Varint).int32(e.reactionNotifications),
            0 !== e.gameActivityNotifications && t.tag(8, O.O0.Varint).int32(e.gameActivityNotifications),
            0 !== e.customStatusPushNotifications && t.tag(9, O.O0.Varint).int32(e.customStatusPushNotifications),
            e.gameActivityExcludeSteamNotifications &&
                L._t
                    .internalBinaryWrite(
                        e.gameActivityExcludeSteamNotifications,
                        t.tag(10, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableVoiceActivityNotifications &&
                L._t
                    .internalBinaryWrite(e.enableVoiceActivityNotifications, t.tag(11, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendOnlineNotifications &&
                L._t
                    .internalBinaryWrite(e.enableFriendOnlineNotifications, t.tag(12, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableUserResurrectionNotifications &&
                L._t
                    .internalBinaryWrite(
                        e.enableUserResurrectionNotifications,
                        t.tag(13, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableFriendAnniversaryNotifications &&
                L._t
                    .internalBinaryWrite(
                        e.enableFriendAnniversaryNotifications,
                        t.tag(14, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGameUpdateNotifications &&
                L._t
                    .internalBinaryWrite(e.enableGameUpdateNotifications, t.tag(15, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableProfileUpdatesNotifications &&
                L._t
                    .internalBinaryWrite(e.enableProfileUpdatesNotifications, t.tag(16, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableServerTrendingNotifications &&
                L._t
                    .internalBinaryWrite(e.enableServerTrendingNotifications, t.tag(17, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableDmReplyNudgeReminders &&
                L._t
                    .internalBinaryWrite(e.enableDmReplyNudgeReminders, t.tag(18, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableSummaryReminderNotifications &&
                L._t
                    .internalBinaryWrite(
                        e.enableSummaryReminderNotifications,
                        t.tag(19, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGdmAllReactionNotifications &&
                L._t
                    .internalBinaryWrite(e.enableGdmAllReactionNotifications, t.tag(20, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendGamingActivityNotifications &&
                L._t
                    .internalBinaryWrite(
                        e.enableFriendGamingActivityNotifications,
                        t.tag(21, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableUpcomingServerEventNotifications &&
                L._t
                    .internalBinaryWrite(
                        e.enableUpcomingServerEventNotifications,
                        t.tag(22, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eB = new eV();
class eH extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.PrivacySettings", [
            { no: 1, name: "allow_activity_party_privacy_friends", kind: "message", T: () => L._t },
            { no: 2, name: "allow_activity_party_privacy_voice_channel", kind: "message", T: () => L._t },
            { no: 3, name: "restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "default_guilds_restricted", kind: "scalar", T: 8 },
            { no: 7, name: "allow_accessibility_detection", kind: "scalar", T: 8 },
            { no: 8, name: "detect_platform_accounts", kind: "message", T: () => L._t },
            { no: 9, name: "passwordless", kind: "message", T: () => L._t },
            { no: 10, name: "contact_sync_enabled", kind: "message", T: () => L._t },
            { no: 11, name: "friend_source_flags", kind: "message", T: () => L.ZQ },
            { no: 12, name: "friend_discovery_flags", kind: "message", T: () => L.ZQ },
            { no: 13, name: "activity_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            {
                no: 14,
                name: "default_guilds_activity_restricted",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", H],
            },
            { no: 15, name: "activity_joining_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 16, name: "message_request_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 17, name: "default_message_request_restricted", kind: "message", T: () => L._t },
            { no: 18, name: "drops_opted_out", kind: "message", T: () => L._t },
            { no: 19, name: "non_spam_retraining_opt_in", kind: "message", T: () => L._t },
            { no: 20, name: "family_center_enabled", kind: "message", T: () => L._t },
            { no: 21, name: "family_center_enabled_v2", kind: "message", T: () => L._t },
            { no: 22, name: "hide_legacy_username", kind: "message", T: () => L._t },
            { no: 23, name: "inappropriate_conversation_warnings", kind: "message", T: () => L._t },
            { no: 24, name: "recent_games_enabled", kind: "message", T: () => L._t },
            {
                no: 25,
                name: "guilds_leaderboard_opt_out_default",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", Y],
            },
            { no: 26, name: "allow_game_friend_dms_in_discord", kind: "message", T: () => L._t },
            { no: 27, name: "default_guilds_restricted_v2", kind: "message", T: () => L._t },
            {
                no: 28,
                name: "slayer_sdk_receive_dms_in_game",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SlayerSDKReceiveInGameDMs", W],
            },
            {
                no: 29,
                name: "default_guilds_activity_restricted_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2", j],
            },
            {
                no: 30,
                name: "quests_3p_data_opted_out",
                kind: "message",
                jsonName: "quests3pDataOptedOut",
                T: () => L._t,
            },
            { no: 31, name: "show_local_time", kind: "message", T: () => L._t },
            {
                no: 32,
                name: "profile_visibility",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ProfileVisibility", K, "PROFILE_VISIBILITY_"],
            },
            { no: 33, name: "hide_friend_request_notes", kind: "message", T: () => L._t },
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.allowActivityPartyPrivacyFriends = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.allowActivityPartyPrivacyFriends,
                    );
                    break;
                case 2:
                    r.allowActivityPartyPrivacyVoiceChannel = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.allowActivityPartyPrivacyVoiceChannel,
                    );
                    break;
                case 3:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.restrictedGuildIds.push(e.fixed64().toString());
                    else r.restrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 4:
                    r.defaultGuildsRestricted = e.bool();
                    break;
                case 7:
                    r.allowAccessibilityDetection = e.bool();
                    break;
                case 8:
                    r.detectPlatformAccounts = L._t.internalBinaryRead(e, e.uint32(), n, r.detectPlatformAccounts);
                    break;
                case 9:
                    r.passwordless = L._t.internalBinaryRead(e, e.uint32(), n, r.passwordless);
                    break;
                case 10:
                    r.contactSyncEnabled = L._t.internalBinaryRead(e, e.uint32(), n, r.contactSyncEnabled);
                    break;
                case 11:
                    r.friendSourceFlags = L.ZQ.internalBinaryRead(e, e.uint32(), n, r.friendSourceFlags);
                    break;
                case 12:
                    r.friendDiscoveryFlags = L.ZQ.internalBinaryRead(e, e.uint32(), n, r.friendDiscoveryFlags);
                    break;
                case 13:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            r.activityRestrictedGuildIds.push(e.fixed64().toString());
                    else r.activityRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 14:
                    r.defaultGuildsActivityRestricted = e.int32();
                    break;
                case 15:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    else r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 16:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    else r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 17:
                    r.defaultMessageRequestRestricted = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.defaultMessageRequestRestricted,
                    );
                    break;
                case 18:
                    r.dropsOptedOut = L._t.internalBinaryRead(e, e.uint32(), n, r.dropsOptedOut);
                    break;
                case 19:
                    r.nonSpamRetrainingOptIn = L._t.internalBinaryRead(e, e.uint32(), n, r.nonSpamRetrainingOptIn);
                    break;
                case 20:
                    r.familyCenterEnabled = L._t.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabled);
                    break;
                case 21:
                    r.familyCenterEnabledV2 = L._t.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabledV2);
                    break;
                case 22:
                    r.hideLegacyUsername = L._t.internalBinaryRead(e, e.uint32(), n, r.hideLegacyUsername);
                    break;
                case 23:
                    r.inappropriateConversationWarnings = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.inappropriateConversationWarnings,
                    );
                    break;
                case 24:
                    r.recentGamesEnabled = L._t.internalBinaryRead(e, e.uint32(), n, r.recentGamesEnabled);
                    break;
                case 25:
                    r.guildsLeaderboardOptOutDefault = e.int32();
                    break;
                case 26:
                    r.allowGameFriendDmsInDiscord = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.allowGameFriendDmsInDiscord,
                    );
                    break;
                case 27:
                    r.defaultGuildsRestrictedV2 = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.defaultGuildsRestrictedV2,
                    );
                    break;
                case 28:
                    r.slayerSdkReceiveDmsInGame = e.int32();
                    break;
                case 29:
                    r.defaultGuildsActivityRestrictedV2 = e.int32();
                    break;
                case 30:
                    r.quests3PDataOptedOut = L._t.internalBinaryRead(e, e.uint32(), n, r.quests3PDataOptedOut);
                    break;
                case 31:
                    r.showLocalTime = L._t.internalBinaryRead(e, e.uint32(), n, r.showLocalTime);
                    break;
                case 32:
                    r.profileVisibility = e.int32();
                    break;
                case 33:
                    r.hideFriendRequestNotes = L._t.internalBinaryRead(e, e.uint32(), n, r.hideFriendRequestNotes);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowActivityPartyPrivacyFriends &&
                L._t
                    .internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.allowActivityPartyPrivacyVoiceChannel &&
                L._t
                    .internalBinaryWrite(
                        e.allowActivityPartyPrivacyVoiceChannel,
                        t.tag(2, O.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.restrictedGuildIds.length)
        ) {
            t.tag(3, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
            t.join();
        }
        if (
            (!1 !== e.defaultGuildsRestricted && t.tag(4, O.O0.Varint).bool(e.defaultGuildsRestricted),
            !1 !== e.allowAccessibilityDetection && t.tag(7, O.O0.Varint).bool(e.allowAccessibilityDetection),
            e.detectPlatformAccounts &&
                L._t.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, O.O0.LengthDelimited).fork(), n).join(),
            e.passwordless && L._t.internalBinaryWrite(e.passwordless, t.tag(9, O.O0.LengthDelimited).fork(), n).join(),
            e.contactSyncEnabled &&
                L._t.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, O.O0.LengthDelimited).fork(), n).join(),
            e.friendSourceFlags &&
                L.ZQ.internalBinaryWrite(e.friendSourceFlags, t.tag(11, O.O0.LengthDelimited).fork(), n).join(),
            e.friendDiscoveryFlags &&
                L.ZQ.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, O.O0.LengthDelimited).fork(), n).join(),
            e.activityRestrictedGuildIds.length)
        ) {
            t.tag(13, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
            t.join();
        }
        if (
            (0 !== e.defaultGuildsActivityRestricted && t.tag(14, O.O0.Varint).int32(e.defaultGuildsActivityRestricted),
            e.activityJoiningRestrictedGuildIds.length)
        ) {
            t.tag(15, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++)
                t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
            t.join();
        }
        if (e.messageRequestRestrictedGuildIds.length) {
            t.tag(16, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++)
                t.fixed64(e.messageRequestRestrictedGuildIds[n]);
            t.join();
        }
        e.defaultMessageRequestRestricted &&
            L._t
                .internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, O.O0.LengthDelimited).fork(), n)
                .join(),
            e.dropsOptedOut &&
                L._t.internalBinaryWrite(e.dropsOptedOut, t.tag(18, O.O0.LengthDelimited).fork(), n).join(),
            e.nonSpamRetrainingOptIn &&
                L._t.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, O.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabled &&
                L._t.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, O.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabledV2 &&
                L._t.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, O.O0.LengthDelimited).fork(), n).join(),
            e.hideLegacyUsername &&
                L._t.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, O.O0.LengthDelimited).fork(), n).join(),
            e.inappropriateConversationWarnings &&
                L._t
                    .internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.recentGamesEnabled &&
                L._t.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, O.O0.LengthDelimited).fork(), n).join(),
            0 !== e.guildsLeaderboardOptOutDefault && t.tag(25, O.O0.Varint).int32(e.guildsLeaderboardOptOutDefault),
            e.allowGameFriendDmsInDiscord &&
                L._t
                    .internalBinaryWrite(e.allowGameFriendDmsInDiscord, t.tag(26, O.O0.LengthDelimited).fork(), n)
                    .join(),
            e.defaultGuildsRestrictedV2 &&
                L._t.internalBinaryWrite(e.defaultGuildsRestrictedV2, t.tag(27, O.O0.LengthDelimited).fork(), n).join(),
            0 !== e.slayerSdkReceiveDmsInGame && t.tag(28, O.O0.Varint).int32(e.slayerSdkReceiveDmsInGame),
            0 !== e.defaultGuildsActivityRestrictedV2 &&
                t.tag(29, O.O0.Varint).int32(e.defaultGuildsActivityRestrictedV2),
            e.quests3PDataOptedOut &&
                L._t.internalBinaryWrite(e.quests3PDataOptedOut, t.tag(30, O.O0.LengthDelimited).fork(), n).join(),
            e.showLocalTime &&
                L._t.internalBinaryWrite(e.showLocalTime, t.tag(31, O.O0.LengthDelimited).fork(), n).join(),
            0 !== e.profileVisibility && t.tag(32, O.O0.Varint).int32(e.profileVisibility),
            e.hideFriendRequestNotes &&
                L._t.internalBinaryWrite(e.hideFriendRequestNotes, t.tag(33, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ej = new eH();
class eY extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.DebugSettings", [
            { no: 1, name: "rtc_panel_show_voice_states", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                r.rtcPanelShowVoiceStates = L._t.internalBinaryRead(e, e.uint32(), n, r.rtcPanelShowVoiceStates);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.rtcPanelShowVoiceStates &&
            L._t.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eW = new eY();
class eK extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.GameLibrarySettings", [
            { no: 1, name: "install_shortcut_desktop", kind: "message", T: () => L._t },
            { no: 2, name: "install_shortcut_start_menu", kind: "message", T: () => L._t },
            { no: 3, name: "disable_games_tab", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.installShortcutDesktop = L._t.internalBinaryRead(e, e.uint32(), n, r.installShortcutDesktop);
                    break;
                case 2:
                    r.installShortcutStartMenu = L._t.internalBinaryRead(e, e.uint32(), n, r.installShortcutStartMenu);
                    break;
                case 3:
                    r.disableGamesTab = L._t.internalBinaryRead(e, e.uint32(), n, r.disableGamesTab);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.installShortcutDesktop &&
            L._t.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.installShortcutStartMenu &&
                L._t.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.disableGamesTab &&
                L._t.internalBinaryWrite(e.disableGamesTab, t.tag(3, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ez = new eK();
class e$ extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.StatusSettings", [
            { no: 1, name: "status", kind: "message", T: () => L.hU },
            { no: 2, name: "custom_status", kind: "message", T: () => eX },
            { no: 3, name: "show_current_game", kind: "message", T: () => L._t },
            { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "status_created_at_ms", kind: "message", T: () => L.ol },
        ]);
    }
    create(e) {
        let t = { statusExpiresAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.status = L.hU.internalBinaryRead(e, e.uint32(), n, r.status);
                    break;
                case 2:
                    r.customStatus = eX.internalBinaryRead(e, e.uint32(), n, r.customStatus);
                    break;
                case 3:
                    r.showCurrentGame = L._t.internalBinaryRead(e, e.uint32(), n, r.showCurrentGame);
                    break;
                case 4:
                    r.statusExpiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    r.statusCreatedAtMs = L.ol.internalBinaryRead(e, e.uint32(), n, r.statusCreatedAtMs);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.status && L.hU.internalBinaryWrite(e.status, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.customStatus && eX.internalBinaryWrite(e.customStatus, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.showCurrentGame &&
                L._t.internalBinaryWrite(e.showCurrentGame, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.statusExpiresAtMs && t.tag(4, O.O0.Bit64).fixed64(e.statusExpiresAtMs),
            e.statusCreatedAtMs &&
                L.ol.internalBinaryWrite(e.statusCreatedAtMs, t.tag(5, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eq = new e$();
class eZ extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomStatus", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "emoji_id", kind: "scalar", T: 6 },
            { no: 3, name: "emoji_name", kind: "scalar", T: 9 },
            { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "created_at_ms", kind: "scalar", T: 6 },
            { no: 6, name: "label", kind: "message", T: () => L.hU },
        ]);
    }
    create(e) {
        let t = { text: "", emojiId: "0", emojiName: "", expiresAtMs: "0", createdAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.emojiId = e.fixed64().toString();
                    break;
                case 3:
                    r.emojiName = e.string();
                    break;
                case 4:
                    r.expiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    r.createdAtMs = e.fixed64().toString();
                    break;
                case 6:
                    r.label = L.hU.internalBinaryRead(e, e.uint32(), n, r.label);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.text && t.tag(1, O.O0.LengthDelimited).string(e.text),
            "0" !== e.emojiId && t.tag(2, O.O0.Bit64).fixed64(e.emojiId),
            "" !== e.emojiName && t.tag(3, O.O0.LengthDelimited).string(e.emojiName),
            "0" !== e.expiresAtMs && t.tag(4, O.O0.Bit64).fixed64(e.expiresAtMs),
            "0" !== e.createdAtMs && t.tag(5, O.O0.Bit64).fixed64(e.createdAtMs),
            e.label && L.hU.internalBinaryWrite(e.label, t.tag(6, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eX = new eZ();
class eQ extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.LocalizationSettings", [
            { no: 1, name: "locale", kind: "message", T: () => L.hU },
            { no: 2, name: "timezone_offset", kind: "message", T: () => L.as },
            { no: 3, name: "timezone_name", kind: "message", T: () => L.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.locale = L.hU.internalBinaryRead(e, e.uint32(), n, r.locale);
                    break;
                case 2:
                    r.timezoneOffset = L.as.internalBinaryRead(e, e.uint32(), n, r.timezoneOffset);
                    break;
                case 3:
                    r.timezoneName = L.hU.internalBinaryRead(e, e.uint32(), n, r.timezoneName);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.locale && L.hU.internalBinaryWrite(e.locale, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.timezoneOffset &&
                L.as.internalBinaryWrite(e.timezoneOffset, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.timezoneName && L.hU.internalBinaryWrite(e.timezoneName, t.tag(3, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eJ = new eQ();
class e0 extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelListSettings", [
            { no: 1, name: "layout", kind: "message", T: () => L.hU },
            { no: 2, name: "message_previews", kind: "message", T: () => L.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.layout = L.hU.internalBinaryRead(e, e.uint32(), n, r.layout);
                    break;
                case 2:
                    r.messagePreviews = L.hU.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.layout && L.hU.internalBinaryWrite(e.layout, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                L.hU.internalBinaryWrite(e.messagePreviews, t.tag(2, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e1 = new e0();
class e2 extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.AppearanceSettings", [
            { no: 1, name: "theme", kind: "enum", T: () => ["discord_protos.discord_users.v1.Theme", q] },
            { no: 2, name: "developer_mode", kind: "scalar", T: 8 },
            { no: 3, name: "client_theme_settings", kind: "message", T: () => e7 },
            { no: 4, name: "mobile_redesign_disabled", kind: "scalar", T: 8 },
            { no: 6, name: "channel_list_layout", kind: "message", T: () => L.hU },
            { no: 7, name: "message_previews", kind: "message", T: () => L.hU },
            { no: 8, name: "search_result_exact_count_enabled", kind: "message", T: () => L._t },
            {
                no: 9,
                name: "timestamp_hour_cycle",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.TimestampHourCycle", X],
            },
            { no: 10, name: "happening_now_cards_disabled", kind: "message", T: () => L._t },
            {
                no: 11,
                name: "launch_pad_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.LaunchPadMode", Q],
            },
            { no: 12, name: "ui_density", kind: "enum", T: () => ["discord_protos.discord_users.v1.UIDensity", $] },
            {
                no: 13,
                name: "swipe_right_to_left_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SwipeRightToLeftMode", J],
            },
            {
                no: 14,
                name: "default_guild_theme_preference",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_users.v1.GuildThemeSourcePreference",
                    z,
                    "GUILD_THEME_SOURCE_PREFERENCE_",
                ],
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
            defaultGuildThemePreference: 0,
        };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.theme = e.int32();
                    break;
                case 2:
                    r.developerMode = e.bool();
                    break;
                case 3:
                    r.clientThemeSettings = e7.internalBinaryRead(e, e.uint32(), n, r.clientThemeSettings);
                    break;
                case 4:
                    r.mobileRedesignDisabled = e.bool();
                    break;
                case 6:
                    r.channelListLayout = L.hU.internalBinaryRead(e, e.uint32(), n, r.channelListLayout);
                    break;
                case 7:
                    r.messagePreviews = L.hU.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
                    break;
                case 8:
                    r.searchResultExactCountEnabled = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.searchResultExactCountEnabled,
                    );
                    break;
                case 9:
                    r.timestampHourCycle = e.int32();
                    break;
                case 10:
                    r.happeningNowCardsDisabled = L._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.happeningNowCardsDisabled,
                    );
                    break;
                case 11:
                    r.launchPadMode = e.int32();
                    break;
                case 12:
                    r.uiDensity = e.int32();
                    break;
                case 13:
                    r.swipeRightToLeftMode = e.int32();
                    break;
                case 14:
                    r.defaultGuildThemePreference = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.theme && t.tag(1, O.O0.Varint).int32(e.theme),
            !1 !== e.developerMode && t.tag(2, O.O0.Varint).bool(e.developerMode),
            e.clientThemeSettings &&
                e7.internalBinaryWrite(e.clientThemeSettings, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.mobileRedesignDisabled && t.tag(4, O.O0.Varint).bool(e.mobileRedesignDisabled),
            e.channelListLayout &&
                L.hU.internalBinaryWrite(e.channelListLayout, t.tag(6, O.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                L.hU.internalBinaryWrite(e.messagePreviews, t.tag(7, O.O0.LengthDelimited).fork(), n).join(),
            e.searchResultExactCountEnabled &&
                L._t
                    .internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, O.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.timestampHourCycle && t.tag(9, O.O0.Varint).int32(e.timestampHourCycle),
            e.happeningNowCardsDisabled &&
                L._t.internalBinaryWrite(e.happeningNowCardsDisabled, t.tag(10, O.O0.LengthDelimited).fork(), n).join(),
            0 !== e.launchPadMode && t.tag(11, O.O0.Varint).int32(e.launchPadMode),
            0 !== e.uiDensity && t.tag(12, O.O0.Varint).int32(e.uiDensity),
            0 !== e.swipeRightToLeftMode && t.tag(13, O.O0.Varint).int32(e.swipeRightToLeftMode),
            0 !== e.defaultGuildThemePreference && t.tag(14, O.O0.Varint).int32(e.defaultGuildThemePreference);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e3 = new e2();
class e6 extends D.G {
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.colors.push(e.string());
                    break;
                case 2:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.gradientColorStops.push(e.float());
                    else r.gradientColorStops.push(e.float());
                    break;
                case 3:
                    r.gradientAngle = e.int32();
                    break;
                case 4:
                    r.baseMix = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, O.O0.LengthDelimited).string(e.colors[n]);
        if (e.gradientColorStops.length) {
            t.tag(2, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.gradientColorStops.length; n++) t.float(e.gradientColorStops[n]);
            t.join();
        }
        0 !== e.gradientAngle && t.tag(3, O.O0.Varint).int32(e.gradientAngle),
            0 !== e.baseMix && t.tag(4, O.O0.Varint).int32(e.baseMix);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e4 = new e6();
class e5 extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClientThemeSettings", [
            { no: 2, name: "background_gradient_preset_id", kind: "message", T: () => L.ZQ },
            { no: 4, name: "custom_user_theme_settings", kind: "message", T: () => e4 },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 2:
                    r.backgroundGradientPresetId = L.ZQ.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.backgroundGradientPresetId,
                    );
                    break;
                case 4:
                    r.customUserThemeSettings = e4.internalBinaryRead(e, e.uint32(), n, r.customUserThemeSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.backgroundGradientPresetId &&
            L.ZQ.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.customUserThemeSettings &&
                e4.internalBinaryWrite(e.customUserThemeSettings, t.tag(4, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e7 = new e5();
class e8 extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolders", [
            { no: 1, name: "folders", kind: "message", repeat: 1, T: () => tt },
            { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { folders: [], guildPositions: [] };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.folders.push(tt.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.guildPositions.push(e.fixed64().toString());
                    else r.guildPositions.push(e.fixed64().toString());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.folders.length; i++)
            tt.internalBinaryWrite(e.folders[i], t.tag(1, O.O0.LengthDelimited).fork(), n).join();
        if (e.guildPositions.length) {
            t.tag(2, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e9 = new e8();
class te extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolder", [
            { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 2, name: "id", kind: "message", T: () => L.j1 },
            { no: 3, name: "name", kind: "message", T: () => L.hU },
            { no: 4, name: "color", kind: "message", T: () => L.ol },
        ]);
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                    else r.guildIds.push(e.fixed64().toString());
                    break;
                case 2:
                    r.id = L.j1.internalBinaryRead(e, e.uint32(), n, r.id);
                    break;
                case 3:
                    r.name = L.hU.internalBinaryRead(e, e.uint32(), n, r.name);
                    break;
                case 4:
                    r.color = L.ol.internalBinaryRead(e, e.uint32(), n, r.color);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        e.id && L.j1.internalBinaryWrite(e.id, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.name && L.hU.internalBinaryWrite(e.name, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
            e.color && L.ol.internalBinaryWrite(e.color, t.tag(4, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tt = new te();
class tn extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.Favorites", [
            { no: 1, name: "favorite_channels", kind: "map", K: 6, V: { kind: "message", T: () => ts } },
            { no: 2, name: "muted", kind: "scalar", T: 8 },
            { no: 3, name: "guild_visible", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = { favoriteChannels: {}, muted: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.favoriteChannels, e, n);
                    break;
                case 2:
                    r.muted = e.bool();
                    break;
                case 3:
                    r.guildVisible = L._t.internalBinaryRead(e, e.uint32(), n, r.guildVisible);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = ts.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels",
                    );
            }
        }
        e[s ?? "0"] = a ?? ts.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.favoriteChannels))
            t.tag(1, O.O0.LengthDelimited).fork().tag(1, O.O0.Bit64).fixed64(i),
                t.tag(2, O.O0.LengthDelimited).fork(),
                ts.internalBinaryWrite(e.favoriteChannels[i], t, n),
                t.join().join();
        !1 !== e.muted && t.tag(2, O.O0.Varint).bool(e.muted),
            e.guildVisible && L._t.internalBinaryWrite(e.guildVisible, t.tag(3, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ti = new tn();
class tr extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteChannel", [
            { no: 1, name: "nickname", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", ee] },
            { no: 3, name: "position", kind: "scalar", T: 13 },
            { no: 4, name: "parent_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { nickname: "", type: 0, position: 0, parentId: "0" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.nickname = e.string();
                    break;
                case 2:
                    r.type = e.int32();
                    break;
                case 3:
                    r.position = e.uint32();
                    break;
                case 4:
                    r.parentId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.nickname && t.tag(1, O.O0.LengthDelimited).string(e.nickname),
            0 !== e.type && t.tag(2, O.O0.Varint).int32(e.type),
            0 !== e.position && t.tag(3, O.O0.Varint).uint32(e.position),
            "0" !== e.parentId && t.tag(4, O.O0.Bit64).fixed64(e.parentId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ts = new tr();
class ta extends D.G {
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
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.muted = e.bool();
                    break;
                case 2:
                    r.volume = e.float();
                    break;
                case 3:
                    r.modifiedAt = e.fixed64().toString();
                    break;
                case 4:
                    r.soundboardMuted = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.muted && t.tag(1, O.O0.Varint).bool(e.muted),
            0 !== e.volume && t.tag(2, O.O0.Bit32).float(e.volume),
            "0" !== e.modifiedAt && t.tag(3, O.O0.Bit64).fixed64(e.modifiedAt),
            !1 !== e.soundboardMuted && t.tag(4, O.O0.Varint).bool(e.soundboardMuted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let to = new ta();
class tl extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.AudioSettings", [
            { no: 1, name: "user", kind: "map", K: 6, V: { kind: "message", T: () => to } },
            { no: 2, name: "stream", kind: "map", K: 6, V: { kind: "message", T: () => to } },
        ]);
    }
    create(e) {
        let t = { user: {}, stream: {} };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.user, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(r.stream, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = to.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user",
                    );
            }
        }
        e[s ?? "0"] = a ?? to.create();
    }
    binaryReadMap2(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = to.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream",
                    );
            }
        }
        e[s ?? "0"] = a ?? to.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.user))
            t.tag(1, O.O0.LengthDelimited).fork().tag(1, O.O0.Bit64).fixed64(i),
                t.tag(2, O.O0.LengthDelimited).fork(),
                to.internalBinaryWrite(e.user[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.stream))
            t.tag(2, O.O0.LengthDelimited).fork().tag(1, O.O0.Bit64).fixed64(i),
                t.tag(2, O.O0.LengthDelimited).fork(),
                to.internalBinaryWrite(e.stream[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tu = new tl();
class tc extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.CommunitiesSettings", [
            { no: 1, name: "disable_home_auto_nav", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.disableHomeAutoNav = L._t.internalBinaryRead(e, e.uint32(), n, r.disableHomeAutoNav);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.disableHomeAutoNav &&
            L._t.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let td = new tc();
class t_ extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.SoundboardSettings", [{ no: 1, name: "volume", kind: "scalar", T: 2 }]);
    }
    create(e) {
        let t = { volume: 0 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.volume = e.float();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.volume && t.tag(1, O.O0.Bit32).float(e.volume);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tf = new t_();
class th extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomCallSound", [
            { no: 1, name: "sound_id", kind: "scalar", T: 6 },
            { no: 2, name: "guild_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { soundId: "0", guildId: "0" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.soundId = e.fixed64().toString();
                    break;
                case 2:
                    r.guildId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.soundId && t.tag(1, O.O0.Bit64).fixed64(e.soundId),
            "0" !== e.guildId && t.tag(2, O.O0.Bit64).fixed64(e.guildId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tp = new th();
class tE extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.BroadcastSettings", [
            { no: 1, name: "allow_friends", kind: "message", T: () => L._t },
            { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "auto_broadcast", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = { allowedGuildIds: [], allowedUserIds: [] };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.allowFriends = L._t.internalBinaryRead(e, e.uint32(), n, r.allowFriends);
                    break;
                case 2:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.allowedGuildIds.push(e.fixed64().toString());
                    else r.allowedGuildIds.push(e.fixed64().toString());
                    break;
                case 3:
                    if (i === O.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.allowedUserIds.push(e.fixed64().toString());
                    else r.allowedUserIds.push(e.fixed64().toString());
                    break;
                case 4:
                    r.autoBroadcast = L._t.internalBinaryRead(e, e.uint32(), n, r.autoBroadcast);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowFriends &&
                L._t.internalBinaryWrite(e.allowFriends, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.allowedGuildIds.length)
        ) {
            t.tag(2, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
            t.join();
        }
        if (e.allowedUserIds.length) {
            t.tag(3, O.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
            t.join();
        }
        e.autoBroadcast && L._t.internalBinaryWrite(e.autoBroadcast, t.tag(4, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tm = new tE();
class tg extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClipsSettings", [
            { no: 1, name: "allow_voice_recording", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.allowVoiceRecording = L._t.internalBinaryRead(e, e.uint32(), n, r.allowVoiceRecording);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.allowVoiceRecording &&
            L._t.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tA = new tg();
class tI extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimit", [
            { no: 1, name: "amount", kind: "scalar", T: 4 },
            { no: 2, name: "currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { amount: "0", currency: "" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.amount = e.uint64().toString();
                    break;
                case 2:
                    r.currency = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.amount && t.tag(1, O.O0.Varint).uint64(e.amount),
            "" !== e.currency && t.tag(2, O.O0.LengthDelimited).string(e.currency);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tT = new tI();
class tS extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimitSettings", [
            { no: 1, name: "one_time_purchase_limit", kind: "message", T: () => tT },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.oneTimePurchaseLimit = tT.internalBinaryRead(e, e.uint32(), n, r.oneTimePurchaseLimit);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.oneTimePurchaseLimit &&
            tT.internalBinaryWrite(e.oneTimePurchaseLimit, t.tag(1, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tN = new tS();
class ty extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.SafetySettings", [
            {
                no: 1,
                name: "safety_settings_preset",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SafetySettingsPresetType", et],
            },
            { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 },
            { no: 3, name: "spending_limit_settings", kind: "message", T: () => tN },
        ]);
    }
    create(e) {
        let t = { safetySettingsPreset: 0, ignoreProfileSpeedbumpDisabled: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.safetySettingsPreset = e.int32();
                    break;
                case 2:
                    r.ignoreProfileSpeedbumpDisabled = e.bool();
                    break;
                case 3:
                    r.spendingLimitSettings = tN.internalBinaryRead(e, e.uint32(), n, r.spendingLimitSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.safetySettingsPreset && t.tag(1, O.O0.Varint).int32(e.safetySettingsPreset),
            !1 !== e.ignoreProfileSpeedbumpDisabled && t.tag(2, O.O0.Varint).bool(e.ignoreProfileSpeedbumpDisabled),
            e.spendingLimitSettings &&
                tN.internalBinaryWrite(e.spendingLimitSettings, t.tag(3, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tC = new ty();
class tv extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ForLaterSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ForLaterTab", en, "FOR_LATER_TAB_"],
            },
        ]);
    }
    create(e) {
        let t = { currentTab: 0 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.currentTab = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, O.O0.Varint).int32(e.currentTab);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tO = new tv();
class tR extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ICYMISettings", [
            { no: 1, name: "feed_generated_at", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { feedGeneratedAt: "0" };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.feedGeneratedAt = e.fixed64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.feedGeneratedAt && t.tag(1, O.O0.Bit64).fixed64(e.feedGeneratedAt);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tb = new tR();
class tD extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllApplicationSettings", [
            { no: 1, name: "app_settings", kind: "map", K: 6, V: { kind: "message", T: () => tM } },
        ]);
    }
    create(e) {
        let t = { appSettings: {} };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.appSettings, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = tM.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings",
                    );
            }
        }
        e[s ?? "0"] = a ?? tM.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.appSettings))
            t.tag(1, O.O0.LengthDelimited).fork().tag(1, O.O0.Bit64).fixed64(i),
                t.tag(2, O.O0.LengthDelimited).fork(),
                tM.internalBinaryWrite(e.appSettings[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tL = new tD();
class tw extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSettings", [
            { no: 1, name: "app_dm_settings", kind: "message", T: () => tx },
            { no: 2, name: "app_sharing_settings", kind: "message", T: () => tk },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.appDmSettings = tx.internalBinaryRead(e, e.uint32(), n, r.appDmSettings);
                    break;
                case 2:
                    r.appSharingSettings = tk.internalBinaryRead(e, e.uint32(), n, r.appSharingSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.appDmSettings && tx.internalBinaryWrite(e.appDmSettings, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.appSharingSettings &&
                tk.internalBinaryWrite(e.appSharingSettings, t.tag(2, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tM = new tw();
class tP extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationDMSettings", [
            { no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { allowMobilePush: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (2 === t) r.allowMobilePush = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.allowMobilePush && t.tag(2, O.O0.Varint).bool(e.allowMobilePush);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tx = new tP();
class tU extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSharingSettings", [
            { no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { disableApplicationActivitySharing: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.disableApplicationActivitySharing = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.disableApplicationActivitySharing && t.tag(1, O.O0.Varint).bool(e.disableApplicationActivitySharing);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tk = new tU();
class tG extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.AdsSettings", [{ no: 1, name: "always_deliver", kind: "scalar", T: 8 }]);
    }
    create(e) {
        let t = { alwaysDeliver: !1 };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.alwaysDeliver = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.alwaysDeliver && t.tag(1, O.O0.Varint).bool(e.alwaysDeliver);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tF = new tG();
class tV extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackState", [
            { no: 1, name: "last_impression_time", kind: "message", T: () => L.ol },
            { no: 2, name: "opt_out_expiry_time", kind: "message", T: () => L.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lastImpressionTime = L.ol.internalBinaryRead(e, e.uint32(), n, r.lastImpressionTime);
                    break;
                case 2:
                    r.optOutExpiryTime = L.ol.internalBinaryRead(e, e.uint32(), n, r.optOutExpiryTime);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lastImpressionTime &&
            L.ol.internalBinaryWrite(e.lastImpressionTime, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.optOutExpiryTime &&
                L.ol.internalBinaryWrite(e.optOutExpiryTime, t.tag(2, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tB = new tV();
class tH extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.DefaultReactionEmoji", [
            { no: 1, name: "emoji_id", kind: "message", T: () => L.ol },
            { no: 2, name: "emoji_name", kind: "message", T: () => L.hU },
            { no: 3, name: "animated", kind: "message", T: () => L._t },
            { no: 4, name: "disable_double_tap", kind: "message", T: () => L._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.emojiId = L.ol.internalBinaryRead(e, e.uint32(), n, r.emojiId);
                    break;
                case 2:
                    r.emojiName = L.hU.internalBinaryRead(e, e.uint32(), n, r.emojiName);
                    break;
                case 3:
                    r.animated = L._t.internalBinaryRead(e, e.uint32(), n, r.animated);
                    break;
                case 4:
                    r.disableDoubleTap = L._t.internalBinaryRead(e, e.uint32(), n, r.disableDoubleTap);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.emojiId && L.ol.internalBinaryWrite(e.emojiId, t.tag(1, O.O0.LengthDelimited).fork(), n).join(),
            e.emojiName && L.hU.internalBinaryWrite(e.emojiName, t.tag(2, O.O0.LengthDelimited).fork(), n).join(),
            e.animated && L._t.internalBinaryWrite(e.animated, t.tag(3, O.O0.LengthDelimited).fork(), n).join(),
            e.disableDoubleTap &&
                L._t.internalBinaryWrite(e.disableDoubleTap, t.tag(4, O.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tj = new tH();
class tY extends D.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackSettings", [
            { no: 1, name: "in_app_feedback_states", kind: "map", K: 5, V: { kind: "message", T: () => tB } },
        ]);
    }
    create(e) {
        let t = { inAppFeedbackStates: {} };
        return (
            globalThis.Object.defineProperty(t, b.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, R.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.inAppFeedbackStates, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? O.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.int32();
                    break;
                case 2:
                    a = tB.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states",
                    );
            }
        }
        e[s ?? 0] = a ?? tB.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.inAppFeedbackStates))
            t.tag(1, O.O0.LengthDelimited).fork().tag(1, O.O0.Varint).int32(parseInt(i)),
                t.tag(2, O.O0.LengthDelimited).fork(),
                tB.internalBinaryWrite(e.inAppFeedbackStates[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? O.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tW = new tY();
