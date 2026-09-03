n.d(t, { u: () => o });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384);
class l extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.Versions", [
            { no: 1, name: "client_version", kind: "scalar", T: 13 },
            { no: 2, name: "server_version", kind: "scalar", T: 13 },
            { no: 3, name: "data_version", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { clientVersion: 0, serverVersion: 0, dataVersion: 0 };
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
                    a.clientVersion = e.uint32();
                    break;
                case 2:
                    a.serverVersion = e.uint32();
                    break;
                case 3:
                    a.dataVersion = e.uint32();
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
    internalBinaryWrite(e, t, n) {
        0 !== e.clientVersion && t.tag(1, i.O0.Varint).uint32(e.clientVersion),
            0 !== e.serverVersion && t.tag(2, i.O0.Varint).uint32(e.serverVersion),
            0 !== e.dataVersion && t.tag(3, i.O0.Varint).uint32(e.dataVersion);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let o = new l();
