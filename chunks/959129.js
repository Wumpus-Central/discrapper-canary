"use strict";
n.d(t, { v: () => d });
var i = n(852015),
    r = n(144367),
    s = n(428420),
    a = n(535384),
    o = n(991023),
    l = n(453360),
    u = n(414525);
class c extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 5, name: "gradient", kind: "message", T: () => u.H },
            { no: 6, name: "text_color", kind: "scalar", T: 9 },
            { no: 7, name: "additional_terms", kind: "scalar", T: 9 },
            { no: 8, name: "asset", kind: "message", T: () => l.i },
            { no: 9, name: "background_asset", kind: "message", T: () => l.i },
            { no: 10, name: "header_localized", kind: "message", T: () => o.X },
            { no: 11, name: "body_localized", kind: "message", T: () => o.X },
            { no: 12, name: "additional_terms_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", backgroundAssetUrl: "", textColor: "", additionalTerms: "" };
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
                    s.backgroundAssetUrl = e.string();
                    break;
                case 5:
                    s.gradient = u.H.internalBinaryRead(e, e.uint32(), n, s.gradient);
                    break;
                case 6:
                    s.textColor = e.string();
                    break;
                case 7:
                    s.additionalTerms = e.string();
                    break;
                case 8:
                    s.asset = l.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 9:
                    s.backgroundAsset = l.i.internalBinaryRead(e, e.uint32(), n, s.backgroundAsset);
                    break;
                case 10:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 11:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                case 12:
                    s.additionalTermsLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.additionalTermsLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, c);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            "" !== e.backgroundAssetUrl && t.tag(4, i.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.gradient && u.H.internalBinaryWrite(e.gradient, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.textColor && t.tag(6, i.O0.LengthDelimited).string(e.textColor),
            "" !== e.additionalTerms && t.tag(7, i.O0.LengthDelimited).string(e.additionalTerms),
            e.asset && l.i.internalBinaryWrite(e.asset, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                l.i.internalBinaryWrite(e.backgroundAsset, t.tag(9, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(10, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(11, i.O0.LengthDelimited).fork(), n).join(),
            e.additionalTermsLocalized &&
                o.X.internalBinaryWrite(e.additionalTermsLocalized, t.tag(12, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let d = new c();
