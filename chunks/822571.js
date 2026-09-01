"use strict";
n.d(t, { A: () => c });
var i = n(65412),
    r = n(638504),
    a = n(181370),
    s = n.n(a),
    l = n(384939),
    o = n(315069),
    d = n(927813);
class c extends o.A {
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
            a = null != e.start_date ? new Date(e.start_date) : null,
            s = null != e.end_date ? new Date(e.end_date) : null,
            o = t?.startDate ?? null,
            d = t?.endDate ?? null;
        return new c({
            id: e.id,
            componentType: e.component_type,
            properties: l.m.fromBinary((0, i.A)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new r.V(e, n),
            }),
            promotionId: e.promotion_id,
            startDate: a,
            endDate: s,
            effectiveStartDate: a ?? o,
            effectiveEndDate: s ?? d,
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
    isIncludedInRollout(e, t) {
        if (!this.isTimed || null == this.effectiveStartDate) return !0;
        let n =
            1e4 * Math.min(1, Math.max(0, ((t.getTime() - this.effectiveStartDate.getTime()) / d.A.Millis.HOUR) * 0.2));
        return s().v3(`${this.promotionId}:${e}`) % 1e4 < n;
    }
}
