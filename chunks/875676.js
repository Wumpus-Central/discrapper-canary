"use strict";
n.d(t, { m: () => Y });
var i = n(852015),
    r = n(144367),
    s = n(428420),
    a = n(535384),
    o = n(991023),
    l = n(330287),
    u = n(232582);
class c extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", u.dz, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => l.O },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.body = e.string();
                    break;
                case 2:
                    s.ctaLabel = e.string();
                    break;
                case 3:
                    s.ctaAction = e.int32();
                    break;
                case 4:
                    s.deeplinkSection = e.string();
                    break;
                case 5:
                    s.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 6:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                case 7:
                    s.ctaLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.ctaLabelLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.body && t.tag(1, i.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, i.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, i.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                o.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let d = new c();
var _ = n(453360);
class h extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopoverCTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", u.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.copy && t.tag(1, i.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, i.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                o.X.internalBinaryWrite(e.copyLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let f = new h();
class p extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => _.i },
            { no: 4, name: "button", kind: "message", T: () => f },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => l.O },
            { no: 7, name: "header_localized", kind: "message", T: () => o.X },
            { no: 8, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.asset = _.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 4:
                    s.button = f.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 5:
                    s.helpArticleId = e.string();
                    break;
                case 6:
                    s.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 7:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 8:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.asset && _.i.internalBinaryWrite(e.asset, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.button && f.internalBinaryWrite(e.button, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, i.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let E = new p();
class m extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => _.i },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.asset = _.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 4:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 5:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.asset && _.i.internalBinaryWrite(e.asset, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let g = new m();
class A extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => _.i },
            { no: 5, name: "header_localized", kind: "message", T: () => o.X },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.assetUrl = e.string();
                    break;
                case 4:
                    s.asset = _.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 5:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 6:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, i.O0.LengthDelimited).string(e.assetUrl),
            e.asset && _.i.internalBinaryWrite(e.asset, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let I = new A();
class T extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.body = e.string();
                    break;
                case 2:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.body && t.tag(1, i.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let S = new T();
var y = n(959129),
    N = n(67948),
    v = n(978656),
    C = n(720119),
    R = n(414525);
class O extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => R.H },
        ]);
    }
    create(e) {
        let t = { boxAnimationUrl: "", trinketAnimationUrl: "", trinketGlowAnimationUrl: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.boxAnimationUrl = e.string();
                    break;
                case 2:
                    s.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    s.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    s.gradient = R.H.internalBinaryRead(e, e.uint32(), n, s.gradient);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.boxAnimationUrl && t.tag(1, i.O0.LengthDelimited).string(e.boxAnimationUrl),
            "" !== e.trinketAnimationUrl && t.tag(2, i.O0.LengthDelimited).string(e.trinketAnimationUrl),
            "" !== e.trinketGlowAnimationUrl && t.tag(3, i.O0.LengthDelimited).string(e.trinketGlowAnimationUrl),
            e.gradient && R.H.internalBinaryWrite(e.gradient, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let b = new O();
var D = n(554146);
class L extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.CTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", u.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.copy && t.tag(1, i.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, i.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                o.X.internalBinaryWrite(e.copyLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let w = new L();
class M extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => w },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", D.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => l.O },
            { no: 8, name: "header_localized", kind: "message", T: () => o.X },
            { no: 9, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.helpArticleId = e.string();
                    break;
                case 5:
                    s.button = w.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 6:
                    s.dismissibleContent = e.int32();
                    break;
                case 7:
                    s.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 8:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 9:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, i.O0.LengthDelimited).string(e.helpArticleId),
            e.button && w.internalBinaryWrite(e.button, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, i.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let P = new M();
class x extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 5:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let k = new x();
class U extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => V },
            { no: 6, name: "help_article", kind: "message", T: () => l.O },
            { no: 7, name: "header_localized", kind: "message", T: () => o.X },
            { no: 8, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.helpArticleId = e.string();
                    break;
                case 5:
                    s.button = V.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 6:
                    s.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 7:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 8:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, i.O0.LengthDelimited).string(e.helpArticleId),
            e.button && V.internalBinaryWrite(e.button, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let G = new U();
class F extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBannerButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", u.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.copy && t.tag(1, i.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, i.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                o.X.internalBinaryWrite(e.copyLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let V = new F();
class B extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => o.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: !1, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.badgeLabel = e.string();
                    break;
                case 2:
                    s.acknowledgedBadgeLabel = e.string();
                    break;
                case 3:
                    s.showHoverGradient = e.bool();
                    break;
                case 4:
                    s.deeplinkSection = e.string();
                    break;
                case 5:
                    s.badgeLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.badgeLabelLocalized);
                    break;
                case 6:
                    s.acknowledgedBadgeLabelLocalized = o.X.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        s.acknowledgedBadgeLabelLocalized,
                    );
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.badgeLabel && t.tag(1, i.O0.LengthDelimited).string(e.badgeLabel),
            "" !== e.acknowledgedBadgeLabel && t.tag(2, i.O0.LengthDelimited).string(e.acknowledgedBadgeLabel),
            !1 !== e.showHoverGradient && t.tag(3, i.O0.Varint).bool(e.showHoverGradient),
            "" !== e.deeplinkSection && t.tag(4, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.badgeLabelLocalized &&
                o.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                o.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, i.O0.LengthDelimited).fork(),
                    n,
                ).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let H = new B();
class j extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => u.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => H },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => G },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => k },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => P },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => b },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => C.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => v.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => N.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => y.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => S },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => I },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => g },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => E },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => d },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
            { no: 18, name: "is_default_base", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "", isDefaultBase: !1 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    s.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: u.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    s.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: H.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTab),
                    };
                    break;
                case 5:
                    s.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: G.internalBinaryRead(e, e.uint32(), n, s.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    s.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: k.internalBinaryRead(e, e.uint32(), n, s.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    s.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: P.internalBinaryRead(e, e.uint32(), n, s.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    s.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: b.internalBinaryRead(e, e.uint32(), n, s.properties.giftIcon),
                    };
                    break;
                case 9:
                    s.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: C.l.internalBinaryRead(e, e.uint32(), n, s.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    s.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: v.s.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    s.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: N.E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    s.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: y.v.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    s.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: S.internalBinaryRead(e, e.uint32(), n, s.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    s.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: I.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    s.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: g.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    s.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: E.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    s.properties = {
                        oneofKind: "nagbar",
                        nagbar: d.internalBinaryRead(e, e.uint32(), n, s.properties.nagbar),
                    };
                    break;
                case 3:
                    s.contentIdentifier = e.string();
                    break;
                case 18:
                    s.isDefaultBase = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "placeholder" === e.properties.oneofKind && t.tag(1, i.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                u.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                H.internalBinaryWrite(e.properties.premiumTab, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                G.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                k.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                P.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                b.internalBinaryWrite(e.properties.giftIcon, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                C.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, i.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                v.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                N.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                y.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                S.internalBinaryWrite(
                    e.properties.giftReminderNagbar,
                    t.tag(13, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                I.internalBinaryWrite(
                    e.properties.giftReminderCoachmark,
                    t.tag(14, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                g.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, i.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                E.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, i.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                d.internalBinaryWrite(e.properties.nagbar, t.tag(17, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.contentIdentifier && t.tag(3, i.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, i.O0.Varint).bool(e.isDefaultBase);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let Y = new j();
