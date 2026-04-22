"use strict";
n.d(t, {
    AN: () => B,
    Ar: () => X,
    DQ: () => V,
    E: () => eB,
    F1: () => ej,
    GY: () => ev,
    Ip: () => J,
    Ju: () => eh,
    KJ: () => eo,
    KP: () => j,
    NS: () => K,
    PZ: () => q,
    Q0: () => es,
    Qd: () => H,
    Sx: () => $,
    TO: () => U,
    TY: () => eV,
    Tz: () => x,
    X9: () => eY,
    Y2: () => M,
    YW: () => eT,
    ak: () => e9,
    eF: () => P,
    fL: () => W,
    he: () => k,
    iL: () => et,
    ju: () => z,
    kW: () => Q,
    nT: () => er,
    nx: () => ec,
    oJ: () => ex,
    oP: () => ts,
    wL: () => tr,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073);
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    d,
    c,
    _,
    f,
    E,
    h,
    p,
    m,
    g,
    A,
    I,
    T,
    S,
    y,
    N,
    O,
    R = n(852015),
    v = n(144367),
    C = n(428420),
    b = n(324281),
    D = n(406935),
    L = n(335871),
    w = n(813827),
    M =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.MENTIONS = 1)] = "MENTIONS"),
        (r[(r.UNREADS = 2)] = "UNREADS"),
        (r[(r.TODOS = 3)] = "TODOS"),
        (r[(r.FOR_YOU = 4)] = "FOR_YOU"),
        (r[(r.GAME_INVITES = 5)] = "GAME_INVITES"),
        (r[(r.BOOKMARKS = 6)] = "BOOKMARKS"),
        (r[(r.SCHEDULED = 7)] = "SCHEDULED"),
        r),
    P =
        (((i = {})[(i.NO_GUILD_ONBOARDING = 0)] = "NO_GUILD_ONBOARDING"),
        (i[(i.GUILD_NOTICE_SHOWN = 1)] = "GUILD_NOTICE_SHOWN"),
        (i[(i.GUILD_NOTICE_CLEARED = 2)] = "GUILD_NOTICE_CLEARED"),
        i),
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
    x =
        (((o = {})[(o.NOTIFICATIONS_ENABLED = 0)] = "NOTIFICATIONS_ENABLED"),
        (o[(o.ONLY_DMS = 1)] = "ONLY_DMS"),
        (o[(o.NOTIFICATIONS_DISABLED = 2)] = "NOTIFICATIONS_DISABLED"),
        o),
    G =
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
    F =
        (((d = {})[(d.UNSET = 0)] = "UNSET"),
        (d[(d.GOOGLE = 1)] = "GOOGLE"),
        (d[(d.BING = 2)] = "BING"),
        (d[(d.DUCKDUCKGO = 3)] = "DUCKDUCKGO"),
        (d[(d.CUSTOM = 4)] = "CUSTOM"),
        d),
    B =
        (((c = {})[(c.OFF = 0)] = "OFF"),
        (c[(c.ON_FOR_LARGE_GUILDS = 1)] = "ON_FOR_LARGE_GUILDS"),
        (c[(c.ON = 2)] = "ON"),
        c),
    H =
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
        (((E = {})[(E.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = 0)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET"),
        (E[(E.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = 1)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL"),
        (E[(E.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME = 2)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME"),
        (E[(E.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE = 3)] = "SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE"),
        E),
    j =
        (((h = {})[(h.UNSET = 0)] = "UNSET"),
        (h[(h.FRIENDS_ONLY = 1)] = "FRIENDS_ONLY"),
        (h[(h.FRIENDS_AND_SMALL_GUILDS = 2)] = "FRIENDS_AND_SMALL_GUILDS"),
        (h[(h.FRIENDS_AND_ALL_GUILDS = 3)] = "FRIENDS_AND_ALL_GUILDS"),
        h),
    K =
        (((p = {})[(p.UNSET_UI_DENSITY = 0)] = "UNSET_UI_DENSITY"),
        (p[(p.COMPACT = 1)] = "COMPACT"),
        (p[(p.COZY = 2)] = "COZY"),
        (p[(p.RESPONSIVE = 3)] = "RESPONSIVE"),
        (p[(p.DEFAULT = 4)] = "DEFAULT"),
        p),
    $ =
        (((m = {})[(m.UNSET = 0)] = "UNSET"),
        (m[(m.DARK = 1)] = "DARK"),
        (m[(m.LIGHT = 2)] = "LIGHT"),
        (m[(m.DARKER = 3)] = "DARKER"),
        (m[(m.MIDNIGHT = 4)] = "MIDNIGHT"),
        m),
    z =
        (((g = {})[(g.MINT_APPLE = 0)] = "MINT_APPLE"),
        (g[(g.CITRUS_SHERBERT = 1)] = "CITRUS_SHERBERT"),
        (g[(g.RETRO_RAINCLOUD = 2)] = "RETRO_RAINCLOUD"),
        (g[(g.HANAMI = 3)] = "HANAMI"),
        (g[(g.SUNRISE = 4)] = "SUNRISE"),
        (g[(g.COTTON_CANDY = 5)] = "COTTON_CANDY"),
        (g[(g.LOFI_VIBES = 6)] = "LOFI_VIBES"),
        (g[(g.DESERT_KHAKI = 7)] = "DESERT_KHAKI"),
        (g[(g.SUNSET = 8)] = "SUNSET"),
        (g[(g.CHROMA_GLOW = 9)] = "CHROMA_GLOW"),
        (g[(g.FOREST = 10)] = "FOREST"),
        (g[(g.CRIMSON_MOON = 11)] = "CRIMSON_MOON"),
        (g[(g.MIDNIGHT_BLURPLE = 12)] = "MIDNIGHT_BLURPLE"),
        (g[(g.MARS = 13)] = "MARS"),
        (g[(g.DUSK = 14)] = "DUSK"),
        (g[(g.UNDER_THE_SEA = 15)] = "UNDER_THE_SEA"),
        (g[(g.EASTER_EGG = 16)] = "EASTER_EGG"),
        (g[(g.RETRO_STORM = 17)] = "RETRO_STORM"),
        (g[(g.NEON_NIGHTS = 18)] = "NEON_NIGHTS"),
        (g[(g.SEPIA = 19)] = "SEPIA"),
        (g[(g.STRAWBERRY_LEMONADE = 20)] = "STRAWBERRY_LEMONADE"),
        (g[(g.AURORA = 21)] = "AURORA"),
        (g[(g.BLURPLE_TWILIGHT = 22)] = "BLURPLE_TWILIGHT"),
        g),
    q = (((A = {})[(A.AUTO = 0)] = "AUTO"), (A[(A.H12 = 1)] = "H12"), (A[(A.H23 = 2)] = "H23"), A),
    X =
        (((I = {})[(I.LAUNCH_PAD_DISABLED = 0)] = "LAUNCH_PAD_DISABLED"),
        (I[(I.LAUNCH_PAD_GESTURE_FULL_SCREEN = 1)] = "LAUNCH_PAD_GESTURE_FULL_SCREEN"),
        (I[(I.LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2)] = "LAUNCH_PAD_GESTURE_RIGHT_EDGE"),
        (I[(I.LAUNCH_PAD_PULL_TAB = 3)] = "LAUNCH_PAD_PULL_TAB"),
        I),
    Q =
        (((T = {})[(T.SWIPE_RIGHT_TO_LEFT_UNSET = 0)] = "SWIPE_RIGHT_TO_LEFT_UNSET"),
        (T[(T.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS = 1)] = "SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS"),
        (T[(T.SWIPE_RIGHT_TO_LEFT_REPLY = 2)] = "SWIPE_RIGHT_TO_LEFT_REPLY"),
        T),
    J =
        (((S = {})[(S.UNSET_FAVORITE_CHANNEL_TYPE = 0)] = "UNSET_FAVORITE_CHANNEL_TYPE"),
        (S[(S.REFERENCE_ORIGINAL = 1)] = "REFERENCE_ORIGINAL"),
        (S[(S.CATEGORY = 2)] = "CATEGORY"),
        S),
    Z =
        (((y = {})[(y.UNSET_SAFETY_SETTINGS_PRESET = 0)] = "UNSET_SAFETY_SETTINGS_PRESET"),
        (y[(y.BALANCED = 1)] = "BALANCED"),
        (y[(y.STRICT = 2)] = "STRICT"),
        (y[(y.RELAXED = 3)] = "RELAXED"),
        (y[(y.CUSTOM = 4)] = "CUSTOM"),
        y),
    ee =
        (((N = {})[(N.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (N[(N.ALL = 1)] = "ALL"),
        (N[(N.BOOKMARKS = 2)] = "BOOKMARKS"),
        (N[(N.REMINDERS = 3)] = "REMINDERS"),
        N),
    et =
        (((O = {})[(O.VOICE = 0)] = "VOICE"),
        (O[(O.STREAM = 1)] = "STREAM"),
        (O[(O.VIDEO_BACKGROUND = 2)] = "VIDEO_BACKGROUND"),
        (O[(O.ACTIVITY = 3)] = "ACTIVITY"),
        (O[(O.IN_APP_REPORTS = 4)] = "IN_APP_REPORTS"),
        (O[(O.BLOCK_USER = 6)] = "BLOCK_USER"),
        (O[(O.SEARCH_RESULTS = 8)] = "SEARCH_RESULTS"),
        (O[(O.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        O);
class en extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.PreloadedUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => w.u },
            { no: 2, name: "inbox", kind: "message", T: () => es },
            { no: 3, name: "guilds", kind: "message", T: () => eo },
            { no: 4, name: "user_content", kind: "message", T: () => eT },
            { no: 5, name: "voice_and_video", kind: "message", T: () => ev },
            { no: 6, name: "text_and_images", kind: "message", T: () => ex },
            { no: 7, name: "notifications", kind: "message", T: () => eV },
            { no: 8, name: "privacy", kind: "message", T: () => eB },
            { no: 9, name: "debug", kind: "message", T: () => eY },
            { no: 10, name: "game_library", kind: "message", T: () => ej },
            { no: 11, name: "status", kind: "message", T: () => e$ },
            { no: 12, name: "localization", kind: "message", T: () => eQ },
            { no: 13, name: "appearance", kind: "message", T: () => e1 },
            { no: 14, name: "guild_folders", kind: "message", T: () => e7 },
            { no: 15, name: "favorites", kind: "message", T: () => tt },
            { no: 16, name: "audio_context_settings", kind: "message", T: () => to },
            { no: 17, name: "communities", kind: "message", T: () => tu },
            { no: 18, name: "broadcast", kind: "message", T: () => th },
            { no: 19, name: "clips", kind: "message", T: () => tm },
            { no: 20, name: "for_later", kind: "message", T: () => tO },
            { no: 21, name: "safety_settings", kind: "message", T: () => ty },
            { no: 22, name: "icymi_settings", kind: "message", T: () => tv },
            { no: 23, name: "applications", kind: "message", T: () => tb },
            { no: 24, name: "ads", kind: "message", T: () => tx },
            { no: 25, name: "in_app_feedback_settings", kind: "message", T: () => tY },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.versions = w.u.internalBinaryRead(e, e.uint32(), n, i.versions);
                    break;
                case 2:
                    i.inbox = es.internalBinaryRead(e, e.uint32(), n, i.inbox);
                    break;
                case 3:
                    i.guilds = eo.internalBinaryRead(e, e.uint32(), n, i.guilds);
                    break;
                case 4:
                    i.userContent = eT.internalBinaryRead(e, e.uint32(), n, i.userContent);
                    break;
                case 5:
                    i.voiceAndVideo = ev.internalBinaryRead(e, e.uint32(), n, i.voiceAndVideo);
                    break;
                case 6:
                    i.textAndImages = ex.internalBinaryRead(e, e.uint32(), n, i.textAndImages);
                    break;
                case 7:
                    i.notifications = eV.internalBinaryRead(e, e.uint32(), n, i.notifications);
                    break;
                case 8:
                    i.privacy = eB.internalBinaryRead(e, e.uint32(), n, i.privacy);
                    break;
                case 9:
                    i.debug = eY.internalBinaryRead(e, e.uint32(), n, i.debug);
                    break;
                case 10:
                    i.gameLibrary = ej.internalBinaryRead(e, e.uint32(), n, i.gameLibrary);
                    break;
                case 11:
                    i.status = e$.internalBinaryRead(e, e.uint32(), n, i.status);
                    break;
                case 12:
                    i.localization = eQ.internalBinaryRead(e, e.uint32(), n, i.localization);
                    break;
                case 13:
                    i.appearance = e1.internalBinaryRead(e, e.uint32(), n, i.appearance);
                    break;
                case 14:
                    i.guildFolders = e7.internalBinaryRead(e, e.uint32(), n, i.guildFolders);
                    break;
                case 15:
                    i.favorites = tt.internalBinaryRead(e, e.uint32(), n, i.favorites);
                    break;
                case 16:
                    i.audioContextSettings = to.internalBinaryRead(e, e.uint32(), n, i.audioContextSettings);
                    break;
                case 17:
                    i.communities = tu.internalBinaryRead(e, e.uint32(), n, i.communities);
                    break;
                case 18:
                    i.broadcast = th.internalBinaryRead(e, e.uint32(), n, i.broadcast);
                    break;
                case 19:
                    i.clips = tm.internalBinaryRead(e, e.uint32(), n, i.clips);
                    break;
                case 20:
                    i.forLater = tO.internalBinaryRead(e, e.uint32(), n, i.forLater);
                    break;
                case 21:
                    i.safetySettings = ty.internalBinaryRead(e, e.uint32(), n, i.safetySettings);
                    break;
                case 22:
                    i.icymiSettings = tv.internalBinaryRead(e, e.uint32(), n, i.icymiSettings);
                    break;
                case 23:
                    i.applications = tb.internalBinaryRead(e, e.uint32(), n, i.applications);
                    break;
                case 24:
                    i.ads = tx.internalBinaryRead(e, e.uint32(), n, i.ads);
                    break;
                case 25:
                    i.inAppFeedbackSettings = tY.internalBinaryRead(e, e.uint32(), n, i.inAppFeedbackSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && w.u.internalBinaryWrite(e.versions, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.inbox && es.internalBinaryWrite(e.inbox, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.guilds && eo.internalBinaryWrite(e.guilds, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
            e.userContent && eT.internalBinaryWrite(e.userContent, t.tag(4, R.O0.LengthDelimited).fork(), n).join(),
            e.voiceAndVideo && ev.internalBinaryWrite(e.voiceAndVideo, t.tag(5, R.O0.LengthDelimited).fork(), n).join(),
            e.textAndImages && ex.internalBinaryWrite(e.textAndImages, t.tag(6, R.O0.LengthDelimited).fork(), n).join(),
            e.notifications && eV.internalBinaryWrite(e.notifications, t.tag(7, R.O0.LengthDelimited).fork(), n).join(),
            e.privacy && eB.internalBinaryWrite(e.privacy, t.tag(8, R.O0.LengthDelimited).fork(), n).join(),
            e.debug && eY.internalBinaryWrite(e.debug, t.tag(9, R.O0.LengthDelimited).fork(), n).join(),
            e.gameLibrary && ej.internalBinaryWrite(e.gameLibrary, t.tag(10, R.O0.LengthDelimited).fork(), n).join(),
            e.status && e$.internalBinaryWrite(e.status, t.tag(11, R.O0.LengthDelimited).fork(), n).join(),
            e.localization && eQ.internalBinaryWrite(e.localization, t.tag(12, R.O0.LengthDelimited).fork(), n).join(),
            e.appearance && e1.internalBinaryWrite(e.appearance, t.tag(13, R.O0.LengthDelimited).fork(), n).join(),
            e.guildFolders && e7.internalBinaryWrite(e.guildFolders, t.tag(14, R.O0.LengthDelimited).fork(), n).join(),
            e.favorites && tt.internalBinaryWrite(e.favorites, t.tag(15, R.O0.LengthDelimited).fork(), n).join(),
            e.audioContextSettings &&
                to.internalBinaryWrite(e.audioContextSettings, t.tag(16, R.O0.LengthDelimited).fork(), n).join(),
            e.communities && tu.internalBinaryWrite(e.communities, t.tag(17, R.O0.LengthDelimited).fork(), n).join(),
            e.broadcast && th.internalBinaryWrite(e.broadcast, t.tag(18, R.O0.LengthDelimited).fork(), n).join(),
            e.clips && tm.internalBinaryWrite(e.clips, t.tag(19, R.O0.LengthDelimited).fork(), n).join(),
            e.forLater && tO.internalBinaryWrite(e.forLater, t.tag(20, R.O0.LengthDelimited).fork(), n).join(),
            e.safetySettings &&
                ty.internalBinaryWrite(e.safetySettings, t.tag(21, R.O0.LengthDelimited).fork(), n).join(),
            e.icymiSettings &&
                tv.internalBinaryWrite(e.icymiSettings, t.tag(22, R.O0.LengthDelimited).fork(), n).join(),
            e.applications && tb.internalBinaryWrite(e.applications, t.tag(23, R.O0.LengthDelimited).fork(), n).join(),
            e.ads && tx.internalBinaryWrite(e.ads, t.tag(24, R.O0.LengthDelimited).fork(), n).join(),
            e.inAppFeedbackSettings &&
                tY.internalBinaryWrite(e.inAppFeedbackSettings, t.tag(25, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let er = new en();
class ei extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.InboxSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.InboxTab", M, "INBOX_TAB_"],
            },
            { no: 2, name: "viewed_tutorial", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { currentTab: 0, viewedTutorial: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.currentTab = e.int32();
                    break;
                case 2:
                    i.viewedTutorial = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, R.O0.Varint).int32(e.currentTab),
            !1 !== e.viewedTutorial && t.tag(2, R.O0.Varint).bool(e.viewedTutorial);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let es = new ei();
class ea extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllGuildSettings", [
            { no: 1, name: "guilds", kind: "map", K: 6, V: { kind: "message", T: () => ec } },
        ]);
    }
    create(e) {
        let t = { guilds: {} };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.guilds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = ec.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds",
                    );
            }
        }
        e[s ?? "0"] = a ?? ec.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.guilds))
            t.tag(1, R.O0.LengthDelimited).fork().tag(1, R.O0.Bit64).fixed64(r),
                t.tag(2, R.O0.LengthDelimited).fork(),
                ec.internalBinaryWrite(e.guilds[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eo = new ea();
class el extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.dismissed = e.bool();
                    break;
                case 2:
                    i.lastDismissedVersion = e.uint32();
                    break;
                case 3:
                    i.lastDismissedAtMs = e.uint64().toString();
                    break;
                case 4:
                    i.lastDismissedObjectId = e.uint64().toString();
                    break;
                case 5:
                    i.numTimesDismissed = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.dismissed && t.tag(1, R.O0.Varint).bool(e.dismissed),
            0 !== e.lastDismissedVersion && t.tag(2, R.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(3, R.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(4, R.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(5, R.O0.Varint).uint32(e.numTimesDismissed);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eu = new el();
class ed extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildSettings", [
            { no: 1, name: "channels", kind: "map", K: 6, V: { kind: "message", T: () => eh } },
            { no: 2, name: "hub_progress", kind: "scalar", T: 13 },
            { no: 3, name: "guild_onboarding_progress", kind: "scalar", T: 13 },
            { no: 4, name: "guild_recents_dismissed_at", kind: "message", T: () => L.D },
            { no: 5, name: "dismissed_guild_content", kind: "scalar", T: 12 },
            { no: 6, name: "join_sound", kind: "message", T: () => tf },
            { no: 7, name: "mobile_redesign_channel_list_settings", kind: "message", T: () => eZ },
            { no: 8, name: "disable_raid_alert_push", kind: "scalar", T: 8 },
            { no: 9, name: "disable_raid_alert_nag", kind: "scalar", T: 8 },
            { no: 10, name: "custom_notification_sound_config", kind: "message", T: () => em },
            { no: 11, name: "leaderboards_disabled", kind: "scalar", T: 8 },
            {
                no: 12,
                name: "guild_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => eu },
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
        };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(i.channels, e, n);
                    break;
                case 2:
                    i.hubProgress = e.uint32();
                    break;
                case 3:
                    i.guildOnboardingProgress = e.uint32();
                    break;
                case 4:
                    i.guildRecentsDismissedAt = L.D.internalBinaryRead(e, e.uint32(), n, i.guildRecentsDismissedAt);
                    break;
                case 5:
                    i.dismissedGuildContent = e.bytes();
                    break;
                case 6:
                    i.joinSound = tf.internalBinaryRead(e, e.uint32(), n, i.joinSound);
                    break;
                case 7:
                    i.mobileRedesignChannelListSettings = eZ.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.mobileRedesignChannelListSettings,
                    );
                    break;
                case 8:
                    i.disableRaidAlertPush = e.bool();
                    break;
                case 9:
                    i.disableRaidAlertNag = e.bool();
                    break;
                case 10:
                    i.customNotificationSoundConfig = em.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.customNotificationSoundConfig,
                    );
                    break;
                case 11:
                    i.leaderboardsDisabled = e.bool();
                    break;
                case 12:
                    this.binaryReadMap12(i.guildDismissibleContentStates, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = eh.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels",
                    );
            }
        }
        e[s ?? "0"] = a ?? eh.create();
    }
    binaryReadMap12(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.int32();
                    break;
                case 2:
                    a = eu.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states",
                    );
            }
        }
        e[s ?? 0] = a ?? eu.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.channels))
            t.tag(1, R.O0.LengthDelimited).fork().tag(1, R.O0.Bit64).fixed64(r),
                t.tag(2, R.O0.LengthDelimited).fork(),
                eh.internalBinaryWrite(e.channels[r], t, n),
                t.join().join();
        for (let r of (0 !== e.hubProgress && t.tag(2, R.O0.Varint).uint32(e.hubProgress),
        0 !== e.guildOnboardingProgress && t.tag(3, R.O0.Varint).uint32(e.guildOnboardingProgress),
        e.guildRecentsDismissedAt &&
            L.D.internalBinaryWrite(e.guildRecentsDismissedAt, t.tag(4, R.O0.LengthDelimited).fork(), n).join(),
        e.dismissedGuildContent.length && t.tag(5, R.O0.LengthDelimited).bytes(e.dismissedGuildContent),
        e.joinSound && tf.internalBinaryWrite(e.joinSound, t.tag(6, R.O0.LengthDelimited).fork(), n).join(),
        e.mobileRedesignChannelListSettings &&
            eZ
                .internalBinaryWrite(e.mobileRedesignChannelListSettings, t.tag(7, R.O0.LengthDelimited).fork(), n)
                .join(),
        !1 !== e.disableRaidAlertPush && t.tag(8, R.O0.Varint).bool(e.disableRaidAlertPush),
        !1 !== e.disableRaidAlertNag && t.tag(9, R.O0.Varint).bool(e.disableRaidAlertNag),
        e.customNotificationSoundConfig &&
            em.internalBinaryWrite(e.customNotificationSoundConfig, t.tag(10, R.O0.LengthDelimited).fork(), n).join(),
        !1 !== e.leaderboardsDisabled && t.tag(11, R.O0.Varint).bool(e.leaderboardsDisabled),
        Object.keys(e.guildDismissibleContentStates)))
            t.tag(12, R.O0.LengthDelimited).fork().tag(1, R.O0.Varint).int32(parseInt(r)),
                t.tag(2, R.O0.LengthDelimited).fork(),
                eu.internalBinaryWrite(e.guildDismissibleContentStates[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ec = new ed();
class e_ extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelIconEmoji", [
            { no: 1, name: "id", kind: "message", T: () => D.ol },
            { no: 2, name: "name", kind: "message", T: () => D.hU },
            { no: 3, name: "color", kind: "message", T: () => D.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.id = D.ol.internalBinaryRead(e, e.uint32(), n, i.id);
                    break;
                case 2:
                    i.name = D.hU.internalBinaryRead(e, e.uint32(), n, i.name);
                    break;
                case 3:
                    i.color = D.ol.internalBinaryRead(e, e.uint32(), n, i.color);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.id && D.ol.internalBinaryWrite(e.id, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.name && D.hU.internalBinaryWrite(e.name, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.color && D.ol.internalBinaryWrite(e.color, t.tag(3, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ef = new e_();
class eE extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelSettings", [
            { no: 1, name: "collapsed_in_inbox", kind: "scalar", T: 8 },
            { no: 2, name: "icon_emoji", kind: "message", T: () => ef },
            { no: 3, name: "custom_notification_sound_config", kind: "message", T: () => em },
        ]);
    }
    create(e) {
        let t = { collapsedInInbox: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.collapsedInInbox = e.bool();
                    break;
                case 2:
                    i.iconEmoji = ef.internalBinaryRead(e, e.uint32(), n, i.iconEmoji);
                    break;
                case 3:
                    i.customNotificationSoundConfig = em.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.customNotificationSoundConfig,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.collapsedInInbox && t.tag(1, R.O0.Varint).bool(e.collapsedInInbox),
            e.iconEmoji && ef.internalBinaryWrite(e.iconEmoji, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.customNotificationSoundConfig &&
                em
                    .internalBinaryWrite(e.customNotificationSoundConfig, t.tag(3, R.O0.LengthDelimited).fork(), n)
                    .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eh = new eE();
class ep extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomNotificationSoundConfig", [
            { no: 1, name: "notification_sound_pack_id", kind: "message", T: () => D.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t)
                i.notificationSoundPackId = D.hU.internalBinaryRead(e, e.uint32(), n, i.notificationSoundPackId);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.notificationSoundPackId &&
            D.hU.internalBinaryWrite(e.notificationSoundPackId, t.tag(1, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let em = new ep();
class eg extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.lastDismissedVersion = e.uint32();
                    break;
                case 2:
                    i.lastDismissedAtMs = e.uint64().toString();
                    break;
                case 3:
                    i.lastDismissedObjectId = e.uint64().toString();
                    break;
                case 4:
                    i.numTimesDismissed = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.lastDismissedVersion && t.tag(1, R.O0.Varint).uint32(e.lastDismissedVersion),
            "0" !== e.lastDismissedAtMs && t.tag(2, R.O0.Varint).uint64(e.lastDismissedAtMs),
            "0" !== e.lastDismissedObjectId && t.tag(3, R.O0.Varint).uint64(e.lastDismissedObjectId),
            0 !== e.numTimesDismissed && t.tag(4, R.O0.Varint).uint32(e.numTimesDismissed);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eA = new eg();
class eI extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.UserContentSettings", [
            { no: 1, name: "dismissed_contents", kind: "scalar", T: 12 },
            { no: 2, name: "last_dismissed_outbound_promotion_start_date", kind: "message", T: () => D.hU },
            { no: 3, name: "premium_tier_0_modal_dismissed_at", kind: "message", T: () => L.D },
            { no: 4, name: "guild_onboarding_upsell_dismissed_at", kind: "message", T: () => L.D },
            { no: 5, name: "safety_user_sentiment_notice_dismissed_at", kind: "message", T: () => L.D },
            { no: 6, name: "last_received_changelog_id", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "recurring_dismissible_content_states",
                kind: "map",
                K: 5,
                V: { kind: "message", T: () => eA },
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.dismissedContents = e.bytes();
                    break;
                case 2:
                    i.lastDismissedOutboundPromotionStartDate = D.hU.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.lastDismissedOutboundPromotionStartDate,
                    );
                    break;
                case 3:
                    i.premiumTier0ModalDismissedAt = L.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.premiumTier0ModalDismissedAt,
                    );
                    break;
                case 4:
                    i.guildOnboardingUpsellDismissedAt = L.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.guildOnboardingUpsellDismissedAt,
                    );
                    break;
                case 5:
                    i.safetyUserSentimentNoticeDismissedAt = L.D.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.safetyUserSentimentNoticeDismissedAt,
                    );
                    break;
                case 6:
                    i.lastReceivedChangelogId = e.fixed64().toString();
                    break;
                case 7:
                    this.binaryReadMap7(i.recurringDismissibleContentStates, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap7(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.int32();
                    break;
                case 2:
                    a = eA.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states",
                    );
            }
        }
        e[s ?? 0] = a ?? eA.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of (e.dismissedContents.length && t.tag(1, R.O0.LengthDelimited).bytes(e.dismissedContents),
        e.lastDismissedOutboundPromotionStartDate &&
            D.hU
                .internalBinaryWrite(
                    e.lastDismissedOutboundPromotionStartDate,
                    t.tag(2, R.O0.LengthDelimited).fork(),
                    n,
                )
                .join(),
        e.premiumTier0ModalDismissedAt &&
            L.D.internalBinaryWrite(e.premiumTier0ModalDismissedAt, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
        e.guildOnboardingUpsellDismissedAt &&
            L.D.internalBinaryWrite(
                e.guildOnboardingUpsellDismissedAt,
                t.tag(4, R.O0.LengthDelimited).fork(),
                n,
            ).join(),
        e.safetyUserSentimentNoticeDismissedAt &&
            L.D.internalBinaryWrite(
                e.safetyUserSentimentNoticeDismissedAt,
                t.tag(5, R.O0.LengthDelimited).fork(),
                n,
            ).join(),
        "0" !== e.lastReceivedChangelogId && t.tag(6, R.O0.Bit64).fixed64(e.lastReceivedChangelogId),
        Object.keys(e.recurringDismissibleContentStates)))
            t.tag(7, R.O0.LengthDelimited).fork().tag(1, R.O0.Varint).int32(parseInt(r)),
                t.tag(2, R.O0.LengthDelimited).fork(),
                eA.internalBinaryWrite(e.recurringDismissibleContentStates[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eT = new eI();
class eS extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterAsset", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "asset_hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { id: "0", assetHash: "" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.id = e.fixed64().toString();
                    break;
                case 2:
                    i.assetHash = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, R.O0.Bit64).fixed64(e.id),
            "" !== e.assetHash && t.tag(2, R.O0.LengthDelimited).string(e.assetHash);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ey = new eS();
class eN extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.VideoFilterBackgroundBlur", [
            { no: 1, name: "use_blur", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { useBlur: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.useBlur = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.useBlur && t.tag(1, R.O0.Varint).bool(e.useBlur);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eO = new eN();
class eR extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.VoiceAndVideoSettings", [
            { no: 1, name: "blur", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => eO },
            { no: 2, name: "preset_option", kind: "scalar", oneof: "videoBackgroundFilterDesktop", T: 13 },
            { no: 3, name: "custom_asset", kind: "message", oneof: "videoBackgroundFilterDesktop", T: () => ey },
            { no: 5, name: "always_preview_video", kind: "message", T: () => D._t },
            { no: 6, name: "afk_timeout", kind: "message", T: () => D.ZQ },
            { no: 7, name: "stream_notifications_enabled", kind: "message", T: () => D._t },
            { no: 8, name: "native_phone_integration_enabled", kind: "message", T: () => D._t },
            { no: 9, name: "soundboard_settings", kind: "message", T: () => tc },
            { no: 10, name: "disable_stream_previews", kind: "message", T: () => D._t },
            { no: 11, name: "soundmoji_volume", kind: "message", T: () => D.uN },
        ]);
    }
    create(e) {
        let t = { videoBackgroundFilterDesktop: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.videoBackgroundFilterDesktop = {
                        oneofKind: "blur",
                        blur: eO.internalBinaryRead(e, e.uint32(), n, i.videoBackgroundFilterDesktop.blur),
                    };
                    break;
                case 2:
                    i.videoBackgroundFilterDesktop = { oneofKind: "presetOption", presetOption: e.uint32() };
                    break;
                case 3:
                    i.videoBackgroundFilterDesktop = {
                        oneofKind: "customAsset",
                        customAsset: ey.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            i.videoBackgroundFilterDesktop.customAsset,
                        ),
                    };
                    break;
                case 5:
                    i.alwaysPreviewVideo = D._t.internalBinaryRead(e, e.uint32(), n, i.alwaysPreviewVideo);
                    break;
                case 6:
                    i.afkTimeout = D.ZQ.internalBinaryRead(e, e.uint32(), n, i.afkTimeout);
                    break;
                case 7:
                    i.streamNotificationsEnabled = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.streamNotificationsEnabled,
                    );
                    break;
                case 8:
                    i.nativePhoneIntegrationEnabled = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.nativePhoneIntegrationEnabled,
                    );
                    break;
                case 9:
                    i.soundboardSettings = tc.internalBinaryRead(e, e.uint32(), n, i.soundboardSettings);
                    break;
                case 10:
                    i.disableStreamPreviews = D._t.internalBinaryRead(e, e.uint32(), n, i.disableStreamPreviews);
                    break;
                case 11:
                    i.soundmojiVolume = D.uN.internalBinaryRead(e, e.uint32(), n, i.soundmojiVolume);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "blur" === e.videoBackgroundFilterDesktop.oneofKind &&
            eO
                .internalBinaryWrite(e.videoBackgroundFilterDesktop.blur, t.tag(1, R.O0.LengthDelimited).fork(), n)
                .join(),
            "presetOption" === e.videoBackgroundFilterDesktop.oneofKind &&
                t.tag(2, R.O0.Varint).uint32(e.videoBackgroundFilterDesktop.presetOption),
            "customAsset" === e.videoBackgroundFilterDesktop.oneofKind &&
                ey
                    .internalBinaryWrite(
                        e.videoBackgroundFilterDesktop.customAsset,
                        t.tag(3, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.alwaysPreviewVideo &&
                D._t.internalBinaryWrite(e.alwaysPreviewVideo, t.tag(5, R.O0.LengthDelimited).fork(), n).join(),
            e.afkTimeout && D.ZQ.internalBinaryWrite(e.afkTimeout, t.tag(6, R.O0.LengthDelimited).fork(), n).join(),
            e.streamNotificationsEnabled &&
                D._t.internalBinaryWrite(e.streamNotificationsEnabled, t.tag(7, R.O0.LengthDelimited).fork(), n).join(),
            e.nativePhoneIntegrationEnabled &&
                D._t
                    .internalBinaryWrite(e.nativePhoneIntegrationEnabled, t.tag(8, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.soundboardSettings &&
                tc.internalBinaryWrite(e.soundboardSettings, t.tag(9, R.O0.LengthDelimited).fork(), n).join(),
            e.disableStreamPreviews &&
                D._t.internalBinaryWrite(e.disableStreamPreviews, t.tag(10, R.O0.LengthDelimited).fork(), n).join(),
            e.soundmojiVolume &&
                D.uN.internalBinaryWrite(e.soundmojiVolume, t.tag(11, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ev = new eR();
class eC extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.explicitContentGuilds = e.int32();
                    break;
                case 2:
                    i.explicitContentFriendDm = e.int32();
                    break;
                case 3:
                    i.explicitContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.explicitContentGuilds && t.tag(1, R.O0.Varint).int32(e.explicitContentGuilds),
            0 !== e.explicitContentFriendDm && t.tag(2, R.O0.Varint).int32(e.explicitContentFriendDm),
            0 !== e.explicitContentNonFriendDm && t.tag(3, R.O0.Varint).int32(e.explicitContentNonFriendDm);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eb = new eC();
class eD extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.goreContentGuilds = e.int32();
                    break;
                case 2:
                    i.goreContentFriendDm = e.int32();
                    break;
                case 3:
                    i.goreContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.goreContentGuilds && t.tag(1, R.O0.Varint).int32(e.goreContentGuilds),
            0 !== e.goreContentFriendDm && t.tag(2, R.O0.Varint).int32(e.goreContentFriendDm),
            0 !== e.goreContentNonFriendDm && t.tag(3, R.O0.Varint).int32(e.goreContentNonFriendDm);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eL = new eD();
class ew extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.selfHarmContentGuilds = e.int32();
                    break;
                case 2:
                    i.selfHarmContentFriendDm = e.int32();
                    break;
                case 3:
                    i.selfHarmContentNonFriendDm = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.selfHarmContentGuilds && t.tag(1, R.O0.Varint).int32(e.selfHarmContentGuilds),
            0 !== e.selfHarmContentFriendDm && t.tag(2, R.O0.Varint).int32(e.selfHarmContentFriendDm),
            0 !== e.selfHarmContentNonFriendDm && t.tag(3, R.O0.Varint).int32(e.selfHarmContentNonFriendDm);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eM = new ew();
class eP extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.KeywordFilterSettings", [
            { no: 1, name: "profanity", kind: "message", T: () => D._t },
            { no: 2, name: "sexual_content", kind: "message", T: () => D._t },
            { no: 3, name: "slurs", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.profanity = D._t.internalBinaryRead(e, e.uint32(), n, i.profanity);
                    break;
                case 2:
                    i.sexualContent = D._t.internalBinaryRead(e, e.uint32(), n, i.sexualContent);
                    break;
                case 3:
                    i.slurs = D._t.internalBinaryRead(e, e.uint32(), n, i.slurs);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.profanity && D._t.internalBinaryWrite(e.profanity, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.sexualContent &&
                D._t.internalBinaryWrite(e.sexualContent, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.slurs && D._t.internalBinaryWrite(e.slurs, t.tag(3, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eU = new eP();
class ek extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.TextAndImagesSettings", [
            { no: 1, name: "diversity_surrogate", kind: "message", T: () => D.hU },
            { no: 2, name: "use_rich_chat_input", kind: "message", T: () => D._t },
            { no: 3, name: "use_thread_sidebar", kind: "message", T: () => D._t },
            { no: 4, name: "render_spoilers", kind: "message", T: () => D.hU },
            { no: 5, name: "emoji_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 6, name: "sticker_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 7, name: "view_image_descriptions", kind: "message", T: () => D._t },
            { no: 8, name: "show_command_suggestions", kind: "message", T: () => D._t },
            { no: 9, name: "inline_attachment_media", kind: "message", T: () => D._t },
            { no: 10, name: "inline_embed_media", kind: "message", T: () => D._t },
            { no: 11, name: "gif_auto_play", kind: "message", T: () => D._t },
            { no: 12, name: "render_embeds", kind: "message", T: () => D._t },
            { no: 13, name: "render_reactions", kind: "message", T: () => D._t },
            { no: 14, name: "animate_emoji", kind: "message", T: () => D._t },
            { no: 15, name: "animate_stickers", kind: "message", T: () => D.ZQ },
            { no: 16, name: "enable_tts_command", kind: "message", T: () => D._t },
            { no: 17, name: "message_display_compact", kind: "message", T: () => D._t },
            { no: 19, name: "explicit_content_filter", kind: "message", T: () => D.ZQ },
            { no: 20, name: "view_nsfw_guilds", kind: "message", T: () => D._t },
            { no: 21, name: "convert_emoticons", kind: "message", T: () => D._t },
            { no: 22, name: "expression_suggestions_enabled", kind: "message", T: () => D._t },
            { no: 23, name: "view_nsfw_commands", kind: "message", T: () => D._t },
            { no: 24, name: "use_legacy_chat_input", kind: "message", T: () => D._t },
            { no: 25, name: "soundboard_picker_collapsed_sections", kind: "scalar", repeat: 2, T: 9 },
            { no: 26, name: "dm_spam_filter", kind: "message", T: () => D.ZQ },
            {
                no: 27,
                name: "dm_spam_filter_v2",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DmSpamFilterV2", k],
            },
            { no: 28, name: "include_stickers_in_autocomplete", kind: "message", T: () => D._t },
            { no: 29, name: "explicit_content_settings", kind: "message", T: () => eb },
            { no: 30, name: "keyword_filter_settings", kind: "message", T: () => eU },
            { no: 31, name: "include_soundmoji_in_autocomplete", kind: "message", T: () => D._t },
            { no: 32, name: "gore_content_settings", kind: "message", T: () => eL },
            { no: 33, name: "default_reaction_emoji", kind: "message", T: () => tB },
            { no: 34, name: "show_mention_suggestions", kind: "message", T: () => D._t },
            { no: 35, name: "self_harm_content_settings", kind: "message", T: () => eM },
            { no: 36, name: "is_cross_dm_search_enabled", kind: "message", T: () => D._t },
            {
                no: 37,
                name: "search_provider",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SearchProvider", F, "SEARCH_PROVIDER_"],
            },
            { no: 38, name: "custom_search_url", kind: "message", T: () => D.hU },
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.diversitySurrogate = D.hU.internalBinaryRead(e, e.uint32(), n, i.diversitySurrogate);
                    break;
                case 2:
                    i.useRichChatInput = D._t.internalBinaryRead(e, e.uint32(), n, i.useRichChatInput);
                    break;
                case 3:
                    i.useThreadSidebar = D._t.internalBinaryRead(e, e.uint32(), n, i.useThreadSidebar);
                    break;
                case 4:
                    i.renderSpoilers = D.hU.internalBinaryRead(e, e.uint32(), n, i.renderSpoilers);
                    break;
                case 5:
                    i.emojiPickerCollapsedSections.push(e.string());
                    break;
                case 6:
                    i.stickerPickerCollapsedSections.push(e.string());
                    break;
                case 7:
                    i.viewImageDescriptions = D._t.internalBinaryRead(e, e.uint32(), n, i.viewImageDescriptions);
                    break;
                case 8:
                    i.showCommandSuggestions = D._t.internalBinaryRead(e, e.uint32(), n, i.showCommandSuggestions);
                    break;
                case 9:
                    i.inlineAttachmentMedia = D._t.internalBinaryRead(e, e.uint32(), n, i.inlineAttachmentMedia);
                    break;
                case 10:
                    i.inlineEmbedMedia = D._t.internalBinaryRead(e, e.uint32(), n, i.inlineEmbedMedia);
                    break;
                case 11:
                    i.gifAutoPlay = D._t.internalBinaryRead(e, e.uint32(), n, i.gifAutoPlay);
                    break;
                case 12:
                    i.renderEmbeds = D._t.internalBinaryRead(e, e.uint32(), n, i.renderEmbeds);
                    break;
                case 13:
                    i.renderReactions = D._t.internalBinaryRead(e, e.uint32(), n, i.renderReactions);
                    break;
                case 14:
                    i.animateEmoji = D._t.internalBinaryRead(e, e.uint32(), n, i.animateEmoji);
                    break;
                case 15:
                    i.animateStickers = D.ZQ.internalBinaryRead(e, e.uint32(), n, i.animateStickers);
                    break;
                case 16:
                    i.enableTtsCommand = D._t.internalBinaryRead(e, e.uint32(), n, i.enableTtsCommand);
                    break;
                case 17:
                    i.messageDisplayCompact = D._t.internalBinaryRead(e, e.uint32(), n, i.messageDisplayCompact);
                    break;
                case 19:
                    i.explicitContentFilter = D.ZQ.internalBinaryRead(e, e.uint32(), n, i.explicitContentFilter);
                    break;
                case 20:
                    i.viewNsfwGuilds = D._t.internalBinaryRead(e, e.uint32(), n, i.viewNsfwGuilds);
                    break;
                case 21:
                    i.convertEmoticons = D._t.internalBinaryRead(e, e.uint32(), n, i.convertEmoticons);
                    break;
                case 22:
                    i.expressionSuggestionsEnabled = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.expressionSuggestionsEnabled,
                    );
                    break;
                case 23:
                    i.viewNsfwCommands = D._t.internalBinaryRead(e, e.uint32(), n, i.viewNsfwCommands);
                    break;
                case 24:
                    i.useLegacyChatInput = D._t.internalBinaryRead(e, e.uint32(), n, i.useLegacyChatInput);
                    break;
                case 25:
                    i.soundboardPickerCollapsedSections.push(e.string());
                    break;
                case 26:
                    i.dmSpamFilter = D.ZQ.internalBinaryRead(e, e.uint32(), n, i.dmSpamFilter);
                    break;
                case 27:
                    i.dmSpamFilterV2 = e.int32();
                    break;
                case 28:
                    i.includeStickersInAutocomplete = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.includeStickersInAutocomplete,
                    );
                    break;
                case 29:
                    i.explicitContentSettings = eb.internalBinaryRead(e, e.uint32(), n, i.explicitContentSettings);
                    break;
                case 30:
                    i.keywordFilterSettings = eU.internalBinaryRead(e, e.uint32(), n, i.keywordFilterSettings);
                    break;
                case 31:
                    i.includeSoundmojiInAutocomplete = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.includeSoundmojiInAutocomplete,
                    );
                    break;
                case 32:
                    i.goreContentSettings = eL.internalBinaryRead(e, e.uint32(), n, i.goreContentSettings);
                    break;
                case 33:
                    i.defaultReactionEmoji = tB.internalBinaryRead(e, e.uint32(), n, i.defaultReactionEmoji);
                    break;
                case 34:
                    i.showMentionSuggestions = D._t.internalBinaryRead(e, e.uint32(), n, i.showMentionSuggestions);
                    break;
                case 35:
                    i.selfHarmContentSettings = eM.internalBinaryRead(e, e.uint32(), n, i.selfHarmContentSettings);
                    break;
                case 36:
                    i.isCrossDmSearchEnabled = D._t.internalBinaryRead(e, e.uint32(), n, i.isCrossDmSearchEnabled);
                    break;
                case 37:
                    i.searchProvider = e.int32();
                    break;
                case 38:
                    i.customSearchUrl = D.hU.internalBinaryRead(e, e.uint32(), n, i.customSearchUrl);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.diversitySurrogate &&
            D.hU.internalBinaryWrite(e.diversitySurrogate, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.useRichChatInput &&
                D._t.internalBinaryWrite(e.useRichChatInput, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.useThreadSidebar &&
                D._t.internalBinaryWrite(e.useThreadSidebar, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
            e.renderSpoilers &&
                D.hU.internalBinaryWrite(e.renderSpoilers, t.tag(4, R.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.emojiPickerCollapsedSections.length; n++)
            t.tag(5, R.O0.LengthDelimited).string(e.emojiPickerCollapsedSections[n]);
        for (let n = 0; n < e.stickerPickerCollapsedSections.length; n++)
            t.tag(6, R.O0.LengthDelimited).string(e.stickerPickerCollapsedSections[n]);
        e.viewImageDescriptions &&
            D._t.internalBinaryWrite(e.viewImageDescriptions, t.tag(7, R.O0.LengthDelimited).fork(), n).join(),
            e.showCommandSuggestions &&
                D._t.internalBinaryWrite(e.showCommandSuggestions, t.tag(8, R.O0.LengthDelimited).fork(), n).join(),
            e.inlineAttachmentMedia &&
                D._t.internalBinaryWrite(e.inlineAttachmentMedia, t.tag(9, R.O0.LengthDelimited).fork(), n).join(),
            e.inlineEmbedMedia &&
                D._t.internalBinaryWrite(e.inlineEmbedMedia, t.tag(10, R.O0.LengthDelimited).fork(), n).join(),
            e.gifAutoPlay && D._t.internalBinaryWrite(e.gifAutoPlay, t.tag(11, R.O0.LengthDelimited).fork(), n).join(),
            e.renderEmbeds &&
                D._t.internalBinaryWrite(e.renderEmbeds, t.tag(12, R.O0.LengthDelimited).fork(), n).join(),
            e.renderReactions &&
                D._t.internalBinaryWrite(e.renderReactions, t.tag(13, R.O0.LengthDelimited).fork(), n).join(),
            e.animateEmoji &&
                D._t.internalBinaryWrite(e.animateEmoji, t.tag(14, R.O0.LengthDelimited).fork(), n).join(),
            e.animateStickers &&
                D.ZQ.internalBinaryWrite(e.animateStickers, t.tag(15, R.O0.LengthDelimited).fork(), n).join(),
            e.enableTtsCommand &&
                D._t.internalBinaryWrite(e.enableTtsCommand, t.tag(16, R.O0.LengthDelimited).fork(), n).join(),
            e.messageDisplayCompact &&
                D._t.internalBinaryWrite(e.messageDisplayCompact, t.tag(17, R.O0.LengthDelimited).fork(), n).join(),
            e.explicitContentFilter &&
                D.ZQ.internalBinaryWrite(e.explicitContentFilter, t.tag(19, R.O0.LengthDelimited).fork(), n).join(),
            e.viewNsfwGuilds &&
                D._t.internalBinaryWrite(e.viewNsfwGuilds, t.tag(20, R.O0.LengthDelimited).fork(), n).join(),
            e.convertEmoticons &&
                D._t.internalBinaryWrite(e.convertEmoticons, t.tag(21, R.O0.LengthDelimited).fork(), n).join(),
            e.expressionSuggestionsEnabled &&
                D._t
                    .internalBinaryWrite(e.expressionSuggestionsEnabled, t.tag(22, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.viewNsfwCommands &&
                D._t.internalBinaryWrite(e.viewNsfwCommands, t.tag(23, R.O0.LengthDelimited).fork(), n).join(),
            e.useLegacyChatInput &&
                D._t.internalBinaryWrite(e.useLegacyChatInput, t.tag(24, R.O0.LengthDelimited).fork(), n).join();
        for (let n = 0; n < e.soundboardPickerCollapsedSections.length; n++)
            t.tag(25, R.O0.LengthDelimited).string(e.soundboardPickerCollapsedSections[n]);
        e.dmSpamFilter && D.ZQ.internalBinaryWrite(e.dmSpamFilter, t.tag(26, R.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dmSpamFilterV2 && t.tag(27, R.O0.Varint).int32(e.dmSpamFilterV2),
            e.includeStickersInAutocomplete &&
                D._t
                    .internalBinaryWrite(e.includeStickersInAutocomplete, t.tag(28, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.explicitContentSettings &&
                eb.internalBinaryWrite(e.explicitContentSettings, t.tag(29, R.O0.LengthDelimited).fork(), n).join(),
            e.keywordFilterSettings &&
                eU.internalBinaryWrite(e.keywordFilterSettings, t.tag(30, R.O0.LengthDelimited).fork(), n).join(),
            e.includeSoundmojiInAutocomplete &&
                D._t
                    .internalBinaryWrite(e.includeSoundmojiInAutocomplete, t.tag(31, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.goreContentSettings &&
                eL.internalBinaryWrite(e.goreContentSettings, t.tag(32, R.O0.LengthDelimited).fork(), n).join(),
            e.defaultReactionEmoji &&
                tB.internalBinaryWrite(e.defaultReactionEmoji, t.tag(33, R.O0.LengthDelimited).fork(), n).join(),
            e.showMentionSuggestions &&
                D._t.internalBinaryWrite(e.showMentionSuggestions, t.tag(34, R.O0.LengthDelimited).fork(), n).join(),
            e.selfHarmContentSettings &&
                eM.internalBinaryWrite(e.selfHarmContentSettings, t.tag(35, R.O0.LengthDelimited).fork(), n).join(),
            e.isCrossDmSearchEnabled &&
                D._t.internalBinaryWrite(e.isCrossDmSearchEnabled, t.tag(36, R.O0.LengthDelimited).fork(), n).join(),
            0 !== e.searchProvider && t.tag(37, R.O0.Varint).int32(e.searchProvider),
            e.customSearchUrl &&
                D.hU.internalBinaryWrite(e.customSearchUrl, t.tag(38, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ex = new ek();
class eG extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.NotificationSettings", [
            { no: 1, name: "show_in_app_notifications", kind: "message", T: () => D._t },
            { no: 2, name: "notify_friends_on_go_live", kind: "message", T: () => D._t },
            { no: 3, name: "notification_center_acked_before_id", kind: "scalar", T: 6 },
            { no: 4, name: "enable_burst_reaction_notifications", kind: "message", T: () => D._t },
            { no: 5, name: "quiet_mode", kind: "message", T: () => D._t },
            { no: 6, name: "focus_mode_expires_at_ms", kind: "scalar", T: 6 },
            {
                no: 7,
                name: "reaction_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ReactionNotificationType", x],
            },
            {
                no: 8,
                name: "game_activity_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GameActivityNotificationType", G],
            },
            {
                no: 9,
                name: "custom_status_push_notifications",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.CustomStatusPushNotificationType", V],
            },
            { no: 10, name: "game_activity_exclude_steam_notifications", kind: "message", T: () => D._t },
            { no: 11, name: "enable_voice_activity_notifications", kind: "message", T: () => D._t },
            { no: 12, name: "enable_friend_online_notifications", kind: "message", T: () => D._t },
            { no: 13, name: "enable_user_resurrection_notifications", kind: "message", T: () => D._t },
            { no: 14, name: "enable_friend_anniversary_notifications", kind: "message", T: () => D._t },
            { no: 15, name: "enable_game_update_notifications", kind: "message", T: () => D._t },
            { no: 16, name: "enable_profile_updates_notifications", kind: "message", T: () => D._t },
            { no: 17, name: "enable_server_trending_notifications", kind: "message", T: () => D._t },
            { no: 18, name: "enable_dm_reply_nudge_reminders", kind: "message", T: () => D._t },
            { no: 19, name: "enable_summary_reminder_notifications", kind: "message", T: () => D._t },
            { no: 20, name: "enable_gdm_all_reaction_notifications", kind: "message", T: () => D._t },
            { no: 21, name: "enable_friend_gaming_activity_notifications", kind: "message", T: () => D._t },
            { no: 22, name: "enable_upcoming_server_event_notifications", kind: "message", T: () => D._t },
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.showInAppNotifications = D._t.internalBinaryRead(e, e.uint32(), n, i.showInAppNotifications);
                    break;
                case 2:
                    i.notifyFriendsOnGoLive = D._t.internalBinaryRead(e, e.uint32(), n, i.notifyFriendsOnGoLive);
                    break;
                case 3:
                    i.notificationCenterAckedBeforeId = e.fixed64().toString();
                    break;
                case 4:
                    i.enableBurstReactionNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableBurstReactionNotifications,
                    );
                    break;
                case 5:
                    i.quietMode = D._t.internalBinaryRead(e, e.uint32(), n, i.quietMode);
                    break;
                case 6:
                    i.focusModeExpiresAtMs = e.fixed64().toString();
                    break;
                case 7:
                    i.reactionNotifications = e.int32();
                    break;
                case 8:
                    i.gameActivityNotifications = e.int32();
                    break;
                case 9:
                    i.customStatusPushNotifications = e.int32();
                    break;
                case 10:
                    i.gameActivityExcludeSteamNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.gameActivityExcludeSteamNotifications,
                    );
                    break;
                case 11:
                    i.enableVoiceActivityNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableVoiceActivityNotifications,
                    );
                    break;
                case 12:
                    i.enableFriendOnlineNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableFriendOnlineNotifications,
                    );
                    break;
                case 13:
                    i.enableUserResurrectionNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableUserResurrectionNotifications,
                    );
                    break;
                case 14:
                    i.enableFriendAnniversaryNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableFriendAnniversaryNotifications,
                    );
                    break;
                case 15:
                    i.enableGameUpdateNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableGameUpdateNotifications,
                    );
                    break;
                case 16:
                    i.enableProfileUpdatesNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableProfileUpdatesNotifications,
                    );
                    break;
                case 17:
                    i.enableServerTrendingNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableServerTrendingNotifications,
                    );
                    break;
                case 18:
                    i.enableDmReplyNudgeReminders = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableDmReplyNudgeReminders,
                    );
                    break;
                case 19:
                    i.enableSummaryReminderNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableSummaryReminderNotifications,
                    );
                    break;
                case 20:
                    i.enableGdmAllReactionNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableGdmAllReactionNotifications,
                    );
                    break;
                case 21:
                    i.enableFriendGamingActivityNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableFriendGamingActivityNotifications,
                    );
                    break;
                case 22:
                    i.enableUpcomingServerEventNotifications = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.enableUpcomingServerEventNotifications,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.showInAppNotifications &&
            D._t.internalBinaryWrite(e.showInAppNotifications, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.notifyFriendsOnGoLive &&
                D._t.internalBinaryWrite(e.notifyFriendsOnGoLive, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.notificationCenterAckedBeforeId &&
                t.tag(3, R.O0.Bit64).fixed64(e.notificationCenterAckedBeforeId),
            e.enableBurstReactionNotifications &&
                D._t
                    .internalBinaryWrite(e.enableBurstReactionNotifications, t.tag(4, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.quietMode && D._t.internalBinaryWrite(e.quietMode, t.tag(5, R.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.focusModeExpiresAtMs && t.tag(6, R.O0.Bit64).fixed64(e.focusModeExpiresAtMs),
            0 !== e.reactionNotifications && t.tag(7, R.O0.Varint).int32(e.reactionNotifications),
            0 !== e.gameActivityNotifications && t.tag(8, R.O0.Varint).int32(e.gameActivityNotifications),
            0 !== e.customStatusPushNotifications && t.tag(9, R.O0.Varint).int32(e.customStatusPushNotifications),
            e.gameActivityExcludeSteamNotifications &&
                D._t
                    .internalBinaryWrite(
                        e.gameActivityExcludeSteamNotifications,
                        t.tag(10, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableVoiceActivityNotifications &&
                D._t
                    .internalBinaryWrite(e.enableVoiceActivityNotifications, t.tag(11, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendOnlineNotifications &&
                D._t
                    .internalBinaryWrite(e.enableFriendOnlineNotifications, t.tag(12, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableUserResurrectionNotifications &&
                D._t
                    .internalBinaryWrite(
                        e.enableUserResurrectionNotifications,
                        t.tag(13, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableFriendAnniversaryNotifications &&
                D._t
                    .internalBinaryWrite(
                        e.enableFriendAnniversaryNotifications,
                        t.tag(14, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGameUpdateNotifications &&
                D._t
                    .internalBinaryWrite(e.enableGameUpdateNotifications, t.tag(15, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableProfileUpdatesNotifications &&
                D._t
                    .internalBinaryWrite(e.enableProfileUpdatesNotifications, t.tag(16, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableServerTrendingNotifications &&
                D._t
                    .internalBinaryWrite(e.enableServerTrendingNotifications, t.tag(17, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableDmReplyNudgeReminders &&
                D._t
                    .internalBinaryWrite(e.enableDmReplyNudgeReminders, t.tag(18, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableSummaryReminderNotifications &&
                D._t
                    .internalBinaryWrite(
                        e.enableSummaryReminderNotifications,
                        t.tag(19, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableGdmAllReactionNotifications &&
                D._t
                    .internalBinaryWrite(e.enableGdmAllReactionNotifications, t.tag(20, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.enableFriendGamingActivityNotifications &&
                D._t
                    .internalBinaryWrite(
                        e.enableFriendGamingActivityNotifications,
                        t.tag(21, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.enableUpcomingServerEventNotifications &&
                D._t
                    .internalBinaryWrite(
                        e.enableUpcomingServerEventNotifications,
                        t.tag(22, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eV = new eG();
class eF extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.PrivacySettings", [
            { no: 1, name: "allow_activity_party_privacy_friends", kind: "message", T: () => D._t },
            { no: 2, name: "allow_activity_party_privacy_voice_channel", kind: "message", T: () => D._t },
            { no: 3, name: "restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "default_guilds_restricted", kind: "scalar", T: 8 },
            { no: 7, name: "allow_accessibility_detection", kind: "scalar", T: 8 },
            { no: 8, name: "detect_platform_accounts", kind: "message", T: () => D._t },
            { no: 9, name: "passwordless", kind: "message", T: () => D._t },
            { no: 10, name: "contact_sync_enabled", kind: "message", T: () => D._t },
            { no: 11, name: "friend_source_flags", kind: "message", T: () => D.ZQ },
            { no: 12, name: "friend_discovery_flags", kind: "message", T: () => D.ZQ },
            { no: 13, name: "activity_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            {
                no: 14,
                name: "default_guilds_activity_restricted",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault", B],
            },
            { no: 15, name: "activity_joining_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 16, name: "message_request_restricted_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 17, name: "default_message_request_restricted", kind: "message", T: () => D._t },
            { no: 18, name: "drops_opted_out", kind: "message", T: () => D._t },
            { no: 19, name: "non_spam_retraining_opt_in", kind: "message", T: () => D._t },
            { no: 20, name: "family_center_enabled", kind: "message", T: () => D._t },
            { no: 21, name: "family_center_enabled_v2", kind: "message", T: () => D._t },
            { no: 22, name: "hide_legacy_username", kind: "message", T: () => D._t },
            { no: 23, name: "inappropriate_conversation_warnings", kind: "message", T: () => D._t },
            { no: 24, name: "recent_games_enabled", kind: "message", T: () => D._t },
            {
                no: 25,
                name: "guilds_leaderboard_opt_out_default",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault", Y],
            },
            { no: 26, name: "allow_game_friend_dms_in_discord", kind: "message", T: () => D._t },
            { no: 27, name: "default_guilds_restricted_v2", kind: "message", T: () => D._t },
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
                T: () => ["discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2", H],
            },
            {
                no: 30,
                name: "quests_3p_data_opted_out",
                kind: "message",
                jsonName: "quests3pDataOptedOut",
                T: () => D._t,
            },
            { no: 31, name: "show_local_time", kind: "message", T: () => D._t },
            {
                no: 32,
                name: "profile_visibility",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ProfileVisibility", j, "PROFILE_VISIBILITY_"],
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.allowActivityPartyPrivacyFriends = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.allowActivityPartyPrivacyFriends,
                    );
                    break;
                case 2:
                    i.allowActivityPartyPrivacyVoiceChannel = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.allowActivityPartyPrivacyVoiceChannel,
                    );
                    break;
                case 3:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.restrictedGuildIds.push(e.fixed64().toString());
                    else i.restrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 4:
                    i.defaultGuildsRestricted = e.bool();
                    break;
                case 7:
                    i.allowAccessibilityDetection = e.bool();
                    break;
                case 8:
                    i.detectPlatformAccounts = D._t.internalBinaryRead(e, e.uint32(), n, i.detectPlatformAccounts);
                    break;
                case 9:
                    i.passwordless = D._t.internalBinaryRead(e, e.uint32(), n, i.passwordless);
                    break;
                case 10:
                    i.contactSyncEnabled = D._t.internalBinaryRead(e, e.uint32(), n, i.contactSyncEnabled);
                    break;
                case 11:
                    i.friendSourceFlags = D.ZQ.internalBinaryRead(e, e.uint32(), n, i.friendSourceFlags);
                    break;
                case 12:
                    i.friendDiscoveryFlags = D.ZQ.internalBinaryRead(e, e.uint32(), n, i.friendDiscoveryFlags);
                    break;
                case 13:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            i.activityRestrictedGuildIds.push(e.fixed64().toString());
                    else i.activityRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 14:
                    i.defaultGuildsActivityRestricted = e.int32();
                    break;
                case 15:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            i.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    else i.activityJoiningRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 16:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; )
                            i.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    else i.messageRequestRestrictedGuildIds.push(e.fixed64().toString());
                    break;
                case 17:
                    i.defaultMessageRequestRestricted = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.defaultMessageRequestRestricted,
                    );
                    break;
                case 18:
                    i.dropsOptedOut = D._t.internalBinaryRead(e, e.uint32(), n, i.dropsOptedOut);
                    break;
                case 19:
                    i.nonSpamRetrainingOptIn = D._t.internalBinaryRead(e, e.uint32(), n, i.nonSpamRetrainingOptIn);
                    break;
                case 20:
                    i.familyCenterEnabled = D._t.internalBinaryRead(e, e.uint32(), n, i.familyCenterEnabled);
                    break;
                case 21:
                    i.familyCenterEnabledV2 = D._t.internalBinaryRead(e, e.uint32(), n, i.familyCenterEnabledV2);
                    break;
                case 22:
                    i.hideLegacyUsername = D._t.internalBinaryRead(e, e.uint32(), n, i.hideLegacyUsername);
                    break;
                case 23:
                    i.inappropriateConversationWarnings = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.inappropriateConversationWarnings,
                    );
                    break;
                case 24:
                    i.recentGamesEnabled = D._t.internalBinaryRead(e, e.uint32(), n, i.recentGamesEnabled);
                    break;
                case 25:
                    i.guildsLeaderboardOptOutDefault = e.int32();
                    break;
                case 26:
                    i.allowGameFriendDmsInDiscord = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.allowGameFriendDmsInDiscord,
                    );
                    break;
                case 27:
                    i.defaultGuildsRestrictedV2 = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.defaultGuildsRestrictedV2,
                    );
                    break;
                case 28:
                    i.slayerSdkReceiveDmsInGame = e.int32();
                    break;
                case 29:
                    i.defaultGuildsActivityRestrictedV2 = e.int32();
                    break;
                case 30:
                    i.quests3PDataOptedOut = D._t.internalBinaryRead(e, e.uint32(), n, i.quests3PDataOptedOut);
                    break;
                case 31:
                    i.showLocalTime = D._t.internalBinaryRead(e, e.uint32(), n, i.showLocalTime);
                    break;
                case 32:
                    i.profileVisibility = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowActivityPartyPrivacyFriends &&
                D._t
                    .internalBinaryWrite(e.allowActivityPartyPrivacyFriends, t.tag(1, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.allowActivityPartyPrivacyVoiceChannel &&
                D._t
                    .internalBinaryWrite(
                        e.allowActivityPartyPrivacyVoiceChannel,
                        t.tag(2, R.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            e.restrictedGuildIds.length)
        ) {
            t.tag(3, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.restrictedGuildIds.length; n++) t.fixed64(e.restrictedGuildIds[n]);
            t.join();
        }
        if (
            (!1 !== e.defaultGuildsRestricted && t.tag(4, R.O0.Varint).bool(e.defaultGuildsRestricted),
            !1 !== e.allowAccessibilityDetection && t.tag(7, R.O0.Varint).bool(e.allowAccessibilityDetection),
            e.detectPlatformAccounts &&
                D._t.internalBinaryWrite(e.detectPlatformAccounts, t.tag(8, R.O0.LengthDelimited).fork(), n).join(),
            e.passwordless && D._t.internalBinaryWrite(e.passwordless, t.tag(9, R.O0.LengthDelimited).fork(), n).join(),
            e.contactSyncEnabled &&
                D._t.internalBinaryWrite(e.contactSyncEnabled, t.tag(10, R.O0.LengthDelimited).fork(), n).join(),
            e.friendSourceFlags &&
                D.ZQ.internalBinaryWrite(e.friendSourceFlags, t.tag(11, R.O0.LengthDelimited).fork(), n).join(),
            e.friendDiscoveryFlags &&
                D.ZQ.internalBinaryWrite(e.friendDiscoveryFlags, t.tag(12, R.O0.LengthDelimited).fork(), n).join(),
            e.activityRestrictedGuildIds.length)
        ) {
            t.tag(13, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityRestrictedGuildIds.length; n++) t.fixed64(e.activityRestrictedGuildIds[n]);
            t.join();
        }
        if (
            (0 !== e.defaultGuildsActivityRestricted && t.tag(14, R.O0.Varint).int32(e.defaultGuildsActivityRestricted),
            e.activityJoiningRestrictedGuildIds.length)
        ) {
            t.tag(15, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activityJoiningRestrictedGuildIds.length; n++)
                t.fixed64(e.activityJoiningRestrictedGuildIds[n]);
            t.join();
        }
        if (e.messageRequestRestrictedGuildIds.length) {
            t.tag(16, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.messageRequestRestrictedGuildIds.length; n++)
                t.fixed64(e.messageRequestRestrictedGuildIds[n]);
            t.join();
        }
        e.defaultMessageRequestRestricted &&
            D._t
                .internalBinaryWrite(e.defaultMessageRequestRestricted, t.tag(17, R.O0.LengthDelimited).fork(), n)
                .join(),
            e.dropsOptedOut &&
                D._t.internalBinaryWrite(e.dropsOptedOut, t.tag(18, R.O0.LengthDelimited).fork(), n).join(),
            e.nonSpamRetrainingOptIn &&
                D._t.internalBinaryWrite(e.nonSpamRetrainingOptIn, t.tag(19, R.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabled &&
                D._t.internalBinaryWrite(e.familyCenterEnabled, t.tag(20, R.O0.LengthDelimited).fork(), n).join(),
            e.familyCenterEnabledV2 &&
                D._t.internalBinaryWrite(e.familyCenterEnabledV2, t.tag(21, R.O0.LengthDelimited).fork(), n).join(),
            e.hideLegacyUsername &&
                D._t.internalBinaryWrite(e.hideLegacyUsername, t.tag(22, R.O0.LengthDelimited).fork(), n).join(),
            e.inappropriateConversationWarnings &&
                D._t
                    .internalBinaryWrite(e.inappropriateConversationWarnings, t.tag(23, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.recentGamesEnabled &&
                D._t.internalBinaryWrite(e.recentGamesEnabled, t.tag(24, R.O0.LengthDelimited).fork(), n).join(),
            0 !== e.guildsLeaderboardOptOutDefault && t.tag(25, R.O0.Varint).int32(e.guildsLeaderboardOptOutDefault),
            e.allowGameFriendDmsInDiscord &&
                D._t
                    .internalBinaryWrite(e.allowGameFriendDmsInDiscord, t.tag(26, R.O0.LengthDelimited).fork(), n)
                    .join(),
            e.defaultGuildsRestrictedV2 &&
                D._t.internalBinaryWrite(e.defaultGuildsRestrictedV2, t.tag(27, R.O0.LengthDelimited).fork(), n).join(),
            0 !== e.slayerSdkReceiveDmsInGame && t.tag(28, R.O0.Varint).int32(e.slayerSdkReceiveDmsInGame),
            0 !== e.defaultGuildsActivityRestrictedV2 &&
                t.tag(29, R.O0.Varint).int32(e.defaultGuildsActivityRestrictedV2),
            e.quests3PDataOptedOut &&
                D._t.internalBinaryWrite(e.quests3PDataOptedOut, t.tag(30, R.O0.LengthDelimited).fork(), n).join(),
            e.showLocalTime &&
                D._t.internalBinaryWrite(e.showLocalTime, t.tag(31, R.O0.LengthDelimited).fork(), n).join(),
            0 !== e.profileVisibility && t.tag(32, R.O0.Varint).int32(e.profileVisibility);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eB = new eF();
class eH extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.DebugSettings", [
            { no: 1, name: "rtc_panel_show_voice_states", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t)
                i.rtcPanelShowVoiceStates = D._t.internalBinaryRead(e, e.uint32(), n, i.rtcPanelShowVoiceStates);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.rtcPanelShowVoiceStates &&
            D._t.internalBinaryWrite(e.rtcPanelShowVoiceStates, t.tag(1, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eY = new eH();
class eW extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GameLibrarySettings", [
            { no: 1, name: "install_shortcut_desktop", kind: "message", T: () => D._t },
            { no: 2, name: "install_shortcut_start_menu", kind: "message", T: () => D._t },
            { no: 3, name: "disable_games_tab", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.installShortcutDesktop = D._t.internalBinaryRead(e, e.uint32(), n, i.installShortcutDesktop);
                    break;
                case 2:
                    i.installShortcutStartMenu = D._t.internalBinaryRead(e, e.uint32(), n, i.installShortcutStartMenu);
                    break;
                case 3:
                    i.disableGamesTab = D._t.internalBinaryRead(e, e.uint32(), n, i.disableGamesTab);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.installShortcutDesktop &&
            D._t.internalBinaryWrite(e.installShortcutDesktop, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.installShortcutStartMenu &&
                D._t.internalBinaryWrite(e.installShortcutStartMenu, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.disableGamesTab &&
                D._t.internalBinaryWrite(e.disableGamesTab, t.tag(3, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ej = new eW();
class eK extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.StatusSettings", [
            { no: 1, name: "status", kind: "message", T: () => D.hU },
            { no: 2, name: "custom_status", kind: "message", T: () => eq },
            { no: 3, name: "show_current_game", kind: "message", T: () => D._t },
            { no: 4, name: "status_expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "status_created_at_ms", kind: "message", T: () => D.ol },
        ]);
    }
    create(e) {
        let t = { statusExpiresAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.status = D.hU.internalBinaryRead(e, e.uint32(), n, i.status);
                    break;
                case 2:
                    i.customStatus = eq.internalBinaryRead(e, e.uint32(), n, i.customStatus);
                    break;
                case 3:
                    i.showCurrentGame = D._t.internalBinaryRead(e, e.uint32(), n, i.showCurrentGame);
                    break;
                case 4:
                    i.statusExpiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    i.statusCreatedAtMs = D.ol.internalBinaryRead(e, e.uint32(), n, i.statusCreatedAtMs);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.status && D.hU.internalBinaryWrite(e.status, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.customStatus && eq.internalBinaryWrite(e.customStatus, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.showCurrentGame &&
                D._t.internalBinaryWrite(e.showCurrentGame, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.statusExpiresAtMs && t.tag(4, R.O0.Bit64).fixed64(e.statusExpiresAtMs),
            e.statusCreatedAtMs &&
                D.ol.internalBinaryWrite(e.statusCreatedAtMs, t.tag(5, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e$ = new eK();
class ez extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomStatus", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "emoji_id", kind: "scalar", T: 6 },
            { no: 3, name: "emoji_name", kind: "scalar", T: 9 },
            { no: 4, name: "expires_at_ms", kind: "scalar", T: 6 },
            { no: 5, name: "created_at_ms", kind: "scalar", T: 6 },
            { no: 6, name: "label", kind: "message", T: () => D.hU },
        ]);
    }
    create(e) {
        let t = { text: "", emojiId: "0", emojiName: "", expiresAtMs: "0", createdAtMs: "0" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.text = e.string();
                    break;
                case 2:
                    i.emojiId = e.fixed64().toString();
                    break;
                case 3:
                    i.emojiName = e.string();
                    break;
                case 4:
                    i.expiresAtMs = e.fixed64().toString();
                    break;
                case 5:
                    i.createdAtMs = e.fixed64().toString();
                    break;
                case 6:
                    i.label = D.hU.internalBinaryRead(e, e.uint32(), n, i.label);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.text && t.tag(1, R.O0.LengthDelimited).string(e.text),
            "0" !== e.emojiId && t.tag(2, R.O0.Bit64).fixed64(e.emojiId),
            "" !== e.emojiName && t.tag(3, R.O0.LengthDelimited).string(e.emojiName),
            "0" !== e.expiresAtMs && t.tag(4, R.O0.Bit64).fixed64(e.expiresAtMs),
            "0" !== e.createdAtMs && t.tag(5, R.O0.Bit64).fixed64(e.createdAtMs),
            e.label && D.hU.internalBinaryWrite(e.label, t.tag(6, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eq = new ez();
class eX extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.LocalizationSettings", [
            { no: 1, name: "locale", kind: "message", T: () => D.hU },
            { no: 2, name: "timezone_offset", kind: "message", T: () => D.as },
            { no: 3, name: "timezone_name", kind: "message", T: () => D.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.locale = D.hU.internalBinaryRead(e, e.uint32(), n, i.locale);
                    break;
                case 2:
                    i.timezoneOffset = D.as.internalBinaryRead(e, e.uint32(), n, i.timezoneOffset);
                    break;
                case 3:
                    i.timezoneName = D.hU.internalBinaryRead(e, e.uint32(), n, i.timezoneName);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.locale && D.hU.internalBinaryWrite(e.locale, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.timezoneOffset &&
                D.as.internalBinaryWrite(e.timezoneOffset, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.timezoneName && D.hU.internalBinaryWrite(e.timezoneName, t.tag(3, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eQ = new eX();
class eJ extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ChannelListSettings", [
            { no: 1, name: "layout", kind: "message", T: () => D.hU },
            { no: 2, name: "message_previews", kind: "message", T: () => D.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.layout = D.hU.internalBinaryRead(e, e.uint32(), n, i.layout);
                    break;
                case 2:
                    i.messagePreviews = D.hU.internalBinaryRead(e, e.uint32(), n, i.messagePreviews);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.layout && D.hU.internalBinaryWrite(e.layout, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                D.hU.internalBinaryWrite(e.messagePreviews, t.tag(2, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eZ = new eJ();
class e0 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AppearanceSettings", [
            { no: 1, name: "theme", kind: "enum", T: () => ["discord_protos.discord_users.v1.Theme", $] },
            { no: 2, name: "developer_mode", kind: "scalar", T: 8 },
            { no: 3, name: "client_theme_settings", kind: "message", T: () => e4 },
            { no: 4, name: "mobile_redesign_disabled", kind: "scalar", T: 8 },
            { no: 6, name: "channel_list_layout", kind: "message", T: () => D.hU },
            { no: 7, name: "message_previews", kind: "message", T: () => D.hU },
            { no: 8, name: "search_result_exact_count_enabled", kind: "message", T: () => D._t },
            {
                no: 9,
                name: "timestamp_hour_cycle",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.TimestampHourCycle", q],
            },
            { no: 10, name: "happening_now_cards_disabled", kind: "message", T: () => D._t },
            {
                no: 11,
                name: "launch_pad_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.LaunchPadMode", X],
            },
            { no: 12, name: "ui_density", kind: "enum", T: () => ["discord_protos.discord_users.v1.UIDensity", K] },
            {
                no: 13,
                name: "swipe_right_to_left_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SwipeRightToLeftMode", Q],
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.theme = e.int32();
                    break;
                case 2:
                    i.developerMode = e.bool();
                    break;
                case 3:
                    i.clientThemeSettings = e4.internalBinaryRead(e, e.uint32(), n, i.clientThemeSettings);
                    break;
                case 4:
                    i.mobileRedesignDisabled = e.bool();
                    break;
                case 6:
                    i.channelListLayout = D.hU.internalBinaryRead(e, e.uint32(), n, i.channelListLayout);
                    break;
                case 7:
                    i.messagePreviews = D.hU.internalBinaryRead(e, e.uint32(), n, i.messagePreviews);
                    break;
                case 8:
                    i.searchResultExactCountEnabled = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.searchResultExactCountEnabled,
                    );
                    break;
                case 9:
                    i.timestampHourCycle = e.int32();
                    break;
                case 10:
                    i.happeningNowCardsDisabled = D._t.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.happeningNowCardsDisabled,
                    );
                    break;
                case 11:
                    i.launchPadMode = e.int32();
                    break;
                case 12:
                    i.uiDensity = e.int32();
                    break;
                case 13:
                    i.swipeRightToLeftMode = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.theme && t.tag(1, R.O0.Varint).int32(e.theme),
            !1 !== e.developerMode && t.tag(2, R.O0.Varint).bool(e.developerMode),
            e.clientThemeSettings &&
                e4.internalBinaryWrite(e.clientThemeSettings, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.mobileRedesignDisabled && t.tag(4, R.O0.Varint).bool(e.mobileRedesignDisabled),
            e.channelListLayout &&
                D.hU.internalBinaryWrite(e.channelListLayout, t.tag(6, R.O0.LengthDelimited).fork(), n).join(),
            e.messagePreviews &&
                D.hU.internalBinaryWrite(e.messagePreviews, t.tag(7, R.O0.LengthDelimited).fork(), n).join(),
            e.searchResultExactCountEnabled &&
                D._t
                    .internalBinaryWrite(e.searchResultExactCountEnabled, t.tag(8, R.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.timestampHourCycle && t.tag(9, R.O0.Varint).int32(e.timestampHourCycle),
            e.happeningNowCardsDisabled &&
                D._t.internalBinaryWrite(e.happeningNowCardsDisabled, t.tag(10, R.O0.LengthDelimited).fork(), n).join(),
            0 !== e.launchPadMode && t.tag(11, R.O0.Varint).int32(e.launchPadMode),
            0 !== e.uiDensity && t.tag(12, R.O0.Varint).int32(e.uiDensity),
            0 !== e.swipeRightToLeftMode && t.tag(13, R.O0.Varint).int32(e.swipeRightToLeftMode);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e1 = new e0();
class e2 extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.colors.push(e.string());
                    break;
                case 2:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.gradientColorStops.push(e.float());
                    else i.gradientColorStops.push(e.float());
                    break;
                case 3:
                    i.gradientAngle = e.int32();
                    break;
                case 4:
                    i.baseMix = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, R.O0.LengthDelimited).string(e.colors[n]);
        if (e.gradientColorStops.length) {
            t.tag(2, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.gradientColorStops.length; n++) t.float(e.gradientColorStops[n]);
            t.join();
        }
        0 !== e.gradientAngle && t.tag(3, R.O0.Varint).int32(e.gradientAngle),
            0 !== e.baseMix && t.tag(4, R.O0.Varint).int32(e.baseMix);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e3 = new e2();
class e6 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClientThemeSettings", [
            { no: 2, name: "background_gradient_preset_id", kind: "message", T: () => D.ZQ },
            { no: 4, name: "custom_user_theme_settings", kind: "message", T: () => e3 },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 2:
                    i.backgroundGradientPresetId = D.ZQ.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        i.backgroundGradientPresetId,
                    );
                    break;
                case 4:
                    i.customUserThemeSettings = e3.internalBinaryRead(e, e.uint32(), n, i.customUserThemeSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.backgroundGradientPresetId &&
            D.ZQ.internalBinaryWrite(e.backgroundGradientPresetId, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.customUserThemeSettings &&
                e3.internalBinaryWrite(e.customUserThemeSettings, t.tag(4, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e4 = new e6();
class e5 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolders", [
            { no: 1, name: "folders", kind: "message", repeat: 1, T: () => e9 },
            { no: 2, name: "guild_positions", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { folders: [], guildPositions: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.folders.push(e9.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.guildPositions.push(e.fixed64().toString());
                    else i.guildPositions.push(e.fixed64().toString());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.folders.length; r++)
            e9.internalBinaryWrite(e.folders[r], t.tag(1, R.O0.LengthDelimited).fork(), n).join();
        if (e.guildPositions.length) {
            t.tag(2, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildPositions.length; n++) t.fixed64(e.guildPositions[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e7 = new e5();
class e8 extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildFolder", [
            { no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 2, name: "id", kind: "message", T: () => D.j1 },
            { no: 3, name: "name", kind: "message", T: () => D.hU },
            { no: 4, name: "color", kind: "message", T: () => D.ol },
        ]);
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.guildIds.push(e.fixed64().toString());
                    else i.guildIds.push(e.fixed64().toString());
                    break;
                case 2:
                    i.id = D.j1.internalBinaryRead(e, e.uint32(), n, i.id);
                    break;
                case 3:
                    i.name = D.hU.internalBinaryRead(e, e.uint32(), n, i.name);
                    break;
                case 4:
                    i.color = D.ol.internalBinaryRead(e, e.uint32(), n, i.color);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        e.id && D.j1.internalBinaryWrite(e.id, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.name && D.hU.internalBinaryWrite(e.name, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
            e.color && D.ol.internalBinaryWrite(e.color, t.tag(4, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e9 = new e8();
class te extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.Favorites", [
            { no: 1, name: "favorite_channels", kind: "map", K: 6, V: { kind: "message", T: () => tr } },
            { no: 2, name: "muted", kind: "scalar", T: 8 },
            { no: 3, name: "guild_visible", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = { favoriteChannels: {}, muted: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(i.favoriteChannels, e, n);
                    break;
                case 2:
                    i.muted = e.bool();
                    break;
                case 3:
                    i.guildVisible = D._t.internalBinaryRead(e, e.uint32(), n, i.guildVisible);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = tr.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels",
                    );
            }
        }
        e[s ?? "0"] = a ?? tr.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.favoriteChannels))
            t.tag(1, R.O0.LengthDelimited).fork().tag(1, R.O0.Bit64).fixed64(r),
                t.tag(2, R.O0.LengthDelimited).fork(),
                tr.internalBinaryWrite(e.favoriteChannels[r], t, n),
                t.join().join();
        !1 !== e.muted && t.tag(2, R.O0.Varint).bool(e.muted),
            e.guildVisible && D._t.internalBinaryWrite(e.guildVisible, t.tag(3, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tt = new te();
class tn extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteChannel", [
            { no: 1, name: "nickname", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: () => ["discord_protos.discord_users.v1.FavoriteChannelType", J] },
            { no: 3, name: "position", kind: "scalar", T: 13 },
            { no: 4, name: "parent_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { nickname: "", type: 0, position: 0, parentId: "0" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.nickname = e.string();
                    break;
                case 2:
                    i.type = e.int32();
                    break;
                case 3:
                    i.position = e.uint32();
                    break;
                case 4:
                    i.parentId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.nickname && t.tag(1, R.O0.LengthDelimited).string(e.nickname),
            0 !== e.type && t.tag(2, R.O0.Varint).int32(e.type),
            0 !== e.position && t.tag(3, R.O0.Varint).uint32(e.position),
            "0" !== e.parentId && t.tag(4, R.O0.Bit64).fixed64(e.parentId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tr = new tn();
class ti extends b.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.muted = e.bool();
                    break;
                case 2:
                    i.volume = e.float();
                    break;
                case 3:
                    i.modifiedAt = e.fixed64().toString();
                    break;
                case 4:
                    i.soundboardMuted = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.muted && t.tag(1, R.O0.Varint).bool(e.muted),
            0 !== e.volume && t.tag(2, R.O0.Bit32).float(e.volume),
            "0" !== e.modifiedAt && t.tag(3, R.O0.Bit64).fixed64(e.modifiedAt),
            !1 !== e.soundboardMuted && t.tag(4, R.O0.Varint).bool(e.soundboardMuted);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ts = new ti();
class ta extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AudioSettings", [
            { no: 1, name: "user", kind: "map", K: 6, V: { kind: "message", T: () => ts } },
            { no: 2, name: "stream", kind: "map", K: 6, V: { kind: "message", T: () => ts } },
        ]);
    }
    create(e) {
        let t = { user: {}, stream: {} };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(i.user, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(i.stream, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = ts.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user",
                    );
            }
        }
        e[s ?? "0"] = a ?? ts.create();
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = ts.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream",
                    );
            }
        }
        e[s ?? "0"] = a ?? ts.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.user))
            t.tag(1, R.O0.LengthDelimited).fork().tag(1, R.O0.Bit64).fixed64(r),
                t.tag(2, R.O0.LengthDelimited).fork(),
                ts.internalBinaryWrite(e.user[r], t, n),
                t.join().join();
        for (let r of Object.keys(e.stream))
            t.tag(2, R.O0.LengthDelimited).fork().tag(1, R.O0.Bit64).fixed64(r),
                t.tag(2, R.O0.LengthDelimited).fork(),
                ts.internalBinaryWrite(e.stream[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let to = new ta();
class tl extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CommunitiesSettings", [
            { no: 1, name: "disable_home_auto_nav", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.disableHomeAutoNav = D._t.internalBinaryRead(e, e.uint32(), n, i.disableHomeAutoNav);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.disableHomeAutoNav &&
            D._t.internalBinaryWrite(e.disableHomeAutoNav, t.tag(1, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tu = new tl();
class td extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SoundboardSettings", [{ no: 1, name: "volume", kind: "scalar", T: 2 }]);
    }
    create(e) {
        let t = { volume: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.volume = e.float();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.volume && t.tag(1, R.O0.Bit32).float(e.volume);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tc = new td();
class t_ extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.CustomCallSound", [
            { no: 1, name: "sound_id", kind: "scalar", T: 6 },
            { no: 2, name: "guild_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { soundId: "0", guildId: "0" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.soundId = e.fixed64().toString();
                    break;
                case 2:
                    i.guildId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.soundId && t.tag(1, R.O0.Bit64).fixed64(e.soundId),
            "0" !== e.guildId && t.tag(2, R.O0.Bit64).fixed64(e.guildId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tf = new t_();
class tE extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.BroadcastSettings", [
            { no: 1, name: "allow_friends", kind: "message", T: () => D._t },
            { no: 2, name: "allowed_guild_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 3, name: "allowed_user_ids", kind: "scalar", repeat: 1, T: 6 },
            { no: 4, name: "auto_broadcast", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = { allowedGuildIds: [], allowedUserIds: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.allowFriends = D._t.internalBinaryRead(e, e.uint32(), n, i.allowFriends);
                    break;
                case 2:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.allowedGuildIds.push(e.fixed64().toString());
                    else i.allowedGuildIds.push(e.fixed64().toString());
                    break;
                case 3:
                    if (r === R.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.allowedUserIds.push(e.fixed64().toString());
                    else i.allowedUserIds.push(e.fixed64().toString());
                    break;
                case 4:
                    i.autoBroadcast = D._t.internalBinaryRead(e, e.uint32(), n, i.autoBroadcast);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.allowFriends &&
                D._t.internalBinaryWrite(e.allowFriends, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.allowedGuildIds.length)
        ) {
            t.tag(2, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedGuildIds.length; n++) t.fixed64(e.allowedGuildIds[n]);
            t.join();
        }
        if (e.allowedUserIds.length) {
            t.tag(3, R.O0.LengthDelimited).fork();
            for (let n = 0; n < e.allowedUserIds.length; n++) t.fixed64(e.allowedUserIds[n]);
            t.join();
        }
        e.autoBroadcast && D._t.internalBinaryWrite(e.autoBroadcast, t.tag(4, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let th = new tE();
class tp extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ClipsSettings", [
            { no: 1, name: "allow_voice_recording", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.allowVoiceRecording = D._t.internalBinaryRead(e, e.uint32(), n, i.allowVoiceRecording);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.allowVoiceRecording &&
            D._t.internalBinaryWrite(e.allowVoiceRecording, t.tag(1, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tm = new tp();
class tg extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimit", [
            { no: 1, name: "amount", kind: "scalar", T: 4 },
            { no: 2, name: "currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { amount: "0", currency: "" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.amount = e.uint64().toString();
                    break;
                case 2:
                    i.currency = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.amount && t.tag(1, R.O0.Varint).uint64(e.amount),
            "" !== e.currency && t.tag(2, R.O0.LengthDelimited).string(e.currency);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tA = new tg();
class tI extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SpendingLimitSettings", [
            { no: 1, name: "one_time_purchase_limit", kind: "message", T: () => tA },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.oneTimePurchaseLimit = tA.internalBinaryRead(e, e.uint32(), n, i.oneTimePurchaseLimit);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.oneTimePurchaseLimit &&
            tA.internalBinaryWrite(e.oneTimePurchaseLimit, t.tag(1, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tT = new tI();
class tS extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.SafetySettings", [
            {
                no: 1,
                name: "safety_settings_preset",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.SafetySettingsPresetType", Z],
            },
            { no: 2, name: "ignore_profile_speedbump_disabled", kind: "scalar", T: 8 },
            { no: 3, name: "spending_limit_settings", kind: "message", T: () => tT },
        ]);
    }
    create(e) {
        let t = { safetySettingsPreset: 0, ignoreProfileSpeedbumpDisabled: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.safetySettingsPreset = e.int32();
                    break;
                case 2:
                    i.ignoreProfileSpeedbumpDisabled = e.bool();
                    break;
                case 3:
                    i.spendingLimitSettings = tT.internalBinaryRead(e, e.uint32(), n, i.spendingLimitSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.safetySettingsPreset && t.tag(1, R.O0.Varint).int32(e.safetySettingsPreset),
            !1 !== e.ignoreProfileSpeedbumpDisabled && t.tag(2, R.O0.Varint).bool(e.ignoreProfileSpeedbumpDisabled),
            e.spendingLimitSettings &&
                tT.internalBinaryWrite(e.spendingLimitSettings, t.tag(3, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ty = new tS();
class tN extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ForLaterSettings", [
            {
                no: 1,
                name: "current_tab",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.ForLaterTab", ee, "FOR_LATER_TAB_"],
            },
        ]);
    }
    create(e) {
        let t = { currentTab: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.currentTab = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.currentTab && t.tag(1, R.O0.Varint).int32(e.currentTab);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tO = new tN();
class tR extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ICYMISettings", [
            { no: 1, name: "feed_generated_at", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { feedGeneratedAt: "0" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.feedGeneratedAt = e.fixed64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.feedGeneratedAt && t.tag(1, R.O0.Bit64).fixed64(e.feedGeneratedAt);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tv = new tR();
class tC extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AllApplicationSettings", [
            { no: 1, name: "app_settings", kind: "map", K: 6, V: { kind: "message", T: () => tL } },
        ]);
    }
    create(e) {
        let t = { appSettings: {} };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.appSettings, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = tL.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings",
                    );
            }
        }
        e[s ?? "0"] = a ?? tL.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.appSettings))
            t.tag(1, R.O0.LengthDelimited).fork().tag(1, R.O0.Bit64).fixed64(r),
                t.tag(2, R.O0.LengthDelimited).fork(),
                tL.internalBinaryWrite(e.appSettings[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tb = new tC();
class tD extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSettings", [
            { no: 1, name: "app_dm_settings", kind: "message", T: () => tM },
            { no: 2, name: "app_sharing_settings", kind: "message", T: () => tU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.appDmSettings = tM.internalBinaryRead(e, e.uint32(), n, i.appDmSettings);
                    break;
                case 2:
                    i.appSharingSettings = tU.internalBinaryRead(e, e.uint32(), n, i.appSharingSettings);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.appDmSettings && tM.internalBinaryWrite(e.appDmSettings, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.appSharingSettings &&
                tU.internalBinaryWrite(e.appSharingSettings, t.tag(2, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tL = new tD();
class tw extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationDMSettings", [
            { no: 2, name: "allow_mobile_push", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { allowMobilePush: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (2 === t) i.allowMobilePush = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.allowMobilePush && t.tag(2, R.O0.Varint).bool(e.allowMobilePush);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tM = new tw();
class tP extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationSharingSettings", [
            { no: 1, name: "disable_application_activity_sharing", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { disableApplicationActivitySharing: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.disableApplicationActivitySharing = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.disableApplicationActivitySharing && t.tag(1, R.O0.Varint).bool(e.disableApplicationActivitySharing);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tU = new tP();
class tk extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.AdsSettings", [{ no: 1, name: "always_deliver", kind: "scalar", T: 8 }]);
    }
    create(e) {
        let t = { alwaysDeliver: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.alwaysDeliver = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.alwaysDeliver && t.tag(1, R.O0.Varint).bool(e.alwaysDeliver);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tx = new tk();
class tG extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackState", [
            { no: 1, name: "last_impression_time", kind: "message", T: () => D.ol },
            { no: 2, name: "opt_out_expiry_time", kind: "message", T: () => D.ol },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.lastImpressionTime = D.ol.internalBinaryRead(e, e.uint32(), n, i.lastImpressionTime);
                    break;
                case 2:
                    i.optOutExpiryTime = D.ol.internalBinaryRead(e, e.uint32(), n, i.optOutExpiryTime);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.lastImpressionTime &&
            D.ol.internalBinaryWrite(e.lastImpressionTime, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.optOutExpiryTime &&
                D.ol.internalBinaryWrite(e.optOutExpiryTime, t.tag(2, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tV = new tG();
class tF extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.DefaultReactionEmoji", [
            { no: 1, name: "emoji_id", kind: "message", T: () => D.ol },
            { no: 2, name: "emoji_name", kind: "message", T: () => D.hU },
            { no: 3, name: "animated", kind: "message", T: () => D._t },
            { no: 4, name: "disable_double_tap", kind: "message", T: () => D._t },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.emojiId = D.ol.internalBinaryRead(e, e.uint32(), n, i.emojiId);
                    break;
                case 2:
                    i.emojiName = D.hU.internalBinaryRead(e, e.uint32(), n, i.emojiName);
                    break;
                case 3:
                    i.animated = D._t.internalBinaryRead(e, e.uint32(), n, i.animated);
                    break;
                case 4:
                    i.disableDoubleTap = D._t.internalBinaryRead(e, e.uint32(), n, i.disableDoubleTap);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.emojiId && D.ol.internalBinaryWrite(e.emojiId, t.tag(1, R.O0.LengthDelimited).fork(), n).join(),
            e.emojiName && D.hU.internalBinaryWrite(e.emojiName, t.tag(2, R.O0.LengthDelimited).fork(), n).join(),
            e.animated && D._t.internalBinaryWrite(e.animated, t.tag(3, R.O0.LengthDelimited).fork(), n).join(),
            e.disableDoubleTap &&
                D._t.internalBinaryWrite(e.disableDoubleTap, t.tag(4, R.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tB = new tF();
class tH extends b.G {
    constructor() {
        super("discord_protos.discord_users.v1.InAppFeedbackSettings", [
            { no: 1, name: "in_app_feedback_states", kind: "map", K: 5, V: { kind: "message", T: () => tV } },
        ]);
    }
    create(e) {
        let t = { inAppFeedbackStates: {} };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, v.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.inAppFeedbackStates, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? R.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.int32();
                    break;
                case 2:
                    a = tV.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states",
                    );
            }
        }
        e[s ?? 0] = a ?? tV.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.inAppFeedbackStates))
            t.tag(1, R.O0.LengthDelimited).fork().tag(1, R.O0.Varint).int32(parseInt(r)),
                t.tag(2, R.O0.LengthDelimited).fork(),
                tV.internalBinaryWrite(e.inAppFeedbackStates[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? R.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let tY = new tH();
