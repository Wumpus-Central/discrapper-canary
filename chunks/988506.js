"use strict";
n.d(t, { bb: () => I, fE: () => E, jK: () => g, ob: () => c, qT: () => A }), n(938796), n(321073);
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(406935),
    l = n(335871),
    u = n(445345),
    c = (function (e) {
        return (
            (e[(e.DAY_OF_WEEK_UNSPECIFIED = 0)] = "DAY_OF_WEEK_UNSPECIFIED"),
            (e[(e.MONDAY = 1)] = "MONDAY"),
            (e[(e.TUESDAY = 2)] = "TUESDAY"),
            (e[(e.WEDNESDAY = 3)] = "WEDNESDAY"),
            (e[(e.THURSDAY = 4)] = "THURSDAY"),
            (e[(e.FRIDAY = 5)] = "FRIDAY"),
            (e[(e.SATURDAY = 6)] = "SATURDAY"),
            (e[(e.SUNDAY = 7)] = "SUNDAY"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.DEFAULT = 11)] = "DEFAULT"),
            (e[(e.BANGERS = 1)] = "BANGERS"),
            (e[(e.BIO_RHYME = 2)] = "BIO_RHYME"),
            (e[(e.CHERRY_BOMB = 3)] = "CHERRY_BOMB"),
            (e[(e.CHICLE = 4)] = "CHICLE"),
            (e[(e.COMPAGNON = 5)] = "COMPAGNON"),
            (e[(e.MUSEO_MODERNO = 6)] = "MUSEO_MODERNO"),
            (e[(e.NEO_CASTEL = 7)] = "NEO_CASTEL"),
            (e[(e.PIXELIFY = 8)] = "PIXELIFY"),
            (e[(e.RIBES = 9)] = "RIBES"),
            (e[(e.SINISTRE = 10)] = "SINISTRE"),
            (e[(e.ZILLA_SLAB = 12)] = "ZILLA_SLAB"),
            e
        );
    })({}),
    _ = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.SOLID = 1)] = "SOLID"),
            (e[(e.GRADIENT = 2)] = "GRADIENT"),
            (e[(e.NEON = 3)] = "NEON"),
            (e[(e.TOON = 4)] = "TOON"),
            (e[(e.POP = 5)] = "POP"),
            (e[(e.GLOW = 6)] = "GLOW"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.ID_SELFIE_MATCH = 1)] = "ID_SELFIE_MATCH"),
            (e[(e.ID_SCAN = 2)] = "ID_SCAN"),
            (e[(e.FACIAL_AGE_ESTIMATION = 3)] = "FACIAL_AGE_ESTIMATION"),
            (e[(e.BEHAVIORAL_INFERENCE = 4)] = "BEHAVIORAL_INFERENCE"),
            (e[(e.CREDIT_CARD = 5)] = "CREDIT_CARD"),
            (e[(e.EMAIL_DOMAIN = 6)] = "EMAIL_DOMAIN"),
            (e[(e.OS_SIGNAL = 7)] = "OS_SIGNAL"),
            (e[(e.ML_AGE_INFERENCE = 8)] = "ML_AGE_INFERENCE"),
            e
        );
    })({}),
    p = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.K_ID = 1)] = "K_ID"),
            (e[(e.PERSONA = 2)] = "PERSONA"),
            (e[(e.INCODE = 3)] = "INCODE"),
            (e[(e.DISCORD = 4)] = "DISCORD"),
            (e[(e.GOOGLE_WALLET = 5)] = "GOOGLE_WALLET"),
            e
        );
    })({}),
    h = (function (e) {
        return (
            (e[(e.USER_LINK_TYPE_UNSPECIFIED = 0)] = "USER_LINK_TYPE_UNSPECIFIED"),
            (e[(e.PARENT = 1)] = "PARENT"),
            (e[(e.CHILD = 2)] = "CHILD"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.USER_LINK_STATUS_UNSPECIFIED = 0)] = "USER_LINK_STATUS_UNSPECIFIED"),
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.ACTIVE = 2)] = "ACTIVE"),
            (e[(e.INACTIVE = 3)] = "INACTIVE"),
            (e[(e.DECLINED = 4)] = "DECLINED"),
            e
        );
    })({}),
    E = (function (e) {
        return (
            (e[(e.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
            (e[(e.SUBSCRIPTION = 1)] = "SUBSCRIPTION"),
            (e[(e.FRACTIONAL_NITRO = 2)] = "FRACTIONAL_NITRO"),
            (e[(e.REVERSE_TRIAL = 3)] = "REVERSE_TRIAL"),
            (e[(e.SUBSCRIPTION_GROUP = 4)] = "SUBSCRIPTION_GROUP"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
            (e[(e.BOOST_ONLY = 1)] = "BOOST_ONLY"),
            (e[(e.TIER_0 = 2)] = "TIER_0"),
            (e[(e.TIER_1 = 3)] = "TIER_1"),
            (e[(e.TIER_2 = 4)] = "TIER_2"),
            e
        );
    })({}),
    A = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.PRIMARY = 1)] = "PRIMARY"),
            (e[(e.MEMBER = 2)] = "MEMBER"),
            e
        );
    })({}),
    I = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.ANIMATED_EMOJIS = 1)] = "ANIMATED_EMOJIS"),
            (e[(e.EMOJIS_EVERYWHERE = 2)] = "EMOJIS_EVERYWHERE"),
            (e[(e.STICKERS_EVERYWHERE = 3)] = "STICKERS_EVERYWHERE"),
            (e[(e.SOUNDBOARD_EVERYWHERE = 4)] = "SOUNDBOARD_EVERYWHERE"),
            (e[(e.ANIMATED_AVATAR = 5)] = "ANIMATED_AVATAR"),
            (e[(e.CUSTOM_DISCRIMINATOR = 6)] = "CUSTOM_DISCRIMINATOR"),
            (e[(e.PREMIUM_GUILD_MEMBER_PROFILE = 7)] = "PREMIUM_GUILD_MEMBER_PROFILE"),
            (e[(e.PROFILE_PREMIUM_FEATURES = 8)] = "PROFILE_PREMIUM_FEATURES"),
            (e[(e.STREAM_MID_QUALITY = 9)] = "STREAM_MID_QUALITY"),
            (e[(e.STREAM_HIGH_QUALITY = 10)] = "STREAM_HIGH_QUALITY"),
            (e[(e.CUSTOM_NOTIFICATION_SOUNDS = 11)] = "CUSTOM_NOTIFICATION_SOUNDS"),
            (e[(e.VIDEO_FILTER_ASSETS = 12)] = "VIDEO_FILTER_ASSETS"),
            (e[(e.INCREASED_FILE_UPLOAD_SIZE = 13)] = "INCREASED_FILE_UPLOAD_SIZE"),
            (e[(e.INCREASED_GUILD_LIMIT = 14)] = "INCREASED_GUILD_LIMIT"),
            (e[(e.INCREASED_MESSAGE_LENGTH = 15)] = "INCREASED_MESSAGE_LENGTH"),
            (e[(e.NITRO_REACTION_TOGGLE = 16)] = "NITRO_REACTION_TOGGLE"),
            (e[(e.CLIENT_THEMES = 17)] = "CLIENT_THEMES"),
            (e[(e.PREMIUM_COLLECTIBLES = 18)] = "PREMIUM_COLLECTIBLES"),
            (e[(e.CUSTOM_CALL_SOUNDS = 19)] = "CUSTOM_CALL_SOUNDS"),
            (e[(e.SAVED_MESSAGES = 20)] = "SAVED_MESSAGES"),
            (e[(e.PREMIUM_VOICE_FILTERS = 21)] = "PREMIUM_VOICE_FILTERS"),
            (e[(e.CHAT_WALLPAPERS = 22)] = "CHAT_WALLPAPERS"),
            (e[(e.MONTHLY_ORBS = 23)] = "MONTHLY_ORBS"),
            (e[(e.SHOP_DISCOUNTS = 24)] = "SHOP_DISCOUNTS"),
            (e[(e.MORE_QUEST_ORBS = 25)] = "MORE_QUEST_ORBS"),
            (e[(e.PROFILE_BADGES = 26)] = "PROFILE_BADGES"),
            (e[(e.APP_ICONS = 27)] = "APP_ICONS"),
            (e[(e.BOOST_DISCOUNT = 28)] = "BOOST_DISCOUNT"),
            (e[(e.FREE_BOOSTS = 29)] = "FREE_BOOSTS"),
            (e[(e.INSTALL_PREMIUM_APPLICATIONS = 30)] = "INSTALL_PREMIUM_APPLICATIONS"),
            (e[(e.INCREASED_VIDEO_UPLOAD_QUALITY = 31)] = "INCREASED_VIDEO_UPLOAD_QUALITY"),
            e
        );
    })({}),
    T = (function (e) {
        return (
            (e[(e.SOURCE_UNSPECIFIED = 0)] = "SOURCE_UNSPECIFIED"),
            (e[(e.SOURCE_NITRO = 1)] = "SOURCE_NITRO"),
            (e[(e.SOURCE_THIRDPARTY_CROISSANT = 2)] = "SOURCE_THIRDPARTY_CROISSANT"),
            e
        );
    })({});
