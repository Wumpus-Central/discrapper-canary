"use strict";
n.d(t, { A: () => l });
var i = n(65412),
    r = n(638504),
    a = n(862706),
    s = n(315069);
class l extends s.A {
    id;
    componentType;
    properties;
    promotionId;
    startDate;
    endDate;
    effectiveStartDate;
    effectiveEndDate;
    static createFromServer(e, t) {
        let n = new TextDecoder("utf-8", { ignoreBOM: !0 }),
            s = null != e.start_date ? new Date(e.start_date) : null,
            o = null != e.end_date ? new Date(e.end_date) : null,
            d = t?.start_date != null ? new Date(t.start_date) : null,
            c = t?.end_date != null ? new Date(t.end_date) : null;
        return new l({
            id: e.id,
            componentType: e.component_type,
            properties: a.m.fromBinary((0, i.A)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new r.V(e, n),
            }),
            promotionId: e.promotion_id,
            startDate: s,
            endDate: o,
            effectiveStartDate: s ?? d,
            effectiveEndDate: o ?? c,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties),
            (this.promotionId = e.promotionId),
            (this.startDate = e.startDate),
            (this.endDate = e.endDate),
            (this.effectiveStartDate = e.effectiveStartDate),
            (this.effectiveEndDate = e.effectiveEndDate);
    }
    get isTimed() {
        return null != this.startDate || null != this.endDate;
    }
}
