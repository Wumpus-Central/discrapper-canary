n.d(t, { s: () => u }), n(734808), n(896048), n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(414525),
    l = n(453360);
class c extends s.G {
    create(e) {
        let t = {
            header: "",
            desktopBody: "",
            mobileBody: "",
            bannerAssetUrl: "",
            backgroundAssetUrl: "",
            cardAssetUrl: "",
        };
        return (
            globalThis.Object.defineProperty(t, a.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
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
                    a.avatarAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.avatarAsset);
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
                    a.gradient = o.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 9:
                    a.bannerAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.bannerAsset);
                    break;
                case 10:
                    a.backgroundAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
                    break;
                case 11:
                    a.cardAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.cardAsset);
                    break;
                case 12:
                    a.mobileBannerAsset = l.i.internalBinaryRead(e, e.uint32(), n, a.mobileBannerAsset);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let c = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody),
            e.avatarAsset && l.i.internalBinaryWrite(e.avatarAsset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.bannerAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.bannerAssetUrl),
            "" !== e.backgroundAssetUrl && t.tag(6, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            "" !== e.cardAssetUrl && t.tag(7, r.O0.LengthDelimited).string(e.cardAssetUrl),
            e.gradient && o.H.internalBinaryWrite(e.gradient, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bannerAsset && l.i.internalBinaryWrite(e.bannerAsset, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                l.i.internalBinaryWrite(e.backgroundAsset, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.cardAsset && l.i.internalBinaryWrite(e.cardAsset, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBannerAsset &&
                l.i.internalBinaryWrite(e.mobileBannerAsset, t.tag(12, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", [
            {
                no: 1,
                name: "header",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "desktop_body",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "mobile_body",
                kind: "scalar",
                T: 9,
            },
            {
                no: 4,
                name: "avatar_asset",
                kind: "message",
                T: () => l.i,
            },
            {
                no: 5,
                name: "banner_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 6,
                name: "background_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 7,
                name: "card_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 8,
                name: "gradient",
                kind: "message",
                T: () => o.H,
            },
            {
                no: 9,
                name: "banner_asset",
                kind: "message",
                T: () => l.i,
            },
            {
                no: 10,
                name: "background_asset",
                kind: "message",
                T: () => l.i,
            },
            {
                no: 11,
                name: "card_asset",
                kind: "message",
                T: () => l.i,
            },
            {
                no: 12,
                name: "mobile_banner_asset",
                kind: "message",
                T: () => l.i,
            },
        ]);
    }
}
let u = new c();