class S extends a.G {
    constructor() {
        super("discord_protos.users.v1.TimeOfDay", [
            { no: 1, name: "hours", kind: "scalar", T: 5 },
            { no: 2, name: "minutes", kind: "scalar", T: 5 },
            { no: 3, name: "seconds", kind: "scalar", T: 5 },
            { no: 4, name: "nanos", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { hours: 0, minutes: 0, seconds: 0, nanos: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.hours = e.int32();
                    break;
                case 2:
                    s.minutes = e.int32();
                    break;
                case 3:
                    s.seconds = e.int32();
                    break;
                case 4:
                    s.nanos = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.hours && t.tag(1, r.O0.Varint).int32(e.hours),
            0 !== e.minutes && t.tag(2, r.O0.Varint).int32(e.minutes),
            0 !== e.seconds && t.tag(3, r.O0.Varint).int32(e.seconds),
            0 !== e.nanos && t.tag(4, r.O0.Varint).int32(e.nanos);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let y = new S();
class v extends a.G {
    constructor() {
        super("discord_protos.users.v1.User", [
            { no: 1, name: "id", kind: "scalar", T: 4 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "discriminator", kind: "scalar", T: 9 },
            { no: 4, name: "avatar", kind: "message", T: () => o.hU },
            { no: 5, name: "bot", kind: "scalar", T: 8 },
            { no: 6, name: "public_flags", kind: "scalar", T: 4 },
            { no: 8, name: "global_name", kind: "message", T: () => o.hU },
            { no: 9, name: "avatar_decoration_data", kind: "message", T: () => R },
            { no: 10, name: "primary_guild", kind: "message", T: () => P },
            { no: 11, name: "collectibles", kind: "message", T: () => M },
            { no: 12, name: "safety_state", kind: "message", T: () => u.ew },
            { no: 13, name: "display_name_styles", kind: "message", T: () => L },
        ]);
    }
    create(e) {
        let t = { id: "0", username: "", discriminator: "", bot: !1, publicFlags: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.id = e.uint64().toString();
                    break;
                case 2:
                    s.username = e.string();
                    break;
                case 3:
                    s.discriminator = e.string();
                    break;
                case 4:
                    s.avatar = o.hU.internalBinaryRead(e, e.uint32(), n, s.avatar);
                    break;
                case 5:
                    s.bot = e.bool();
                    break;
                case 6:
                    s.publicFlags = e.uint64().toString();
                    break;
                case 8:
                    s.globalName = o.hU.internalBinaryRead(e, e.uint32(), n, s.globalName);
                    break;
                case 9:
                    s.avatarDecorationData = R.internalBinaryRead(e, e.uint32(), n, s.avatarDecorationData);
                    break;
                case 10:
                    s.primaryGuild = P.internalBinaryRead(e, e.uint32(), n, s.primaryGuild);
                    break;
                case 11:
                    s.collectibles = M.internalBinaryRead(e, e.uint32(), n, s.collectibles);
                    break;
                case 12:
                    s.safetyState = u.ew.internalBinaryRead(e, e.uint32(), n, s.safetyState);
                    break;
                case 13:
                    s.displayNameStyles = L.internalBinaryRead(e, e.uint32(), n, s.displayNameStyles);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.O0.Varint).uint64(e.id),
            "" !== e.username && t.tag(2, r.O0.LengthDelimited).string(e.username),
            "" !== e.discriminator && t.tag(3, r.O0.LengthDelimited).string(e.discriminator),
            e.avatar && o.hU.internalBinaryWrite(e.avatar, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, r.O0.Varint).bool(e.bot),
            "0" !== e.publicFlags && t.tag(6, r.O0.Varint).uint64(e.publicFlags),
            e.globalName && o.hU.internalBinaryWrite(e.globalName, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.avatarDecorationData &&
                R.internalBinaryWrite(e.avatarDecorationData, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.primaryGuild && P.internalBinaryWrite(e.primaryGuild, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.collectibles && M.internalBinaryWrite(e.collectibles, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.safetyState && u.ew.internalBinaryWrite(e.safetyState, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                L.internalBinaryWrite(e.displayNameStyles, t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new v();
class N extends a.G {
    constructor() {
        super("discord_protos.users.v1.MediumUser", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "discriminator", kind: "scalar", T: 13 },
            { no: 4, name: "avatar_hash", kind: "message", T: () => o.hU },
            { no: 5, name: "bot", kind: "scalar", T: 8 },
            { no: 6, name: "flags", kind: "scalar", T: 4 },
            { no: 7, name: "email", kind: "message", T: () => o.hU },
            { no: 8, name: "phone", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = { id: "0", username: "", discriminator: 0, bot: !1, flags: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.id = e.fixed64().toString();
                    break;
                case 2:
                    s.username = e.string();
                    break;
                case 3:
                    s.discriminator = e.uint32();
                    break;
                case 4:
                    s.avatarHash = o.hU.internalBinaryRead(e, e.uint32(), n, s.avatarHash);
                    break;
                case 5:
                    s.bot = e.bool();
                    break;
                case 6:
                    s.flags = e.uint64().toString();
                    break;
                case 7:
                    s.email = o.hU.internalBinaryRead(e, e.uint32(), n, s.email);
                    break;
                case 8:
                    s.phone = o.hU.internalBinaryRead(e, e.uint32(), n, s.phone);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.O0.Bit64).fixed64(e.id),
            "" !== e.username && t.tag(2, r.O0.LengthDelimited).string(e.username),
            0 !== e.discriminator && t.tag(3, r.O0.Varint).uint32(e.discriminator),
            e.avatarHash && o.hU.internalBinaryWrite(e.avatarHash, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, r.O0.Varint).bool(e.bot),
            "0" !== e.flags && t.tag(6, r.O0.Varint).uint64(e.flags),
            e.email && o.hU.internalBinaryWrite(e.email, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.phone && o.hU.internalBinaryWrite(e.phone, t.tag(8, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new N();
class C extends a.G {
    constructor() {
        super("discord_protos.users.v1.UserAvatarDecoration", [
            { no: 1, name: "asset", kind: "scalar", T: 9 },
            { no: 2, name: "sku_id", kind: "message", T: () => o.ol },
            { no: 3, name: "expires_at", kind: "message", T: () => o.ZQ },
        ]);
    }
    create(e) {
        let t = { asset: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.asset = e.string();
                    break;
                case 2:
                    s.skuId = o.ol.internalBinaryRead(e, e.uint32(), n, s.skuId);
                    break;
                case 3:
                    s.expiresAt = o.ZQ.internalBinaryRead(e, e.uint32(), n, s.expiresAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.asset && t.tag(1, r.O0.LengthDelimited).string(e.asset),
            e.skuId && o.ol.internalBinaryWrite(e.skuId, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.expiresAt && o.ZQ.internalBinaryWrite(e.expiresAt, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let R = new C();
class O extends a.G {
    constructor() {
        super("discord_protos.users.v1.UserNameplate", [
            { no: 1, name: "asset", kind: "scalar", T: 9 },
            { no: 2, name: "palette", kind: "scalar", T: 9 },
            { no: 3, name: "sku_id", kind: "message", T: () => o.ol },
            { no: 4, name: "expires_at", kind: "message", T: () => l.D },
            { no: 5, name: "label", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { asset: "", palette: "", label: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.asset = e.string();
                    break;
                case 2:
                    s.palette = e.string();
                    break;
                case 3:
                    s.skuId = o.ol.internalBinaryRead(e, e.uint32(), n, s.skuId);
                    break;
                case 4:
                    s.expiresAt = l.D.internalBinaryRead(e, e.uint32(), n, s.expiresAt);
                    break;
                case 5:
                    s.label = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let u = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.asset && t.tag(1, r.O0.LengthDelimited).string(e.asset),
            "" !== e.palette && t.tag(2, r.O0.LengthDelimited).string(e.palette),
            e.skuId && o.ol.internalBinaryWrite(e.skuId, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.expiresAt && l.D.internalBinaryWrite(e.expiresAt, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.label && t.tag(5, r.O0.LengthDelimited).string(e.label);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let b = new O();
class D extends a.G {
    constructor() {
        super("discord_protos.users.v1.DisplayNameStyles", [
            {
                no: 1,
                name: "font_id",
                kind: "enum",
                T: () => ["discord_protos.users.v1.DisplayNameFont", d, "DISPLAY_NAME_FONT_"],
            },
            {
                no: 2,
                name: "effect_id",
                kind: "enum",
                T: () => ["discord_protos.users.v1.DisplayNameEffect", _, "DISPLAY_NAME_EFFECT_"],
            },
            { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let t = { fontId: 0, effectId: 0, colors: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.fontId = e.int32();
                    break;
                case 2:
                    s.effectId = e.int32();
                    break;
                case 3:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.colors.push(e.uint32());
                    else s.colors.push(e.uint32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (0 !== e.fontId && t.tag(1, r.O0.Varint).int32(e.fontId),
            0 !== e.effectId && t.tag(2, r.O0.Varint).int32(e.effectId),
            e.colors.length)
        ) {
            t.tag(3, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.colors.length; n++) t.uint32(e.colors[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new D();
class w extends a.G {
    constructor() {
        super("discord_protos.users.v1.UserCollectibles", [{ no: 1, name: "nameplate", kind: "message", T: () => b }]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.nameplate = b.internalBinaryRead(e, e.uint32(), n, s.nameplate);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.nameplate && b.internalBinaryWrite(e.nameplate, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let M = new w();
class x extends a.G {
    constructor() {
        super("discord_protos.users.v1.UserPrimaryGuild", [
            { no: 1, name: "identity_guild_id", kind: "message", T: () => o.ol },
            { no: 2, name: "identity_enabled", kind: "message", T: () => o._t },
            { no: 3, name: "tag", kind: "message", T: () => o.hU },
            { no: 4, name: "badge", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.identityGuildId = o.ol.internalBinaryRead(e, e.uint32(), n, s.identityGuildId);
                    break;
                case 2:
                    s.identityEnabled = o._t.internalBinaryRead(e, e.uint32(), n, s.identityEnabled);
                    break;
                case 3:
                    s.tag = o.hU.internalBinaryRead(e, e.uint32(), n, s.tag);
                    break;
                case 4:
                    s.badge = o.hU.internalBinaryRead(e, e.uint32(), n, s.badge);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.identityGuildId &&
            o.ol.internalBinaryWrite(e.identityGuildId, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.identityEnabled &&
                o._t.internalBinaryWrite(e.identityEnabled, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.tag && o.hU.internalBinaryWrite(e.tag, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.badge && o.hU.internalBinaryWrite(e.badge, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new x();
class k extends a.G {
    constructor() {
        super("discord_protos.users.v1.ScheduleRule", [
            { no: 1, name: "rule_id", kind: "scalar", T: 9 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "start_time", kind: "message", T: () => y },
            { no: 4, name: "end_time", kind: "message", T: () => y },
            { no: 5, name: "days", kind: "enum", repeat: 1, T: () => ["discord_protos.users.v1.DayOfWeek", c] },
            { no: 6, name: "enabled", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ruleId: "", label: "", days: [], enabled: !1 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.ruleId = e.string();
                    break;
                case 2:
                    s.label = e.string();
                    break;
                case 3:
                    s.startTime = y.internalBinaryRead(e, e.uint32(), n, s.startTime);
                    break;
                case 4:
                    s.endTime = y.internalBinaryRead(e, e.uint32(), n, s.endTime);
                    break;
                case 5:
                    if (i === r.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) s.days.push(e.int32());
                    else s.days.push(e.int32());
                    break;
                case 6:
                    s.enabled = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.ruleId && t.tag(1, r.O0.LengthDelimited).string(e.ruleId),
            "" !== e.label && t.tag(2, r.O0.LengthDelimited).string(e.label),
            e.startTime && y.internalBinaryWrite(e.startTime, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.endTime && y.internalBinaryWrite(e.endTime, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.days.length)
        ) {
            t.tag(5, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.days.length; n++) t.int32(e.days[n]);
            t.join();
        }
        !1 !== e.enabled && t.tag(6, r.O0.Varint).bool(e.enabled);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let U = new k();
class G extends a.G {
    constructor() {
        super("discord_protos.users.v1.RestrictedSchedule", [
            { no: 1, name: "rules", kind: "message", repeat: 1, T: () => U },
        ]);
    }
    create(e) {
        let t = { rules: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.rules.push(U.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.rules.length; i++)
            U.internalBinaryWrite(e.rules[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let F = new G();
class V extends a.G {
    constructor() {
        super("discord_protos.users.v1.CrossPlatformRestriction", [
            { no: 1, name: "restriction_expiry", kind: "message", T: () => l.D },
            { no: 2, name: "application_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { applicationId: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.restrictionExpiry = l.D.internalBinaryRead(e, e.uint32(), n, s.restrictionExpiry);
                    break;
                case 2:
                    s.applicationId = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.restrictionExpiry &&
            l.D.internalBinaryWrite(e.restrictionExpiry, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.applicationId && t.tag(2, r.O0.Bit64).fixed64(e.applicationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let B = new V();
class H extends a.G {
    constructor() {
        super("discord_protos.users.v1.BadgeCommon", [{ no: 1, name: "obtained_at", kind: "message", T: () => l.D }]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.obtainedAt = l.D.internalBinaryRead(e, e.uint32(), n, s.obtainedAt);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.obtainedAt && l.D.internalBinaryWrite(e.obtainedAt, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let j = new H();
class Y extends a.G {
    constructor() {
        super("discord_protos.users.v1.AprilFools2026Badge", [
            { no: 1, name: "common", kind: "message", T: () => j },
            { no: 2, name: "level", kind: "scalar", T: 5 },
            { no: 3, name: "combat_class", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { level: 0, combatClass: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.common = j.internalBinaryRead(e, e.uint32(), n, s.common);
                    break;
                case 2:
                    s.level = e.int32();
                    break;
                case 3:
                    s.combatClass = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.common && j.internalBinaryWrite(e.common, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.level && t.tag(2, r.O0.Varint).int32(e.level),
            "" !== e.combatClass && t.tag(3, r.O0.LengthDelimited).string(e.combatClass);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let W = new Y();
class K extends a.G {
    constructor() {
        super("discord_protos.users.v1.Badge", [
            { no: 1, name: "april_fools_2026", kind: "message", oneof: "badge", T: () => W },
        ]);
    }
    create(e) {
        let t = { badge: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                s.badge = {
                    oneofKind: "aprilFools2026",
                    aprilFools2026: W.internalBinaryRead(e, e.uint32(), n, s.badge.aprilFools2026),
                };
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "aprilFools2026" === e.badge.oneofKind &&
            W.internalBinaryWrite(e.badge.aprilFools2026, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let $ = new K();
class z extends a.G {
    constructor() {
        super("discord_protos.users.v1.UserBadges", [
            { no: 1, name: "badges", kind: "message", repeat: 1, T: () => $ },
        ]);
    }
    create(e) {
        let t = { badges: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.badges.push($.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.badges.length; i++)
            $.internalBinaryWrite(e.badges[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let q = new z();
class Z extends a.G {
    constructor() {
        super("discord_protos.users.v1.UserData", [
            { no: 1, name: "linked_users", kind: "map", K: 6, V: { kind: "message", T: () => ee } },
            { no: 2, name: "safety_feature_limits", kind: "map", K: 13, V: { kind: "message", T: () => ei } },
            { no: 3, name: "safety_flags", kind: "map", K: 13, V: { kind: "message", T: () => ea } },
            { no: 4, name: "quest", kind: "message", T: () => eu },
            { no: 5, name: "primary_guild", kind: "message", T: () => P },
            { no: 6, name: "cross_platform_restriction", kind: "message", T: () => B },
            { no: 7, name: "collectibles", kind: "message", T: () => M },
            { no: 8, name: "safety_state", kind: "message", T: () => u.ew },
            { no: 9, name: "premium_state", kind: "message", T: () => ed },
            { no: 10, name: "display_name_styles", kind: "message", T: () => L },
            { no: 11, name: "store_country", kind: "message", T: () => ef },
            { no: 12, name: "restricted_schedule", kind: "message", T: () => F },
            { no: 13, name: "age_assurance_data", kind: "message", T: () => Q },
            { no: 14, name: "perks", kind: "message", T: () => eT },
            { no: 15, name: "badges", kind: "message", T: () => q },
        ]);
    }
    create(e) {
        let t = { linkedUsers: {}, safetyFeatureLimits: {}, safetyFlags: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(s.linkedUsers, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(s.safetyFeatureLimits, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(s.safetyFlags, e, n);
                    break;
                case 4:
                    s.quest = eu.internalBinaryRead(e, e.uint32(), n, s.quest);
                    break;
                case 5:
                    s.primaryGuild = P.internalBinaryRead(e, e.uint32(), n, s.primaryGuild);
                    break;
                case 6:
                    s.crossPlatformRestriction = B.internalBinaryRead(e, e.uint32(), n, s.crossPlatformRestriction);
                    break;
                case 7:
                    s.collectibles = M.internalBinaryRead(e, e.uint32(), n, s.collectibles);
                    break;
                case 8:
                    s.safetyState = u.ew.internalBinaryRead(e, e.uint32(), n, s.safetyState);
                    break;
                case 9:
                    s.premiumState = ed.internalBinaryRead(e, e.uint32(), n, s.premiumState);
                    break;
                case 10:
                    s.displayNameStyles = L.internalBinaryRead(e, e.uint32(), n, s.displayNameStyles);
                    break;
                case 11:
                    s.storeCountry = ef.internalBinaryRead(e, e.uint32(), n, s.storeCountry);
                    break;
                case 12:
                    s.restrictedSchedule = F.internalBinaryRead(e, e.uint32(), n, s.restrictedSchedule);
                    break;
                case 13:
                    s.ageAssuranceData = Q.internalBinaryRead(e, e.uint32(), n, s.ageAssuranceData);
                    break;
                case 14:
                    s.perks = eT.internalBinaryRead(e, e.uint32(), n, s.perks);
                    break;
                case 15:
                    s.badges = q.internalBinaryRead(e, e.uint32(), n, s.badges);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
                    a = ee.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.linked_users",
                    );
            }
        }
        e[s ?? "0"] = a ?? ee.create();
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
                    s = t.uint32();
                    break;
                case 2:
                    a = ei.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits",
                    );
            }
        }
        e[s ?? 0] = a ?? ei.create();
    }
    binaryReadMap3(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.uint32();
                    break;
                case 2:
                    a = ea.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_flags",
                    );
            }
        }
        e[s ?? 0] = a ?? ea.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.linkedUsers))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                ee.internalBinaryWrite(e.linkedUsers[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.safetyFeatureLimits))
            t.tag(2, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                ei.internalBinaryWrite(e.safetyFeatureLimits[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.safetyFlags))
            t.tag(3, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                ea.internalBinaryWrite(e.safetyFlags[i], t, n),
                t.join().join();
        e.quest && eu.internalBinaryWrite(e.quest, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.primaryGuild && P.internalBinaryWrite(e.primaryGuild, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.crossPlatformRestriction &&
                B.internalBinaryWrite(e.crossPlatformRestriction, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.collectibles && M.internalBinaryWrite(e.collectibles, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.safetyState && u.ew.internalBinaryWrite(e.safetyState, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.premiumState && ed.internalBinaryWrite(e.premiumState, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                L.internalBinaryWrite(e.displayNameStyles, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.storeCountry && ef.internalBinaryWrite(e.storeCountry, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.restrictedSchedule &&
                F.internalBinaryWrite(e.restrictedSchedule, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.ageAssuranceData &&
                Q.internalBinaryWrite(e.ageAssuranceData, t.tag(13, r.O0.LengthDelimited).fork(), n).join(),
            e.perks && eT.internalBinaryWrite(e.perks, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            e.badges && q.internalBinaryWrite(e.badges, t.tag(15, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new Z();
class X extends a.G {
    constructor() {
        super("discord_protos.users.v1.AgeAssuranceData", [
            { no: 1, name: "estimated_date_of_birth", kind: "message", T: () => l.D },
            {
                no: 2,
                name: "method",
                kind: "enum",
                T: () => ["discord_protos.users.v1.AgeAssuranceMethod", f, "AGE_ASSURANCE_METHOD_"],
            },
            { no: 3, name: "method_version", kind: "scalar", T: 5 },
            {
                no: 4,
                name: "vendor",
                kind: "enum",
                T: () => ["discord_protos.users.v1.AgeAssuranceVendor", p, "AGE_ASSURANCE_VENDOR_"],
            },
            { no: 5, name: "verified_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { method: 0, methodVersion: 0, vendor: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.estimatedDateOfBirth = l.D.internalBinaryRead(e, e.uint32(), n, s.estimatedDateOfBirth);
                    break;
                case 2:
                    s.method = e.int32();
                    break;
                case 3:
                    s.methodVersion = e.int32();
                    break;
                case 4:
                    s.vendor = e.int32();
                    break;
                case 5:
                    s.verifiedAt = l.D.internalBinaryRead(e, e.uint32(), n, s.verifiedAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.estimatedDateOfBirth &&
            l.D.internalBinaryWrite(e.estimatedDateOfBirth, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.method && t.tag(2, r.O0.Varint).int32(e.method),
            0 !== e.methodVersion && t.tag(3, r.O0.Varint).int32(e.methodVersion),
            0 !== e.vendor && t.tag(4, r.O0.Varint).int32(e.vendor),
            e.verifiedAt && l.D.internalBinaryWrite(e.verifiedAt, t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new X();
class J extends a.G {
    constructor() {
        super("discord_protos.users.v1.LinkedUser", [
            { no: 1, name: "user_id", kind: "scalar", T: 6 },
            { no: 2, name: "link_type", kind: "enum", T: () => ["discord_protos.users.v1.UserLinkType", h] },
            { no: 3, name: "link_status", kind: "enum", T: () => ["discord_protos.users.v1.UserLinkStatus", m] },
            { no: 4, name: "requestor_id", kind: "scalar", T: 6 },
            { no: 5, name: "created_at", kind: "message", T: () => l.D },
            { no: 6, name: "updated_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { userId: "0", linkType: 0, linkStatus: 0, requestorId: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.userId = e.fixed64().toString();
                    break;
                case 2:
                    s.linkType = e.int32();
                    break;
                case 3:
                    s.linkStatus = e.int32();
                    break;
                case 4:
                    s.requestorId = e.fixed64().toString();
                    break;
                case 5:
                    s.createdAt = l.D.internalBinaryRead(e, e.uint32(), n, s.createdAt);
                    break;
                case 6:
                    s.updatedAt = l.D.internalBinaryRead(e, e.uint32(), n, s.updatedAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.userId && t.tag(1, r.O0.Bit64).fixed64(e.userId),
            0 !== e.linkType && t.tag(2, r.O0.Varint).int32(e.linkType),
            0 !== e.linkStatus && t.tag(3, r.O0.Varint).int32(e.linkStatus),
            "0" !== e.requestorId && t.tag(4, r.O0.Bit64).fixed64(e.requestorId),
            e.createdAt && l.D.internalBinaryWrite(e.createdAt, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.updatedAt && l.D.internalBinaryWrite(e.updatedAt, t.tag(6, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ee = new J();
class et extends a.G {
    constructor() {
        super("discord_protos.users.v1.RateLimitData", [
            { no: 1, name: "limit_expiry", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.limitExpiry = l.D.internalBinaryRead(e, e.uint32(), n, s.limitExpiry);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.limitExpiry && l.D.internalBinaryWrite(e.limitExpiry, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let en = new et();
class er extends a.G {
    constructor() {
        super("discord_protos.users.v1.FeatureLimits", [
            { no: 1, name: "map", kind: "map", K: 13, V: { kind: "message", T: () => en } },
        ]);
    }
    create(e) {
        let t = { map: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.map, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
                    s = t.uint32();
                    break;
                case 2:
                    a = en.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.FeatureLimits.map",
                    );
            }
        }
        e[s ?? 0] = a ?? en.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.map))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                en.internalBinaryWrite(e.map[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ei = new er();
class es extends a.G {
    constructor() {
        super("discord_protos.users.v1.SafetyFlag", [{ no: 1, name: "flag_expiry", kind: "message", T: () => l.D }]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.flagExpiry = l.D.internalBinaryRead(e, e.uint32(), n, s.flagExpiry);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.flagExpiry && l.D.internalBinaryWrite(e.flagExpiry, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ea = new es();
class eo extends a.G {
    constructor() {
        super("discord_protos.users.v1.GuildShardingConfig", [
            { no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { shards: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) s.shards.push(e.int32());
                else s.shards.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (e.shards.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.shards.length; n++) t.int32(e.shards[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new eo();
class el extends a.G {
    constructor() {
        super("discord_protos.users.v1.QuestMetadata", [{ no: 1, name: "quests_completed", kind: "scalar", T: 13 }]);
    }
    create(e) {
        let t = { questsCompleted: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.questsCompleted = e.uint32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.questsCompleted && t.tag(1, r.O0.Varint).uint32(e.questsCompleted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eu = new el();
class ec extends a.G {
    constructor() {
        super("discord_protos.users.v1.PremiumState", [
            {
                no: 1,
                name: "premium_source",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSource", E, "PREMIUM_SOURCE_"],
            },
            {
                no: 2,
                name: "premium_subscription_type",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSubscriptionType", g, "PREMIUM_SUBSCRIPTION_TYPE_"],
            },
            {
                no: 3,
                name: "premium_subscription_group_role",
                kind: "enum",
                T: () => [
                    "discord_protos.users.v1.PremiumSubscriptionGroupRole",
                    A,
                    "PREMIUM_SUBSCRIPTION_GROUP_ROLE_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { premiumSource: 0, premiumSubscriptionType: 0, premiumSubscriptionGroupRole: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.premiumSource = e.int32();
                    break;
                case 2:
                    s.premiumSubscriptionType = e.int32();
                    break;
                case 3:
                    s.premiumSubscriptionGroupRole = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.premiumSource && t.tag(1, r.O0.Varint).int32(e.premiumSource),
            0 !== e.premiumSubscriptionType && t.tag(2, r.O0.Varint).int32(e.premiumSubscriptionType),
            0 !== e.premiumSubscriptionGroupRole && t.tag(3, r.O0.Varint).int32(e.premiumSubscriptionGroupRole);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ed = new ec();
class e_ extends a.G {
    constructor() {
        super("discord_protos.users.v1.StoreCountry", [
            { no: 1, name: "country", kind: "scalar", T: 9 },
            { no: 2, name: "set_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { country: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.country = e.string();
                    break;
                case 2:
                    s.setAt = l.D.internalBinaryRead(e, e.uint32(), n, s.setAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.country && t.tag(1, r.O0.LengthDelimited).string(e.country),
            e.setAt && l.D.internalBinaryWrite(e.setAt, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ef = new e_();
class ep extends a.G {
    constructor() {
        super("discord_protos.users.v1.PerkConfig", [
            { no: 1, name: "source", kind: "enum", repeat: 1, T: () => ["discord_protos.users.v1.PerkSource", T] },
            { no: 2, name: "increased_file_upload_size", kind: "message", oneof: "kind", T: () => eE },
            { no: 3, name: "increased_guild_limit", kind: "message", oneof: "kind", T: () => eA },
        ]);
    }
    create(e) {
        let t = { source: [], kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.source.push(e.int32());
                    else s.source.push(e.int32());
                    break;
                case 2:
                    s.kind = {
                        oneofKind: "increasedFileUploadSize",
                        increasedFileUploadSize: eE.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.kind.increasedFileUploadSize,
                        ),
                    };
                    break;
                case 3:
                    s.kind = {
                        oneofKind: "increasedGuildLimit",
                        increasedGuildLimit: eA.internalBinaryRead(e, e.uint32(), n, s.kind.increasedGuildLimit),
                    };
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (e.source.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.source.length; n++) t.int32(e.source[n]);
            t.join();
        }
        "increasedFileUploadSize" === e.kind.oneofKind &&
            eE.internalBinaryWrite(e.kind.increasedFileUploadSize, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            "increasedGuildLimit" === e.kind.oneofKind &&
                eA.internalBinaryWrite(e.kind.increasedGuildLimit, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eh = new ep();
class em extends a.G {
    constructor() {
        super("discord_protos.users.v1.PerkConfigIncreasedFileUploadSize", [
            { no: 1, name: "max_size", kind: "scalar", T: 4 },
        ]);
    }
    create(e) {
        let t = { maxSize: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.maxSize = e.uint64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.maxSize && t.tag(1, r.O0.Varint).uint64(e.maxSize);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eE = new em();
class eg extends a.G {
    constructor() {
        super("discord_protos.users.v1.PerkConfigIncreasedGuildLimit", [
            { no: 1, name: "max_guilds", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { maxGuilds: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.maxGuilds = e.uint32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.maxGuilds && t.tag(1, r.O0.Varint).uint32(e.maxGuilds);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eA = new eg();
class eI extends a.G {
    constructor() {
        super("discord_protos.users.v1.Perks", [
            { no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 },
            { no: 2, name: "config_by_perk", kind: "map", K: 13, V: { kind: "message", T: () => eh } },
            { no: 3, name: "rules_version", kind: "scalar", T: 13 },
            { no: 4, name: "updated_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { activePerksBitmask: [], configByPerk: {}, rulesVersion: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.activePerksBitmask.push(e.uint64().toString());
                    else s.activePerksBitmask.push(e.uint64().toString());
                    break;
                case 2:
                    this.binaryReadMap2(s.configByPerk, e, n);
                    break;
                case 3:
                    s.rulesVersion = e.uint32();
                    break;
                case 4:
                    s.updatedAt = l.D.internalBinaryRead(e, e.uint32(), n, s.updatedAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
                    s = t.uint32();
                    break;
                case 2:
                    a = eh.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.Perks.config_by_perk",
                    );
            }
        }
        e[s ?? 0] = a ?? eh.create();
    }
    internalBinaryWrite(e, t, n) {
        if (e.activePerksBitmask.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activePerksBitmask.length; n++) t.uint64(e.activePerksBitmask[n]);
            t.join();
        }
        for (let i of Object.keys(e.configByPerk))
            t.tag(2, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                eh.internalBinaryWrite(e.configByPerk[i], t, n),
                t.join().join();
        0 !== e.rulesVersion && t.tag(3, r.O0.Varint).uint32(e.rulesVersion),
            e.updatedAt && l.D.internalBinaryWrite(e.updatedAt, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eT = new eI();
