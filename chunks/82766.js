n.d(t, { m: () => eF });
var i,
    r,
    a = n(852015),
    s = n(144367),
    l = n(428420),
    o = n(505816),
    d = n(991023),
    c = n(453360);
class u extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OrbsConfirmationModal", [
            { no: 1, name: "art", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "header", kind: "scalar", T: 9 },
            { no: 4, name: "subheader_localized", kind: "message", T: () => d.X },
            { no: 5, name: "subheader", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", subheader: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.art = c.i.internalBinaryRead(e, e.uint32(), n, r.art);
                    break;
                case 2:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.header = e.string();
                    break;
                case 4:
                    r.subheaderLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.subheaderLocalized);
                    break;
                case 5:
                    r.subheader = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.art && c.i.internalBinaryWrite(e.art, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(3, a.O0.LengthDelimited).string(e.header),
            e.subheaderLocalized &&
                d.X.internalBinaryWrite(e.subheaderLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.subheader && t.tag(5, a.O0.LengthDelimited).string(e.subheader));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let _ = new u();
var E = n(330287);
class A extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.NitroHomeSectionHeader", [
            { no: 1, name: "header_localized", kind: "message", T: () => d.X },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "subheader_localized", kind: "message", T: () => d.X },
            { no: 4, name: "subheader", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => E.O },
        ]);
    }
    create(e) {
        let t = { header: "", subheader: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 2:
                    r.header = e.string();
                    break;
                case 3:
                    r.subheaderLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.subheaderLocalized);
                    break;
                case 4:
                    r.subheader = e.string();
                    break;
                case 5:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.headerLocalized &&
            d.X.internalBinaryWrite(e.headerLocalized, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(2, a.O0.LengthDelimited).string(e.header),
            e.subheaderLocalized &&
                d.X.internalBinaryWrite(e.subheaderLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.subheader && t.tag(4, a.O0.LengthDelimited).string(e.subheader),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(5, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let f = new A();
n(321073);
var h =
    (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.NITRO_WHEEL = 1)] = "NITRO_WHEEL"),
    (i[(i.XBOX = 2)] = "XBOX"),
    (i[(i.GAME_CONTROLLER = 3)] = "GAME_CONTROLLER"),
    (i[(i.ORBS = 4)] = "ORBS"),
    (i[(i.SHOP = 5)] = "SHOP"),
    (i[(i.GIFT = 6)] = "GIFT"),
    (i[(i.BOOST_GEM = 7)] = "BOOST_GEM"),
    (i[(i.REACTION = 8)] = "REACTION"),
    (i[(i.STICKER = 9)] = "STICKER"),
    (i[(i.UPLOAD = 10)] = "UPLOAD"),
    (i[(i.PAINT_PALETTE = 11)] = "PAINT_PALETTE"),
    (i[(i.SCREEN_STREAM = 12)] = "SCREEN_STREAM"),
    (i[(i.SOUNDBOARD = 13)] = "SOUNDBOARD"),
    (i[(i.SPARKLES = 14)] = "SPARKLES"),
    i);
class I extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalPerkCard", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "title_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "title", kind: "scalar", T: 9 },
            { no: 5, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { title: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.titleLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.titleLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.title = e.string();
                    break;
                case 5:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.titleLocalized &&
                d.X.internalBinaryWrite(e.titleLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.title && t.tag(4, a.O0.LengthDelimited).string(e.title),
            "" !== e.body && t.tag(5, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let p = new I();
class m extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalIconPerkCard", [
            {
                no: 6,
                name: "icon",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.AnnouncementModalPerkIcon",
                    h,
                    "ANNOUNCEMENT_MODAL_PERK_ICON_",
                ],
            },
            { no: 2, name: "title_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "title", kind: "scalar", T: 9 },
            { no: 5, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { icon: 0, title: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 6:
                    r.icon = e.int32();
                    break;
                case 2:
                    r.titleLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.titleLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.title = e.string();
                    break;
                case 5:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.icon && t.tag(6, a.O0.Varint).int32(e.icon),
            e.titleLocalized &&
                d.X.internalBinaryWrite(e.titleLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.title && t.tag(4, a.O0.LengthDelimited).string(e.title),
            "" !== e.body && t.tag(5, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let g = new m();
var T = n(308588);
class S extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalTwoPanel", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "title_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "legalese_localized", kind: "message", T: () => d.X },
            { no: 5, name: "terms_url", kind: "scalar", T: 9 },
            { no: 6, name: "button", kind: "message", T: () => T.$J },
            { no: 7, name: "perk_title_localized", kind: "message", T: () => d.X },
            { no: 8, name: "perk_cards", kind: "message", repeat: 1, T: () => p },
            { no: 9, name: "title", kind: "scalar", T: 9 },
            { no: 10, name: "body", kind: "scalar", T: 9 },
            { no: 11, name: "legalese", kind: "scalar", T: 9 },
            { no: 12, name: "perk_title", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { termsUrl: "", perkCards: [], title: "", body: "", legalese: "", perkTitle: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.titleLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.titleLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.legaleseLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.legaleseLocalized);
                    break;
                case 5:
                    r.termsUrl = e.string();
                    break;
                case 6:
                    r.button = T.$J.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 7:
                    r.perkTitleLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.perkTitleLocalized);
                    break;
                case 8:
                    r.perkCards.push(p.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 9:
                    r.title = e.string();
                    break;
                case 10:
                    r.body = e.string();
                    break;
                case 11:
                    r.legalese = e.string();
                    break;
                case 12:
                    r.perkTitle = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.titleLocalized &&
                d.X.internalBinaryWrite(e.titleLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.legaleseLocalized &&
                d.X.internalBinaryWrite(e.legaleseLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.termsUrl && t.tag(5, a.O0.LengthDelimited).string(e.termsUrl),
            e.button && T.$J.internalBinaryWrite(e.button, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.perkTitleLocalized &&
                d.X.internalBinaryWrite(e.perkTitleLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join());
        for (let i = 0; i < e.perkCards.length; i++)
            p.internalBinaryWrite(e.perkCards[i], t.tag(8, a.O0.LengthDelimited).fork(), n).join();
        ("" !== e.title && t.tag(9, a.O0.LengthDelimited).string(e.title),
            "" !== e.body && t.tag(10, a.O0.LengthDelimited).string(e.body),
            "" !== e.legalese && t.tag(11, a.O0.LengthDelimited).string(e.legalese),
            "" !== e.perkTitle && t.tag(12, a.O0.LengthDelimited).string(e.perkTitle));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let N = new S();
class C extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalVideoLed", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "title_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "perk_cards", kind: "message", repeat: 1, T: () => g },
            { no: 5, name: "button", kind: "message", T: () => T.$J },
            { no: 6, name: "legalese_localized", kind: "message", T: () => d.X },
            { no: 7, name: "terms_url", kind: "scalar", T: 9 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "body", kind: "scalar", T: 9 },
            { no: 10, name: "legalese", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { perkCards: [], termsUrl: "", title: "", body: "", legalese: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.titleLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.titleLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.perkCards.push(g.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    r.button = T.$J.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 6:
                    r.legaleseLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.legaleseLocalized);
                    break;
                case 7:
                    r.termsUrl = e.string();
                    break;
                case 8:
                    r.title = e.string();
                    break;
                case 9:
                    r.body = e.string();
                    break;
                case 10:
                    r.legalese = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.titleLocalized &&
                d.X.internalBinaryWrite(e.titleLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join());
        for (let i = 0; i < e.perkCards.length; i++)
            g.internalBinaryWrite(e.perkCards[i], t.tag(4, a.O0.LengthDelimited).fork(), n).join();
        (e.button && T.$J.internalBinaryWrite(e.button, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.legaleseLocalized &&
                d.X.internalBinaryWrite(e.legaleseLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.termsUrl && t.tag(7, a.O0.LengthDelimited).string(e.termsUrl),
            "" !== e.title && t.tag(8, a.O0.LengthDelimited).string(e.title),
            "" !== e.body && t.tag(9, a.O0.LengthDelimited).string(e.body),
            "" !== e.legalese && t.tag(10, a.O0.LengthDelimited).string(e.legalese));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let O = new C();
class R extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GameExitPanel", [
            { no: 6, name: "trigger_application_id", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "cta", kind: "message", T: () => T.$J },
            { no: 5, name: "image", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = { triggerApplicationId: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 6:
                    r.triggerApplicationId = e.string();
                    break;
                case 2:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 3:
                    r.body = e.string();
                    break;
                case 4:
                    r.cta = T.$J.internalBinaryRead(e, e.uint32(), n, r.cta);
                    break;
                case 5:
                    r.image = c.i.internalBinaryRead(e, e.uint32(), n, r.image);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.triggerApplicationId && t.tag(6, a.O0.LengthDelimited).string(e.triggerApplicationId),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.body && t.tag(3, a.O0.LengthDelimited).string(e.body),
            e.cta && T.$J.internalBinaryWrite(e.cta, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.image && c.i.internalBinaryWrite(e.image, t.tag(5, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let L = new R();
class y extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.CollectionPageMarketingBlock", [
            { no: 1, name: "title_localized", kind: "message", T: () => d.X },
            { no: 2, name: "title", kind: "scalar", T: 9 },
            { no: 3, name: "art", kind: "message", T: () => c.i },
            { no: 4, name: "button", kind: "message", T: () => T.$J },
        ]);
    }
    create(e) {
        let t = { title: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.titleLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.titleLocalized);
                    break;
                case 2:
                    r.title = e.string();
                    break;
                case 3:
                    r.art = c.i.internalBinaryRead(e, e.uint32(), n, r.art);
                    break;
                case 4:
                    r.button = T.$J.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.titleLocalized && d.X.internalBinaryWrite(e.titleLocalized, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.title && t.tag(2, a.O0.LengthDelimited).string(e.title),
            e.art && c.i.internalBinaryWrite(e.art, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.button && T.$J.internalBinaryWrite(e.button, t.tag(4, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let D = new y();
var b = n(24197),
    v = n(174929);
class P extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OutboundPromotionClaimModalCard", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let M = new P();
class U extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OutboundPromotionPopover", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let w = new U();
class G extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBentoBox", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let x = new G();
class k extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumHomePerkCard", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let F = new k();
class B extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "header_localized", kind: "message", T: () => d.X },
            { no: 5, name: "body_localized", kind: "message", T: () => d.X },
            { no: 6, name: "badge_text", kind: "scalar", T: 9 },
            { no: 7, name: "badge_text_localized", kind: "message", T: () => d.X },
            { no: 8, name: "badge_icon", kind: "scalar", T: 9 },
            { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 },
            { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 11, name: "hover_background", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", badgeText: "", badgeIcon: "", badgeCountdownEndsAt: "", showHoverGradient: !1 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 4:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 6:
                    r.badgeText = e.string();
                    break;
                case 7:
                    r.badgeTextLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.badgeTextLocalized);
                    break;
                case 8:
                    r.badgeIcon = e.string();
                    break;
                case 9:
                    r.badgeCountdownEndsAt = e.string();
                    break;
                case 10:
                    r.showHoverGradient = e.bool();
                    break;
                case 11:
                    r.hoverBackground = c.i.internalBinaryRead(e, e.uint32(), n, r.hoverBackground);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeText && t.tag(6, a.O0.LengthDelimited).string(e.badgeText),
            e.badgeTextLocalized &&
                d.X.internalBinaryWrite(e.badgeTextLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeIcon && t.tag(8, a.O0.LengthDelimited).string(e.badgeIcon),
            "" !== e.badgeCountdownEndsAt && t.tag(9, a.O0.LengthDelimited).string(e.badgeCountdownEndsAt),
            !1 !== e.showHoverGradient && t.tag(10, a.O0.Varint).bool(e.showHoverGradient),
            e.hoverBackground &&
                c.i.internalBinaryWrite(e.hoverBackground, t.tag(11, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let V = new B();
class H extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostTabBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => E.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 5:
                    r.header = e.string();
                    break;
                case 6:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let j = new H();
class W extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => E.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 5:
                    r.header = e.string();
                    break;
                case 6:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Y = new W();
class K extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => E.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 5:
                    r.header = e.string();
                    break;
                case 6:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let $ = new K();
class X extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "button", kind: "message", T: () => T.$J },
            { no: 3, name: "help_article", kind: "message", T: () => E.O },
            { no: 4, name: "header_localized", kind: "message", T: () => d.X },
            { no: 5, name: "body_localized", kind: "message", T: () => d.X },
            { no: 6, name: "header", kind: "scalar", T: 9 },
            { no: 7, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.button = T.$J.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 3:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 4:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 6:
                    r.header = e.string();
                    break;
                case 7:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.button && T.$J.internalBinaryWrite(e.button, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(6, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(7, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let z = new X();
class q extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaletteColor", [
            { no: 1, name: "palette_color", kind: "scalar", T: 9 },
            { no: 2, name: "opacity", kind: "scalar", T: 2 },
        ]);
    }
    create(e) {
        let t = { paletteColor: "", opacity: 0 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.paletteColor = e.string();
                    break;
                case 2:
                    r.opacity = e.float();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.paletteColor && t.tag(1, a.O0.LengthDelimited).string(e.paletteColor),
            0 !== e.opacity && t.tag(2, a.O0.Bit32).float(e.opacity));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Q = new q();
class J extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ThemedPaletteColor", [
            { no: 1, name: "light", kind: "message", T: () => Q },
            { no: 2, name: "ash", kind: "message", T: () => Q },
            { no: 3, name: "dark", kind: "message", T: () => Q },
            { no: 4, name: "onyx", kind: "message", T: () => Q },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.light = Q.internalBinaryRead(e, e.uint32(), n, r.light);
                    break;
                case 2:
                    r.ash = Q.internalBinaryRead(e, e.uint32(), n, r.ash);
                    break;
                case 3:
                    r.dark = Q.internalBinaryRead(e, e.uint32(), n, r.dark);
                    break;
                case 4:
                    r.onyx = Q.internalBinaryRead(e, e.uint32(), n, r.onyx);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.light && Q.internalBinaryWrite(e.light, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.ash && Q.internalBinaryWrite(e.ash, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.dark && Q.internalBinaryWrite(e.dark, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.onyx && Q.internalBinaryWrite(e.onyx, t.tag(4, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Z = new J();
class ee extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.TabGradientColors", [
            { no: 1, name: "center", kind: "message", T: () => Z },
            { no: 2, name: "inner_ring", kind: "message", T: () => Z },
            { no: 3, name: "outer_ring", kind: "message", T: () => Z },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.center = Z.internalBinaryRead(e, e.uint32(), n, r.center);
                    break;
                case 2:
                    r.innerRing = Z.internalBinaryRead(e, e.uint32(), n, r.innerRing);
                    break;
                case 3:
                    r.outerRing = Z.internalBinaryRead(e, e.uint32(), n, r.outerRing);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.center && Z.internalBinaryWrite(e.center, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.innerRing && Z.internalBinaryWrite(e.innerRing, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.outerRing && Z.internalBinaryWrite(e.outerRing, t.tag(3, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let et = new ee();
var en = n(414525),
    ei =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.FIRST = 1)] = "FIRST"),
        (r[(r.SECOND = 2)] = "SECOND"),
        r);
class er extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestComponent", [
            { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
            { no: 2, name: "localized_text_field", kind: "message", T: () => d.X },
            { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
            { no: 4, name: "textarea_field", kind: "message", T: () => d.X },
            { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
            { no: 6, name: "asset_field", kind: "scalar", T: 9 },
            { no: 7, name: "themed_asset_field", kind: "message", T: () => c.i },
            { no: 8, name: "help_article_field", kind: "message", T: () => E.O },
            { no: 9, name: "cta_field", kind: "message", T: () => T.$J },
            { no: 10, name: "gradient_field", kind: "message", T: () => en.H },
            {
                no: 11,
                name: "select_field",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    ei,
                    "ADMIN_EDITOR_TEST_SELECT_OPTION_",
                ],
            },
            {
                no: 12,
                name: "multi_select_field",
                kind: "enum",
                repeat: 1,
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    ei,
                    "ADMIN_EDITOR_TEST_SELECT_OPTION_",
                ],
            },
            { no: 13, name: "list_field", kind: "message", repeat: 1, T: () => el },
            { no: 14, name: "tab_gradient_colors_field", kind: "message", T: () => et },
            { no: 15, name: "shown_when_checkbox_field", kind: "scalar", T: 8 },
            { no: 16, name: "shown_when_field", kind: "message", T: () => et },
        ]);
    }
    create(e) {
        let t = {
            deprecatedField: "",
            plainTextField: "",
            checkboxField: !1,
            assetField: "",
            selectField: 0,
            multiSelectField: [],
            listField: [],
            shownWhenCheckboxField: !1,
        };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.deprecatedField = e.string();
                    break;
                case 2:
                    r.localizedTextField = d.X.internalBinaryRead(e, e.uint32(), n, r.localizedTextField);
                    break;
                case 3:
                    r.plainTextField = e.string();
                    break;
                case 4:
                    r.textareaField = d.X.internalBinaryRead(e, e.uint32(), n, r.textareaField);
                    break;
                case 5:
                    r.checkboxField = e.bool();
                    break;
                case 6:
                    r.assetField = e.string();
                    break;
                case 7:
                    r.themedAssetField = c.i.internalBinaryRead(e, e.uint32(), n, r.themedAssetField);
                    break;
                case 8:
                    r.helpArticleField = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticleField);
                    break;
                case 9:
                    r.ctaField = T.$J.internalBinaryRead(e, e.uint32(), n, r.ctaField);
                    break;
                case 10:
                    r.gradientField = en.H.internalBinaryRead(e, e.uint32(), n, r.gradientField);
                    break;
                case 11:
                    r.selectField = e.int32();
                    break;
                case 12:
                    if (i === a.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.multiSelectField.push(e.int32());
                    else r.multiSelectField.push(e.int32());
                    break;
                case 13:
                    r.listField.push(el.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 14:
                    r.tabGradientColorsField = et.internalBinaryRead(e, e.uint32(), n, r.tabGradientColorsField);
                    break;
                case 15:
                    r.shownWhenCheckboxField = e.bool();
                    break;
                case 16:
                    r.shownWhenField = et.internalBinaryRead(e, e.uint32(), n, r.shownWhenField);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.deprecatedField && t.tag(1, a.O0.LengthDelimited).string(e.deprecatedField),
            e.localizedTextField &&
                d.X.internalBinaryWrite(e.localizedTextField, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.plainTextField && t.tag(3, a.O0.LengthDelimited).string(e.plainTextField),
            e.textareaField &&
                d.X.internalBinaryWrite(e.textareaField, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.checkboxField && t.tag(5, a.O0.Varint).bool(e.checkboxField),
            "" !== e.assetField && t.tag(6, a.O0.LengthDelimited).string(e.assetField),
            e.themedAssetField &&
                c.i.internalBinaryWrite(e.themedAssetField, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticleField &&
                E.O.internalBinaryWrite(e.helpArticleField, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            e.ctaField && T.$J.internalBinaryWrite(e.ctaField, t.tag(9, a.O0.LengthDelimited).fork(), n).join(),
            e.gradientField &&
                en.H.internalBinaryWrite(e.gradientField, t.tag(10, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.selectField && t.tag(11, a.O0.Varint).int32(e.selectField),
            e.multiSelectField.length)
        ) {
            t.tag(12, a.O0.LengthDelimited).fork();
            for (let n = 0; n < e.multiSelectField.length; n++) t.int32(e.multiSelectField[n]);
            t.join();
        }
        for (let i = 0; i < e.listField.length; i++)
            el.internalBinaryWrite(e.listField[i], t.tag(13, a.O0.LengthDelimited).fork(), n).join();
        (e.tabGradientColorsField &&
            et.internalBinaryWrite(e.tabGradientColorsField, t.tag(14, a.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.shownWhenCheckboxField && t.tag(15, a.O0.Varint).bool(e.shownWhenCheckboxField),
            e.shownWhenField &&
                et.internalBinaryWrite(e.shownWhenField, t.tag(16, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ea = new er();
class es extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestListItem", [
            { no: 1, name: "text_localized", kind: "message", T: () => d.X },
            { no: 2, name: "asset", kind: "message", T: () => c.i },
            { no: 3, name: "text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { text: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.textLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.textLocalized);
                    break;
                case 2:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 3:
                    r.text = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.textLocalized && d.X.internalBinaryWrite(e.textLocalized, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.text && t.tag(3, a.O0.LengthDelimited).string(e.text));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let el = new es();
var eo = n(406935);
class ed extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", T.dz, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => E.O },
            { no: 6, name: "body_localized", kind: "message", T: () => d.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => d.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => eo.ol },
            { no: 9, name: "shop_collection_id", kind: "message", T: () => eo.ol },
            {
                no: 10,
                name: "gift_modal_destination",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.GiftModalDestination", T.We, "GIFT_MODAL_DESTINATION_"],
            },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "", giftModalDestination: 0 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.body = e.string();
                    break;
                case 2:
                    r.ctaLabel = e.string();
                    break;
                case 3:
                    r.ctaAction = e.int32();
                    break;
                case 4:
                    r.deeplinkSection = e.string();
                    break;
                case 5:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 6:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 7:
                    r.ctaLabelLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.ctaLabelLocalized);
                    break;
                case 8:
                    r.navigableStorefrontApplicationId = eo.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.navigableStorefrontApplicationId,
                    );
                    break;
                case 9:
                    r.shopCollectionId = eo.ol.internalBinaryRead(e, e.uint32(), n, r.shopCollectionId);
                    break;
                case 10:
                    r.giftModalDestination = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.body && t.tag(1, a.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, a.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, a.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                d.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                eo.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, a.O0.LengthDelimited).fork(), n)
                    .join(),
            e.shopCollectionId &&
                eo.ol.internalBinaryWrite(e.shopCollectionId, t.tag(9, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.giftModalDestination && t.tag(10, a.O0.Varint).int32(e.giftModalDestination));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ec = new ed();
var eu = n(520361);
class e_ extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PlanSelectCardBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => E.O },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eE = new e_();
class eA extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", T.dz, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => E.O },
            { no: 6, name: "body_localized", kind: "message", T: () => d.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => d.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => eo.ol },
            { no: 9, name: "shop_collection_id", kind: "message", T: () => eo.ol },
            {
                no: 10,
                name: "gift_modal_destination",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.GiftModalDestination", T.We, "GIFT_MODAL_DESTINATION_"],
            },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "", giftModalDestination: 0 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.body = e.string();
                    break;
                case 2:
                    r.ctaLabel = e.string();
                    break;
                case 3:
                    r.ctaAction = e.int32();
                    break;
                case 4:
                    r.deeplinkSection = e.string();
                    break;
                case 5:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 6:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 7:
                    r.ctaLabelLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.ctaLabelLocalized);
                    break;
                case 8:
                    r.navigableStorefrontApplicationId = eo.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.navigableStorefrontApplicationId,
                    );
                    break;
                case 9:
                    r.shopCollectionId = eo.ol.internalBinaryRead(e, e.uint32(), n, r.shopCollectionId);
                    break;
                case 10:
                    r.giftModalDestination = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.body && t.tag(1, a.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, a.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, a.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                d.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                eo.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, a.O0.LengthDelimited).fork(), n)
                    .join(),
            e.shopCollectionId &&
                eo.ol.internalBinaryWrite(e.shopCollectionId, t.tag(9, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.giftModalDestination && t.tag(10, a.O0.Varint).int32(e.giftModalDestination));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ef = new eA();
class eh extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "button", kind: "message", T: () => T.$J },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => E.O },
            { no: 7, name: "header_localized", kind: "message", T: () => d.X },
            { no: 8, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 4:
                    r.button = T.$J.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 5:
                    r.helpArticleId = e.string();
                    break;
                case 6:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 7:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 8:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.button && T.$J.internalBinaryWrite(e.button, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, a.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eI = new eh();
class ep extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "header_localized", kind: "message", T: () => d.X },
            { no: 5, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 4:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let em = new ep();
class eg extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => c.i },
            { no: 5, name: "header_localized", kind: "message", T: () => d.X },
            { no: 6, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.assetUrl = e.string();
                    break;
                case 4:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 5:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 6:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, a.O0.LengthDelimited).string(e.assetUrl),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eT = new eg();
class eS extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.body = e.string();
                    break;
                case 2:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.body && t.tag(1, a.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eN = new eS();
var eC = n(959129),
    eO = n(67948),
    eR = n(978656),
    eL = n(720119);
class ey extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => en.H },
            { no: 5, name: "trinket_rive_animation_url", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = {
            boxAnimationUrl: "",
            trinketAnimationUrl: "",
            trinketGlowAnimationUrl: "",
            trinketRiveAnimationUrl: "",
        };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.boxAnimationUrl = e.string();
                    break;
                case 2:
                    r.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    r.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    r.gradient = en.H.internalBinaryRead(e, e.uint32(), n, r.gradient);
                    break;
                case 5:
                    r.trinketRiveAnimationUrl = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.boxAnimationUrl && t.tag(1, a.O0.LengthDelimited).string(e.boxAnimationUrl),
            "" !== e.trinketAnimationUrl && t.tag(2, a.O0.LengthDelimited).string(e.trinketAnimationUrl),
            "" !== e.trinketGlowAnimationUrl && t.tag(3, a.O0.LengthDelimited).string(e.trinketGlowAnimationUrl),
            e.gradient && en.H.internalBinaryWrite(e.gradient, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.trinketRiveAnimationUrl && t.tag(5, a.O0.LengthDelimited).string(e.trinketRiveAnimationUrl));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eD = new ey();
var eb = n(554146);
class ev extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => T.$J },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", eb.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => E.O },
            { no: 8, name: "header_localized", kind: "message", T: () => d.X },
            { no: 9, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.assetUrl = e.string();
                    break;
                case 2:
                    r.header = e.string();
                    break;
                case 3:
                    r.body = e.string();
                    break;
                case 4:
                    r.helpArticleId = e.string();
                    break;
                case 5:
                    r.button = T.$J.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 6:
                    r.dismissibleContent = e.int32();
                    break;
                case 7:
                    r.helpArticle = E.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 8:
                    r.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 9:
                    r.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.assetUrl && t.tag(1, a.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, a.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, a.O0.LengthDelimited).string(e.helpArticleId),
            e.button && T.$J.internalBinaryWrite(e.button, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, a.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && E.O.internalBinaryWrite(e.helpArticle, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eP = new ev();
var eM = n(297204),
    eU = n(670474);
class ew extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => d.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => d.X },
            { no: 7, name: "background_image", kind: "message", T: () => c.i },
            { no: 8, name: "hover_gradient_colors", kind: "message", T: () => et },
        ]);
    }
    create(e) {
        let t = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: !1, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.badgeLabel = e.string();
                    break;
                case 2:
                    r.acknowledgedBadgeLabel = e.string();
                    break;
                case 3:
                    r.showHoverGradient = e.bool();
                    break;
                case 4:
                    r.deeplinkSection = e.string();
                    break;
                case 5:
                    r.badgeLabelLocalized = d.X.internalBinaryRead(e, e.uint32(), n, r.badgeLabelLocalized);
                    break;
                case 6:
                    r.acknowledgedBadgeLabelLocalized = d.X.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.acknowledgedBadgeLabelLocalized,
                    );
                    break;
                case 7:
                    r.backgroundImage = c.i.internalBinaryRead(e, e.uint32(), n, r.backgroundImage);
                    break;
                case 8:
                    r.hoverGradientColors = et.internalBinaryRead(e, e.uint32(), n, r.hoverGradientColors);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.badgeLabel && t.tag(1, a.O0.LengthDelimited).string(e.badgeLabel),
            "" !== e.acknowledgedBadgeLabel && t.tag(2, a.O0.LengthDelimited).string(e.acknowledgedBadgeLabel),
            !1 !== e.showHoverGradient && t.tag(3, a.O0.Varint).bool(e.showHoverGradient),
            "" !== e.deeplinkSection && t.tag(4, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.badgeLabelLocalized &&
                d.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                d.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            e.backgroundImage &&
                c.i.internalBinaryWrite(e.backgroundImage, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.hoverGradientColors &&
                et.internalBinaryWrite(e.hoverGradientColors, t.tag(8, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eG = new ew();
var ex = n(232582);
class ek extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => ex.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => eG },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => eU.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => eM.Y },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => eP },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => eD },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => eL.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => eR.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => eO.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => eC.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => eN },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => eT },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => em },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => eI },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => ef },
            { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties", T: () => eE },
            { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties", T: () => eu.h },
            { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: () => ec },
            { no: 22, name: "admin_editor_test_component", kind: "message", oneof: "properties", T: () => ea },
            { no: 23, name: "guild_header_coachmark", kind: "message", oneof: "properties", T: () => z },
            { no: 24, name: "guild_boost_checkout_banner", kind: "message", oneof: "properties", T: () => $ },
            { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: () => Y },
            { no: 26, name: "guild_boost_tab_banner", kind: "message", oneof: "properties", T: () => j },
            { no: 27, name: "shop_tab_tooltip", kind: "message", oneof: "properties", T: () => V },
            { no: 28, name: "premium_home_rewards_perk_card", kind: "message", oneof: "properties", T: () => F },
            { no: 29, name: "marketing_page_rewards_bento_box", kind: "message", oneof: "properties", T: () => x },
            { no: 30, name: "outbound_promotion_popover", kind: "message", oneof: "properties", T: () => w },
            { no: 31, name: "outbound_promotion_claim_modal_card", kind: "message", oneof: "properties", T: () => M },
            { no: 32, name: "shop_coachmark", kind: "message", oneof: "properties", T: () => v.I },
            { no: 33, name: "nitro_perk_card", kind: "message", oneof: "properties", T: () => b.p },
            { no: 34, name: "collection_page_marketing_block", kind: "message", oneof: "properties", T: () => D },
            { no: 35, name: "game_exit_panel", kind: "message", oneof: "properties", T: () => L },
            { no: 36, name: "announcement_modal_video_led", kind: "message", oneof: "properties", T: () => O },
            { no: 37, name: "announcement_modal_two_panel", kind: "message", oneof: "properties", T: () => N },
            { no: 38, name: "nitro_home_section_header", kind: "message", oneof: "properties", T: () => f },
            { no: 39, name: "orbs_confirmation_modal", kind: "message", oneof: "properties", T: () => _ },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
            { no: 18, name: "is_default_base", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "", isDefaultBase: !1 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    r.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: ex.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    r.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: eG.internalBinaryRead(e, e.uint32(), n, r.properties.premiumTab),
                    };
                    break;
                case 5:
                    r.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: eU.C.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.marketingPageBanner,
                        ),
                    };
                    break;
                case 6:
                    r.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: eM.Y.internalBinaryRead(e, e.uint32(), n, r.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    r.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: eP.internalBinaryRead(e, e.uint32(), n, r.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    r.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: eD.internalBinaryRead(e, e.uint32(), n, r.properties.giftIcon),
                    };
                    break;
                case 9:
                    r.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: eL.l.internalBinaryRead(e, e.uint32(), n, r.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    r.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: eR.s.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    r.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: eO.E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    r.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: eC.v.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    r.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: eN.internalBinaryRead(e, e.uint32(), n, r.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    r.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: eT.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    r.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: em.internalBinaryRead(e, e.uint32(), n, r.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    r.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: eI.internalBinaryRead(e, e.uint32(), n, r.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    r.properties = {
                        oneofKind: "nagbar",
                        nagbar: ef.internalBinaryRead(e, e.uint32(), n, r.properties.nagbar),
                    };
                    break;
                case 19:
                    r.properties = {
                        oneofKind: "planSelectCardBanner",
                        planSelectCardBanner: eE.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.planSelectCardBanner,
                        ),
                    };
                    break;
                case 20:
                    r.properties = {
                        oneofKind: "billingSettingsBanner",
                        billingSettingsBanner: eu.h.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.billingSettingsBanner,
                        ),
                    };
                    break;
                case 21:
                    r.properties = {
                        oneofKind: "shopNagbar",
                        shopNagbar: ec.internalBinaryRead(e, e.uint32(), n, r.properties.shopNagbar),
                    };
                    break;
                case 22:
                    r.properties = {
                        oneofKind: "adminEditorTestComponent",
                        adminEditorTestComponent: ea.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.adminEditorTestComponent,
                        ),
                    };
                    break;
                case 23:
                    r.properties = {
                        oneofKind: "guildHeaderCoachmark",
                        guildHeaderCoachmark: z.internalBinaryRead(e, e.uint32(), n, r.properties.guildHeaderCoachmark),
                    };
                    break;
                case 24:
                    r.properties = {
                        oneofKind: "guildBoostCheckoutBanner",
                        guildBoostCheckoutBanner: $.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.guildBoostCheckoutBanner,
                        ),
                    };
                    break;
                case 25:
                    r.properties = {
                        oneofKind: "guildBoostMarketingPageBanner",
                        guildBoostMarketingPageBanner: Y.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.guildBoostMarketingPageBanner,
                        ),
                    };
                    break;
                case 26:
                    r.properties = {
                        oneofKind: "guildBoostTabBanner",
                        guildBoostTabBanner: j.internalBinaryRead(e, e.uint32(), n, r.properties.guildBoostTabBanner),
                    };
                    break;
                case 27:
                    r.properties = {
                        oneofKind: "shopTabTooltip",
                        shopTabTooltip: V.internalBinaryRead(e, e.uint32(), n, r.properties.shopTabTooltip),
                    };
                    break;
                case 28:
                    r.properties = {
                        oneofKind: "premiumHomeRewardsPerkCard",
                        premiumHomeRewardsPerkCard: F.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.premiumHomeRewardsPerkCard,
                        ),
                    };
                    break;
                case 29:
                    r.properties = {
                        oneofKind: "marketingPageRewardsBentoBox",
                        marketingPageRewardsBentoBox: x.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.marketingPageRewardsBentoBox,
                        ),
                    };
                    break;
                case 30:
                    r.properties = {
                        oneofKind: "outboundPromotionPopover",
                        outboundPromotionPopover: w.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.outboundPromotionPopover,
                        ),
                    };
                    break;
                case 31:
                    r.properties = {
                        oneofKind: "outboundPromotionClaimModalCard",
                        outboundPromotionClaimModalCard: M.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.outboundPromotionClaimModalCard,
                        ),
                    };
                    break;
                case 32:
                    r.properties = {
                        oneofKind: "shopCoachmark",
                        shopCoachmark: v.I.internalBinaryRead(e, e.uint32(), n, r.properties.shopCoachmark),
                    };
                    break;
                case 33:
                    r.properties = {
                        oneofKind: "nitroPerkCard",
                        nitroPerkCard: b.p.internalBinaryRead(e, e.uint32(), n, r.properties.nitroPerkCard),
                    };
                    break;
                case 34:
                    r.properties = {
                        oneofKind: "collectionPageMarketingBlock",
                        collectionPageMarketingBlock: D.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.collectionPageMarketingBlock,
                        ),
                    };
                    break;
                case 35:
                    r.properties = {
                        oneofKind: "gameExitPanel",
                        gameExitPanel: L.internalBinaryRead(e, e.uint32(), n, r.properties.gameExitPanel),
                    };
                    break;
                case 36:
                    r.properties = {
                        oneofKind: "announcementModalVideoLed",
                        announcementModalVideoLed: O.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.announcementModalVideoLed,
                        ),
                    };
                    break;
                case 37:
                    r.properties = {
                        oneofKind: "announcementModalTwoPanel",
                        announcementModalTwoPanel: N.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.announcementModalTwoPanel,
                        ),
                    };
                    break;
                case 38:
                    r.properties = {
                        oneofKind: "nitroHomeSectionHeader",
                        nitroHomeSectionHeader: f.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.nitroHomeSectionHeader,
                        ),
                    };
                    break;
                case 39:
                    r.properties = {
                        oneofKind: "orbsConfirmationModal",
                        orbsConfirmationModal: _.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.orbsConfirmationModal,
                        ),
                    };
                    break;
                case 3:
                    r.contentIdentifier = e.string();
                    break;
                case 18:
                    r.isDefaultBase = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("placeholder" === e.properties.oneofKind && t.tag(1, a.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                ex.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                eG.internalBinaryWrite(e.properties.premiumTab, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                eU.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                eM.Y.internalBinaryWrite(
                    e.properties.paymentModalBanner,
                    t.tag(6, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                eP.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                eD.internalBinaryWrite(e.properties.giftIcon, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                eL.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                eR.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                eO.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                eC.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                eN
                    .internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                eT
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                em
                    .internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                eI
                    .internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "nagbar" === e.properties.oneofKind &&
                ef.internalBinaryWrite(e.properties.nagbar, t.tag(17, a.O0.LengthDelimited).fork(), n).join(),
            "planSelectCardBanner" === e.properties.oneofKind &&
                eE
                    .internalBinaryWrite(e.properties.planSelectCardBanner, t.tag(19, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "billingSettingsBanner" === e.properties.oneofKind &&
                eu.h
                    .internalBinaryWrite(e.properties.billingSettingsBanner, t.tag(20, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopNagbar" === e.properties.oneofKind &&
                ec.internalBinaryWrite(e.properties.shopNagbar, t.tag(21, a.O0.LengthDelimited).fork(), n).join(),
            "adminEditorTestComponent" === e.properties.oneofKind &&
                ea
                    .internalBinaryWrite(
                        e.properties.adminEditorTestComponent,
                        t.tag(22, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildHeaderCoachmark" === e.properties.oneofKind &&
                z
                    .internalBinaryWrite(e.properties.guildHeaderCoachmark, t.tag(23, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildBoostCheckoutBanner" === e.properties.oneofKind &&
                $.internalBinaryWrite(
                    e.properties.guildBoostCheckoutBanner,
                    t.tag(24, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostMarketingPageBanner" === e.properties.oneofKind &&
                Y.internalBinaryWrite(
                    e.properties.guildBoostMarketingPageBanner,
                    t.tag(25, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostTabBanner" === e.properties.oneofKind &&
                j
                    .internalBinaryWrite(e.properties.guildBoostTabBanner, t.tag(26, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopTabTooltip" === e.properties.oneofKind &&
                V.internalBinaryWrite(e.properties.shopTabTooltip, t.tag(27, a.O0.LengthDelimited).fork(), n).join(),
            "premiumHomeRewardsPerkCard" === e.properties.oneofKind &&
                F.internalBinaryWrite(
                    e.properties.premiumHomeRewardsPerkCard,
                    t.tag(28, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "marketingPageRewardsBentoBox" === e.properties.oneofKind &&
                x
                    .internalBinaryWrite(
                        e.properties.marketingPageRewardsBentoBox,
                        t.tag(29, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "outboundPromotionPopover" === e.properties.oneofKind &&
                w
                    .internalBinaryWrite(
                        e.properties.outboundPromotionPopover,
                        t.tag(30, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "outboundPromotionClaimModalCard" === e.properties.oneofKind &&
                M.internalBinaryWrite(
                    e.properties.outboundPromotionClaimModalCard,
                    t.tag(31, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "shopCoachmark" === e.properties.oneofKind &&
                v.I.internalBinaryWrite(e.properties.shopCoachmark, t.tag(32, a.O0.LengthDelimited).fork(), n).join(),
            "nitroPerkCard" === e.properties.oneofKind &&
                b.p.internalBinaryWrite(e.properties.nitroPerkCard, t.tag(33, a.O0.LengthDelimited).fork(), n).join(),
            "collectionPageMarketingBlock" === e.properties.oneofKind &&
                D.internalBinaryWrite(
                    e.properties.collectionPageMarketingBlock,
                    t.tag(34, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "gameExitPanel" === e.properties.oneofKind &&
                L.internalBinaryWrite(e.properties.gameExitPanel, t.tag(35, a.O0.LengthDelimited).fork(), n).join(),
            "announcementModalVideoLed" === e.properties.oneofKind &&
                O.internalBinaryWrite(
                    e.properties.announcementModalVideoLed,
                    t.tag(36, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "announcementModalTwoPanel" === e.properties.oneofKind &&
                N.internalBinaryWrite(
                    e.properties.announcementModalTwoPanel,
                    t.tag(37, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "nitroHomeSectionHeader" === e.properties.oneofKind &&
                f
                    .internalBinaryWrite(e.properties.nitroHomeSectionHeader, t.tag(38, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "orbsConfirmationModal" === e.properties.oneofKind &&
                _.internalBinaryWrite(
                    e.properties.orbsConfirmationModal,
                    t.tag(39, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "" !== e.contentIdentifier && t.tag(3, a.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, a.O0.Varint).bool(e.isDefaultBase));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eF = new ek();
