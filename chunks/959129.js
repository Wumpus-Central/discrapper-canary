"use strict";
n.d(t, { v: () => u });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(991023),
    o = n(453360),
    d = n(414525);
class c extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 5, name: "gradient", kind: "message", T: () => d.H },
            { no: 6, name: "text_color", kind: "scalar", T: 9 },
            { no: 7, name: "additional_terms", kind: "scalar", T: 9 },
            { no: 8, name: "asset", kind: "message", T: () => o.i },
            { no: 9, name: "background_asset", kind: "message", T: () => o.i },
            { no: 10, name: "header_localized", kind: "message", T: () => l.X },
            { no: 11, name: "body_localized", kind: "message", T: () => l.X },
            { no: 12, name: "additional_terms_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", backgroundAssetUrl: "", textColor: "", additionalTerms: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.assetUrl = e.string();
                    break;
                case 2:
                    a.header = e.string();
                    break;
                case 3:
                    a.body = e.string();
                    break;
                case 4:
                    a.backgroundAssetUrl = e.string();
                    break;
                case 5:
                    a.gradient = d.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 6:
                    a.textColor = e.string();
                    break;
                case 7:
                    a.additionalTerms = e.string();
                    break;
                case 8:
                    a.asset = o.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 9:
                    a.backgroundAsset = o.i.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
                    break;
                case 10:
                    a.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 11:
                    a.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 12:
                    a.additionalTermsLocalized = l.X.internalBinaryRead(e, e.uint32(), n, a.additionalTermsLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            "" !== e.backgroundAssetUrl && t.tag(4, i.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.gradient && d.H.internalBinaryWrite(e.gradient, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.textColor && t.tag(6, i.O0.LengthDelimited).string(e.textColor),
            "" !== e.additionalTerms && t.tag(7, i.O0.LengthDelimited).string(e.additionalTerms),
            e.asset && o.i.internalBinaryWrite(e.asset, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                o.i.internalBinaryWrite(e.backgroundAsset, t.tag(9, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(10, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(11, i.O0.LengthDelimited).fork(), n).join(),
            e.additionalTermsLocalized &&
                l.X.internalBinaryWrite(e.additionalTermsLocalized, t.tag(12, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let u = new c();
