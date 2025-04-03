n.d(t, { t: () => c }), n(611060), n(47120), n(411104);
var r = n(230367),
    i = n(320215),
    l = n(240773),
    a = n(495852),
    o = n(740111);
class s extends a.C {
    create(e) {
        let t = {
            properties: { oneofKind: void 0 },
            contentIdentifier: ''
        };
        return (
            globalThis.Object.defineProperty(t, l.C, {
                enumerable: !1,
                value: this
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
                    l.properties = {
                        oneofKind: 'placeholder',
                        placeholder: e.string()
                    };
                    break;
                case 2:
                    l.properties = {
                        oneofKind: 'announcementModalVariant1',
                        announcementModalVariant1: o.xY.internalBinaryRead(e, e.uint32(), n, l.properties.announcementModalVariant1)
                    };
                    break;
                case 3:
                    l.contentIdentifier = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, l, t, i, s);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        'placeholder' === e.properties.oneofKind && t.tag(1, r.TD.LengthDelimited).string(e.properties.placeholder), 'announcementModalVariant1' === e.properties.oneofKind && o.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), '' !== e.contentIdentifier && t.tag(3, r.TD.LengthDelimited).string(e.contentIdentifier);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties', [
            {
                no: 1,
                name: 'placeholder',
                kind: 'scalar',
                oneof: 'properties',
                T: 9
            },
            {
                no: 2,
                name: 'announcement_modal_variant_1',
                kind: 'message',
                oneof: 'properties',
                T: () => o.xY
            },
            {
                no: 3,
                name: 'content_identifier',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let c = new s();
