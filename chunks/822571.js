n.d(t, { A: () => d });
var i = n(181370),
    r = n.n(i),
    a = n(925798),
    s = n(315069),
    l = n(927813),
    o = n(767589);
n(852218);
class d extends s.A {
    id;
    componentType;
    properties;
    promotionId;
    startDate;
    endDate;
    effectiveStartDate;
    effectiveEndDate;
    promotionEndDate;
    promotionPriority;
    static createFromServer(e, t) {
        let n = null != e.start_date ? new Date(e.start_date) : null,
            i = null != e.end_date ? new Date(e.end_date) : null,
            r = t?.startDate ?? null,
            s = t?.endDate ?? null;
        return new d({
            id: e.id,
            componentType: e.component_type,
            properties: (0, o.ii)(a.m, e.properties),
            promotionId: e.promotion_id,
            startDate: n,
            endDate: i,
            effectiveStartDate: n ?? r,
            effectiveEndDate: i ?? s,
            promotionEndDate: s,
            promotionPriority: t?.priority ?? 101,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties),
            (this.promotionId = e.promotionId),
            (this.startDate = e.startDate),
            (this.endDate = e.endDate),
            (this.effectiveStartDate = e.effectiveStartDate),
            (this.effectiveEndDate = e.effectiveEndDate),
            (this.promotionEndDate = e.promotionEndDate),
            (this.promotionPriority = e.promotionPriority));
    }
    getFormatVariableValues(e) {
        var t;
        let n;
        if (null == this.promotionEndDate) return {};
        let i = new Date();
        return {
            days_left:
                ((t = this.promotionEndDate), (n = t.getTime() - i.getTime()) > 0 ? Math.ceil(n / l.A.Millis.DAY) : 0),
            promotion_end_date: this.promotionEndDate.toLocaleDateString(e, {
                month: "long",
                day: "numeric",
                year: this.promotionEndDate.getFullYear() === i.getFullYear() ? void 0 : "numeric",
            }),
        };
    }
    get isTimed() {
        return null != this.startDate || null != this.endDate;
    }
    isIncludedInRollout(e, t) {
        if (!this.isTimed || null == this.effectiveStartDate) return !0;
        let n =
            1e4 * Math.min(1, Math.max(0, ((t.getTime() - this.effectiveStartDate.getTime()) / l.A.Millis.HOUR) * 0.2));
        return r().v3(`${this.promotionId}:${e}`) % 1e4 < n;
    }
}
