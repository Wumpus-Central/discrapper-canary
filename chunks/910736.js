"use strict";
n.d(t, { W: () => f });
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(330287),
    l = n(453360),
    u = n(232582);
class c extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopoverCTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", u.dz, "BUTTON_ACTION_"],
            },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0 };
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
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
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
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let d = new c();
class _ extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => l.i },
            { no: 4, name: "button", kind: "message", T: () => d },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => o.O },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
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
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.asset = l.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 4:
                    s.button = d.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 5:
                    s.helpArticleId = e.string();
                    break;
                case 6:
                    s.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let u = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.asset && l.i.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.button && d.internalBinaryWrite(e.button, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, r.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let f = new _();
