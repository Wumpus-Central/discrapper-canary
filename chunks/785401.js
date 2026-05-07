"use strict";
n.d(t, { Um: () => eJ, FZ: () => e6 }), n(321073);
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
    h = n(852015),
    p = n(144367),
    E = n(428420),
    m = n(535384),
    g = n(406935),
    A =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EXCLUDE = 1)] = "EXCLUDE"),
        (i[(i.OVERRIDE = 2)] = "OVERRIDE"),
        (i[(i.REQUIRE = 3)] = "REQUIRE"),
        (i[(i.ASSIGNMENT = 4)] = "ASSIGNMENT"),
        i),
    I = (((r = {})[(r.REGULAR = 0)] = "REGULAR"), (r[(r.HOLDOUT = 1)] = "HOLDOUT"), r);
class T extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", A] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => v },
            { no: 3, name: "override", kind: "message", T: () => y },
            { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", I],
            },
            { no: 6, name: "hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { type: 0, filters: [], isSunsetRule: !1, subtype: 0, hash: "" };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.type = e.int32();
                    break;
                case 2:
                    r.filters.push(v.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    r.override = y.internalBinaryRead(e, e.uint32(), n, r.override);
                    break;
                case 4:
                    r.isSunsetRule = e.bool();
                    break;
                case 5:
                    r.subtype = e.int32();
                    break;
                case 6:
                    r.hash = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, h.O0.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++)
            v.internalBinaryWrite(e.filters[i], t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        e.override && y.internalBinaryWrite(e.override, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isSunsetRule && t.tag(4, h.O0.Varint).bool(e.isSunsetRule),
            0 !== e.subtype && t.tag(5, h.O0.Varint).int32(e.subtype),
            "" !== e.hash && t.tag(6, h.O0.LengthDelimited).string(e.hash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let S = new T();
class N extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Override", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { variationId: 0 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.variationId = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, h.O0.Varint).int32(e.variationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let y = new N();
class C extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => ec },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => ee },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => R },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => D },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => w },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => U },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => V },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => Z },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => P },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => eS },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => ey },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eR },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => eD },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => ew },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => eP },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => eU },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => G },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => eG },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => eV },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => eH },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => eY },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => eK },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => e$ },
            { no: 27, name: "user_location", kind: "message", oneof: "filter", T: () => $ },
            { no: 28, name: "user_ip", kind: "message", oneof: "filter", T: () => Q },
            { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: () => eZ },
        ]);
    }
    create(e) {
        let t = { filter: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.filter = {
                        oneofKind: "clientVersion",
                        clientVersion: ec.internalBinaryRead(e, e.uint32(), n, r.filter.clientVersion),
                    };
                    break;
                case 3:
                    r.filter = {
                        oneofKind: "clientOs",
                        clientOs: ee.internalBinaryRead(e, e.uint32(), n, r.filter.clientOs),
                    };
                    break;
                case 4:
                    r.filter = { oneofKind: "staff", staff: R.internalBinaryRead(e, e.uint32(), n, r.filter.staff) };
                    break;
                case 5:
                    r.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: D.internalBinaryRead(e, e.uint32(), n, r.filter.userInGuild),
                    };
                    break;
                case 6:
                    r.filter = {
                        oneofKind: "userIds",
                        userIds: w.internalBinaryRead(e, e.uint32(), n, r.filter.userIds),
                    };
                    break;
                case 7:
                    r.filter = {
                        oneofKind: "clientLocale",
                        clientLocale: U.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocale),
                    };
                    break;
                case 8:
                    r.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: V.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocation),
                    };
                    break;
                case 9:
                    r.filter = {
                        oneofKind: "clientIp",
                        clientIp: Z.internalBinaryRead(e, e.uint32(), n, r.filter.clientIp),
                    };
                    break;
                case 10:
                    r.filter = {
                        oneofKind: "userLocale",
                        userLocale: P.internalBinaryRead(e, e.uint32(), n, r.filter.userLocale),
                    };
                    break;
                case 11:
                    r.filter = { oneofKind: "bot", bot: eS.internalBinaryRead(e, e.uint32(), n, r.filter.bot) };
                    break;
                case 12:
                    r.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: ey.internalBinaryRead(e, e.uint32(), n, r.filter.userAgeRange),
                    };
                    break;
                case 13:
                    r.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eR.internalBinaryRead(e, e.uint32(), n, r.filter.userIdRange),
                    };
                    break;
                case 14:
                    r.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: eD.internalBinaryRead(e, e.uint32(), n, r.filter.userHasFlag),
                    };
                    break;
                case 15:
                    r.filter = {
                        oneofKind: "unitIdInRangeByHash",
                        unitIdInRangeByHash: ew.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInRangeByHash),
                    };
                    break;
                case 16:
                    r.filter = {
                        oneofKind: "clientReleaseChannel",
                        clientReleaseChannel: eP.internalBinaryRead(e, e.uint32(), n, r.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    r.filter = {
                        oneofKind: "always",
                        always: eU.internalBinaryRead(e, e.uint32(), n, r.filter.always),
                    };
                    break;
                case 18:
                    r.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: G.internalBinaryRead(e, e.uint32(), n, r.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    r.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: eG.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    r.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: eV.internalBinaryRead(e, e.uint32(), n, r.filter.userPremiumType),
                    };
                    break;
                case 21:
                    r.filter = {
                        oneofKind: "unitIdMatchesFilterSnapshot",
                        unitIdMatchesFilterSnapshot: eH.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.filter.unitIdMatchesFilterSnapshot,
                        ),
                    };
                    break;
                case 22:
                    r.filter = {
                        oneofKind: "guildIds",
                        guildIds: eY.internalBinaryRead(e, e.uint32(), n, r.filter.guildIds),
                    };
                    break;
                case 25:
                    r.filter = {
                        oneofKind: "guildMemberCountRange",
                        guildMemberCountRange: eK.internalBinaryRead(e, e.uint32(), n, r.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    r.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: e$.internalBinaryRead(e, e.uint32(), n, r.filter.guildHasFeature),
                    };
                    break;
                case 27:
                    r.filter = {
                        oneofKind: "userLocation",
                        userLocation: $.internalBinaryRead(e, e.uint32(), n, r.filter.userLocation),
                    };
                    break;
                case 28:
                    r.filter = { oneofKind: "userIp", userIp: Q.internalBinaryRead(e, e.uint32(), n, r.filter.userIp) };
                    break;
                case 29:
                    r.filter = {
                        oneofKind: "installationIds",
                        installationIds: eZ.internalBinaryRead(e, e.uint32(), n, r.filter.installationIds),
                    };
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "clientVersion" === e.filter.oneofKind &&
            ec.internalBinaryWrite(e.filter.clientVersion, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                ee.internalBinaryWrite(e.filter.clientOs, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                R.internalBinaryWrite(e.filter.staff, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                D.internalBinaryWrite(e.filter.userInGuild, t.tag(5, h.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                w.internalBinaryWrite(e.filter.userIds, t.tag(6, h.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                U.internalBinaryWrite(e.filter.clientLocale, t.tag(7, h.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                V.internalBinaryWrite(e.filter.clientLocation, t.tag(8, h.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                Z.internalBinaryWrite(e.filter.clientIp, t.tag(9, h.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                P.internalBinaryWrite(e.filter.userLocale, t.tag(10, h.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                eS.internalBinaryWrite(e.filter.bot, t.tag(11, h.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                ey.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, h.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eR.internalBinaryWrite(e.filter.userIdRange, t.tag(13, h.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                eD.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, h.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                ew.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, h.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                eP.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, h.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                eU.internalBinaryWrite(e.filter.always, t.tag(17, h.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                G.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, h.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                eG.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, h.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                eV.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, h.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                eH
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, h.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                eY.internalBinaryWrite(e.filter.guildIds, t.tag(22, h.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                eK
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, h.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                e$.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, h.O0.LengthDelimited).fork(), n).join(),
            "userLocation" === e.filter.oneofKind &&
                $.internalBinaryWrite(e.filter.userLocation, t.tag(27, h.O0.LengthDelimited).fork(), n).join(),
            "userIp" === e.filter.oneofKind &&
                Q.internalBinaryWrite(e.filter.userIp, t.tag(28, h.O0.LengthDelimited).fork(), n).join(),
            "installationIds" === e.filter.oneofKind &&
                eZ.internalBinaryWrite(e.filter.installationIds, t.tag(29, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let v = new C();
class O extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.StaffUsers",
            [
                { no: 1, name: "work_accounts", kind: "scalar", T: 8 },
                { no: 2, name: "personal_accounts", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { workAccounts: !1, personalAccounts: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.workAccounts = e.bool();
                    break;
                case 2:
                    r.personalAccounts = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.workAccounts && t.tag(1, h.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, h.O0.Varint).bool(e.personalAccounts);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let R = new O();
class b extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserInGuild",
            [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === h.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let D = new b();
class L extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIds",
            [{ no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { userIds: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === h.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.userIds.push(e.fixed64().toString());
                else r.userIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let w = new L();
class M extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocale",
            [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locales: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new M();
class x extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocale",
            [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locales: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let U = new x();
class k extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientSystemLocale",
            [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locales: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let G = new k();
class F extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => K }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locations: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locations.push(K.internalBinaryRead(e, e.uint32(), n));
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            K.internalBinaryWrite(e.locations[i], t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let V = new F();
class B extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Place", [
            { no: 1, name: "city", kind: "scalar", T: 9 },
            { no: 2, name: "subdivision", kind: "scalar", T: 9 },
            { no: 3, name: "country", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { city: "", subdivision: "", country: "" };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.city = e.string();
                    break;
                case 2:
                    r.subdivision = e.string();
                    break;
                case 3:
                    r.country = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.city && t.tag(1, h.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, h.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, h.O0.LengthDelimited).string(e.country);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let H = new B();
class j extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [
            { no: 1, name: "iso_country", kind: "scalar", T: 9 },
            { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { isoCountry: "", isoSubdivision: "" };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.isoCountry = e.string();
                    break;
                case 2:
                    r.isoSubdivision = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.isoCountry && t.tag(1, h.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, h.O0.LengthDelimited).string(e.isoSubdivision);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Y = new j();
class W extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => Y },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => H },
        ]);
    }
    create(e) {
        let t = { location: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.location = {
                        oneofKind: "isoRegion",
                        isoRegion: Y.internalBinaryRead(e, e.uint32(), n, r.location.isoRegion),
                    };
                    break;
                case 2:
                    r.location = { oneofKind: "isEu", isEu: e.bool() };
                    break;
                case 3:
                    r.location = {
                        oneofKind: "place",
                        place: H.internalBinaryRead(e, e.uint32(), n, r.location.place),
                    };
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "isoRegion" === e.location.oneofKind &&
            Y.internalBinaryWrite(e.location.isoRegion, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, h.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                H.internalBinaryWrite(e.location.place, t.tag(3, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let K = new W();
class z extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocation",
            [
                { no: 1, name: "locations", kind: "message", repeat: 1, T: () => K },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locations: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.locations.push(K.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            K.internalBinaryWrite(e.locations[i], t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        !1 !== e.preferClientIp && t.tag(2, h.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let $ = new z();
class q extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientIP",
            [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { blocks: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.blocks.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Z = new q();
class X extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIP",
            [
                { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { blocks: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.blocks.push(e.string());
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.blocks[n]);
        !1 !== e.preferClientIp && t.tag(2, h.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new X();
class J extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => en },
                { no: 2, name: "android_version", kind: "message", T: () => en },
                { no: 3, name: "macos_version", kind: "message", T: () => en },
                { no: 4, name: "windows_version", kind: "message", T: () => en },
                { no: 5, name: "playstation_version", kind: "message", T: () => en },
                { no: 6, name: "xbox_version", kind: "message", T: () => en },
                { no: 7, name: "linux_version", kind: "message", T: () => en },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.iosVersion = en.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = en.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.macosVersion = en.internalBinaryRead(e, e.uint32(), n, r.macosVersion);
                    break;
                case 4:
                    r.windowsVersion = en.internalBinaryRead(e, e.uint32(), n, r.windowsVersion);
                    break;
                case 5:
                    r.playstationVersion = en.internalBinaryRead(e, e.uint32(), n, r.playstationVersion);
                    break;
                case 6:
                    r.xboxVersion = en.internalBinaryRead(e, e.uint32(), n, r.xboxVersion);
                    break;
                case 7:
                    r.linuxVersion = en.internalBinaryRead(e, e.uint32(), n, r.linuxVersion);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && en.internalBinaryWrite(e.iosVersion, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                en.internalBinaryWrite(e.androidVersion, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && en.internalBinaryWrite(e.macosVersion, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                en.internalBinaryWrite(e.windowsVersion, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                en.internalBinaryWrite(e.playstationVersion, t.tag(5, h.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && en.internalBinaryWrite(e.xboxVersion, t.tag(6, h.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && en.internalBinaryWrite(e.linuxVersion, t.tag(7, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ee = new J();
class et extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => er },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.ranges.push(er.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            er.internalBinaryWrite(e.ranges[i], t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, h.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let en = new et();
class ei extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => ea },
            { no: 2, name: "upper_bound", kind: "message", T: () => ea },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.lowerBound = ea.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = ea.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && ea.internalBinaryWrite(e.lowerBound, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && ea.internalBinaryWrite(e.upperBound, t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let er = new ei();
class es extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => el },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.version = el.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && el.internalBinaryWrite(e.version, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, h.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ea = new es();
class eo extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [
            { no: 1, name: "version", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { version: 0 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.version = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, h.O0.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let el = new eo();
class eu extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => e_ },
                { no: 2, name: "android_version", kind: "message", T: () => e_ },
                { no: 3, name: "web_version", kind: "message", T: () => e_ },
                { no: 4, name: "native_version", kind: "message", T: () => e_ },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => eI },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { allowNonNativeWeb: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.iosVersion = e_.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = e_.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.webVersion = e_.internalBinaryRead(e, e.uint32(), n, r.webVersion);
                    break;
                case 4:
                    r.nativeVersion = e_.internalBinaryRead(e, e.uint32(), n, r.nativeVersion);
                    break;
                case 6:
                    r.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    r.clientRequiredChanges = eI.internalBinaryRead(e, e.uint32(), n, r.clientRequiredChanges);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && e_.internalBinaryWrite(e.iosVersion, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                e_.internalBinaryWrite(e.androidVersion, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && e_.internalBinaryWrite(e.webVersion, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && e_.internalBinaryWrite(e.nativeVersion, t.tag(4, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, h.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                eI.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ec = new eu();
class ed extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => eh },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.ranges.push(eh.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            eh.internalBinaryWrite(e.ranges[i], t.tag(1, h.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, h.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e_ = new ed();
class ef extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => eE },
            { no: 2, name: "upper_bound", kind: "message", T: () => eE },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.lowerBound = eE.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = eE.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && eE.internalBinaryWrite(e.lowerBound, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && eE.internalBinaryWrite(e.upperBound, t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eh = new ef();
class ep extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eg },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.version = eg.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && eg.internalBinaryWrite(e.version, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, h.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eE = new ep();
class em extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [
            { no: 1, name: "major", kind: "scalar", T: 13 },
            { no: 2, name: "minor", kind: "message", T: () => g.ZQ },
            { no: 3, name: "build", kind: "message", T: () => g.ol },
        ]);
    }
    create(e) {
        let t = { major: 0 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.major = e.uint32();
                    break;
                case 2:
                    r.minor = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.minor);
                    break;
                case 3:
                    r.build = g.ol.internalBinaryRead(e, e.uint32(), n, r.build);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.major && t.tag(1, h.O0.Varint).uint32(e.major),
            e.minor && g.ZQ.internalBinaryWrite(e.minor, t.tag(2, h.O0.LengthDelimited).fork(), n).join(),
            e.build && g.ol.internalBinaryWrite(e.build, t.tag(3, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eg = new em();
class eA extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [
            { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { commitHashes: [], prNumbers: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.commitHashes.push(e.string());
                    break;
                case 2:
                    if (i === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.prNumbers.push(e.int32());
                    else r.prNumbers.push(e.int32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eI = new eA();
class eT extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIsBot",
            [{ no: 1, name: "is_bot", kind: "scalar", T: 8 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { isBot: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.isBot = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, h.O0.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eS = new eT();
class eN extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserAgeRange",
            [
                { no: 1, name: "min_age_years", kind: "message", T: () => g.ZQ },
                { no: 2, name: "max_age_years", kind: "message", T: () => g.ZQ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minAgeYears = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.minAgeYears);
                    break;
                case 2:
                    r.maxAgeYears = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxAgeYears);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minAgeYears && g.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && g.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ey = new eN();
class eC extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Fixed64Value", [
            { no: 1, name: "value", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.fixed64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, h.O0.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ev = new eC();
class eO extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => ev },
                { no: 2, name: "max_id", kind: "message", T: () => ev },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minId = ev.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = ev.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && ev.internalBinaryWrite(e.minId, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.maxId && ev.internalBinaryWrite(e.maxId, t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eR = new eO();
class eb extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserHasFlag",
            [{ no: 1, name: "mask", kind: "scalar", T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { mask: "0" };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.mask = e.fixed64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.mask && t.tag(1, h.O0.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eD = new eb();
class eL extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdInRangeByHash",
            [
                { no: 1, name: "hash_key", kind: "scalar", T: 9 },
                { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 },
                { no: 3, name: "start_ring_position", kind: "scalar", T: 13 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
        );
    }
    create(e) {
        let t = { hashKey: "", stopRingPosition: 0, startRingPosition: 0 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.hashKey = e.string();
                    break;
                case 2:
                    r.stopRingPosition = e.uint32();
                    break;
                case 3:
                    r.startRingPosition = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.hashKey && t.tag(1, h.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, h.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, h.O0.Varint).uint32(e.startRingPosition);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ew = new eL();
class eM extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientReleaseChannel",
            [{ no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { releaseChannels: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.releaseChannels.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eP = new eM();
class ex extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Always", [{ no: 1, name: "value", kind: "scalar", T: 8 }], {
            "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        });
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, h.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eU = new ex();
class ek extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdInExperiment",
            [
                { no: 1, name: "experiment_id", kind: "scalar", T: 6 },
                { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
        );
    }
    create(e) {
        let t = { experimentId: "0", variationIds: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.experimentId = e.fixed64().toString();
                    break;
                case 2:
                    if (i === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.variationIds.push(e.int32());
                    else r.variationIds.push(e.int32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (("0" !== e.experimentId && t.tag(1, h.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eG = new ek();
class eF extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserPremiumType",
            [{ no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { premiumTypes: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === h.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.premiumTypes.push(e.int32());
                else r.premiumTypes.push(e.int32());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.premiumTypes.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eV = new eF();
class eB extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot",
            [
                { no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 },
                { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
        );
    }
    create(e) {
        let t = { filterSnapshotName: "", targetFilterValues: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.filterSnapshotName = e.string();
                    break;
                case 2:
                    if (i === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.targetFilterValues.push(e.fixed64().toString());
                    else r.targetFilterValues.push(e.fixed64().toString());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.filterSnapshotName && t.tag(1, h.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eH = new eB();
class ej extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIds",
            [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
            },
        );
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === h.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eY = new ej();
class eW extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
            [
                { no: 1, name: "min_count", kind: "message", T: () => g.ZQ },
                { no: 2, name: "max_count", kind: "message", T: () => g.ZQ },
            ],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
            },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minCount = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.minCount);
                    break;
                case 2:
                    r.maxCount = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxCount);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minCount && g.ZQ.internalBinaryWrite(e.minCount, t.tag(1, h.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && g.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eK = new eW();
class ez extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildHasFeature",
            [{ no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 }],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
            },
        );
    }
    create(e) {
        let t = { features: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.features.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.features.length; n++) t.tag(1, h.O0.LengthDelimited).string(e.features[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e$ = new ez();
class eq extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.InstallationIds",
            [{ no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { installationIds: [] };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === h.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.installationIds.push(e.fixed64().toString());
                else r.installationIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.installationIds.length) {
            t.tag(1, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.installationIds.length; n++) t.fixed64(e.installationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eZ = new eq();
var eX = n(335871),
    eQ =
        (((s = {})[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.USER = 1)] = "USER"),
        (s[(s.INSTALLATION = 2)] = "INSTALLATION"),
        (s[(s.GUILD = 3)] = "GUILD"),
        (s[(s.CUSTOM = 4)] = "CUSTOM"),
        s),
    eJ =
        (((a = {})[(a.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
        (a[(a.API = 1)] = "API"),
        (a[(a.APP = 2)] = "APP"),
        (a[(a.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
        (a[(a.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
        (a[(a.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
        (a[(a.AV_WORKER = 6)] = "AV_WORKER"),
        (a[(a.SEO = 7)] = "SEO"),
        a),
    e0 = (((o = {})[(o.ENABLED = 0)] = "ENABLED"), (o[(o.DISABLED = 1)] = "DISABLED"), o),
    e1 =
        (((l = {})[(l.FULL = 0)] = "FULL"),
        (l[(l.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
        (l[(l.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
        (l[(l.OFF = 5)] = "OFF"),
        l),
    e2 =
        (((u = {})[(u.DEFAULT = 0)] = "DEFAULT"),
        (u[(u.HOLDOUT = 1)] = "HOLDOUT"),
        (u[(u.NUMBERLINE = 2)] = "NUMBERLINE"),
        u),
    e3 =
        (((c = {})[(c.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
        (c[(c.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
        c),
    e6 =
        (((d = {})[(d.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (d[(d.CONTROL = 1)] = "CONTROL"),
        (d[(d.TREATMENT = 2)] = "TREATMENT"),
        (d[(d.OVERRIDE = 3)] = "OVERRIDE"),
        d),
    e4 =
        (((_ = {})[(_.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (_[(_.ACTIVE = 1)] = "ACTIVE"),
        (_[(_.UNUSED = 2)] = "UNUSED"),
        (_[(_.BURNED = 3)] = "BURNED"),
        (_[(_.PRESERVED = 4)] = "PRESERVED"),
        _),
    e5 =
        (((f = {})[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.DRAFT = 1)] = "DRAFT"),
        (f[(f.MEASUREMENT = 2)] = "MEASUREMENT"),
        (f[(f.ROLLING_OUT = 4)] = "ROLLING_OUT"),
        (f[(f.ARCHIVED = 6)] = "ARCHIVED"),
        (f[(f.AA_MODE = 7)] = "AA_MODE"),
        f);
class e7 extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => eX.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => eX.D },
            { no: 7, name: "editor_id", kind: "scalar", T: 6 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "description", kind: "scalar", T: 9 },
            { no: 10, name: "hypothesis", kind: "message", T: () => g.hU },
            { no: 11, name: "tech_spec_link", kind: "message", T: () => g.hU },
            { no: 12, name: "revision", kind: "scalar", T: 5 },
            { no: 13, name: "hash_key", kind: "scalar", T: 9 },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", eQ],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => e9 },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => S },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", e5] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", eJ],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", e0],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", e1],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", e2],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => ti },
            { no: 31, name: "expected_end_date", kind: "message", T: () => eX.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => eX.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => g.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", e3],
            },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
            { no: 39, name: "is_managed", kind: "scalar", T: 8 },
            { no: 41, name: "number_line_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = {
            id: "0",
            name: "",
            creatorId: "0",
            version: 0,
            editorId: "0",
            title: "",
            description: "",
            revision: 0,
            hashKey: "",
            unitType: 0,
            variations: [],
            rules: [],
            phase: 0,
            surfaces: [],
            owningTeamId: "",
            cachedNotificationChannelId: "0",
            exposureTracking: 0,
            assignmentMode: 0,
            enableEditRawJsonUi: !1,
            winningVariationId: 0,
            extraOutcomeContext: "",
            type: 0,
            isTemplate: !1,
            fieldNumbersToCopy: [],
            engineFeatureFlags: [],
            isAutomatedChange: !1,
            customUnitPrefix: 0,
            growthbookTags: [],
            allocateRightToLeft: !1,
            isManaged: !1,
            numberLineId: "0",
        };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.name = e.string();
                    break;
                case 3:
                    r.createdAt = eX.D.internalBinaryRead(e, e.uint32(), n, r.createdAt);
                    break;
                case 4:
                    r.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    r.version = e.int32();
                    break;
                case 6:
                    r.editedAt = eX.D.internalBinaryRead(e, e.uint32(), n, r.editedAt);
                    break;
                case 7:
                    r.editorId = e.fixed64().toString();
                    break;
                case 8:
                    r.title = e.string();
                    break;
                case 9:
                    r.description = e.string();
                    break;
                case 10:
                    r.hypothesis = g.hU.internalBinaryRead(e, e.uint32(), n, r.hypothesis);
                    break;
                case 11:
                    r.techSpecLink = g.hU.internalBinaryRead(e, e.uint32(), n, r.techSpecLink);
                    break;
                case 12:
                    r.revision = e.int32();
                    break;
                case 13:
                    r.hashKey = e.string();
                    break;
                case 14:
                    r.unitType = e.int32();
                    break;
                case 15:
                    r.variations.push(e9.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    r.rules.push(S.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    r.phase = e.int32();
                    break;
                case 19:
                    if (i === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.surfaces.push(e.int32());
                    else r.surfaces.push(e.int32());
                    break;
                case 20:
                    r.owningTeamId = e.string();
                    break;
                case 21:
                    r.cachedNotificationChannelId = e.fixed64().toString();
                    break;
                case 22:
                    r.exposureTracking = e.int32();
                    break;
                case 25:
                    r.assignmentMode = e.int32();
                    break;
                case 23:
                    r.enableEditRawJsonUi = e.bool();
                    break;
                case 24:
                    r.winningVariationId = e.int32();
                    break;
                case 34:
                    r.extraOutcomeContext = e.string();
                    break;
                case 26:
                    r.type = e.int32();
                    break;
                case 27:
                    r.isTemplate = e.bool();
                    break;
                case 28:
                    if (i === h.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.fieldNumbersToCopy.push(e.int32());
                    else r.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    r.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    r.debugConfig = ti.internalBinaryRead(e, e.uint32(), n, r.debugConfig);
                    break;
                case 31:
                    r.expectedEndDate = eX.D.internalBinaryRead(e, e.uint32(), n, r.expectedEndDate);
                    break;
                case 32:
                    r.isAutomatedChange = e.bool();
                    break;
                case 33:
                    r.archiveAt = eX.D.internalBinaryRead(e, e.uint32(), n, r.archiveAt);
                    break;
                case 35:
                    r.guildExperimentVersion = g.as.internalBinaryRead(e, e.uint32(), n, r.guildExperimentVersion);
                    break;
                case 36:
                    r.customUnitPrefix = e.int32();
                    break;
                case 37:
                    r.growthbookTags.push(e.string());
                    break;
                case 38:
                    r.allocateRightToLeft = e.bool();
                    break;
                case 39:
                    r.isManaged = e.bool();
                    break;
                case 41:
                    r.numberLineId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, h.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, h.O0.LengthDelimited).string(e.name),
            e.createdAt && eX.D.internalBinaryWrite(e.createdAt, t.tag(3, h.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, h.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, h.O0.Varint).int32(e.version),
            e.editedAt && eX.D.internalBinaryWrite(e.editedAt, t.tag(6, h.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, h.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, h.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, h.O0.LengthDelimited).string(e.description),
            e.hypothesis && g.hU.internalBinaryWrite(e.hypothesis, t.tag(10, h.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                g.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, h.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, h.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, h.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, h.O0.Varint).int32(e.unitType);
        for (let i = 0; i < e.variations.length; i++)
            e9.internalBinaryWrite(e.variations[i], t.tag(15, h.O0.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            S.internalBinaryWrite(e.rules[i], t.tag(16, h.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, h.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, h.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, h.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, h.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, h.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, h.O0.Varint).bool(e.enableEditRawJsonUi),
            0 !== e.winningVariationId && t.tag(24, h.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, h.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, h.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, h.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, h.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, h.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        e.debugConfig && ti.internalBinaryWrite(e.debugConfig, t.tag(30, h.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                eX.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, h.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, h.O0.Varint).bool(e.isAutomatedChange),
            e.archiveAt && eX.D.internalBinaryWrite(e.archiveAt, t.tag(33, h.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                g.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, h.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, h.O0.Varint).int32(e.customUnitPrefix);
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, h.O0.LengthDelimited).string(e.growthbookTags[n]);
        !1 !== e.allocateRightToLeft && t.tag(38, h.O0.Varint).bool(e.allocateRightToLeft),
            !1 !== e.isManaged && t.tag(39, h.O0.Varint).bool(e.isManaged),
            "0" !== e.numberLineId && t.tag(41, h.O0.Bit64).fixed64(e.numberLineId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new e7();
class e8 extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            { no: 1, name: "id", kind: "scalar", T: 5 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
            { no: 4, name: "buckets", kind: "message", repeat: 1, T: () => tt },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", e6],
            },
            { no: 6, name: "configuration", kind: "message", T: () => g.hU },
        ]);
    }
    create(e) {
        let t = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0 };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.id = e.int32();
                    break;
                case 2:
                    r.label = e.string();
                    break;
                case 3:
                    r.targetAllocation = e.int32();
                    break;
                case 4:
                    r.buckets.push(tt.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    r.type = e.int32();
                    break;
                case 6:
                    r.configuration = g.hU.internalBinaryRead(e, e.uint32(), n, r.configuration);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.id && t.tag(1, h.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, h.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, h.O0.Varint).int32(e.targetAllocation);
        for (let i = 0; i < e.buckets.length; i++)
            tt.internalBinaryWrite(e.buckets[i], t.tag(4, h.O0.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, h.O0.Varint).int32(e.type),
            e.configuration &&
                g.hU.internalBinaryWrite(e.configuration, t.tag(6, h.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e9 = new e8();
class te extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", e4],
            },
            { no: 4, name: "owning_experiment_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0, owningExperimentId: "0" };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.start = e.int32();
                    break;
                case 2:
                    r.stop = e.int32();
                    break;
                case 3:
                    r.type = e.int32();
                    break;
                case 4:
                    r.owningExperimentId = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.start && t.tag(1, h.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, h.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, h.O0.Varint).int32(e.type),
            "0" !== e.owningExperimentId && t.tag(4, h.O0.Bit64).fixed64(e.owningExperimentId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tt = new te();
class tn extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.DebugConfig", [
            { no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 },
            { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 },
            { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 },
            { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 },
            { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 },
            { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 },
        ]);
    }
    create(e) {
        let t = {
            enableDecisionLogging: !1,
            metricsSampleRate: 0,
            logContextOnFailure: !1,
            logRawHeaders: !1,
            tagFilterMetrics: !1,
            decisionLogSampleRate: 0,
        };
        return (
            globalThis.Object.defineProperty(t, E.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.enableDecisionLogging = e.bool();
                    break;
                case 2:
                    r.metricsSampleRate = e.double();
                    break;
                case 3:
                    r.logContextOnFailure = e.bool();
                    break;
                case 4:
                    r.logRawHeaders = e.bool();
                    break;
                case 5:
                    r.tagFilterMetrics = e.bool();
                    break;
                case 6:
                    r.decisionLogSampleRate = e.double();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? h.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.enableDecisionLogging && t.tag(1, h.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, h.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, h.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, h.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, h.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, h.O0.Bit64).double(e.decisionLogSampleRate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? h.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ti = new tn();
