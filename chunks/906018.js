(t.d(n, {
    Pc: () => eW,
    fu: () => ns,
    Oc: () => nx,
    Ig: () => n_,
    bI: () => e8,
    yy: () => ni,
    Ph: () => eU,
    Xd: () => e7,
    u2: () => eD,
    S3: () => eE,
}),
    t(321073));
var i,
    r,
    a,
    o,
    s,
    l = t(852015),
    d = t(144367),
    c = t(428420),
    u = t(505816),
    h = t(406935),
    m = t(991023),
    f =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.CARDS = 1)] = "CARDS"),
        (i[(i.TABLE = 2)] = "TABLE"),
        i),
    k =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.EQ = 1)] = "EQ"),
        (r[(r.GTE = 2)] = "GTE"),
        (r[(r.LTE = 3)] = "LTE"),
        r);
class g extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SurveyDefinition", [
            { no: 1, name: "title", kind: "message", T: () => m.X },
            { no: 2, name: "default_locale", kind: "scalar", T: 9 },
            { no: 3, name: "locales", kind: "scalar", repeat: 2, T: 9 },
            { no: 4, name: "pages", kind: "message", repeat: 1, T: () => b },
            { no: 5, name: "scores", kind: "message", repeat: 1, T: () => ec },
            { no: 6, name: "randomized_page_groups", kind: "message", repeat: 1, T: () => y },
            { no: 7, name: "end_message", kind: "message", T: () => m.X },
            { no: 8, name: "next_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { defaultLocale: "", locales: [], pages: [], scores: [], randomizedPageGroups: [], nextId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.title = m.X.internalBinaryRead(e, e.uint32(), t, r.title);
                    break;
                case 2:
                    r.defaultLocale = e.string();
                    break;
                case 3:
                    r.locales.push(e.string());
                    break;
                case 4:
                    r.pages.push(b.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 5:
                    r.scores.push(ec.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 6:
                    r.randomizedPageGroups.push(y.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 7:
                    r.endMessage = m.X.internalBinaryRead(e, e.uint32(), t, r.endMessage);
                    break;
                case 8:
                    r.nextId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.title && m.X.internalBinaryWrite(e.title, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            "" !== e.defaultLocale && n.tag(2, l.O0.LengthDelimited).string(e.defaultLocale));
        for (let t = 0; t < e.locales.length; t++) n.tag(3, l.O0.LengthDelimited).string(e.locales[t]);
        for (let i = 0; i < e.pages.length; i++)
            b.internalBinaryWrite(e.pages[i], n.tag(4, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.scores.length; i++)
            ec.internalBinaryWrite(e.scores[i], n.tag(5, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.randomizedPageGroups.length; i++)
            y.internalBinaryWrite(e.randomizedPageGroups[i], n.tag(6, l.O0.LengthDelimited).fork(), t).join();
        (e.endMessage && m.X.internalBinaryWrite(e.endMessage, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            0 !== e.nextId && n.tag(8, l.O0.Varint).uint32(e.nextId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
new g();
class p extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.PageGroup", [
            { no: 1, name: "page_ids", kind: "scalar", repeat: 1, T: 13 },
            { no: 2, name: "shown_page_count", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = { pageIds: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    if (i === l.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.pageIds.push(e.uint32());
                    else r.pageIds.push(e.uint32());
                    break;
                case 2:
                    r.shownPageCount = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.shownPageCount);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if (e.pageIds.length) {
            n.tag(1, l.O0.LengthDelimited).fork();
            for (let t = 0; t < e.pageIds.length; t++) n.uint32(e.pageIds[t]);
            n.join();
        }
        e.shownPageCount && h.ZQ.internalBinaryWrite(e.shownPageCount, n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let y = new p();
class w extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Page", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "show_if", kind: "message", T: () => eg },
            { no: 3, name: "end_if", kind: "message", T: () => v },
            { no: 4, name: "questions", kind: "message", oneof: "kind", T: () => $ },
            { no: 5, name: "conjoint", kind: "message", oneof: "kind", T: () => B },
            { no: 6, name: "maxdiff", kind: "message", oneof: "kind", T: () => C },
        ]);
    }
    create(e) {
        let n = { id: 0, kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.showIf = eg.internalBinaryRead(e, e.uint32(), t, r.showIf);
                    break;
                case 3:
                    r.endIf = v.internalBinaryRead(e, e.uint32(), t, r.endIf);
                    break;
                case 4:
                    r.kind = {
                        oneofKind: "questions",
                        questions: $.internalBinaryRead(e, e.uint32(), t, r.kind.questions),
                    };
                    break;
                case 5:
                    r.kind = {
                        oneofKind: "conjoint",
                        conjoint: B.internalBinaryRead(e, e.uint32(), t, r.kind.conjoint),
                    };
                    break;
                case 6:
                    r.kind = { oneofKind: "maxdiff", maxdiff: C.internalBinaryRead(e, e.uint32(), t, r.kind.maxdiff) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            e.showIf && eg.internalBinaryWrite(e.showIf, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            e.endIf && v.internalBinaryWrite(e.endIf, n.tag(3, l.O0.LengthDelimited).fork(), t).join(),
            "questions" === e.kind.oneofKind &&
                $.internalBinaryWrite(e.kind.questions, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            "conjoint" === e.kind.oneofKind &&
                B.internalBinaryWrite(e.kind.conjoint, n.tag(5, l.O0.LengthDelimited).fork(), t).join(),
            "maxdiff" === e.kind.oneofKind &&
                C.internalBinaryWrite(e.kind.maxdiff, n.tag(6, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let b = new w();
class x extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.EndIf", [
            { no: 1, name: "condition", kind: "message", T: () => eg },
            { no: 2, name: "message", kind: "message", T: () => m.X },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.condition = eg.internalBinaryRead(e, e.uint32(), t, r.condition);
                    break;
                case 2:
                    r.message = m.X.internalBinaryRead(e, e.uint32(), t, r.message);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.condition && eg.internalBinaryWrite(e.condition, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            e.message && m.X.internalBinaryWrite(e.message, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let v = new x();
class T extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.QuestionPage", [
            { no: 1, name: "questions", kind: "message", repeat: 1, T: () => S },
            { no: 2, name: "randomize_questions", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { questions: [], randomizeQuestions: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questions.push(S.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.randomizeQuestions = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.questions.length; i++)
            S.internalBinaryWrite(e.questions[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        !1 !== e.randomizeQuestions && n.tag(2, l.O0.Varint).bool(e.randomizeQuestions);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let $ = new T();
class O extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointPage", [
            { no: 1, name: "export_label", kind: "scalar", T: 9 },
            { no: 2, name: "text", kind: "message", T: () => m.X },
            { no: 3, name: "features", kind: "message", repeat: 1, T: () => I },
            { no: 4, name: "task_count", kind: "scalar", T: 13 },
            { no: 5, name: "concepts_per_task", kind: "scalar", T: 13 },
            { no: 6, name: "include_none_option", kind: "scalar", T: 8 },
            { no: 7, name: "exclusions", kind: "message", repeat: 1, T: () => L },
            { no: 8, name: "randomize_feature_order", kind: "scalar", T: 8 },
            {
                no: 9,
                name: "display",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.ConjointDisplay", f, "CONJOINT_DISPLAY_"],
            },
            { no: 10, name: "concept_label", kind: "message", T: () => m.X },
        ]);
    }
    create(e) {
        let n = {
            exportLabel: "",
            features: [],
            taskCount: 0,
            conceptsPerTask: 0,
            includeNoneOption: !1,
            exclusions: [],
            randomizeFeatureOrder: !1,
            display: 0,
        };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.exportLabel = e.string();
                    break;
                case 2:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.features.push(I.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.taskCount = e.uint32();
                    break;
                case 5:
                    r.conceptsPerTask = e.uint32();
                    break;
                case 6:
                    r.includeNoneOption = e.bool();
                    break;
                case 7:
                    r.exclusions.push(L.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 8:
                    r.randomizeFeatureOrder = e.bool();
                    break;
                case 9:
                    r.display = e.int32();
                    break;
                case 10:
                    r.conceptLabel = m.X.internalBinaryRead(e, e.uint32(), t, r.conceptLabel);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.exportLabel && n.tag(1, l.O0.LengthDelimited).string(e.exportLabel),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        for (let i = 0; i < e.features.length; i++)
            I.internalBinaryWrite(e.features[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        (0 !== e.taskCount && n.tag(4, l.O0.Varint).uint32(e.taskCount),
            0 !== e.conceptsPerTask && n.tag(5, l.O0.Varint).uint32(e.conceptsPerTask),
            !1 !== e.includeNoneOption && n.tag(6, l.O0.Varint).bool(e.includeNoneOption));
        for (let i = 0; i < e.exclusions.length; i++)
            L.internalBinaryWrite(e.exclusions[i], n.tag(7, l.O0.LengthDelimited).fork(), t).join();
        (!1 !== e.randomizeFeatureOrder && n.tag(8, l.O0.Varint).bool(e.randomizeFeatureOrder),
            0 !== e.display && n.tag(9, l.O0.Varint).int32(e.display),
            e.conceptLabel &&
                m.X.internalBinaryWrite(e.conceptLabel, n.tag(10, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let B = new O();
class j extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointFeature", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "label", kind: "message", T: () => m.X },
            { no: 3, name: "levels", kind: "message", repeat: 1, T: () => R },
            { no: 4, name: "price_currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { id: 0, levels: [], priceCurrency: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.label = m.X.internalBinaryRead(e, e.uint32(), t, r.label);
                    break;
                case 3:
                    r.levels.push(R.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.priceCurrency = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            e.label && m.X.internalBinaryWrite(e.label, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        for (let i = 0; i < e.levels.length; i++)
            R.internalBinaryWrite(e.levels[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        "" !== e.priceCurrency && n.tag(4, l.O0.LengthDelimited).string(e.priceCurrency);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let I = new j();
class _ extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointLevel", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => m.X },
            { no: 3, name: "image_url", kind: "scalar", T: 9 },
            { no: 4, name: "image_alt_text", kind: "message", T: () => m.X },
            { no: 5, name: "price", kind: "message", T: () => h.$b },
        ]);
    }
    create(e) {
        let n = { id: 0, imageUrl: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.imageUrl = e.string();
                    break;
                case 4:
                    r.imageAltText = m.X.internalBinaryRead(e, e.uint32(), t, r.imageAltText);
                    break;
                case 5:
                    r.price = h.$b.internalBinaryRead(e, e.uint32(), t, r.price);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            "" !== e.imageUrl && n.tag(3, l.O0.LengthDelimited).string(e.imageUrl),
            e.imageAltText && m.X.internalBinaryWrite(e.imageAltText, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            e.price && h.$b.internalBinaryWrite(e.price, n.tag(5, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let R = new _();
class N extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointExclusion", [
            { no: 1, name: "first", kind: "message", T: () => U },
            { no: 2, name: "second", kind: "message", T: () => U },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.first = U.internalBinaryRead(e, e.uint32(), t, r.first);
                    break;
                case 2:
                    r.second = U.internalBinaryRead(e, e.uint32(), t, r.second);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.first && U.internalBinaryWrite(e.first, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            e.second && U.internalBinaryWrite(e.second, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let L = new N();
class W extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.FeatureLevel", [
            { no: 1, name: "feature_id", kind: "scalar", T: 13 },
            { no: 2, name: "level_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { featureId: 0, levelId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.featureId = e.uint32();
                    break;
                case 2:
                    r.levelId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.featureId && n.tag(1, l.O0.Varint).uint32(e.featureId),
            0 !== e.levelId && n.tag(2, l.O0.Varint).uint32(e.levelId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let U = new W();
class D extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffPage", [
            { no: 1, name: "export_label", kind: "scalar", T: 9 },
            { no: 2, name: "text", kind: "message", T: () => m.X },
            { no: 3, name: "items", kind: "message", repeat: 1, T: () => F },
            { no: 4, name: "items_per_set", kind: "scalar", T: 13 },
            { no: 5, name: "set_count", kind: "scalar", T: 13 },
            { no: 6, name: "most_label", kind: "message", T: () => m.X },
            { no: 7, name: "least_label", kind: "message", T: () => m.X },
            { no: 8, name: "anchor_question_text", kind: "message", T: () => m.X },
        ]);
    }
    create(e) {
        let n = { exportLabel: "", items: [], itemsPerSet: 0, setCount: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.exportLabel = e.string();
                    break;
                case 2:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.items.push(F.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.itemsPerSet = e.uint32();
                    break;
                case 5:
                    r.setCount = e.uint32();
                    break;
                case 6:
                    r.mostLabel = m.X.internalBinaryRead(e, e.uint32(), t, r.mostLabel);
                    break;
                case 7:
                    r.leastLabel = m.X.internalBinaryRead(e, e.uint32(), t, r.leastLabel);
                    break;
                case 8:
                    r.anchorQuestionText = m.X.internalBinaryRead(e, e.uint32(), t, r.anchorQuestionText);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.exportLabel && n.tag(1, l.O0.LengthDelimited).string(e.exportLabel),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        for (let i = 0; i < e.items.length; i++)
            F.internalBinaryWrite(e.items[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        (0 !== e.itemsPerSet && n.tag(4, l.O0.Varint).uint32(e.itemsPerSet),
            0 !== e.setCount && n.tag(5, l.O0.Varint).uint32(e.setCount),
            e.mostLabel && m.X.internalBinaryWrite(e.mostLabel, n.tag(6, l.O0.LengthDelimited).fork(), t).join(),
            e.leastLabel && m.X.internalBinaryWrite(e.leastLabel, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            e.anchorQuestionText &&
                m.X.internalBinaryWrite(e.anchorQuestionText, n.tag(8, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let C = new D();
class E extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffItem", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => m.X },
        ]);
    }
    create(e) {
        let n = { id: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let F = new E();
class P extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Question", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "export_label", kind: "scalar", T: 9 },
            { no: 3, name: "text", kind: "message", T: () => m.X },
            { no: 4, name: "required", kind: "scalar", T: 8 },
            { no: 5, name: "show_if", kind: "message", T: () => eg },
            { no: 6, name: "pinned", kind: "scalar", T: 8 },
            { no: 7, name: "single_choice", kind: "message", oneof: "kind", T: () => G },
            { no: 8, name: "dropdown", kind: "message", oneof: "kind", T: () => G },
            { no: 9, name: "multi_choice", kind: "message", oneof: "kind", T: () => X },
            { no: 10, name: "rank", kind: "message", oneof: "kind", T: () => M },
            { no: 11, name: "free_text", kind: "message", oneof: "kind", T: () => ee },
            { no: 12, name: "scale", kind: "message", oneof: "kind", T: () => et },
            { no: 13, name: "matrix", kind: "message", oneof: "kind", T: () => er },
            { no: 14, name: "info", kind: "message", oneof: "kind", T: () => el },
        ]);
    }
    create(e) {
        let n = { id: 0, exportLabel: "", required: !1, pinned: !1, kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.exportLabel = e.string();
                    break;
                case 3:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 4:
                    r.required = e.bool();
                    break;
                case 5:
                    r.showIf = eg.internalBinaryRead(e, e.uint32(), t, r.showIf);
                    break;
                case 6:
                    r.pinned = e.bool();
                    break;
                case 7:
                    r.kind = {
                        oneofKind: "singleChoice",
                        singleChoice: G.internalBinaryRead(e, e.uint32(), t, r.kind.singleChoice),
                    };
                    break;
                case 8:
                    r.kind = {
                        oneofKind: "dropdown",
                        dropdown: G.internalBinaryRead(e, e.uint32(), t, r.kind.dropdown),
                    };
                    break;
                case 9:
                    r.kind = {
                        oneofKind: "multiChoice",
                        multiChoice: X.internalBinaryRead(e, e.uint32(), t, r.kind.multiChoice),
                    };
                    break;
                case 10:
                    r.kind = { oneofKind: "rank", rank: M.internalBinaryRead(e, e.uint32(), t, r.kind.rank) };
                    break;
                case 11:
                    r.kind = {
                        oneofKind: "freeText",
                        freeText: ee.internalBinaryRead(e, e.uint32(), t, r.kind.freeText),
                    };
                    break;
                case 12:
                    r.kind = { oneofKind: "scale", scale: et.internalBinaryRead(e, e.uint32(), t, r.kind.scale) };
                    break;
                case 13:
                    r.kind = { oneofKind: "matrix", matrix: er.internalBinaryRead(e, e.uint32(), t, r.kind.matrix) };
                    break;
                case 14:
                    r.kind = { oneofKind: "info", info: el.internalBinaryRead(e, e.uint32(), t, r.kind.info) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            "" !== e.exportLabel && n.tag(2, l.O0.LengthDelimited).string(e.exportLabel),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(3, l.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.required && n.tag(4, l.O0.Varint).bool(e.required),
            e.showIf && eg.internalBinaryWrite(e.showIf, n.tag(5, l.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.pinned && n.tag(6, l.O0.Varint).bool(e.pinned),
            "singleChoice" === e.kind.oneofKind &&
                G.internalBinaryWrite(e.kind.singleChoice, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            "dropdown" === e.kind.oneofKind &&
                G.internalBinaryWrite(e.kind.dropdown, n.tag(8, l.O0.LengthDelimited).fork(), t).join(),
            "multiChoice" === e.kind.oneofKind &&
                X.internalBinaryWrite(e.kind.multiChoice, n.tag(9, l.O0.LengthDelimited).fork(), t).join(),
            "rank" === e.kind.oneofKind &&
                M.internalBinaryWrite(e.kind.rank, n.tag(10, l.O0.LengthDelimited).fork(), t).join(),
            "freeText" === e.kind.oneofKind &&
                ee.internalBinaryWrite(e.kind.freeText, n.tag(11, l.O0.LengthDelimited).fork(), t).join(),
            "scale" === e.kind.oneofKind &&
                et.internalBinaryWrite(e.kind.scale, n.tag(12, l.O0.LengthDelimited).fork(), t).join(),
            "matrix" === e.kind.oneofKind &&
                er.internalBinaryWrite(e.kind.matrix, n.tag(13, l.O0.LengthDelimited).fork(), t).join(),
            "info" === e.kind.oneofKind &&
                el.internalBinaryWrite(e.kind.info, n.tag(14, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let S = new P();
class K extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ChoiceSource", [
            { no: 1, name: "choices", kind: "message", repeat: 1, T: () => H },
            { no: 2, name: "choices_from", kind: "message", T: () => z },
            { no: 3, name: "extra_choices", kind: "message", repeat: 1, T: () => H },
            { no: 4, name: "randomize_choices", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { choices: [], extraChoices: [], randomizeChoices: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choices.push(H.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.choicesFrom = z.internalBinaryRead(e, e.uint32(), t, r.choicesFrom);
                    break;
                case 3:
                    r.extraChoices.push(H.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.randomizeChoices = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.choices.length; i++)
            H.internalBinaryWrite(e.choices[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        e.choicesFrom && z.internalBinaryWrite(e.choicesFrom, n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.extraChoices.length; i++)
            H.internalBinaryWrite(e.extraChoices[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        !1 !== e.randomizeChoices && n.tag(4, l.O0.Varint).bool(e.randomizeChoices);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let q = new K();
class V extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SingleChoiceQuestion", [
            { no: 1, name: "choice_source", kind: "message", T: () => q },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.choiceSource = q.internalBinaryRead(e, e.uint32(), t, r.choiceSource);
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        e.choiceSource && q.internalBinaryWrite(e.choiceSource, n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let G = new V();
class Q extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MultiChoiceQuestion", [
            { no: 1, name: "choice_source", kind: "message", T: () => q },
            { no: 2, name: "min_selected", kind: "message", T: () => h.ZQ },
            { no: 3, name: "max_selected", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choiceSource = q.internalBinaryRead(e, e.uint32(), t, r.choiceSource);
                    break;
                case 2:
                    r.minSelected = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.minSelected);
                    break;
                case 3:
                    r.maxSelected = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxSelected);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.choiceSource && q.internalBinaryWrite(e.choiceSource, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            e.minSelected && h.ZQ.internalBinaryWrite(e.minSelected, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            e.maxSelected && h.ZQ.internalBinaryWrite(e.maxSelected, n.tag(3, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let X = new Q();
class A extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RankQuestion", [
            { no: 1, name: "choice_source", kind: "message", T: () => q },
            { no: 2, name: "rank_top", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choiceSource = q.internalBinaryRead(e, e.uint32(), t, r.choiceSource);
                    break;
                case 2:
                    r.rankTop = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.rankTop);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.choiceSource && q.internalBinaryWrite(e.choiceSource, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            e.rankTop && h.ZQ.internalBinaryWrite(e.rankTop, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let M = new A();
class Z extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ChoicesFrom", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "selected", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, selected: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.selected = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId),
            !1 !== e.selected && n.tag(2, l.O0.Varint).bool(e.selected));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let z = new Z();
class Y extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Choice", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => m.X },
            { no: 3, name: "value", kind: "scalar", T: 1 },
            { no: 4, name: "pinned", kind: "scalar", T: 8 },
            { no: 5, name: "exclusive", kind: "scalar", T: 8 },
            { no: 6, name: "allow_text", kind: "scalar", T: 8 },
            { no: 7, name: "text_max_length", kind: "message", T: () => h.ZQ },
            { no: 8, name: "excluded_from_score", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { id: 0, value: 0, pinned: !1, exclusive: !1, allowText: !1, excludedFromScore: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.value = e.double();
                    break;
                case 4:
                    r.pinned = e.bool();
                    break;
                case 5:
                    r.exclusive = e.bool();
                    break;
                case 6:
                    r.allowText = e.bool();
                    break;
                case 7:
                    r.textMaxLength = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.textMaxLength);
                    break;
                case 8:
                    r.excludedFromScore = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            0 !== e.value && n.tag(3, l.O0.Bit64).double(e.value),
            !1 !== e.pinned && n.tag(4, l.O0.Varint).bool(e.pinned),
            !1 !== e.exclusive && n.tag(5, l.O0.Varint).bool(e.exclusive),
            !1 !== e.allowText && n.tag(6, l.O0.Varint).bool(e.allowText),
            e.textMaxLength &&
                h.ZQ.internalBinaryWrite(e.textMaxLength, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.excludedFromScore && n.tag(8, l.O0.Varint).bool(e.excludedFromScore));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let H = new Y();
class J extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.TextQuestion", [
            { no: 1, name: "multiline", kind: "scalar", T: 8 },
            { no: 2, name: "max_length", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = { multiline: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.multiline = e.bool();
                    break;
                case 2:
                    r.maxLength = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxLength);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (!1 !== e.multiline && n.tag(1, l.O0.Varint).bool(e.multiline),
            e.maxLength && h.ZQ.internalBinaryWrite(e.maxLength, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ee = new J();
class en extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScaleQuestion", [
            { no: 1, name: "min_value", kind: "scalar", T: 17 },
            { no: 2, name: "max_value", kind: "scalar", T: 17 },
            { no: 3, name: "min_label", kind: "message", T: () => m.X },
            { no: 4, name: "max_label", kind: "message", T: () => m.X },
            { no: 5, name: "nps", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { minValue: 0, maxValue: 0, nps: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.minValue = e.sint32();
                    break;
                case 2:
                    r.maxValue = e.sint32();
                    break;
                case 3:
                    r.minLabel = m.X.internalBinaryRead(e, e.uint32(), t, r.minLabel);
                    break;
                case 4:
                    r.maxLabel = m.X.internalBinaryRead(e, e.uint32(), t, r.maxLabel);
                    break;
                case 5:
                    r.nps = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.minValue && n.tag(1, l.O0.Varint).sint32(e.minValue),
            0 !== e.maxValue && n.tag(2, l.O0.Varint).sint32(e.maxValue),
            e.minLabel && m.X.internalBinaryWrite(e.minLabel, n.tag(3, l.O0.LengthDelimited).fork(), t).join(),
            e.maxLabel && m.X.internalBinaryWrite(e.maxLabel, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.nps && n.tag(5, l.O0.Varint).bool(e.nps));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let et = new en();
class ei extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixQuestion", [
            { no: 1, name: "rows", kind: "message", repeat: 1, T: () => eo },
            { no: 2, name: "scale", kind: "message", repeat: 1, T: () => H },
            { no: 3, name: "randomize_rows", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { rows: [], scale: [], randomizeRows: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.rows.push(eo.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.scale.push(H.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 3:
                    r.randomizeRows = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.rows.length; i++)
            eo.internalBinaryWrite(e.rows[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.scale.length; i++)
            H.internalBinaryWrite(e.scale[i], n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        !1 !== e.randomizeRows && n.tag(3, l.O0.Varint).bool(e.randomizeRows);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let er = new ei();
class ea extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixRow", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "message", T: () => m.X },
            { no: 3, name: "pinned", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { id: 0, pinned: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = m.X.internalBinaryRead(e, e.uint32(), t, r.text);
                    break;
                case 3:
                    r.pinned = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            e.text && m.X.internalBinaryWrite(e.text, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            !1 !== e.pinned && n.tag(3, l.O0.Varint).bool(e.pinned));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eo = new ea();
class es extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.InfoQuestion", []);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        return i ?? this.create();
    }
    internalBinaryWrite(e, n, t) {
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let el = new es();
class ed extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Score", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "export_label", kind: "scalar", T: 9 },
            { no: 3, name: "terms", kind: "message", repeat: 1, T: () => eh },
            { no: 4, name: "bands", kind: "message", repeat: 1, T: () => ef },
        ]);
    }
    create(e) {
        let n = { id: 0, exportLabel: "", terms: [], bands: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.exportLabel = e.string();
                    break;
                case 3:
                    r.terms.push(eh.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.bands.push(ef.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            "" !== e.exportLabel && n.tag(2, l.O0.LengthDelimited).string(e.exportLabel));
        for (let i = 0; i < e.terms.length; i++)
            eh.internalBinaryWrite(e.terms[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.bands.length; i++)
            ef.internalBinaryWrite(e.bands[i], n.tag(4, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ec = new ed();
class eu extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScoreTerm", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "weight", kind: "message", T: () => h.$b },
        ]);
    }
    create(e) {
        let n = { questionId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.weight = h.$b.internalBinaryRead(e, e.uint32(), t, r.weight);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId),
            e.weight && h.$b.internalBinaryWrite(e.weight, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eh = new eu();
class em extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScoreBand", [
            { no: 1, name: "max", kind: "message", T: () => h.$b },
            { no: 2, name: "label", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { label: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.max = h.$b.internalBinaryRead(e, e.uint32(), t, r.max);
                    break;
                case 2:
                    r.label = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (e.max && h.$b.internalBinaryWrite(e.max, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            "" !== e.label && n.tag(2, l.O0.LengthDelimited).string(e.label));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ef = new em();
class ek extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Condition", [
            { no: 1, name: "all_of", kind: "message", oneof: "kind", T: () => ey },
            { no: 2, name: "any_of", kind: "message", oneof: "kind", T: () => ey },
            { no: 3, name: "none_of", kind: "message", oneof: "kind", T: () => ey },
            { no: 4, name: "selected", kind: "message", oneof: "kind", T: () => eb },
            { no: 5, name: "matrix_selected", kind: "message", oneof: "kind", T: () => ev },
            { no: 6, name: "ranked_within", kind: "message", oneof: "kind", T: () => e$ },
            { no: 7, name: "answered", kind: "message", oneof: "kind", T: () => eB },
            { no: 8, name: "compare", kind: "message", oneof: "kind", T: () => eR },
            { no: 10, name: "score_band", kind: "message", oneof: "kind", T: () => eL },
            { no: 11, name: "displayed", kind: "message", oneof: "kind", T: () => eI },
        ]);
    }
    create(e) {
        let n = { kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.kind = { oneofKind: "allOf", allOf: ey.internalBinaryRead(e, e.uint32(), t, r.kind.allOf) };
                    break;
                case 2:
                    r.kind = { oneofKind: "anyOf", anyOf: ey.internalBinaryRead(e, e.uint32(), t, r.kind.anyOf) };
                    break;
                case 3:
                    r.kind = { oneofKind: "noneOf", noneOf: ey.internalBinaryRead(e, e.uint32(), t, r.kind.noneOf) };
                    break;
                case 4:
                    r.kind = {
                        oneofKind: "selected",
                        selected: eb.internalBinaryRead(e, e.uint32(), t, r.kind.selected),
                    };
                    break;
                case 5:
                    r.kind = {
                        oneofKind: "matrixSelected",
                        matrixSelected: ev.internalBinaryRead(e, e.uint32(), t, r.kind.matrixSelected),
                    };
                    break;
                case 6:
                    r.kind = {
                        oneofKind: "rankedWithin",
                        rankedWithin: e$.internalBinaryRead(e, e.uint32(), t, r.kind.rankedWithin),
                    };
                    break;
                case 7:
                    r.kind = {
                        oneofKind: "answered",
                        answered: eB.internalBinaryRead(e, e.uint32(), t, r.kind.answered),
                    };
                    break;
                case 8:
                    r.kind = { oneofKind: "compare", compare: eR.internalBinaryRead(e, e.uint32(), t, r.kind.compare) };
                    break;
                case 10:
                    r.kind = {
                        oneofKind: "scoreBand",
                        scoreBand: eL.internalBinaryRead(e, e.uint32(), t, r.kind.scoreBand),
                    };
                    break;
                case 11:
                    r.kind = {
                        oneofKind: "displayed",
                        displayed: eI.internalBinaryRead(e, e.uint32(), t, r.kind.displayed),
                    };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("allOf" === e.kind.oneofKind &&
            ey.internalBinaryWrite(e.kind.allOf, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            "anyOf" === e.kind.oneofKind &&
                ey.internalBinaryWrite(e.kind.anyOf, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            "noneOf" === e.kind.oneofKind &&
                ey.internalBinaryWrite(e.kind.noneOf, n.tag(3, l.O0.LengthDelimited).fork(), t).join(),
            "selected" === e.kind.oneofKind &&
                eb.internalBinaryWrite(e.kind.selected, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            "matrixSelected" === e.kind.oneofKind &&
                ev.internalBinaryWrite(e.kind.matrixSelected, n.tag(5, l.O0.LengthDelimited).fork(), t).join(),
            "rankedWithin" === e.kind.oneofKind &&
                e$.internalBinaryWrite(e.kind.rankedWithin, n.tag(6, l.O0.LengthDelimited).fork(), t).join(),
            "answered" === e.kind.oneofKind &&
                eB.internalBinaryWrite(e.kind.answered, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            "compare" === e.kind.oneofKind &&
                eR.internalBinaryWrite(e.kind.compare, n.tag(8, l.O0.LengthDelimited).fork(), t).join(),
            "scoreBand" === e.kind.oneofKind &&
                eL.internalBinaryWrite(e.kind.scoreBand, n.tag(10, l.O0.LengthDelimited).fork(), t).join(),
            "displayed" === e.kind.oneofKind &&
                eI.internalBinaryWrite(e.kind.displayed, n.tag(11, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eg = new ek();
class ep extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConditionList", [
            { no: 1, name: "conditions", kind: "message", repeat: 1, T: () => eg },
        ]);
    }
    create(e) {
        let n = { conditions: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.conditions.push(eg.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.conditions.length; i++)
            eg.internalBinaryWrite(e.conditions[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ey = new ep();
class ew extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SelectedCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_ids", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, choiceIds: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    if (i === l.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.choiceIds.push(e.uint32());
                    else r.choiceIds.push(e.uint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId), e.choiceIds.length)) {
            n.tag(2, l.O0.LengthDelimited).fork();
            for (let t = 0; t < e.choiceIds.length; t++) n.uint32(e.choiceIds[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eb = new ew();
class ex extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixSelectedCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "row_id", kind: "scalar", T: 13 },
            { no: 3, name: "choice_ids", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, rowId: 0, choiceIds: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.rowId = e.uint32();
                    break;
                case 3:
                    if (i === l.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.choiceIds.push(e.uint32());
                    else r.choiceIds.push(e.uint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if (
            (0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId),
            0 !== e.rowId && n.tag(2, l.O0.Varint).uint32(e.rowId),
            e.choiceIds.length)
        ) {
            n.tag(3, l.O0.LengthDelimited).fork();
            for (let t = 0; t < e.choiceIds.length; t++) n.uint32(e.choiceIds[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ev = new ex();
class eT extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RankedWithinCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_id", kind: "scalar", T: 13 },
            { no: 3, name: "top_count", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, choiceId: 0, topCount: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.choiceId = e.uint32();
                    break;
                case 3:
                    r.topCount = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId),
            0 !== e.choiceId && n.tag(2, l.O0.Varint).uint32(e.choiceId),
            0 !== e.topCount && n.tag(3, l.O0.Varint).uint32(e.topCount));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e$ = new eT();
class eO extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.AnsweredCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.questionId = e.uint32();
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eB = new eO();
class ej extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.DisplayedCondition", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.questionId = e.uint32();
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eI = new ej();
class e_ extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.CompareCondition", [
            { no: 1, name: "question_id", kind: "scalar", oneof: "target", T: 13 },
            { no: 2, name: "score_id", kind: "scalar", oneof: "target", T: 13 },
            {
                no: 3,
                name: "op",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.CompareOp", k, "COMPARE_OP_"],
            },
            { no: 4, name: "value", kind: "scalar", T: 1 },
        ]);
    }
    create(e) {
        let n = { target: { oneofKind: void 0 }, op: 0, value: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.target = { oneofKind: "questionId", questionId: e.uint32() };
                    break;
                case 2:
                    r.target = { oneofKind: "scoreId", scoreId: e.uint32() };
                    break;
                case 3:
                    r.op = e.int32();
                    break;
                case 4:
                    r.value = e.double();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("questionId" === e.target.oneofKind && n.tag(1, l.O0.Varint).uint32(e.target.questionId),
            "scoreId" === e.target.oneofKind && n.tag(2, l.O0.Varint).uint32(e.target.scoreId),
            0 !== e.op && n.tag(3, l.O0.Varint).int32(e.op),
            0 !== e.value && n.tag(4, l.O0.Bit64).double(e.value));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eR = new e_();
class eN extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ScoreBandCondition", [
            { no: 1, name: "score_id", kind: "scalar", T: 13 },
            { no: 2, name: "band_label", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { scoreId: 0, bandLabel: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.scoreId = e.uint32();
                    break;
                case 2:
                    r.bandLabel = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.scoreId && n.tag(1, l.O0.Varint).uint32(e.scoreId),
            "" !== e.bandLabel && n.tag(2, l.O0.LengthDelimited).string(e.bandLabel));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eL = new eN();
var eW =
        (((a = {})[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.ALL = 1)] = "ALL"),
        (a[(a.SOME = 2)] = "SOME"),
        (a[(a.NONE = 3)] = "NONE"),
        a),
    eU =
        (((o = {})[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (o[(o.COMPLETE = 2)] = "COMPLETE"),
        (o[(o.ENDED = 3)] = "ENDED"),
        o),
    eD =
        (((s = {})[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.REQUIRED = 1)] = "REQUIRED"),
        (s[(s.TOO_LONG = 2)] = "TOO_LONG"),
        (s[(s.TOO_FEW = 3)] = "TOO_FEW"),
        (s[(s.TOO_MANY = 4)] = "TOO_MANY"),
        (s[(s.INVALID = 5)] = "INVALID"),
        (s[(s.STALE = 6)] = "STALE"),
        s);
class eC extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SubmitRequest", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "revision", kind: "scalar", T: 13 },
            { no: 3, name: "answers", kind: "message", repeat: 1, T: () => eP },
        ]);
    }
    create(e) {
        let n = { pageId: 0, revision: 0, answers: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    r.revision = e.uint32();
                    break;
                case 3:
                    r.answers.push(eP.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.pageId && n.tag(1, l.O0.Varint).uint32(e.pageId),
            0 !== e.revision && n.tag(2, l.O0.Varint).uint32(e.revision));
        for (let i = 0; i < e.answers.length; i++)
            eP.internalBinaryWrite(e.answers[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eE = new eC();
class eF extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Answer", [
            { no: 1, name: "choices", kind: "message", oneof: "kind", T: () => eK },
            { no: 2, name: "ranked", kind: "message", oneof: "kind", T: () => eV },
            { no: 3, name: "text", kind: "message", oneof: "kind", T: () => eQ },
            { no: 4, name: "number", kind: "message", oneof: "kind", T: () => eA },
            { no: 5, name: "matrix", kind: "message", oneof: "kind", T: () => eZ },
            { no: 6, name: "conjoint", kind: "message", oneof: "kind", T: () => eJ },
            { no: 7, name: "maxdiff", kind: "message", oneof: "kind", T: () => e1 },
        ]);
    }
    create(e) {
        let n = { kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.kind = { oneofKind: "choices", choices: eK.internalBinaryRead(e, e.uint32(), t, r.kind.choices) };
                    break;
                case 2:
                    r.kind = { oneofKind: "ranked", ranked: eV.internalBinaryRead(e, e.uint32(), t, r.kind.ranked) };
                    break;
                case 3:
                    r.kind = { oneofKind: "text", text: eQ.internalBinaryRead(e, e.uint32(), t, r.kind.text) };
                    break;
                case 4:
                    r.kind = { oneofKind: "number", number: eA.internalBinaryRead(e, e.uint32(), t, r.kind.number) };
                    break;
                case 5:
                    r.kind = { oneofKind: "matrix", matrix: eZ.internalBinaryRead(e, e.uint32(), t, r.kind.matrix) };
                    break;
                case 6:
                    r.kind = {
                        oneofKind: "conjoint",
                        conjoint: eJ.internalBinaryRead(e, e.uint32(), t, r.kind.conjoint),
                    };
                    break;
                case 7:
                    r.kind = { oneofKind: "maxdiff", maxdiff: e1.internalBinaryRead(e, e.uint32(), t, r.kind.maxdiff) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("choices" === e.kind.oneofKind &&
            eK.internalBinaryWrite(e.kind.choices, n.tag(1, l.O0.LengthDelimited).fork(), t).join(),
            "ranked" === e.kind.oneofKind &&
                eV.internalBinaryWrite(e.kind.ranked, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            "text" === e.kind.oneofKind &&
                eQ.internalBinaryWrite(e.kind.text, n.tag(3, l.O0.LengthDelimited).fork(), t).join(),
            "number" === e.kind.oneofKind &&
                eA.internalBinaryWrite(e.kind.number, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            "matrix" === e.kind.oneofKind &&
                eZ.internalBinaryWrite(e.kind.matrix, n.tag(5, l.O0.LengthDelimited).fork(), t).join(),
            "conjoint" === e.kind.oneofKind &&
                eJ.internalBinaryWrite(e.kind.conjoint, n.tag(6, l.O0.LengthDelimited).fork(), t).join(),
            "maxdiff" === e.kind.oneofKind &&
                e1.internalBinaryWrite(e.kind.maxdiff, n.tag(7, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eP = new eF();
class eS extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ChoicesAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_ids", kind: "scalar", repeat: 1, T: 13 },
            { no: 3, name: "text_by_choice_id", kind: "map", K: 13, V: { kind: "scalar", T: 9 } },
        ]);
    }
    create(e) {
        let n = { questionId: 0, choiceIds: [], textByChoiceId: {} };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    if (i === l.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.choiceIds.push(e.uint32());
                    else r.choiceIds.push(e.uint32());
                    break;
                case 3:
                    this.binaryReadMap3(r.textByChoiceId, e, t);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    binaryReadMap3(e, n, t) {
        let i = n.uint32(),
            r = n.pos + i,
            a,
            o;
        for (; n.pos < r;) {
            let [e, t] = n.tag();
            switch (e) {
                case 1:
                    a = n.uint32();
                    break;
                case 2:
                    o = n.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_surveys.v1.ChoicesAnswer.text_by_choice_id",
                    );
            }
        }
        e[a ?? 0] = o ?? "";
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId), e.choiceIds.length)) {
            n.tag(2, l.O0.LengthDelimited).fork();
            for (let t = 0; t < e.choiceIds.length; t++) n.uint32(e.choiceIds[t]);
            n.join();
        }
        for (let t of Object.keys(e.textByChoiceId))
            n.tag(3, l.O0.LengthDelimited)
                .fork()
                .tag(1, l.O0.Varint)
                .uint32(parseInt(t))
                .tag(2, l.O0.LengthDelimited)
                .string(e.textByChoiceId[t])
                .join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eK = new eS();
class eq extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RankedAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "ranked_choice_ids", kind: "scalar", repeat: 1, T: 13 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, rankedChoiceIds: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    if (i === l.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.rankedChoiceIds.push(e.uint32());
                    else r.rankedChoiceIds.push(e.uint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId), e.rankedChoiceIds.length)) {
            n.tag(2, l.O0.LengthDelimited).fork();
            for (let t = 0; t < e.rankedChoiceIds.length; t++) n.uint32(e.rankedChoiceIds[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eV = new eq();
class eG extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.TextAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, text: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId),
            "" !== e.text && n.tag(2, l.O0.LengthDelimited).string(e.text));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eQ = new eG();
class eX extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.NumberAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "value", kind: "scalar", T: 17 },
        ]);
    }
    create(e) {
        let n = { questionId: 0, value: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.value = e.sint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId),
            0 !== e.value && n.tag(2, l.O0.Varint).sint32(e.value));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eA = new eX();
class eM extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixAnswer", [
            { no: 1, name: "question_id", kind: "scalar", T: 13 },
            { no: 2, name: "rows", kind: "message", repeat: 1, T: () => eY },
        ]);
    }
    create(e) {
        let n = { questionId: 0, rows: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.questionId = e.uint32();
                    break;
                case 2:
                    r.rows.push(eY.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.questionId && n.tag(1, l.O0.Varint).uint32(e.questionId);
        for (let i = 0; i < e.rows.length; i++)
            eY.internalBinaryWrite(e.rows[i], n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eZ = new eM();
class ez extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MatrixRowAnswer", [
            { no: 1, name: "row_id", kind: "scalar", T: 13 },
            { no: 2, name: "choice_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { rowId: 0, choiceId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.rowId = e.uint32();
                    break;
                case 2:
                    r.choiceId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.rowId && n.tag(1, l.O0.Varint).uint32(e.rowId),
            0 !== e.choiceId && n.tag(2, l.O0.Varint).uint32(e.choiceId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eY = new ez();
class eH extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.ConjointAnswer", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "chosen_concept_indexes", kind: "scalar", repeat: 1, T: 17 },
        ]);
    }
    create(e) {
        let n = { pageId: 0, chosenConceptIndexes: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    if (i === l.O0.LengthDelimited)
                        for (let n = e.int32() + e.pos; e.pos < n;) r.chosenConceptIndexes.push(e.sint32());
                    else r.chosenConceptIndexes.push(e.sint32());
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        if ((0 !== e.pageId && n.tag(1, l.O0.Varint).uint32(e.pageId), e.chosenConceptIndexes.length)) {
            n.tag(2, l.O0.LengthDelimited).fork();
            for (let t = 0; t < e.chosenConceptIndexes.length; t++) n.sint32(e.chosenConceptIndexes[t]);
            n.join();
        }
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let eJ = new eH();
class e0 extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffAnswer", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "picks_per_set", kind: "message", repeat: 1, T: () => e3 },
            {
                no: 3,
                name: "anchor",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.MaxDiffAnchor", eW, "MAX_DIFF_ANCHOR_"],
            },
        ]);
    }
    create(e) {
        let n = { pageId: 0, picksPerSet: [], anchor: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    r.picksPerSet.push(e3.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 3:
                    r.anchor = e.int32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        0 !== e.pageId && n.tag(1, l.O0.Varint).uint32(e.pageId);
        for (let i = 0; i < e.picksPerSet.length; i++)
            e3.internalBinaryWrite(e.picksPerSet[i], n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        0 !== e.anchor && n.tag(3, l.O0.Varint).int32(e.anchor);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e1 = new e0();
class e2 extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.MaxDiffPick", [
            { no: 1, name: "most_item_id", kind: "scalar", T: 13 },
            { no: 2, name: "least_item_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { mostItemId: 0, leastItemId: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.mostItemId = e.uint32();
                    break;
                case 2:
                    r.leastItemId = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.mostItemId && n.tag(1, l.O0.Varint).uint32(e.mostItemId),
            0 !== e.leastItemId && n.tag(2, l.O0.Varint).uint32(e.leastItemId));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e3 = new e2();
class e4 extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedPage", [
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.SessionStatus", eU, "SESSION_STATUS_"],
            },
            { no: 2, name: "page_id", kind: "scalar", T: 13 },
            { no: 3, name: "revision", kind: "scalar", T: 13 },
            { no: 4, name: "progress", kind: "message", T: () => e6 },
            { no: 5, name: "questions", kind: "message", oneof: "content", T: () => nn },
            { no: 6, name: "conjoint", kind: "message", oneof: "content", T: () => nx },
            { no: 7, name: "maxdiff", kind: "message", oneof: "content", T: () => nN },
            { no: 8, name: "end_message", kind: "scalar", T: 9 },
            { no: 9, name: "submitted_answers", kind: "message", repeat: 1, T: () => eP },
            { no: 10, name: "errors", kind: "message", repeat: 1, T: () => e7 },
        ]);
    }
    create(e) {
        let n = {
            status: 0,
            pageId: 0,
            revision: 0,
            content: { oneofKind: void 0 },
            endMessage: "",
            submittedAnswers: [],
            errors: [],
        };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.status = e.int32();
                    break;
                case 2:
                    r.pageId = e.uint32();
                    break;
                case 3:
                    r.revision = e.uint32();
                    break;
                case 4:
                    r.progress = e6.internalBinaryRead(e, e.uint32(), t, r.progress);
                    break;
                case 5:
                    r.content = {
                        oneofKind: "questions",
                        questions: nn.internalBinaryRead(e, e.uint32(), t, r.content.questions),
                    };
                    break;
                case 6:
                    r.content = {
                        oneofKind: "conjoint",
                        conjoint: nx.internalBinaryRead(e, e.uint32(), t, r.content.conjoint),
                    };
                    break;
                case 7:
                    r.content = {
                        oneofKind: "maxdiff",
                        maxdiff: nN.internalBinaryRead(e, e.uint32(), t, r.content.maxdiff),
                    };
                    break;
                case 8:
                    r.endMessage = e.string();
                    break;
                case 9:
                    r.submittedAnswers.push(eP.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 10:
                    r.errors.push(e7.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.status && n.tag(1, l.O0.Varint).int32(e.status),
            0 !== e.pageId && n.tag(2, l.O0.Varint).uint32(e.pageId),
            0 !== e.revision && n.tag(3, l.O0.Varint).uint32(e.revision),
            e.progress && e6.internalBinaryWrite(e.progress, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            "questions" === e.content.oneofKind &&
                nn.internalBinaryWrite(e.content.questions, n.tag(5, l.O0.LengthDelimited).fork(), t).join(),
            "conjoint" === e.content.oneofKind &&
                nx.internalBinaryWrite(e.content.conjoint, n.tag(6, l.O0.LengthDelimited).fork(), t).join(),
            "maxdiff" === e.content.oneofKind &&
                nN.internalBinaryWrite(e.content.maxdiff, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            "" !== e.endMessage && n.tag(8, l.O0.LengthDelimited).string(e.endMessage));
        for (let i = 0; i < e.submittedAnswers.length; i++)
            eP.internalBinaryWrite(e.submittedAnswers[i], n.tag(9, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.errors.length; i++)
            e7.internalBinaryWrite(e.errors[i], n.tag(10, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e8 = new e4();
class e5 extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.Progress", [
            { no: 1, name: "page_index", kind: "scalar", T: 13 },
            { no: 2, name: "estimated_page_count", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let n = { pageIndex: 0, estimatedPageCount: 0 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageIndex = e.uint32();
                    break;
                case 2:
                    r.estimatedPageCount = e.uint32();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.pageIndex && n.tag(1, l.O0.Varint).uint32(e.pageIndex),
            0 !== e.estimatedPageCount && n.tag(2, l.O0.Varint).uint32(e.estimatedPageCount));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e6 = new e5();
class e9 extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.SubmitError", [
            { no: 1, name: "page_id", kind: "scalar", T: 13 },
            { no: 2, name: "question_id", kind: "scalar", T: 13 },
            { no: 3, name: "row_id", kind: "scalar", T: 13 },
            { no: 4, name: "choice_id", kind: "scalar", T: 13 },
            {
                no: 5,
                name: "code",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.SubmitErrorCode", eD, "SUBMIT_ERROR_CODE_"],
            },
            { no: 6, name: "message", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { pageId: 0, questionId: 0, rowId: 0, choiceId: 0, code: 0, message: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.pageId = e.uint32();
                    break;
                case 2:
                    r.questionId = e.uint32();
                    break;
                case 3:
                    r.rowId = e.uint32();
                    break;
                case 4:
                    r.choiceId = e.uint32();
                    break;
                case 5:
                    r.code = e.int32();
                    break;
                case 6:
                    r.message = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.pageId && n.tag(1, l.O0.Varint).uint32(e.pageId),
            0 !== e.questionId && n.tag(2, l.O0.Varint).uint32(e.questionId),
            0 !== e.rowId && n.tag(3, l.O0.Varint).uint32(e.rowId),
            0 !== e.choiceId && n.tag(4, l.O0.Varint).uint32(e.choiceId),
            0 !== e.code && n.tag(5, l.O0.Varint).int32(e.code),
            "" !== e.message && n.tag(6, l.O0.LengthDelimited).string(e.message));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let e7 = new e9();
class ne extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedQuestionList", [
            { no: 1, name: "questions", kind: "message", repeat: 1, T: () => ni },
        ]);
    }
    create(e) {
        let n = { questions: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.questions.push(ni.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.questions.length; i++)
            ni.internalBinaryWrite(e.questions[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nn = new ne();
class nt extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedQuestion", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
            { no: 3, name: "required", kind: "scalar", T: 8 },
            { no: 4, name: "single_choice", kind: "message", oneof: "kind", T: () => na },
            { no: 5, name: "dropdown", kind: "message", oneof: "kind", T: () => na },
            { no: 6, name: "multi_choice", kind: "message", oneof: "kind", T: () => na },
            { no: 7, name: "rank", kind: "message", oneof: "kind", T: () => nu },
            { no: 8, name: "free_text", kind: "message", oneof: "kind", T: () => nm },
            { no: 9, name: "scale", kind: "message", oneof: "kind", T: () => nk },
            { no: 10, name: "matrix", kind: "message", oneof: "kind", T: () => np },
            { no: 11, name: "info", kind: "message", oneof: "kind", T: () => nw },
        ]);
    }
    create(e) {
        let n = { id: 0, text: "", required: !1, kind: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                case 3:
                    r.required = e.bool();
                    break;
                case 4:
                    r.kind = {
                        oneofKind: "singleChoice",
                        singleChoice: na.internalBinaryRead(e, e.uint32(), t, r.kind.singleChoice),
                    };
                    break;
                case 5:
                    r.kind = {
                        oneofKind: "dropdown",
                        dropdown: na.internalBinaryRead(e, e.uint32(), t, r.kind.dropdown),
                    };
                    break;
                case 6:
                    r.kind = {
                        oneofKind: "multiChoice",
                        multiChoice: na.internalBinaryRead(e, e.uint32(), t, r.kind.multiChoice),
                    };
                    break;
                case 7:
                    r.kind = { oneofKind: "rank", rank: nu.internalBinaryRead(e, e.uint32(), t, r.kind.rank) };
                    break;
                case 8:
                    r.kind = {
                        oneofKind: "freeText",
                        freeText: nm.internalBinaryRead(e, e.uint32(), t, r.kind.freeText),
                    };
                    break;
                case 9:
                    r.kind = { oneofKind: "scale", scale: nk.internalBinaryRead(e, e.uint32(), t, r.kind.scale) };
                    break;
                case 10:
                    r.kind = { oneofKind: "matrix", matrix: np.internalBinaryRead(e, e.uint32(), t, r.kind.matrix) };
                    break;
                case 11:
                    r.kind = { oneofKind: "info", info: nw.internalBinaryRead(e, e.uint32(), t, r.kind.info) };
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            "" !== e.text && n.tag(2, l.O0.LengthDelimited).string(e.text),
            !1 !== e.required && n.tag(3, l.O0.Varint).bool(e.required),
            "singleChoice" === e.kind.oneofKind &&
                na.internalBinaryWrite(e.kind.singleChoice, n.tag(4, l.O0.LengthDelimited).fork(), t).join(),
            "dropdown" === e.kind.oneofKind &&
                na.internalBinaryWrite(e.kind.dropdown, n.tag(5, l.O0.LengthDelimited).fork(), t).join(),
            "multiChoice" === e.kind.oneofKind &&
                na.internalBinaryWrite(e.kind.multiChoice, n.tag(6, l.O0.LengthDelimited).fork(), t).join(),
            "rank" === e.kind.oneofKind &&
                nu.internalBinaryWrite(e.kind.rank, n.tag(7, l.O0.LengthDelimited).fork(), t).join(),
            "freeText" === e.kind.oneofKind &&
                nm.internalBinaryWrite(e.kind.freeText, n.tag(8, l.O0.LengthDelimited).fork(), t).join(),
            "scale" === e.kind.oneofKind &&
                nk.internalBinaryWrite(e.kind.scale, n.tag(9, l.O0.LengthDelimited).fork(), t).join(),
            "matrix" === e.kind.oneofKind &&
                np.internalBinaryWrite(e.kind.matrix, n.tag(10, l.O0.LengthDelimited).fork(), t).join(),
            "info" === e.kind.oneofKind &&
                nw.internalBinaryWrite(e.kind.info, n.tag(11, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ni = new nt();
class nr extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedChoiceQuestion", [
            { no: 1, name: "choices", kind: "message", repeat: 1, T: () => ns },
            { no: 2, name: "min_selected", kind: "message", T: () => h.ZQ },
            { no: 3, name: "max_selected", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = { choices: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choices.push(ns.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.minSelected = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.minSelected);
                    break;
                case 3:
                    r.maxSelected = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxSelected);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.choices.length; i++)
            ns.internalBinaryWrite(e.choices[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        (e.minSelected && h.ZQ.internalBinaryWrite(e.minSelected, n.tag(2, l.O0.LengthDelimited).fork(), t).join(),
            e.maxSelected && h.ZQ.internalBinaryWrite(e.maxSelected, n.tag(3, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let na = new nr();
class no extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedChoice", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
            { no: 3, name: "exclusive", kind: "scalar", T: 8 },
            { no: 4, name: "allow_text", kind: "scalar", T: 8 },
            { no: 5, name: "text_max_length", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = { id: 0, text: "", exclusive: !1, allowText: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                case 3:
                    r.exclusive = e.bool();
                    break;
                case 4:
                    r.allowText = e.bool();
                    break;
                case 5:
                    r.textMaxLength = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.textMaxLength);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            "" !== e.text && n.tag(2, l.O0.LengthDelimited).string(e.text),
            !1 !== e.exclusive && n.tag(3, l.O0.Varint).bool(e.exclusive),
            !1 !== e.allowText && n.tag(4, l.O0.Varint).bool(e.allowText),
            e.textMaxLength &&
                h.ZQ.internalBinaryWrite(e.textMaxLength, n.tag(5, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let ns = new no();
class nl extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedOption", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { id: 0, text: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.text = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            "" !== e.text && n.tag(2, l.O0.LengthDelimited).string(e.text));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nd = new nl();
class nc extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedRankQuestion", [
            { no: 1, name: "choices", kind: "message", repeat: 1, T: () => nd },
            { no: 2, name: "rank_top", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = { choices: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.choices.push(nd.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.rankTop = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.rankTop);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.choices.length; i++)
            nd.internalBinaryWrite(e.choices[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        e.rankTop && h.ZQ.internalBinaryWrite(e.rankTop, n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nu = new nc();
class nh extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedTextQuestion", [
            { no: 1, name: "multiline", kind: "scalar", T: 8 },
            { no: 2, name: "max_length", kind: "message", T: () => h.ZQ },
        ]);
    }
    create(e) {
        let n = { multiline: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.multiline = e.bool();
                    break;
                case 2:
                    r.maxLength = h.ZQ.internalBinaryRead(e, e.uint32(), t, r.maxLength);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (!1 !== e.multiline && n.tag(1, l.O0.Varint).bool(e.multiline),
            e.maxLength && h.ZQ.internalBinaryWrite(e.maxLength, n.tag(2, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nm = new nh();
class nf extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedScaleQuestion", [
            { no: 1, name: "min_value", kind: "scalar", T: 17 },
            { no: 2, name: "max_value", kind: "scalar", T: 17 },
            { no: 3, name: "min_label", kind: "scalar", T: 9 },
            { no: 4, name: "max_label", kind: "scalar", T: 9 },
            { no: 5, name: "nps", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { minValue: 0, maxValue: 0, minLabel: "", maxLabel: "", nps: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.minValue = e.sint32();
                    break;
                case 2:
                    r.maxValue = e.sint32();
                    break;
                case 3:
                    r.minLabel = e.string();
                    break;
                case 4:
                    r.maxLabel = e.string();
                    break;
                case 5:
                    r.nps = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.minValue && n.tag(1, l.O0.Varint).sint32(e.minValue),
            0 !== e.maxValue && n.tag(2, l.O0.Varint).sint32(e.maxValue),
            "" !== e.minLabel && n.tag(3, l.O0.LengthDelimited).string(e.minLabel),
            "" !== e.maxLabel && n.tag(4, l.O0.LengthDelimited).string(e.maxLabel),
            !1 !== e.nps && n.tag(5, l.O0.Varint).bool(e.nps));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nk = new nf();
class ng extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedMatrixQuestion", [
            { no: 1, name: "rows", kind: "message", repeat: 1, T: () => nd },
            { no: 2, name: "scale", kind: "message", repeat: 1, T: () => nd },
        ]);
    }
    create(e) {
        let n = { rows: [], scale: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.rows.push(nd.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 2:
                    r.scale.push(nd.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.rows.length; i++)
            nd.internalBinaryWrite(e.rows[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.scale.length; i++)
            nd.internalBinaryWrite(e.scale[i], n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let np = new ng();
class ny extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedInfoQuestion", []);
    }
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        return i ?? this.create();
    }
    internalBinaryWrite(e, n, t) {
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nw = new ny();
class nb extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjoint", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "display",
                kind: "enum",
                T: () => ["discord_protos.discord_surveys.v1.ConjointDisplay", f, "CONJOINT_DISPLAY_"],
            },
            { no: 3, name: "features", kind: "message", repeat: 1, T: () => nT },
            { no: 4, name: "tasks", kind: "message", repeat: 1, T: () => nO },
            { no: 5, name: "include_none_option", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let n = { text: "", display: 0, features: [], tasks: [], includeNoneOption: !1 };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.display = e.int32();
                    break;
                case 3:
                    r.features.push(nT.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 4:
                    r.tasks.push(nO.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 5:
                    r.includeNoneOption = e.bool();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.text && n.tag(1, l.O0.LengthDelimited).string(e.text),
            0 !== e.display && n.tag(2, l.O0.Varint).int32(e.display));
        for (let i = 0; i < e.features.length; i++)
            nT.internalBinaryWrite(e.features[i], n.tag(3, l.O0.LengthDelimited).fork(), t).join();
        for (let i = 0; i < e.tasks.length; i++)
            nO.internalBinaryWrite(e.tasks[i], n.tag(4, l.O0.LengthDelimited).fork(), t).join();
        !1 !== e.includeNoneOption && n.tag(5, l.O0.Varint).bool(e.includeNoneOption);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nx = new nb();
class nv extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointFeature", [
            { no: 1, name: "id", kind: "scalar", T: 13 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "price_currency", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { id: 0, label: "", priceCurrency: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.id = e.uint32();
                    break;
                case 2:
                    r.label = e.string();
                    break;
                case 3:
                    r.priceCurrency = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        (0 !== e.id && n.tag(1, l.O0.Varint).uint32(e.id),
            "" !== e.label && n.tag(2, l.O0.LengthDelimited).string(e.label),
            "" !== e.priceCurrency && n.tag(3, l.O0.LengthDelimited).string(e.priceCurrency));
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nT = new nv();
class n$ extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointTask", [
            { no: 1, name: "concepts", kind: "message", repeat: 1, T: () => nj },
        ]);
    }
    create(e) {
        let n = { concepts: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.concepts.push(nj.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.concepts.length; i++)
            nj.internalBinaryWrite(e.concepts[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nO = new n$();
class nB extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointConcept", [
            { no: 1, name: "label", kind: "scalar", T: 9 },
            { no: 2, name: "levels", kind: "message", repeat: 1, T: () => n_ },
        ]);
    }
    create(e) {
        let n = { label: "", levels: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.label = e.string();
                    break;
                case 2:
                    r.levels.push(n_.internalBinaryRead(e, e.uint32(), t));
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        "" !== e.label && n.tag(1, l.O0.LengthDelimited).string(e.label);
        for (let i = 0; i < e.levels.length; i++)
            n_.internalBinaryWrite(e.levels[i], n.tag(2, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nj = new nB();
class nI extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedConjointLevel", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "image_url", kind: "scalar", T: 9 },
            { no: 3, name: "image_alt_text", kind: "scalar", T: 9 },
            { no: 4, name: "price", kind: "message", T: () => h.$b },
        ]);
    }
    create(e) {
        let n = { text: "", imageUrl: "", imageAltText: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.imageUrl = e.string();
                    break;
                case 3:
                    r.imageAltText = e.string();
                    break;
                case 4:
                    r.price = h.$b.internalBinaryRead(e, e.uint32(), t, r.price);
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.text && n.tag(1, l.O0.LengthDelimited).string(e.text),
            "" !== e.imageUrl && n.tag(2, l.O0.LengthDelimited).string(e.imageUrl),
            "" !== e.imageAltText && n.tag(3, l.O0.LengthDelimited).string(e.imageAltText),
            e.price && h.$b.internalBinaryWrite(e.price, n.tag(4, l.O0.LengthDelimited).fork(), t).join());
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let n_ = new nI();
class nR extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedMaxDiff", [
            { no: 1, name: "text", kind: "scalar", T: 9 },
            { no: 2, name: "most_label", kind: "scalar", T: 9 },
            { no: 3, name: "least_label", kind: "scalar", T: 9 },
            { no: 4, name: "sets", kind: "message", repeat: 1, T: () => nW },
            { no: 5, name: "anchor_question_text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let n = { text: "", mostLabel: "", leastLabel: "", sets: [], anchorQuestionText: "" };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    r.text = e.string();
                    break;
                case 2:
                    r.mostLabel = e.string();
                    break;
                case 3:
                    r.leastLabel = e.string();
                    break;
                case 4:
                    r.sets.push(nW.internalBinaryRead(e, e.uint32(), t));
                    break;
                case 5:
                    r.anchorQuestionText = e.string();
                    break;
                default:
                    let a = t.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        ("" !== e.text && n.tag(1, l.O0.LengthDelimited).string(e.text),
            "" !== e.mostLabel && n.tag(2, l.O0.LengthDelimited).string(e.mostLabel),
            "" !== e.leastLabel && n.tag(3, l.O0.LengthDelimited).string(e.leastLabel));
        for (let i = 0; i < e.sets.length; i++)
            nW.internalBinaryWrite(e.sets[i], n.tag(4, l.O0.LengthDelimited).fork(), t).join();
        "" !== e.anchorQuestionText && n.tag(5, l.O0.LengthDelimited).string(e.anchorQuestionText);
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nN = new nR();
class nL extends u.G {
    constructor() {
        super("discord_protos.discord_surveys.v1.RenderedMaxDiffSet", [
            { no: 1, name: "items", kind: "message", repeat: 1, T: () => nd },
        ]);
    }
    create(e) {
        let n = { items: [] };
        return (
            globalThis.Object.defineProperty(n, c.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, d.x)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, t, i) {
        let r = i ?? this.create(),
            a = e.pos + n;
        for (; e.pos < a;) {
            let [n, i] = e.tag();
            if (1 === n) r.items.push(nd.internalBinaryRead(e, e.uint32(), t));
            else {
                let a = t.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${n} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? l.f$.onRead : a)(this.typeName, r, n, i, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, n, t) {
        for (let i = 0; i < e.items.length; i++)
            nd.internalBinaryWrite(e.items[i], n.tag(1, l.O0.LengthDelimited).fork(), t).join();
        let i = t.writeUnknownFields;
        return (!1 !== i && (!0 == i ? l.f$.onWrite : i)(this.typeName, e, n), n);
    }
}
let nW = new nL();
