"use strict";
n.d(t, { FZ: () => v, Um: () => I }), n(321073);
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    c,
    d,
    _ = n(852015),
    f = n(144367),
    p = n(428420),
    h = n(324281),
    E = n(406935),
    m = n(21953),
    g = n(335871),
    A =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.USER = 1)] = "USER"),
        (r[(r.INSTALLATION = 2)] = "INSTALLATION"),
        (r[(r.GUILD = 3)] = "GUILD"),
        (r[(r.CUSTOM = 4)] = "CUSTOM"),
        r),
    I =
        (((i = {})[(i.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
        (i[(i.API = 1)] = "API"),
        (i[(i.APP = 2)] = "APP"),
        (i[(i.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
        (i[(i.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
        (i[(i.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
        (i[(i.AV_WORKER = 6)] = "AV_WORKER"),
        (i[(i.SEO = 7)] = "SEO"),
        i),
    T = (((s = {})[(s.ENABLED = 0)] = "ENABLED"), (s[(s.DISABLED = 1)] = "DISABLED"), s),
    S =
        (((a = {})[(a.FULL = 0)] = "FULL"),
        (a[(a.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
        (a[(a.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
        (a[(a.OFF = 5)] = "OFF"),
        a),
    y = (((o = {})[(o.DEFAULT = 0)] = "DEFAULT"), (o[(o.HOLDOUT = 1)] = "HOLDOUT"), o),
    N =
        (((l = {})[(l.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
        (l[(l.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
        l),
    v =
        (((u = {})[(u.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (u[(u.CONTROL = 1)] = "CONTROL"),
        (u[(u.TREATMENT = 2)] = "TREATMENT"),
        (u[(u.OVERRIDE = 3)] = "OVERRIDE"),
        u),
    C =
        (((c = {})[(c.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (c[(c.ACTIVE = 1)] = "ACTIVE"),
        (c[(c.UNUSED = 2)] = "UNUSED"),
        (c[(c.BURNED = 3)] = "BURNED"),
        (c[(c.PRESERVED = 4)] = "PRESERVED"),
        c),
    O =
        (((d = {})[(d.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (d[(d.DRAFT = 1)] = "DRAFT"),
        (d[(d.MEASUREMENT = 2)] = "MEASUREMENT"),
        (d[(d.ROLLING_OUT = 4)] = "ROLLING_OUT"),
        (d[(d.ARCHIVED = 6)] = "ARCHIVED"),
        (d[(d.AA_MODE = 7)] = "AA_MODE"),
        d);
class R extends h.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => g.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => g.D },
            { no: 7, name: "editor_id", kind: "scalar", T: 6 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "description", kind: "scalar", T: 9 },
            { no: 10, name: "hypothesis", kind: "message", T: () => E.hU },
            { no: 11, name: "tech_spec_link", kind: "message", T: () => E.hU },
            { no: 12, name: "revision", kind: "scalar", T: 5 },
            { no: 13, name: "hash_key", kind: "scalar", T: 9 },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", A],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => D },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => m.jO },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", O] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", I],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", T],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", S],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", y],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => P },
            { no: 31, name: "expected_end_date", kind: "message", T: () => g.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => g.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => E.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", N],
            },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
            { no: 39, name: "is_managed", kind: "scalar", T: 8 },
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
        };
        return (
            globalThis.Object.defineProperty(t, p.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, f.x)(this, t, e),
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
                    i.name = e.string();
                    break;
                case 3:
                    i.createdAt = g.D.internalBinaryRead(e, e.uint32(), n, i.createdAt);
                    break;
                case 4:
                    i.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    i.version = e.int32();
                    break;
                case 6:
                    i.editedAt = g.D.internalBinaryRead(e, e.uint32(), n, i.editedAt);
                    break;
                case 7:
                    i.editorId = e.fixed64().toString();
                    break;
                case 8:
                    i.title = e.string();
                    break;
                case 9:
                    i.description = e.string();
                    break;
                case 10:
                    i.hypothesis = E.hU.internalBinaryRead(e, e.uint32(), n, i.hypothesis);
                    break;
                case 11:
                    i.techSpecLink = E.hU.internalBinaryRead(e, e.uint32(), n, i.techSpecLink);
                    break;
                case 12:
                    i.revision = e.int32();
                    break;
                case 13:
                    i.hashKey = e.string();
                    break;
                case 14:
                    i.unitType = e.int32();
                    break;
                case 15:
                    i.variations.push(D.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    i.rules.push(m.jO.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    i.phase = e.int32();
                    break;
                case 19:
                    if (r === _.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.surfaces.push(e.int32());
                    else i.surfaces.push(e.int32());
                    break;
                case 20:
                    i.owningTeamId = e.string();
                    break;
                case 21:
                    i.cachedNotificationChannelId = e.fixed64().toString();
                    break;
                case 22:
                    i.exposureTracking = e.int32();
                    break;
                case 25:
                    i.assignmentMode = e.int32();
                    break;
                case 23:
                    i.enableEditRawJsonUi = e.bool();
                    break;
                case 24:
                    i.winningVariationId = e.int32();
                    break;
                case 34:
                    i.extraOutcomeContext = e.string();
                    break;
                case 26:
                    i.type = e.int32();
                    break;
                case 27:
                    i.isTemplate = e.bool();
                    break;
                case 28:
                    if (r === _.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.fieldNumbersToCopy.push(e.int32());
                    else i.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    i.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    i.debugConfig = P.internalBinaryRead(e, e.uint32(), n, i.debugConfig);
                    break;
                case 31:
                    i.expectedEndDate = g.D.internalBinaryRead(e, e.uint32(), n, i.expectedEndDate);
                    break;
                case 32:
                    i.isAutomatedChange = e.bool();
                    break;
                case 33:
                    i.archiveAt = g.D.internalBinaryRead(e, e.uint32(), n, i.archiveAt);
                    break;
                case 35:
                    i.guildExperimentVersion = E.as.internalBinaryRead(e, e.uint32(), n, i.guildExperimentVersion);
                    break;
                case 36:
                    i.customUnitPrefix = e.int32();
                    break;
                case 37:
                    i.growthbookTags.push(e.string());
                    break;
                case 38:
                    i.allocateRightToLeft = e.bool();
                    break;
                case 39:
                    i.isManaged = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? _.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, _.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, _.O0.LengthDelimited).string(e.name),
            e.createdAt && g.D.internalBinaryWrite(e.createdAt, t.tag(3, _.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, _.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, _.O0.Varint).int32(e.version),
            e.editedAt && g.D.internalBinaryWrite(e.editedAt, t.tag(6, _.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, _.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, _.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, _.O0.LengthDelimited).string(e.description),
            e.hypothesis && E.hU.internalBinaryWrite(e.hypothesis, t.tag(10, _.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                E.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, _.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, _.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, _.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, _.O0.Varint).int32(e.unitType);
        for (let r = 0; r < e.variations.length; r++)
            D.internalBinaryWrite(e.variations[r], t.tag(15, _.O0.LengthDelimited).fork(), n).join();
        for (let r = 0; r < e.rules.length; r++)
            m.jO.internalBinaryWrite(e.rules[r], t.tag(16, _.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, _.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, _.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, _.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, _.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, _.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, _.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, _.O0.Varint).bool(e.enableEditRawJsonUi),
            0 !== e.winningVariationId && t.tag(24, _.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, _.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, _.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, _.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, _.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, _.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        e.debugConfig && P.internalBinaryWrite(e.debugConfig, t.tag(30, _.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                g.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, _.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, _.O0.Varint).bool(e.isAutomatedChange),
            e.archiveAt && g.D.internalBinaryWrite(e.archiveAt, t.tag(33, _.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                E.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, _.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, _.O0.Varint).int32(e.customUnitPrefix);
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, _.O0.LengthDelimited).string(e.growthbookTags[n]);
        !1 !== e.allocateRightToLeft && t.tag(38, _.O0.Varint).bool(e.allocateRightToLeft),
            !1 !== e.isManaged && t.tag(39, _.O0.Varint).bool(e.isManaged);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? _.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new R();
class b extends h.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            { no: 1, name: "id", kind: "scalar", T: 5 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
            { no: 4, name: "buckets", kind: "message", repeat: 1, T: () => w },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", v],
            },
            { no: 6, name: "configuration", kind: "message", T: () => E.hU },
        ]);
    }
    create(e) {
        let t = { id: 0, label: "", targetAllocation: 0, buckets: [], type: 0 };
        return (
            globalThis.Object.defineProperty(t, p.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, f.x)(this, t, e),
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
                    i.id = e.int32();
                    break;
                case 2:
                    i.label = e.string();
                    break;
                case 3:
                    i.targetAllocation = e.int32();
                    break;
                case 4:
                    i.buckets.push(w.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    i.type = e.int32();
                    break;
                case 6:
                    i.configuration = E.hU.internalBinaryRead(e, e.uint32(), n, i.configuration);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? _.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.id && t.tag(1, _.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, _.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, _.O0.Varint).int32(e.targetAllocation);
        for (let r = 0; r < e.buckets.length; r++)
            w.internalBinaryWrite(e.buckets[r], t.tag(4, _.O0.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, _.O0.Varint).int32(e.type),
            e.configuration &&
                E.hU.internalBinaryWrite(e.configuration, t.tag(6, _.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? _.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let D = new b();
class L extends h.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", C],
            },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0 };
        return (
            globalThis.Object.defineProperty(t, p.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, f.x)(this, t, e),
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
                    i.start = e.int32();
                    break;
                case 2:
                    i.stop = e.int32();
                    break;
                case 3:
                    i.type = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? _.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.start && t.tag(1, _.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, _.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, _.O0.Varint).int32(e.type);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? _.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let w = new L();
class M extends h.G {
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
            globalThis.Object.defineProperty(t, p.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, f.x)(this, t, e),
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
                    i.enableDecisionLogging = e.bool();
                    break;
                case 2:
                    i.metricsSampleRate = e.double();
                    break;
                case 3:
                    i.logContextOnFailure = e.bool();
                    break;
                case 4:
                    i.logRawHeaders = e.bool();
                    break;
                case 5:
                    i.tagFilterMetrics = e.bool();
                    break;
                case 6:
                    i.decisionLogSampleRate = e.double();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let a = e.skip(r);
                    !1 !== s && (!0 === s ? _.f$.onRead : s)(this.typeName, i, t, r, a);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.enableDecisionLogging && t.tag(1, _.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, _.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, _.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, _.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, _.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, _.O0.Bit64).double(e.decisionLogSampleRate);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? _.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let P = new M();
