n.d(t, {
    W$: () => m,
    bF: () => g,
    d3: () => h,
}),
    n(980754),
    n(388685),
    n(415506),
    n(997841),
    n(539854);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(381499),
    l = n(835913),
    c = (function (e) {
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
    u = (function (e) {
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
    d = (function (e) {
        return (
            (e[(e.USER_LINK_TYPE_UNSPECIFIED = 0)] = "USER_LINK_TYPE_UNSPECIFIED"),
            (e[(e.PARENT = 1)] = "PARENT"),
            (e[(e.CHILD = 2)] = "CHILD"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e[(e.USER_LINK_STATUS_UNSPECIFIED = 0)] = "USER_LINK_STATUS_UNSPECIFIED"),
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.ACTIVE = 2)] = "ACTIVE"),
            (e[(e.INACTIVE = 3)] = "INACTIVE"),
            (e[(e.DECLINED = 4)] = "DECLINED"),
            e
        );
    })({}),
    _ = (function (e) {
        return (
            (e[(e.REASON_UNSPECIFIED = 0)] = "REASON_UNSPECIFIED"),
            (e[(e.DISABLED_SUSPICIOUS_ACTIVITY = 1)] = "DISABLED_SUSPICIOUS_ACTIVITY"),
            (e[(e.SMITE_REMOVE_EMAIL_VERIFICATION = 2)] = "SMITE_REMOVE_EMAIL_VERIFICATION"),
            (e[(e.USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT = 3)] =
                "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT"),
            (e[(e.ACTIVE_ASSIGNMENT_COMPLETED = 4)] = "ACTIVE_ASSIGNMENT_COMPLETED"),
            (e[(e.ACTIVE_ASSIGNMENT_CREATED = 5)] = "ACTIVE_ASSIGNMENT_CREATED"),
            (e[(e.DEFERRED_ASSIGNMENT_CREATED = 6)] = "DEFERRED_ASSIGNMENT_CREATED"),
            (e[(e.DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE = 7)] = "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE"),
            (e[(e.DEFERRED_ASSIGNMENT_CANCELLED = 8)] = "DEFERRED_ASSIGNMENT_CANCELLED"),
            (e[(e.ASSIGNMENT_STATE_REPAIRED = 9)] = "ASSIGNMENT_STATE_REPAIRED"),
            (e[(e.MANUAL_PERMANENT_BAN = 10)] = "MANUAL_PERMANENT_BAN"),
            (e[(e.SAFETY_SYSTEM_UNBAN = 11)] = "SAFETY_SYSTEM_UNBAN"),
            (e[(e.GENERIC_AUTOMATED_SAFETY_ACTION = 12)] = "GENERIC_AUTOMATED_SAFETY_ACTION"),
            (e[(e.GENERIC_MANUAL_SAFETY_ACTION = 13)] = "GENERIC_MANUAL_SAFETY_ACTION"),
            e
        );
    })({}),
    p = (function (e) {
        return (
            (e[(e.ANNOTATION_UNSPECIFIED = 0)] = "ANNOTATION_UNSPECIFIED"),
            (e[(e.SPAMMER = 1)] = "SPAMMER"),
            (e[(e.SELF_DELETED = 2)] = "SELF_DELETED"),
            (e[(e.SELF_DISABLED = 3)] = "SELF_DISABLED"),
            (e[(e.UNDERAGE_DELETED = 4)] = "UNDERAGE_DELETED"),
            (e[(e.SAFETY_POLICY_VIOLATION = 5)] = "SAFETY_POLICY_VIOLATION"),
            (e[(e.INACTIVITY_DELETED = 6)] = "INACTIVITY_DELETED"),
            (e[(e.GENERIC_DELETED = 7)] = "GENERIC_DELETED"),
            e
        );
    })({}),
    h = (function (e) {
        return (
            (e[(e.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
            (e[(e.SUBSCRIPTION = 1)] = "SUBSCRIPTION"),
            (e[(e.FRACTIONAL_NITRO = 2)] = "FRACTIONAL_NITRO"),
            (e[(e.REVERSE_TRIAL = 3)] = "REVERSE_TRIAL"),
            (e[(e.SUBSCRIPTION_GROUP = 4)] = "SUBSCRIPTION_GROUP"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
            (e[(e.BOOST_ONLY = 1)] = "BOOST_ONLY"),
            (e[(e.TIER_0 = 2)] = "TIER_0"),
            (e[(e.TIER_1 = 3)] = "TIER_1"),
            (e[(e.TIER_2 = 4)] = "TIER_2"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.PRIMARY = 1)] = "PRIMARY"),
            (e[(e.MEMBER = 2)] = "MEMBER"),
            e
        );
    })({});
class E extends o.C {
    create(e) {
        let t = {
            id: "0",
            username: "",
            discriminator: "",
            bot: !1,
            publicFlags: "0",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
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
                    a.avatar = s.Gm.internalBinaryRead(e, e.uint32(), n, a.avatar);
                    break;
                case 5:
                    a.bot = e.bool();
                    break;
                case 6:
                    a.publicFlags = e.uint64().toString();
                    break;
                case 8:
                    a.globalName = s.Gm.internalBinaryRead(e, e.uint32(), n, a.globalName);
                    break;
                case 9:
                    a.avatarDecorationData = O.internalBinaryRead(e, e.uint32(), n, a.avatarDecorationData);
                    break;
                case 10:
                    a.primaryGuild = R.internalBinaryRead(e, e.uint32(), n, a.primaryGuild);
                    break;
                case 11:
                    a.collectibles = C.internalBinaryRead(e, e.uint32(), n, a.collectibles);
                    break;
                case 12:
                    a.safetyState = et.internalBinaryRead(e, e.uint32(), n, a.safetyState);
                    break;
                case 13:
                    a.displayNameStyles = S.internalBinaryRead(e, e.uint32(), n, a.displayNameStyles);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.TD.Varint).uint64(e.id),
            "" !== e.username && t.tag(2, r.TD.LengthDelimited).string(e.username),
            "" !== e.discriminator && t.tag(3, r.TD.LengthDelimited).string(e.discriminator),
            e.avatar && s.Gm.internalBinaryWrite(e.avatar, t.tag(4, r.TD.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, r.TD.Varint).bool(e.bot),
            "0" !== e.publicFlags && t.tag(6, r.TD.Varint).uint64(e.publicFlags),
            e.globalName && s.Gm.internalBinaryWrite(e.globalName, t.tag(8, r.TD.LengthDelimited).fork(), n).join(),
            e.avatarDecorationData &&
                O.internalBinaryWrite(e.avatarDecorationData, t.tag(9, r.TD.LengthDelimited).fork(), n).join(),
            e.primaryGuild && R.internalBinaryWrite(e.primaryGuild, t.tag(10, r.TD.LengthDelimited).fork(), n).join(),
            e.collectibles && C.internalBinaryWrite(e.collectibles, t.tag(11, r.TD.LengthDelimited).fork(), n).join(),
            e.safetyState && et.internalBinaryWrite(e.safetyState, t.tag(12, r.TD.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                S.internalBinaryWrite(e.displayNameStyles, t.tag(13, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.User", [
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 4,
            },
            {
                no: 2,
                name: "username",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "discriminator",
                kind: "scalar",
                T: 9,
            },
            {
                no: 4,
                name: "avatar",
                kind: "message",
                T: () => s.Gm,
            },
            {
                no: 5,
                name: "bot",
                kind: "scalar",
                T: 8,
            },
            {
                no: 6,
                name: "public_flags",
                kind: "scalar",
                T: 4,
            },
            {
                no: 8,
                name: "global_name",
                kind: "message",
                T: () => s.Gm,
            },
            {
                no: 9,
                name: "avatar_decoration_data",
                kind: "message",
                T: () => O,
            },
            {
                no: 10,
                name: "primary_guild",
                kind: "message",
                T: () => R,
            },
            {
                no: 11,
                name: "collectibles",
                kind: "message",
                T: () => C,
            },
            {
                no: 12,
                name: "safety_state",
                kind: "message",
                T: () => et,
            },
            {
                no: 13,
                name: "display_name_styles",
                kind: "message",
                T: () => S,
            },
        ]);
    }
}
new E();
class b extends o.C {
    create(e) {
        let t = {
            id: "0",
            username: "",
            discriminator: 0,
            bot: !1,
            flags: "0",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
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
                    a.avatarHash = s.Gm.internalBinaryRead(e, e.uint32(), n, a.avatarHash);
                    break;
                case 5:
                    a.bot = e.bool();
                    break;
                case 6:
                    a.flags = e.uint64().toString();
                    break;
                case 7:
                    a.email = s.Gm.internalBinaryRead(e, e.uint32(), n, a.email);
                    break;
                case 8:
                    a.phone = s.Gm.internalBinaryRead(e, e.uint32(), n, a.phone);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.TD.Bit64).fixed64(e.id),
            "" !== e.username && t.tag(2, r.TD.LengthDelimited).string(e.username),
            0 !== e.discriminator && t.tag(3, r.TD.Varint).uint32(e.discriminator),
            e.avatarHash && s.Gm.internalBinaryWrite(e.avatarHash, t.tag(4, r.TD.LengthDelimited).fork(), n).join(),
            !1 !== e.bot && t.tag(5, r.TD.Varint).bool(e.bot),
            "0" !== e.flags && t.tag(6, r.TD.Varint).uint64(e.flags),
            e.email && s.Gm.internalBinaryWrite(e.email, t.tag(7, r.TD.LengthDelimited).fork(), n).join(),
            e.phone && s.Gm.internalBinaryWrite(e.phone, t.tag(8, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.MediumUser", [
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 2,
                name: "username",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "discriminator",
                kind: "scalar",
                T: 13,
            },
            {
                no: 4,
                name: "avatar_hash",
                kind: "message",
                T: () => s.Gm,
            },
            {
                no: 5,
                name: "bot",
                kind: "scalar",
                T: 8,
            },
            {
                no: 6,
                name: "flags",
                kind: "scalar",
                T: 4,
            },
            {
                no: 7,
                name: "email",
                kind: "message",
                T: () => s.Gm,
            },
            {
                no: 8,
                name: "phone",
                kind: "message",
                T: () => s.Gm,
            },
        ]);
    }
}
new b();
class y extends o.C {
    create(e) {
        let t = { asset: "" };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.asset = e.string();
                    break;
                case 2:
                    a.skuId = s.wA.internalBinaryRead(e, e.uint32(), n, a.skuId);
                    break;
                case 3:
                    a.expiresAt = s.yC.internalBinaryRead(e, e.uint32(), n, a.expiresAt);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.asset && t.tag(1, r.TD.LengthDelimited).string(e.asset),
            e.skuId && s.wA.internalBinaryWrite(e.skuId, t.tag(2, r.TD.LengthDelimited).fork(), n).join(),
            e.expiresAt && s.yC.internalBinaryWrite(e.expiresAt, t.tag(3, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.UserAvatarDecoration", [
            {
                no: 1,
                name: "asset",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "sku_id",
                kind: "message",
                T: () => s.wA,
            },
            {
                no: 3,
                name: "expires_at",
                kind: "message",
                T: () => s.yC,
            },
        ]);
    }
}
let O = new y();
class v extends o.C {
    create(e) {
        let t = {
            asset: "",
            palette: "",
            label: "",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.asset = e.string();
                    break;
                case 2:
                    a.palette = e.string();
                    break;
                case 3:
                    a.skuId = s.wA.internalBinaryRead(e, e.uint32(), n, a.skuId);
                    break;
                case 4:
                    a.expiresAt = l.E.internalBinaryRead(e, e.uint32(), n, a.expiresAt);
                    break;
                case 5:
                    a.label = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let c = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.asset && t.tag(1, r.TD.LengthDelimited).string(e.asset),
            "" !== e.palette && t.tag(2, r.TD.LengthDelimited).string(e.palette),
            e.skuId && s.wA.internalBinaryWrite(e.skuId, t.tag(3, r.TD.LengthDelimited).fork(), n).join(),
            e.expiresAt && l.E.internalBinaryWrite(e.expiresAt, t.tag(4, r.TD.LengthDelimited).fork(), n).join(),
            "" !== e.label && t.tag(5, r.TD.LengthDelimited).string(e.label);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.UserNameplate", [
            {
                no: 1,
                name: "asset",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "palette",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "sku_id",
                kind: "message",
                T: () => s.wA,
            },
            {
                no: 4,
                name: "expires_at",
                kind: "message",
                T: () => l.E,
            },
            {
                no: 5,
                name: "label",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let I = new v();
class T extends o.C {
    create(e) {
        let t = {
            fontId: 0,
            effectId: 0,
            colors: [],
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.fontId = e.int32();
                    break;
                case 2:
                    a.effectId = e.int32();
                    break;
                case 3:
                    if (i === r.TD.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.colors.push(e.uint32());
                    else a.colors.push(e.uint32());
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (0 !== e.fontId && t.tag(1, r.TD.Varint).int32(e.fontId),
            0 !== e.effectId && t.tag(2, r.TD.Varint).int32(e.effectId),
            e.colors.length)
        ) {
            t.tag(3, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.colors.length; n++) t.uint32(e.colors[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.DisplayNameStyles", [
            {
                no: 1,
                name: "font_id",
                kind: "enum",
                T: () => ["discord_protos.users.v1.DisplayNameFont", c, "DISPLAY_NAME_FONT_"],
            },
            {
                no: 2,
                name: "effect_id",
                kind: "enum",
                T: () => ["discord_protos.users.v1.DisplayNameEffect", u, "DISPLAY_NAME_EFFECT_"],
            },
            {
                no: 3,
                name: "colors",
                kind: "scalar",
                repeat: 1,
                T: 13,
            },
        ]);
    }
}
let S = new T();
class A extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.nameplate = I.internalBinaryRead(e, e.uint32(), n, a.nameplate);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.nameplate && I.internalBinaryWrite(e.nameplate, t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.UserCollectibles", [
            {
                no: 1,
                name: "nameplate",
                kind: "message",
                T: () => I,
            },
        ]);
    }
}
let C = new A();
class N extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.identityGuildId = s.wA.internalBinaryRead(e, e.uint32(), n, a.identityGuildId);
                    break;
                case 2:
                    a.identityEnabled = s.D5.internalBinaryRead(e, e.uint32(), n, a.identityEnabled);
                    break;
                case 3:
                    a.tag = s.Gm.internalBinaryRead(e, e.uint32(), n, a.tag);
                    break;
                case 4:
                    a.badge = s.Gm.internalBinaryRead(e, e.uint32(), n, a.badge);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.identityGuildId &&
            s.wA.internalBinaryWrite(e.identityGuildId, t.tag(1, r.TD.LengthDelimited).fork(), n).join(),
            e.identityEnabled &&
                s.D5.internalBinaryWrite(e.identityEnabled, t.tag(2, r.TD.LengthDelimited).fork(), n).join(),
            e.tag && s.Gm.internalBinaryWrite(e.tag, t.tag(3, r.TD.LengthDelimited).fork(), n).join(),
            e.badge && s.Gm.internalBinaryWrite(e.badge, t.tag(4, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.UserPrimaryGuild", [
            {
                no: 1,
                name: "identity_guild_id",
                kind: "message",
                T: () => s.wA,
            },
            {
                no: 2,
                name: "identity_enabled",
                kind: "message",
                T: () => s.D5,
            },
            {
                no: 3,
                name: "tag",
                kind: "message",
                T: () => s.Gm,
            },
            {
                no: 4,
                name: "badge",
                kind: "message",
                T: () => s.Gm,
            },
        ]);
    }
}
let R = new N();
class P extends o.C {
    create(e) {
        let t = { applicationId: "0" };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.restrictionExpiry = l.E.internalBinaryRead(e, e.uint32(), n, a.restrictionExpiry);
                    break;
                case 2:
                    a.applicationId = e.fixed64().toString();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.restrictionExpiry &&
            l.E.internalBinaryWrite(e.restrictionExpiry, t.tag(1, r.TD.LengthDelimited).fork(), n).join(),
            "0" !== e.applicationId && t.tag(2, r.TD.Bit64).fixed64(e.applicationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.CrossPlatformRestriction", [
            {
                no: 1,
                name: "restriction_expiry",
                kind: "message",
                T: () => l.E,
            },
            {
                no: 2,
                name: "application_id",
                kind: "scalar",
                T: 6,
            },
        ]);
    }
}
let D = new P();
class w extends o.C {
    create(e) {
        let t = {
            linkedUsers: {},
            safetyFeatureLimits: {},
            safetyFlags: {},
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
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
                    a.quest = V.internalBinaryRead(e, e.uint32(), n, a.quest);
                    break;
                case 5:
                    a.primaryGuild = R.internalBinaryRead(e, e.uint32(), n, a.primaryGuild);
                    break;
                case 6:
                    a.crossPlatformRestriction = D.internalBinaryRead(e, e.uint32(), n, a.crossPlatformRestriction);
                    break;
                case 7:
                    a.collectibles = C.internalBinaryRead(e, e.uint32(), n, a.collectibles);
                    break;
                case 8:
                    a.safetyState = et.internalBinaryRead(e, e.uint32(), n, a.safetyState);
                    break;
                case 9:
                    a.premiumState = er.internalBinaryRead(e, e.uint32(), n, a.premiumState);
                    break;
                case 10:
                    a.displayNameStyles = S.internalBinaryRead(e, e.uint32(), n, a.displayNameStyles);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    o = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.linked_users",
                    );
            }
        }
        e[null != a ? a : "0"] = null != o ? o : L.create();
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.uint32();
                    break;
                case 2:
                    o = U.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits",
                    );
            }
        }
        e[null != a ? a : 0] = null != o ? o : U.create();
    }
    binaryReadMap3(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.uint32();
                    break;
                case 2:
                    o = B.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.UserData.safety_flags",
                    );
            }
        }
        e[null != a ? a : 0] = null != o ? o : B.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.linkedUsers))
            t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.Bit64).fixed64(i),
                t.tag(2, r.TD.LengthDelimited).fork(),
                L.internalBinaryWrite(e.linkedUsers[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.safetyFeatureLimits))
            t.tag(2, r.TD.LengthDelimited).fork().tag(1, r.TD.Varint).uint32(parseInt(i)),
                t.tag(2, r.TD.LengthDelimited).fork(),
                U.internalBinaryWrite(e.safetyFeatureLimits[i], t, n),
                t.join().join();
        for (let i of Object.keys(e.safetyFlags))
            t.tag(3, r.TD.LengthDelimited).fork().tag(1, r.TD.Varint).uint32(parseInt(i)),
                t.tag(2, r.TD.LengthDelimited).fork(),
                B.internalBinaryWrite(e.safetyFlags[i], t, n),
                t.join().join();
        e.quest && V.internalBinaryWrite(e.quest, t.tag(4, r.TD.LengthDelimited).fork(), n).join(),
            e.primaryGuild && R.internalBinaryWrite(e.primaryGuild, t.tag(5, r.TD.LengthDelimited).fork(), n).join(),
            e.crossPlatformRestriction &&
                D.internalBinaryWrite(e.crossPlatformRestriction, t.tag(6, r.TD.LengthDelimited).fork(), n).join(),
            e.collectibles && C.internalBinaryWrite(e.collectibles, t.tag(7, r.TD.LengthDelimited).fork(), n).join(),
            e.safetyState && et.internalBinaryWrite(e.safetyState, t.tag(8, r.TD.LengthDelimited).fork(), n).join(),
            e.premiumState && er.internalBinaryWrite(e.premiumState, t.tag(9, r.TD.LengthDelimited).fork(), n).join(),
            e.displayNameStyles &&
                S.internalBinaryWrite(e.displayNameStyles, t.tag(10, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.UserData", [
            {
                no: 1,
                name: "linked_users",
                kind: "map",
                K: 6,
                V: {
                    kind: "message",
                    T: () => L,
                },
            },
            {
                no: 2,
                name: "safety_feature_limits",
                kind: "map",
                K: 13,
                V: {
                    kind: "message",
                    T: () => U,
                },
            },
            {
                no: 3,
                name: "safety_flags",
                kind: "map",
                K: 13,
                V: {
                    kind: "message",
                    T: () => B,
                },
            },
            {
                no: 4,
                name: "quest",
                kind: "message",
                T: () => V,
            },
            {
                no: 5,
                name: "primary_guild",
                kind: "message",
                T: () => R,
            },
            {
                no: 6,
                name: "cross_platform_restriction",
                kind: "message",
                T: () => D,
            },
            {
                no: 7,
                name: "collectibles",
                kind: "message",
                T: () => C,
            },
            {
                no: 8,
                name: "safety_state",
                kind: "message",
                T: () => et,
            },
            {
                no: 9,
                name: "premium_state",
                kind: "message",
                T: () => er,
            },
            {
                no: 10,
                name: "display_name_styles",
                kind: "message",
                T: () => S,
            },
        ]);
    }
}
new w();
class x extends o.C {
    create(e) {
        let t = {
            userId: "0",
            linkType: 0,
            linkStatus: 0,
            requestorId: "0",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
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
                    a.createdAt = l.E.internalBinaryRead(e, e.uint32(), n, a.createdAt);
                    break;
                case 6:
                    a.updatedAt = l.E.internalBinaryRead(e, e.uint32(), n, a.updatedAt);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.userId && t.tag(1, r.TD.Bit64).fixed64(e.userId),
            0 !== e.linkType && t.tag(2, r.TD.Varint).int32(e.linkType),
            0 !== e.linkStatus && t.tag(3, r.TD.Varint).int32(e.linkStatus),
            "0" !== e.requestorId && t.tag(4, r.TD.Bit64).fixed64(e.requestorId),
            e.createdAt && l.E.internalBinaryWrite(e.createdAt, t.tag(5, r.TD.LengthDelimited).fork(), n).join(),
            e.updatedAt && l.E.internalBinaryWrite(e.updatedAt, t.tag(6, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.LinkedUser", [
            {
                no: 1,
                name: "user_id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 2,
                name: "link_type",
                kind: "enum",
                T: () => ["discord_protos.users.v1.UserLinkType", d],
            },
            {
                no: 3,
                name: "link_status",
                kind: "enum",
                T: () => ["discord_protos.users.v1.UserLinkStatus", f],
            },
            {
                no: 4,
                name: "requestor_id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 5,
                name: "created_at",
                kind: "message",
                T: () => l.E,
            },
            {
                no: 6,
                name: "updated_at",
                kind: "message",
                T: () => l.E,
            },
        ]);
    }
}
let L = new x();
class M extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.limitExpiry = l.E.internalBinaryRead(e, e.uint32(), n, a.limitExpiry);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.limitExpiry && l.E.internalBinaryWrite(e.limitExpiry, t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.RateLimitData", [
            {
                no: 1,
                name: "limit_expiry",
                kind: "message",
                T: () => l.E,
            },
        ]);
    }
}
let j = new M();
class k extends o.C {
    create(e) {
        let t = { map: {} };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.map, e, n);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            o;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.uint32();
                    break;
                case 2:
                    o = j.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.users.v1.FeatureLimits.map",
                    );
            }
        }
        e[null != a ? a : 0] = null != o ? o : j.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.map))
            t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.Varint).uint32(parseInt(i)),
                t.tag(2, r.TD.LengthDelimited).fork(),
                j.internalBinaryWrite(e.map[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.FeatureLimits", [
            {
                no: 1,
                name: "map",
                kind: "map",
                K: 13,
                V: {
                    kind: "message",
                    T: () => j,
                },
            },
        ]);
    }
}
let U = new k();
class G extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.flagExpiry = l.E.internalBinaryRead(e, e.uint32(), n, a.flagExpiry);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.flagExpiry && l.E.internalBinaryWrite(e.flagExpiry, t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.SafetyFlag", [
            {
                no: 1,
                name: "flag_expiry",
                kind: "message",
                T: () => l.E,
            },
        ]);
    }
}
let B = new G();
class Z extends o.C {
    create(e) {
        let t = { shards: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) a.shards.push(e.int32());
                else a.shards.push(e.int32());
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (e.shards.length) {
            t.tag(1, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.shards.length; n++) t.int32(e.shards[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.GuildShardingConfig", [
            {
                no: 1,
                name: "shards",
                kind: "scalar",
                repeat: 1,
                T: 5,
            },
        ]);
    }
}
new Z();
class F extends o.C {
    create(e) {
        let t = { questsCompleted: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.questsCompleted = e.uint32();
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.questsCompleted && t.tag(1, r.TD.Varint).uint32(e.questsCompleted);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.QuestMetadata", [
            {
                no: 1,
                name: "quests_completed",
                kind: "scalar",
                T: 13,
            },
        ]);
    }
}
let V = new F();
class H extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        return null != r ? r : this.create();
    }
    internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.NormalState", []);
    }
}
let Y = new H();
class W extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.restrictedUntil = l.E.internalBinaryRead(e, e.uint32(), n, a.restrictedUntil);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.restrictedUntil &&
            l.E.internalBinaryWrite(e.restrictedUntil, t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.RestrictedState", [
            {
                no: 1,
                name: "restricted_until",
                kind: "message",
                T: () => l.E,
            },
        ]);
    }
}
let K = new W();
class z extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.actionDeferredUntil = l.E.internalBinaryRead(e, e.uint32(), n, a.actionDeferredUntil);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.actionDeferredUntil &&
            l.E.internalBinaryWrite(e.actionDeferredUntil, t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.DeferredActionState", [
            {
                no: 1,
                name: "action_deferred_until",
                kind: "message",
                T: () => l.E,
            },
        ]);
    }
}
let q = new z();
class X extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.bannedUntil = l.E.internalBinaryRead(e, e.uint32(), n, a.bannedUntil);
            else {
                let o = n.readUnknownField;
                if ("throw" === o)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                    );
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.bannedUntil && l.E.internalBinaryWrite(e.bannedUntil, t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.TempBannedState", [
            {
                no: 1,
                name: "banned_until",
                kind: "message",
                T: () => l.E,
            },
        ]);
    }
}
let Q = new X();
class J extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        return null != r ? r : this.create();
    }
    internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.BannedState", []);
    }
}
let $ = new J();
class ee extends o.C {
    create(e) {
        let t = {
            state: { oneofKind: void 0 },
            reason: 0,
            annotations: [],
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 101:
                    a.state = {
                        oneofKind: "normal",
                        normal: Y.internalBinaryRead(e, e.uint32(), n, a.state.normal),
                    };
                    break;
                case 102:
                    a.state = {
                        oneofKind: "restricted",
                        restricted: K.internalBinaryRead(e, e.uint32(), n, a.state.restricted),
                    };
                    break;
                case 103:
                    a.state = {
                        oneofKind: "deferredAction",
                        deferredAction: q.internalBinaryRead(e, e.uint32(), n, a.state.deferredAction),
                    };
                    break;
                case 104:
                    a.state = {
                        oneofKind: "tempBanned",
                        tempBanned: Q.internalBinaryRead(e, e.uint32(), n, a.state.tempBanned),
                    };
                    break;
                case 105:
                    a.state = {
                        oneofKind: "banned",
                        banned: $.internalBinaryRead(e, e.uint32(), n, a.state.banned),
                    };
                    break;
                case 1:
                    a.reason = e.int32();
                    break;
                case 2:
                    if (i === r.TD.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.annotations.push(e.int32());
                    else a.annotations.push(e.int32());
                    break;
                case 3:
                    a.lastMutationId = s.wA.internalBinaryRead(e, e.uint32(), n, a.lastMutationId);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("normal" === e.state.oneofKind &&
                Y.internalBinaryWrite(e.state.normal, t.tag(101, r.TD.LengthDelimited).fork(), n).join(),
            "restricted" === e.state.oneofKind &&
                K.internalBinaryWrite(e.state.restricted, t.tag(102, r.TD.LengthDelimited).fork(), n).join(),
            "deferredAction" === e.state.oneofKind &&
                q.internalBinaryWrite(e.state.deferredAction, t.tag(103, r.TD.LengthDelimited).fork(), n).join(),
            "tempBanned" === e.state.oneofKind &&
                Q.internalBinaryWrite(e.state.tempBanned, t.tag(104, r.TD.LengthDelimited).fork(), n).join(),
            "banned" === e.state.oneofKind &&
                $.internalBinaryWrite(e.state.banned, t.tag(105, r.TD.LengthDelimited).fork(), n).join(),
            0 !== e.reason && t.tag(1, r.TD.Varint).int32(e.reason),
            e.annotations.length)
        ) {
            t.tag(2, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.annotations.length; n++) t.int32(e.annotations[n]);
            t.join();
        }
        e.lastMutationId && s.wA.internalBinaryWrite(e.lastMutationId, t.tag(3, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.SafetyState", [
            {
                no: 101,
                name: "normal",
                kind: "message",
                oneof: "state",
                T: () => Y,
            },
            {
                no: 102,
                name: "restricted",
                kind: "message",
                oneof: "state",
                T: () => K,
            },
            {
                no: 103,
                name: "deferred_action",
                kind: "message",
                oneof: "state",
                T: () => q,
            },
            {
                no: 104,
                name: "temp_banned",
                kind: "message",
                oneof: "state",
                T: () => Q,
            },
            {
                no: 105,
                name: "banned",
                kind: "message",
                oneof: "state",
                T: () => $,
            },
            {
                no: 1,
                name: "reason",
                kind: "enum",
                T: () => ["discord_protos.users.v1.SafetyStateReason", _],
            },
            {
                no: 2,
                name: "annotations",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.users.v1.SafetyAnnotations", p],
            },
            {
                no: 3,
                name: "last_mutation_id",
                kind: "message",
                T: () => s.wA,
            },
        ]);
    }
}
let et = new ee();
class en extends o.C {
    create(e) {
        let t = {
            premiumSource: 0,
            premiumSubscriptionType: 0,
            premiumSubscriptionGroupRole: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
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
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.premiumSource && t.tag(1, r.TD.Varint).int32(e.premiumSource),
            0 !== e.premiumSubscriptionType && t.tag(2, r.TD.Varint).int32(e.premiumSubscriptionType),
            0 !== e.premiumSubscriptionGroupRole && t.tag(3, r.TD.Varint).int32(e.premiumSubscriptionGroupRole);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.users.v1.PremiumState", [
            {
                no: 1,
                name: "premium_source",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSource", h, "PREMIUM_SOURCE_"],
            },
            {
                no: 2,
                name: "premium_subscription_type",
                kind: "enum",
                T: () => ["discord_protos.users.v1.PremiumSubscriptionType", m, "PREMIUM_SUBSCRIPTION_TYPE_"],
            },
            {
                no: 3,
                name: "premium_subscription_group_role",
                kind: "enum",
                T: () => [
                    "discord_protos.users.v1.PremiumSubscriptionGroupRole",
                    g,
                    "PREMIUM_SUBSCRIPTION_GROUP_ROLE_",
                ],
            },
        ]);
    }
}
let er = new en();
