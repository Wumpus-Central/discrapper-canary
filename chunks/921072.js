r.d(n, {
    u$: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(411104);
var s = r(653041);
var l = r(230367),
    u = r(320215),
    c = r(240773),
    d = r(495852),
    f = r(835913);
!(function (e) {
    (e[(e.UNSPECIFIED_DISCLOSURE = 0)] = 'UNSPECIFIED_DISCLOSURE'), (e[(e.IP_LOCATION = 1)] = 'IP_LOCATION'), (e[(e.DISPLAYS_ADVERTISEMENTS = 2)] = 'DISPLAYS_ADVERTISEMENTS'), (e[(e.PARTNER_SDK_DATA_SHARING_MESSAGE = 3)] = 'PARTNER_SDK_DATA_SHARING_MESSAGE');
})(i || (i = {}));
class p extends d.C {
    create(e) {
        let n = {
            metadata: {},
            platformName: '',
            platformUsername: '',
            version: '0'
        };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    this.binaryReadMap1(a.metadata, e, r);
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
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, r] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = n.string();
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata');
            }
        }
        e[null != o ? o : ''] = null != s ? s : '';
    }
    internalBinaryWrite(e, n, r) {
        for (let r of Object.keys(e.metadata)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(r).tag(2, l.TD.LengthDelimited).string(e.metadata[r]).join();
        '' !== e.platformName && n.tag(2, l.TD.LengthDelimited).string(e.platformName), '' !== e.platformUsername && n.tag(3, l.TD.LengthDelimited).string(e.platformUsername), '0' !== e.version && n.tag(4, l.TD.Bit64).fixed64(e.version);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
new p();
class h extends d.C {
    create(e) {
        let n = { disclosureType: 0 };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    a.disclosureType = e.int32();
                    break;
                case 2:
                    a.ackedAt = f.E.internalBinaryRead(e, e.uint32(), r, a.ackedAt);
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.disclosureType && n.tag(1, l.TD.Varint).int32(e.disclosureType), e.ackedAt && f.E.internalBinaryWrite(e.ackedAt, n.tag(2, l.TD.LengthDelimited).fork(), r).join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure', [
            {
                no: 1,
                name: 'disclosure_type',
                kind: 'enum',
                T: () => ['discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType', i]
            },
            {
                no: 2,
                name: 'acked_at',
                kind: 'message',
                T: () => f.E
            }
        ]);
    }
}
let _ = new h();
class m extends d.C {
    create(e) {
        let n = { ackedDisclosures: [] };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.ackedDisclosures.push(_.internalBinaryRead(e, e.uint32(), r));
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        for (let i = 0; i < e.ackedDisclosures.length; i++) _.internalBinaryWrite(e.ackedDisclosures[i], n.tag(1, l.TD.LengthDelimited).fork(), r).join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures', [
            {
                no: 1,
                name: 'acked_disclosures',
                kind: 'message',
                repeat: 1,
                T: () => _
            }
        ]);
    }
}
new m();
