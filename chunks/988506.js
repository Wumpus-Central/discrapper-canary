"use strict";
n.d(t, { fE: () => p, jK: () => g, ob: () => c, qT: () => E }), n(938796), n(321073);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
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
            (e[(e.USER_LINK_TYPE_UNSPECIFIED = 0)] = "USER_LINK_TYPE_UNSPECIFIED"),
            (e[(e.PARENT = 1)] = "PARENT"),
            (e[(e.CHILD = 2)] = "CHILD"),
            e
        );
    })({}),
    h = (function (e) {
        return (
            (e[(e.USER_LINK_STATUS_UNSPECIFIED = 0)] = "USER_LINK_STATUS_UNSPECIFIED"),
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.ACTIVE = 2)] = "ACTIVE"),
            (e[(e.INACTIVE = 3)] = "INACTIVE"),
            (e[(e.DECLINED = 4)] = "DECLINED"),
            e
        );
    })({}),
    p = (function (e) {
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
    E = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.PRIMARY = 1)] = "PRIMARY"),
            (e[(e.MEMBER = 2)] = "MEMBER"),
            e
        );
    })({});
class A extends s.G {
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
                    a.hours = e.int32();
                    break;
                case 2:
                    a.minutes = e.int32();
                    break;
                case 3:
                    a.seconds = e.int32();
                    break;
                case 4:
                    a.nanos = e.int32();
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
        0 !== e.hours && t.tag(1, r.O0.Varint).int32(e.hours),
            0 !== e.minutes && t.tag(2, r.O0.Varint).int32(e.minutes),
            0 !== e.seconds && t.tag(3, r.O0.Varint).int32(e.seconds),
            0 !== e.nanos && t.tag(4, r.O0.Varint).int32(e.nanos);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new A();
class T extends s.G {
    constructor() {
        super("discord_protos.users.v1.User", [
            { no: 1, name: "id", kind: "scalar", T: 4 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "discriminator", kind: "scalar", T: 9 },
            { no: 4, name: "avatar", kind: "message", T: () => o.hU },
            { no: 5, name: "bot", kind: "scalar", T: 8 },
            { no: 6, name: "public_flags", kind: "scalar", T: 4 },
            { no: 8, name: "global_name", kind: "message", T: () => o.hU },
            { no: 9, name: "avatar_decoration_data", kind: "message", T: () => v },
            { no: 10, name: "primary_guild", kind: "message", T: () => w },
            { no: 11, name: "collectibles", kind: "message", T: () => D },
            { no: 12, name: "safety_state", kind: "message", T: () => u.ew },
            { no: 13, name: "display_name_styles", kind: "message", T: () => R },
        ]);
    }
    create(e) {
        let t = { id: "0", username: "", discriminator: "", bot: !1, publicFlags: "0" };
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
                    a.id = e.uint64().toString();
                    break;
                case 2:
                    a.username = e.string();
                    break;
                case 3:
                    a.discriminator = e.string();
                    break;
                case 4:
                    a.avatar = o.hU.internalBinaryRead(e, e.uint32(), n, a.avatar);
                    break;
                case 5:
                    a.bot = e.bool();
                    break;
                case 6:
                    a.publicFlags = e.uint64().toString();
                    break;
                case 8:
                    a.globalName = o.hU.internalBinaryRead(e, e.uint32(), n, a.globalName);
                    break;
                case 9:
                    a.avatarDecorationData = v.internalBinaryRead(e, e.uint32(), n, a.avatarDecorationData);
                    break;
                case 10:
                    a.primaryGuild = w.internalBinaryRead(e, e.uint32(), n, a.primaryGuild);
                    break;
                case 11:
                    a.collectibles = D.internalBinaryRead(e, e.uint32(), n, a.collectibles);
                    break;
                case 12:
                    a.safetyState = u.ew.internalBinaryRead(e, e.uint32(), n, a.safetyState);
                    break;
                case 13:
                    a.displayNameStyles = R.internalBinaryRead(e, e.uint32(), n, a.displayNameStyles);
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
        "0" !== e.id && t.tag(1, r.O0.Varint).uint64(e.id),
            "" !== e.username && t.tag(2, r.O0.LengthDelimited).string(e.username),
            "" !== e.discriminator && t.tag(3, r.O0.LengthDelimited).string(e.discriminator),
            e.avatar && o.hU.internalBinaryWrite(e.avatar, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, r.O0.Varint).bool(e.bot),
            "0" !== e.publicFlags && t.tag(6, r.O0.Varint).uint64(e.publicFlags),
            e.globalName && o.hU.internalBinaryWrite(e.globalName, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.avatarDecorationData &&
                v.internalBinaryWrite(e.avatarDecorationData, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.primaryGuild && w.internalBinaryWrite(e.primaryGuild, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.collectibles && D.internalBinaryWrite(e.collectibles, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.safetyState && u.ew.internalBinaryWrite(e.safetyState, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                R.internalBinaryWrite(e.displayNameStyles, t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new T();
class y extends s.G {
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
                    a.username = e.string();
                    break;
                case 3:
                    a.discriminator = e.uint32();
                    break;
                case 4:
                    a.avatarHash = o.hU.internalBinaryRead(e, e.uint32(), n, a.avatarHash);
                    break;
                case 5:
                    a.bot = e.bool();
                    break;
                case 6:
                    a.flags = e.uint64().toString();
                    break;
                case 7:
                    a.email = o.hU.internalBinaryRead(e, e.uint32(), n, a.email);
                    break;
                case 8:
                    a.phone = o.hU.internalBinaryRead(e, e.uint32(), n, a.phone);
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
new y();
class S extends s.G {
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
                    a.asset = e.string();
                    break;
                case 2:
                    a.skuId = o.ol.internalBinaryRead(e, e.uint32(), n, a.skuId);
                    break;
                case 3:
                    a.expiresAt = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.expiresAt);
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
        "" !== e.asset && t.tag(1, r.O0.LengthDelimited).string(e.asset),
            e.skuId && o.ol.internalBinaryWrite(e.skuId, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.expiresAt && o.ZQ.internalBinaryWrite(e.expiresAt, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let v = new S();
class C extends s.G {
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
                    a.asset = e.string();
                    break;
                case 2:
                    a.palette = e.string();
                    break;
                case 3:
                    a.skuId = o.ol.internalBinaryRead(e, e.uint32(), n, a.skuId);
                    break;
                case 4:
                    a.expiresAt = l.D.internalBinaryRead(e, e.uint32(), n, a.expiresAt);
                    break;
                case 5:
                    a.label = e.string();
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
let b = new C();
class N extends s.G {
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
                    a.fontId = e.int32();
                    break;
                case 2:
                    a.effectId = e.int32();
                    break;
                case 3:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.colors.push(e.uint32());
                    else a.colors.push(e.uint32());
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
let R = new N();
class O extends s.G {
    constructor() {
        super("discord_protos.users.v1.UserCollectibles", [{ no: 1, name: "nameplate", kind: "message", T: () => b }]);
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
            if (1 === t) a.nameplate = b.internalBinaryRead(e, e.uint32(), n, a.nameplate);
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
        e.nameplate && b.internalBinaryWrite(e.nameplate, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let D = new O();
class L extends s.G {
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
                    a.identityGuildId = o.ol.internalBinaryRead(e, e.uint32(), n, a.identityGuildId);
                    break;
                case 2:
                    a.identityEnabled = o._t.internalBinaryRead(e, e.uint32(), n, a.identityEnabled);
                    break;
                case 3:
                    a.tag = o.hU.internalBinaryRead(e, e.uint32(), n, a.tag);
                    break;
                case 4:
                    a.badge = o.hU.internalBinaryRead(e, e.uint32(), n, a.badge);
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
let w = new L();
class x extends s.G {
    constructor() {
        super("discord_protos.users.v1.ScheduleRule", [
            { no: 1, name: "rule_id", kind: "scalar", T: 9 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "start_time", kind: "message", T: () => I },
            { no: 4, name: "end_time", kind: "message", T: () => I },
            { no: 5, name: "days", kind: "enum", repeat: 1, T: () => ["discord_protos.users.v1.DayOfWeek", c] },
        ]);
    }
    create(e) {
        let t = { ruleId: "", label: "", days: [] };
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
                    a.ruleId = e.string();
                    break;
                case 2:
                    a.label = e.string();
                    break;
                case 3:
                    a.startTime = I.internalBinaryRead(e, e.uint32(), n, a.startTime);
                    break;
                case 4:
                    a.endTime = I.internalBinaryRead(e, e.uint32(), n, a.endTime);
                    break;
                case 5:
                    if (i === r.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) a.days.push(e.int32());
                    else a.days.push(e.int32());
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
        if (
            ("" !== e.ruleId && t.tag(1, r.O0.LengthDelimited).string(e.ruleId),
            "" !== e.label && t.tag(2, r.O0.LengthDelimited).string(e.label),
            e.startTime && I.internalBinaryWrite(e.startTime, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.endTime && I.internalBinaryWrite(e.endTime, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.days.length)
        ) {
            t.tag(5, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.days.length; n++) t.int32(e.days[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new x();
class M extends s.G {
    constructor() {
        super("discord_protos.users.v1.RestrictedSchedule", [
            { no: 1, name: "rules", kind: "message", repeat: 1, T: () => P },
        ]);
    }
    create(e) {
        let t = { rules: [] };
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
            if (1 === t) a.rules.push(P.internalBinaryRead(e, e.uint32(), n));
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
        for (let i = 0; i < e.rules.length; i++)
            P.internalBinaryWrite(e.rules[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let k = new M();
class U extends s.G {
    constructor() {
        super("discord_protos.users.v1.CrossPlatformRestriction", [
            { no: 1, name: "restriction_expiry", kind: "message", T: () => l.D },
            { no: 2, name: "application_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { applicationId: "0" };
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
                    a.restrictionExpiry = l.D.internalBinaryRead(e, e.uint32(), n, a.restrictionExpiry);
                    break;
                case 2:
                    a.applicationId = e.fixed64().toString();
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
        e.restrictionExpiry &&
            l.D.internalBinaryWrite(e.restrictionExpiry, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.applicationId && t.tag(2, r.O0.Bit64).fixed64(e.applicationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let G = new U();
class F extends s.G {
    constructor() {
        super("discord_protos.users.v1.UserData", [
            { no: 1, name: "linked_users", kind: "map", K: 6, V: { kind: "message", T: () => H } },
            { no: 2, name: "safety_feature_limits", kind: "map", K: 13, V: { kind: "message", T: () => $ } },
            { no: 3, name: "safety_flags", kind: "map", K: 13, V: { kind: "message", T: () => q } },
            { no: 4, name: "quest", kind: "message", T: () => Q },
            { no: 5, name: "primary_guild", kind: "message", T: () => w },
            { no: 6, name: "cross_platform_restriction", kind: "message", T: () => G },
            { no: 7, name: "collectibles", kind: "message", T: () => D },
            { no: 8, name: "safety_state", kind: "message", T: () => u.ew },
            { no: 9, name: "premium_state", kind: "message", T: () => ee },
            { no: 10, name: "display_name_styles", kind: "message", T: () => R },
            { no: 11, name: "store_country", kind: "message", T: () => en },
            { no: 12, name: "restricted_schedule", kind: "message", T: () => k },
            { no: 13, name: "age_assurance_data", kind: "message", T: () => B },
        ]);
    }
    create(e) {
        let t = { linkedUsers: {}, safetyFeatureLimits: {}, safetyFlags: {} };
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
                    this.binaryReadMap1(a.linkedUsers, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(a.safetyFeatureLimits, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(a.safetyFlags, e, n);
                    break;
                case 4:
                    a.quest = Q.internalBinaryRead(e, e.uint32(), n, a.quest);
                    break;
                case 5:
                    a.primaryGuild = w.internalBinaryRead(e, e.uint32(), n, a.primaryGuild);
                    break;
                case 6:
                    a.crossPlatformRestriction = G.internalBinaryRead(e, e.uint32(), n, a.crossPlatformRestriction);
                    break;
                case 7:
                    a.collectibles = D.internalBinaryRead(e, e.uint32(), n, a.collectibles);
                    break;
                case 8:
                    a.safetyState = u.ew.internalBinaryRead(e, e.uint32(), n, a.safetyState);
                    break;
                case 9:
                    a.premiumState = ee.internalBinaryRead(e, e.uint32(), n, a.premiumState);
                    break;
                case 10:
                    a.displayNameStyles = R.internalBinaryRead(e, e.uint32(), n, a.displayNameStyles);
                    break;
                case 11:
                    a.storeCountry = en.internalBinaryRead(e, e.uint32(), n, a.storeCountry);
                    break;
                case 12:
                    a.restrictedSchedule = k.internalBinaryRead(e, e.uint32(), n, a.restrictedSchedule);
                    break;
                case 13:
                    a.ageAssuranceData = B.internalBinaryRead(e, e.uint32(), n, a.ageAssuranceData);
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
                    s = H.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.linked_users",
                    );
            }
        }
        e[a ?? "0"] = s ?? H.create();
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
                    a = t.uint32();
                    break;
                case 2:
                    s = $.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits",
                    );
            }
        }
        e[a ?? 0] = s ?? $.create();
    }
    binaryReadMap3(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.uint32();
                    break;
                case 2:
                    s = q.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_flags",
                    );
            }
        }
        e[a ?? 0] = s ?? q.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.linkedUsers))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                H.internalBinaryWrite(e.linkedUsers[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.safetyFeatureLimits))
            t.tag(2, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                $.internalBinaryWrite(e.safetyFeatureLimits[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.safetyFlags))
            t.tag(3, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                q.internalBinaryWrite(e.safetyFlags[i], t, n),
                t.join().join();
        e.quest && Q.internalBinaryWrite(e.quest, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.primaryGuild && w.internalBinaryWrite(e.primaryGuild, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.crossPlatformRestriction &&
                G.internalBinaryWrite(e.crossPlatformRestriction, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.collectibles && D.internalBinaryWrite(e.collectibles, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.safetyState && u.ew.internalBinaryWrite(e.safetyState, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.premiumState && ee.internalBinaryWrite(e.premiumState, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                R.internalBinaryWrite(e.displayNameStyles, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.storeCountry && en.internalBinaryWrite(e.storeCountry, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.restrictedSchedule &&
                k.internalBinaryWrite(e.restrictedSchedule, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.ageAssuranceData &&
                B.internalBinaryWrite(e.ageAssuranceData, t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new F();
class V extends s.G {
    constructor() {
        super("discord_protos.users.v1.AgeAssuranceData", [
            { no: 1, name: "estimated_date_of_birth", kind: "message", T: () => l.D },
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
            if (1 === t) a.estimatedDateOfBirth = l.D.internalBinaryRead(e, e.uint32(), n, a.estimatedDateOfBirth);
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
        e.estimatedDateOfBirth &&
            l.D.internalBinaryWrite(e.estimatedDateOfBirth, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let B = new V();
class j extends s.G {
    constructor() {
        super("discord_protos.users.v1.LinkedUser", [
            { no: 1, name: "user_id", kind: "scalar", T: 6 },
            { no: 2, name: "link_type", kind: "enum", T: () => ["discord_protos.users.v1.UserLinkType", f] },
            { no: 3, name: "link_status", kind: "enum", T: () => ["discord_protos.users.v1.UserLinkStatus", h] },
            { no: 4, name: "requestor_id", kind: "scalar", T: 6 },
            { no: 5, name: "created_at", kind: "message", T: () => l.D },
            { no: 6, name: "updated_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { userId: "0", linkType: 0, linkStatus: 0, requestorId: "0" };
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
                    a.userId = e.fixed64().toString();
                    break;
                case 2:
                    a.linkType = e.int32();
                    break;
                case 3:
                    a.linkStatus = e.int32();
                    break;
                case 4:
                    a.requestorId = e.fixed64().toString();
                    break;
                case 5:
                    a.createdAt = l.D.internalBinaryRead(e, e.uint32(), n, a.createdAt);
                    break;
                case 6:
                    a.updatedAt = l.D.internalBinaryRead(e, e.uint32(), n, a.updatedAt);
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
let H = new j();
class Y extends s.G {
    constructor() {
        super("discord_protos.users.v1.RateLimitData", [
            { no: 1, name: "limit_expiry", kind: "message", T: () => l.D },
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
            if (1 === t) a.limitExpiry = l.D.internalBinaryRead(e, e.uint32(), n, a.limitExpiry);
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
        e.limitExpiry && l.D.internalBinaryWrite(e.limitExpiry, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let W = new Y();
class K extends s.G {
    constructor() {
        super("discord_protos.users.v1.FeatureLimits", [
            { no: 1, name: "map", kind: "map", K: 13, V: { kind: "message", T: () => W } },
        ]);
    }
    create(e) {
        let t = { map: {} };
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
            if (1 === t) this.binaryReadMap1(a.map, e, n);
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
                    a = t.uint32();
                    break;
                case 2:
                    s = W.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.FeatureLimits.map",
                    );
            }
        }
        e[a ?? 0] = s ?? W.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.map))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Varint).uint32(parseInt(i)),
                t.tag(2, r.O0.LengthDelimited).fork(),
                W.internalBinaryWrite(e.map[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let $ = new K();
class z extends s.G {
    constructor() {
        super("discord_protos.users.v1.SafetyFlag", [{ no: 1, name: "flag_expiry", kind: "message", T: () => l.D }]);
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
            if (1 === t) a.flagExpiry = l.D.internalBinaryRead(e, e.uint32(), n, a.flagExpiry);
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
        e.flagExpiry && l.D.internalBinaryWrite(e.flagExpiry, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let q = new z();
class X extends s.G {
    constructor() {
        super("discord_protos.users.v1.GuildShardingConfig", [
            { no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { shards: [] };
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
                if (i === r.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) a.shards.push(e.int32());
                else a.shards.push(e.int32());
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
        if (e.shards.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.shards.length; n++) t.int32(e.shards[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new X();
class Z extends s.G {
    constructor() {
        super("discord_protos.users.v1.QuestMetadata", [{ no: 1, name: "quests_completed", kind: "scalar", T: 13 }]);
    }
    create(e) {
        let t = { questsCompleted: 0 };
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
            if (1 === t) a.questsCompleted = e.uint32();
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
        0 !== e.questsCompleted && t.tag(1, r.O0.Varint).uint32(e.questsCompleted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new Z();
class J extends s.G {
    constructor() {
        super("discord_protos.users.v1.PremiumState", [
            {
                no: 1,
                name: "premium_source",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSource", p, "PREMIUM_SOURCE_"],
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
                    E,
                    "PREMIUM_SUBSCRIPTION_GROUP_ROLE_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { premiumSource: 0, premiumSubscriptionType: 0, premiumSubscriptionGroupRole: 0 };
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
                    a.premiumSource = e.int32();
                    break;
                case 2:
                    a.premiumSubscriptionType = e.int32();
                    break;
                case 3:
                    a.premiumSubscriptionGroupRole = e.int32();
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
        0 !== e.premiumSource && t.tag(1, r.O0.Varint).int32(e.premiumSource),
            0 !== e.premiumSubscriptionType && t.tag(2, r.O0.Varint).int32(e.premiumSubscriptionType),
            0 !== e.premiumSubscriptionGroupRole && t.tag(3, r.O0.Varint).int32(e.premiumSubscriptionGroupRole);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ee = new J();
class et extends s.G {
    constructor() {
        super("discord_protos.users.v1.StoreCountry", [
            { no: 1, name: "country", kind: "scalar", T: 9 },
            { no: 2, name: "set_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { country: "" };
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
                    a.country = e.string();
                    break;
                case 2:
                    a.setAt = l.D.internalBinaryRead(e, e.uint32(), n, a.setAt);
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
        "" !== e.country && t.tag(1, r.O0.LengthDelimited).string(e.country),
            e.setAt && l.D.internalBinaryWrite(e.setAt, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let en = new et();
