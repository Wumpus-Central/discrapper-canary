n.d(t, { p: () => l }), n(980754), n(388685), n(539854), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852);
class s extends o.C {
    create(e) {
        let t = {
            colors: [],
            angle: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.colors.push(e.string());
                    break;
                case 2:
                    a.angle = e.float();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.colors[n]);
        0 !== e.angle && t.tag(2, r.TD.Bit32).float(e.angle);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.Gradient", [
            {
                no: 1,
                name: "colors",
                kind: "scalar",
                repeat: 2,
                T: 9,
            },
            {
                no: 2,
                name: "angle",
                kind: "scalar",
                T: 2,
            },
        ]);
    }
}
let l = new s();
