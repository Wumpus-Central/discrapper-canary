n.d(t, { u$: () => l }), n(611060), n(47120), n(411104), n(653041);
var r = n(230367),
    i = n(320215),
    o = n(240773),
    a = n(495852),
    s = n(835913),
    l = (function (e) {
        return (e[(e.UNSPECIFIED_DISCLOSURE = 0)] = 'UNSPECIFIED_DISCLOSURE'), (e[(e.IP_LOCATION = 1)] = 'IP_LOCATION'), (e[(e.DISPLAYS_ADVERTISEMENTS = 2)] = 'DISPLAYS_ADVERTISEMENTS'), (e[(e.PARTNER_SDK_DATA_SHARING_MESSAGE = 3)] = 'PARTNER_SDK_DATA_SHARING_MESSAGE'), e;
    })({});
class c extends a.C {
    create(e) {
        let t = {
            metadata: {},
            platformName: '',
            platformUsername: '',
            version: '0'
        };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(o.metadata, e, n);
                    break;
                case 2:
                    o.platformName = e.string();
                    break;
                case 3:
                    o.platformUsername = e.string();
                    break;
                case 4:
                    o.version = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata');
            }
        }
        e[null != o ? o : ''] = null != a ? a : '';
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.metadata)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(n).tag(2, r.TD.LengthDelimited).string(e.metadata[n]).join();
        '' !== e.platformName && t.tag(2, r.TD.LengthDelimited).string(e.platformName), '' !== e.platformUsername && t.tag(3, r.TD.LengthDelimited).string(e.platformUsername), '0' !== e.version && t.tag(4, r.TD.Bit64).fixed64(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection', [
            {
                no: 1,
                name: 'metadata',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'scalar',
                    T: 9
                }
            },
            {
                no: 2,
                name: 'platform_name',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'platform_username',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'version',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
new c();
class u extends a.C {
    create(e) {
        let t = { disclosureType: 0 };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    o.disclosureType = e.int32();
                    break;
                case 2:
                    o.ackedAt = s.E.internalBinaryRead(e, e.uint32(), n, o.ackedAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, l);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.disclosureType && t.tag(1, r.TD.Varint).int32(e.disclosureType), e.ackedAt && s.E.internalBinaryWrite(e.ackedAt, t.tag(2, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure', [
            {
                no: 1,
                name: 'disclosure_type',
                kind: 'enum',
                T: () => ['discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType', l]
            },
            {
                no: 2,
                name: 'acked_at',
                kind: 'message',
                T: () => s.E
            }
        ]);
    }
}
let d = new u();
class f extends a.C {
    create(e) {
        let t = { ackedDisclosures: [] };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) o.ackedDisclosures.push(d.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ackedDisclosures.length; i++) d.internalBinaryWrite(e.ackedDisclosures[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures', [
            {
                no: 1,
                name: 'acked_disclosures',
                kind: 'message',
                repeat: 1,
                T: () => d
            }
        ]);
    }
}
new f();
