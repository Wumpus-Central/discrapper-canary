"use strict";
n.d(t, { bb: () => w, fE: () => b, jK: () => D, ob: () => S, qT: () => L }), n(938796), n(321073);
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
    h = n(852015),
    p = n(144367),
    m = n(428420),
    g = n(324281),
    A = n(406935),
    I = n(335871),
    T = n(445345),
    S =
        (((r = {})[(r.DAY_OF_WEEK_UNSPECIFIED = 0)] = "DAY_OF_WEEK_UNSPECIFIED"),
        (r[(r.MONDAY = 1)] = "MONDAY"),
        (r[(r.TUESDAY = 2)] = "TUESDAY"),
        (r[(r.WEDNESDAY = 3)] = "WEDNESDAY"),
        (r[(r.THURSDAY = 4)] = "THURSDAY"),
        (r[(r.FRIDAY = 5)] = "FRIDAY"),
        (r[(r.SATURDAY = 6)] = "SATURDAY"),
        (r[(r.SUNDAY = 7)] = "SUNDAY"),
        r),
    y =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.DEFAULT = 11)] = "DEFAULT"),
        (i[(i.BANGERS = 1)] = "BANGERS"),
        (i[(i.BIO_RHYME = 2)] = "BIO_RHYME"),
        (i[(i.CHERRY_BOMB = 3)] = "CHERRY_BOMB"),
        (i[(i.CHICLE = 4)] = "CHICLE"),
        (i[(i.COMPAGNON = 5)] = "COMPAGNON"),
        (i[(i.MUSEO_MODERNO = 6)] = "MUSEO_MODERNO"),
        (i[(i.NEO_CASTEL = 7)] = "NEO_CASTEL"),
        (i[(i.PIXELIFY = 8)] = "PIXELIFY"),
        (i[(i.RIBES = 9)] = "RIBES"),
        (i[(i.SINISTRE = 10)] = "SINISTRE"),
        (i[(i.ZILLA_SLAB = 12)] = "ZILLA_SLAB"),
        i),
    N =
        (((s = {})[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.SOLID = 1)] = "SOLID"),
        (s[(s.GRADIENT = 2)] = "GRADIENT"),
        (s[(s.NEON = 3)] = "NEON"),
        (s[(s.TOON = 4)] = "TOON"),
        (s[(s.POP = 5)] = "POP"),
        (s[(s.GLOW = 6)] = "GLOW"),
        s),
    O =
        (((a = {})[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.ID_SELFIE_MATCH = 1)] = "ID_SELFIE_MATCH"),
        (a[(a.ID_SCAN = 2)] = "ID_SCAN"),
        (a[(a.FACIAL_AGE_ESTIMATION = 3)] = "FACIAL_AGE_ESTIMATION"),
        (a[(a.BEHAVIORAL_INFERENCE = 4)] = "BEHAVIORAL_INFERENCE"),
        (a[(a.CREDIT_CARD = 5)] = "CREDIT_CARD"),
        (a[(a.EMAIL_DOMAIN = 6)] = "EMAIL_DOMAIN"),
        (a[(a.OS_SIGNAL = 7)] = "OS_SIGNAL"),
        (a[(a.ML_AGE_INFERENCE = 8)] = "ML_AGE_INFERENCE"),
        (a[(a.GOOGLE_WALLET = 9)] = "GOOGLE_WALLET"),
        a),
    R =
        (((o = {})[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.K_ID = 1)] = "K_ID"),
        (o[(o.PERSONA = 2)] = "PERSONA"),
        (o[(o.INCODE = 3)] = "INCODE"),
        (o[(o.DISCORD = 4)] = "DISCORD"),
        (o[(o.GOOGLE_WALLET = 5)] = "GOOGLE_WALLET"),
        o),
    v =
        (((l = {})[(l.USER_LINK_TYPE_UNSPECIFIED = 0)] = "USER_LINK_TYPE_UNSPECIFIED"),
        (l[(l.PARENT = 1)] = "PARENT"),
        (l[(l.CHILD = 2)] = "CHILD"),
        l),
    C =
        (((u = {})[(u.USER_LINK_STATUS_UNSPECIFIED = 0)] = "USER_LINK_STATUS_UNSPECIFIED"),
        (u[(u.PENDING = 1)] = "PENDING"),
        (u[(u.ACTIVE = 2)] = "ACTIVE"),
        (u[(u.INACTIVE = 3)] = "INACTIVE"),
        (u[(u.DECLINED = 4)] = "DECLINED"),
        u),
    b =
        (((d = {})[(d.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
        (d[(d.SUBSCRIPTION = 1)] = "SUBSCRIPTION"),
        (d[(d.FRACTIONAL_NITRO = 2)] = "FRACTIONAL_NITRO"),
        (d[(d.REVERSE_TRIAL = 3)] = "REVERSE_TRIAL"),
        (d[(d.SUBSCRIPTION_GROUP = 4)] = "SUBSCRIPTION_GROUP"),
        d),
    D =
        (((c = {})[(c.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
        (c[(c.BOOST_ONLY = 1)] = "BOOST_ONLY"),
        (c[(c.TIER_0 = 2)] = "TIER_0"),
        (c[(c.TIER_1 = 3)] = "TIER_1"),
        (c[(c.TIER_2 = 4)] = "TIER_2"),
        c),
    L =
        (((_ = {})[(_.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (_[(_.PRIMARY = 1)] = "PRIMARY"),
        (_[(_.MEMBER = 2)] = "MEMBER"),
        _),
    w =
        (((f = {})[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.ANIMATED_EMOJIS = 1)] = "ANIMATED_EMOJIS"),
        (f[(f.EMOJIS_EVERYWHERE = 2)] = "EMOJIS_EVERYWHERE"),
        (f[(f.STICKERS_EVERYWHERE = 3)] = "STICKERS_EVERYWHERE"),
        (f[(f.SOUNDBOARD_EVERYWHERE = 4)] = "SOUNDBOARD_EVERYWHERE"),
        (f[(f.ANIMATED_AVATAR = 5)] = "ANIMATED_AVATAR"),
        (f[(f.CUSTOM_DISCRIMINATOR = 6)] = "CUSTOM_DISCRIMINATOR"),
        (f[(f.PREMIUM_GUILD_MEMBER_PROFILE = 7)] = "PREMIUM_GUILD_MEMBER_PROFILE"),
        (f[(f.PROFILE_PREMIUM_FEATURES = 8)] = "PROFILE_PREMIUM_FEATURES"),
        (f[(f.STREAM_MID_QUALITY = 9)] = "STREAM_MID_QUALITY"),
        (f[(f.STREAM_HIGH_QUALITY = 10)] = "STREAM_HIGH_QUALITY"),
        (f[(f.CUSTOM_NOTIFICATION_SOUNDS = 11)] = "CUSTOM_NOTIFICATION_SOUNDS"),
        (f[(f.VIDEO_FILTER_ASSETS = 12)] = "VIDEO_FILTER_ASSETS"),
        (f[(f.INCREASED_FILE_UPLOAD_SIZE = 13)] = "INCREASED_FILE_UPLOAD_SIZE"),
        (f[(f.INCREASED_GUILD_LIMIT = 14)] = "INCREASED_GUILD_LIMIT"),
        (f[(f.INCREASED_MESSAGE_LENGTH = 15)] = "INCREASED_MESSAGE_LENGTH"),
        (f[(f.NITRO_REACTION_TOGGLE = 16)] = "NITRO_REACTION_TOGGLE"),
        (f[(f.CLIENT_THEMES = 17)] = "CLIENT_THEMES"),
        (f[(f.PREMIUM_COLLECTIBLES = 18)] = "PREMIUM_COLLECTIBLES"),
        (f[(f.CUSTOM_CALL_SOUNDS = 19)] = "CUSTOM_CALL_SOUNDS"),
        (f[(f.SAVED_MESSAGES = 20)] = "SAVED_MESSAGES"),
        (f[(f.PREMIUM_VOICE_FILTERS = 21)] = "PREMIUM_VOICE_FILTERS"),
        (f[(f.CHAT_WALLPAPERS = 22)] = "CHAT_WALLPAPERS"),
        (f[(f.MONTHLY_ORBS = 23)] = "MONTHLY_ORBS"),
        (f[(f.SHOP_DISCOUNTS = 24)] = "SHOP_DISCOUNTS"),
        (f[(f.MORE_QUEST_ORBS = 25)] = "MORE_QUEST_ORBS"),
        (f[(f.PROFILE_BADGES = 26)] = "PROFILE_BADGES"),
        (f[(f.APP_ICONS = 27)] = "APP_ICONS"),
        (f[(f.BOOST_DISCOUNT = 28)] = "BOOST_DISCOUNT"),
        (f[(f.FREE_BOOSTS = 29)] = "FREE_BOOSTS"),
        (f[(f.INSTALL_PREMIUM_APPLICATIONS = 30)] = "INSTALL_PREMIUM_APPLICATIONS"),
        (f[(f.INCREASED_VIDEO_UPLOAD_QUALITY = 31)] = "INCREASED_VIDEO_UPLOAD_QUALITY"),
        f),
    M =
        (((E = {})[(E.SOURCE_UNSPECIFIED = 0)] = "SOURCE_UNSPECIFIED"),
        (E[(E.SOURCE_NITRO = 1)] = "SOURCE_NITRO"),
        (E[(E.SOURCE_THIRDPARTY_CROISSANT = 2)] = "SOURCE_THIRDPARTY_CROISSANT"),
        E);
class P extends g.G {
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
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.hours = e.int32();
                    break;
                case 2:
                    i.minutes = e.int32();
                    break;
                case 3:
                    i.seconds = e.int32();
                    break;
                case 4:
                    i.nanos = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.hours && t.tag(1, h.O0.Varint).int32(e.hours),
            0 !== e.minutes && t.tag(2, h.O0.Varint).int32(e.minutes),
            0 !== e.seconds && t.tag(3, h.O0.Varint).int32(e.seconds),
            0 !== e.nanos && t.tag(4, h.O0.Varint).int32(e.nanos);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let U = new P();
class k extends g.G {
    constructor() {
        super("discord_protos.users.v1.User", [
            { no: 1, name: "id", kind: "scalar", T: 4 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "discriminator", kind: "scalar", T: 9 },
            { no: 4, name: "avatar", kind: "message", T: () => A.hU },
            { no: 5, name: "bot", kind: "scalar", T: 8 },
            { no: 6, name: "public_flags", kind: "scalar", T: 4 },
            { no: 8, name: "global_name", kind: "message", T: () => A.hU },
            { no: 9, name: "avatar_decoration_data", kind: "message", T: () => V },
            { no: 10, name: "primary_guild", kind: "message", T: () => $ },
            { no: 11, name: "collectibles", kind: "message", T: () => j },
            { no: 12, name: "safety_state", kind: "message", T: () => T.ew },
            { no: 13, name: "display_name_styles", kind: "message", T: () => Y },
        ]);
    }
    create(e) {
        let t = { id: "0", username: "", discriminator: "", bot: !1, publicFlags: "0" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.id = e.uint64().toString();
                    break;
                case 2:
                    i.username = e.string();
                    break;
                case 3:
                    i.discriminator = e.string();
                    break;
                case 4:
                    i.avatar = A.hU.internalBinaryRead(e, e.uint32(), n, i.avatar);
                    break;
                case 5:
                    i.bot = e.bool();
                    break;
                case 6:
                    i.publicFlags = e.uint64().toString();
                    break;
                case 8:
                    i.globalName = A.hU.internalBinaryRead(e, e.uint32(), n, i.globalName);
                    break;
                case 9:
                    i.avatarDecorationData = V.internalBinaryRead(e, e.uint32(), n, i.avatarDecorationData);
                    break;
                case 10:
                    i.primaryGuild = $.internalBinaryRead(e, e.uint32(), n, i.primaryGuild);
                    break;
                case 11:
                    i.collectibles = j.internalBinaryRead(e, e.uint32(), n, i.collectibles);
                    break;
                case 12:
                    i.safetyState = T.ew.internalBinaryRead(e, e.uint32(), n, i.safetyState);
                    break;
                case 13:
                    i.displayNameStyles = Y.internalBinaryRead(e, e.uint32(), n, i.displayNameStyles);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, h.O0.Varint).uint64(e.id),
            "" !== e.username && t.tag(2, h.O0.LengthDelimited).string(e.username),
            "" !== e.discriminator && t.tag(3, h.O0.LengthDelimited).string(e.discriminator),
            e.avatar && A.hU.internalBinaryWrite(e.avatar, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, h.O0.Varint).bool(e.bot),
            "0" !== e.publicFlags && t.tag(6, h.O0.Varint).uint64(e.publicFlags),
            e.globalName && A.hU.internalBinaryWrite(e.globalName, t.tag(8, h.O0.LengthDelimited).fork(), n).join(),
            e.avatarDecorationData &&
                V.internalBinaryWrite(e.avatarDecorationData, t.tag(9, h.O0.LengthDelimited).fork(), n).join(),
            e.primaryGuild && $.internalBinaryWrite(e.primaryGuild, t.tag(10, h.O0.LengthDelimited).fork(), n).join(),
            e.collectibles && j.internalBinaryWrite(e.collectibles, t.tag(11, h.O0.LengthDelimited).fork(), n).join(),
            e.safetyState && T.ew.internalBinaryWrite(e.safetyState, t.tag(12, h.O0.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                Y.internalBinaryWrite(e.displayNameStyles, t.tag(13, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new k();
class x extends g.G {
    constructor() {
        super("discord_protos.users.v1.MediumUser", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "discriminator", kind: "scalar", T: 13 },
            { no: 4, name: "avatar_hash", kind: "message", T: () => A.hU },
            { no: 5, name: "bot", kind: "scalar", T: 8 },
            { no: 6, name: "flags", kind: "scalar", T: 4 },
            { no: 7, name: "email", kind: "message", T: () => A.hU },
            { no: 8, name: "phone", kind: "message", T: () => A.hU },
        ]);
    }
    create(e) {
        let t = { id: "0", username: "", discriminator: 0, bot: !1, flags: "0" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.username = e.string();
                    break;
                case 3:
                    i.discriminator = e.uint32();
                    break;
                case 4:
                    i.avatarHash = A.hU.internalBinaryRead(e, e.uint32(), n, i.avatarHash);
                    break;
                case 5:
                    i.bot = e.bool();
                    break;
                case 6:
                    i.flags = e.uint64().toString();
                    break;
                case 7:
                    i.email = A.hU.internalBinaryRead(e, e.uint32(), n, i.email);
                    break;
                case 8:
                    i.phone = A.hU.internalBinaryRead(e, e.uint32(), n, i.phone);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, h.O0.Bit64).fixed64(e.id),
            "" !== e.username && t.tag(2, h.O0.LengthDelimited).string(e.username),
            0 !== e.discriminator && t.tag(3, h.O0.Varint).uint32(e.discriminator),
            e.avatarHash && A.hU.internalBinaryWrite(e.avatarHash, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, h.O0.Varint).bool(e.bot),
            "0" !== e.flags && t.tag(6, h.O0.Varint).uint64(e.flags),
            e.email && A.hU.internalBinaryWrite(e.email, t.tag(7, h.O0.LengthDelimited).fork(), n).join(),
            e.phone && A.hU.internalBinaryWrite(e.phone, t.tag(8, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new x();
class G extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserAvatarDecoration", [
            { no: 1, name: "asset", kind: "scalar", T: 9 },
            { no: 2, name: "sku_id", kind: "message", T: () => A.ol },
            { no: 3, name: "expires_at", kind: "message", T: () => A.ZQ },
        ]);
    }
    create(e) {
        let t = { asset: "" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.asset = e.string();
                    break;
                case 2:
                    i.skuId = A.ol.internalBinaryRead(e, e.uint32(), n, i.skuId);
                    break;
                case 3:
                    i.expiresAt = A.ZQ.internalBinaryRead(e, e.uint32(), n, i.expiresAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.asset && t.tag(1, h.O0.LengthDelimited).string(e.asset),
            e.skuId && A.ol.internalBinaryWrite(e.skuId, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            e.expiresAt && A.ZQ.internalBinaryWrite(e.expiresAt, t.tag(3, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let V = new G();
class F extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserNameplate", [
            { no: 1, name: "asset", kind: "scalar", T: 9 },
            { no: 2, name: "palette", kind: "scalar", T: 9 },
            { no: 3, name: "sku_id", kind: "message", T: () => A.ol },
            { no: 4, name: "expires_at", kind: "message", T: () => I.D },
            { no: 5, name: "label", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { asset: "", palette: "", label: "" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.asset = e.string();
                    break;
                case 2:
                    i.palette = e.string();
                    break;
                case 3:
                    i.skuId = A.ol.internalBinaryRead(e, e.uint32(), n, i.skuId);
                    break;
                case 4:
                    i.expiresAt = I.D.internalBinaryRead(e, e.uint32(), n, i.expiresAt);
                    break;
                case 5:
                    i.label = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.asset && t.tag(1, h.O0.LengthDelimited).string(e.asset),
            "" !== e.palette && t.tag(2, h.O0.LengthDelimited).string(e.palette),
            e.skuId && A.ol.internalBinaryWrite(e.skuId, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            e.expiresAt && I.D.internalBinaryWrite(e.expiresAt, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            "" !== e.label && t.tag(5, h.O0.LengthDelimited).string(e.label);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let B = new F();
class H extends g.G {
    constructor() {
        super("discord_protos.users.v1.DisplayNameStyles", [
            {
                no: 1,
                name: "font_id",
                kind: "enum",
                T: () => ["discord_protos.users.v1.DisplayNameFont", y, "DISPLAY_NAME_FONT_"],
            },
            {
                no: 2,
                name: "effect_id",
                kind: "enum",
                T: () => ["discord_protos.users.v1.DisplayNameEffect", N, "DISPLAY_NAME_EFFECT_"],
            },
            { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let t = { fontId: 0, effectId: 0, colors: [] };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.fontId = e.int32();
                    break;
                case 2:
                    i.effectId = e.int32();
                    break;
                case 3:
                    if (r === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.colors.push(e.uint32());
                    else i.colors.push(e.uint32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (0 !== e.fontId && t.tag(1, h.O0.Varint).int32(e.fontId),
            0 !== e.effectId && t.tag(2, h.O0.Varint).int32(e.effectId),
            e.colors.length)
        ) {
            t.tag(3, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.colors.length; n++) t.uint32(e.colors[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let Y = new H();
class W extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserCollectibles", [{ no: 1, name: "nameplate", kind: "message", T: () => B }]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.nameplate = B.internalBinaryRead(e, e.uint32(), n, i.nameplate);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.nameplate && B.internalBinaryWrite(e.nameplate, t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let j = new W();
class K extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserPrimaryGuild", [
            { no: 1, name: "identity_guild_id", kind: "message", T: () => A.ol },
            { no: 2, name: "identity_enabled", kind: "message", T: () => A._t },
            { no: 3, name: "tag", kind: "message", T: () => A.hU },
            { no: 4, name: "badge", kind: "message", T: () => A.hU },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.identityGuildId = A.ol.internalBinaryRead(e, e.uint32(), n, i.identityGuildId);
                    break;
                case 2:
                    i.identityEnabled = A._t.internalBinaryRead(e, e.uint32(), n, i.identityEnabled);
                    break;
                case 3:
                    i.tag = A.hU.internalBinaryRead(e, e.uint32(), n, i.tag);
                    break;
                case 4:
                    i.badge = A.hU.internalBinaryRead(e, e.uint32(), n, i.badge);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.identityGuildId &&
            A.ol.internalBinaryWrite(e.identityGuildId, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.identityEnabled &&
                A._t.internalBinaryWrite(e.identityEnabled, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            e.tag && A.hU.internalBinaryWrite(e.tag, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            e.badge && A.hU.internalBinaryWrite(e.badge, t.tag(4, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let $ = new K();
class z extends g.G {
    constructor() {
        super("discord_protos.users.v1.ScheduleRule", [
            { no: 1, name: "rule_id", kind: "scalar", T: 9 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "start_time", kind: "message", T: () => U },
            { no: 4, name: "end_time", kind: "message", T: () => U },
            { no: 5, name: "days", kind: "enum", repeat: 1, T: () => ["discord_protos.users.v1.DayOfWeek", S] },
            { no: 6, name: "enabled", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ruleId: "", label: "", days: [], enabled: !1 };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.ruleId = e.string();
                    break;
                case 2:
                    i.label = e.string();
                    break;
                case 3:
                    i.startTime = U.internalBinaryRead(e, e.uint32(), n, i.startTime);
                    break;
                case 4:
                    i.endTime = U.internalBinaryRead(e, e.uint32(), n, i.endTime);
                    break;
                case 5:
                    if (r === h.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) i.days.push(e.int32());
                    else i.days.push(e.int32());
                    break;
                case 6:
                    i.enabled = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.ruleId && t.tag(1, h.O0.LengthDelimited).string(e.ruleId),
            "" !== e.label && t.tag(2, h.O0.LengthDelimited).string(e.label),
            e.startTime && U.internalBinaryWrite(e.startTime, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            e.endTime && U.internalBinaryWrite(e.endTime, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            e.days.length)
        ) {
            t.tag(5, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.days.length; n++) t.int32(e.days[n]);
            t.join();
        }
        !1 !== e.enabled && t.tag(6, h.O0.Varint).bool(e.enabled);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let q = new z();
class X extends g.G {
    constructor() {
        super("discord_protos.users.v1.RestrictedSchedule", [
            { no: 1, name: "rules", kind: "message", repeat: 1, T: () => q },
        ]);
    }
    create(e) {
        let t = { rules: [] };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.rules.push(q.internalBinaryRead(e, e.uint32(), n));
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.rules.length; r++)
            q.internalBinaryWrite(e.rules[r], t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let Q = new X();
class J extends g.G {
    constructor() {
        super("discord_protos.users.v1.CrossPlatformRestriction", [
            { no: 1, name: "restriction_expiry", kind: "message", T: () => I.D },
            { no: 2, name: "application_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { applicationId: "0" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.restrictionExpiry = I.D.internalBinaryRead(e, e.uint32(), n, i.restrictionExpiry);
                    break;
                case 2:
                    i.applicationId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.restrictionExpiry &&
            I.D.internalBinaryWrite(e.restrictionExpiry, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.applicationId && t.tag(2, h.O0.Bit64).fixed64(e.applicationId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let Z = new J();
class ee extends g.G {
    constructor() {
        super("discord_protos.users.v1.BadgeCommon", [{ no: 1, name: "obtained_at", kind: "message", T: () => I.D }]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.obtainedAt = I.D.internalBinaryRead(e, e.uint32(), n, i.obtainedAt);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.obtainedAt && I.D.internalBinaryWrite(e.obtainedAt, t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let et = new ee();
class en extends g.G {
    constructor() {
        super("discord_protos.users.v1.AprilFools2026Badge", [
            { no: 1, name: "common", kind: "message", T: () => et },
            { no: 2, name: "level", kind: "scalar", T: 5 },
            { no: 3, name: "combat_class", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { level: 0, combatClass: "" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.common = et.internalBinaryRead(e, e.uint32(), n, i.common);
                    break;
                case 2:
                    i.level = e.int32();
                    break;
                case 3:
                    i.combatClass = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.common && et.internalBinaryWrite(e.common, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            0 !== e.level && t.tag(2, h.O0.Varint).int32(e.level),
            "" !== e.combatClass && t.tag(3, h.O0.LengthDelimited).string(e.combatClass);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let er = new en();
class ei extends g.G {
    constructor() {
        super("discord_protos.users.v1.Badge", [
            { no: 1, name: "april_fools_2026", kind: "message", oneof: "badge", T: () => er },
        ]);
    }
    create(e) {
        let t = { badge: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t)
                i.badge = {
                    oneofKind: "aprilFools2026",
                    aprilFools2026: er.internalBinaryRead(e, e.uint32(), n, i.badge.aprilFools2026),
                };
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "aprilFools2026" === e.badge.oneofKind &&
            er.internalBinaryWrite(e.badge.aprilFools2026, t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let es = new ei();
class ea extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserBadges", [
            { no: 1, name: "badges", kind: "message", repeat: 1, T: () => es },
        ]);
    }
    create(e) {
        let t = { badges: [] };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.badges.push(es.internalBinaryRead(e, e.uint32(), n));
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.badges.length; r++)
            es.internalBinaryWrite(e.badges[r], t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eo = new ea();
class el extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserData", [
            { no: 1, name: "linked_users", kind: "map", K: 6, V: { kind: "message", T: () => e_ } },
            { no: 2, name: "safety_feature_limits", kind: "map", K: 13, V: { kind: "message", T: () => ep } },
            { no: 3, name: "safety_flags", kind: "map", K: 13, V: { kind: "message", T: () => eg } },
            { no: 4, name: "quest", kind: "message", T: () => eT },
            { no: 5, name: "primary_guild", kind: "message", T: () => $ },
            { no: 6, name: "cross_platform_restriction", kind: "message", T: () => Z },
            { no: 7, name: "collectibles", kind: "message", T: () => j },
            { no: 8, name: "safety_state", kind: "message", T: () => T.ew },
            { no: 9, name: "premium_state", kind: "message", T: () => ey },
            { no: 10, name: "display_name_styles", kind: "message", T: () => Y },
            { no: 11, name: "store_country", kind: "message", T: () => eO },
            { no: 12, name: "restricted_schedule", kind: "message", T: () => Q },
            { no: 13, name: "age_assurance_data", kind: "message", T: () => ed },
            { no: 14, name: "perks", kind: "message", T: () => eM },
            { no: 15, name: "badges", kind: "message", T: () => eo },
            { no: 16, name: "country_data", kind: "message", T: () => eU },
        ]);
    }
    create(e) {
        let t = { linkedUsers: {}, safetyFeatureLimits: {}, safetyFlags: {} };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    this.binaryReadMap1(i.linkedUsers, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(i.safetyFeatureLimits, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(i.safetyFlags, e, n);
                    break;
                case 4:
                    i.quest = eT.internalBinaryRead(e, e.uint32(), n, i.quest);
                    break;
                case 5:
                    i.primaryGuild = $.internalBinaryRead(e, e.uint32(), n, i.primaryGuild);
                    break;
                case 6:
                    i.crossPlatformRestriction = Z.internalBinaryRead(e, e.uint32(), n, i.crossPlatformRestriction);
                    break;
                case 7:
                    i.collectibles = j.internalBinaryRead(e, e.uint32(), n, i.collectibles);
                    break;
                case 8:
                    i.safetyState = T.ew.internalBinaryRead(e, e.uint32(), n, i.safetyState);
                    break;
                case 9:
                    i.premiumState = ey.internalBinaryRead(e, e.uint32(), n, i.premiumState);
                    break;
                case 10:
                    i.displayNameStyles = Y.internalBinaryRead(e, e.uint32(), n, i.displayNameStyles);
                    break;
                case 11:
                    i.storeCountry = eO.internalBinaryRead(e, e.uint32(), n, i.storeCountry);
                    break;
                case 12:
                    i.restrictedSchedule = Q.internalBinaryRead(e, e.uint32(), n, i.restrictedSchedule);
                    break;
                case 13:
                    i.ageAssuranceData = ed.internalBinaryRead(e, e.uint32(), n, i.ageAssuranceData);
                    break;
                case 14:
                    i.perks = eM.internalBinaryRead(e, e.uint32(), n, i.perks);
                    break;
                case 15:
                    i.badges = eo.internalBinaryRead(e, e.uint32(), n, i.badges);
                    break;
                case 16:
                    i.countryData = eU.internalBinaryRead(e, e.uint32(), n, i.countryData);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
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
                    a = e_.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.linked_users",
                    );
            }
        }
        e[s ?? "0"] = a ?? e_.create();
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
                    a = ep.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits",
                    );
            }
        }
        e[s ?? 0] = a ?? ep.create();
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
                    a = eg.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_flags",
                    );
            }
        }
        e[s ?? 0] = a ?? eg.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.linkedUsers))
            t.tag(1, h.O0.LengthDelimited).fork().tag(1, h.O0.Bit64).fixed64(r),
                t.tag(2, h.O0.LengthDelimited).fork(),
                e_.internalBinaryWrite(e.linkedUsers[r], t, n),
                t.join().join();
        for (let r of Object.keys(e.safetyFeatureLimits))
            t.tag(2, h.O0.LengthDelimited).fork().tag(1, h.O0.Varint).uint32(parseInt(r)),
                t.tag(2, h.O0.LengthDelimited).fork(),
                ep.internalBinaryWrite(e.safetyFeatureLimits[r], t, n),
                t.join().join();
        for (let r of Object.keys(e.safetyFlags))
            t.tag(3, h.O0.LengthDelimited).fork().tag(1, h.O0.Varint).uint32(parseInt(r)),
                t.tag(2, h.O0.LengthDelimited).fork(),
                eg.internalBinaryWrite(e.safetyFlags[r], t, n),
                t.join().join();
        e.quest && eT.internalBinaryWrite(e.quest, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            e.primaryGuild && $.internalBinaryWrite(e.primaryGuild, t.tag(5, h.O0.LengthDelimited).fork(), n).join(),
            e.crossPlatformRestriction &&
                Z.internalBinaryWrite(e.crossPlatformRestriction, t.tag(6, h.O0.LengthDelimited).fork(), n).join(),
            e.collectibles && j.internalBinaryWrite(e.collectibles, t.tag(7, h.O0.LengthDelimited).fork(), n).join(),
            e.safetyState && T.ew.internalBinaryWrite(e.safetyState, t.tag(8, h.O0.LengthDelimited).fork(), n).join(),
            e.premiumState && ey.internalBinaryWrite(e.premiumState, t.tag(9, h.O0.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                Y.internalBinaryWrite(e.displayNameStyles, t.tag(10, h.O0.LengthDelimited).fork(), n).join(),
            e.storeCountry && eO.internalBinaryWrite(e.storeCountry, t.tag(11, h.O0.LengthDelimited).fork(), n).join(),
            e.restrictedSchedule &&
                Q.internalBinaryWrite(e.restrictedSchedule, t.tag(12, h.O0.LengthDelimited).fork(), n).join(),
            e.ageAssuranceData &&
                ed.internalBinaryWrite(e.ageAssuranceData, t.tag(13, h.O0.LengthDelimited).fork(), n).join(),
            e.perks && eM.internalBinaryWrite(e.perks, t.tag(14, h.O0.LengthDelimited).fork(), n).join(),
            e.badges && eo.internalBinaryWrite(e.badges, t.tag(15, h.O0.LengthDelimited).fork(), n).join(),
            e.countryData && eU.internalBinaryWrite(e.countryData, t.tag(16, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new el();
class eu extends g.G {
    constructor() {
        super("discord_protos.users.v1.AgeAssuranceData", [
            { no: 1, name: "estimated_date_of_birth", kind: "message", T: () => I.D },
            {
                no: 2,
                name: "method",
                kind: "enum",
                T: () => ["discord_protos.users.v1.AgeAssuranceMethod", O, "AGE_ASSURANCE_METHOD_"],
            },
            { no: 3, name: "method_version", kind: "scalar", T: 5 },
            {
                no: 4,
                name: "vendor",
                kind: "enum",
                T: () => ["discord_protos.users.v1.AgeAssuranceVendor", R, "AGE_ASSURANCE_VENDOR_"],
            },
            { no: 5, name: "verified_at", kind: "message", T: () => I.D },
        ]);
    }
    create(e) {
        let t = { method: 0, methodVersion: 0, vendor: 0 };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.estimatedDateOfBirth = I.D.internalBinaryRead(e, e.uint32(), n, i.estimatedDateOfBirth);
                    break;
                case 2:
                    i.method = e.int32();
                    break;
                case 3:
                    i.methodVersion = e.int32();
                    break;
                case 4:
                    i.vendor = e.int32();
                    break;
                case 5:
                    i.verifiedAt = I.D.internalBinaryRead(e, e.uint32(), n, i.verifiedAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.estimatedDateOfBirth &&
            I.D.internalBinaryWrite(e.estimatedDateOfBirth, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            0 !== e.method && t.tag(2, h.O0.Varint).int32(e.method),
            0 !== e.methodVersion && t.tag(3, h.O0.Varint).int32(e.methodVersion),
            0 !== e.vendor && t.tag(4, h.O0.Varint).int32(e.vendor),
            e.verifiedAt && I.D.internalBinaryWrite(e.verifiedAt, t.tag(5, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ed = new eu();
class ec extends g.G {
    constructor() {
        super("discord_protos.users.v1.LinkedUser", [
            { no: 1, name: "user_id", kind: "scalar", T: 6 },
            { no: 2, name: "link_type", kind: "enum", T: () => ["discord_protos.users.v1.UserLinkType", v] },
            { no: 3, name: "link_status", kind: "enum", T: () => ["discord_protos.users.v1.UserLinkStatus", C] },
            { no: 4, name: "requestor_id", kind: "scalar", T: 6 },
            { no: 5, name: "created_at", kind: "message", T: () => I.D },
            { no: 6, name: "updated_at", kind: "message", T: () => I.D },
        ]);
    }
    create(e) {
        let t = { userId: "0", linkType: 0, linkStatus: 0, requestorId: "0" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.userId = e.fixed64().toString();
                    break;
                case 2:
                    i.linkType = e.int32();
                    break;
                case 3:
                    i.linkStatus = e.int32();
                    break;
                case 4:
                    i.requestorId = e.fixed64().toString();
                    break;
                case 5:
                    i.createdAt = I.D.internalBinaryRead(e, e.uint32(), n, i.createdAt);
                    break;
                case 6:
                    i.updatedAt = I.D.internalBinaryRead(e, e.uint32(), n, i.updatedAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.userId && t.tag(1, h.O0.Bit64).fixed64(e.userId),
            0 !== e.linkType && t.tag(2, h.O0.Varint).int32(e.linkType),
            0 !== e.linkStatus && t.tag(3, h.O0.Varint).int32(e.linkStatus),
            "0" !== e.requestorId && t.tag(4, h.O0.Bit64).fixed64(e.requestorId),
            e.createdAt && I.D.internalBinaryWrite(e.createdAt, t.tag(5, h.O0.LengthDelimited).fork(), n).join(),
            e.updatedAt && I.D.internalBinaryWrite(e.updatedAt, t.tag(6, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let e_ = new ec();
class ef extends g.G {
    constructor() {
        super("discord_protos.users.v1.RateLimitData", [
            { no: 1, name: "limit_expiry", kind: "message", T: () => I.D },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.limitExpiry = I.D.internalBinaryRead(e, e.uint32(), n, i.limitExpiry);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.limitExpiry && I.D.internalBinaryWrite(e.limitExpiry, t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eE = new ef();
class eh extends g.G {
    constructor() {
        super("discord_protos.users.v1.FeatureLimits", [
            { no: 1, name: "map", kind: "map", K: 13, V: { kind: "message", T: () => eE } },
        ]);
    }
    create(e) {
        let t = { map: {} };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(i.map, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
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
                    s = t.uint32();
                    break;
                case 2:
                    a = eE.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.FeatureLimits.map",
                    );
            }
        }
        e[s ?? 0] = a ?? eE.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.map))
            t.tag(1, h.O0.LengthDelimited).fork().tag(1, h.O0.Varint).uint32(parseInt(r)),
                t.tag(2, h.O0.LengthDelimited).fork(),
                eE.internalBinaryWrite(e.map[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ep = new eh();
class em extends g.G {
    constructor() {
        super("discord_protos.users.v1.SafetyFlag", [{ no: 1, name: "flag_expiry", kind: "message", T: () => I.D }]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.flagExpiry = I.D.internalBinaryRead(e, e.uint32(), n, i.flagExpiry);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.flagExpiry && I.D.internalBinaryWrite(e.flagExpiry, t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eg = new em();
class eA extends g.G {
    constructor() {
        super("discord_protos.users.v1.GuildShardingConfig", [
            { no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { shards: [] };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === h.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) i.shards.push(e.int32());
                else i.shards.push(e.int32());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.shards.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.shards.length; n++) t.int32(e.shards[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new eA();
class eI extends g.G {
    constructor() {
        super("discord_protos.users.v1.QuestMetadata", [{ no: 1, name: "quests_completed", kind: "scalar", T: 13 }]);
    }
    create(e) {
        let t = { questsCompleted: 0 };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.questsCompleted = e.uint32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.questsCompleted && t.tag(1, h.O0.Varint).uint32(e.questsCompleted);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eT = new eI();
class eS extends g.G {
    constructor() {
        super("discord_protos.users.v1.PremiumState", [
            {
                no: 1,
                name: "premium_source",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSource", b, "PREMIUM_SOURCE_"],
            },
            {
                no: 2,
                name: "premium_subscription_type",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSubscriptionType", D, "PREMIUM_SUBSCRIPTION_TYPE_"],
            },
            {
                no: 3,
                name: "premium_subscription_group_role",
                kind: "enum",
                T: () => [
                    "discord_protos.users.v1.PremiumSubscriptionGroupRole",
                    L,
                    "PREMIUM_SUBSCRIPTION_GROUP_ROLE_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { premiumSource: 0, premiumSubscriptionType: 0, premiumSubscriptionGroupRole: 0 };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.premiumSource = e.int32();
                    break;
                case 2:
                    i.premiumSubscriptionType = e.int32();
                    break;
                case 3:
                    i.premiumSubscriptionGroupRole = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.premiumSource && t.tag(1, h.O0.Varint).int32(e.premiumSource),
            0 !== e.premiumSubscriptionType && t.tag(2, h.O0.Varint).int32(e.premiumSubscriptionType),
            0 !== e.premiumSubscriptionGroupRole && t.tag(3, h.O0.Varint).int32(e.premiumSubscriptionGroupRole);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ey = new eS();
class eN extends g.G {
    constructor() {
        super("discord_protos.users.v1.StoreCountry", [
            { no: 1, name: "country", kind: "scalar", T: 9 },
            { no: 2, name: "set_at", kind: "message", T: () => I.D },
        ]);
    }
    create(e) {
        let t = { country: "" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.country = e.string();
                    break;
                case 2:
                    i.setAt = I.D.internalBinaryRead(e, e.uint32(), n, i.setAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.country && t.tag(1, h.O0.LengthDelimited).string(e.country),
            e.setAt && I.D.internalBinaryWrite(e.setAt, t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eO = new eN();
class eR extends g.G {
    constructor() {
        super("discord_protos.users.v1.PerkConfig", [
            { no: 1, name: "source", kind: "enum", repeat: 1, T: () => ["discord_protos.users.v1.PerkSource", M] },
            { no: 2, name: "increased_file_upload_size", kind: "message", oneof: "kind", T: () => eb },
            { no: 3, name: "increased_guild_limit", kind: "message", oneof: "kind", T: () => eL },
        ]);
    }
    create(e) {
        let t = { source: [], kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    if (r === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.source.push(e.int32());
                    else i.source.push(e.int32());
                    break;
                case 2:
                    i.kind = {
                        oneofKind: "increasedFileUploadSize",
                        increasedFileUploadSize: eb.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            i.kind.increasedFileUploadSize,
                        ),
                    };
                    break;
                case 3:
                    i.kind = {
                        oneofKind: "increasedGuildLimit",
                        increasedGuildLimit: eL.internalBinaryRead(e, e.uint32(), n, i.kind.increasedGuildLimit),
                    };
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.source.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.source.length; n++) t.int32(e.source[n]);
            t.join();
        }
        "increasedFileUploadSize" === e.kind.oneofKind &&
            eb.internalBinaryWrite(e.kind.increasedFileUploadSize, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            "increasedGuildLimit" === e.kind.oneofKind &&
                eL.internalBinaryWrite(e.kind.increasedGuildLimit, t.tag(3, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ev = new eR();
class eC extends g.G {
    constructor() {
        super("discord_protos.users.v1.PerkConfigIncreasedFileUploadSize", [
            { no: 1, name: "max_size", kind: "scalar", T: 4 },
        ]);
    }
    create(e) {
        let t = { maxSize: "0" };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.maxSize = e.uint64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.maxSize && t.tag(1, h.O0.Varint).uint64(e.maxSize);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eb = new eC();
class eD extends g.G {
    constructor() {
        super("discord_protos.users.v1.PerkConfigIncreasedGuildLimit", [
            { no: 1, name: "max_guilds", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { maxGuilds: 0 };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.maxGuilds = e.uint32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let a = e.skip(r);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.maxGuilds && t.tag(1, h.O0.Varint).uint32(e.maxGuilds);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eL = new eD();
class ew extends g.G {
    constructor() {
        super("discord_protos.users.v1.Perks", [
            { no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 },
            { no: 2, name: "config_by_perk", kind: "map", K: 13, V: { kind: "message", T: () => ev } },
            { no: 3, name: "rules_version", kind: "scalar", T: 13 },
            { no: 4, name: "updated_at", kind: "message", T: () => I.D },
        ]);
    }
    create(e) {
        let t = { activePerksBitmask: [], configByPerk: {}, rulesVersion: 0 };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    if (r === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.activePerksBitmask.push(e.uint64().toString());
                    else i.activePerksBitmask.push(e.uint64().toString());
                    break;
                case 2:
                    this.binaryReadMap2(i.configByPerk, e, n);
                    break;
                case 3:
                    i.rulesVersion = e.uint32();
                    break;
                case 4:
                    i.updatedAt = I.D.internalBinaryRead(e, e.uint32(), n, i.updatedAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
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
                    a = ev.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.Perks.config_by_perk",
                    );
            }
        }
        e[s ?? 0] = a ?? ev.create();
    }
    internalBinaryWrite(e, t, n) {
        if (e.activePerksBitmask.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.activePerksBitmask.length; n++) t.uint64(e.activePerksBitmask[n]);
            t.join();
        }
        for (let r of Object.keys(e.configByPerk))
            t.tag(2, h.O0.LengthDelimited).fork().tag(1, h.O0.Varint).uint32(parseInt(r)),
                t.tag(2, h.O0.LengthDelimited).fork(),
                ev.internalBinaryWrite(e.configByPerk[r], t, n),
                t.join().join();
        0 !== e.rulesVersion && t.tag(3, h.O0.Varint).uint32(e.rulesVersion),
            e.updatedAt && I.D.internalBinaryWrite(e.updatedAt, t.tag(4, h.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eM = new ew();
class eP extends g.G {
    constructor() {
        super("discord_protos.users.v1.UserCountryData", [
            { no: 1, name: "calculated_country", kind: "scalar", T: 9 },
            { no: 2, name: "last_calculated_at", kind: "message", T: () => I.D },
            { no: 3, name: "country_override", kind: "message", T: () => A.hU },
            { no: 4, name: "override_set_at", kind: "message", T: () => I.D },
            { no: 5, name: "country_scores", kind: "map", K: 9, V: { kind: "scalar", T: 2 } },
        ]);
    }
    create(e) {
        let t = { calculatedCountry: "", countryScores: {} };
        return (
            globalThis.Object.defineProperty(t, m.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    i.calculatedCountry = e.string();
                    break;
                case 2:
                    i.lastCalculatedAt = I.D.internalBinaryRead(e, e.uint32(), n, i.lastCalculatedAt);
                    break;
                case 3:
                    i.countryOverride = A.hU.internalBinaryRead(e, e.uint32(), n, i.countryOverride);
                    break;
                case 4:
                    i.overrideSetAt = I.D.internalBinaryRead(e, e.uint32(), n, i.overrideSetAt);
                    break;
                case 5:
                    this.binaryReadMap5(i.countryScores, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    binaryReadMap5(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = t.float();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserCountryData.country_scores",
                    );
            }
        }
        e[s ?? ""] = a ?? 0;
    }
    internalBinaryWrite(e, t, n) {
        for (let r of ("" !== e.calculatedCountry && t.tag(1, h.O0.LengthDelimited).string(e.calculatedCountry),
        e.lastCalculatedAt &&
            I.D.internalBinaryWrite(e.lastCalculatedAt, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
        e.countryOverride &&
            A.hU.internalBinaryWrite(e.countryOverride, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
        e.overrideSetAt && I.D.internalBinaryWrite(e.overrideSetAt, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
        Object.keys(e.countryScores)))
            t.tag(5, h.O0.LengthDelimited)
                .fork()
                .tag(1, h.O0.LengthDelimited)
                .string(r)
                .tag(2, h.O0.Bit32)
                .float(e.countryScores[r])
                .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? h.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eU = new eP();
