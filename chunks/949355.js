"use strict";
n.d(t, { FZ: () => m, Um: () => d }), n(321073);
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(406935),
    l = n(21953),
    u = n(335871),
    c = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.USER = 1)] = "USER"),
            (e[(e.INSTALLATION = 2)] = "INSTALLATION"),
            (e[(e.GUILD = 3)] = "GUILD"),
            (e[(e.CUSTOM = 4)] = "CUSTOM"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e[(e.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
            (e[(e.API = 1)] = "API"),
            (e[(e.APP = 2)] = "APP"),
            (e[(e.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
            (e[(e.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
            (e[(e.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
            (e[(e.AV_WORKER = 6)] = "AV_WORKER"),
            (e[(e.SEO = 7)] = "SEO"),
            e
        );
    })({}),
    _ = (function (e) {
        return (e[(e.ENABLED = 0)] = "ENABLED"), (e[(e.DISABLED = 1)] = "DISABLED"), e;
    })({}),
    f = (function (e) {
        return (
            (e[(e.FULL = 0)] = "FULL"),
            (e[(e.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
            (e[(e.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
            (e[(e.OFF = 5)] = "OFF"),
            e
        );
    })({}),
    p = (function (e) {
        return (e[(e.DEFAULT = 0)] = "DEFAULT"), (e[(e.HOLDOUT = 1)] = "HOLDOUT"), e;
    })({}),
    h = (function (e) {
        return (
            (e[(e.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
            (e[(e.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.CONTROL = 1)] = "CONTROL"),
            (e[(e.TREATMENT = 2)] = "TREATMENT"),
            (e[(e.OVERRIDE = 3)] = "OVERRIDE"),
            e
        );
    })({}),
    E = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.ACTIVE = 1)] = "ACTIVE"),
            (e[(e.UNUSED = 2)] = "UNUSED"),
            (e[(e.BURNED = 3)] = "BURNED"),
            (e[(e.PRESERVED = 4)] = "PRESERVED"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.DRAFT = 1)] = "DRAFT"),
            (e[(e.MEASUREMENT = 2)] = "MEASUREMENT"),
            (e[(e.ROLLING_OUT = 4)] = "ROLLING_OUT"),
            (e[(e.ARCHIVED = 6)] = "ARCHIVED"),
            (e[(e.AA_MODE = 7)] = "AA_MODE"),
            e
        );
    })({});
class A extends a.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => u.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => u.D },
            { no: 7, name: "editor_id", kind: "scalar", T: 6 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "description", kind: "scalar", T: 9 },
            { no: 10, name: "hypothesis", kind: "message", T: () => o.hU },
            { no: 11, name: "tech_spec_link", kind: "message", T: () => o.hU },
            { no: 12, name: "revision", kind: "scalar", T: 5 },
            { no: 13, name: "hash_key", kind: "scalar", T: 9 },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", c],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => T },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => l.jO },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", g] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", d],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", _],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", f],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", p],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => N },
            { no: 31, name: "expected_end_date", kind: "message", T: () => u.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => u.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => o.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", h],
            },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
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
        };
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
                    s.name = e.string();
                    break;
                case 3:
                    s.createdAt = u.D.internalBinaryRead(e, e.uint32(), n, s.createdAt);
                    break;
                case 4:
                    s.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    s.version = e.int32();
                    break;
                case 6:
                    s.editedAt = u.D.internalBinaryRead(e, e.uint32(), n, s.editedAt);
                    break;
                case 7:
                    s.editorId = e.fixed64().toString();
                    break;
                case 8:
                    s.title = e.string();
                    break;
                case 9:
                    s.description = e.string();
                    break;
                case 10:
                    s.hypothesis = o.hU.internalBinaryRead(e, e.uint32(), n, s.hypothesis);
                    break;
                case 11:
                    s.techSpecLink = o.hU.internalBinaryRead(e, e.uint32(), n, s.techSpecLink);
                    break;
                case 12:
                    s.revision = e.int32();
                    break;
                case 13:
                    s.hashKey = e.string();
                    break;
                case 14:
                    s.unitType = e.int32();
                    break;
                case 15:
                    s.variations.push(T.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    s.rules.push(l.jO.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    s.phase = e.int32();
                    break;
                case 19:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.surfaces.push(e.int32());
                    else s.surfaces.push(e.int32());
                    break;
                case 20:
                    s.owningTeamId = e.string();
                    break;
                case 21:
                    s.cachedNotificationChannelId = e.fixed64().toString();
                    break;
                case 22:
                    s.exposureTracking = e.int32();
                    break;
                case 25:
                    s.assignmentMode = e.int32();
                    break;
                case 23:
                    s.enableEditRawJsonUi = e.bool();
                    break;
                case 24:
                    s.winningVariationId = e.int32();
                    break;
                case 34:
                    s.extraOutcomeContext = e.string();
                    break;
                case 26:
                    s.type = e.int32();
                    break;
                case 27:
                    s.isTemplate = e.bool();
                    break;
                case 28:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.fieldNumbersToCopy.push(e.int32());
                    else s.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    s.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    s.debugConfig = N.internalBinaryRead(e, e.uint32(), n, s.debugConfig);
                    break;
                case 31:
                    s.expectedEndDate = u.D.internalBinaryRead(e, e.uint32(), n, s.expectedEndDate);
                    break;
                case 32:
                    s.isAutomatedChange = e.bool();
                    break;
                case 33:
                    s.archiveAt = u.D.internalBinaryRead(e, e.uint32(), n, s.archiveAt);
                    break;
                case 35:
                    s.guildExperimentVersion = o.as.internalBinaryRead(e, e.uint32(), n, s.guildExperimentVersion);
                    break;
                case 36:
                    s.customUnitPrefix = e.int32();
                    break;
                case 37:
                    s.growthbookTags.push(e.string());
                    break;
                case 38:
                    s.allocateRightToLeft = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let c = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, c);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, r.O0.LengthDelimited).string(e.name),
            e.createdAt && u.D.internalBinaryWrite(e.createdAt, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, r.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, r.O0.Varint).int32(e.version),
            e.editedAt && u.D.internalBinaryWrite(e.editedAt, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, r.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, r.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, r.O0.LengthDelimited).string(e.description),
            e.hypothesis && o.hU.internalBinaryWrite(e.hypothesis, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                o.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, r.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, r.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, r.O0.Varint).int32(e.unitType);
        for (let i = 0; i < e.variations.length; i++)
            T.internalBinaryWrite(e.variations[i], t.tag(15, r.O0.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            l.jO.internalBinaryWrite(e.rules[i], t.tag(16, r.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, r.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, r.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, r.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, r.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, r.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, r.O0.Varint).bool(e.enableEditRawJsonUi),
            0 !== e.winningVariationId && t.tag(24, r.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, r.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, r.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, r.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, r.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        e.debugConfig && N.internalBinaryWrite(e.debugConfig, t.tag(30, r.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                u.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, r.O0.Varint).bool(e.isAutomatedChange),
            e.archiveAt && u.D.internalBinaryWrite(e.archiveAt, t.tag(33, r.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                o.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, r.O0.Varint).int32(e.customUnitPrefix);
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, r.O0.LengthDelimited).string(e.growthbookTags[n]);
        !1 !== e.allocateRightToLeft && t.tag(38, r.O0.Varint).bool(e.allocateRightToLeft);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new A();
class I extends a.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            { no: 1, name: "id", kind: "scalar", T: 5 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
            { no: 4, name: "buckets", kind: "message", repeat: 1, T: () => y },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", m],
            },
            { no: 6, name: "configuration", kind: "message", T: () => o.hU },
        ]);
    }
    create(e) {
        let t = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0 };
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
                    s.id = e.int32();
                    break;
                case 2:
                    s.label = e.string();
                    break;
                case 3:
                    s.targetAllocation = e.int32();
                    break;
                case 4:
                    s.buckets.push(y.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    s.type = e.int32();
                    break;
                case 6:
                    s.configuration = o.hU.internalBinaryRead(e, e.uint32(), n, s.configuration);
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
        0 !== e.id && t.tag(1, r.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, r.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, r.O0.Varint).int32(e.targetAllocation);
        for (let i = 0; i < e.buckets.length; i++)
            y.internalBinaryWrite(e.buckets[i], t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, r.O0.Varint).int32(e.type),
            e.configuration &&
                o.hU.internalBinaryWrite(e.configuration, t.tag(6, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let T = new I();
class S extends a.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", E],
            },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0 };
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
                    s.start = e.int32();
                    break;
                case 2:
                    s.stop = e.int32();
                    break;
                case 3:
                    s.type = e.int32();
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
        0 !== e.start && t.tag(1, r.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, r.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, r.O0.Varint).int32(e.type);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let y = new S();
class v extends a.G {
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
                    s.enableDecisionLogging = e.bool();
                    break;
                case 2:
                    s.metricsSampleRate = e.double();
                    break;
                case 3:
                    s.logContextOnFailure = e.bool();
                    break;
                case 4:
                    s.logRawHeaders = e.bool();
                    break;
                case 5:
                    s.tagFilterMetrics = e.bool();
                    break;
                case 6:
                    s.decisionLogSampleRate = e.double();
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
        !1 !== e.enableDecisionLogging && t.tag(1, r.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, r.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, r.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, r.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, r.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, r.O0.Bit64).double(e.decisionLogSampleRate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let N = new v();
