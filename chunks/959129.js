n.d(t, { v: () => u }), n(734808), n(896048), n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(453360),
    l = n(414525);
class c extends s.G {
    create(e) {
        let t = {
            assetUrl: "",
            header: "",
            body: "",
            backgroundAssetUrl: "",
            textColor: "",
            additionalTerms: "",
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
                    a.gradient = l.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            "" !== e.backgroundAssetUrl && t.tag(4, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.gradient && l.H.internalBinaryWrite(e.gradient, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.textColor && t.tag(6, r.O0.LengthDelimited).string(e.textColor),
            "" !== e.additionalTerms && t.tag(7, r.O0.LengthDelimited).string(e.additionalTerms),
            e.asset && o.i.internalBinaryWrite(e.asset, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                o.i.internalBinaryWrite(e.backgroundAsset, t.tag(9, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", [
            {
                no: 1,
                name: "asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "header",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "body",
                kind: "scalar",
                T: 9,
            },
            {
                no: 4,
                name: "background_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 5,
                name: "gradient",
                kind: "message",
                T: () => l.H,
            },
            {
                no: 6,
                name: "text_color",
                kind: "scalar",
                T: 9,
            },
            {
                no: 7,
                name: "additional_terms",
                kind: "scalar",
                T: 9,
            },
            {
                no: 8,
                name: "asset",
                kind: "message",
                T: () => o.i,
            },
            {
                no: 9,
                name: "background_asset",
                kind: "message",
                T: () => o.i,
            },
        ]);
    }
}
let u = new c();
