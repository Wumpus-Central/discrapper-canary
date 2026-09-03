n.d(t, { X: () => o });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384);
class l extends s.G {
    constructor() {
        super("discord_protos.common.v1.LocalizedString", [
            { no: 1, name: "default", kind: "scalar", T: 9 },
            { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
        ]);
    }
    create(e) {
        let t = { default: "", localizations: {} };
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
                    a.default = e.string();
                    break;
                case 2:
                    this.binaryReadMap2(a.localizations, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    binaryReadMap2(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.common.v1.LocalizedString.localizations",
                    );
            }
        }
        e[a ?? ""] = s ?? "";
    }
    internalBinaryWrite(e, t, n) {
        for (let n of ("" !== e.default && t.tag(1, i.O0.LengthDelimited).string(e.default),
        Object.keys(e.localizations)))
            t.tag(2, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.LengthDelimited)
                .string(e.localizations[n])
                .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let o = new l();
class d extends s.G {
    constructor() {
        super("discord_protos.common.v1.LocalizedSnowflake", [
            { no: 1, name: "default", kind: "scalar", T: 6 },
            { no: 2, name: "localizations", kind: "map", K: 9, V: { kind: "scalar", T: 6 } },
        ]);
    }
    create(e) {
        let t = { default: "0", localizations: {} };
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
                    a.default = e.fixed64().toString();
                    break;
                case 2:
                    this.binaryReadMap2(a.localizations, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    binaryReadMap2(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.fixed64().toString();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.common.v1.LocalizedSnowflake.localizations",
                    );
            }
        }
        e[a ?? ""] = s ?? "0";
    }
    internalBinaryWrite(e, t, n) {
        for (let n of ("0" !== e.default && t.tag(1, i.O0.Bit64).fixed64(e.default), Object.keys(e.localizations)))
            t.tag(2, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.Bit64)
                .fixed64(e.localizations[n])
                .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new d();
