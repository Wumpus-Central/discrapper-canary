"use strict";
n.d(t, {
    AN: () => j,
    Ar: () => ee,
    DQ: () => B,
    E: () => eY,
    F1: () => eZ,
    GY: () => eb,
    Ip: () => en,
    Ju: () => eT,
    KJ: () => eu,
    KP: () => $,
    NS: () => q,
    PZ: () => J,
    Q0: () => ed,
    Qd: () => W,
    Sx: () => X,
    TO: () => x,
    TY: () => ej,
    Tz: () => F,
    X9: () => e$,
    Y2: () => w,
    YW: () => eR,
    ak: () => ti,
    eF: () => G,
    fL: () => K,
    he: () => k,
    iL: () => ea,
    ju: () => Q,
    kW: () => et,
    nT: () => el,
    nx: () => eh,
    oJ: () => eB,
    oP: () => td,
    tI: () => Z,
    te: () => tR,
    uK: () => tN,
    wL: () => tl,
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
    a,
    s,
    l,
    o,
    d,
    c,
    u,
    _,
    E,
    A,
    h,
    I,
    f,
    p,
    T,
    m,
    g,
    S,
    N,
    C,
    R,
    O,
    L,
    D = n(852015),
    y = n(144367),
    v = n(428420),
    b = n(535384),
    M = n(406935),
    P = n(335871),
    U = n(813827),
    w =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.MENTIONS = 1)] = "MENTIONS"),
        (i[(i.UNREADS = 2)] = "UNREADS"),
        (i[(i.TODOS = 3)] = "TODOS"),
        (i[(i.FOR_YOU = 4)] = "FOR_YOU"),
        (i[(i.GAME_INVITES = 5)] = "GAME_INVITES"),
        (i[(i.BOOKMARKS = 6)] = "BOOKMARKS"),
        (i[(i.SCHEDULED = 7)] = "SCHEDULED"),
        (i[(i.REMINDERS = 8)] = "REMINDERS"),
        i),
    G =
        (((r = {})[(r.NO_GUILD_ONBOARDING = 0)] = "NO_GUILD_ONBOARDING"),
        (r[(r.GUILD_NOTICE_SHOWN = 1)] = "GUILD_NOTICE_SHOWN"),
        (r[(r.GUILD_NOTICE_CLEARED = 2)] = "GUILD_NOTICE_CLEARED"),
        r),
    x =
        (((a = {})[(a.UNSET_EXPLICIT_CONTENT_REDACTION = 0)] = "UNSET_EXPLICIT_CONTENT_REDACTION"),
        (a[(a.SHOW = 1)] = "SHOW"),
        (a[(a.BLUR = 2)] = "BLUR"),
        (a[(a.BLOCK = 3)] = "BLOCK"),
        a),
    k =
        (((s = {})[(s.DEFAULT_UNSET = 0)] = "DEFAULT_UNSET"),
        (s[(s.DISABLED = 1)] = "DISABLED"),
        (s[(s.NON_FRIENDS = 2)] = "NON_FRIENDS"),
        (s[(s.FRIENDS_AND_NON_FRIENDS = 3)] = "FRIENDS_AND_NON_FRIENDS"),
        s),
    F =
        (((l = {})[(l.NOTIFICATIONS_ENABLED = 0)] = "NOTIFICATIONS_ENABLED"),
        (l[(l.ONLY_DMS = 1)] = "ONLY_DMS"),
        (l[(l.NOTIFICATIONS_DISABLED = 2)] = "NOTIFICATIONS_DISABLED"),
        l),
    V =
        (((o = {})[(o.ACTIVITY_NOTIFICATIONS_UNSET = 0)] = "ACTIVITY_NOTIFICATIONS_UNSET"),
        (o[(o.ACTIVITY_NOTIFICATIONS_DISABLED = 1)] = "ACTIVITY_NOTIFICATIONS_DISABLED"),
        (o[(o.ACTIVITY_NOTIFICATIONS_ENABLED = 2)] = "ACTIVITY_NOTIFICATIONS_ENABLED"),
        (o[(o.ONLY_GAMES_PLAYED = 3)] = "ONLY_GAMES_PLAYED"),
        o),
    B =
        (((d = {})[(d.STATUS_PUSH_UNSET = 0)] = "STATUS_PUSH_UNSET"),
        (d[(d.STATUS_PUSH_ENABLED = 1)] = "STATUS_PUSH_ENABLED"),
        (d[(d.STATUS_PUSH_DISABLED = 2)] = "STATUS_PUSH_DISABLED"),
        d),
    H =
        (((c = {})[(c.UNSET = 0)] = "UNSET"),
        (c[(c.GOOGLE = 1)] = "GOOGLE"),
        (c[(c.BING = 2)] = "BING"),
        (c[(c.DUCKDUCKGO = 3)] = "DUCKDUCKGO"),
        (c[(c.CUSTOM = 4)] = "CUSTOM"),
        c),
    j =
        (((u = {})[(u.OFF = 0)] = "OFF"),
        (u[(u.ON_FOR_LARGE_GUILDS = 1)] = "ON_FOR_LARGE_GUILDS"),
        (u[(u.ON = 2)] = "ON"),
        u),
    W =
        (((_ = {})[(_.ACTIVITY_STATUS_UNSET = 0)] = "ACTIVITY_STATUS_UNSET"),
        (_[(_.ACTIVITY_STATUS_OFF = 1)] = "ACTIVITY_STATUS_OFF"),
        (_[(_.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS = 2)] = "ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS"),
        (_[(_.ACTIVITY_STATUS_ON = 3)] = "ACTIVITY_STATUS_ON"),
        _),
    Y =
        (((E = {})[(E.OFF_FOR_NEW_GUILDS = 0)] = "OFF_FOR_NEW_GUILDS"),
        (E[(E.ON_FOR_NEW_GUILDS = 1)] = "ON_FOR_NEW_GUILDS"),
        E),
    K =
        (((A = {})[(A.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = 0)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET"),
        (A[(A.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = 1)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL"),
        (A[(A.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME = 2)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME"),
        (A[(A.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE = 3)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE"),
        A),
    $ =
        (((h = {})[(h.UNSET = 0)] = "UNSET"),
        (h[(h.FRIENDS_ONLY = 1)] = "FRIENDS_ONLY"),
        (h[(h.FRIENDS_AND_SMALL_GUILDS = 2)] = "FRIENDS_AND_SMALL_GUILDS"),
        (h[(h.FRIENDS_AND_ALL_GUILDS = 3)] = "FRIENDS_AND_ALL_GUILDS"),
        h),
    z = (((I = {})[(I.UNSPECIFIED = 0)] = "UNSPECIFIED"), (I[(I.REAL_MONEY_GAMING = 1)] = "REAL_MONEY_GAMING"), I),
    Z =
        (((f = {})[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.PERSONAL = 1)] = "PERSONAL"),
        (f[(f.GUILD = 2)] = "GUILD"),
        f),
    q =
        (((p = {})[(p.UNSET_UI_DENSITY = 0)] = "UNSET_UI_DENSITY"),
        (p[(p.COMPACT = 1)] = "COMPACT"),
        (p[(p.COZY = 2)] = "COZY"),
        (p[(p.RESPONSIVE = 3)] = "RESPONSIVE"),
        (p[(p.DEFAULT = 4)] = "DEFAULT"),
        p),
    X =
        (((T = {})[(T.UNSET = 0)] = "UNSET"),
        (T[(T.DARK = 1)] = "DARK"),
        (T[(T.LIGHT = 2)] = "LIGHT"),
        (T[(T.DARKER = 3)] = "DARKER"),
        (T[(T.MIDNIGHT = 4)] = "MIDNIGHT"),
        T),
    Q =
        (((m = {})[(m.MINT_APPLE = 0)] = "MINT_APPLE"),
        (m[(m.CITRUS_SHERBERT = 1)] = "CITRUS_SHERBERT"),
        (m[(m.RETRO_RAINCLOUD = 2)] = "RETRO_RAINCLOUD"),
        (m[(m.HANAMI = 3)] = "HANAMI"),
        (m[(m.SUNRISE = 4)] = "SUNRISE"),
        (m[(m.COTTON_CANDY = 5)] = "COTTON_CANDY"),
        (m[(m.LOFI_VIBES = 6)] = "LOFI_VIBES"),
        (m[(m.DESERT_KHAKI = 7)] = "DESERT_KHAKI"),
        (m[(m.SUNSET = 8)] = "SUNSET"),
        (m[(m.CHROMA_GLOW = 9)] = "CHROMA_GLOW"),
        (m[(m.FOREST = 10)] = "FOREST"),
        (m[(m.CRIMSON_MOON = 11)] = "CRIMSON_MOON"),
        (m[(m.MIDNIGHT_BLURPLE = 12)] = "MIDNIGHT_BLURPLE"),
        (m[(m.MARS = 13)] = "MARS"),
        (m[(m.DUSK = 14)] = "DUSK"),
        (m[(m.UNDER_THE_SEA = 15)] = "UNDER_THE_SEA"),
        (m[(m.EASTER_EGG = 16)] = "EASTER_EGG"),
        (m[(m.RETRO_STORM = 17)] = "RETRO_STORM"),
        (m[(m.NEON_NIGHTS = 18)] = "NEON_NIGHTS"),
        (m[(m.SEPIA = 19)] = "SEPIA"),
        (m[(m.STRAWBERRY_LEMONADE = 20)] = "STRAWBERRY_LEMONADE"),
        (m[(m.AURORA = 21)] = "AURORA"),
        (m[(m.BLURPLE_TWILIGHT = 22)] = "BLURPLE_TWILIGHT"),
        m),
    J = (((g = {})[(g.AUTO = 0)] = "AUTO"), (g[(g.H12 = 1)] = "H12"), (g[(g.H23 = 2)] = "H23"), g),
    ee =
        (((S = {})[(S.LAUNCH_PAD_DISABLED = 0)] = "LAUNCH_PAD_DISABLED"),
        (S[(S.LAUNCH_PAD_GESTURE_FULL_SCREEN = 1)] = "LAUNCH_PAD_GESTURE_FULL_SCREEN"),
        (S[(S.LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2)] = "LAUNCH_PAD_GESTURE_RIGHT_EDGE"),
        (S[(S.LAUNCH_PAD_PULL_TAB = 3)] = "LAUNCH_PAD_PULL_TAB"),
        S),
    et =
        (((N = {})[(N.SWIPE_RIGHT_TO_LEFT_UNSET = 0)] = "SWIPE_RIGHT_TO_LEFT_UNSET"),
        (N[(N.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS = 1)] = "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS"),
        (N[(N.SWIPE_RIGHT_TO_LEFT_REPLY = 2)] = "SWIPE_RIGHT_TO_LEFT_REPLY"),
        N),
    en =
        (((C = {})[(C.UNSET_FAVORITE_CHANNEL_TYPE = 0)] = "UNSET_FAVORITE_CHANNEL_TYPE"),
        (C[(C.REFERENCE_ORIGINAL = 1)] = "REFERENCE_ORIGINAL"),
        (C[(C.CATEGORY = 2)] = "CATEGORY"),
        C),
    ei =
        (((R = {})[(R.UNSET_SAFETY_SETTINGS_PRESET = 0)] = "UNSET_SAFETY_SETTINGS_PRESET"),
        (R[(R.BALANCED = 1)] = "BALANCED"),
        (R[(R.STRICT = 2)] = "STRICT"),
        (R[(R.RELAXED = 3)] = "RELAXED"),
        (R[(R.CUSTOM = 4)] = "CUSTOM"),
        R),
    er =
        (((O = {})[(O.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (O[(O.ALL = 1)] = "ALL"),
        (O[(O.BOOKMARKS = 2)] = "BOOKMARKS"),
        (O[(O.REMINDERS = 3)] = "REMINDERS"),
        O),
    ea =
        (((L = {})[(L.VOICE = 0)] = "VOICE"),
        (L[(L.STREAM = 1)] = "STREAM"),
        (L[(L.VIDEO_BACKGROUND = 2)] = "VIDEO_BACKGROUND"),
        (L[(L.ACTIVITY = 3)] = "ACTIVITY"),
        (L[(L.IN_APP_REPORTS = 4)] = "IN_APP_REPORTS"),
        (L[(L.SEARCH_RESULTS = 8)] = "SEARCH_RESULTS"),
        (L[(L.VIBEGRATIONS = 10)] = "VIBEGRATIONS"),
        L);
class es extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.PreloadedUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => U.u },
            { no: 2, name: "inbox", kind: "message", T: () => ed },
            { no: 3, name: "guilds", kind: "message", T: () => eu },
            { no: 4, name: "user_content", kind: "message", T: () => eR },
            { no: 5, name: "voice_and_video", kind: "message", T: () => eb },
            { no: 6, name: "text_and_images", kind: "message", T: () => eB },
            { no: 7, name: "notifications", kind: "message", T: () => ej },
            { no: 8, name: "privacy", kind: "message", T: () => eY },
            { no: 9, name: "debug", kind: "message", T: () => e$ },
            { no: 10, name: "game_library", kind: "message", T: () => eZ },
            { no: 11, name: "status", kind: "message", T: () => eX },
            { no: 12, name: "localization", kind: "message", T: () => e1 },
            { no: 13, name: "appearance", kind: "message", T: () => e5 },
            { no: 14, name: "guild_folders", kind: "message", T: () => tt },
            { no: 15, name: "favorites", kind: "message", T: () => ta },
            { no: 16, name: "audio_context_settings", kind: "message", T: () => tu },
            { no: 17, name: "communities", kind: "message", T: () => tE },
            { no: 18, name: "broadcast", kind: "message", T: () => tT },
            { no: 19, name: "clips", kind: "message", T: () => tg },
            { no: 20, name: "for_later", kind: "message", T: () => ty },
            { no: 21, name: "safety_settings", kind: "message", T: () => tL },
            { no: 22, name: "icymi_settings", kind: "message", T: () => tb },
            { no: 23, name: "applications", kind: "message", T: () => tP },
            { no: 24, name: "ads", kind: "message", T: () => tB },
            { no: 25, name: "in_app_feedback_settings", kind: "message", T: () => t$ },
            { no: 26, name: "app_version_settings", kind: "message", T: () => tZ },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.versions = U.u.internalBinaryRead(e, e.uint32(), n, r.versions);
                    break;
                case 2:
                    r.inbox = ed.internalBinaryRead(e, e.uint32(), n, r.inbox);
                    break;
                case 3:
                    r.guilds = eu.internalBinaryRead(e, e.uint32(), n, r.guilds);
                    break;
                case 4:
                    r.userContent = eR.internalBinaryRead(e, e.uint32(), n, r.userContent);
                    break;
                case 5:
                    r.voiceAndVideo = eb.internalBinaryRead(e, e.uint32(), n, r.voiceAndVideo);
                    break;
                case 6:
                    r.textAndImages = eB.internalBinaryRead(e, e.uint32(), n, r.textAndImages);
                    break;
                case 7:
                    r.notifications = ej.internalBinaryRead(e, e.uint32(), n, r.notifications);
                    break;
                case 8:
                    r.privacy = eY.internalBinaryRead(e, e.uint32(), n, r.privacy);
                    break;
                case 9:
                    r.debug = e$.internalBinaryRead(e, e.uint32(), n, r.debug);
                    break;
                case 10:
                    r.gameLibrary = eZ.internalBinaryRead(e, e.uint32(), n, r.gameLibrary);
                    break;
                case 11:
                    r.status = eX.internalBinaryRead(e, e.uint32(), n, r.status);
                    break;
                case 12:
                    r.localization = e1.internalBinaryRead(e, e.uint32(), n, r.localization);
                    break;
                case 13:
                    r.appearance = e5.internalBinaryRead(e, e.uint32(), n, r.appearance);
                    break;
                case 14:
                    r.guildFolders = tt.internalBinaryRead(e, e.uint32(), n, r.guildFolders);
                    break;
                case 15:
                    r.favorites = ta.internalBinaryRead(e, e.uint32(), n, r.favorites);
                    break;
                case 16:
                    r.audioContextSettings = tu.internalBinaryRead(e, e.uint32(), n, r.audioContextSettings);
                    break;
                case 17:
                    r.communities = tE.internalBinaryRead(e, e.uint32(), n, r.communities);
                    break;
                case 18:
                    r.broadcast = tT.internalBinaryRead(e, e.uint32(), n, r.broadcast);
                    break;
                case 19:
                    r.clips = tg.internalBinaryRead(e, e.uint32(), n, r.clips);
                    break;
                case 20:
                    r.forLater = ty.internalBinaryRead(e, e.uint32(), n, r.forLater);
                    break;
                case 21:
                    r.safetySettings = tL.internalBinaryRead(e, e.uint32(), n, r.safetySettings);
                    break;
                case 22:
                    r.icymiSettings = tb.internalBinaryRead(e, e.uint32(), n, r.icymiSettings);
                    break;
                case 23:
                    r.applications = tP.internalBinaryRead(e, e.uint32(), n, r.applications);
                    break;
                case 24:
                    r.ads = tB.internalBinaryRead(e, e.uint32(), n, r.ads);
                    break;
                case 25:
                    r.inAppFeedbackSettings = t$.internalBinaryRead(e, e.uint32(), n, r.inAppFeedbackSettings);
                    break;
                case 26:
                    r.appVersionSettings = tZ.internalBinaryRead(e, e.uint32(), n, r.appVersionSettings);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && U.u.internalBinaryWrite(e.versions, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.inbox && ed.internalBinaryWrite(e.inbox, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.guilds && eu.internalBinaryWrite(e.guilds, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
            e.userContent && eR.internalBinaryWrite(e.userContent, t.tag(4, D.O0.LengthDelimited).fork(), n).join(),
            e.voiceAndVideo && eb.internalBinaryWrite(e.voiceAndVideo, t.tag(5, D.O0.LengthDelimited).fork(), n).join(),
            e.textAndImages && eB.internalBinaryWrite(e.textAndImages, t.tag(6, D.O0.LengthDelimited).fork(), n).join(),
            e.notifications && ej.internalBinaryWrite(e.notifications, t.tag(7, D.O0.LengthDelimited).fork(), n).join(),
            e.privacy && eY.internalBinaryWrite(e.privacy, t.tag(8, D.O0.LengthDelimited).fork(), n).join(),
            e.debug && e$.internalBinaryWrite(e.debug, t.tag(9, D.O0.LengthDelimited).fork(), n).join(),
            e.gameLibrary && eZ.internalBinaryWrite(e.gameLibrary, t.tag(10, D.O0.LengthDelimited).fork(), n).join(),
            e.status && eX.internalBinaryWrite(e.status, t.tag(11, D.O0.LengthDelimited).fork(), n).join(),
            e.localization && e1.internalBinaryWrite(e.localization, t.tag(12, D.O0.LengthDelimited).fork(), n).join(),
            e.appearance && e5.internalBinaryWrite(e.appearance, t.tag(13, D.O0.LengthDelimited).fork(), n).join(),
            e.guildFolders && tt.internalBinaryWrite(e.guildFolders, t.tag(14, D.O0.LengthDelimited).fork(), n).join(),
            e.favorites && ta.internalBinaryWrite(e.favorites, t.tag(15, D.O0.LengthDelimited).fork(), n).join(),
            e.audioContextSettings &&
                tu.internalBinaryWrite(e.audioContextSettings, t.tag(16, D.O0.LengthDelimited).fork(), n).join(),
            e.communities && tE.internalBinaryWrite(e.communities, t.tag(17, D.O0.LengthDelimited).fork(), n).join(),
            e.broadcast && tT.internalBinaryWrite(e.broadcast, t.tag(18, D.O0.LengthDelimited).fork(), n).join(),
            e.clips && tg.internalBinaryWrite(e.clips, t.tag(19, D.O0.LengthDelimited).fork(), n).join(),
            e.forLater && ty.internalBinaryWrite(e.forLater, t.tag(20, D.O0.LengthDelimited).fork(), n).join(),
            e.safetySettings &&
                tL.internalBinaryWrite(e.safetySettings, t.tag(21, D.O0.LengthDelimited).fork(), n).join(),
            e.icymiSettings &&
                tb.internalBinaryWrite(e.icymiSettings, t.tag(22, D.O0.LengthDelimited).fork(), n).join(),
            e.applications && tP.internalBinaryWrite(e.applications, t.tag(23, D.O0.LengthDelimited).fork(), n).join(),
            e.ads && tB.internalBinaryWrite(e.ads, t.tag(24, D.O0.LengthDelimited).fork(), n).join(),
            e.inAppFeedbackSettings &&
                t$.internalBinaryWrite(e.inAppFeedbackSettings, t.tag(25, D.O0.LengthDelimited).fork(), n).join(),
            e.appVersionSettings &&
                tZ.internalBinaryWrite(e.appVersionSettings, t.tag(26, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let el = new es();
class eo extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.InboxSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.InboxTab", w, "INBOX_TAB_"],
            },
            { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { currentTab: 0, viewedTutorial: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.currentTab = e.int32();
                    break;
                case 2:
                    r.viewedTutorial = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, D.O0.Varint).int32(e.currentTab),
            !1 !== e.viewedTutorial && t.tag(2, D.O0.Varint).bool(e.viewedTutorial);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ed = new eo();
class ec extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllGuildSettings", [
            { no: 1, name: "guilds", kind: "map", K: 6, V: { kind: "message", T: () => eh } },
        ]);
    }
    create(e) {
        let t = { guilds: {} };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.guilds, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = eh.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds",
                    );
            }
        }
        e[a ?? "0"] = s ?? eh.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guilds))
            t.tag(1, D.O0.LengthDelimited).fork().tag(1, D.O0.Bit64).fixed64(i),
                t.tag(2, D.O0.LengthDelimited).fork(),
                eh.internalBinaryWrite(e.guilds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eu = new ec();
class e_ extends b.G {
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.dismissed && t.tag(1, D.O0.Varint).bool(e.dismissed),
            0 !== e.lastDismissedVersion && t.tag(2, D.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(3, D.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(4, D.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(5, D.O0.Varint).uint32(e.numTimesDismissed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eE = new e_();
class eA extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildSettings", [
            { no: 1, name: "channels", kind: "map", K: 6, V: { kind: "message", T: () => eT } },
            { no: 2, name: "hub_progress", kind: "scalar", T: 13 },
            { no: 3, name: "guild_onboarding_progress", kind: "scalar", T: 13 },
            { no: 4, name: "guild_recents_dismissed_at", kind: "message", T: () => P.D },
            { no: 5, name: "dismissed_guild_content", kind: "scalar", T: 12 },
            { no: 6, name: "join_sound", kind: "message", T: () => tf },
            { no: 7, name: "mobile_redesign_channel_list_settings", kind: "message", T: () => e3 },
            { no: 8, name: "disable_raid_alert_push", kind: "scalar", T: 8 },
            { no: 9, name: "disable_raid_alert_nag", kind: "scalar", T: 8 },
            { no: 10, name: "custom_notification_sound_config", kind: "message", T: () => eg },
            { no: 11, name: "leaderboards_disabled", kind: "scalar", T: 8 },
            {
                no: 12,
                name: "guild_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => eE },
            },
            {
                no: 13,
                name: "guild_theme_source_preference",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_users.v1.GuildThemeSourcePreference",
                    Z,
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    r.guildRecentsDismissedAt = P.D.internalBinaryRead(e, e.uint32(), n, r.guildRecentsDismissedAt);
                    break;
                case 5:
                    r.dismissedGuildContent = e.bytes();
                    break;
                case 6:
                    r.joinSound = tf.internalBinaryRead(e, e.uint32(), n, r.joinSound);
                    break;
                case 7:
                    r.mobileRedesignChannelListSettings = e3.internalBinaryRead(
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
                    r.customNotificationSoundConfig = eg.internalBinaryRead(
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = eT.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels",
                    );
            }
        }
        e[a ?? "0"] = s ?? eT.create();
    }
    binaryReadMap12(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.int32();
                    break;
                case 2:
                    s = eE.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states",
                    );
            }
        }
        e[a ?? 0] = s ?? eE.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.channels))
            t.tag(1, D.O0.LengthDelimited).fork().tag(1, D.O0.Bit64).fixed64(i),
                t.tag(2, D.O0.LengthDelimited).fork(),
                eT.internalBinaryWrite(e.channels[i], t, n),
                t.join().join();
        for (let i of (0 !== e.hubProgress && t.tag(2, D.O0.Varint).uint32(e.hubProgress),
        0 !== e.guildOnboardingProgress && t.tag(3, D.O0.Varint).uint32(e.guildOnboardingProgress),
        e.guildRecentsDismissedAt &&
            P.D.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, D.O0.LengthDelimited).fork(), n).join(),
        e.dismissedGuildContent.length && t.tag(5, D.O0.LengthDelimited).bytes(e.dismissedGuildContent),
        e.joinSound && tf.internalBinaryWrite(e.joinSound, t.tag(6, D.O0.LengthDelimited).fork(), n).join(),
        e.mobileRedesignChannelListSettings &&
            e3
                .internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, D.O0.LengthDelimited).fork(), n)
                .join(),
        !1 !== e.disableRaidAlertPush && t.tag(8, D.O0.Varint).bool(e.disableRaidAlertPush),
        !1 !== e.disableRaidAlertNag && t.tag(9, D.O0.Varint).bool(e.disableRaidAlertNag),
        e.customNotificationSoundConfig &&
            eg.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, D.O0.LengthDelimited).fork(), n).join(),
        !1 !== e.leaderboardsDisabled && t.tag(11, D.O0.Varint).bool(e.leaderboardsDisabled),
        Object.keys(e.guildDismissibleContentStates)))
            t.tag(12, D.O0.LengthDelimited).fork().tag(1, D.O0.Varint).int32(parseInt(i)),
                t.tag(2, D.O0.LengthDelimited).fork(),
                eE.internalBinaryWrite(e.guildDismissibleContentStates[i], t, n),
                t.join().join();
        0 !== e.guildThemeSourcePreference && t.tag(13, D.O0.Varint).int32(e.guildThemeSourcePreference);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eh = new eA();
class eI extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelIconEmoji", [
            { no: 1, name: "id", kind: "message", T: () => M.ol },
            { no: 2, name: "name", kind: "message", T: () => M.hU },
            { no: 3, name: "color", kind: "message", T: () => M.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.id = M.ol.internalBinaryRead(e, e.uint32(), n, r.id);
                    break;
                case 2:
                    r.name = M.hU.internalBinaryRead(e, e.uint32(), n, r.name);
                    break;
                case 3:
                    r.color = M.ol.internalBinaryRead(e, e.uint32(), n, r.color);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.id && M.ol.internalBinaryWrite(e.id, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.name && M.hU.internalBinaryWrite(e.name, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.color && M.ol.internalBinaryWrite(e.color, t.tag(3, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ef = new eI();
class ep extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelSettings", [
            { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 },
            { no: 2, name: "icon_emoji", kind: "message", T: () => ef },
            { no: 3, name: "custom_notification_sound_config", kind: "message", T: () => eg },
        ]);
    }
    create(e) {
        let t = { collapsedInInbox: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.collapsedInInbox = e.bool();
                    break;
                case 2:
                    r.iconEmoji = ef.internalBinaryRead(e, e.uint32(), n, r.iconEmoji);
                    break;
                case 3:
                    r.customNotificationSoundConfig = eg.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.customNotificationSoundConfig,
                    );
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.collapsedInInbox && t.tag(1, D.O0.Varint).bool(e.collapsedInInbox),
            e.iconEmoji && ef.internalBinaryWrite(e.iconEmoji, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.customNotificationSoundConfig &&
                eg
                    .internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, D.O0.LengthDelimited).fork(), n)
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eT = new ep();
class em extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomNotificationSoundConfig", [
            { no: 1, name: "notification_sound_pack_id", kind: "message", T: () => M.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                r.notificationSoundPackId = M.hU.internalBinaryRead(e, e.uint32(), n, r.notificationSoundPackId);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.notificationSoundPackId &&
            M.hU.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eg = new em();
class eS extends b.G {
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.lastDismissedVersion && t.tag(1, D.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(2, D.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(3, D.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(4, D.O0.Varint).uint32(e.numTimesDismissed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eN = new eS();
class eC extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.UserContentSettings", [
            { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 },
            { no: 2, name: "last_dismissed_outbound_promotion_start_date", kind: "message", T: () => M.hU },
            { no: 3, name: "premium_tier_0_modal_dismissed_at", kind: "message", T: () => P.D },
            { no: 4, name: "guild_onboarding_upsell_dismissed_at", kind: "message", T: () => P.D },
            { no: 5, name: "safety_user_sentiment_notice_dismissed_at", kind: "message", T: () => P.D },
            { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "recurring_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => eN },
            },
            { no: 8, name: "last_gift_intent_dismissed_at_ms", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = {
            dismissedContents: new Uint8Array(0),
            lastReceivedChangelogId: "0",
            recurringDismissibleContentStates: {},
            lastGiftIntentDismissedAtMs: "0",
        };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.dismissedContents = e.bytes();
                    break;
                case 2:
                    r.lastDismissedOutboundPromotionStartDate = M.hU.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.lastDismissedOutboundPromotionStartDate,
                    );
                    break;
                case 3:
                    r.premiumTier0ModalDismissedAt = P.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.premiumTier0ModalDismissedAt,
                    );
                    break;
                case 4:
                    r.guildOnboardingUpsellDismissedAt = P.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.guildOnboardingUpsellDismissedAt,
                    );
                    break;
                case 5:
                    r.safetyUserSentimentNoticeDismissedAt = P.D.internalBinaryRead(
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
                case 8:
                    r.lastGiftIntentDismissedAtMs = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap7(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.int32();
                    break;
                case 2:
                    s = eN.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states",
                    );
            }
        }
        e[a ?? 0] = s ?? eN.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of (e.dismissedContents.length && t.tag(1, D.O0.LengthDelimited).bytes(e.dismissedContents),
        e.lastDismissedOutboundPromotionStartDate &&
            M.hU
                .internalBinaryWrite(
                    e.lastDismissedOutboundPromotionStartDate,
                    t.tag(2, D.O0.LengthDelimited).fork(),
                    n,
                )
                .join(),
        e.premiumTier0ModalDismissedAt &&
            P.D.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
        e.guildOnboardingUpsellDismissedAt &&
            P.D.internalBinaryWrite(
                e.guildOnboardingUpsellDismissedAt,
                t.tag(4, D.O0.LengthDelimited).fork(),
                n,
            ).join(),
        e.safetyUserSentimentNoticeDismissedAt &&
            P.D.internalBinaryWrite(
                e.safetyUserSentimentNoticeDismissedAt,
                t.tag(5, D.O0.LengthDelimited).fork(),
                n,
            ).join(),
        "0" !== e.lastReceivedChangelogId && t.tag(6, D.O0.Bit64).fixed64(e.lastReceivedChangelogId),
        Object.keys(e.recurringDismissibleContentStates)))
            t.tag(7, D.O0.LengthDelimited).fork().tag(1, D.O0.Varint).int32(parseInt(i)),
                t.tag(2, D.O0.LengthDelimited).fork(),
                eN.internalBinaryWrite(e.recurringDismissibleContentStates[i], t, n),
                t.join().join();
        "0" !== e.lastGiftIntentDismissedAtMs && t.tag(8, D.O0.Bit64).fixed64(e.lastGiftIntentDismissedAtMs);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eR = new eC();
class eO extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterAsset", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "asset_hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { id: "0", assetHash: "" };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.id = e.fixed64().toString();
                    break;
                case 2:
                    r.assetHash = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, D.O0.Bit64).fixed64(e.id),
            "" !== e.assetHash && t.tag(2, D.O0.LengthDelimited).string(e.assetHash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eL = new eO();
class eD extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [
            { no: 1, name: "use_blur", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { useBlur: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.useBlur = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.useBlur && t.tag(1, D.O0.Varint).bool(e.useBlur);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ey = new eD();
class ev extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [
            { no: 1, name: "blur", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => ey },
            { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 },
            { no: 3, name: "custom_asset", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => eL },
            { no: 5, name: "always_preview_video", kind: "message", T: () => M._t },
            { no: 6, name: "afk_timeout", kind: "message", T: () => M.ZQ },
            { no: 7, name: "stream_notifications_enabled", kind: "message", T: () => M._t },
            { no: 8, name: "native_phone_integration_enabled", kind: "message", T: () => M._t },
            { no: 9, name: "soundboard_settings", kind: "message", T: () => th },
            { no: 10, name: "disable_stream_previews", kind: "message", T: () => M._t },
            { no: 11, name: "soundmoji_volume", kind: "message", T: () => M.uN },
        ]);
    }
    create(e) {
        let t = { videoBackgroundFilterDesktop: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.videoBackgroundFilterDesktop = {
                        oneofKind: "blur",
                        blur: ey.internalBinaryRead(e, e.uint32(), n, r.videoBackgroundFilterDesktop.blur),
                    };
                    break;
                case 2:
                    r.videoBackgroundFilterDesktop = { oneofKind: "presetOption", presetOption: e.uint32() };
                    break;
                case 3:
                    r.videoBackgroundFilterDesktop = {
                        oneofKind: "customAsset",
                        customAsset: eL.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.videoBackgroundFilterDesktop.customAsset,
                        ),
                    };
                    break;
                case 5:
                    r.alwaysPreviewVideo = M._t.internalBinaryRead(e, e.uint32(), n, r.alwaysPreviewVideo);
                    break;
                case 6:
                    r.afkTimeout = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.afkTimeout);
                    break;
                case 7:
                    r.streamNotificationsEnabled = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.streamNotificationsEnabled,
                    );
                    break;
                case 8:
                    r.nativePhoneIntegrationEnabled = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.nativePhoneIntegrationEnabled,
                    );
                    break;
                case 9:
                    r.soundboardSettings = th.internalBinaryRead(e, e.uint32(), n, r.soundboardSettings);
                    break;
                case 10:
                    r.disableStreamPreviews = M._t.internalBinaryRead(e, e.uint32(), n, r.disableStreamPreviews);
                    break;
                case 11:
                    r.soundmojiVolume = M.uN.internalBinaryRead(e, e.uint32(), n, r.soundmojiVolume);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "blur" === e.videoBackgroundFilterDesktop.oneofKind &&
            ey
                .internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, D.O0.LengthDelimited).fork(), n)
                .join(),
            "presetOption" === e.videoBackgroundFilterDesktop.oneofKind &&
                t.tag(2, D.O0.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption),
            "customAsset" === e.videoBackgroundFilterDesktop.oneofKind &&
                eL
                    .internalBinaryWrite(
                        e.videoBackgroundFilterDesktop.customAsset,
                        t.tag(3, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.alwaysPreviewVideo &&
                M._t.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, D.O0.LengthDelimited).fork(), n).join(),
            e.afkTimeout && M.ZQ.internalBinaryWrite(e.afkTimeout, t.tag(6, D.O0.LengthDelimited).fork(), n).join(),
            e.streamNotificationsEnabled &&
                M._t.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, D.O0.LengthDelimited).fork(), n).join(),
            e.nativePhoneIntegrationEnabled &&
                M._t
                    .internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.soundboardSettings &&
                th.internalBinaryWrite(e.soundboardSettings, t.tag(9, D.O0.LengthDelimited).fork(), n).join(),
            e.disableStreamPreviews &&
                M._t.internalBinaryWrite(e.disableStreamPreviews, t.tag(10, D.O0.LengthDelimited).fork(), n).join(),
            e.soundmojiVolume &&
                M.uN.internalBinaryWrite(e.soundmojiVolume, t.tag(11, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eb = new ev();
class eM extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ExplicitContentSettings", [
            {
                no: 1,
                name: "explicit_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
            {
                no: 2,
                name: "explicit_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
            {
                no: 3,
                name: "explicit_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
        ]);
    }
    create(e) {
        let t = { explicitContentGuilds: 0, explicitContentFriendDm: 0, explicitContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.explicitContentGuilds && t.tag(1, D.O0.Varint).int32(e.explicitContentGuilds),
            0 !== e.explicitContentFriendDm && t.tag(2, D.O0.Varint).int32(e.explicitContentFriendDm),
            0 !== e.explicitContentNonFriendDm && t.tag(3, D.O0.Varint).int32(e.explicitContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eP = new eM();
class eU extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GoreContentSettings", [
            {
                no: 1,
                name: "gore_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
            {
                no: 2,
                name: "gore_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
            {
                no: 3,
                name: "gore_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
        ]);
    }
    create(e) {
        let t = { goreContentGuilds: 0, goreContentFriendDm: 0, goreContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.goreContentGuilds && t.tag(1, D.O0.Varint).int32(e.goreContentGuilds),
            0 !== e.goreContentFriendDm && t.tag(2, D.O0.Varint).int32(e.goreContentFriendDm),
            0 !== e.goreContentNonFriendDm && t.tag(3, D.O0.Varint).int32(e.goreContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ew = new eU();
class eG extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SelfHarmContentSettings", [
            {
                no: 1,
                name: "self_harm_content_guilds",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
            {
                no: 2,
                name: "self_harm_content_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
            {
                no: 3,
                name: "self_harm_content_non_friend_dm",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ExplicitContentRedaction", x],
            },
        ]);
    }
    create(e) {
        let t = { selfHarmContentGuilds: 0, selfHarmContentFriendDm: 0, selfHarmContentNonFriendDm: 0 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.selfHarmContentGuilds && t.tag(1, D.O0.Varint).int32(e.selfHarmContentGuilds),
            0 !== e.selfHarmContentFriendDm && t.tag(2, D.O0.Varint).int32(e.selfHarmContentFriendDm),
            0 !== e.selfHarmContentNonFriendDm && t.tag(3, D.O0.Varint).int32(e.selfHarmContentNonFriendDm);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ex = new eG();
class ek extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.KeywordFilterSettings", [
            { no: 1, name: "profanity", kind: "message", T: () => M._t },
            { no: 2, name: "sexual_content", kind: "message", T: () => M._t },
            { no: 3, name: "slurs", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.profanity = M._t.internalBinaryRead(e, e.uint32(), n, r.profanity);
                    break;
                case 2:
                    r.sexualContent = M._t.internalBinaryRead(e, e.uint32(), n, r.sexualContent);
                    break;
                case 3:
                    r.slurs = M._t.internalBinaryRead(e, e.uint32(), n, r.slurs);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.profanity && M._t.internalBinaryWrite(e.profanity, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.sexualContent &&
                M._t.internalBinaryWrite(e.sexualContent, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.slurs && M._t.internalBinaryWrite(e.slurs, t.tag(3, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eF = new ek();
class eV extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.TextAndImagesSettings", [
            { no: 1, name: "diversity_surrogate", kind: "message", T: () => M.hU },
            { no: 2, name: "use_rich_chat_input", kind: "message", T: () => M._t },
            { no: 3, name: "use_thread_sidebar", kind: "message", T: () => M._t },
            { no: 4, name: "render_spoilers", kind: "message", T: () => M.hU },
            { no: 5, name: "emoji_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 6, name: "sticker_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 7, name: "view_image_descriptions", kind: "message", T: () => M._t },
            { no: 8, name: "show_command_suggestions", kind: "message", T: () => M._t },
            { no: 9, name: "inline_attachment_media", kind: "message", T: () => M._t },
            { no: 10, name: "inline_embed_media", kind: "message", T: () => M._t },
            { no: 11, name: "gif_auto_play", kind: "message", T: () => M._t },
            { no: 12, name: "render_embeds", kind: "message", T: () => M._t },
            { no: 13, name: "render_reactions", kind: "message", T: () => M._t },
            { no: 14, name: "animate_emoji", kind: "message", T: () => M._t },
            { no: 15, name: "animate_stickers", kind: "message", T: () => M.ZQ },
            { no: 16, name: "enable_tts_command", kind: "message", T: () => M._t },
            { no: 17, name: "message_display_compact", kind: "message", T: () => M._t },
            { no: 19, name: "explicit_content_filter", kind: "message", T: () => M.ZQ },
            { no: 20, name: "view_nsfw_guilds", kind: "message", T: () => M._t },
            { no: 21, name: "convert_emoticons", kind: "message", T: () => M._t },
            { no: 22, name: "expression_suggestions_enabled", kind: "message", T: () => M._t },
            { no: 23, name: "view_nsfw_commands", kind: "message", T: () => M._t },
            { no: 24, name: "use_legacy_chat_input", kind: "message", T: () => M._t },
            { no: 25, name: "soundboard_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 26, name: "dm_spam_filter", kind: "message", T: () => M.ZQ },
            {
                no: 27,
                name: "dm_spam_filter_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", k],
            },
            { no: 28, name: "include_stickers_in_autocomplete", kind: "message", T: () => M._t },
            { no: 29, name: "explicit_content_settings", kind: "message", T: () => eP },
            { no: 30, name: "keyword_filter_settings", kind: "message", T: () => eF },
            { no: 31, name: "include_soundmoji_in_autocomplete", kind: "message", T: () => M._t },
            { no: 32, name: "gore_content_settings", kind: "message", T: () => ew },
            { no: 33, name: "default_reaction_emoji", kind: "message", T: () => tY },
            { no: 34, name: "show_mention_suggestions", kind: "message", T: () => M._t },
            { no: 35, name: "self_harm_content_settings", kind: "message", T: () => ex },
            { no: 36, name: "is_cross_dm_search_enabled", kind: "message", T: () => M._t },
            {
                no: 37,
                name: "search_provider",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SearchProvider", H, "SEARCH_PROVIDER_"],
            },
            { no: 38, name: "custom_search_url", kind: "message", T: () => M.hU },
            { no: 39, name: "include_game_mentions_in_autocomplete", kind: "message", T: () => M._t },
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.diversitySurrogate = M.hU.internalBinaryRead(e, e.uint32(), n, r.diversitySurrogate);
                    break;
                case 2:
                    r.useRichChatInput = M._t.internalBinaryRead(e, e.uint32(), n, r.useRichChatInput);
                    break;
                case 3:
                    r.useThreadSidebar = M._t.internalBinaryRead(e, e.uint32(), n, r.useThreadSidebar);
                    break;
                case 4:
                    r.renderSpoilers = M.hU.internalBinaryRead(e, e.uint32(), n, r.renderSpoilers);
                    break;
                case 5:
                    r.emojiPickerCollapsedSections.push(e.string());
                    break;
                case 6:
                    r.stickerPickerCollapsedSections.push(e.string());
                    break;
                case 7:
                    r.viewImageDescriptions = M._t.internalBinaryRead(e, e.uint32(), n, r.viewImageDescriptions);
                    break;
                case 8:
                    r.showCommandSuggestions = M._t.internalBinaryRead(e, e.uint32(), n, r.showCommandSuggestions);
                    break;
                case 9:
                    r.inlineAttachmentMedia = M._t.internalBinaryRead(e, e.uint32(), n, r.inlineAttachmentMedia);
                    break;
                case 10:
                    r.inlineEmbedMedia = M._t.internalBinaryRead(e, e.uint32(), n, r.inlineEmbedMedia);
                    break;
                case 11:
                    r.gifAutoPlay = M._t.internalBinaryRead(e, e.uint32(), n, r.gifAutoPlay);
                    break;
                case 12:
                    r.renderEmbeds = M._t.internalBinaryRead(e, e.uint32(), n, r.renderEmbeds);
                    break;
                case 13:
                    r.renderReactions = M._t.internalBinaryRead(e, e.uint32(), n, r.renderReactions);
                    break;
                case 14:
                    r.animateEmoji = M._t.internalBinaryRead(e, e.uint32(), n, r.animateEmoji);
                    break;
                case 15:
                    r.animateStickers = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.animateStickers);
                    break;
                case 16:
                    r.enableTtsCommand = M._t.internalBinaryRead(e, e.uint32(), n, r.enableTtsCommand);
                    break;
                case 17:
                    r.messageDisplayCompact = M._t.internalBinaryRead(e, e.uint32(), n, r.messageDisplayCompact);
                    break;
                case 19:
                    r.explicitContentFilter = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.explicitContentFilter);
                    break;
                case 20:
                    r.viewNsfwGuilds = M._t.internalBinaryRead(e, e.uint32(), n, r.viewNsfwGuilds);
                    break;
                case 21:
                    r.convertEmoticons = M._t.internalBinaryRead(e, e.uint32(), n, r.convertEmoticons);
                    break;
                case 22:
                    r.expressionSuggestionsEnabled = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.expressionSuggestionsEnabled,
                    );
                    break;
                case 23:
                    r.viewNsfwCommands = M._t.internalBinaryRead(e, e.uint32(), n, r.viewNsfwCommands);
                    break;
                case 24:
                    r.useLegacyChatInput = M._t.internalBinaryRead(e, e.uint32(), n, r.useLegacyChatInput);
                    break;
                case 25:
                    r.soundboardPickerCollapsedSections.push(e.string());
                    break;
                case 26:
                    r.dmSpamFilter = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.dmSpamFilter);
                    break;
                case 27:
                    r.dmSpamFilterV2 = e.int32();
                    break;
                case 28:
                    r.includeStickersInAutocomplete = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.includeStickersInAutocomplete,
                    );
                    break;
                case 29:
                    r.explicitContentSettings = eP.internalBinaryRead(e, e.uint32(), n, r.explicitContentSettings);
                    break;
                case 30:
                    r.keywordFilterSettings = eF.internalBinaryRead(e, e.uint32(), n, r.keywordFilterSettings);
                    break;
                case 31:
                    r.includeSoundmojiInAutocomplete = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.includeSoundmojiInAutocomplete,
                    );
                    break;
                case 32:
                    r.goreContentSettings = ew.internalBinaryRead(e, e.uint32(), n, r.goreContentSettings);
                    break;
                case 33:
                    r.defaultReactionEmoji = tY.internalBinaryRead(e, e.uint32(), n, r.defaultReactionEmoji);
                    break;
                case 34:
                    r.showMentionSuggestions = M._t.internalBinaryRead(e, e.uint32(), n, r.showMentionSuggestions);
                    break;
                case 35:
                    r.selfHarmContentSettings = ex.internalBinaryRead(e, e.uint32(), n, r.selfHarmContentSettings);
                    break;
                case 36:
                    r.isCrossDmSearchEnabled = M._t.internalBinaryRead(e, e.uint32(), n, r.isCrossDmSearchEnabled);
                    break;
                case 37:
                    r.searchProvider = e.int32();
                    break;
                case 38:
                    r.customSearchUrl = M.hU.internalBinaryRead(e, e.uint32(), n, r.customSearchUrl);
                    break;
                case 39:
                    r.includeGameMentionsInAutocomplete = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.includeGameMentionsInAutocomplete,
                    );
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.diversitySurrogate &&
            M.hU.internalBinaryWrite(e.diversitySurrogate, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.useRichChatInput &&
                M._t.internalBinaryWrite(e.useRichChatInput, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.useThreadSidebar &&
                M._t.internalBinaryWrite(e.useThreadSidebar, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
            e.renderSpoilers &&
                M.hU.internalBinaryWrite(e.renderSpoilers, t.tag(4, D.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++)
            t.tag(5, D.O0.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
        for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++)
            t.tag(6, D.O0.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
        e.viewImageDescriptions &&
            M._t.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, D.O0.LengthDelimited).fork(), n).join(),
            e.showCommandSuggestions &&
                M._t.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, D.O0.LengthDelimited).fork(), n).join(),
            e.inlineAttachmentMedia &&
                M._t.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, D.O0.LengthDelimited).fork(), n).join(),
            e.inlineEmbedMedia &&
                M._t.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, D.O0.LengthDelimited).fork(), n).join(),
            e.gifAutoPlay && M._t.internalBinaryWrite(e.gifAutoPlay, t.tag(11, D.O0.LengthDelimited).fork(), n).join(),
            e.renderEmbeds &&
                M._t.internalBinaryWrite(e.renderEmbeds, t.tag(12, D.O0.LengthDelimited).fork(), n).join(),
            e.renderReactions &&
                M._t.internalBinaryWrite(e.renderReactions, t.tag(13, D.O0.LengthDelimited).fork(), n).join(),
            e.animateEmoji &&
                M._t.internalBinaryWrite(e.animateEmoji, t.tag(14, D.O0.LengthDelimited).fork(), n).join(),
            e.animateStickers &&
                M.ZQ.internalBinaryWrite(e.animateStickers, t.tag(15, D.O0.LengthDelimited).fork(), n).join(),
            e.enableTtsCommand &&
                M._t.internalBinaryWrite(e.enableTtsCommand, t.tag(16, D.O0.LengthDelimited).fork(), n).join(),
            e.messageDisplayCompact &&
                M._t.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, D.O0.LengthDelimited).fork(), n).join(),
            e.explicitContentFilter &&
                M.ZQ.internalBinaryWrite(e.explicitContentFilter, t.tag(19, D.O0.LengthDelimited).fork(), n).join(),
            e.viewNsfwGuilds &&
                M._t.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, D.O0.LengthDelimited).fork(), n).join(),
            e.convertEmoticons &&
                M._t.internalBinaryWrite(e.convertEmoticons, t.tag(21, D.O0.LengthDelimited).fork(), n).join(),
            e.expressionSuggestionsEnabled &&
                M._t
                    .internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.viewNsfwCommands &&
                M._t.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, D.O0.LengthDelimited).fork(), n).join(),
            e.useLegacyChatInput &&
                M._t.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, D.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++)
            t.tag(25, D.O0.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
        e.dmSpamFilter && M.ZQ.internalBinaryWrite(e.dmSpamFilter, t.tag(26, D.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dmSpamFilterV2 && t.tag(27, D.O0.Varint).int32(e.dmSpamFilterV2),
            e.includeStickersInAutocomplete &&
                M._t
                    .internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.explicitContentSettings &&
                eP.internalBinaryWrite(e.explicitContentSettings, t.tag(29, D.O0.LengthDelimited).fork(), n).join(),
            e.keywordFilterSettings &&
                eF.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, D.O0.LengthDelimited).fork(), n).join(),
            e.includeSoundmojiInAutocomplete &&
                M._t
                    .internalBinaryWrite(e.includeSoundmojiInAutocomplete, t.tag(31, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.goreContentSettings &&
                ew.internalBinaryWrite(e.goreContentSettings, t.tag(32, D.O0.LengthDelimited).fork(), n).join(),
            e.defaultReactionEmoji &&
                tY.internalBinaryWrite(e.defaultReactionEmoji, t.tag(33, D.O0.LengthDelimited).fork(), n).join(),
            e.showMentionSuggestions &&
                M._t.internalBinaryWrite(e.showMentionSuggestions, t.tag(34, D.O0.LengthDelimited).fork(), n).join(),
            e.selfHarmContentSettings &&
                ex.internalBinaryWrite(e.selfHarmContentSettings, t.tag(35, D.O0.LengthDelimited).fork(), n).join(),
            e.isCrossDmSearchEnabled &&
                M._t.internalBinaryWrite(e.isCrossDmSearchEnabled, t.tag(36, D.O0.LengthDelimited).fork(), n).join(),
            0 !== e.searchProvider && t.tag(37, D.O0.Varint).int32(e.searchProvider),
            e.customSearchUrl &&
                M.hU.internalBinaryWrite(e.customSearchUrl, t.tag(38, D.O0.LengthDelimited).fork(), n).join(),
            e.includeGameMentionsInAutocomplete &&
                M._t
                    .internalBinaryWrite(e.includeGameMentionsInAutocomplete, t.tag(39, D.O0.LengthDelimited).fork(), n)
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eB = new eV();
class eH extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.NotificationSettings", [
            { no: 1, name: "show_in_app_notifications", kind: "message", T: () => M._t },
            { no: 2, name: "notify_friends_on_go_live", kind: "message", T: () => M._t },
            { no: 3, name: "notification_center_acked_before_id", kind: "scalar", T: 6 },
            { no: 4, name: "enable_burst_reaction_notifications", kind: "message", T: () => M._t },
            { no: 5, name: "quiet_mode", kind: "message", T: () => M._t },
            { no: 6, name: "focus_mode_expires_at_ms", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "reaction_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ReactionNotificationType", F],
            },
            {
                no: 8,
                name: "game_activity_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GameActivityNotificationType", V],
            },
            {
                no: 9,
                name: "custom_status_push_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.CustomStatusPushNotificationType", B],
            },
            { no: 10, name: "game_activity_exclude_steam_notifications", kind: "message", T: () => M._t },
            { no: 11, name: "enable_voice_activity_notifications", kind: "message", T: () => M._t },
            { no: 12, name: "enable_friend_online_notifications", kind: "message", T: () => M._t },
            { no: 13, name: "enable_user_resurrection_notifications", kind: "message", T: () => M._t },
            { no: 14, name: "enable_friend_anniversary_notifications", kind: "message", T: () => M._t },
            { no: 15, name: "enable_game_update_notifications", kind: "message", T: () => M._t },
            { no: 16, name: "enable_profile_updates_notifications", kind: "message", T: () => M._t },
            { no: 17, name: "enable_server_trending_notifications", kind: "message", T: () => M._t },
            { no: 18, name: "enable_dm_reply_nudge_reminders", kind: "message", T: () => M._t },
            { no: 19, name: "enable_summary_reminder_notifications", kind: "message", T: () => M._t },
            { no: 20, name: "enable_gdm_all_reaction_notifications", kind: "message", T: () => M._t },
            { no: 21, name: "enable_friend_gaming_activity_notifications", kind: "message", T: () => M._t },
            { no: 22, name: "enable_upcoming_server_event_notifications", kind: "message", T: () => M._t },
            { no: 23, name: "enable_screen_downtime_schedule_notifications", kind: "message", T: () => M._t },
            { no: 24, name: "notify_friends_on_profile_update", kind: "message", T: () => M._t },
            { no: 25, name: "notify_friends_on_come_online", kind: "message", T: () => M._t },
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.showInAppNotifications = M._t.internalBinaryRead(e, e.uint32(), n, r.showInAppNotifications);
                    break;
                case 2:
                    r.notifyFriendsOnGoLive = M._t.internalBinaryRead(e, e.uint32(), n, r.notifyFriendsOnGoLive);
                    break;
                case 3:
                    r.notificationCenterAckedBeforeId = e.fixed64().toString();
                    break;
                case 4:
                    r.enableBurstReactionNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableBurstReactionNotifications,
                    );
                    break;
                case 5:
                    r.quietMode = M._t.internalBinaryRead(e, e.uint32(), n, r.quietMode);
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
                    r.gameActivityExcludeSteamNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.gameActivityExcludeSteamNotifications,
                    );
                    break;
                case 11:
                    r.enableVoiceActivityNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableVoiceActivityNotifications,
                    );
                    break;
                case 12:
                    r.enableFriendOnlineNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableFriendOnlineNotifications,
                    );
                    break;
                case 13:
                    r.enableUserResurrectionNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableUserResurrectionNotifications,
                    );
                    break;
                case 14:
                    r.enableFriendAnniversaryNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableFriendAnniversaryNotifications,
                    );
                    break;
                case 15:
                    r.enableGameUpdateNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableGameUpdateNotifications,
                    );
                    break;
                case 16:
                    r.enableProfileUpdatesNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableProfileUpdatesNotifications,
                    );
                    break;
                case 17:
                    r.enableServerTrendingNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableServerTrendingNotifications,
                    );
                    break;
                case 18:
                    r.enableDmReplyNudgeReminders = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableDmReplyNudgeReminders,
                    );
                    break;
                case 19:
                    r.enableSummaryReminderNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableSummaryReminderNotifications,
                    );
                    break;
                case 20:
                    r.enableGdmAllReactionNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableGdmAllReactionNotifications,
                    );
                    break;
                case 21:
                    r.enableFriendGamingActivityNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableFriendGamingActivityNotifications,
                    );
                    break;
                case 22:
                    r.enableUpcomingServerEventNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableUpcomingServerEventNotifications,
                    );
                    break;
                case 23:
                    r.enableScreenDowntimeScheduleNotifications = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.enableScreenDowntimeScheduleNotifications,
                    );
                    break;
                case 24:
                    r.notifyFriendsOnProfileUpdate = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.notifyFriendsOnProfileUpdate,
                    );
                    break;
                case 25:
                    r.notifyFriendsOnComeOnline = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.notifyFriendsOnComeOnline,
                    );
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.showInAppNotifications &&
            M._t.internalBinaryWrite(e.showInAppNotifications, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.notifyFriendsOnGoLive &&
                M._t.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.notificationCenterAckedBeforeId &&
                t.tag(3, D.O0.Bit64).fixed64(e.notificationCenterAckedBeforeId),
            e.enableBurstReactionNotifications &&
                M._t
                    .internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.quietMode && M._t.internalBinaryWrite(e.quietMode, t.tag(5, D.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.focusModeExpiresAtMs && t.tag(6, D.O0.Bit64).fixed64(e.focusModeExpiresAtMs),
            0 !== e.reactionNotifications && t.tag(7, D.O0.Varint).int32(e.reactionNotifications),
            0 !== e.gameActivityNotifications && t.tag(8, D.O0.Varint).int32(e.gameActivityNotifications),
            0 !== e.customStatusPushNotifications && t.tag(9, D.O0.Varint).int32(e.customStatusPushNotifications),
            e.gameActivityExcludeSteamNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.gameActivityExcludeSteamNotifications,
                        t.tag(10, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableVoiceActivityNotifications &&
                M._t
                    .internalBinaryWrite(e.enableVoiceActivityNotifications, t.tag(11, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendOnlineNotifications &&
                M._t
                    .internalBinaryWrite(e.enableFriendOnlineNotifications, t.tag(12, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableUserResurrectionNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.enableUserResurrectionNotifications,
                        t.tag(13, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableFriendAnniversaryNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.enableFriendAnniversaryNotifications,
                        t.tag(14, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGameUpdateNotifications &&
                M._t
                    .internalBinaryWrite(e.enableGameUpdateNotifications, t.tag(15, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableProfileUpdatesNotifications &&
                M._t
                    .internalBinaryWrite(e.enableProfileUpdatesNotifications, t.tag(16, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableServerTrendingNotifications &&
                M._t
                    .internalBinaryWrite(e.enableServerTrendingNotifications, t.tag(17, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableDmReplyNudgeReminders &&
                M._t
                    .internalBinaryWrite(e.enableDmReplyNudgeReminders, t.tag(18, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableSummaryReminderNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.enableSummaryReminderNotifications,
                        t.tag(19, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGdmAllReactionNotifications &&
                M._t
                    .internalBinaryWrite(e.enableGdmAllReactionNotifications, t.tag(20, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendGamingActivityNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.enableFriendGamingActivityNotifications,
                        t.tag(21, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableUpcomingServerEventNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.enableUpcomingServerEventNotifications,
                        t.tag(22, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableScreenDowntimeScheduleNotifications &&
                M._t
                    .internalBinaryWrite(
                        e.enableScreenDowntimeScheduleNotifications,
                        t.tag(23, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.notifyFriendsOnProfileUpdate &&
                M._t
                    .internalBinaryWrite(e.notifyFriendsOnProfileUpdate, t.tag(24, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.notifyFriendsOnComeOnline &&
                M._t.internalBinaryWrite(e.notifyFriendsOnComeOnline, t.tag(25, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ej = new eH();
class eW extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.PrivacySettings", [
            { no: 1, name: "allow_activity_party_privacy_friends", kind: "message", T: () => M._t },
            { no: 2, name: "allow_activity_party_privacy_voice_channel", kind: "message", T: () => M._t },
            { no: 3, name: "restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "default_guilds_restricted", kind: "scalar", T: 8 },
            { no: 7, name: "allow_accessibility_detection", kind: "scalar", T: 8 },
            { no: 8, name: "detect_platform_accounts", kind: "message", T: () => M._t },
            { no: 9, name: "passwordless", kind: "message", T: () => M._t },
            { no: 10, name: "contact_sync_enabled", kind: "message", T: () => M._t },
            { no: 11, name: "friend_source_flags", kind: "message", T: () => M.ZQ },
            { no: 12, name: "friend_discovery_flags", kind: "message", T: () => M.ZQ },
            { no: 13, name: "activity_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            {
                no: 14,
                name: "default_guilds_activity_restricted",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", j],
            },
            { no: 15, name: "activity_joining_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 16, name: "message_request_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 17, name: "default_message_request_restricted", kind: "message", T: () => M._t },
            { no: 18, name: "drops_opted_out", kind: "message", T: () => M._t },
            { no: 19, name: "non_spam_retraining_opt_in", kind: "message", T: () => M._t },
            { no: 20, name: "family_center_enabled", kind: "message", T: () => M._t },
            { no: 21, name: "family_center_enabled_v2", kind: "message", T: () => M._t },
            { no: 22, name: "hide_legacy_username", kind: "message", T: () => M._t },
            { no: 23, name: "inappropriate_conversation_warnings", kind: "message", T: () => M._t },
            { no: 24, name: "recent_games_enabled", kind: "message", T: () => M._t },
            {
                no: 25,
                name: "guilds_leaderboard_opt_out_default",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", Y],
            },
            { no: 26, name: "allow_game_friend_dms_in_discord", kind: "message", T: () => M._t },
            { no: 27, name: "default_guilds_restricted_v2", kind: "message", T: () => M._t },
            {
                no: 28,
                name: "slayer_sdk_receive_dms_in_game",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SlayerSDKReceiveInGameDMs", K],
            },
            {
                no: 29,
                name: "default_guilds_activity_restricted_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2", W],
            },
            {
                no: 30,
                name: "quests_3p_data_opted_out",
                kind: "message",
                jsonName: "quests3pDataOptedOut",
                T: () => M._t,
            },
            { no: 31, name: "show_local_time", kind: "message", T: () => M._t },
            {
                no: 32,
                name: "profile_visibility",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ProfileVisibility", $, "PROFILE_VISIBILITY_"],
            },
            { no: 33, name: "hide_friend_request_notes", kind: "message", T: () => M._t },
            {
                no: 34,
                name: "ad_topic_opt_outs",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_users.v1.AdTopic", z, "AD_TOPIC_"],
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
            adTopicOptOuts: [],
        };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.allowActivityPartyPrivacyFriends = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.allowActivityPartyPrivacyFriends,
                    );
                    break;
                case 2:
                    r.allowActivityPartyPrivacyVoiceChannel = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.allowActivityPartyPrivacyVoiceChannel,
                    );
                    break;
                case 3:
                    if (i === D.O0.LengthDelimited)
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
                    r.detectPlatformAccounts = M._t.internalBinaryRead(e, e.uint32(), n, r.detectPlatformAccounts);
                    break;
                case 9:
                    r.passwordless = M._t.internalBinaryRead(e, e.uint32(), n, r.passwordless);
                    break;
                case 10:
                    r.contactSyncEnabled = M._t.internalBinaryRead(e, e.uint32(), n, r.contactSyncEnabled);
                    break;
                case 11:
                    r.friendSourceFlags = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.friendSourceFlags);
                    break;
                case 12:
                    r.friendDiscoveryFlags = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.friendDiscoveryFlags);
                    break;
                case 13:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            r.activityRestrictedGuildIds.push(e.fixed64().toString());
                    else r.activityRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 14:
                    r.defaultGuildsActivityRestricted = e.int32();
                    break;
                case 15:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    else r.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 16:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    else r.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 17:
                    r.defaultMessageRequestRestricted = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.defaultMessageRequestRestricted,
                    );
                    break;
                case 18:
                    r.dropsOptedOut = M._t.internalBinaryRead(e, e.uint32(), n, r.dropsOptedOut);
                    break;
                case 19:
                    r.nonSpamRetrainingOptIn = M._t.internalBinaryRead(e, e.uint32(), n, r.nonSpamRetrainingOptIn);
                    break;
                case 20:
                    r.familyCenterEnabled = M._t.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabled);
                    break;
                case 21:
                    r.familyCenterEnabledV2 = M._t.internalBinaryRead(e, e.uint32(), n, r.familyCenterEnabledV2);
                    break;
                case 22:
                    r.hideLegacyUsername = M._t.internalBinaryRead(e, e.uint32(), n, r.hideLegacyUsername);
                    break;
                case 23:
                    r.inappropriateConversationWarnings = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.inappropriateConversationWarnings,
                    );
                    break;
                case 24:
                    r.recentGamesEnabled = M._t.internalBinaryRead(e, e.uint32(), n, r.recentGamesEnabled);
                    break;
                case 25:
                    r.guildsLeaderboardOptOutDefault = e.int32();
                    break;
                case 26:
                    r.allowGameFriendDmsInDiscord = M._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.allowGameFriendDmsInDiscord,
                    );
                    break;
                case 27:
                    r.defaultGuildsRestrictedV2 = M._t.internalBinaryRead(
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
                    r.quests3PDataOptedOut = M._t.internalBinaryRead(e, e.uint32(), n, r.quests3PDataOptedOut);
                    break;
                case 31:
                    r.showLocalTime = M._t.internalBinaryRead(e, e.uint32(), n, r.showLocalTime);
                    break;
                case 32:
                    r.profileVisibility = e.int32();
                    break;
                case 33:
                    r.hideFriendRequestNotes = M._t.internalBinaryRead(e, e.uint32(), n, r.hideFriendRequestNotes);
                    break;
                case 34:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.adTopicOptOuts.push(e.int32());
                    else r.adTopicOptOuts.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowActivityPartyPrivacyFriends &&
                M._t
                    .internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.allowActivityPartyPrivacyVoiceChannel &&
                M._t
                    .internalBinaryWrite(
                        e.allowActivityPartyPrivacyVoiceChannel,
                        t.tag(2, D.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.restrictedGuildIds.length)
        ) {
            t.tag(3, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
            t.join();
        }
        if (
            (!1 !== e.defaultGuildsRestricted && t.tag(4, D.O0.Varint).bool(e.defaultGuildsRestricted),
            !1 !== e.allowAccessibilityDetection && t.tag(7, D.O0.Varint).bool(e.allowAccessibilityDetection),
            e.detectPlatformAccounts &&
                M._t.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, D.O0.LengthDelimited).fork(), n).join(),
            e.passwordless && M._t.internalBinaryWrite(e.passwordless, t.tag(9, D.O0.LengthDelimited).fork(), n).join(),
            e.contactSyncEnabled &&
                M._t.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, D.O0.LengthDelimited).fork(), n).join(),
            e.friendSourceFlags &&
                M.ZQ.internalBinaryWrite(e.friendSourceFlags, t.tag(11, D.O0.LengthDelimited).fork(), n).join(),
            e.friendDiscoveryFlags &&
                M.ZQ.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, D.O0.LengthDelimited).fork(), n).join(),
            e.activityRestrictedGuildIds.length)
        ) {
            t.tag(13, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
            t.join();
        }
        if (
            (0 !== e.defaultGuildsActivityRestricted && t.tag(14, D.O0.Varint).int32(e.defaultGuildsActivityRestricted),
            e.activityJoiningRestrictedGuildIds.length)
        ) {
            t.tag(15, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++)
                t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
            t.join();
        }
        if (e.messageRequestRestrictedGuildIds.length) {
            t.tag(16, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++)
                t.fixed64(e.messageRequestRestrictedGuildIds[n]);
            t.join();
        }
        if (
            (e.defaultMessageRequestRestricted &&
                M._t
                    .internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.dropsOptedOut &&
                M._t.internalBinaryWrite(e.dropsOptedOut, t.tag(18, D.O0.LengthDelimited).fork(), n).join(),
            e.nonSpamRetrainingOptIn &&
                M._t.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, D.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabled &&
                M._t.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, D.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabledV2 &&
                M._t.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, D.O0.LengthDelimited).fork(), n).join(),
            e.hideLegacyUsername &&
                M._t.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, D.O0.LengthDelimited).fork(), n).join(),
            e.inappropriateConversationWarnings &&
                M._t
                    .internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.recentGamesEnabled &&
                M._t.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, D.O0.LengthDelimited).fork(), n).join(),
            0 !== e.guildsLeaderboardOptOutDefault && t.tag(25, D.O0.Varint).int32(e.guildsLeaderboardOptOutDefault),
            e.allowGameFriendDmsInDiscord &&
                M._t
                    .internalBinaryWrite(e.allowGameFriendDmsInDiscord, t.tag(26, D.O0.LengthDelimited).fork(), n)
                    .join(),
            e.defaultGuildsRestrictedV2 &&
                M._t.internalBinaryWrite(e.defaultGuildsRestrictedV2, t.tag(27, D.O0.LengthDelimited).fork(), n).join(),
            0 !== e.slayerSdkReceiveDmsInGame && t.tag(28, D.O0.Varint).int32(e.slayerSdkReceiveDmsInGame),
            0 !== e.defaultGuildsActivityRestrictedV2 &&
                t.tag(29, D.O0.Varint).int32(e.defaultGuildsActivityRestrictedV2),
            e.quests3PDataOptedOut &&
                M._t.internalBinaryWrite(e.quests3PDataOptedOut, t.tag(30, D.O0.LengthDelimited).fork(), n).join(),
            e.showLocalTime &&
                M._t.internalBinaryWrite(e.showLocalTime, t.tag(31, D.O0.LengthDelimited).fork(), n).join(),
            0 !== e.profileVisibility && t.tag(32, D.O0.Varint).int32(e.profileVisibility),
            e.hideFriendRequestNotes &&
                M._t.internalBinaryWrite(e.hideFriendRequestNotes, t.tag(33, D.O0.LengthDelimited).fork(), n).join(),
            e.adTopicOptOuts.length)
        ) {
            t.tag(34, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.adTopicOptOuts.length; n++) t.int32(e.adTopicOptOuts[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eY = new eW();
class eK extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.DebugSettings", [
            { no: 1, name: "rtc_panel_show_voice_states", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                r.rtcPanelShowVoiceStates = M._t.internalBinaryRead(e, e.uint32(), n, r.rtcPanelShowVoiceStates);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.rtcPanelShowVoiceStates &&
            M._t.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e$ = new eK();
class ez extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GameLibrarySettings", [
            { no: 1, name: "install_shortcut_desktop", kind: "message", T: () => M._t },
            { no: 2, name: "install_shortcut_start_menu", kind: "message", T: () => M._t },
            { no: 3, name: "disable_games_tab", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.installShortcutDesktop = M._t.internalBinaryRead(e, e.uint32(), n, r.installShortcutDesktop);
                    break;
                case 2:
                    r.installShortcutStartMenu = M._t.internalBinaryRead(e, e.uint32(), n, r.installShortcutStartMenu);
                    break;
                case 3:
                    r.disableGamesTab = M._t.internalBinaryRead(e, e.uint32(), n, r.disableGamesTab);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.installShortcutDesktop &&
            M._t.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.installShortcutStartMenu &&
                M._t.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.disableGamesTab &&
                M._t.internalBinaryWrite(e.disableGamesTab, t.tag(3, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eZ = new ez();
class eq extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.StatusSettings", [
            { no: 1, name: "status", kind: "message", T: () => M.hU },
            { no: 2, name: "custom_status", kind: "message", T: () => eJ },
            { no: 3, name: "show_current_game", kind: "message", T: () => M._t },
            { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "status_created_at_ms", kind: "message", T: () => M.ol },
        ]);
    }
    create(e) {
        let t = { statusExpiresAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.status = M.hU.internalBinaryRead(e, e.uint32(), n, r.status);
                    break;
                case 2:
                    r.customStatus = eJ.internalBinaryRead(e, e.uint32(), n, r.customStatus);
                    break;
                case 3:
                    r.showCurrentGame = M._t.internalBinaryRead(e, e.uint32(), n, r.showCurrentGame);
                    break;
                case 4:
                    r.statusExpiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    r.statusCreatedAtMs = M.ol.internalBinaryRead(e, e.uint32(), n, r.statusCreatedAtMs);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.status && M.hU.internalBinaryWrite(e.status, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.customStatus && eJ.internalBinaryWrite(e.customStatus, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.showCurrentGame &&
                M._t.internalBinaryWrite(e.showCurrentGame, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.statusExpiresAtMs && t.tag(4, D.O0.Bit64).fixed64(e.statusExpiresAtMs),
            e.statusCreatedAtMs &&
                M.ol.internalBinaryWrite(e.statusCreatedAtMs, t.tag(5, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eX = new eq();
class eQ extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomStatus", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "emoji_id", kind: "scalar", T: 6 },
            { no: 3, name: "emoji_name", kind: "scalar", T: 9 },
            { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "created_at_ms", kind: "scalar", T: 6 },
            { no: 6, name: "label", kind: "message", T: () => M.hU },
        ]);
    }
    create(e) {
        let t = { text: "", emojiId: "0", emojiName: "", expiresAtMs: "0", createdAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    r.label = M.hU.internalBinaryRead(e, e.uint32(), n, r.label);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.text && t.tag(1, D.O0.LengthDelimited).string(e.text),
            "0" !== e.emojiId && t.tag(2, D.O0.Bit64).fixed64(e.emojiId),
            "" !== e.emojiName && t.tag(3, D.O0.LengthDelimited).string(e.emojiName),
            "0" !== e.expiresAtMs && t.tag(4, D.O0.Bit64).fixed64(e.expiresAtMs),
            "0" !== e.createdAtMs && t.tag(5, D.O0.Bit64).fixed64(e.createdAtMs),
            e.label && M.hU.internalBinaryWrite(e.label, t.tag(6, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eJ = new eQ();
class e0 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.LocalizationSettings", [
            { no: 1, name: "locale", kind: "message", T: () => M.hU },
            { no: 2, name: "timezone_offset", kind: "message", T: () => M.as },
            { no: 3, name: "timezone_name", kind: "message", T: () => M.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.locale = M.hU.internalBinaryRead(e, e.uint32(), n, r.locale);
                    break;
                case 2:
                    r.timezoneOffset = M.as.internalBinaryRead(e, e.uint32(), n, r.timezoneOffset);
                    break;
                case 3:
                    r.timezoneName = M.hU.internalBinaryRead(e, e.uint32(), n, r.timezoneName);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.locale && M.hU.internalBinaryWrite(e.locale, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.timezoneOffset &&
                M.as.internalBinaryWrite(e.timezoneOffset, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.timezoneName && M.hU.internalBinaryWrite(e.timezoneName, t.tag(3, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e1 = new e0();
class e2 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelListSettings", [
            { no: 1, name: "layout", kind: "message", T: () => M.hU },
            { no: 2, name: "message_previews", kind: "message", T: () => M.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.layout = M.hU.internalBinaryRead(e, e.uint32(), n, r.layout);
                    break;
                case 2:
                    r.messagePreviews = M.hU.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.layout && M.hU.internalBinaryWrite(e.layout, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                M.hU.internalBinaryWrite(e.messagePreviews, t.tag(2, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e3 = new e2();
class e4 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AppearanceSettings", [
            { no: 1, name: "theme", kind: "enum", T: () => ["discord_protos.discord_users.v1.Theme", X] },
            { no: 2, name: "developer_mode", kind: "scalar", T: 8 },
            { no: 3, name: "client_theme_settings", kind: "message", T: () => e9 },
            { no: 4, name: "mobile_redesign_disabled", kind: "scalar", T: 8 },
            { no: 6, name: "channel_list_layout", kind: "message", T: () => M.hU },
            { no: 7, name: "message_previews", kind: "message", T: () => M.hU },
            { no: 8, name: "search_result_exact_count_enabled", kind: "message", T: () => M._t },
            {
                no: 9,
                name: "timestamp_hour_cycle",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.TimestampHourCycle", J],
            },
            { no: 10, name: "happening_now_cards_disabled", kind: "message", T: () => M._t },
            {
                no: 11,
                name: "launch_pad_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.LaunchPadMode", ee],
            },
            { no: 12, name: "ui_density", kind: "enum", T: () => ["discord_protos.discord_users.v1.UIDensity", q] },
            {
                no: 13,
                name: "swipe_right_to_left_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SwipeRightToLeftMode", et],
            },
            {
                no: 14,
                name: "default_guild_theme_preference",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_users.v1.GuildThemeSourcePreference",
                    Z,
                    "GUILD_THEME_SOURCE_PREFERENCE_",
                ],
            },
            { no: 15, name: "dark_sidebar", kind: "scalar", T: 8 },
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
            darkSidebar: !1,
        };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.theme = e.int32();
                    break;
                case 2:
                    r.developerMode = e.bool();
                    break;
                case 3:
                    r.clientThemeSettings = e9.internalBinaryRead(e, e.uint32(), n, r.clientThemeSettings);
                    break;
                case 4:
                    r.mobileRedesignDisabled = e.bool();
                    break;
                case 6:
                    r.channelListLayout = M.hU.internalBinaryRead(e, e.uint32(), n, r.channelListLayout);
                    break;
                case 7:
                    r.messagePreviews = M.hU.internalBinaryRead(e, e.uint32(), n, r.messagePreviews);
                    break;
                case 8:
                    r.searchResultExactCountEnabled = M._t.internalBinaryRead(
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
                    r.happeningNowCardsDisabled = M._t.internalBinaryRead(
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
                case 15:
                    r.darkSidebar = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.theme && t.tag(1, D.O0.Varint).int32(e.theme),
            !1 !== e.developerMode && t.tag(2, D.O0.Varint).bool(e.developerMode),
            e.clientThemeSettings &&
                e9.internalBinaryWrite(e.clientThemeSettings, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.mobileRedesignDisabled && t.tag(4, D.O0.Varint).bool(e.mobileRedesignDisabled),
            e.channelListLayout &&
                M.hU.internalBinaryWrite(e.channelListLayout, t.tag(6, D.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                M.hU.internalBinaryWrite(e.messagePreviews, t.tag(7, D.O0.LengthDelimited).fork(), n).join(),
            e.searchResultExactCountEnabled &&
                M._t
                    .internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, D.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.timestampHourCycle && t.tag(9, D.O0.Varint).int32(e.timestampHourCycle),
            e.happeningNowCardsDisabled &&
                M._t.internalBinaryWrite(e.happeningNowCardsDisabled, t.tag(10, D.O0.LengthDelimited).fork(), n).join(),
            0 !== e.launchPadMode && t.tag(11, D.O0.Varint).int32(e.launchPadMode),
            0 !== e.uiDensity && t.tag(12, D.O0.Varint).int32(e.uiDensity),
            0 !== e.swipeRightToLeftMode && t.tag(13, D.O0.Varint).int32(e.swipeRightToLeftMode),
            0 !== e.defaultGuildThemePreference && t.tag(14, D.O0.Varint).int32(e.defaultGuildThemePreference),
            !1 !== e.darkSidebar && t.tag(15, D.O0.Varint).bool(e.darkSidebar);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e5 = new e4();
class e6 extends b.G {
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.colors.push(e.string());
                    break;
                case 2:
                    if (i === D.O0.LengthDelimited)
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, D.O0.LengthDelimited).string(e.colors[n]);
        if (e.gradientColorStops.length) {
            t.tag(2, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.gradientColorStops.length; n++) t.float(e.gradientColorStops[n]);
            t.join();
        }
        0 !== e.gradientAngle && t.tag(3, D.O0.Varint).int32(e.gradientAngle),
            0 !== e.baseMix && t.tag(4, D.O0.Varint).int32(e.baseMix);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e7 = new e6();
class e8 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClientThemeSettings", [
            { no: 2, name: "background_gradient_preset_id", kind: "message", T: () => M.ZQ },
            { no: 4, name: "custom_user_theme_settings", kind: "message", T: () => e7 },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 2:
                    r.backgroundGradientPresetId = M.ZQ.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.backgroundGradientPresetId,
                    );
                    break;
                case 4:
                    r.customUserThemeSettings = e7.internalBinaryRead(e, e.uint32(), n, r.customUserThemeSettings);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.backgroundGradientPresetId &&
            M.ZQ.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.customUserThemeSettings &&
                e7.internalBinaryWrite(e.customUserThemeSettings, t.tag(4, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e9 = new e8();
class te extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolders", [
            { no: 1, name: "folders", kind: "message", repeat: 1, T: () => ti },
            { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { folders: [], guildPositions: [] };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.folders.push(ti.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.guildPositions.push(e.fixed64().toString());
                    else r.guildPositions.push(e.fixed64().toString());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.folders.length; i++)
            ti.internalBinaryWrite(e.folders[i], t.tag(1, D.O0.LengthDelimited).fork(), n).join();
        if (e.guildPositions.length) {
            t.tag(2, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tt = new te();
class tn extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolder", [
            { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 2, name: "id", kind: "message", T: () => M.j1 },
            { no: 3, name: "name", kind: "message", T: () => M.hU },
            { no: 4, name: "color", kind: "message", T: () => M.ol },
        ]);
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                    else r.guildIds.push(e.fixed64().toString());
                    break;
                case 2:
                    r.id = M.j1.internalBinaryRead(e, e.uint32(), n, r.id);
                    break;
                case 3:
                    r.name = M.hU.internalBinaryRead(e, e.uint32(), n, r.name);
                    break;
                case 4:
                    r.color = M.ol.internalBinaryRead(e, e.uint32(), n, r.color);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        e.id && M.j1.internalBinaryWrite(e.id, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.name && M.hU.internalBinaryWrite(e.name, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
            e.color && M.ol.internalBinaryWrite(e.color, t.tag(4, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ti = new tn();
class tr extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.Favorites", [
            { no: 1, name: "favorite_channels", kind: "map", K: 6, V: { kind: "message", T: () => tl } },
            { no: 2, name: "muted", kind: "scalar", T: 8 },
            { no: 3, name: "guild_visible", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = { favoriteChannels: {}, muted: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.favoriteChannels, e, n);
                    break;
                case 2:
                    r.muted = e.bool();
                    break;
                case 3:
                    r.guildVisible = M._t.internalBinaryRead(e, e.uint32(), n, r.guildVisible);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = tl.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels",
                    );
            }
        }
        e[a ?? "0"] = s ?? tl.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.favoriteChannels))
            t.tag(1, D.O0.LengthDelimited).fork().tag(1, D.O0.Bit64).fixed64(i),
                t.tag(2, D.O0.LengthDelimited).fork(),
                tl.internalBinaryWrite(e.favoriteChannels[i], t, n),
                t.join().join();
        !1 !== e.muted && t.tag(2, D.O0.Varint).bool(e.muted),
            e.guildVisible && M._t.internalBinaryWrite(e.guildVisible, t.tag(3, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ta = new tr();
class ts extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteChannel", [
            { no: 1, name: "nickname", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", en] },
            { no: 3, name: "position", kind: "scalar", T: 13 },
            { no: 4, name: "parent_id", kind: "scalar", T: 6 },
            { no: 5, name: "channel_type", kind: "message", T: () => M.ZQ },
            { no: 6, name: "collapsed", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { nickname: "", type: 0, position: 0, parentId: "0", collapsed: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                case 5:
                    r.channelType = M.ZQ.internalBinaryRead(e, e.uint32(), n, r.channelType);
                    break;
                case 6:
                    r.collapsed = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.nickname && t.tag(1, D.O0.LengthDelimited).string(e.nickname),
            0 !== e.type && t.tag(2, D.O0.Varint).int32(e.type),
            0 !== e.position && t.tag(3, D.O0.Varint).uint32(e.position),
            "0" !== e.parentId && t.tag(4, D.O0.Bit64).fixed64(e.parentId),
            e.channelType && M.ZQ.internalBinaryWrite(e.channelType, t.tag(5, D.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.collapsed && t.tag(6, D.O0.Varint).bool(e.collapsed);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tl = new ts();
class to extends b.G {
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
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.muted && t.tag(1, D.O0.Varint).bool(e.muted),
            0 !== e.volume && t.tag(2, D.O0.Bit32).float(e.volume),
            "0" !== e.modifiedAt && t.tag(3, D.O0.Bit64).fixed64(e.modifiedAt),
            !1 !== e.soundboardMuted && t.tag(4, D.O0.Varint).bool(e.soundboardMuted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let td = new to();
class tc extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AudioSettings", [
            { no: 1, name: "user", kind: "map", K: 6, V: { kind: "message", T: () => td } },
            { no: 2, name: "stream", kind: "map", K: 6, V: { kind: "message", T: () => td } },
        ]);
    }
    create(e) {
        let t = { user: {}, stream: {} };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.user, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(r.stream, e, n);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = td.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user",
                    );
            }
        }
        e[a ?? "0"] = s ?? td.create();
    }
    binaryReadMap2(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = td.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream",
                    );
            }
        }
        e[a ?? "0"] = s ?? td.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.user))
            t.tag(1, D.O0.LengthDelimited).fork().tag(1, D.O0.Bit64).fixed64(i),
                t.tag(2, D.O0.LengthDelimited).fork(),
                td.internalBinaryWrite(e.user[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.stream))
            t.tag(2, D.O0.LengthDelimited).fork().tag(1, D.O0.Bit64).fixed64(i),
                t.tag(2, D.O0.LengthDelimited).fork(),
                td.internalBinaryWrite(e.stream[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tu = new tc();
class t_ extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CommunitiesSettings", [
            { no: 1, name: "disable_home_auto_nav", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.disableHomeAutoNav = M._t.internalBinaryRead(e, e.uint32(), n, r.disableHomeAutoNav);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.disableHomeAutoNav &&
            M._t.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tE = new t_();
class tA extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SoundboardSettings", [{ no: 1, name: "volume", kind: "scalar", T: 2 }]);
    }
    create(e) {
        let t = { volume: 0 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.volume = e.float();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.volume && t.tag(1, D.O0.Bit32).float(e.volume);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let th = new tA();
class tI extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomCallSound", [
            { no: 1, name: "sound_id", kind: "scalar", T: 6 },
            { no: 2, name: "guild_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { soundId: "0", guildId: "0" };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.soundId = e.fixed64().toString();
                    break;
                case 2:
                    r.guildId = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.soundId && t.tag(1, D.O0.Bit64).fixed64(e.soundId),
            "0" !== e.guildId && t.tag(2, D.O0.Bit64).fixed64(e.guildId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tf = new tI();
class tp extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.BroadcastSettings", [
            { no: 1, name: "allow_friends", kind: "message", T: () => M._t },
            { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "auto_broadcast", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = { allowedGuildIds: [], allowedUserIds: [] };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.allowFriends = M._t.internalBinaryRead(e, e.uint32(), n, r.allowFriends);
                    break;
                case 2:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.allowedGuildIds.push(e.fixed64().toString());
                    else r.allowedGuildIds.push(e.fixed64().toString());
                    break;
                case 3:
                    if (i === D.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.allowedUserIds.push(e.fixed64().toString());
                    else r.allowedUserIds.push(e.fixed64().toString());
                    break;
                case 4:
                    r.autoBroadcast = M._t.internalBinaryRead(e, e.uint32(), n, r.autoBroadcast);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowFriends &&
                M._t.internalBinaryWrite(e.allowFriends, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.allowedGuildIds.length)
        ) {
            t.tag(2, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
            t.join();
        }
        if (e.allowedUserIds.length) {
            t.tag(3, D.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
            t.join();
        }
        e.autoBroadcast && M._t.internalBinaryWrite(e.autoBroadcast, t.tag(4, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tT = new tp();
class tm extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClipsSettings", [
            { no: 1, name: "allow_voice_recording", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.allowVoiceRecording = M._t.internalBinaryRead(e, e.uint32(), n, r.allowVoiceRecording);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.allowVoiceRecording &&
            M._t.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tg = new tm();
class tS extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimit", [
            { no: 1, name: "amount", kind: "scalar", T: 4 },
            { no: 2, name: "currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { amount: "0", currency: "" };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.amount = e.uint64().toString();
                    break;
                case 2:
                    r.currency = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.amount && t.tag(1, D.O0.Varint).uint64(e.amount),
            "" !== e.currency && t.tag(2, D.O0.LengthDelimited).string(e.currency);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tN = new tS();
class tC extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimitSettings", [
            { no: 1, name: "one_time_purchase_limit", kind: "message", T: () => tN },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.oneTimePurchaseLimit = tN.internalBinaryRead(e, e.uint32(), n, r.oneTimePurchaseLimit);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.oneTimePurchaseLimit &&
            tN.internalBinaryWrite(e.oneTimePurchaseLimit, t.tag(1, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tR = new tC();
class tO extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SafetySettings", [
            {
                no: 1,
                name: "safety_settings_preset",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SafetySettingsPresetType", ei],
            },
            { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 },
            { no: 3, name: "spending_limit_settings", kind: "message", T: () => tR },
        ]);
    }
    create(e) {
        let t = { safetySettingsPreset: 0, ignoreProfileSpeedbumpDisabled: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.safetySettingsPreset = e.int32();
                    break;
                case 2:
                    r.ignoreProfileSpeedbumpDisabled = e.bool();
                    break;
                case 3:
                    r.spendingLimitSettings = tR.internalBinaryRead(e, e.uint32(), n, r.spendingLimitSettings);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.safetySettingsPreset && t.tag(1, D.O0.Varint).int32(e.safetySettingsPreset),
            !1 !== e.ignoreProfileSpeedbumpDisabled && t.tag(2, D.O0.Varint).bool(e.ignoreProfileSpeedbumpDisabled),
            e.spendingLimitSettings &&
                tR.internalBinaryWrite(e.spendingLimitSettings, t.tag(3, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tL = new tO();
class tD extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ForLaterSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ForLaterTab", er, "FOR_LATER_TAB_"],
            },
        ]);
    }
    create(e) {
        let t = { currentTab: 0 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.currentTab = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, D.O0.Varint).int32(e.currentTab);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ty = new tD();
class tv extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ICYMISettings", [
            { no: 1, name: "feed_generated_at", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { feedGeneratedAt: "0" };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.feedGeneratedAt = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.feedGeneratedAt && t.tag(1, D.O0.Bit64).fixed64(e.feedGeneratedAt);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tb = new tv();
class tM extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllApplicationSettings", [
            { no: 1, name: "app_settings", kind: "map", K: 6, V: { kind: "message", T: () => tw } },
        ]);
    }
    create(e) {
        let t = { appSettings: {} };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.appSettings, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = tw.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings",
                    );
            }
        }
        e[a ?? "0"] = s ?? tw.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.appSettings))
            t.tag(1, D.O0.LengthDelimited).fork().tag(1, D.O0.Bit64).fixed64(i),
                t.tag(2, D.O0.LengthDelimited).fork(),
                tw.internalBinaryWrite(e.appSettings[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tP = new tM();
class tU extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSettings", [
            { no: 1, name: "app_dm_settings", kind: "message", T: () => tx },
            { no: 2, name: "app_sharing_settings", kind: "message", T: () => tF },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.appDmSettings = tx.internalBinaryRead(e, e.uint32(), n, r.appDmSettings);
                    break;
                case 2:
                    r.appSharingSettings = tF.internalBinaryRead(e, e.uint32(), n, r.appSharingSettings);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.appDmSettings && tx.internalBinaryWrite(e.appDmSettings, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.appSharingSettings &&
                tF.internalBinaryWrite(e.appSharingSettings, t.tag(2, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tw = new tU();
class tG extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationDMSettings", [
            { no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { allowMobilePush: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (2 === t) r.allowMobilePush = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.allowMobilePush && t.tag(2, D.O0.Varint).bool(e.allowMobilePush);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tx = new tG();
class tk extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSharingSettings", [
            { no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { disableApplicationActivitySharing: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.disableApplicationActivitySharing = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.disableApplicationActivitySharing && t.tag(1, D.O0.Varint).bool(e.disableApplicationActivitySharing);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tF = new tk();
class tV extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AdsSettings", [{ no: 1, name: "always_deliver", kind: "scalar", T: 8 }]);
    }
    create(e) {
        let t = { alwaysDeliver: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.alwaysDeliver = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.alwaysDeliver && t.tag(1, D.O0.Varint).bool(e.alwaysDeliver);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tB = new tV();
class tH extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackState", [
            { no: 1, name: "last_impression_time", kind: "message", T: () => M.ol },
            { no: 2, name: "opt_out_expiry_time", kind: "message", T: () => M.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lastImpressionTime = M.ol.internalBinaryRead(e, e.uint32(), n, r.lastImpressionTime);
                    break;
                case 2:
                    r.optOutExpiryTime = M.ol.internalBinaryRead(e, e.uint32(), n, r.optOutExpiryTime);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lastImpressionTime &&
            M.ol.internalBinaryWrite(e.lastImpressionTime, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.optOutExpiryTime &&
                M.ol.internalBinaryWrite(e.optOutExpiryTime, t.tag(2, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tj = new tH();
class tW extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.DefaultReactionEmoji", [
            { no: 1, name: "emoji_id", kind: "message", T: () => M.ol },
            { no: 2, name: "emoji_name", kind: "message", T: () => M.hU },
            { no: 3, name: "animated", kind: "message", T: () => M._t },
            { no: 4, name: "disable_double_tap", kind: "message", T: () => M._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.emojiId = M.ol.internalBinaryRead(e, e.uint32(), n, r.emojiId);
                    break;
                case 2:
                    r.emojiName = M.hU.internalBinaryRead(e, e.uint32(), n, r.emojiName);
                    break;
                case 3:
                    r.animated = M._t.internalBinaryRead(e, e.uint32(), n, r.animated);
                    break;
                case 4:
                    r.disableDoubleTap = M._t.internalBinaryRead(e, e.uint32(), n, r.disableDoubleTap);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.emojiId && M.ol.internalBinaryWrite(e.emojiId, t.tag(1, D.O0.LengthDelimited).fork(), n).join(),
            e.emojiName && M.hU.internalBinaryWrite(e.emojiName, t.tag(2, D.O0.LengthDelimited).fork(), n).join(),
            e.animated && M._t.internalBinaryWrite(e.animated, t.tag(3, D.O0.LengthDelimited).fork(), n).join(),
            e.disableDoubleTap &&
                M._t.internalBinaryWrite(e.disableDoubleTap, t.tag(4, D.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tY = new tW();
class tK extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackSettings", [
            { no: 1, name: "in_app_feedback_states", kind: "map", K: 5, V: { kind: "message", T: () => tj } },
        ]);
    }
    create(e) {
        let t = { inAppFeedbackStates: {} };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.inAppFeedbackStates, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    a = t.int32();
                    break;
                case 2:
                    s = tj.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states",
                    );
            }
        }
        e[a ?? 0] = s ?? tj.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.inAppFeedbackStates))
            t.tag(1, D.O0.LengthDelimited).fork().tag(1, D.O0.Varint).int32(parseInt(i)),
                t.tag(2, D.O0.LengthDelimited).fork(),
                tj.internalBinaryWrite(e.inAppFeedbackStates[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let t$ = new tK();
class tz extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AppVersionSettings", [
            { no: 1, name: "is_using_outdated_mobile_version", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { isUsingOutdatedMobileVersion: !1 };
        return (
            globalThis.Object.defineProperty(t, v.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, y.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.isUsingOutdatedMobileVersion = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? D.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isUsingOutdatedMobileVersion && t.tag(1, D.O0.Varint).bool(e.isUsingOutdatedMobileVersion);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? D.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tZ = new tz();
