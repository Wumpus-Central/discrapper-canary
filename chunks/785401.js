"use strict";
n.d(t, { Um: () => e6, FZ: () => te }), n(321073);
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
    h,
    f,
    p,
    E = n(852015),
    m = n(144367),
    g = n(428420),
    A = n(535384),
    I = n(406935),
    T =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EXCLUDE = 1)] = "EXCLUDE"),
        (i[(i.OVERRIDE = 2)] = "OVERRIDE"),
        (i[(i.REQUIRE = 3)] = "REQUIRE"),
        (i[(i.ASSIGNMENT = 4)] = "ASSIGNMENT"),
        i),
    S = (((r = {})[(r.REGULAR = 0)] = "REGULAR"), (r[(r.HOLDOUT = 1)] = "HOLDOUT"), r);
class y extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", T] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => O },
            { no: 3, name: "override", kind: "message", T: () => C },
            { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", S],
            },
            { no: 6, name: "hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { type: 0, filters: [], isSunsetRule: !1, subtype: 0, hash: "" };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.filters.push(O.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    r.override = C.internalBinaryRead(e, e.uint32(), n, r.override);
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, E.O0.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++)
            O.internalBinaryWrite(e.filters[i], t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        e.override && C.internalBinaryWrite(e.override, t.tag(3, E.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isSunsetRule && t.tag(4, E.O0.Varint).bool(e.isSunsetRule),
            0 !== e.subtype && t.tag(5, E.O0.Varint).int32(e.subtype),
            "" !== e.hash && t.tag(6, E.O0.LengthDelimited).string(e.hash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let N = new y();
class v extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Override", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { variationId: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, E.O0.Varint).int32(e.variationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let C = new v();
class R extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => e_ },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => en },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => D },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => w },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => P },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => G },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => H },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => Q },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => k },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => eN },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => eC },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eD },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => ew },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => eP },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => ek },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => eG },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => V },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => eV },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => eH },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => eY },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => eK },
            { no: 23, name: "guild_id_range", kind: "message", oneof: "filter", T: () => eX },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => ez },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => eQ },
            { no: 27, name: "user_location", kind: "message", oneof: "filter", T: () => X },
            { no: 28, name: "user_ip", kind: "message", oneof: "filter", T: () => ee },
            { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: () => e0 },
            { no: 30, name: "negate", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { filter: { oneofKind: void 0 }, negate: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                        clientVersion: e_.internalBinaryRead(e, e.uint32(), n, r.filter.clientVersion),
                    };
                    break;
                case 3:
                    r.filter = {
                        oneofKind: "clientOs",
                        clientOs: en.internalBinaryRead(e, e.uint32(), n, r.filter.clientOs),
                    };
                    break;
                case 4:
                    r.filter = { oneofKind: "staff", staff: D.internalBinaryRead(e, e.uint32(), n, r.filter.staff) };
                    break;
                case 5:
                    r.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: w.internalBinaryRead(e, e.uint32(), n, r.filter.userInGuild),
                    };
                    break;
                case 6:
                    r.filter = {
                        oneofKind: "userIds",
                        userIds: P.internalBinaryRead(e, e.uint32(), n, r.filter.userIds),
                    };
                    break;
                case 7:
                    r.filter = {
                        oneofKind: "clientLocale",
                        clientLocale: G.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocale),
                    };
                    break;
                case 8:
                    r.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: H.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocation),
                    };
                    break;
                case 9:
                    r.filter = {
                        oneofKind: "clientIp",
                        clientIp: Q.internalBinaryRead(e, e.uint32(), n, r.filter.clientIp),
                    };
                    break;
                case 10:
                    r.filter = {
                        oneofKind: "userLocale",
                        userLocale: k.internalBinaryRead(e, e.uint32(), n, r.filter.userLocale),
                    };
                    break;
                case 11:
                    r.filter = { oneofKind: "bot", bot: eN.internalBinaryRead(e, e.uint32(), n, r.filter.bot) };
                    break;
                case 12:
                    r.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: eC.internalBinaryRead(e, e.uint32(), n, r.filter.userAgeRange),
                    };
                    break;
                case 13:
                    r.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eD.internalBinaryRead(e, e.uint32(), n, r.filter.userIdRange),
                    };
                    break;
                case 14:
                    r.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: ew.internalBinaryRead(e, e.uint32(), n, r.filter.userHasFlag),
                    };
                    break;
                case 15:
                    r.filter = {
                        oneofKind: "unitIdInRangeByHash",
                        unitIdInRangeByHash: eP.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInRangeByHash),
                    };
                    break;
                case 16:
                    r.filter = {
                        oneofKind: "clientReleaseChannel",
                        clientReleaseChannel: ek.internalBinaryRead(e, e.uint32(), n, r.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    r.filter = {
                        oneofKind: "always",
                        always: eG.internalBinaryRead(e, e.uint32(), n, r.filter.always),
                    };
                    break;
                case 18:
                    r.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: V.internalBinaryRead(e, e.uint32(), n, r.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    r.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: eV.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    r.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: eH.internalBinaryRead(e, e.uint32(), n, r.filter.userPremiumType),
                    };
                    break;
                case 21:
                    r.filter = {
                        oneofKind: "unitIdMatchesFilterSnapshot",
                        unitIdMatchesFilterSnapshot: eY.internalBinaryRead(
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
                        guildIds: eK.internalBinaryRead(e, e.uint32(), n, r.filter.guildIds),
                    };
                    break;
                case 23:
                    r.filter = {
                        oneofKind: "guildIdRange",
                        guildIdRange: eX.internalBinaryRead(e, e.uint32(), n, r.filter.guildIdRange),
                    };
                    break;
                case 25:
                    r.filter = {
                        oneofKind: "guildMemberCountRange",
                        guildMemberCountRange: ez.internalBinaryRead(e, e.uint32(), n, r.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    r.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: eQ.internalBinaryRead(e, e.uint32(), n, r.filter.guildHasFeature),
                    };
                    break;
                case 27:
                    r.filter = {
                        oneofKind: "userLocation",
                        userLocation: X.internalBinaryRead(e, e.uint32(), n, r.filter.userLocation),
                    };
                    break;
                case 28:
                    r.filter = {
                        oneofKind: "userIp",
                        userIp: ee.internalBinaryRead(e, e.uint32(), n, r.filter.userIp),
                    };
                    break;
                case 29:
                    r.filter = {
                        oneofKind: "installationIds",
                        installationIds: e0.internalBinaryRead(e, e.uint32(), n, r.filter.installationIds),
                    };
                    break;
                case 30:
                    r.negate = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "clientVersion" === e.filter.oneofKind &&
            e_.internalBinaryWrite(e.filter.clientVersion, t.tag(2, E.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                en.internalBinaryWrite(e.filter.clientOs, t.tag(3, E.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                D.internalBinaryWrite(e.filter.staff, t.tag(4, E.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                w.internalBinaryWrite(e.filter.userInGuild, t.tag(5, E.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                P.internalBinaryWrite(e.filter.userIds, t.tag(6, E.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                G.internalBinaryWrite(e.filter.clientLocale, t.tag(7, E.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                H.internalBinaryWrite(e.filter.clientLocation, t.tag(8, E.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                Q.internalBinaryWrite(e.filter.clientIp, t.tag(9, E.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                k.internalBinaryWrite(e.filter.userLocale, t.tag(10, E.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                eN.internalBinaryWrite(e.filter.bot, t.tag(11, E.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                eC.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, E.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eD.internalBinaryWrite(e.filter.userIdRange, t.tag(13, E.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                ew.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, E.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                eP.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, E.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                ek.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, E.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                eG.internalBinaryWrite(e.filter.always, t.tag(17, E.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                V.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, E.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                eV.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, E.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                eH.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, E.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                eY
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, E.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                eK.internalBinaryWrite(e.filter.guildIds, t.tag(22, E.O0.LengthDelimited).fork(), n).join(),
            "guildIdRange" === e.filter.oneofKind &&
                eX.internalBinaryWrite(e.filter.guildIdRange, t.tag(23, E.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                ez
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, E.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                eQ.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, E.O0.LengthDelimited).fork(), n).join(),
            "userLocation" === e.filter.oneofKind &&
                X.internalBinaryWrite(e.filter.userLocation, t.tag(27, E.O0.LengthDelimited).fork(), n).join(),
            "userIp" === e.filter.oneofKind &&
                ee.internalBinaryWrite(e.filter.userIp, t.tag(28, E.O0.LengthDelimited).fork(), n).join(),
            "installationIds" === e.filter.oneofKind &&
                e0.internalBinaryWrite(e.filter.installationIds, t.tag(29, E.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.negate && t.tag(30, E.O0.Varint).bool(e.negate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let O = new R();
class b extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.workAccounts && t.tag(1, E.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, E.O0.Varint).bool(e.personalAccounts);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let D = new b();
class L extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === E.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let w = new L();
class M extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === E.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.userIds.push(e.fixed64().toString());
                else r.userIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new M();
class x extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let k = new x();
class U extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let G = new U();
class F extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let V = new F();
class B extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => z }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locations: [] };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locations.push(z.internalBinaryRead(e, e.uint32(), n));
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            z.internalBinaryWrite(e.locations[i], t.tag(1, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let H = new B();
class j extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.city && t.tag(1, E.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, E.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, E.O0.LengthDelimited).string(e.country);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Y = new j();
class W extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [
            { no: 1, name: "iso_country", kind: "scalar", T: 9 },
            { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { isoCountry: "", isoSubdivision: "" };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.isoCountry && t.tag(1, E.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, E.O0.LengthDelimited).string(e.isoSubdivision);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let K = new W();
class $ extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => K },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => Y },
        ]);
    }
    create(e) {
        let t = { location: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                        isoRegion: K.internalBinaryRead(e, e.uint32(), n, r.location.isoRegion),
                    };
                    break;
                case 2:
                    r.location = { oneofKind: "isEu", isEu: e.bool() };
                    break;
                case 3:
                    r.location = {
                        oneofKind: "place",
                        place: Y.internalBinaryRead(e, e.uint32(), n, r.location.place),
                    };
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "isoRegion" === e.location.oneofKind &&
            K.internalBinaryWrite(e.location.isoRegion, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, E.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                Y.internalBinaryWrite(e.location.place, t.tag(3, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let z = new $();
class q extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocation",
            [
                { no: 1, name: "locations", kind: "message", repeat: 1, T: () => z },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locations: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.locations.push(z.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            z.internalBinaryWrite(e.locations[i], t.tag(1, E.O0.LengthDelimited).fork(), n).join();
        !1 !== e.preferClientIp && t.tag(2, E.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let X = new q();
class Z extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new Z();
class J extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.blocks[n]);
        !1 !== e.preferClientIp && t.tag(2, E.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ee = new J();
class et extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => er },
                { no: 2, name: "android_version", kind: "message", T: () => er },
                { no: 3, name: "macos_version", kind: "message", T: () => er },
                { no: 4, name: "windows_version", kind: "message", T: () => er },
                { no: 5, name: "playstation_version", kind: "message", T: () => er },
                { no: 6, name: "xbox_version", kind: "message", T: () => er },
                { no: 7, name: "linux_version", kind: "message", T: () => er },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.iosVersion = er.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = er.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.macosVersion = er.internalBinaryRead(e, e.uint32(), n, r.macosVersion);
                    break;
                case 4:
                    r.windowsVersion = er.internalBinaryRead(e, e.uint32(), n, r.windowsVersion);
                    break;
                case 5:
                    r.playstationVersion = er.internalBinaryRead(e, e.uint32(), n, r.playstationVersion);
                    break;
                case 6:
                    r.xboxVersion = er.internalBinaryRead(e, e.uint32(), n, r.xboxVersion);
                    break;
                case 7:
                    r.linuxVersion = er.internalBinaryRead(e, e.uint32(), n, r.linuxVersion);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && er.internalBinaryWrite(e.iosVersion, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                er.internalBinaryWrite(e.androidVersion, t.tag(2, E.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && er.internalBinaryWrite(e.macosVersion, t.tag(3, E.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                er.internalBinaryWrite(e.windowsVersion, t.tag(4, E.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                er.internalBinaryWrite(e.playstationVersion, t.tag(5, E.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && er.internalBinaryWrite(e.xboxVersion, t.tag(6, E.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && er.internalBinaryWrite(e.linuxVersion, t.tag(7, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let en = new et();
class ei extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => ea },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.ranges.push(ea.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            ea.internalBinaryWrite(e.ranges[i], t.tag(1, E.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, E.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let er = new ei();
class es extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => el },
            { no: 2, name: "upper_bound", kind: "message", T: () => el },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.lowerBound = el.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = el.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && el.internalBinaryWrite(e.lowerBound, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && el.internalBinaryWrite(e.upperBound, t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ea = new es();
class eo extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => ec },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.version = ec.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && ec.internalBinaryWrite(e.version, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, E.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let el = new eo();
class eu extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [
            { no: 1, name: "version", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { version: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, E.O0.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ec = new eu();
class ed extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => ef },
                { no: 2, name: "android_version", kind: "message", T: () => ef },
                { no: 3, name: "web_version", kind: "message", T: () => ef },
                { no: 4, name: "native_version", kind: "message", T: () => ef },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => eS },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { allowNonNativeWeb: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.iosVersion = ef.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = ef.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.webVersion = ef.internalBinaryRead(e, e.uint32(), n, r.webVersion);
                    break;
                case 4:
                    r.nativeVersion = ef.internalBinaryRead(e, e.uint32(), n, r.nativeVersion);
                    break;
                case 6:
                    r.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    r.clientRequiredChanges = eS.internalBinaryRead(e, e.uint32(), n, r.clientRequiredChanges);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && ef.internalBinaryWrite(e.iosVersion, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                ef.internalBinaryWrite(e.androidVersion, t.tag(2, E.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && ef.internalBinaryWrite(e.webVersion, t.tag(3, E.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && ef.internalBinaryWrite(e.nativeVersion, t.tag(4, E.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, E.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                eS.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e_ = new ed();
class eh extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => eE },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.ranges.push(eE.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            eE.internalBinaryWrite(e.ranges[i], t.tag(1, E.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, E.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ef = new eh();
class ep extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => eg },
            { no: 2, name: "upper_bound", kind: "message", T: () => eg },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.lowerBound = eg.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = eg.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && eg.internalBinaryWrite(e.lowerBound, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && eg.internalBinaryWrite(e.upperBound, t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eE = new ep();
class em extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eI },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.version = eI.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && eI.internalBinaryWrite(e.version, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, E.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eg = new em();
class eA extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [
            { no: 1, name: "major", kind: "scalar", T: 13 },
            { no: 2, name: "minor", kind: "message", T: () => I.ZQ },
            { no: 3, name: "build", kind: "message", T: () => I.ol },
        ]);
    }
    create(e) {
        let t = { major: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.minor = I.ZQ.internalBinaryRead(e, e.uint32(), n, r.minor);
                    break;
                case 3:
                    r.build = I.ol.internalBinaryRead(e, e.uint32(), n, r.build);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.major && t.tag(1, E.O0.Varint).uint32(e.major),
            e.minor && I.ZQ.internalBinaryWrite(e.minor, t.tag(2, E.O0.LengthDelimited).fork(), n).join(),
            e.build && I.ol.internalBinaryWrite(e.build, t.tag(3, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eI = new eA();
class eT extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [
            { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { commitHashes: [], prNumbers: [] };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    if (i === E.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.prNumbers.push(e.int32());
                    else r.prNumbers.push(e.int32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eS = new eT();
class ey extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, E.O0.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eN = new ey();
class ev extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserAgeRange",
            [
                { no: 1, name: "min_age_years", kind: "message", T: () => I.ZQ },
                { no: 2, name: "max_age_years", kind: "message", T: () => I.ZQ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.minAgeYears = I.ZQ.internalBinaryRead(e, e.uint32(), n, r.minAgeYears);
                    break;
                case 2:
                    r.maxAgeYears = I.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxAgeYears);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minAgeYears && I.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && I.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eC = new ev();
class eR extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Fixed64Value", [
            { no: 1, name: "value", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, E.O0.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eO = new eR();
class eb extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => eO },
                { no: 2, name: "max_id", kind: "message", T: () => eO },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.minId = eO.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = eO.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && eO.internalBinaryWrite(e.minId, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.maxId && eO.internalBinaryWrite(e.maxId, t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eD = new eb();
class eL extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.mask && t.tag(1, E.O0.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ew = new eL();
class eM extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.hashKey && t.tag(1, E.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, E.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, E.O0.Varint).uint32(e.startRingPosition);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eP = new eM();
class ex extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ek = new ex();
class eU extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Always", [{ no: 1, name: "value", kind: "scalar", T: 8 }], {
            "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        });
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, E.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eG = new eU();
class eF extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    if (i === E.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.variationIds.push(e.int32());
                    else r.variationIds.push(e.int32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (("0" !== e.experimentId && t.tag(1, E.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eV = new eF();
class eB extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === E.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.premiumTypes.push(e.int32());
                else r.premiumTypes.push(e.int32());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.premiumTypes.length) {
            t.tag(1, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eH = new eB();
class ej extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    if (i === E.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.targetFilterValues.push(e.fixed64().toString());
                    else r.targetFilterValues.push(e.fixed64().toString());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.filterSnapshotName && t.tag(1, E.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eY = new ej();
class eW extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === E.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eK = new eW();
class e$ extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
            [
                { no: 1, name: "min_count", kind: "message", T: () => I.ZQ },
                { no: 2, name: "max_count", kind: "message", T: () => I.ZQ },
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.minCount = I.ZQ.internalBinaryRead(e, e.uint32(), n, r.minCount);
                    break;
                case 2:
                    r.maxCount = I.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxCount);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minCount && I.ZQ.internalBinaryWrite(e.minCount, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && I.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ez = new e$();
class eq extends A.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIdRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => eO },
                { no: 2, name: "max_id", kind: "message", T: () => eO },
            ],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
            },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.minId = eO.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = eO.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && eO.internalBinaryWrite(e.minId, t.tag(1, E.O0.LengthDelimited).fork(), n).join(),
            e.maxId && eO.internalBinaryWrite(e.maxId, t.tag(2, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eX = new eq();
class eZ extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.features.length; n++) t.tag(1, E.O0.LengthDelimited).string(e.features[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eQ = new eZ();
class eJ extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === E.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.installationIds.push(e.fixed64().toString());
                else r.installationIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let a = e.skip(i);
                !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.installationIds.length) {
            t.tag(1, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.installationIds.length; n++) t.fixed64(e.installationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e0 = new eJ();
var e1 = n(335871),
    e2 =
        (((s = {})[(s.EXCLUSIVE = 0)] = "EXCLUSIVE"),
        (s[(s.SYNCED = 1)] = "SYNCED"),
        (s[(s.PRE_ALLOCATED = 2)] = "PRE_ALLOCATED"),
        s),
    e3 =
        (((a = {})[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.USER = 1)] = "USER"),
        (a[(a.INSTALLATION = 2)] = "INSTALLATION"),
        (a[(a.GUILD = 3)] = "GUILD"),
        (a[(a.CUSTOM = 4)] = "CUSTOM"),
        a),
    e6 =
        (((o = {})[(o.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
        (o[(o.API = 1)] = "API"),
        (o[(o.APP = 2)] = "APP"),
        (o[(o.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
        (o[(o.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
        (o[(o.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
        (o[(o.AV_WORKER = 6)] = "AV_WORKER"),
        (o[(o.SEO = 7)] = "SEO"),
        (o[(o.MARKETING = 8)] = "MARKETING"),
        o),
    e4 = (((l = {})[(l.ENABLED = 0)] = "ENABLED"), (l[(l.DISABLED = 1)] = "DISABLED"), l),
    e5 =
        (((u = {})[(u.FULL = 0)] = "FULL"),
        (u[(u.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
        (u[(u.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
        (u[(u.OFF = 5)] = "OFF"),
        u),
    e7 =
        (((c = {})[(c.DEFAULT = 0)] = "DEFAULT"),
        (c[(c.HOLDOUT = 1)] = "HOLDOUT"),
        (c[(c.NUMBERLINE = 2)] = "NUMBERLINE"),
        c),
    e8 =
        (((d = {})[(d.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
        (d[(d.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
        d),
    e9 =
        (((_ = {})[(_.DEFAULT = 0)] = "DEFAULT"),
        (_[(_.OFF = 1)] = "OFF"),
        (_[(_.OVERRIDES_ONLY = 2)] = "OVERRIDES_ONLY"),
        _),
    te =
        (((h = {})[(h.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (h[(h.CONTROL = 1)] = "CONTROL"),
        (h[(h.TREATMENT = 2)] = "TREATMENT"),
        (h[(h.OVERRIDE = 3)] = "OVERRIDE"),
        h),
    tt =
        (((f = {})[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.ACTIVE = 1)] = "ACTIVE"),
        (f[(f.UNUSED = 2)] = "UNUSED"),
        (f[(f.BURNED = 3)] = "BURNED"),
        (f[(f.PRESERVED = 4)] = "PRESERVED"),
        f),
    tn =
        (((p = {})[(p.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (p[(p.DRAFT = 1)] = "DRAFT"),
        (p[(p.MEASUREMENT = 2)] = "MEASUREMENT"),
        (p[(p.ROLLING_OUT = 4)] = "ROLLING_OUT"),
        (p[(p.ARCHIVED = 6)] = "ARCHIVED"),
        (p[(p.AA_MODE = 7)] = "AA_MODE"),
        p);
class ti extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => e1.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => e1.D },
            { no: 7, name: "editor_id", kind: "scalar", T: 6 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "description", kind: "scalar", T: 9 },
            { no: 10, name: "hypothesis", kind: "message", T: () => I.hU },
            { no: 11, name: "tech_spec_link", kind: "message", T: () => I.hU },
            { no: 12, name: "revision", kind: "scalar", T: 5 },
            { no: 13, name: "hash_key", kind: "scalar", T: 9 },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", e3],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => to },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => N },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", tn] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", e6],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", e4],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", e5],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", e7],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => td },
            { no: 31, name: "expected_end_date", kind: "message", T: () => e1.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => e1.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => I.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", e8],
            },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
            { no: 39, name: "is_managed", kind: "scalar", T: 8 },
            { no: 43, name: "number_line_settings", kind: "message", T: () => ts },
            {
                no: 42,
                name: "eligibility_persistence",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence",
                    e9,
                    "ELIGIBILITY_PERSISTENCE_",
                ],
            },
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
            eligibilityPersistence: 0,
        };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.createdAt = e1.D.internalBinaryRead(e, e.uint32(), n, r.createdAt);
                    break;
                case 4:
                    r.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    r.version = e.int32();
                    break;
                case 6:
                    r.editedAt = e1.D.internalBinaryRead(e, e.uint32(), n, r.editedAt);
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
                    r.hypothesis = I.hU.internalBinaryRead(e, e.uint32(), n, r.hypothesis);
                    break;
                case 11:
                    r.techSpecLink = I.hU.internalBinaryRead(e, e.uint32(), n, r.techSpecLink);
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
                    r.variations.push(to.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    r.rules.push(N.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    r.phase = e.int32();
                    break;
                case 19:
                    if (i === E.O0.LengthDelimited)
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
                    if (i === E.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.fieldNumbersToCopy.push(e.int32());
                    else r.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    r.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    r.debugConfig = td.internalBinaryRead(e, e.uint32(), n, r.debugConfig);
                    break;
                case 31:
                    r.expectedEndDate = e1.D.internalBinaryRead(e, e.uint32(), n, r.expectedEndDate);
                    break;
                case 32:
                    r.isAutomatedChange = e.bool();
                    break;
                case 33:
                    r.archiveAt = e1.D.internalBinaryRead(e, e.uint32(), n, r.archiveAt);
                    break;
                case 35:
                    r.guildExperimentVersion = I.as.internalBinaryRead(e, e.uint32(), n, r.guildExperimentVersion);
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
                case 43:
                    r.numberLineSettings = ts.internalBinaryRead(e, e.uint32(), n, r.numberLineSettings);
                    break;
                case 42:
                    r.eligibilityPersistence = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, E.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, E.O0.LengthDelimited).string(e.name),
            e.createdAt && e1.D.internalBinaryWrite(e.createdAt, t.tag(3, E.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, E.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, E.O0.Varint).int32(e.version),
            e.editedAt && e1.D.internalBinaryWrite(e.editedAt, t.tag(6, E.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, E.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, E.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, E.O0.LengthDelimited).string(e.description),
            e.hypothesis && I.hU.internalBinaryWrite(e.hypothesis, t.tag(10, E.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                I.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, E.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, E.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, E.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, E.O0.Varint).int32(e.unitType);
        for (let i = 0; i < e.variations.length; i++)
            to.internalBinaryWrite(e.variations[i], t.tag(15, E.O0.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            N.internalBinaryWrite(e.rules[i], t.tag(16, E.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, E.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, E.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, E.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, E.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, E.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, E.O0.Varint).bool(e.enableEditRawJsonUi),
            0 !== e.winningVariationId && t.tag(24, E.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, E.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, E.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, E.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, E.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, E.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        e.debugConfig && td.internalBinaryWrite(e.debugConfig, t.tag(30, E.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                e1.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, E.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, E.O0.Varint).bool(e.isAutomatedChange),
            e.archiveAt && e1.D.internalBinaryWrite(e.archiveAt, t.tag(33, E.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                I.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, E.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, E.O0.Varint).int32(e.customUnitPrefix);
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, E.O0.LengthDelimited).string(e.growthbookTags[n]);
        !1 !== e.allocateRightToLeft && t.tag(38, E.O0.Varint).bool(e.allocateRightToLeft),
            !1 !== e.isManaged && t.tag(39, E.O0.Varint).bool(e.isManaged),
            e.numberLineSettings &&
                ts.internalBinaryWrite(e.numberLineSettings, t.tag(43, E.O0.LengthDelimited).fork(), n).join(),
            0 !== e.eligibilityPersistence && t.tag(42, E.O0.Varint).int32(e.eligibilityPersistence);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new ti();
class tr extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", [
            {
                no: 1,
                name: "mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", e2],
            },
            { no: 2, name: "linked_id", kind: "scalar", T: 6 },
            { no: 3, name: "shared_control", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { mode: 0, linkedId: "0", sharedControl: !1 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.mode = e.int32();
                    break;
                case 2:
                    r.linkedId = e.fixed64().toString();
                    break;
                case 3:
                    r.sharedControl = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.mode && t.tag(1, E.O0.Varint).int32(e.mode),
            "0" !== e.linkedId && t.tag(2, E.O0.Bit64).fixed64(e.linkedId),
            !1 !== e.sharedControl && t.tag(3, E.O0.Varint).bool(e.sharedControl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ts = new tr();
class ta extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            { no: 1, name: "id", kind: "scalar", T: 5 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
            { no: 4, name: "buckets", kind: "message", repeat: 1, T: () => tu },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", te],
            },
            { no: 6, name: "configuration", kind: "message", T: () => I.hU },
        ]);
    }
    create(e) {
        let t = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.buckets.push(tu.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    r.type = e.int32();
                    break;
                case 6:
                    r.configuration = I.hU.internalBinaryRead(e, e.uint32(), n, r.configuration);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let a = e.skip(i);
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.id && t.tag(1, E.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, E.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, E.O0.Varint).int32(e.targetAllocation);
        for (let i = 0; i < e.buckets.length; i++)
            tu.internalBinaryWrite(e.buckets[i], t.tag(4, E.O0.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, E.O0.Varint).int32(e.type),
            e.configuration &&
                I.hU.internalBinaryWrite(e.configuration, t.tag(6, E.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let to = new ta();
class tl extends A.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", tt],
            },
            { no: 4, name: "owning_experiment_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0, owningExperimentId: "0" };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.start && t.tag(1, E.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, E.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, E.O0.Varint).int32(e.type),
            "0" !== e.owningExperimentId && t.tag(4, E.O0.Bit64).fixed64(e.owningExperimentId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tu = new tl();
class tc extends A.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== s && (!0 === s ? E.f$.onRead : s)(this.typeName, r, t, i, a);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.enableDecisionLogging && t.tag(1, E.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, E.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, E.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, E.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, E.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, E.O0.Bit64).double(e.decisionLogSampleRate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? E.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let td = new tc();
