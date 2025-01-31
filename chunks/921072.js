n.d(t, { u$: () => l }), n(47120), n(411104), n(653041);
var i = n(230367),
    r = n(320215),
    a = n(240773),
    s = n(495852),
    o = n(835913),
    l = (function (e) {
        return (e[(e.UNSPECIFIED_DISCLOSURE = 0)] = 'UNSPECIFIED_DISCLOSURE'), (e[(e.IP_LOCATION = 1)] = 'IP_LOCATION'), (e[(e.DISPLAYS_ADVERTISEMENTS = 2)] = 'DISPLAYS_ADVERTISEMENTS'), (e[(e.PARTNER_SDK_DATA_SHARING_MESSAGE = 3)] = 'PARTNER_SDK_DATA_SHARING_MESSAGE'), e;
    })({});
class u extends s.C {
    create(e) {
        let t = {
            metadata: {},
            platformName: '',
            platformUsername: '',
            version: '0'
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, r.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.metadata, e, n);
                    break;
                case 2:
                    a.platformName = e.string();
                    break;
                case 3:
                    a.platformUsername = e.string();
                    break;
                case 4:
                    a.version = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
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
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata');
            }
        }
        e[null != a ? a : ''] = null != s ? s : '';
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.metadata)) t.tag(1, i.TD.LengthDelimited).fork().tag(1, i.TD.LengthDelimited).string(n).tag(2, i.TD.LengthDelimited).string(e.metadata[n]).join();
        '' !== e.platformName && t.tag(2, i.TD.LengthDelimited).string(e.platformName), '' !== e.platformUsername && t.tag(3, i.TD.LengthDelimited).string(e.platformUsername), '0' !== e.version && t.tag(4, i.TD.Bit64).fixed64(e.version);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
new u();
class c extends s.C {
    create(e) {
        let t = { disclosureType: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, r.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.disclosureType = e.int32();
                    break;
                case 2:
                    a.ackedAt = o.E.internalBinaryRead(e, e.uint32(), n, a.ackedAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.disclosureType && t.tag(1, i.TD.Varint).int32(e.disclosureType), e.ackedAt && o.E.internalBinaryWrite(e.ackedAt, t.tag(2, i.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
                T: () => o.E
            }
        ]);
    }
}
let d = new c();
class f extends s.C {
    create(e) {
        let t = { ackedDisclosures: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, r.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.ackedDisclosures.push(d.internalBinaryRead(e, e.uint32(), n));
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.ackedDisclosures.length; r++) d.internalBinaryWrite(e.ackedDisclosures[r], t.tag(1, i.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
