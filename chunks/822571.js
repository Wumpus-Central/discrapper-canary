"use strict";
n.d(t, { A: () => l });
var i = n(65412),
    r = n(638504),
    a = n(934661),
    s = n(315069);
class l extends s.A {
    id;
    componentType;
    properties;
    promotionId;
    static createFromServer(e) {
        let t = new TextDecoder("utf-8", { ignoreBOM: !0 });
        return new l({
            id: e.id,
            componentType: e.component_type,
            properties: a.m.fromBinary((0, i.A)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new r.V(e, t),
            }),
            promotionId: e.promotion_id,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties),
            (this.promotionId = e.promotionId);
    }
}
