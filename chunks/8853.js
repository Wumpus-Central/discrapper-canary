n.d(t, { t: () => c }), n(47120), n(411104);
var i = n(230367),
    l = n(320215),
    r = n(240773),
    a = n(495852),
    s = n(740111);
class o extends a.C {
    create(e) {
        let t = {
            properties: { oneofKind: void 0 },
            contentIdentifier: ''
        };
        return (
            globalThis.Object.defineProperty(t, r.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, l) {
        let r = null != l ? l : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, l] = e.tag();
            switch (t) {
                case 1:
                    r.properties = {
                        oneofKind: 'placeholder',
                        placeholder: e.string()
                    };
                    break;
                case 2:
                    r.properties = {
                        oneofKind: 'announcementModalVariant1',
                        announcementModalVariant1: s.xY.internalBinaryRead(e, e.uint32(), n, r.properties.announcementModalVariant1)
                    };
                    break;
                case 3:
                    r.contentIdentifier = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(l, ') for ').concat(this.typeName));
                    let o = e.skip(l);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, r, t, l, o);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        'placeholder' === e.properties.oneofKind && t.tag(1, i.TD.LengthDelimited).string(e.properties.placeholder), 'announcementModalVariant1' === e.properties.oneofKind && s.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, i.TD.LengthDelimited).fork(), n).join(), '' !== e.contentIdentifier && t.tag(3, i.TD.LengthDelimited).string(e.contentIdentifier);
        let l = n.writeUnknownFields;
        return !1 !== l && (!0 == l ? i.z.onWrite : l)(this.typeName, e, t), t;
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
                T: () => s.xY
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
let c = new o();
