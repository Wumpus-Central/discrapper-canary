"use strict";
n.d(t, { Y: () => u, s: () => E });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(991023),
    d = n(414525),
    c = n(453360),
    u =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.NORMAL = 1)] = "NORMAL"),
        (i[(i.LARGE_TILTED = 2)] = "LARGE_TILTED"),
        i);
class _ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
            { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
            { no: 4, name: "avatar_asset", kind: "message", T: () => c.i },
            { no: 5, name: "banner_asset_url", kind: "scalar", T: 9 },
            { no: 6, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 7, name: "card_asset_url", kind: "scalar", T: 9 },
            { no: 8, name: "gradient", kind: "message", T: () => d.H },
            { no: 9, name: "banner_asset", kind: "message", T: () => c.i },
            { no: 10, name: "background_asset", kind: "message", T: () => c.i },
            { no: 11, name: "card_asset", kind: "message", T: () => c.i },
            { no: 12, name: "mobile_banner_asset", kind: "message", T: () => c.i },
            { no: 13, name: "header_localized", kind: "message", T: () => o.X },
            { no: 14, name: "desktop_body_localized", kind: "message", T: () => o.X },
            { no: 15, name: "mobile_body_localized", kind: "message", T: () => o.X },
            {
                no: 16,
                name: "asset_variant",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner.AssetVariant",
                    u,
                    "ASSET_VARIANT_",
                ],
            },
        ]);
    }
    create(e) {
        let t = {
            header: "",
            desktopBody: "",
            mobileBody: "",
            bannerAssetUrl: "",
            backgroundAssetUrl: "",
            cardAssetUrl: "",
            assetVariant: 0,
        };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.header = e.string();
                    break;
                case 2:
                    a.desktopBody = e.string();
                    break;
                case 3:
                    a.mobileBody = e.string();
                    break;
                case 4:
                    a.avatarAsset = c.i.internalBinaryRead(e, e.uint32(), n, a.avatarAsset);
                    break;
                case 5:
                    a.bannerAssetUrl = e.string();
                    break;
                case 6:
                    a.backgroundAssetUrl = e.string();
                    break;
                case 7:
                    a.cardAssetUrl = e.string();
                    break;
                case 8:
                    a.gradient = d.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 9:
                    a.bannerAsset = c.i.internalBinaryRead(e, e.uint32(), n, a.bannerAsset);
                    break;
                case 10:
                    a.backgroundAsset = c.i.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
                    break;
                case 11:
                    a.cardAsset = c.i.internalBinaryRead(e, e.uint32(), n, a.cardAsset);
                    break;
                case 12:
                    a.mobileBannerAsset = c.i.internalBinaryRead(e, e.uint32(), n, a.mobileBannerAsset);
                    break;
                case 13:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 14:
                    a.desktopBodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.desktopBodyLocalized);
                    break;
                case 15:
                    a.mobileBodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.mobileBodyLocalized);
                    break;
                case 16:
                    a.assetVariant = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody),
            e.avatarAsset && c.i.internalBinaryWrite(e.avatarAsset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.bannerAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.bannerAssetUrl),
            "" !== e.backgroundAssetUrl && t.tag(6, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            "" !== e.cardAssetUrl && t.tag(7, r.O0.LengthDelimited).string(e.cardAssetUrl),
            e.gradient && d.H.internalBinaryWrite(e.gradient, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bannerAsset && c.i.internalBinaryWrite(e.bannerAsset, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                c.i.internalBinaryWrite(e.backgroundAsset, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.cardAsset && c.i.internalBinaryWrite(e.cardAsset, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBannerAsset &&
                c.i.internalBinaryWrite(e.mobileBannerAsset, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(13, r.O0.LengthDelimited).fork(), n).join(),
            e.desktopBodyLocalized &&
                o.X.internalBinaryWrite(e.desktopBodyLocalized, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBodyLocalized &&
                o.X.internalBinaryWrite(e.mobileBodyLocalized, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.assetVariant && t.tag(16, r.O0.Varint).int32(e.assetVariant);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let E = new _();
