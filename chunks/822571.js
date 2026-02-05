"use strict";
n.d(t, { A: () => o });
var r = n(65412),
    i = n(638504),
    a = n(287683),
    s = n(315069);
class o extends s.A {
    id;
    componentType;
    properties;
    promotionId;
    static createFromServer(e) {
        let t = new TextDecoder("utf-8", { ignoreBOM: !0 });
        return new o({
            id: e.id,
            componentType: e.component_type,
            properties: a.m.fromBinary((0, r.A)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new i.V(e, t),
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
