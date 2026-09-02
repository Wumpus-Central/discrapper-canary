"use strict";
n.d(t, { Um: () => tE, FZ: () => tm }), n(321073);
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
    T = n(852015),
    m = n(144367),
    g = n(428420),
    S = n(535384),
    N = n(335871),
    C = n(467276),
    O = n(82180);
class R extends S.G {
    constructor() {
        super("google.protobuf.Duration", [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
        ]);
    }
    internalJsonWrite(e, t) {
        let n = O.h.from(e.seconds).toNumber();
        if (n > 315576e6 || n < -315576e6) throw Error("Duration value out of range.");
        let i = e.seconds.toString();
        if (0 !== e.nanos) {
            let t = Math.abs(e.nanos).toString();
            "000000" === (t = "0".repeat(9 - t.length) + t).substring(3)
                ? (t = t.substring(0, 3))
                : "000" === t.substring(6) && (t = t.substring(0, 6)),
                (i += "." + t);
        }
        return i + "s";
    }
    internalJsonRead(e, t, n) {
        if ("string" != typeof e)
            throw Error("Unable to parse Duration from JSON " + (0, C.V)(e) + ". Expected string.");
        let i = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === i) throw Error("Unable to parse Duration from JSON string. Invalid format.");
        n || (n = this.create());
        let r = O.h.from(i[1]);
        if (r.toNumber() > 315576e6 || -315576e6 > r.toNumber())
            throw Error("Unable to parse Duration from JSON string. Value out of range.");
        if (((n.seconds = r.toString()), "string" == typeof i[2])) {
            let e = i[2] + "0".repeat(9 - i[2].length);
            (n.nanos = parseInt(e)), r.isNegative() && (n.nanos = -n.nanos);
        }
        return n;
    }
    create(e) {
        let t = { seconds: "0", nanos: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.seconds = e.int64().toString();
                    break;
                case 2:
                    r.nanos = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.seconds && t.tag(1, T.O0.Varint).int64(e.seconds),
            0 !== e.nanos && t.tag(2, T.O0.Varint).int32(e.nanos);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new R();
var y =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.DRAFT = 1)] = "DRAFT"),
        (i[(i.ACTIVE = 2)] = "ACTIVE"),
        (i[(i.PAUSED_MANUAL = 3)] = "PAUSED_MANUAL"),
        (i[(i.PAUSED_HEALTH_CHECK = 4)] = "PAUSED_HEALTH_CHECK"),
        (i[(i.COMPLETED = 5)] = "COMPLETED"),
        (i[(i.CANCELED = 6)] = "CANCELED"),
        i),
    D =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (r[(r.AWAITING_MANUAL_APPROVAL = 3)] = "AWAITING_MANUAL_APPROVAL"),
        (r[(r.COMPLETED = 4)] = "COMPLETED"),
        r);
