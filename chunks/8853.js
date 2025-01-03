n.d(t, {
    t: function () {
        return c;
    }
}),
    n(47120),
    n(411104);
var i = n(230367),
    r = n(320215),
    l = n(240773),
    a = n(495852),
    s = n(740111);
class o extends a.C {
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
            void 0 !== e && (0, r.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let l = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
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
                        announcementModalVariant1: s.xY.internalBinaryRead(e, e.uint32(), n, l.properties.announcementModalVariant1)
                    };
                    break;
                case 3:
                    l.contentIdentifier = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, l, t, r, o);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        'placeholder' === e.properties.oneofKind && t.tag(1, i.TD.LengthDelimited).string(e.properties.placeholder), 'announcementModalVariant1' === e.properties.oneofKind && s.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, i.TD.LengthDelimited).fork(), n).join(), '' !== e.contentIdentifier && t.tag(3, i.TD.LengthDelimited).string(e.contentIdentifier);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
