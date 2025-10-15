n.d(t, { j: () => s }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    l = n(240773),
    a = n(495852);
class o extends a.C {
    create(e) {
        let t = {
            assetUrl: "",
            header: "",
            body: "",
        };
        return (
            globalThis.Object.defineProperty(t, l.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let l = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    l.assetUrl = e.string();
                    break;
                case 2:
                    l.header = e.string();
                    break;
                case 3:
                    l.body = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, l, t, i, o);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, r.TD.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.TD.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.TD.LengthDelimited).string(e.body);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
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
        ]);
    }
}
let s = new o();