class v extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.LifecyclePlan", [
            { no: 1, name: "measurement_plan", kind: "message", T: () => P },
            { no: 2, name: "rollout_plan", kind: "message", T: () => w },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.measurementPlan = P.internalBinaryRead(e, e.uint32(), n, r.measurementPlan);
                    break;
                case 2:
                    r.rolloutPlan = w.internalBinaryRead(e, e.uint32(), n, r.rolloutPlan);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.measurementPlan && P.internalBinaryWrite(e.measurementPlan, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.rolloutPlan && w.internalBinaryWrite(e.rolloutPlan, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let b = new v();
class M extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.MeasurementPlan", [
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.PlanStatus", y, "PLAN_STATUS_"],
            },
            { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: () => x },
        ]);
    }
    create(e) {
        let t = { status: 0, rampSteps: [] };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.status = e.int32();
                    break;
                case 2:
                    r.rampSteps.push(x.internalBinaryRead(e, e.uint32(), n));
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.status && t.tag(1, T.O0.Varint).int32(e.status);
        for (let i = 0; i < e.rampSteps.length; i++)
            x.internalBinaryWrite(e.rampSteps[i], t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new M();
class U extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.RolloutPlan", [
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.PlanStatus", y, "PLAN_STATUS_"],
            },
            { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: () => x },
        ]);
    }
    create(e) {
        let t = { status: 0, rampSteps: [] };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.status = e.int32();
                    break;
                case 2:
                    r.rampSteps.push(x.internalBinaryRead(e, e.uint32(), n));
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.status && t.tag(1, T.O0.Varint).int32(e.status);
        for (let i = 0; i < e.rampSteps.length; i++)
            x.internalBinaryWrite(e.rampSteps[i], t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let w = new U();
class G extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.RampStep", [
            { no: 1, name: "target_basis_points", kind: "scalar", T: 5 },
            { no: 2, name: "hold_duration", kind: "message", T: () => L },
            { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 },
            { no: 4, name: "started_at", kind: "message", T: () => N.D },
            {
                no: 5,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.StepStatus", D, "STEP_STATUS_"],
            },
        ]);
    }
    create(e) {
        let t = { targetBasisPoints: 0, requireManualApproval: !1, status: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.targetBasisPoints = e.int32();
                    break;
                case 2:
                    r.holdDuration = L.internalBinaryRead(e, e.uint32(), n, r.holdDuration);
                    break;
                case 3:
                    r.requireManualApproval = e.bool();
                    break;
                case 4:
                    r.startedAt = N.D.internalBinaryRead(e, e.uint32(), n, r.startedAt);
                    break;
                case 5:
                    r.status = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.targetBasisPoints && t.tag(1, T.O0.Varint).int32(e.targetBasisPoints),
            e.holdDuration && L.internalBinaryWrite(e.holdDuration, t.tag(2, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.requireManualApproval && t.tag(3, T.O0.Varint).bool(e.requireManualApproval),
            e.startedAt && N.D.internalBinaryWrite(e.startedAt, t.tag(4, T.O0.LengthDelimited).fork(), n).join(),
            0 !== e.status && t.tag(5, T.O0.Varint).int32(e.status);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new G();
var k = n(406935),
    F =
        (((a = {})[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.EXCLUDE = 1)] = "EXCLUDE"),
        (a[(a.OVERRIDE = 2)] = "OVERRIDE"),
        (a[(a.REQUIRE = 3)] = "REQUIRE"),
        (a[(a.ASSIGNMENT = 4)] = "ASSIGNMENT"),
        a),
    V = (((s = {})[(s.REGULAR = 0)] = "REGULAR"), (s[(s.HOLDOUT = 1)] = "HOLDOUT"), s);
class B extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", F] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => K },
            { no: 3, name: "override", kind: "message", T: () => W },
            { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", V],
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.type = e.int32();
                    break;
                case 2:
                    r.filters.push(K.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    r.override = W.internalBinaryRead(e, e.uint32(), n, r.override);
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, T.O0.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++)
            K.internalBinaryWrite(e.filters[i], t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        e.override && W.internalBinaryWrite(e.override, t.tag(3, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isSunsetRule && t.tag(4, T.O0.Varint).bool(e.isSunsetRule),
            0 !== e.subtype && t.tag(5, T.O0.Varint).int32(e.subtype),
            "" !== e.hash && t.tag(6, T.O0.LengthDelimited).string(e.hash);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let H = new B();
class j extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.variationId = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, T.O0.Varint).int32(e.variationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let W = new j();
class Y extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => eM },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => eS },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => z },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => Z },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => Q },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => en },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => es },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => ep },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => ee },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => eW },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => eK },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eZ },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => eQ },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => e0 },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => e2 },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => e5 },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => er },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => e4 },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => e8 },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => te },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => tn },
            { no: 23, name: "guild_id_range", kind: "message", oneof: "filter", T: () => ts },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => tr },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => to },
            { no: 27, name: "user_location", kind: "message", oneof: "filter", T: () => eA },
            { no: 28, name: "user_ip", kind: "message", oneof: "filter", T: () => em },
            { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: () => tc },
            { no: 31, name: "user_store_country", kind: "message", oneof: "filter", T: () => eI },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 2:
                    r.filter = {
                        oneofKind: "clientVersion",
                        clientVersion: eM.internalBinaryRead(e, e.uint32(), n, r.filter.clientVersion),
                    };
                    break;
                case 3:
                    r.filter = {
                        oneofKind: "clientOs",
                        clientOs: eS.internalBinaryRead(e, e.uint32(), n, r.filter.clientOs),
                    };
                    break;
                case 4:
                    r.filter = { oneofKind: "staff", staff: z.internalBinaryRead(e, e.uint32(), n, r.filter.staff) };
                    break;
                case 5:
                    r.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: Z.internalBinaryRead(e, e.uint32(), n, r.filter.userInGuild),
                    };
                    break;
                case 6:
                    r.filter = {
                        oneofKind: "userIds",
                        userIds: Q.internalBinaryRead(e, e.uint32(), n, r.filter.userIds),
                    };
                    break;
                case 7:
                    r.filter = {
                        oneofKind: "clientLocale",
                        clientLocale: en.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocale),
                    };
                    break;
                case 8:
                    r.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: es.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocation),
                    };
                    break;
                case 9:
                    r.filter = {
                        oneofKind: "clientIp",
                        clientIp: ep.internalBinaryRead(e, e.uint32(), n, r.filter.clientIp),
                    };
                    break;
                case 10:
                    r.filter = {
                        oneofKind: "userLocale",
                        userLocale: ee.internalBinaryRead(e, e.uint32(), n, r.filter.userLocale),
                    };
                    break;
                case 11:
                    r.filter = { oneofKind: "bot", bot: eW.internalBinaryRead(e, e.uint32(), n, r.filter.bot) };
                    break;
                case 12:
                    r.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: eK.internalBinaryRead(e, e.uint32(), n, r.filter.userAgeRange),
                    };
                    break;
                case 13:
                    r.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eZ.internalBinaryRead(e, e.uint32(), n, r.filter.userIdRange),
                    };
                    break;
                case 14:
                    r.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: eQ.internalBinaryRead(e, e.uint32(), n, r.filter.userHasFlag),
                    };
                    break;
                case 15:
                    r.filter = {
                        oneofKind: "unitIdInRangeByHash",
                        unitIdInRangeByHash: e0.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInRangeByHash),
                    };
                    break;
                case 16:
                    r.filter = {
                        oneofKind: "clientReleaseChannel",
                        clientReleaseChannel: e2.internalBinaryRead(e, e.uint32(), n, r.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    r.filter = {
                        oneofKind: "always",
                        always: e5.internalBinaryRead(e, e.uint32(), n, r.filter.always),
                    };
                    break;
                case 18:
                    r.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: er.internalBinaryRead(e, e.uint32(), n, r.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    r.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: e4.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    r.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: e8.internalBinaryRead(e, e.uint32(), n, r.filter.userPremiumType),
                    };
                    break;
                case 21:
                    r.filter = {
                        oneofKind: "unitIdMatchesFilterSnapshot",
                        unitIdMatchesFilterSnapshot: te.internalBinaryRead(
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
                        guildIds: tn.internalBinaryRead(e, e.uint32(), n, r.filter.guildIds),
                    };
                    break;
                case 23:
                    r.filter = {
                        oneofKind: "guildIdRange",
                        guildIdRange: ts.internalBinaryRead(e, e.uint32(), n, r.filter.guildIdRange),
                    };
                    break;
                case 25:
                    r.filter = {
                        oneofKind: "guildMemberCountRange",
                        guildMemberCountRange: tr.internalBinaryRead(e, e.uint32(), n, r.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    r.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: to.internalBinaryRead(e, e.uint32(), n, r.filter.guildHasFeature),
                    };
                    break;
                case 27:
                    r.filter = {
                        oneofKind: "userLocation",
                        userLocation: eA.internalBinaryRead(e, e.uint32(), n, r.filter.userLocation),
                    };
                    break;
                case 28:
                    r.filter = {
                        oneofKind: "userIp",
                        userIp: em.internalBinaryRead(e, e.uint32(), n, r.filter.userIp),
                    };
                    break;
                case 29:
                    r.filter = {
                        oneofKind: "installationIds",
                        installationIds: tc.internalBinaryRead(e, e.uint32(), n, r.filter.installationIds),
                    };
                    break;
                case 31:
                    r.filter = {
                        oneofKind: "userStoreCountry",
                        userStoreCountry: eI.internalBinaryRead(e, e.uint32(), n, r.filter.userStoreCountry),
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "clientVersion" === e.filter.oneofKind &&
            eM.internalBinaryWrite(e.filter.clientVersion, t.tag(2, T.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                eS.internalBinaryWrite(e.filter.clientOs, t.tag(3, T.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                z.internalBinaryWrite(e.filter.staff, t.tag(4, T.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                Z.internalBinaryWrite(e.filter.userInGuild, t.tag(5, T.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                Q.internalBinaryWrite(e.filter.userIds, t.tag(6, T.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                en.internalBinaryWrite(e.filter.clientLocale, t.tag(7, T.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                es.internalBinaryWrite(e.filter.clientLocation, t.tag(8, T.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                ep.internalBinaryWrite(e.filter.clientIp, t.tag(9, T.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                ee.internalBinaryWrite(e.filter.userLocale, t.tag(10, T.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                eW.internalBinaryWrite(e.filter.bot, t.tag(11, T.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                eK.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, T.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eZ.internalBinaryWrite(e.filter.userIdRange, t.tag(13, T.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                eQ.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, T.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                e0.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, T.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                e2.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, T.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                e5.internalBinaryWrite(e.filter.always, t.tag(17, T.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                er.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, T.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                e4.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, T.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                e8.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, T.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                te
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, T.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                tn.internalBinaryWrite(e.filter.guildIds, t.tag(22, T.O0.LengthDelimited).fork(), n).join(),
            "guildIdRange" === e.filter.oneofKind &&
                ts.internalBinaryWrite(e.filter.guildIdRange, t.tag(23, T.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                tr
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, T.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                to.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, T.O0.LengthDelimited).fork(), n).join(),
            "userLocation" === e.filter.oneofKind &&
                eA.internalBinaryWrite(e.filter.userLocation, t.tag(27, T.O0.LengthDelimited).fork(), n).join(),
            "userIp" === e.filter.oneofKind &&
                em.internalBinaryWrite(e.filter.userIp, t.tag(28, T.O0.LengthDelimited).fork(), n).join(),
            "installationIds" === e.filter.oneofKind &&
                tc.internalBinaryWrite(e.filter.installationIds, t.tag(29, T.O0.LengthDelimited).fork(), n).join(),
            "userStoreCountry" === e.filter.oneofKind &&
                eI.internalBinaryWrite(e.filter.userStoreCountry, t.tag(31, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.negate && t.tag(30, T.O0.Varint).bool(e.negate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let K = new Y();
class $ extends S.G {
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.workAccounts && t.tag(1, T.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, T.O0.Varint).bool(e.personalAccounts);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let z = new $();
class q extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === T.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Z = new q();
class X extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === T.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.userIds.push(e.fixed64().toString());
                else r.userIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new X();
class J extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ee = new J();
class et extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let en = new et();
class ei extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let er = new ei();
class ea extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => e_ }],
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.locations.push(e_.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            e_.internalBinaryWrite(e.locations[i], t.tag(1, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let es = new ea();
class el extends S.G {
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.city && t.tag(1, T.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, T.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, T.O0.LengthDelimited).string(e.country);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eo = new el();
class ed extends S.G {
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.isoCountry && t.tag(1, T.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, T.O0.LengthDelimited).string(e.isoSubdivision);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ec = new ed();
class eu extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => ec },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => eo },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.location = {
                        oneofKind: "isoRegion",
                        isoRegion: ec.internalBinaryRead(e, e.uint32(), n, r.location.isoRegion),
                    };
                    break;
                case 2:
                    r.location = { oneofKind: "isEu", isEu: e.bool() };
                    break;
                case 3:
                    r.location = {
                        oneofKind: "place",
                        place: eo.internalBinaryRead(e, e.uint32(), n, r.location.place),
                    };
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "isoRegion" === e.location.oneofKind &&
            ec.internalBinaryWrite(e.location.isoRegion, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, T.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                eo.internalBinaryWrite(e.location.place, t.tag(3, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e_ = new eu();
class eE extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocation",
            [
                { no: 1, name: "locations", kind: "message", repeat: 1, T: () => e_ },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.locations.push(e_.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            e_.internalBinaryWrite(e.locations[i], t.tag(1, T.O0.LengthDelimited).fork(), n).join();
        !1 !== e.preferClientIp && t.tag(2, T.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eA = new eE();
class eh extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserStoreCountry",
            [{ no: 1, name: "iso_countries", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { isoCountries: [] };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.isoCountries.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.isoCountries.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.isoCountries[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eI = new eh();
class ef extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.blocks.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ep = new ef();
class eT extends S.G {
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.blocks[n]);
        !1 !== e.preferClientIp && t.tag(2, T.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let em = new eT();
class eg extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => eC },
                { no: 2, name: "android_version", kind: "message", T: () => eC },
                { no: 3, name: "macos_version", kind: "message", T: () => eC },
                { no: 4, name: "windows_version", kind: "message", T: () => eC },
                { no: 5, name: "playstation_version", kind: "message", T: () => eC },
                { no: 6, name: "xbox_version", kind: "message", T: () => eC },
                { no: 7, name: "linux_version", kind: "message", T: () => eC },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.iosVersion = eC.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = eC.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.macosVersion = eC.internalBinaryRead(e, e.uint32(), n, r.macosVersion);
                    break;
                case 4:
                    r.windowsVersion = eC.internalBinaryRead(e, e.uint32(), n, r.windowsVersion);
                    break;
                case 5:
                    r.playstationVersion = eC.internalBinaryRead(e, e.uint32(), n, r.playstationVersion);
                    break;
                case 6:
                    r.xboxVersion = eC.internalBinaryRead(e, e.uint32(), n, r.xboxVersion);
                    break;
                case 7:
                    r.linuxVersion = eC.internalBinaryRead(e, e.uint32(), n, r.linuxVersion);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && eC.internalBinaryWrite(e.iosVersion, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                eC.internalBinaryWrite(e.androidVersion, t.tag(2, T.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && eC.internalBinaryWrite(e.macosVersion, t.tag(3, T.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                eC.internalBinaryWrite(e.windowsVersion, t.tag(4, T.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                eC.internalBinaryWrite(e.playstationVersion, t.tag(5, T.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && eC.internalBinaryWrite(e.xboxVersion, t.tag(6, T.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && eC.internalBinaryWrite(e.linuxVersion, t.tag(7, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eS = new eg();
class eN extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => eR },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.ranges.push(eR.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            eR.internalBinaryWrite(e.ranges[i], t.tag(1, T.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, T.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eC = new eN();
class eO extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => ey },
            { no: 2, name: "upper_bound", kind: "message", T: () => ey },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lowerBound = ey.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = ey.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && ey.internalBinaryWrite(e.lowerBound, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && ey.internalBinaryWrite(e.upperBound, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eR = new eO();
class eL extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => ev },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.version = ev.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && ev.internalBinaryWrite(e.version, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, T.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ey = new eL();
class eD extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.version = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, T.O0.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ev = new eD();
class eb extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => eU },
                { no: 2, name: "android_version", kind: "message", T: () => eU },
                { no: 3, name: "web_version", kind: "message", T: () => eU },
                { no: 4, name: "native_version", kind: "message", T: () => eU },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => eH },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.iosVersion = eU.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = eU.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.webVersion = eU.internalBinaryRead(e, e.uint32(), n, r.webVersion);
                    break;
                case 4:
                    r.nativeVersion = eU.internalBinaryRead(e, e.uint32(), n, r.nativeVersion);
                    break;
                case 6:
                    r.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    r.clientRequiredChanges = eH.internalBinaryRead(e, e.uint32(), n, r.clientRequiredChanges);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && eU.internalBinaryWrite(e.iosVersion, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                eU.internalBinaryWrite(e.androidVersion, t.tag(2, T.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && eU.internalBinaryWrite(e.webVersion, t.tag(3, T.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && eU.internalBinaryWrite(e.nativeVersion, t.tag(4, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, T.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                eH.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eM = new eb();
class eP extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => eG },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.ranges.push(eG.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            eG.internalBinaryWrite(e.ranges[i], t.tag(1, T.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, T.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eU = new eP();
class ew extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => ek },
            { no: 2, name: "upper_bound", kind: "message", T: () => ek },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lowerBound = ek.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = ek.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && ek.internalBinaryWrite(e.lowerBound, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && ek.internalBinaryWrite(e.upperBound, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eG = new ew();
class ex extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eV },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.version = eV.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.version && eV.internalBinaryWrite(e.version, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, T.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ek = new ex();
class eF extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [
            { no: 1, name: "major", kind: "scalar", T: 13 },
            { no: 2, name: "minor", kind: "message", T: () => k.ZQ },
            { no: 3, name: "build", kind: "message", T: () => k.ol },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.major = e.uint32();
                    break;
                case 2:
                    r.minor = k.ZQ.internalBinaryRead(e, e.uint32(), n, r.minor);
                    break;
                case 3:
                    r.build = k.ol.internalBinaryRead(e, e.uint32(), n, r.build);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.major && t.tag(1, T.O0.Varint).uint32(e.major),
            e.minor && k.ZQ.internalBinaryWrite(e.minor, t.tag(2, T.O0.LengthDelimited).fork(), n).join(),
            e.build && k.ol.internalBinaryWrite(e.build, t.tag(3, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eV = new eF();
class eB extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.commitHashes.push(e.string());
                    break;
                case 2:
                    if (i === T.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.prNumbers.push(e.int32());
                    else r.prNumbers.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eH = new eB();
class ej extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.isBot = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, T.O0.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eW = new ej();
class eY extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserAgeRange",
            [
                { no: 1, name: "min_age_years", kind: "message", T: () => k.ZQ },
                { no: 2, name: "max_age_years", kind: "message", T: () => k.ZQ },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minAgeYears = k.ZQ.internalBinaryRead(e, e.uint32(), n, r.minAgeYears);
                    break;
                case 2:
                    r.maxAgeYears = k.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxAgeYears);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minAgeYears && k.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && k.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eK = new eY();
class e$ extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, T.O0.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ez = new e$();
class eq extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => ez },
                { no: 2, name: "max_id", kind: "message", T: () => ez },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minId = ez.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = ez.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && ez.internalBinaryWrite(e.minId, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.maxId && ez.internalBinaryWrite(e.maxId, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eZ = new eq();
class eX extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.mask = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.mask && t.tag(1, T.O0.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eQ = new eX();
class eJ extends S.G {
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.hashKey && t.tag(1, T.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, T.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, T.O0.Varint).uint32(e.startRingPosition);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e0 = new eJ();
class e1 extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.releaseChannels.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e2 = new e1();
class e3 extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, T.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e5 = new e3();
class e6 extends S.G {
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
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    if (i === T.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.variationIds.push(e.int32());
                    else r.variationIds.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (("0" !== e.experimentId && t.tag(1, T.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e4 = new e6();
class e7 extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === T.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.premiumTypes.push(e.int32());
                else r.premiumTypes.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.premiumTypes.length) {
            t.tag(1, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e8 = new e7();
class e9 extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.filterSnapshotName = e.string();
                    break;
                case 2:
                    if (i === T.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.targetFilterValues.push(e.fixed64().toString());
                    else r.targetFilterValues.push(e.fixed64().toString());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.filterSnapshotName && t.tag(1, T.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let te = new e9();
class tt extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === T.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tn = new tt();
class ti extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
            [
                { no: 1, name: "min_count", kind: "message", T: () => k.ZQ },
                { no: 2, name: "max_count", kind: "message", T: () => k.ZQ },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minCount = k.ZQ.internalBinaryRead(e, e.uint32(), n, r.minCount);
                    break;
                case 2:
                    r.maxCount = k.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxCount);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minCount && k.ZQ.internalBinaryWrite(e.minCount, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && k.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tr = new ti();
class ta extends S.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIdRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => ez },
                { no: 2, name: "max_id", kind: "message", T: () => ez },
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minId = ez.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = ez.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && ez.internalBinaryWrite(e.minId, t.tag(1, T.O0.LengthDelimited).fork(), n).join(),
            e.maxId && ez.internalBinaryWrite(e.maxId, t.tag(2, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ts = new ta();
class tl extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) r.features.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.features.length; n++) t.tag(1, T.O0.LengthDelimited).string(e.features[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let to = new tl();
class td extends S.G {
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
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === T.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.installationIds.push(e.fixed64().toString());
                else r.installationIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.installationIds.length) {
            t.tag(1, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.installationIds.length; n++) t.fixed64(e.installationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tc = new td();
var tu =
        (((l = {})[(l.EXCLUSIVE = 0)] = "EXCLUSIVE"),
        (l[(l.SYNCED = 1)] = "SYNCED"),
        (l[(l.PRE_ALLOCATED = 2)] = "PRE_ALLOCATED"),
        l),
    t_ =
        (((o = {})[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.USER = 1)] = "USER"),
        (o[(o.INSTALLATION = 2)] = "INSTALLATION"),
        (o[(o.GUILD = 3)] = "GUILD"),
        (o[(o.CUSTOM = 4)] = "CUSTOM"),
        o),
    tE =
        (((d = {})[(d.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
        (d[(d.API = 1)] = "API"),
        (d[(d.APP = 2)] = "APP"),
        (d[(d.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
        (d[(d.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
        (d[(d.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
        (d[(d.AV_WORKER = 6)] = "AV_WORKER"),
        (d[(d.SEO = 7)] = "SEO"),
        (d[(d.MARKETING = 8)] = "MARKETING"),
        d),
    tA = (((c = {})[(c.ENABLED = 0)] = "ENABLED"), (c[(c.DISABLED = 1)] = "DISABLED"), c),
    th =
        (((u = {})[(u.FULL = 0)] = "FULL"),
        (u[(u.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
        (u[(u.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
        (u[(u.OFF = 5)] = "OFF"),
        u),
    tI =
        (((_ = {})[(_.DEFAULT = 0)] = "DEFAULT"),
        (_[(_.HOLDOUT = 1)] = "HOLDOUT"),
        (_[(_.NUMBERLINE = 2)] = "NUMBERLINE"),
        _),
    tf =
        (((E = {})[(E.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
        (E[(E.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
        E),
    tp =
        (((A = {})[(A.EXPOSURE_POINT_ID_UNSPECIFIED = 0)] = "EXPOSURE_POINT_ID_UNSPECIFIED"),
        (A[(A.SEO_INSTALLATION_PAGE_LOAD = 1)] = "SEO_INSTALLATION_PAGE_LOAD"),
        (A[(A.MARKETING_INSTALLATION_PAGE_LOAD = 2)] = "MARKETING_INSTALLATION_PAGE_LOAD"),
        A),
    tT =
        (((h = {})[(h.DEFAULT = 0)] = "DEFAULT"),
        (h[(h.OFF = 1)] = "OFF"),
        (h[(h.OVERRIDES_ONLY = 2)] = "OVERRIDES_ONLY"),
        h),
    tm =
        (((I = {})[(I.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (I[(I.CONTROL = 1)] = "CONTROL"),
        (I[(I.TREATMENT = 2)] = "TREATMENT"),
        (I[(I.OVERRIDE = 3)] = "OVERRIDE"),
        I),
    tg =
        (((f = {})[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.ACTIVE = 1)] = "ACTIVE"),
        (f[(f.UNUSED = 2)] = "UNUSED"),
        (f[(f.BURNED = 3)] = "BURNED"),
        (f[(f.PRESERVED = 4)] = "PRESERVED"),
        f),
    tS =
        (((p = {})[(p.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (p[(p.DRAFT = 1)] = "DRAFT"),
        (p[(p.MEASUREMENT = 2)] = "MEASUREMENT"),
        (p[(p.ROLLING_OUT = 4)] = "ROLLING_OUT"),
        (p[(p.ARCHIVED = 6)] = "ARCHIVED"),
        (p[(p.AA_MODE = 7)] = "AA_MODE"),
        (p[(p.PAUSED = 8)] = "PAUSED"),
        p);
class tN extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => N.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => N.D },
            { no: 7, name: "editor_id", kind: "scalar", T: 6 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "description", kind: "scalar", T: 9 },
            { no: 10, name: "hypothesis", kind: "message", T: () => k.hU },
            { no: 11, name: "tech_spec_link", kind: "message", T: () => k.hU },
            { no: 12, name: "revision", kind: "scalar", T: 5 },
            { no: 13, name: "hash_key", kind: "scalar", T: 9 },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", t_],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => tL },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => H },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", tS] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", tE],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", tA],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", th],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 46, name: "dynamic_config_size_limit_override", kind: "message", T: () => k.as },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", tI],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => tb },
            { no: 31, name: "expected_end_date", kind: "message", T: () => N.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 44, name: "suppress_editor_mention", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => N.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => k.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", tf],
            },
            {
                no: 45,
                name: "exposure_points",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposurePointId", tp],
            },
            { no: 47, name: "dynamic_config_model", kind: "scalar", T: 9 },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
            { no: 39, name: "is_managed", kind: "scalar", T: 8 },
            { no: 43, name: "number_line_settings", kind: "message", T: () => tO },
            {
                no: 42,
                name: "eligibility_persistence",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence",
                    tT,
                    "ELIGIBILITY_PERSISTENCE_",
                ],
            },
            { no: 48, name: "lifecycle_plan", kind: "message", T: () => b },
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
            dynamicConfigModel: "",
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
                    r.createdAt = N.D.internalBinaryRead(e, e.uint32(), n, r.createdAt);
                    break;
                case 4:
                    r.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    r.version = e.int32();
                    break;
                case 6:
                    r.editedAt = N.D.internalBinaryRead(e, e.uint32(), n, r.editedAt);
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
                    r.hypothesis = k.hU.internalBinaryRead(e, e.uint32(), n, r.hypothesis);
                    break;
                case 11:
                    r.techSpecLink = k.hU.internalBinaryRead(e, e.uint32(), n, r.techSpecLink);
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
                    r.variations.push(tL.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    r.rules.push(H.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    r.phase = e.int32();
                    break;
                case 19:
                    if (i === T.O0.LengthDelimited)
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
                    r.dynamicConfigSizeLimitOverride = k.as.internalBinaryRead(
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
                    if (i === T.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.fieldNumbersToCopy.push(e.int32());
                    else r.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    r.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    r.debugConfig = tb.internalBinaryRead(e, e.uint32(), n, r.debugConfig);
                    break;
                case 31:
                    r.expectedEndDate = N.D.internalBinaryRead(e, e.uint32(), n, r.expectedEndDate);
                    break;
                case 32:
                    r.isAutomatedChange = e.bool();
                    break;
                case 44:
                    r.suppressEditorMention = e.bool();
                    break;
                case 33:
                    r.archiveAt = N.D.internalBinaryRead(e, e.uint32(), n, r.archiveAt);
                    break;
                case 35:
                    r.guildExperimentVersion = k.as.internalBinaryRead(e, e.uint32(), n, r.guildExperimentVersion);
                    break;
                case 36:
                    r.customUnitPrefix = e.int32();
                    break;
                case 45:
                    if (i === T.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.exposurePoints.push(e.int32());
                    else r.exposurePoints.push(e.int32());
                    break;
                case 47:
                    r.dynamicConfigModel = e.string();
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
                    r.numberLineSettings = tO.internalBinaryRead(e, e.uint32(), n, r.numberLineSettings);
                    break;
                case 42:
                    r.eligibilityPersistence = e.int32();
                    break;
                case 48:
                    r.lifecyclePlan = b.internalBinaryRead(e, e.uint32(), n, r.lifecyclePlan);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, T.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, T.O0.LengthDelimited).string(e.name),
            e.createdAt && N.D.internalBinaryWrite(e.createdAt, t.tag(3, T.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, T.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, T.O0.Varint).int32(e.version),
            e.editedAt && N.D.internalBinaryWrite(e.editedAt, t.tag(6, T.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, T.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, T.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, T.O0.LengthDelimited).string(e.description),
            e.hypothesis && k.hU.internalBinaryWrite(e.hypothesis, t.tag(10, T.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                k.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, T.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, T.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, T.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, T.O0.Varint).int32(e.unitType);
        for (let i = 0; i < e.variations.length; i++)
            tL.internalBinaryWrite(e.variations[i], t.tag(15, T.O0.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            H.internalBinaryWrite(e.rules[i], t.tag(16, T.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, T.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, T.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, T.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, T.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, T.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, T.O0.Varint).bool(e.enableEditRawJsonUi),
            e.dynamicConfigSizeLimitOverride &&
                k.as
                    .internalBinaryWrite(e.dynamicConfigSizeLimitOverride, t.tag(46, T.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.winningVariationId && t.tag(24, T.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, T.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, T.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, T.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, T.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        if (
            (e.debugConfig && tb.internalBinaryWrite(e.debugConfig, t.tag(30, T.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                N.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, T.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, T.O0.Varint).bool(e.isAutomatedChange),
            !1 !== e.suppressEditorMention && t.tag(44, T.O0.Varint).bool(e.suppressEditorMention),
            e.archiveAt && N.D.internalBinaryWrite(e.archiveAt, t.tag(33, T.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                k.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, T.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, T.O0.Varint).int32(e.customUnitPrefix),
            e.exposurePoints.length)
        ) {
            t.tag(45, T.O0.LengthDelimited).fork();
            for (let n = 0; n < e.exposurePoints.length; n++) t.int32(e.exposurePoints[n]);
            t.join();
        }
        "" !== e.dynamicConfigModel && t.tag(47, T.O0.LengthDelimited).string(e.dynamicConfigModel);
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, T.O0.LengthDelimited).string(e.growthbookTags[n]);
        !1 !== e.allocateRightToLeft && t.tag(38, T.O0.Varint).bool(e.allocateRightToLeft),
            !1 !== e.isManaged && t.tag(39, T.O0.Varint).bool(e.isManaged),
            e.numberLineSettings &&
                tO.internalBinaryWrite(e.numberLineSettings, t.tag(43, T.O0.LengthDelimited).fork(), n).join(),
            0 !== e.eligibilityPersistence && t.tag(42, T.O0.Varint).int32(e.eligibilityPersistence),
            e.lifecyclePlan && b.internalBinaryWrite(e.lifecyclePlan, t.tag(48, T.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new tN();
class tC extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", [
            {
                no: 1,
                name: "mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", tu],
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.mode && t.tag(1, T.O0.Varint).int32(e.mode),
            "0" !== e.linkedId && t.tag(2, T.O0.Bit64).fixed64(e.linkedId),
            !1 !== e.sharedControl && t.tag(3, T.O0.Varint).bool(e.sharedControl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tO = new tC();
class tR extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            { no: 1, name: "id", kind: "scalar", T: 5 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
            { no: 4, name: "buckets", kind: "message", repeat: 1, T: () => tD },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", tm],
            },
            { no: 6, name: "configuration", kind: "message", T: () => k.hU },
            { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0, owningExperimentId: "0" };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    r.buckets.push(tD.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    r.type = e.int32();
                    break;
                case 6:
                    r.configuration = k.hU.internalBinaryRead(e, e.uint32(), n, r.configuration);
                    break;
                case 7:
                    r.owningExperimentId = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.id && t.tag(1, T.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, T.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, T.O0.Varint).int32(e.targetAllocation);
        for (let i = 0; i < e.buckets.length; i++)
            tD.internalBinaryWrite(e.buckets[i], t.tag(4, T.O0.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, T.O0.Varint).int32(e.type),
            e.configuration &&
                k.hU.internalBinaryWrite(e.configuration, t.tag(6, T.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.owningExperimentId && t.tag(7, T.O0.Bit64).fixed64(e.owningExperimentId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tL = new tR();
class ty extends S.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", tg],
            },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0 };
        return (
            globalThis.Object.defineProperty(t, g.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, m.x)(this, t, e),
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.start && t.tag(1, T.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, T.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, T.O0.Varint).int32(e.type);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tD = new ty();
class tv extends S.G {
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
                    !1 !== a && (!0 === a ? T.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.enableDecisionLogging && t.tag(1, T.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, T.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, T.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, T.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, T.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, T.O0.Bit64).double(e.decisionLogSampleRate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? T.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let tb = new tv();
