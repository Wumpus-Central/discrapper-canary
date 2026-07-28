"use strict";
n.d(t, { Um: () => e4, FZ: () => tn }), n(321073);
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
    f = n(852015),
    p = n(144367),
    T = n(428420),
    m = n(535384),
    g = n(406935),
    S =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EXCLUDE = 1)] = "EXCLUDE"),
        (i[(i.OVERRIDE = 2)] = "OVERRIDE"),
        (i[(i.REQUIRE = 3)] = "REQUIRE"),
        (i[(i.ASSIGNMENT = 4)] = "ASSIGNMENT"),
        i),
    N = (((r = {})[(r.REGULAR = 0)] = "REGULAR"), (r[(r.HOLDOUT = 1)] = "HOLDOUT"), r);
class C extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", S] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => D },
            { no: 3, name: "override", kind: "message", T: () => L },
            { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", N],
            },
            { no: 6, name: "hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { type: 0, filters: [], isSunsetRule: !1, subtype: 0, hash: "" };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.type = e.int32();
                    break;
                case 2:
                    r.filters.push(D.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    r.override = L.internalBinaryRead(e, e.uint32(), n, r.override);
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, f.O0.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++)
            D.internalBinaryWrite(e.filters[i], t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        e.override && L.internalBinaryWrite(e.override, t.tag(3, f.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isSunsetRule && t.tag(4, f.O0.Varint).bool(e.isSunsetRule),
            0 !== e.subtype && t.tag(5, f.O0.Varint).int32(e.subtype),
            "" !== e.hash && t.tag(6, f.O0.LengthDelimited).string(e.hash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let O = new C();
class R extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Override", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { variationId: 0 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.variationId = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, f.O0.Varint).int32(e.variationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new R();
class y extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => eE },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => ei },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => b },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => P },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => w },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => F },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => j },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => J },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => x },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => eO },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => eL },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eb },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => eP },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => ew },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => ex },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => eF },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => B },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => eB },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => ej },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => eY },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => e$ },
            { no: 23, name: "guild_id_range", kind: "message", oneof: "filter", T: () => eX },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => eq },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => eJ },
            { no: 27, name: "user_location", kind: "message", oneof: "filter", T: () => X },
            { no: 28, name: "user_ip", kind: "message", oneof: "filter", T: () => et },
            { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: () => e1 },
            { no: 30, name: "negate", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { filter: { oneofKind: void 0 }, negate: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.filter = {
                        oneofKind: "clientVersion",
                        clientVersion: eE.internalBinaryRead(e, e.uint32(), n, r.filter.clientVersion),
                    };
                    break;
                case 3:
                    r.filter = {
                        oneofKind: "clientOs",
                        clientOs: ei.internalBinaryRead(e, e.uint32(), n, r.filter.clientOs),
                    };
                    break;
                case 4:
                    r.filter = { oneofKind: "staff", staff: b.internalBinaryRead(e, e.uint32(), n, r.filter.staff) };
                    break;
                case 5:
                    r.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: P.internalBinaryRead(e, e.uint32(), n, r.filter.userInGuild),
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
                        clientLocale: F.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocale),
                    };
                    break;
                case 8:
                    r.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: j.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocation),
                    };
                    break;
                case 9:
                    r.filter = {
                        oneofKind: "clientIp",
                        clientIp: J.internalBinaryRead(e, e.uint32(), n, r.filter.clientIp),
                    };
                    break;
                case 10:
                    r.filter = {
                        oneofKind: "userLocale",
                        userLocale: x.internalBinaryRead(e, e.uint32(), n, r.filter.userLocale),
                    };
                    break;
                case 11:
                    r.filter = { oneofKind: "bot", bot: eO.internalBinaryRead(e, e.uint32(), n, r.filter.bot) };
                    break;
                case 12:
                    r.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: eL.internalBinaryRead(e, e.uint32(), n, r.filter.userAgeRange),
                    };
                    break;
                case 13:
                    r.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eb.internalBinaryRead(e, e.uint32(), n, r.filter.userIdRange),
                    };
                    break;
                case 14:
                    r.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: eP.internalBinaryRead(e, e.uint32(), n, r.filter.userHasFlag),
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
                        clientReleaseChannel: ex.internalBinaryRead(e, e.uint32(), n, r.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    r.filter = {
                        oneofKind: "always",
                        always: eF.internalBinaryRead(e, e.uint32(), n, r.filter.always),
                    };
                    break;
                case 18:
                    r.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: B.internalBinaryRead(e, e.uint32(), n, r.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    r.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: eB.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    r.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: ej.internalBinaryRead(e, e.uint32(), n, r.filter.userPremiumType),
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
                        guildIds: e$.internalBinaryRead(e, e.uint32(), n, r.filter.guildIds),
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
                        guildMemberCountRange: eq.internalBinaryRead(e, e.uint32(), n, r.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    r.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: eJ.internalBinaryRead(e, e.uint32(), n, r.filter.guildHasFeature),
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
                        userIp: et.internalBinaryRead(e, e.uint32(), n, r.filter.userIp),
                    };
                    break;
                case 29:
                    r.filter = {
                        oneofKind: "installationIds",
                        installationIds: e1.internalBinaryRead(e, e.uint32(), n, r.filter.installationIds),
                    };
                    break;
                case 30:
                    r.negate = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "clientVersion" === e.filter.oneofKind &&
            eE.internalBinaryWrite(e.filter.clientVersion, t.tag(2, f.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                ei.internalBinaryWrite(e.filter.clientOs, t.tag(3, f.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                b.internalBinaryWrite(e.filter.staff, t.tag(4, f.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                P.internalBinaryWrite(e.filter.userInGuild, t.tag(5, f.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                w.internalBinaryWrite(e.filter.userIds, t.tag(6, f.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                F.internalBinaryWrite(e.filter.clientLocale, t.tag(7, f.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                j.internalBinaryWrite(e.filter.clientLocation, t.tag(8, f.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                J.internalBinaryWrite(e.filter.clientIp, t.tag(9, f.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                x.internalBinaryWrite(e.filter.userLocale, t.tag(10, f.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                eO.internalBinaryWrite(e.filter.bot, t.tag(11, f.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                eL.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, f.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eb.internalBinaryWrite(e.filter.userIdRange, t.tag(13, f.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                eP.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, f.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                ew.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, f.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                ex.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, f.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                eF.internalBinaryWrite(e.filter.always, t.tag(17, f.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                B.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, f.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                eB.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, f.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                ej.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, f.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                eY
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, f.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                e$.internalBinaryWrite(e.filter.guildIds, t.tag(22, f.O0.LengthDelimited).fork(), n).join(),
            "guildIdRange" === e.filter.oneofKind &&
                eX.internalBinaryWrite(e.filter.guildIdRange, t.tag(23, f.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                eq
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, f.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                eJ.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, f.O0.LengthDelimited).fork(), n).join(),
            "userLocation" === e.filter.oneofKind &&
                X.internalBinaryWrite(e.filter.userLocation, t.tag(27, f.O0.LengthDelimited).fork(), n).join(),
            "userIp" === e.filter.oneofKind &&
                et.internalBinaryWrite(e.filter.userIp, t.tag(28, f.O0.LengthDelimited).fork(), n).join(),
            "installationIds" === e.filter.oneofKind &&
                e1.internalBinaryWrite(e.filter.installationIds, t.tag(29, f.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.negate && t.tag(30, f.O0.Varint).bool(e.negate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let D = new y();
class v extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.workAccounts = e.bool();
                    break;
                case 2:
                    r.personalAccounts = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.workAccounts && t.tag(1, f.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, f.O0.Varint).bool(e.personalAccounts);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let b = new v();
class M extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === f.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new M();
class U extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === f.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.userIds.push(e.fixed64().toString());
                else r.userIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let w = new U();
class G extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new G();
class k extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let F = new k();
class V extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let B = new V();
class H extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => q }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locations: [] };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locations.push(q.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            q.internalBinaryWrite(e.locations[i], t.tag(1, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let j = new H();
class W extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.city = e.string();
                    break;
                case 2:
                    r.subdivision = e.string();
                    break;
                case 3:
                    r.country = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.city && t.tag(1, f.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, f.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, f.O0.LengthDelimited).string(e.country);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Y = new W();
class K extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [
            { no: 1, name: "iso_country", kind: "scalar", T: 9 },
            { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { isoCountry: "", isoSubdivision: "" };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.isoCountry = e.string();
                    break;
                case 2:
                    r.isoSubdivision = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.isoCountry && t.tag(1, f.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, f.O0.LengthDelimited).string(e.isoSubdivision);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let $ = new K();
class z extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => $ },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => Y },
        ]);
    }
    create(e) {
        let t = { location: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.location = {
                        oneofKind: "isoRegion",
                        isoRegion: $.internalBinaryRead(e, e.uint32(), n, r.location.isoRegion),
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "isoRegion" === e.location.oneofKind &&
            $.internalBinaryWrite(e.location.isoRegion, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, f.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                Y.internalBinaryWrite(e.location.place, t.tag(3, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let q = new z();
class Z extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocation",
            [
                { no: 1, name: "locations", kind: "message", repeat: 1, T: () => q },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locations: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.locations.push(q.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            q.internalBinaryWrite(e.locations[i], t.tag(1, f.O0.LengthDelimited).fork(), n).join();
        !1 !== e.preferClientIp && t.tag(2, f.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let X = new Z();
class Q extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.blocks.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let J = new Q();
class ee extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.blocks.push(e.string());
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.blocks[n]);
        !1 !== e.preferClientIp && t.tag(2, f.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let et = new ee();
class en extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => ea },
                { no: 2, name: "android_version", kind: "message", T: () => ea },
                { no: 3, name: "macos_version", kind: "message", T: () => ea },
                { no: 4, name: "windows_version", kind: "message", T: () => ea },
                { no: 5, name: "playstation_version", kind: "message", T: () => ea },
                { no: 6, name: "xbox_version", kind: "message", T: () => ea },
                { no: 7, name: "linux_version", kind: "message", T: () => ea },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.iosVersion = ea.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = ea.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.macosVersion = ea.internalBinaryRead(e, e.uint32(), n, r.macosVersion);
                    break;
                case 4:
                    r.windowsVersion = ea.internalBinaryRead(e, e.uint32(), n, r.windowsVersion);
                    break;
                case 5:
                    r.playstationVersion = ea.internalBinaryRead(e, e.uint32(), n, r.playstationVersion);
                    break;
                case 6:
                    r.xboxVersion = ea.internalBinaryRead(e, e.uint32(), n, r.xboxVersion);
                    break;
                case 7:
                    r.linuxVersion = ea.internalBinaryRead(e, e.uint32(), n, r.linuxVersion);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && ea.internalBinaryWrite(e.iosVersion, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                ea.internalBinaryWrite(e.androidVersion, t.tag(2, f.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && ea.internalBinaryWrite(e.macosVersion, t.tag(3, f.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                ea.internalBinaryWrite(e.windowsVersion, t.tag(4, f.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                ea.internalBinaryWrite(e.playstationVersion, t.tag(5, f.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && ea.internalBinaryWrite(e.xboxVersion, t.tag(6, f.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && ea.internalBinaryWrite(e.linuxVersion, t.tag(7, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ei = new en();
class er extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => el },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.ranges.push(el.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            el.internalBinaryWrite(e.ranges[i], t.tag(1, f.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, f.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ea = new er();
class es extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => ed },
            { no: 2, name: "upper_bound", kind: "message", T: () => ed },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.lowerBound = ed.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = ed.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && ed.internalBinaryWrite(e.lowerBound, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && ed.internalBinaryWrite(e.upperBound, t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let el = new es();
class eo extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eu },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.version = eu.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && eu.internalBinaryWrite(e.version, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, f.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ed = new eo();
class ec extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [
            { no: 1, name: "version", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { version: 0 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.version = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, f.O0.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eu = new ec();
class e_ extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => eh },
                { no: 2, name: "android_version", kind: "message", T: () => eh },
                { no: 3, name: "web_version", kind: "message", T: () => eh },
                { no: 4, name: "native_version", kind: "message", T: () => eh },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => eN },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { allowNonNativeWeb: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.iosVersion = eh.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = eh.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.webVersion = eh.internalBinaryRead(e, e.uint32(), n, r.webVersion);
                    break;
                case 4:
                    r.nativeVersion = eh.internalBinaryRead(e, e.uint32(), n, r.nativeVersion);
                    break;
                case 6:
                    r.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    r.clientRequiredChanges = eN.internalBinaryRead(e, e.uint32(), n, r.clientRequiredChanges);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && eh.internalBinaryWrite(e.iosVersion, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                eh.internalBinaryWrite(e.androidVersion, t.tag(2, f.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && eh.internalBinaryWrite(e.webVersion, t.tag(3, f.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && eh.internalBinaryWrite(e.nativeVersion, t.tag(4, f.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, f.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                eN.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eE = new e_();
class eA extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => ef },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.ranges.push(ef.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            ef.internalBinaryWrite(e.ranges[i], t.tag(1, f.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, f.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eh = new eA();
class eI extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => eT },
            { no: 2, name: "upper_bound", kind: "message", T: () => eT },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.lowerBound = eT.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = eT.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && eT.internalBinaryWrite(e.lowerBound, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && eT.internalBinaryWrite(e.upperBound, t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ef = new eI();
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.version = eg.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && eg.internalBinaryWrite(e.version, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, f.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eT = new ep();
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.major = e.uint32();
                    break;
                case 2:
                    r.minor = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.minor);
                    break;
                case 3:
                    r.build = g.ol.internalBinaryRead(e, e.uint32(), n, r.build);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.major && t.tag(1, f.O0.Varint).uint32(e.major),
            e.minor && g.ZQ.internalBinaryWrite(e.minor, t.tag(2, f.O0.LengthDelimited).fork(), n).join(),
            e.build && g.ol.internalBinaryWrite(e.build, t.tag(3, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eg = new em();
class eS extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [
            { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { commitHashes: [], prNumbers: [] };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.commitHashes.push(e.string());
                    break;
                case 2:
                    if (i === f.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.prNumbers.push(e.int32());
                    else r.prNumbers.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eN = new eS();
class eC extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.isBot = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, f.O0.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eO = new eC();
class eR extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minAgeYears = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.minAgeYears);
                    break;
                case 2:
                    r.maxAgeYears = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxAgeYears);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minAgeYears && g.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && g.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eL = new eR();
class ey extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Fixed64Value", [
            { no: 1, name: "value", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, f.O0.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eD = new ey();
class ev extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => eD },
                { no: 2, name: "max_id", kind: "message", T: () => eD },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minId = eD.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = eD.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && eD.internalBinaryWrite(e.minId, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.maxId && eD.internalBinaryWrite(e.maxId, t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eb = new ev();
class eM extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.mask = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.mask && t.tag(1, f.O0.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eP = new eM();
class eU extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.hashKey = e.string();
                    break;
                case 2:
                    r.stopRingPosition = e.uint32();
                    break;
                case 3:
                    r.startRingPosition = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.hashKey && t.tag(1, f.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, f.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, f.O0.Varint).uint32(e.startRingPosition);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ew = new eU();
class eG extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.releaseChannels.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ex = new eG();
class ek extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Always", [{ no: 1, name: "value", kind: "scalar", T: 8 }], {
            "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        });
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, f.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eF = new ek();
class eV extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdInExperiment",
            [
                { no: 1, name: "experiment_id", kind: "scalar", T: 6 },
                { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 },
            ],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
            },
        );
    }
    create(e) {
        let t = { experimentId: "0", variationIds: [] };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.experimentId = e.fixed64().toString();
                    break;
                case 2:
                    if (i === f.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.variationIds.push(e.int32());
                    else r.variationIds.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (("0" !== e.experimentId && t.tag(1, f.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eB = new eV();
class eH extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === f.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.premiumTypes.push(e.int32());
                else r.premiumTypes.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.premiumTypes.length) {
            t.tag(1, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ej = new eH();
class eW extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.filterSnapshotName = e.string();
                    break;
                case 2:
                    if (i === f.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.targetFilterValues.push(e.fixed64().toString());
                    else r.targetFilterValues.push(e.fixed64().toString());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.filterSnapshotName && t.tag(1, f.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eY = new eW();
class eK extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === f.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e$ = new eK();
class ez extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minCount = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.minCount);
                    break;
                case 2:
                    r.maxCount = g.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxCount);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minCount && g.ZQ.internalBinaryWrite(e.minCount, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && g.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eq = new ez();
class eZ extends m.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIdRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => eD },
                { no: 2, name: "max_id", kind: "message", T: () => eD },
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.minId = eD.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = eD.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && eD.internalBinaryWrite(e.minId, t.tag(1, f.O0.LengthDelimited).fork(), n).join(),
            e.maxId && eD.internalBinaryWrite(e.maxId, t.tag(2, f.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eX = new eZ();
class eQ extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.features.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.features.length; n++) t.tag(1, f.O0.LengthDelimited).string(e.features[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eJ = new eQ();
class e0 extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === f.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.installationIds.push(e.fixed64().toString());
                else r.installationIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.installationIds.length) {
            t.tag(1, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.installationIds.length; n++) t.fixed64(e.installationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e1 = new e0();
var e2 = n(335871),
    e3 =
        (((a = {})[(a.EXCLUSIVE = 0)] = "EXCLUSIVE"),
        (a[(a.SYNCED = 1)] = "SYNCED"),
        (a[(a.PRE_ALLOCATED = 2)] = "PRE_ALLOCATED"),
        a),
    e6 =
        (((s = {})[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.USER = 1)] = "USER"),
        (s[(s.INSTALLATION = 2)] = "INSTALLATION"),
        (s[(s.GUILD = 3)] = "GUILD"),
        (s[(s.CUSTOM = 4)] = "CUSTOM"),
        s),
    e4 =
        (((l = {})[(l.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
        (l[(l.API = 1)] = "API"),
        (l[(l.APP = 2)] = "APP"),
        (l[(l.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
        (l[(l.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
        (l[(l.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
        (l[(l.AV_WORKER = 6)] = "AV_WORKER"),
        (l[(l.SEO = 7)] = "SEO"),
        (l[(l.MARKETING = 8)] = "MARKETING"),
        l),
    e5 = (((o = {})[(o.ENABLED = 0)] = "ENABLED"), (o[(o.DISABLED = 1)] = "DISABLED"), o),
    e7 =
        (((d = {})[(d.FULL = 0)] = "FULL"),
        (d[(d.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
        (d[(d.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
        (d[(d.OFF = 5)] = "OFF"),
        d),
    e8 =
        (((c = {})[(c.DEFAULT = 0)] = "DEFAULT"),
        (c[(c.HOLDOUT = 1)] = "HOLDOUT"),
        (c[(c.NUMBERLINE = 2)] = "NUMBERLINE"),
        c),
    e9 =
        (((u = {})[(u.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
        (u[(u.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
        u),
    te =
        (((_ = {})[(_.EXPOSURE_POINT_ID_UNSPECIFIED = 0)] = "EXPOSURE_POINT_ID_UNSPECIFIED"),
        (_[(_.SEO_INSTALLATION_PAGE_LOAD = 1)] = "SEO_INSTALLATION_PAGE_LOAD"),
        (_[(_.MARKETING_INSTALLATION_PAGE_LOAD = 2)] = "MARKETING_INSTALLATION_PAGE_LOAD"),
        _),
    tt =
        (((E = {})[(E.DEFAULT = 0)] = "DEFAULT"),
        (E[(E.OFF = 1)] = "OFF"),
        (E[(E.OVERRIDES_ONLY = 2)] = "OVERRIDES_ONLY"),
        E),
    tn =
        (((A = {})[(A.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (A[(A.CONTROL = 1)] = "CONTROL"),
        (A[(A.TREATMENT = 2)] = "TREATMENT"),
        (A[(A.OVERRIDE = 3)] = "OVERRIDE"),
        A),
    ti =
        (((h = {})[(h.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (h[(h.ACTIVE = 1)] = "ACTIVE"),
        (h[(h.UNUSED = 2)] = "UNUSED"),
        (h[(h.BURNED = 3)] = "BURNED"),
        (h[(h.PRESERVED = 4)] = "PRESERVED"),
        h),
    tr =
        (((I = {})[(I.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (I[(I.DRAFT = 1)] = "DRAFT"),
        (I[(I.MEASUREMENT = 2)] = "MEASUREMENT"),
        (I[(I.ROLLING_OUT = 4)] = "ROLLING_OUT"),
        (I[(I.ARCHIVED = 6)] = "ARCHIVED"),
        (I[(I.AA_MODE = 7)] = "AA_MODE"),
        I);
class ta extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => e2.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => e2.D },
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
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", e6],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => td },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => O },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", tr] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", e4],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", e5],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", e7],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 46, name: "dynamic_config_size_limit_override", kind: "message", T: () => g.as },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", e8],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => tE },
            { no: 31, name: "expected_end_date", kind: "message", T: () => e2.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 44, name: "suppress_editor_mention", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => e2.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => g.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", e9],
            },
            {
                no: 45,
                name: "exposure_points",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposurePointId", te],
            },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
            { no: 39, name: "is_managed", kind: "scalar", T: 8 },
            { no: 43, name: "number_line_settings", kind: "message", T: () => tl },
            {
                no: 42,
                name: "eligibility_persistence",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence",
                    tt,
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
            suppressEditorMention: !1,
            customUnitPrefix: 0,
            exposurePoints: [],
            growthbookTags: [],
            allocateRightToLeft: !1,
            isManaged: !1,
            eligibilityPersistence: 0,
        };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.name = e.string();
                    break;
                case 3:
                    r.createdAt = e2.D.internalBinaryRead(e, e.uint32(), n, r.createdAt);
                    break;
                case 4:
                    r.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    r.version = e.int32();
                    break;
                case 6:
                    r.editedAt = e2.D.internalBinaryRead(e, e.uint32(), n, r.editedAt);
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
                    r.variations.push(td.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    r.rules.push(O.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    r.phase = e.int32();
                    break;
                case 19:
                    if (i === f.O0.LengthDelimited)
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
                case 46:
                    r.dynamicConfigSizeLimitOverride = g.as.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.dynamicConfigSizeLimitOverride,
                    );
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
                    if (i === f.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.fieldNumbersToCopy.push(e.int32());
                    else r.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    r.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    r.debugConfig = tE.internalBinaryRead(e, e.uint32(), n, r.debugConfig);
                    break;
                case 31:
                    r.expectedEndDate = e2.D.internalBinaryRead(e, e.uint32(), n, r.expectedEndDate);
                    break;
                case 32:
                    r.isAutomatedChange = e.bool();
                    break;
                case 44:
                    r.suppressEditorMention = e.bool();
                    break;
                case 33:
                    r.archiveAt = e2.D.internalBinaryRead(e, e.uint32(), n, r.archiveAt);
                    break;
                case 35:
                    r.guildExperimentVersion = g.as.internalBinaryRead(e, e.uint32(), n, r.guildExperimentVersion);
                    break;
                case 36:
                    r.customUnitPrefix = e.int32();
                    break;
                case 45:
                    if (i === f.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.exposurePoints.push(e.int32());
                    else r.exposurePoints.push(e.int32());
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
                    r.numberLineSettings = tl.internalBinaryRead(e, e.uint32(), n, r.numberLineSettings);
                    break;
                case 42:
                    r.eligibilityPersistence = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, f.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, f.O0.LengthDelimited).string(e.name),
            e.createdAt && e2.D.internalBinaryWrite(e.createdAt, t.tag(3, f.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, f.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, f.O0.Varint).int32(e.version),
            e.editedAt && e2.D.internalBinaryWrite(e.editedAt, t.tag(6, f.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, f.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, f.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, f.O0.LengthDelimited).string(e.description),
            e.hypothesis && g.hU.internalBinaryWrite(e.hypothesis, t.tag(10, f.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                g.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, f.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, f.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, f.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, f.O0.Varint).int32(e.unitType);
        for (let i = 0; i < e.variations.length; i++)
            td.internalBinaryWrite(e.variations[i], t.tag(15, f.O0.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            O.internalBinaryWrite(e.rules[i], t.tag(16, f.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, f.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, f.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, f.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, f.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, f.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, f.O0.Varint).bool(e.enableEditRawJsonUi),
            e.dynamicConfigSizeLimitOverride &&
                g.as
                    .internalBinaryWrite(e.dynamicConfigSizeLimitOverride, t.tag(46, f.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.winningVariationId && t.tag(24, f.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, f.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, f.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, f.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, f.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        if (
            (e.debugConfig && tE.internalBinaryWrite(e.debugConfig, t.tag(30, f.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                e2.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, f.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, f.O0.Varint).bool(e.isAutomatedChange),
            !1 !== e.suppressEditorMention && t.tag(44, f.O0.Varint).bool(e.suppressEditorMention),
            e.archiveAt && e2.D.internalBinaryWrite(e.archiveAt, t.tag(33, f.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                g.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, f.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, f.O0.Varint).int32(e.customUnitPrefix),
            e.exposurePoints.length)
        ) {
            t.tag(45, f.O0.LengthDelimited).fork();
            for (let n = 0; n < e.exposurePoints.length; n++) t.int32(e.exposurePoints[n]);
            t.join();
        }
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, f.O0.LengthDelimited).string(e.growthbookTags[n]);
        !1 !== e.allocateRightToLeft && t.tag(38, f.O0.Varint).bool(e.allocateRightToLeft),
            !1 !== e.isManaged && t.tag(39, f.O0.Varint).bool(e.isManaged),
            e.numberLineSettings &&
                tl.internalBinaryWrite(e.numberLineSettings, t.tag(43, f.O0.LengthDelimited).fork(), n).join(),
            0 !== e.eligibilityPersistence && t.tag(42, f.O0.Varint).int32(e.eligibilityPersistence);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new ta();
class ts extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", [
            {
                no: 1,
                name: "mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", e3],
            },
            { no: 2, name: "linked_id", kind: "scalar", T: 6 },
            { no: 3, name: "shared_control", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { mode: 0, linkedId: "0", sharedControl: !1 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.mode = e.int32();
                    break;
                case 2:
                    r.linkedId = e.fixed64().toString();
                    break;
                case 3:
                    r.sharedControl = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.mode && t.tag(1, f.O0.Varint).int32(e.mode),
            "0" !== e.linkedId && t.tag(2, f.O0.Bit64).fixed64(e.linkedId),
            !1 !== e.sharedControl && t.tag(3, f.O0.Varint).bool(e.sharedControl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tl = new ts();
class to extends m.G {
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
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", tn],
            },
            { no: 6, name: "configuration", kind: "message", T: () => g.hU },
            { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0, owningExperimentId: "0" };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.configuration = g.hU.internalBinaryRead(e, e.uint32(), n, r.configuration);
                    break;
                case 7:
                    r.owningExperimentId = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.id && t.tag(1, f.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, f.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, f.O0.Varint).int32(e.targetAllocation);
        for (let i = 0; i < e.buckets.length; i++)
            tu.internalBinaryWrite(e.buckets[i], t.tag(4, f.O0.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, f.O0.Varint).int32(e.type),
            e.configuration &&
                g.hU.internalBinaryWrite(e.configuration, t.tag(6, f.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.owningExperimentId && t.tag(7, f.O0.Bit64).fixed64(e.owningExperimentId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let td = new to();
class tc extends m.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", ti],
            },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0 };
        return (
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    r.start = e.int32();
                    break;
                case 2:
                    r.stop = e.int32();
                    break;
                case 3:
                    r.type = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.start && t.tag(1, f.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, f.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, f.O0.Varint).int32(e.type);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tu = new tc();
class t_ extends m.G {
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
            globalThis.Object.defineProperty(t, T.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, p.x)(this, t, e),
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
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? f.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.enableDecisionLogging && t.tag(1, f.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, f.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, f.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, f.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, f.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, f.O0.Bit64).double(e.decisionLogSampleRate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? f.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tE = new t_();
